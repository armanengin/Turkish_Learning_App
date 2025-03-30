'use client';

import React, { useState } from 'react';
import { WordBreakdownData } from '../../types/grammar';

interface WordBreakdownProps {
  breakdown: WordBreakdownData;
  animated?: boolean;
}

export default function WordBreakdown({ breakdown, animated = true }: WordBreakdownProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showFullTable, setShowFullTable] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  
  // Define colors for different types of word parts
  const typeColors: Record<string, { bg: string, text: string, border: string }> = {
    'verb-root': { 
      bg: 'bg-blue-100', 
      text: 'text-blue-800',
      border: 'border-blue-300'
    },
    'verb-stem': { 
      bg: 'bg-blue-200', 
      text: 'text-blue-800',
      border: 'border-blue-400'
    },
    'noun': { 
      bg: 'bg-green-100', 
      text: 'text-green-800',
      border: 'border-green-300'
    },
    'tense-marker': { 
      bg: 'bg-purple-100', 
      text: 'text-purple-800',
      border: 'border-purple-300'
    },
    'personal-ending': { 
      bg: 'bg-red-100', 
      text: 'text-red-800',
      border: 'border-red-300'
    },
    'locative-case': { 
      bg: 'bg-yellow-100', 
      text: 'text-yellow-800',
      border: 'border-yellow-300'
    },
    'dative-case': { 
      bg: 'bg-amber-100', 
      text: 'text-amber-800',
      border: 'border-amber-300'
    },
    'accusative-case': { 
      bg: 'bg-orange-100', 
      text: 'text-orange-800',
      border: 'border-orange-300'
    },
    'ablative-case': { 
      bg: 'bg-rose-100', 
      text: 'text-rose-800',
      border: 'border-rose-300'
    },
    'case-marker': { 
      bg: 'bg-amber-100', 
      text: 'text-amber-800',
      border: 'border-amber-300'
    },
    'possessive': { 
      bg: 'bg-teal-100', 
      text: 'text-teal-800',
      border: 'border-teal-300'
    },
    'conditional-marker': { 
      bg: 'bg-violet-100', 
      text: 'text-violet-800',
      border: 'border-violet-300'
    },
    'subject-participle': { 
      bg: 'bg-fuchsia-100', 
      text: 'text-fuchsia-800',
      border: 'border-fuchsia-300'
    },
    'object-participle': { 
      bg: 'bg-pink-100', 
      text: 'text-pink-800',
      border: 'border-pink-300'
    },
    'vowel-harmony': { 
      bg: 'bg-indigo-100', 
      text: 'text-indigo-800',
      border: 'border-indigo-300'
    },
    'consonant-harmony': { 
      bg: 'bg-sky-100', 
      text: 'text-sky-800',
      border: 'border-sky-300'
    },
    'buffer': { 
      bg: 'bg-gray-100', 
      text: 'text-gray-800',
      border: 'border-gray-300'
    },
    'past-tense': { 
      bg: 'bg-violet-100', 
      text: 'text-violet-800',
      border: 'border-violet-300'
    },
    // Add other types with their colors here
    // Default color for any unspecified type
    'default': { 
      bg: 'bg-gray-100', 
      text: 'text-gray-800',
      border: 'border-gray-300'
    }
  };
  
  // Get color for a given type, falling back to default if not found
  const getColorForType = (type: string) => {
    return typeColors[type] || typeColors.default;
  };
  
  const getAnimationDelay = (index: number) => {
    return `${index * 0.5}s`;
  };
  
  const toggleFullTable = () => {
    setShowFullTable(!showFullTable);
    setShowAnimation(false); // Reset animation when toggling table
  };
  
  const toggleAnimation = () => {
    setShowAnimation(!showAnimation);
    setShowFullTable(false); // Close table when showing animation
  };

  // Use segments array from the breakdown object
  const segments = breakdown.segments || [];
  
  return (
    <div className="font-sans">
      {/* Interactive word display */}
      <div className="mb-4">
        <div className="flex flex-wrap items-center">
          <h3 className="text-sm font-semibold mr-3 text-gray-500">Word Breakdown:</h3>
          
          <div className="flex flex-wrap">
            {segments.map((segment, index) => {
              const colors = getColorForType(segment.type);
              
              return (
                <div
                  key={index}
                  className={`mr-1 mb-1 px-2 py-1 rounded border ${colors.bg} ${colors.text} ${colors.border} cursor-pointer transition-all ${
                    showAnimation ? 'animate-bounce' : ''
                  }`}
                  style={showAnimation ? { animationDelay: getAnimationDelay(index) } : {}}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {segment.text}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Info popup when hovering over a segment */}
      {hoveredIndex !== null && (
        <div className="mb-4 p-3 bg-white border rounded-md shadow-sm">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="font-semibold text-gray-600">Type:</span>{' '}
              <span className="capitalize">{segments[hoveredIndex].type.replace(/-/g, ' ')}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-600">Meaning:</span>{' '}
              <span>{segments[hoveredIndex].meaning}</span>
            </div>
            {segments[hoveredIndex].notes && (
              <div className="col-span-2">
                <span className="font-semibold text-gray-600">Note:</span>{' '}
                <span className="text-gray-700">{segments[hoveredIndex].notes}</span>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Controls */}
      <div className="flex justify-start gap-2 mb-3">
        <button
          type="button"
          onClick={toggleFullTable}
          className="text-xs px-2 py-1 rounded border bg-gray-50 text-gray-600 hover:bg-gray-100"
        >
          {showFullTable ? 'Hide Table' : 'Show Full Table'}
        </button>
        
        {animated && (
          <button
            type="button"
            onClick={toggleAnimation}
            className="text-xs px-2 py-1 rounded border bg-gray-50 text-gray-600 hover:bg-gray-100"
          >
            {showAnimation ? 'Stop Animation' : 'Animate'}
          </button>
        )}
      </div>
      
      {/* Full breakdown table */}
      {showFullTable && (
        <div className="mt-3 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Segment
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {segments.map((segment, index) => {
                const colors = getColorForType(segment.type);
                
                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className={`inline-block px-2 py-1 rounded ${colors.bg} ${colors.text} ${colors.border}`}>
                        {segment.text}
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap capitalize">
                      {segment.type.replace(/-/g, ' ')}
                    </td>
                    <td className="px-3 py-2">
                      {segment.meaning}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      
      {/* Notes section if provided */}
      {breakdown.notes && (
        <div className="mt-3 text-sm p-3 bg-gray-50 rounded border">
          <span className="font-semibold">Note:</span> {breakdown.notes}
        </div>
      )}
    </div>
  );
}
