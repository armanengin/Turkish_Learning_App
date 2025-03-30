'use client';

import React from 'react';

interface GrammarTutorButtonProps {
  onClick: () => void;
  className?: string;
}

export default function GrammarTutorButton({ onClick, className = '' }: GrammarTutorButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`grammar-tutor-button flex items-center gap-2 px-4 py-2 rounded-lg bg-turkish-blue-light hover:bg-turkish-blue text-turkish-blue hover:text-white transition-colors ${className}`}
      aria-label="Open Grammar Tutor"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
      <span className="font-medium">Grammar Tutor</span>
    </button>
  );
}
