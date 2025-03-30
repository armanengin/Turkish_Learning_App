'use client';

import React, { useState, useMemo } from 'react';
import { GrammarDifficulty, GrammarCategory } from '../../types/grammar';
import { grammarPatterns } from '../../data/grammarPatterns';
import GrammarRuleCard from './GrammarRuleCard';
import { useGrammarTutor } from '../../contexts/GrammarTutorContext';

export default function GrammarPatternBrowser() {
  const { setActivePattern, userProgress } = useGrammarTutor();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulties, setSelectedDifficulties] = useState<GrammarDifficulty[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<GrammarCategory[]>([]);
  const [currentTab, setCurrentTab] = useState<'all' | 'saved' | 'recent'>('all');
  const [showFilters, setShowFilters] = useState(false);
  
  // Get all available categories from the patterns
  const allCategories = useMemo(() => {
    const categories = new Set<GrammarCategory>();
    grammarPatterns.forEach(pattern => {
      if (typeof pattern.category === 'string') {
        categories.add(pattern.category as GrammarCategory);
      }
    });
    return Array.from(categories);
  }, []);
  
  // Filter patterns based on search, difficulty, category, and tab
  const filteredPatterns = useMemo(() => {
    let patterns = [...grammarPatterns];
    
    // Filter by tab first
    if (currentTab === 'saved' && userProgress) {
      patterns = patterns.filter(pattern => 
        userProgress.savedPatterns.includes(pattern.id)
      );
    } else if (currentTab === 'recent' && userProgress) {
      patterns = patterns.filter(pattern => 
        userProgress.recentlyViewed.includes(pattern.id)
      ).sort((a, b) => {
        const aIndex = userProgress.recentlyViewed.indexOf(a.id);
        const bIndex = userProgress.recentlyViewed.indexOf(b.id);
        return aIndex - bIndex;
      });
    }
    
    // Then apply search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      patterns = patterns.filter(pattern => 
        pattern.name.toLowerCase().includes(term) || 
        ((pattern.formulas && pattern.formulas.some(f => f.toLowerCase().includes(term))) || 
         (pattern.formula && pattern.formula.toLowerCase().includes(term))) ||
        pattern.explanation.toLowerCase().includes(term) ||
        pattern.examples.some(ex => 
          ex.turkish.toLowerCase().includes(term) ||
          ex.english.toLowerCase().includes(term)
        )
      );
    }
    
    // Then apply difficulty filter
    if (selectedDifficulties.length > 0) {
      patterns = patterns.filter(pattern => 
        selectedDifficulties.includes(pattern.difficulty)
      );
    }
    
    // Finally, apply category filter
    if (selectedCategories.length > 0) {
      patterns = patterns.filter(pattern => 
        typeof pattern.category === 'string' && selectedCategories.includes(pattern.category as GrammarCategory)
      );
    }
    
    return patterns;
  }, [searchTerm, selectedDifficulties, selectedCategories, currentTab, userProgress]);
  
  const handleDifficultyToggle = (difficulty: GrammarDifficulty) => {
    if (selectedDifficulties.includes(difficulty)) {
      setSelectedDifficulties(selectedDifficulties.filter(d => d !== difficulty));
    } else {
      setSelectedDifficulties([...selectedDifficulties, difficulty]);
    }
  };
  
  const handleCategoryToggle = (category: GrammarCategory) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  return (
    <div className="grammar-pattern-browser">
      {/* Search and filter bar */}
      <div className="mb-4">
        <div className="flex gap-2 mb-2">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-turkish-blue focus:border-turkish-blue sm:text-sm"
              placeholder="Search grammar patterns..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-turkish-blue"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 -ml-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
            Filters
          </button>
        </div>
        
        {/* Tabs for different views */}
        <div className="flex rounded-md shadow-sm mb-4" role="group">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium border rounded-l-lg ${
              currentTab === 'all' 
                ? 'bg-turkish-blue text-white border-turkish-blue' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setCurrentTab('all')}
          >
            All Patterns
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium border-t border-b border-r flex items-center ${
              currentTab === 'saved' 
                ? 'bg-turkish-blue text-white border-turkish-blue' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setCurrentTab('saved')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
            Saved
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium border-t border-b border-r rounded-r-lg flex items-center ${
              currentTab === 'recent' 
                ? 'bg-turkish-blue text-white border-turkish-blue' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setCurrentTab('recent')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Recently Viewed
          </button>
        </div>
        
        {/* Expandable filter panel */}
        {showFilters && (
          <div className="bg-gray-50 p-4 rounded-md mb-4 animate-slideDown">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Difficulty</h3>
            <div className="flex gap-2 mb-4">
              {(['beginner', 'intermediate', 'advanced'] as GrammarDifficulty[]).map((diff) => (
                <button
                  key={diff}
                  onClick={() => handleDifficultyToggle(diff)}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedDifficulties.includes(diff)
                      ? diff === 'beginner' ? 'bg-green-500 text-white' :
                        diff === 'intermediate' ? 'bg-blue-500 text-white' :
                        'bg-purple-500 text-white'
                      : diff === 'beginner' ? 'bg-green-100 text-green-800' :
                        diff === 'intermediate' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                  }`}
                >
                  {diff.charAt(0).toUpperCase() + diff.slice(1)}
                </button>
              ))}
            </div>
            
            <h3 className="text-sm font-medium text-gray-700 mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((category) => (
                <button
                  key={category as string}
                  onClick={() => handleCategoryToggle(category)}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedCategories.includes(category)
                      ? 'bg-turkish-blue text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {(category as string).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Results grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPatterns.length > 0 ? (
          filteredPatterns.map(pattern => (
            <GrammarRuleCard
              key={pattern.id}
              pattern={pattern}
              onClick={() => setActivePattern(pattern)}
            />
          ))
        ) : (
          <div className="col-span-full py-8 text-center">
            <p className="text-gray-500">No grammar patterns match your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
