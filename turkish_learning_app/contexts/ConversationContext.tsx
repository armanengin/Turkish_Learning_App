'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { Character, Scenario, Message, Conversation } from '../types';
import { generateAIResponse } from '../lib/api';

interface ConversationContextType {
  activeCharacter: Character | null;
  activeScenario: Scenario | null;
  messages: Message[];
  isLoading: boolean;
  setActiveCharacter: (character: Character) => void;
  setActiveScenario: (scenario: Scenario) => void;
  startConversation: () => void;
  sendMessage: (content: string) => Promise<void>;
  resetConversation: () => void;
}

const ConversationContext = createContext<ConversationContextType | undefined>(undefined);

export function ConversationProvider({ children }: { children: React.ReactNode }) {
  const [activeCharacter, setActiveCharacter] = useState<Character | null>(null);
  const [activeScenario, setActiveScenario] = useState<Scenario | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [conversations, setConversations] = useState<Record<string, Message[]>>({});

  // Load conversations from localStorage on mount
  useEffect(() => {
    const savedConversationsJson = localStorage.getItem('conversations');
    if (savedConversationsJson) {
      try {
        const savedConversations = JSON.parse(savedConversationsJson);
        const conversationsMap: Record<string, Message[]> = {};
        
        savedConversations.forEach((conv: Conversation) => {
          const key = `${conv.characterId}-${conv.scenarioId}`;
          conversationsMap[key] = conv.messages;
        });
        
        setConversations(conversationsMap);
      } catch (error) {
        console.error('Error loading conversations:', error);
      }
    }
  }, []);

  // Update messages when character or scenario changes
  useEffect(() => {
    if (activeCharacter && activeScenario) {
      const key = `${activeCharacter.id}-${activeScenario.id}`;
      const existingConversation = conversations[key];
      
      if (existingConversation && existingConversation.length > 0) {
        // Load existing conversation
        setMessages(existingConversation);
        setConversationId(key);
      } else {
        // Start a new conversation
        resetConversation();
      }
    }
  }, [activeCharacter, activeScenario]);

  const startConversation = () => {
    if (!activeCharacter || !activeScenario) return;

    // Create initial system message
    const initialMessage: Message = {
      id: Date.now().toString(),
      role: 'assistant',
      content: {
        turkish: `Merhaba! Ben ${activeCharacter.name}. ${activeScenario.title} için konuşmaya hazırım.`,
        english: `Hello! I'm ${activeCharacter.name}. I'm ready to talk about ${activeScenario.title}.`
      },
      timestamp: Date.now()
    };

    // Use the character-scenario combo as the key
    const key = `${activeCharacter.id}-${activeScenario.id}`;
    
    // Set the new messages
    setMessages([initialMessage]);
    setConversationId(key);
    
    // Update conversations map
    const updatedConversations = {
      ...conversations,
      [key]: [initialMessage]
    };
    
    setConversations(updatedConversations);
    
    // Save to localStorage
    saveConversationsToStorage(updatedConversations);
  };

  const saveConversationsToStorage = (conversationsMap: Record<string, Message[]>) => {
    // Convert the map to the saved format
    const savedFormat = Object.entries(conversationsMap).map(([key, msgs]) => {
      const [characterId, scenarioId] = key.split('-');
      return {
        id: key,
        characterId,
        scenarioId,
        messages: msgs,
        startTime: msgs[0]?.timestamp || Date.now()
      };
    });
    
    localStorage.setItem('conversations', JSON.stringify(savedFormat));
  };

  const sendMessage = async (content: string) => {
    if (!activeCharacter || !activeScenario || !conversationId) return;
    
    setIsLoading(true);
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: {
        turkish: content,
        english: content // We'll assume this could be either language
      },
      timestamp: Date.now()
    };
    
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    
    try {
      // Format messages for the API call
      const apiMessages = updatedMessages.map(msg => ({
        role: msg.role,
        content: msg.role === 'user' ? msg.content.turkish || msg.content.english : 
                                      `${msg.content.turkish}\n${msg.content.english}`
      }));
      
      // Call the actual API using our api.ts file
      const response = await generateAIResponse(
        activeCharacter,
        activeScenario,
        apiMessages
      );
      
      // Create a proper message from the AI response
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: {
          turkish: response.turkish,
          english: response.english
        },
        grammarNotes: response.grammarNotes,
        highlightedVocabulary: response.vocabulary?.map(v => ({
          word: v.word,
          translation: v.translation
        })),
        timestamp: Date.now() + 1
      };
      
      const finalMessages = [...updatedMessages, aiMessage];
      setMessages(finalMessages);
      
      // Update the conversations map
      const updatedConversations = {
        ...conversations,
        [conversationId]: finalMessages
      };
      
      setConversations(updatedConversations);
      
      // Save to localStorage
      saveConversationsToStorage(updatedConversations);
      
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add a fallback error message if the API call fails
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: {
          turkish: "Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.",
          english: "Sorry, an error occurred. Please try again."
        },
        timestamp: Date.now() + 1
      };
      
      setMessages([...updatedMessages, errorMessage]);
      
    } finally {
      setIsLoading(false);
    }
  };

  const resetConversation = () => {
    setMessages([]);
    // We don't reset conversationId here because we still need the character/scenario reference
  };

  return (
    <ConversationContext.Provider value={{
      activeCharacter,
      activeScenario,
      messages,
      isLoading,
      setActiveCharacter,
      setActiveScenario,
      startConversation,
      sendMessage,
      resetConversation
    }}>
      {children}
    </ConversationContext.Provider>
  );
}

export function useConversation() {
  const context = useContext(ConversationContext);
  if (context === undefined) {
    throw new Error('useConversation must be used within a ConversationProvider');
  }
  return context;
}
