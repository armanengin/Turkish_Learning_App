'use client';

import React, { useState } from 'react';

interface GrammarTutorInputProps {
  onSendMessage: (message: string) => void;
  onRequestWordBreakdown: (word: string) => void;
  isLoading: boolean;
}

export default function GrammarTutorInput({ 
  onSendMessage, 
  onRequestWordBreakdown,
  isLoading 
}: GrammarTutorInputProps) {
  const [message, setMessage] = useState('');
  const [mode, setMode] = useState<'chat' | 'analyze'>('chat');
  const [analyzeText, setAnalyzeText] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (mode === 'chat' && message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage('');
    } else if (mode === 'analyze' && analyzeText.trim() && !isLoading) {
      onRequestWordBreakdown(analyzeText.trim());
      setAnalyzeText('');
    }
  };
  
  const handleQuickQuestion = (question: string) => {
    if (!isLoading) {
      onSendMessage(question);
    }
  };
  
  return (
    <div className="grammar-tutor-input border-t pt-4">
      {/* Mode toggle */}
      <div className="flex mb-4 bg-gray-100 rounded-lg p-0.5">
        <button
          onClick={() => setMode('chat')}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
            mode === 'chat' 
              ? 'bg-white text-turkish-blue shadow' 
              : 'text-gray-600 hover:text-turkish-blue'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block h-4 w-4 mr-1">
            <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
          </svg>
          Ask Question
        </button>
        <button
          onClick={() => setMode('analyze')}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
            mode === 'analyze' 
              ? 'bg-white text-turkish-blue shadow' 
              : 'text-gray-600 hover:text-turkish-blue'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block h-4 w-4 mr-1">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
          </svg>
          Analyze Word
        </button>
      </div>
      
      {/* Suggested questions (only in chat mode) */}
      {mode === 'chat' && (
        <div className="quick-questions mb-4 flex flex-wrap gap-2">
          <button
            onClick={() => handleQuickQuestion("Can you explain this grammar rule in simpler terms?")}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full px-3 py-1.5 transition-colors"
          >
            Simplify explanation
          </button>
          <button
            onClick={() => handleQuickQuestion("Can you give me more examples?")}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full px-3 py-1.5 transition-colors"
          >
            More examples
          </button>
          <button
            onClick={() => handleQuickQuestion("How does this compare to English?")}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full px-3 py-1.5 transition-colors"
          >
            Compare to English
          </button>
          <button
            onClick={() => handleQuickQuestion("Give me practice exercises for this grammar rule")}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full px-3 py-1.5 transition-colors"
          >
            Practice exercises
          </button>
        </div>
      )}
      
      {/* Input form */}
      <form onSubmit={handleSubmit} className="relative">
        {mode === 'chat' ? (
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about this grammar pattern..."
            className="w-full px-4 py-3 pr-12 rounded-lg border focus:outline-none focus:ring-2 focus:ring-turkish-blue focus:border-transparent"
            disabled={isLoading}
          />
        ) : (
          <input
            type="text"
            value={analyzeText}
            onChange={(e) => setAnalyzeText(e.target.value)}
            placeholder="Enter a Turkish word to analyze..."
            className="w-full px-4 py-3 pr-12 rounded-lg border focus:outline-none focus:ring-2 focus:ring-turkish-blue focus:border-transparent"
            disabled={isLoading}
          />
        )}
        
        <button
          type="submit"
          disabled={isLoading || (mode === 'chat' ? !message.trim() : !analyzeText.trim())}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-turkish-blue hover:text-turkish-blue-dark p-2 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
          </svg>
        </button>
      </form>
      
      {/* Loading indicator */}
      {isLoading && (
        <div className="mt-2 text-xs text-center text-gray-500">
          {mode === 'chat' ? 'Tutor is typing...' : 'Analyzing word...'}
        </div>
      )}
    </div>
  );
}
