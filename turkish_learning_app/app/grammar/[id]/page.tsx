'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getPatternById } from '../../../data/grammarPatterns';
import { GrammarPattern } from '../../../types/grammar';
import GrammarLessonDetail from '../../../components/grammar/GrammarLessonDetail';
import { GrammarTutorProvider } from '../../../contexts/GrammarTutorContext';
import Link from 'next/link';

export default function GrammarPatternPage() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : '';
  
  const [pattern, setPattern] = useState<GrammarPattern | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      try {
        const patternData = getPatternById(id);
        if (patternData) {
          setPattern(patternData);
        } else {
          setError(`Grammar pattern "${id}" not found.`);
        }
      } catch (err) {
        console.error('Error loading grammar pattern:', err);
        setError('Failed to load grammar pattern.');
      } finally {
        setLoading(false);
      }
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
        </div>
      </div>
    );
  }

  if (error || !pattern) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-4">
          <p>{error || 'Grammar pattern not found.'}</p>
        </div>
        <Link href="/grammar" className="inline-flex items-center text-turkish-blue hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Grammar Library
        </Link>
      </div>
    );
  }

  return (
    <GrammarTutorProvider>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/grammar" className="inline-flex items-center text-turkish-blue hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back to Grammar Library
          </Link>
        </div>
        
        <GrammarLessonDetail pattern={pattern} />
        
        {/* Grammar Tutor Section - Optional: Can be implemented to provide 
            interactive learning experience with AI tutor */}
      </div>
    </GrammarTutorProvider>
  );
}
