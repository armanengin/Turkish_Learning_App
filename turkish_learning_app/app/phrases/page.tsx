'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import { useFlashcards } from '../../contexts/FlashcardContext';
import phrasesData, { TurkishPhrase, PhraseCategory } from '../../data/phrasesData';

export default function PhrasesPage() {
  const { isAuthenticated } = useAuth();
  const { addFlashcard } = useFlashcards();
  const router = useRouter();
  
  const [selectedCategory, setSelectedCategory] = useState("Greetings & Basics");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<'all' | 'situational' | 'general'>('all');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);
  
  if (!isAuthenticated) {
    return null;
  }
  
  // Filter phrases based on search term and filter type
  const filteredData = phrasesData
    .filter(category => {
      if (filterType === 'all') return true;
      if (filterType === 'situational') return category.situational === true;
      if (filterType === 'general') return category.situational !== true;
      return true;
    })
    .map(category => {
      const filteredPhrases = category.phrases.filter(phrase => 
        phrase.turkish.toLowerCase().includes(searchTerm.toLowerCase()) || 
        phrase.english.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      return {
        ...category,
        phrases: filteredPhrases
      };
    }).filter(category => category.phrases.length > 0);
  
  // Get current category phrases
  const currentCategory = searchTerm 
    ? filteredData 
    : phrasesData.filter(category => category.category === selectedCategory);
  
  // Handle adding phrase to flashcards
  const handleAddToFlashcards = (phrase: TurkishPhrase) => {
    addFlashcard({
      turkish: phrase.turkish,
      english: phrase.english,
      exampleUsage: phrase.turkish, // Using the phrase itself as an example
      notes: phrase.notes,
      category: 'phrase'
    });
    
    // Show confirmation
    alert(`Added "${phrase.turkish}" to your flashcards!`);
  };

  // Count total phrases
  const totalPhrases = phrasesData.reduce((sum, category) => sum + category.phrases.length, 0);

  // Get categories for each type
  const situationalCategories = phrasesData.filter(cat => cat.situational).map(cat => cat.category);
  const generalCategories = phrasesData.filter(cat => !cat.situational).map(cat => cat.category);
  
  return (
    <div className="animate-fadeIn">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Common Turkish Phrases</h1>
        <p className="text-gray-600">
          Browse {totalPhrases}+ essential Turkish expressions organized by category.
          Click the + button to add any phrase to your flashcards for review.
        </p>
      </div>
      
      {/* Search and filter controls */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Search phrases in Turkish or English..."
                className="turkish-input w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {!searchTerm && (
              <div>
                <select
                  className="turkish-input"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {phrasesData.map((category, index) => (
                    <option key={index} value={category.category}>
                      {category.category} ({category.phrases.length})
                    </option>
                  ))}
                </select>
              </div>
            )}
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setViewMode('table')}
                className={`p-2 rounded ${viewMode === 'table' ? 'bg-turkish-blue text-white' : 'bg-gray-100'}`}
                title="Table View"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
              <button 
                onClick={() => setViewMode('cards')}
                className={`p-2 rounded ${viewMode === 'cards' ? 'bg-turkish-blue text-white' : 'bg-gray-100'}`}
                title="Card View"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Category type filters */}
          <div className="flex space-x-4">
            <button 
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 rounded text-sm ${filterType === 'all' ? 'bg-turkish-blue text-white' : 'bg-gray-100'}`}
            >
              All Categories
            </button>
            <button 
              onClick={() => setFilterType('situational')}
              className={`px-3 py-1 rounded text-sm ${filterType === 'situational' ? 'bg-turkish-blue text-white' : 'bg-gray-100'}`}
            >
              Situational ({situationalCategories.length})
            </button>
            <button 
              onClick={() => setFilterType('general')}
              className={`px-3 py-1 rounded text-sm ${filterType === 'general' ? 'bg-turkish-blue text-white' : 'bg-gray-100'}`}
            >
              General ({generalCategories.length})
            </button>
          </div>
        </div>
      </div>
      
      {/* Category cards for quick selection */}
      {!searchTerm && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {phrasesData
            .filter(category => {
              if (filterType === 'all') return true;
              if (filterType === 'situational') return category.situational === true;
              if (filterType === 'general') return category.situational !== true;
              return true;
            })
            .map((category, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg shadow-md cursor-pointer transition-all hover:shadow-lg ${
                  selectedCategory === category.category 
                    ? 'bg-turkish-blue text-white' 
                    : 'bg-white hover:bg-turkish-blue hover:bg-opacity-10'
                }`}
                onClick={() => setSelectedCategory(category.category)}
              >
                <div className="flex items-center mb-2">
                  <span className="material-icons mr-2">{category.icon}</span>
                  <h3 className="font-bold">{category.category}</h3>
                </div>
                <p className={`text-sm ${selectedCategory === category.category ? 'text-white' : 'text-gray-500'}`}>
                  {category.phrases.length} phrases
                </p>
              </div>
            ))}
        </div>
      )}
      
      {currentCategory.length > 0 ? (
        <>
          {currentCategory.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <div className="flex items-center mb-4">
                <span className="material-icons mr-2 text-turkish-blue">{category.icon}</span>
                <h2 className="text-xl font-bold text-turkish-blue">
                  {category.category}
                </h2>
              </div>
              
              <p className="text-gray-600 mb-4">{category.description}</p>
              
              {viewMode === 'table' ? (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-turkish-blue bg-opacity-10">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-turkish-blue">Turkish</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-turkish-blue">English</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-turkish-blue">Notes</th>
                        <th className="px-4 py-3 w-16"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {category.phrases.map((phrase, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-turkish-blue font-medium">
                            {phrase.turkish}
                          </td>
                          <td className="px-4 py-3 text-gray-700">
                            {phrase.english}
                          </td>
                          <td className="px-4 py-3 text-gray-500 text-sm">
                            {phrase.notes}
                          </td>
                          <td className="px-4 py-3">
                            <button
                              onClick={() => handleAddToFlashcards(phrase)}
                              className="p-1 rounded-full text-turkish-blue hover:bg-turkish-blue hover:text-white transition-colors"
                              title="Add to flashcards"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.phrases.map((phrase, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-start">
                        <h3 className="text-turkish-blue font-medium">{phrase.turkish}</h3>
                        <button
                          onClick={() => handleAddToFlashcards(phrase)}
                          className="p-1 rounded-full text-turkish-blue hover:bg-turkish-blue hover:text-white transition-colors"
                          title="Add to flashcards"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-gray-700 my-2">{phrase.english}</p>
                      <p className="text-gray-500 text-sm">{phrase.notes}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-gray-500">No phrases match your search. Try different keywords.</p>
        </div>
      )}
      
      {/* Learning tips */}
      <div className="mt-8 p-4 bg-turkish-blue bg-opacity-5 rounded-lg">
        <h3 className="font-bold text-turkish-blue mb-2">Pro Tips for Learning Turkish Phrases</h3>
        <ul className="text-gray-600 text-sm space-y-2">
          <li>
            <span className="font-medium">Pronunciation:</span> Turkish is generally phonetic, meaning words are pronounced as they are spelled.
          </li>
          <li>
            <span className="font-medium">Special Letters:</span> Pay attention to ç (ch), ş (sh), ğ (elongates the preceding vowel), 
            ı (undotted i), and ö and ü (similar to German).
          </li>
          <li>
            <span className="font-medium">Practice Daily:</span> Try to use at least 5 new phrases each day in context.
          </li>
          <li>
            <span className="font-medium">Formal vs Informal:</span> Turkish distinguishes between formal (with -siniz endings) and 
            informal (with -sin endings) when addressing people.
          </li>
        </ul>
      </div>
    </div>
  );
}
