'use client';

import React, { useRef, useEffect } from 'react';
import { useGrammarTutor } from '../../contexts/GrammarTutorContext';
import GrammarTutorMessage from './GrammarTutorMessage';
import GrammarTutorInput from './GrammarTutorInput';
import GrammarRuleCard from './GrammarRuleCard';

interface GrammarTutorInterfaceProps {
  onClose?: () => void;
}

export default function GrammarTutorInterface({ onClose }: GrammarTutorInterfaceProps) {
  const { 
    activePattern, 
    tutorMessages, 
    isLoading, 
    setActivePattern,
    sendMessage, 
    getWordBreakdown,
    getPracticeExercises 
  } = useGrammarTutor();
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom of messages when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [tutorMessages]);
  
  const handleRequestPractice = () => {
    if (activePattern) {
      getPracticeExercises(activePattern.id);
    }
  };
  
  const handleResetPattern = () => {
    setActivePattern(null);
  };
  
  if (!activePattern) {
    return (
      <div className="grammar-tutor-no-pattern flex flex-col items-center justify-center h-full p-8 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-16 w-16 text-turkish-blue mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
        <h2 className="text-xl font-bold text-turkish-blue mb-2">Grammar Tutor</h2>
        <p className="text-gray-600 mb-6">
          Select a grammar pattern from the library to start learning.
        </p>
        {onClose && (
          <button
            onClick={onClose}
            className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md px-4 py-2 transition-colors"
          >
            Return to Conversation
          </button>
        )}
      </div>
    );
  }
  
  return (
    <div className="grammar-tutor-interface flex flex-col h-full">
      {/* Header with current pattern info */}
      <div className="grammar-tutor-header px-4 py-3 border-b bg-white flex items-center">
        <button
          onClick={handleResetPattern}
          className="mr-3 text-gray-500 hover:text-turkish-blue"
          aria-label="Back to pattern selection"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        
        <div className="flex-1">
          <h2 className="text-lg font-bold text-turkish-blue">{activePattern.name}</h2>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full 
              ${activePattern.difficulty === 'beginner' ? 'bg-green-100 text-green-800' : 
                activePattern.difficulty === 'intermediate' ? 'bg-blue-100 text-blue-800' : 
                'bg-purple-100 text-purple-800'}`}
            >
              {activePattern.difficulty}
            </span>
            <span className="text-xs text-gray-500">{activePattern.category}</span>
          </div>
        </div>
        
        <button
          onClick={handleRequestPractice}
          className="ml-2 text-xs bg-turkish-blue hover:bg-turkish-blue-dark text-white rounded-md px-3 py-1 transition-colors"
        >
          Practice
        </button>
        
        {onClose && (
          <button
            onClick={onClose}
            className="ml-2 text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md px-3 py-1 transition-colors"
          >
            Exit
          </button>
        )}
      </div>
      
      {/* Messages area */}
      <div className="grammar-tutor-messages flex-1 overflow-y-auto p-4 bg-gray-50">
        {tutorMessages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-4">
            <div className="mb-4 w-full max-w-md">
              <GrammarRuleCard pattern={activePattern} />
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Ask the tutor any questions about this grammar pattern.
            </p>
          </div>
        ) : (
          <>
            {tutorMessages.map((message) => (
              <GrammarTutorMessage
                key={message.id}
                message={message}
              />
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>
      
      {/* Input area */}
      <div className="grammar-tutor-controls p-4 bg-white border-t">
        <GrammarTutorInput
          onSendMessage={sendMessage}
          onRequestWordBreakdown={getWordBreakdown}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
