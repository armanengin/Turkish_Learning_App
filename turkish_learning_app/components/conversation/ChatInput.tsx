'use client';

import { useState } from 'react';
import { DifficultyLevel } from '../../types';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  difficultyLevel: DifficultyLevel;
  suggestedResponses?: {
    turkish: string;
    english: string;
  }[];
}

export default function ChatInput({ 
  onSendMessage, 
  isLoading, 
  difficultyLevel,
  suggestedResponses 
}: ChatInputProps) {
  const [message, setMessage] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage('');
      
      // Show suggestions again after sending a message
      setShowSuggestions(true);
    }
  };
  
  const handleQuickResponse = (response: string) => {
    if (!isLoading) {
      onSendMessage(response);
      setMessage('');
    }
    setShowSuggestions(false);
  };
  
  return (
    <div className="border-t pt-4">
      {/* Suggested responses for beginners */}
      {(difficultyLevel === 'beginner') && 
       suggestedResponses && 
       suggestedResponses.length > 0 && 
       showSuggestions && (
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">Suggested responses:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedResponses.map((response, index) => (
              <button
                key={index}
                onClick={() => handleQuickResponse(response.turkish)}
                className="px-3 py-1 bg-turkish-blue bg-opacity-10 hover:bg-opacity-20 
                         text-turkish-blue rounded-lg text-sm transition-colors"
                title={response.english}
              >
                {response.turkish}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isLoading}
          placeholder={isLoading ? "Waiting for response..." : "Type your message in English or Turkish..."}
          className="turkish-input flex-grow"
        />
        
        <button
          type="submit"
          disabled={!message.trim() || isLoading}
          className={`turkish-button ${!message.trim() || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Send
        </button>
      </form>
      
      {/* Translation assistance based on level */}
      {(difficultyLevel === 'beginner') && (
        <div className="mt-2 text-xs text-gray-500">
          <p>
            You can write in English, and the character will respond in simple Turkish with translations.
          </p>
        </div>
      )}
      
      {difficultyLevel === 'intermediate' && (
        <div className="mt-2 text-xs text-gray-500">
          <p>
            Try writing in basic Turkish. The character will help with corrections and explanations.
          </p>
        </div>
      )}
      
      {difficultyLevel === 'advanced' && (
        <div className="mt-2 text-xs text-gray-500">
          <p>
            Practice your Turkish freely. The character will respond naturally with minimal translations.
          </p>
        </div>
      )}
    </div>
  );
}
