'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllCategories, getPatternsByCategory, getPatternsByDifficulty, grammarPatterns } from '../../data/grammarPatterns';
import { GrammarDifficulty, GrammarPattern } from '../../types/grammar';
import { useGrammarTutor } from '../../contexts/GrammarTutorContext';
import GrammarRoadmap from '../../components/grammar/GrammarRoadmap';

export default function GrammarPage() {
  const { userProgress } = useGrammarTutor();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<GrammarDifficulty | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'grid' | 'roadmap'>('grid');
  const [displayPatterns, setDisplayPatterns] = useState<GrammarPattern[]>(grammarPatterns);
  
  const categories = getAllCategories();
  
  // Filter patterns based on selection and search
  useEffect(() => {
    let filtered = [...grammarPatterns];
    
    if (selectedCategory) {
      filtered = filtered.filter(pattern => pattern.category === selectedCategory);
    }
    
    if (selectedDifficulty) {
      filtered = filtered.filter(pattern => pattern.difficulty === selectedDifficulty);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(pattern => 
        pattern.name.toLowerCase().includes(query) || 
        pattern.explanation.toLowerCase().includes(query)
      );
    }
    
    setDisplayPatterns(filtered);
  }, [selectedCategory, selectedDifficulty, searchQuery]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 border-b bg-white">
        <div className="container mx-auto flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center text-turkish-blue hover:text-turkish-blue-dark transition-colors"
          >
            <span className="mr-2">←</span>
            <span className="font-medium">Back to Main</span>
          </Link>
          <h1 className="text-xl font-bold text-turkish-blue">Turkish Grammar Library</h1>
          <div className="flex gap-2">
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-turkish-blue-light' : 'bg-gray-100'}`}
              title="List View"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-turkish-blue-light' : 'bg-gray-100'}`}
              title="Grid View"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button 
              onClick={() => setViewMode('roadmap')}
              className={`p-2 rounded ${viewMode === 'roadmap' ? 'bg-turkish-blue-light' : 'bg-gray-100'}`}
              title="Roadmap View"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto py-6 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Left sidebar for navigation and filters */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow p-4 mb-4">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search grammar patterns..."
                    className="w-full p-2 border rounded-lg text-sm"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Difficulty</h3>
                  <div className="space-y-1">
                    {['beginner', 'intermediate', 'advanced'].map(difficulty => (
                      <div 
                        key={difficulty}
                        className={`
                          cursor-pointer p-2 rounded text-sm
                          ${selectedDifficulty === difficulty 
                            ? 'bg-turkish-blue-light text-turkish-blue font-medium' 
                            : 'hover:bg-gray-100'}
                        `}
                        onClick={() => setSelectedDifficulty(
                          selectedDifficulty === difficulty as GrammarDifficulty 
                            ? null 
                            : difficulty as GrammarDifficulty
                        )}
                      >
                        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Categories</h3>
                  <div className="space-y-1 max-h-80 overflow-y-auto">
                    {categories.map(category => (
                      <div 
                        key={category}
                        className={`
                          cursor-pointer p-2 rounded text-sm
                          ${selectedCategory === category 
                            ? 'bg-turkish-blue-light text-turkish-blue font-medium' 
                            : 'hover:bg-gray-100'}
                        `}
                        onClick={() => setSelectedCategory(
                          selectedCategory === category ? null : category
                        )}
                      >
                        {typeof category === 'string' && category.split('-').map((word: string) => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {userProgress && userProgress.recentlyViewed.length > 0 && (
                <div className="bg-white rounded-lg shadow p-4">
                  <h3 className="text-lg font-semibold mb-2">Recently Viewed</h3>
                  <div className="space-y-1">
                    {userProgress.recentlyViewed.slice(0, 5).map(patternId => {
                      const pattern = grammarPatterns.find(p => p.id === patternId);
                      return pattern ? (
                        <Link 
                          key={patternId}
                          href={`/grammar/${patternId}`}
                          className="block p-2 hover:bg-gray-100 rounded text-sm"
                        >
                          {pattern.name}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </div>
            
            {/* Main content area */}
            <div className="md:col-span-3">
              {viewMode === 'roadmap' ? (
                <GrammarRoadmap patterns={grammarPatterns} />
              ) : (
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-turkish-blue">
                      {selectedCategory 
                        ? typeof selectedCategory === 'string' && selectedCategory.split('-').map((word: string) => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')
                        : selectedDifficulty
                          ? `${selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)} Grammar Patterns`
                          : 'All Grammar Patterns'}
                    </h2>
                    <div className="text-sm text-gray-500">
                      {displayPatterns.length} {displayPatterns.length === 1 ? 'pattern' : 'patterns'} found
                    </div>
                  </div>
                  
                  {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {displayPatterns.map(pattern => (
                        <Link key={pattern.id} href={`/grammar/${pattern.id}`}>
                          <div className="border rounded-lg hover:shadow-md transition-shadow p-4 h-full cursor-pointer">
                            <div className="flex items-start justify-between">
                              <h3 className="text-lg font-semibold text-turkish-blue">{pattern.name}</h3>
                              <div className={`
                                text-xs px-2 py-1 rounded-full
                                ${pattern.difficulty === 'beginner' ? 'bg-green-100 text-green-800' : 
                                  pattern.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' : 
                                  'bg-red-100 text-red-800'}
                              `}>
                                {pattern.difficulty.charAt(0).toUpperCase() + pattern.difficulty.slice(1)}
                              </div>
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                              {typeof pattern.category === 'string' && pattern.category.split('-').map((word: string) => 
                                word.charAt(0).toUpperCase() + word.slice(1)
                              ).join(' ')}
                            </div>
                            <p className="mt-2 text-sm text-gray-700 line-clamp-3">
                              {pattern.explanation}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {displayPatterns.map(pattern => (
                        <Link key={pattern.id} href={`/grammar/${pattern.id}`}>
                          <div className="border rounded-lg hover:shadow-md transition-shadow p-4 cursor-pointer">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-lg font-semibold text-turkish-blue">{pattern.name}</h3>
                                <div className="text-sm text-gray-500">
                                  {typeof pattern.category === 'string' && pattern.category.split('-').map((word: string) => 
                                    word.charAt(0).toUpperCase() + word.slice(1)
                                  ).join(' ')}
                                </div>
                              </div>
                              <div className={`
                                text-xs px-2 py-1 rounded-full
                                ${pattern.difficulty === 'beginner' ? 'bg-green-100 text-green-800' : 
                                  pattern.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' : 
                                  'bg-red-100 text-red-800'}
                              `}>
                                {pattern.difficulty.charAt(0).toUpperCase() + pattern.difficulty.slice(1)}
                              </div>
                            </div>
                            <p className="mt-2 text-sm text-gray-700">
                              {pattern.explanation}
                            </p>
                            <div className="mt-2 text-turkish-blue text-xs">
                              {pattern.formulas && pattern.formulas.map((formula, index) => (
                                <span key={index} className="mr-3 font-mono">{formula}</span>
                              ))}
                              {!pattern.formulas && pattern.formula && (
                                <span className="mr-3 font-mono">{pattern.formula}</span>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  {displayPatterns.length === 0 && (
                    <div className="text-center py-8">
                      <div className="text-gray-400 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-gray-500">No grammar patterns found</h3>
                      <p className="text-gray-400">Try adjusting your search or filters</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
