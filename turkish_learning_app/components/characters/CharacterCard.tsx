'use client';
import Image from 'next/image';
import { Character } from '../../types';

interface CharacterCardProps {
  character: Character;
  isSelected: boolean;
  onClick: () => void;
}

export default function CharacterCard({ character, isSelected, onClick }: CharacterCardProps) {
  const difficultyColor = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  }[character.difficultyLevel as string] || 'bg-gray-100 text-gray-800';

  return (
    <div 
      className={`border rounded-lg overflow-hidden shadow-md transition-all cursor-pointer 
        ${isSelected ? 'border-turkish-blue ring-2 ring-turkish-blue scale-105' : 'border-gray-200 hover:shadow-lg'}`}
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        <Image 
          src={character.avatar || "https://via.placeholder.com/300?text=Character"} 
          alt={character.name}
          className="object-cover"
          fill
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-turkish-blue">{character.name}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${difficultyColor}`}>
            {character.difficultyLevel}
          </span>
        </div>
        
        <div className="text-sm text-gray-600 mb-2">
          <p>{character.age} • {character.occupation}</p>
          <p>{character.region}</p>
        </div>
        
        <p className="text-sm mb-2">{character.personality}</p>
        
        <div className="text-xs text-gray-500 italic">
          <p>{character.speakingStyle}</p>
        </div>
      </div>
    </div>
  );
}
