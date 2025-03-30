'use client';

import React, { useState } from 'react';
import { GrammarTutorMessage as GrammarTutorMessageType } from '../../types/grammar';
import WordBreakdown from './WordBreakdown';

interface GrammarTutorMessageProps {
  message: GrammarTutorMessageType;
}

export default function GrammarTutorMessage({ message }: GrammarTutorMessageProps) {
  const [showingAnswers, setShowingAnswers] = useState<Record<number, boolean>>({});
  
  const toggleAnswer = (index: number) => {
    setShowingAnswers(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  // Helper functions to render different message content types
  const renderWordBreakdown = () => {
    const breakdown = message.aiResponse?.wordBreakdown;
    if (!breakdown) return null;
    
    return (
      <WordBreakdown 
        word={breakdown.word} 
        breakdown={breakdown.breakdown} 
      />
    );
  };
  
  const renderGrammarRule = () => {
    const rule = message.aiResponse?.rule;
    if (!rule) return null;
    
    return (
      <div className="grammar-rule bg-white rounded-lg p-4 border shadow-sm mb-4">
        <h3 className="text-lg font-semibold mb-2 text-turkish-blue">{rule.name}</h3>
        
        <div className="mb-3">
          <div className="text-sm font-medium text-gray-500 mb-1">Formula:</div>
          <div className="bg-gray-50 rounded p-2 text-sm font-mono">
            {rule.formula}
          </div>
        </div>
        
        <div className="mb-3">
          <div className="text-sm font-medium text-gray-500 mb-1">Explanation:</div>
          <div className="text-sm text-gray-700">
            {rule.explanation}
          </div>
        </div>
        
        {rule.examples && rule.examples.length > 0 && (
          <div>
            <div className="text-sm font-medium text-gray-500 mb-1">Examples:</div>
            <div className="space-y-2">
              {rule.examples.map((example, index) => (
                <div key={index} className="bg-gray-50 rounded p-2">
                  <div className="text-sm font-medium">{example.turkish}</div>
                  <div className="text-xs text-gray-600">{example.english}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  const renderExercise = () => {
    const exercise = message.aiResponse?.exercise;
    if (!exercise) return null;
    
    // Additional safety check to ensure items is an array
    const exerciseItems = Array.isArray(exercise.items) 
      ? exercise.items 
      : [];
    
    // If no valid items, don't render the exercise section
    if (exerciseItems.length === 0) return null;
    
    return (
      <div className="grammar-exercise bg-white rounded-lg p-4 border shadow-sm mb-4">
        <h3 className="text-lg font-semibold mb-3 text-turkish-blue">Practice Exercise</h3>
        
        <div className="mb-3 text-sm text-gray-700">
          {exercise.description}
        </div>
        
        <div className="space-y-3">
          {exerciseItems.map((item, index) => {
            // Validate that we have proper exercise data
            if (!item || typeof item !== 'object') return null;
            
            const prompt = typeof item.prompt === 'string' ? item.prompt : '';
            const answer = typeof item.answer === 'string' ? item.answer : '';
            const rule = typeof item.rule === 'string' ? item.rule : 'Grammar rule';
            
            // Skip items with empty prompts
            if (!prompt.trim()) return null;
            
            return (
              <div key={index} className="exercise-item bg-gray-50 rounded-lg p-3">
                <div className="text-sm font-medium mb-2">
                  {prompt}
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleAnswer(index)}
                    className="text-xs bg-turkish-blue text-white rounded px-3 py-1 hover:bg-turkish-blue-dark transition-colors"
                  >
                    {showingAnswers[index] ? 'Hide Answer' : 'Show Answer'}
                  </button>
                  
                  {showingAnswers[index] && answer && (
                    <div className="text-sm font-medium text-turkish-blue">
                      {answer}
                    </div>
                  )}
                </div>
                
                {showingAnswers[index] && item.rule && (
                  <div className="mt-2 text-xs text-gray-500">
                    Rule: {rule}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  // Advanced function to clean content of any JSON-like strings
  const cleanContentOfJsonPatterns = (content: string): string => {
    // Start with a copy of the content
    let cleaned = content;
    
    // Remove JSON objects with specific properties
    cleaned = cleaned.replace(/\{[\s\S]*?"prompt"[\s\S]*?"answer"[\s\S]*?\}/g, '');
    cleaned = cleaned.replace(/\[\s*\{[\s\S]*?\}\s*\]/g, '');                     // Remove JSON arrays
    cleaned = cleaned.replace(/\{\s*"items"[\s\S]*?\}/g, '');                     // Remove exercise items objects
    
    // Remove markdown code blocks containing JSON
    cleaned = cleaned.replace(/```(?:json)?\s*\{[\s\S]*?\}\s*```/g, '');
    cleaned = cleaned.replace(/```(?:json)?\s*\[[\s\S]*?\]\s*```/g, '');
    
    // Remove sections that look like exercise formatting
    cleaned = cleaned.replace(/ITEMS:[\s\S]*?\[[\s\S]*?\]/g, '');
    cleaned = cleaned.replace(/EXERCISE:[\s\S]*?ITEMS:/g, 'EXERCISE:');
    
    // Remove any lingering LLM formatting patterns
    cleaned = cleaned.replace(/Here's the structured response:/g, '');
    cleaned = cleaned.replace(/Here are some practice exercises:/g, '');
    
    // Replace multiple newlines with just two (clean up spacing)
    cleaned = cleaned.replace(/\n{3,}/g, '\n\n');
    
    // Final cleanup
    return cleaned.trim();
  };
  
  // Simple function to format text with basic markdown-like styling
  const formatTextWithStyles = (text: string) => {
    // Apply very basic formatting
    const paragraphs = text.split('\n\n').filter(p => p.trim().length > 0);
    
    return (
      <>
        {paragraphs.map((paragraph, idx) => (
          <p key={idx} className="mb-2 last:mb-0">
            {paragraph.split('\n').map((line, lineIdx) => {
              // Add basic styling for markdown-like formatting
              let styledLine = line;
              
              // Bold text (** or __)
              styledLine = styledLine.replace(
                /(\*\*|__)(.*?)\1/g, 
                '<strong>$2</strong>'
              );
              
              // Italic text (* or _)
              styledLine = styledLine.replace(
                /(\*|_)(.*?)\1/g, 
                '<em>$2</em>'
              );
              
              return (
                <React.Fragment key={lineIdx}>
                  <span dangerouslySetInnerHTML={{ __html: styledLine }} />
                  {lineIdx < paragraph.split('\n').length - 1 && <br />}
                </React.Fragment>
              );
            })}
          </p>
        ))}
      </>
    );
  };
  
  // Get the cleaned content for the message
  const getCleanedContent = () => {
    return message.role === 'tutor' 
      ? cleanContentOfJsonPatterns(message.content)
      : message.content;
  };
  
  // Check if there is meaningful content after cleaning
  const hasMeaningfulContent = () => {
    const cleaned = getCleanedContent();
    return cleaned.trim().length > 0 && 
           !cleaned.includes('"prompt":') && 
           !cleaned.includes('"items":');
  };
  
  return (
    <div 
      className={`grammar-tutor-message mb-4 ${
        message.role === 'user' ? 'user-message' : 'tutor-message'
      }`}
    >
      <div 
        className={`
          px-4 py-3 rounded-lg 
          ${message.role === 'user' 
            ? 'bg-turkish-blue text-white ml-auto max-w-[80%]' 
            : 'bg-white border shadow-sm mr-auto max-w-[90%]'}
        `}
      >
        {/* Regular message content - only show if it has meaningful content */}
        {hasMeaningfulContent() && (
          <div className="mb-2 prose prose-sm">
            {formatTextWithStyles(getCleanedContent())}
          </div>
        )}
        
        {/* Structured content from AI */}
        {message.role === 'tutor' && message.aiResponse && (
          <div className={`${hasMeaningfulContent() ? 'mt-4' : ''}`}>
            {message.aiResponse.wordBreakdown && renderWordBreakdown()}
            {message.aiResponse.rule && renderGrammarRule()}
            {message.aiResponse.exercise && renderExercise()}
          </div>
        )}
        
        {/* Message timestamp */}
        <div 
          className={`
            text-xs mt-1 text-right
            ${message.role === 'user' ? 'text-blue-100' : 'text-gray-400'}
          `}
        >
          {new Date(message.timestamp).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
          })}
        </div>
      </div>
    </div>
  );
}
