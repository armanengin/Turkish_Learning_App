'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { GrammarPattern, GrammarTutorMessage, GrammarProgress, GrammarDifficulty } from '../types/grammar';
import { getPatternById } from '../data/grammarPatterns';
import { generateGrammarExplanation } from '../lib/grammarApi';

interface GrammarTutorContextType {
  activePattern: GrammarPattern | null;
  tutorMessages: GrammarTutorMessage[];
  isLoading: boolean;
  userProgress: GrammarProgress | null;
  setActivePattern: (pattern: GrammarPattern | null) => void;
  sendMessage: (content: string) => Promise<void>;
  getWordBreakdown: (word: string) => Promise<void>;
  getPracticeExercises: (patternId: string) => Promise<void>;
  savePattern: (patternId: string) => void;
  resetTutorConversation: () => void;
}

const GrammarTutorContext = createContext<GrammarTutorContextType | undefined>(undefined);

// Helper function to clean content of any JSON patterns
const cleanContentOfJsonPatterns = (content: string): string => {
  return content
    .replace(/\{[\s\S]*?"prompt"[\s\S]*?"answer"[\s\S]*?\}/g, '') // Remove JSON objects with prompt/answer
    .replace(/\[\s*\{[\s\S]*?\}\s*\]/g, '')                      // Remove JSON arrays
    .replace(/\{\s*"items"[\s\S]*?\}/g, '')                      // Remove exercise items objects
    .replace(/```json[\s\S]*?```/g, '')                          // Remove markdown code blocks with JSON
    .replace(/ITEMS:[\s\S]*?\[[\s\S]*?\]/g, '')                  // Remove ITEMS: section with array
    .replace(/EXERCISE:[\s\S]*?ITEMS:/g, 'EXERCISE:')            // Clean up exercise descriptions
    .trim();
};

export function GrammarTutorProvider({ children }: { children: React.ReactNode }) {
  const [activePattern, setActivePattern] = useState<GrammarPattern | null>(null);
  const [tutorMessages, setTutorMessages] = useState<GrammarTutorMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userProgress, setUserProgress] = useState<GrammarProgress | null>(null);

  // Load user progress from localStorage on mount
  useEffect(() => {
    const savedProgressJson = localStorage.getItem('grammarProgress');
    if (savedProgressJson) {
      try {
        const savedProgress = JSON.parse(savedProgressJson);
        setUserProgress(savedProgress);
      } catch (error) {
        console.error('Error loading grammar progress:', error);
        initializeUserProgress();
      }
    } else {
      initializeUserProgress();
    }
  }, []);

  // Initialize default user progress
  const initializeUserProgress = () => {
    const defaultProgress: GrammarProgress = {
      userId: 'default-user', // In a real app, get this from auth
      completedPatterns: [],
      savedPatterns: [],
      recentlyViewed: []
    };
    
    setUserProgress(defaultProgress);
    localStorage.setItem('grammarProgress', JSON.stringify(defaultProgress));
  };

  // Update progress when viewing a pattern
  useEffect(() => {
    if (activePattern && userProgress) {
      const updatedProgress = { ...userProgress };
      
      // Add to recently viewed if not already the most recent
      if (updatedProgress.recentlyViewed[0] !== activePattern.id) {
        updatedProgress.recentlyViewed = [
          activePattern.id,
          ...updatedProgress.recentlyViewed.filter(id => id !== activePattern.id)
        ].slice(0, 10); // Keep only most recent 10
        
        setUserProgress(updatedProgress);
        localStorage.setItem('grammarProgress', JSON.stringify(updatedProgress));
      }
    }
  }, [activePattern]);

  // Start a tutor conversation about a grammar pattern
  useEffect(() => {
    if (activePattern && tutorMessages.length === 0) {
      const initialMessage: GrammarTutorMessage = {
        id: Date.now().toString(),
        role: 'tutor',
        content: `Let's learn about **${activePattern.name}**. What would you like to know?`,
        timestamp: Date.now()
      };
      
      setTutorMessages([initialMessage]);
    }
  }, [activePattern]);

  // Send message to grammar tutor
  const sendMessage = async (content: string) => {
    if (!activePattern) return;
    
    setIsLoading(true);
    
    // Add user message
    const userMessage: GrammarTutorMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: Date.now()
    };
    
    const updatedMessages = [...tutorMessages, userMessage];
    setTutorMessages(updatedMessages);
    
    try {
      // Call AI to generate grammar explanation
      const response = await generateGrammarExplanation(
        content,
        activePattern,
        updatedMessages.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'assistant',
          content: msg.content
        }))
      );
      
      // Clean and create tutor response
      const cleanedExplanation = cleanContentOfJsonPatterns(response.explanation);
      
      const tutorResponse: GrammarTutorMessage = {
        id: (Date.now() + 1).toString(),
        role: 'tutor',
        content: cleanedExplanation,
        timestamp: Date.now() + 1,
        aiResponse: response.structuredData
      };
      
      setTutorMessages([...updatedMessages, tutorResponse]);
      
      // Update user progress if needed
      if (userProgress) {
        const patternIndex = userProgress.completedPatterns.findIndex(
          p => p.patternId === activePattern.id
        );
        
        if (patternIndex >= 0) {
          // Update existing pattern progress
          const updatedProgress = { ...userProgress };
          updatedProgress.completedPatterns[patternIndex].lastPracticed = Date.now();
          // Optionally adjust proficiency based on interaction
          
          setUserProgress(updatedProgress);
          localStorage.setItem('grammarProgress', JSON.stringify(updatedProgress));
        }
      }
    } catch (error) {
      console.error('Error sending message to grammar tutor:', error);
      
      // Add an error message
      const errorMessage: GrammarTutorMessage = {
        id: (Date.now() + 1).toString(),
        role: 'tutor',
        content: "I'm sorry, I couldn't process your request. Please try again.",
        timestamp: Date.now() + 1
      };
      
      setTutorMessages([...updatedMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Get breakdown of a specific Turkish word
  const getWordBreakdown = async (word: string) => {
    if (!word.trim()) return;
    
    setIsLoading(true);
    
    // Add user message asking for word breakdown
    const userMessage: GrammarTutorMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: `Can you break down this word: "${word}"?`,
      timestamp: Date.now()
    };
    
    const updatedMessages = [...tutorMessages, userMessage];
    setTutorMessages(updatedMessages);
    
    try {
      // Call AI to generate word breakdown
      const response = await generateGrammarExplanation(
        `Break down this Turkish word: ${word}`,
        null,
        updatedMessages.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'assistant',
          content: msg.content
        }))
      );
      
      // Clean and create tutor response
      const cleanedExplanation = cleanContentOfJsonPatterns(response.explanation);
      
      // Create tutor response with word breakdown
      const tutorResponse: GrammarTutorMessage = {
        id: (Date.now() + 1).toString(),
        role: 'tutor',
        content: cleanedExplanation,
        timestamp: Date.now() + 1,
        aiResponse: response.structuredData
      };
      
      setTutorMessages([...updatedMessages, tutorResponse]);
    } catch (error) {
      console.error('Error getting word breakdown:', error);
      
      // Add an error message
      const errorMessage: GrammarTutorMessage = {
        id: (Date.now() + 1).toString(),
        role: 'tutor',
        content: `I'm sorry, I couldn't analyze the word "${word}". Please try again.`,
        timestamp: Date.now() + 1
      };
      
      setTutorMessages([...updatedMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Get practice exercises for a grammar pattern
  const getPracticeExercises = async (patternId: string) => {
    const pattern = getPatternById(patternId);
    if (!pattern) return;
    
    setIsLoading(true);
    
    // Add user message requesting exercises
    const userMessage: GrammarTutorMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: `Can I see some practice exercises for ${pattern.name}?`,
      timestamp: Date.now()
    };
    
    const updatedMessages = [...tutorMessages, userMessage];
    setTutorMessages(updatedMessages);
    
    try {
      // Call AI to generate exercises with proper context
      const response = await generateGrammarExplanation(
        `Create 5 practice exercises for the Turkish grammar pattern: ${pattern.name}. 
         Make sure to format them properly with clear prompts and answers. 
         DO NOT include raw JSON in your response text.`,
        pattern,
        updatedMessages.slice(-5).map(msg => ({
          role: msg.role === 'user' ? 'user' : 'assistant',
          content: msg.content
        }))
      );
      
      // Clean the explanation of any JSON or exercise format leaks
      const cleanedExplanation = cleanContentOfJsonPatterns(response.explanation);
      
      // Create a clean message about the exercises
      let exerciseMessage = `Here are some practice exercises for **${pattern.name}**:`;
      
      // Only add the explanation if it doesn't look like raw JSON
      if (cleanedExplanation && !cleanedExplanation.includes('"prompt":') && 
          !cleanedExplanation.includes('"items":')) {
        exerciseMessage += `\n\n${cleanedExplanation}`;
      }
      
      // Create tutor response with exercises
      const tutorResponse: GrammarTutorMessage = {
        id: (Date.now() + 1).toString(),
        role: 'tutor',
        content: exerciseMessage,
        timestamp: Date.now() + 1,
        aiResponse: response.structuredData
      };
      
      setTutorMessages([...updatedMessages, tutorResponse]);
    } catch (error) {
      console.error('Error generating exercises:', error);
      
      // Add an error message
      const errorMessage: GrammarTutorMessage = {
        id: (Date.now() + 1).toString(),
        role: 'tutor',
        content: `I'm sorry, I couldn't generate exercises for ${pattern.name}. Please try again.`,
        timestamp: Date.now() + 1
      };
      
      setTutorMessages([...updatedMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Save a pattern to user's saved list
  const savePattern = (patternId: string) => {
    if (!userProgress) return;
    
    const updatedProgress = { ...userProgress };
    
    // Toggle saved status
    if (updatedProgress.savedPatterns.includes(patternId)) {
      updatedProgress.savedPatterns = updatedProgress.savedPatterns.filter(id => id !== patternId);
    } else {
      updatedProgress.savedPatterns.push(patternId);
    }
    
    setUserProgress(updatedProgress);
    localStorage.setItem('grammarProgress', JSON.stringify(updatedProgress));
  };

  // Reset the tutor conversation
  const resetTutorConversation = () => {
    setTutorMessages([]);
  };

  return (
    <GrammarTutorContext.Provider value={{
      activePattern,
      tutorMessages,
      isLoading,
      userProgress,
      setActivePattern,
      sendMessage,
      getWordBreakdown,
      getPracticeExercises,
      savePattern,
      resetTutorConversation
    }}>
      {children}
    </GrammarTutorContext.Provider>
  );
}

export function useGrammarTutor() {
  const context = useContext(GrammarTutorContext);
  if (context === undefined) {
    throw new Error('useGrammarTutor must be used within a GrammarTutorProvider');
  }
  return context;
}
