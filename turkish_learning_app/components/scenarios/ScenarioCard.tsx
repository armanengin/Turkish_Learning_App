'use client';

import { Scenario } from '../../types';

interface ScenarioCardProps {
  scenario: Scenario;
  isSelected: boolean;
  onClick: () => void;
}

export default function ScenarioCard({ scenario, isSelected, onClick }: ScenarioCardProps) {
  const difficultyColor = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  }[scenario.difficultyLevel as string] || 'bg-gray-100 text-gray-800';

  return (
    <div 
      className={`border rounded-lg overflow-hidden shadow-md transition-all cursor-pointer p-4 h-full
        ${isSelected ? 'border-turkish-blue ring-2 ring-turkish-blue scale-105' : 'border-gray-200 hover:shadow-lg'}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg text-turkish-blue">{scenario.title}</h3>
        <span className={`text-xs px-2 py-1 rounded-full ${difficultyColor}`}>
          {scenario.difficultyLevel}
        </span>
      </div>
      
      <p className="text-sm text-gray-600 mb-2">
        {scenario.location} • {scenario.estimatedDuration}
      </p>
      
      <p className="text-sm mb-3">{scenario.description}</p>
      
      <div className="mb-3">
        <h4 className="text-xs font-semibold uppercase text-gray-500 mb-1">Key Vocabulary</h4>
        <div className="flex flex-wrap gap-1">
          {scenario.keyVocabulary.map((word, index) => (
            <span 
              key={index} 
              className="text-xs bg-turkish-turquoise bg-opacity-10 text-turkish-blue px-2 py-1 rounded"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-xs font-semibold uppercase text-gray-500 mb-1">Cultural Note</h4>
        <p className="text-xs text-gray-600 italic">{scenario.culturalNotes}</p>
      </div>
    </div>
  );
}
