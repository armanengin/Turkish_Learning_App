'use client';

import React, { useState, useEffect } from 'react';
import GrammarPatternBrowser from './GrammarPatternBrowser';
import GrammarTutorInterface from './GrammarTutorInterface';
import { useGrammarTutor } from '../../contexts/GrammarTutorContext';

interface GrammarTutorProps {
  onClose?: () => void;
  className?: string;
}

export default function GrammarTutor({ onClose, className = '' }: GrammarTutorProps) {
  const { activePattern, setActivePattern } = useGrammarTutor();
  const [view, setView] = useState<'browser' | 'tutor'>(activePattern ? 'tutor' : 'browser');
  
  // Update view when activePattern changes
  useEffect(() => {
    if (activePattern) {
      setView('tutor');
    } else {
      setView('browser');
    }
  }, [activePattern]);
  
  const handlePatternClose = () => {
    setActivePattern(null);
    setView('browser');
  };
  
  return (
    <div className={`grammar-tutor-container bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full ${className}`}>
      {/* Header */}
      <header className="p-4 border-b flex items-center justify-between bg-turkish-blue text-white">
        <div className="flex items-center">
          {view === 'tutor' && (
            <button
              onClick={handlePatternClose}
              className="mr-3 text-white hover:text-blue-100 transition-colors"
              aria-label="Back to pattern browser"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
          )}
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            <h1 className="text-xl font-bold">
              {view === 'browser' ? 'Grammar Explorer' : 'Grammar Tutor'}
            </h1>
          </div>
        </div>
        
        {onClose && (
          <button
            onClick={onClose}
            className="text-sm bg-white/10 hover:bg-white/20 rounded-md px-3 py-1.5 transition-colors"
          >
            Return to Conversation
          </button>
        )}
      </header>
      
      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {view === 'browser' ? (
          <div className="h-full overflow-y-auto p-4">
            <GrammarPatternBrowser />
          </div>
        ) : (
          <GrammarTutorInterface onClose={handlePatternClose} />
        )}
      </div>
    </div>
  );
}
