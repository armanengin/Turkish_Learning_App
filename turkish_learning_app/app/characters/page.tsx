'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import { useConversation } from '../../contexts/ConversationContext';
import { characters } from '../../data/characters';
import CharacterCard from '../../components/characters/CharacterCard';
import { DifficultyLevel } from '../../types';

export default function CharactersPage() {
  const { isAuthenticated } = useAuth();
  const { setActiveCharacter, activeCharacter, activeScenario } = useConversation();
  const router = useRouter();
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyLevel | 'all'>('all');
  const [regionFilter, setRegionFilter] = useState<string>('all');

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  // Handle character selection
  const handleSelectCharacter = (index: number) => {
    setActiveCharacter(characters[index]);
    
    // If a scenario is already selected, redirect to the conversation
    if (activeScenario) {
      router.push('/conversation');
    } else {
      // Otherwise, redirect to scenarios
      router.push('/scenarios');
    }
  };

  // Get unique regions for filter
  const regions = ['all', ...Array.from(new Set(characters.map(char => char.region)))];

  // Filter characters based on selections
  const filteredCharacters = characters.filter(char => {
    const difficultyMatch = difficultyFilter === 'all' || 
                           char.difficultyLevel === difficultyFilter ||
                           char.difficultyLevel.includes(difficultyFilter as string);
    const regionMatch = regionFilter === 'all' || char.region === regionFilter;
    return difficultyMatch && regionMatch;
  });

  return (
    <div className="animate-fadeIn">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Choose a Character</h1>
        <p className="text-gray-600">
          Select a Turkish character to have a conversation with. Each character has different speaking styles,
          regional expressions, and personality traits.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <div>
            <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-1">
              Difficulty Level
            </label>
            <select
              id="difficulty"
              className="turkish-input"
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value as DifficultyLevel | 'all')}
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
              Region
            </label>
            <select
              id="region"
              className="turkish-input"
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
            >
              {regions.map((region, index) => (
                <option key={index} value={region}>
                  {region === 'all' ? 'All Regions' : region}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCharacters.map((character, index) => (
          <CharacterCard
            key={character.id}
            character={character}
            isSelected={activeCharacter?.id === character.id}
            onClick={() => handleSelectCharacter(index)}
          />
        ))}
      </div>

      {filteredCharacters.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No characters match your filters. Try adjusting your criteria.</p>
        </div>
      )}
    </div>
  );
}
