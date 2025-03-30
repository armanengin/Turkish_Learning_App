'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import { useConversation } from '../../contexts/ConversationContext';
import { scenarios } from '../../data/scenarios';
import ScenarioCard from '../../components/scenarios/ScenarioCard';
import { DifficultyLevel } from '../../types';

export default function ScenariosPage() {
  const { isAuthenticated } = useAuth();
  const { setActiveScenario, activeScenario, activeCharacter } = useConversation();
  const router = useRouter();
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyLevel | 'all'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  // Handle scenario selection
  const handleSelectScenario = (index: number) => {
    setActiveScenario(scenarios[index]);
    
    // If a character is already selected, redirect to the conversation
    if (activeCharacter) {
      router.push('/conversation');
    } else {
      // Otherwise, redirect to characters
      router.push('/characters');
    }
  };

  // Extract scenario categories for filter
  const categories = ['all', ...Array.from(new Set(scenarios.map(scenario => {
    // Extract category from title (e.g., "Café Experience" -> "Café")
    const parts = scenario.title.split(' ');
    return parts[0];
  })))];

  // Filter scenarios based on selections
  const filteredScenarios = scenarios.filter(scenario => {
    const difficultyMatch = difficultyFilter === 'all' || 
                           scenario.difficultyLevel === difficultyFilter ||
                           scenario.difficultyLevel.includes(difficultyFilter as string);
    
    const categoryMatch = categoryFilter === 'all' || 
                         scenario.title.toLowerCase().startsWith(categoryFilter.toLowerCase());
    
    return difficultyMatch && categoryMatch;
  });

  // Check if scenarios are recommended for the active character
  const getIsRecommended = (scenarioId: string) => {
    if (!activeCharacter) return false;
    return scenarios.find(s => s.id === scenarioId)?.recommendedCharacters.includes(activeCharacter.id) || false;
  };

  return (
    <div className="animate-fadeIn">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Choose a Scenario</h1>
        <p className="text-gray-600">
          Select a scenario to practice Turkish in realistic contexts. Each scenario focuses on different
          vocabulary and cultural aspects.
        </p>
        
        {activeCharacter && (
          <div className="mt-4 p-3 bg-turkish-blue bg-opacity-10 rounded-lg">
            <p className="text-sm">
              <span className="font-medium">Selected Character:</span> {activeCharacter.name} ({activeCharacter.difficultyLevel})
            </p>
          </div>
        )}
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
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              className="turkish-input"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScenarios.map((scenario, index) => (
          <div key={scenario.id} className="h-full">
            {getIsRecommended(scenario.id) && (
              <div className="mb-2 text-center">
                <span className="inline-block bg-turkish-gold text-white text-xs px-3 py-1 rounded-full">
                  Recommended for {activeCharacter?.name}
                </span>
              </div>
            )}
            <ScenarioCard
              scenario={scenario}
              isSelected={activeScenario?.id === scenario.id}
              onClick={() => handleSelectScenario(index)}
            />
          </div>
        ))}
      </div>

      {filteredScenarios.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No scenarios match your filters. Try adjusting your criteria.</p>
        </div>
      )}
    </div>
  );
}
