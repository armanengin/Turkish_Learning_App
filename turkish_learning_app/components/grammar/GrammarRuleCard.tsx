'use client';

import React from 'react';
import { GrammarPattern } from '../../types/grammar';
import { useGrammarTutor } from '../../contexts/GrammarTutorContext';

interface GrammarRuleCardProps {
  pattern: GrammarPattern;
  onClick?: () => void;
}

export default function GrammarRuleCard({ pattern, onClick }: GrammarRuleCardProps) {
  const { userProgress, savePattern } = useGrammarTutor();
  
  const isSaved = userProgress?.savedPatterns.includes(pattern.id) || false;
  
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-blue-100 text-blue-800',
    advanced: 'bg-purple-100 text-purple-800'
  };
  
  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    savePattern(pattern.id);
  };

  // Get formula to display - use single formula or first from array
  const displayFormula = pattern.formula || (pattern.formulas && pattern.formulas.length > 0 ? pattern.formulas[0] : '');
  
  return (
    <div 
      className="grammar-rule-card bg-white border rounded-lg shadow-sm hover:shadow-md transition-all p-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-turkish-blue">{pattern.name}</h3>
        <button 
          onClick={handleSaveClick}
          className="p-1 rounded-full hover:bg-gray-100"
          aria-label={isSaved ? "Remove from saved" : "Save for later"}
        >
          {isSaved ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-turkish-blue">
              <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a1.5 1.5 0 01-2.26 1.3l-7.5-4.351a1.5 1.5 0 00-1.5 0l-7.5 4.351A1.5 1.5 0 010 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
          )}
        </button>
      </div>
      
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${difficultyColors[pattern.difficulty]}`}>
          {pattern.difficulty}
        </span>
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700">
          {typeof pattern.category === 'string' ? pattern.category : 'Multiple'}
        </span>
        {pattern.categories && pattern.categories.length > 0 && (
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700">
            {pattern.categories.length} categories
          </span>
        )}
      </div>
      
      {pattern.summary ? (
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{pattern.summary}</p>
      ) : (
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{pattern.explanation}</p>
      )}
      
      <div className="text-xs font-medium text-gray-500 mb-2">Formula:</div>
      <div className="bg-gray-50 rounded p-2 mb-3 text-sm font-mono">
        {displayFormula}
      </div>
      
      {pattern.examples.length > 0 && (
        <div>
          <div className="text-xs font-medium text-gray-500 mb-1">Example:</div>
          <div className="bg-gray-50 rounded p-2">
            <div className="text-sm font-medium">{pattern.examples[0].turkish}</div>
            <div className="text-xs text-gray-600">{pattern.examples[0].english}</div>
          </div>
        </div>
      )}
    </div>
  );
}
