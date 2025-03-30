import React, { useState, useRef, useEffect } from 'react';
import { useGrammarTutor } from '../../contexts/GrammarTutorContext';
import { GrammarPattern } from '../../types/grammar';
import Link from 'next/link';

interface GrammarRoadmapProps {
  patterns: GrammarPattern[];
}

// Define the structure of grammar paths for the roadmap
interface PathNode {
  id: string;
  parentIds: string[];
  x: number;
  y: number;
  category: string;
}

// Grammar path groupings based on the roadmap guide
const pathCategories = {
  'foundation': {
    title: 'Foundation Path',
    color: '#6366F1', // Indigo
    patterns: [
      'turkish-alphabet', 
      'vowel-harmony', 
      'personal-pronouns', 
      'basic-sentence-structure',
      'question-formation', 
      'basic-negation', 
      'plurals'
    ]
  },
  'noun': {
    title: 'Noun Branch',
    color: '#3B82F6', // Blue
    patterns: [
      'possessive-suffixes', 
      'possessive-constructions', 
      'accusative-case', 
      'dative-case', 
      'locative-case', 
      'ablative-case',
      'genitive-case',
      'compound-nouns'
    ]
  },
  'verb': {
    title: 'Verb Branch',
    color: '#10B981', // Green
    patterns: [
      'present-continuous', 
      'simple-present-tense', 
      'past-tense', 
      'future-tense', 
      'reported-past-tense',
      'imperative-subjunctive',
      'aorist',
      'evidential-definite-past'
    ]
  },
  'descriptive': {
    title: 'Descriptive Branch',
    color: '#F59E0B', // Amber
    patterns: [
      'adjectives', 
      'comparatives', 
      'postpositions', 
      'conjunctions-connectors'
    ]
  },
  'advanced': {
    title: 'Advanced Topics',
    color: '#EC4899', // Pink
    patterns: [
      'ability-possibility', 
      'necessity-obligation', 
      'conditionals', 
      'relative-clauses', 
      'verbal-nouns', 
      'voice-system',
      'passive-voice',
      'reflexive-verbs',
      'causative-verbs',
      'complex-subordination',
      'complex-time-expressions'
    ]
  }
};

// Node relationships define what comes before/after
const nodeRelationships = [
  { id: 'turkish-alphabet', parentIds: [] },
  { id: 'vowel-harmony', parentIds: ['turkish-alphabet'] },
  { id: 'personal-pronouns', parentIds: ['vowel-harmony'] },
  { id: 'basic-sentence-structure', parentIds: ['personal-pronouns'] },
  { id: 'question-formation', parentIds: ['basic-sentence-structure'] },
  { id: 'basic-negation', parentIds: ['question-formation'] },
  { id: 'plurals', parentIds: ['basic-negation'] },
  
  // Noun branch
  { id: 'possessive-suffixes', parentIds: ['plurals'] },
  { id: 'possessive-constructions', parentIds: ['possessive-suffixes'] },
  { id: 'accusative-case', parentIds: ['possessive-constructions'] },
  { id: 'dative-case', parentIds: ['accusative-case'] },
  { id: 'locative-case', parentIds: ['dative-case'] },
  { id: 'ablative-case', parentIds: ['locative-case'] },
  { id: 'genitive-case', parentIds: ['ablative-case'] },
  { id: 'compound-nouns', parentIds: ['genitive-case'] },
  
  // Verb branch
  { id: 'present-continuous', parentIds: ['plurals'] },
  { id: 'simple-present-tense', parentIds: ['present-continuous'] },
  { id: 'past-tense', parentIds: ['simple-present-tense'] },
  { id: 'future-tense', parentIds: ['past-tense'] },
  { id: 'reported-past-tense', parentIds: ['future-tense'] },
  { id: 'imperative-subjunctive', parentIds: ['reported-past-tense'] },
  { id: 'aorist', parentIds: ['imperative-subjunctive'] },
  { id: 'evidential-definite-past', parentIds: ['aorist'] },
  
  // Descriptive branch
  { id: 'adjectives', parentIds: ['plurals'] },
  { id: 'comparatives', parentIds: ['adjectives'] },
  { id: 'postpositions', parentIds: ['comparatives'] },
  { id: 'conjunctions-connectors', parentIds: ['postpositions'] },
  
  // Advanced topics - connect from various branches
  { id: 'ability-possibility', parentIds: ['future-tense', 'comparatives'] },
  { id: 'necessity-obligation', parentIds: ['ability-possibility'] },
  { id: 'conditionals', parentIds: ['necessity-obligation'] },
  { id: 'relative-clauses', parentIds: ['conditionals'] },
  { id: 'verbal-nouns', parentIds: ['relative-clauses'] },
  { id: 'voice-system', parentIds: ['verbal-nouns'] },
  { id: 'passive-voice', parentIds: ['voice-system'] },
  { id: 'reflexive-verbs', parentIds: ['passive-voice'] },
  { id: 'causative-verbs', parentIds: ['reflexive-verbs'] },
  { id: 'complex-subordination', parentIds: ['causative-verbs'] },
  { id: 'complex-time-expressions', parentIds: ['complex-subordination'] }
];

// Function to get the category for a pattern ID
const getPatternCategory = (patternId: string): string => {
  for (const [category, data] of Object.entries(pathCategories)) {
    if (data.patterns.includes(patternId)) {
      return category;
    }
  }
  return 'unknown';
};

// Calculate node positions for the roadmap visualization
const calculateNodePositions = (windowWidth: number): PathNode[] => {
  const nodes: PathNode[] = [];
  
  // Set up column spacing based on window width
  const columnCount = 4; // Foundation, Noun, Verb, Descriptive
  const columnWidth = Math.max(120, windowWidth / (columnCount + 1));
  
  // Column positions
  const columnPositions = {
    foundation: columnWidth,
    noun: columnWidth * 2,
    verb: columnWidth * 3,
    descriptive: columnWidth * 4
  };
  
  // Process all nodes with their relationships
  nodeRelationships.forEach((relation, index) => {
    const category = getPatternCategory(relation.id);
    let x = 0;
    
    // Position nodes in their respective columns
    if (category === 'foundation') {
      x = columnPositions.foundation;
    } else if (category === 'noun') {
      x = columnPositions.noun;
    } else if (category === 'verb') {
      x = columnPositions.verb;
    } else if (category === 'descriptive') {
      x = columnPositions.descriptive;
    } else if (category === 'advanced') {
      // Position advanced nodes across multiple columns
      const advancedIndex = pathCategories.advanced.patterns.indexOf(relation.id);
      x = columnWidth * 2.5; // Center advanced nodes
    }
    
    // Calculate y position based on position in the category
    const categoryPatterns = pathCategories[category as keyof typeof pathCategories].patterns;
    const positionInCategory = categoryPatterns.indexOf(relation.id);
    const y = 120 + (positionInCategory * 100);
    
    nodes.push({
      id: relation.id,
      parentIds: relation.parentIds,
      x,
      y,
      category
    });
  });
  
  return nodes;
};

const GrammarRoadmap: React.FC<GrammarRoadmapProps> = ({ patterns }) => {
  const { userProgress } = useGrammarTutor();
  const [nodes, setNodes] = useState<PathNode[]>([]);
  const [svgDimensions, setSvgDimensions] = useState({ width: 1000, height: 2000 });
  const [zoomLevel, setZoomLevel] = useState(1);
  const [focusMode, setFocusMode] = useState(false);
  const [viewBox, setViewBox] = useState('0 0 1000 2000');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Calculate node positions on initial render and window resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const calculatedNodes = calculateNodePositions(containerWidth);
        setNodes(calculatedNodes);
        
        // Adjust SVG dimensions
        const maxX = Math.max(...calculatedNodes.map(node => node.x)) + 150;
        const maxY = Math.max(...calculatedNodes.map(node => node.y)) + 150;
        setSvgDimensions({ width: maxX, height: maxY });
        setViewBox(`0 0 ${maxX} ${maxY}`);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [patterns]);
  
  // Check if a pattern has been completed (viewed)
  const isPatternCompleted = (patternId: string): boolean => {
    return userProgress?.recentlyViewed.includes(patternId) || false;
  };
  
  // Get the pattern object by ID
  const getPatternById = (patternId: string): GrammarPattern | undefined => {
    return patterns.find(pattern => pattern.id === patternId);
  };
  
  // Filter nodes based on selected category
  const filteredNodes = selectedCategory 
    ? nodes.filter(node => node.category === selectedCategory)
    : nodes;
  
  // Handle zoom controls
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 2));
  };
  
  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
  };
  
  const handleResetView = () => {
    setZoomLevel(1);
    setSelectedCategory(null);
    setFocusMode(false);
  };
  
  // Toggle focus mode to show only next recommended topics
  const toggleFocusMode = () => {
    setFocusMode(prev => !prev);
  };
  
  // Get next recommended patterns based on user progress
  const getNextRecommendedPatterns = (): string[] => {
    const completedPatterns = userProgress?.recentlyViewed || [];
    
    // Find patterns where all prerequisites are completed
    return nodes
      .filter(node => {
        // If node has no parents, include it if not completed
        if (node.parentIds.length === 0) {
          return !completedPatterns.includes(node.id);
        }
        
        // Include if all parents are completed but this one isn't
        const allParentsCompleted = node.parentIds.every(parentId => 
          completedPatterns.includes(parentId)
        );
        return allParentsCompleted && !completedPatterns.includes(node.id);
      })
      .map(node => node.id);
  };
  
  // Filter nodes for focus mode
  const focusNodes = focusMode 
    ? nodes.filter(node => {
        const nextPatterns = getNextRecommendedPatterns();
        return nextPatterns.includes(node.id) || 
               userProgress?.recentlyViewed.includes(node.id) ||
               node.parentIds.some(id => nextPatterns.includes(id) || userProgress?.recentlyViewed.includes(id));
      })
    : filteredNodes;

  return (
    <div className="bg-white rounded-lg shadow p-4" ref={containerRef}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-turkish-blue">Turkish Grammar Roadmap</h2>
        
        {/* View controls */}
        <div className="flex space-x-2">
          <button 
            onClick={handleZoomIn}
            className="p-2 rounded bg-gray-100 hover:bg-gray-200"
            title="Zoom In"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          <button 
            onClick={handleZoomOut}
            className="p-2 rounded bg-gray-100 hover:bg-gray-200"
            title="Zoom Out"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
            </svg>
          </button>
          <button 
            onClick={handleResetView}
            className="p-2 rounded bg-gray-100 hover:bg-gray-200"
            title="Reset View"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <button 
            onClick={toggleFocusMode}
            className={`p-2 rounded ${focusMode ? 'bg-turkish-blue-light text-turkish-blue' : 'bg-gray-100 hover:bg-gray-200'}`}
            title={focusMode ? "Show All Topics" : "Focus on Next Steps"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(pathCategories).map(([category, data]) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors
              ${selectedCategory === category 
                ? 'bg-opacity-20 text-gray-800' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            style={{ backgroundColor: selectedCategory === category ? data.color : undefined }}
          >
            {data.title}
          </button>
        ))}
      </div>
      
      {/* SVG Roadmap */}
      <div 
        className="overflow-auto border rounded-lg"
        style={{ 
          maxHeight: '600px',
          transform: `scale(${zoomLevel})`,
          transformOrigin: 'top left',
          transition: 'transform 0.3s ease'
        }}
      >
        <svg 
          width={svgDimensions.width} 
          height={svgDimensions.height} 
          viewBox={viewBox}
        >
          {/* Draw connection lines first (behind nodes) */}
          {focusNodes.map(node => (
            node.parentIds.map(parentId => {
              const parentNode = nodes.find(n => n.id === parentId);
              if (parentNode && focusNodes.some(n => n.id === parentId)) {
                const category = getPatternCategory(node.id);
                const color = pathCategories[category as keyof typeof pathCategories]?.color || '#888';
                
                // Calculate curve control points
                const midX = (node.x + parentNode.x) / 2;
                const midY = (node.y + parentNode.y) / 2;
                
                return (
                  <path
                    key={`${node.id}-${parentId}`}
                    d={`M ${parentNode.x} ${parentNode.y} Q ${midX} ${midY + 30}, ${node.x} ${node.y}`}
                    stroke={color}
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray={isPatternCompleted(parentId) && isPatternCompleted(node.id) ? "none" : "5,5"}
                    opacity={isPatternCompleted(parentId) && isPatternCompleted(node.id) ? 1 : 0.6}
                  />
                );
              }
              return null;
            })
          ))}
          
          {/* Draw category headers */}
          {!selectedCategory && Object.entries(pathCategories).map(([category, data], index) => {
            if (category !== 'advanced' && focusNodes.some(node => node.category === category)) {
              const firstNode = focusNodes.find(node => node.category === category);
              return firstNode ? (
                <g key={`header-${category}`}>
                  <text
                    x={firstNode.x}
                    y={70}
                    fontWeight="bold"
                    fontSize="16"
                    textAnchor="middle"
                    fill={data.color}
                  >
                    {data.title}
                  </text>
                  <line
                    x1={firstNode.x - 60}
                    y1={80}
                    x2={firstNode.x + 60}
                    y2={80}
                    stroke={data.color}
                    strokeWidth="2"
                  />
                </g>
              ) : null;
            }
            return null;
          })}
          
          {/* Draw nodes */}
          {focusNodes.map(node => {
            const pattern = getPatternById(node.id);
            if (!pattern) return null;
            
            const category = getPatternCategory(node.id);
            const color = pathCategories[category as keyof typeof pathCategories]?.color || '#888';
            const isCompleted = isPatternCompleted(node.id);
            const isRecommended = getNextRecommendedPatterns().includes(node.id);
            
            return (
              <g key={node.id}>
                {/* Node circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="35"
                  fill={isCompleted ? color : 'white'}
                  stroke={color}
                  strokeWidth="2"
                  opacity={isCompleted ? 1 : isRecommended ? 0.9 : 0.7}
                  style={{ filter: isRecommended && !isCompleted ? 'drop-shadow(0 0 8px rgba(0,0,0,0.4))' : '' }}
                />
                
                {/* Pulsing effect for recommended nodes */}
                {isRecommended && !isCompleted && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="38"
                    fill="none"
                    stroke={color}
                    strokeWidth="3"
                    opacity="0.6"
                    className="animate-pulse"
                  />
                )}
                
                {/* Difficulty indicator dot */}
                <circle
                  cx={node.x + 25}
                  cy={node.y - 25}
                  r="8"
                  fill={
                    pattern.difficulty === 'beginner' ? '#10B981' : 
                    pattern.difficulty === 'intermediate' ? '#F59E0B' : 
                    '#EF4444'
                  }
                  stroke="white"
                  strokeWidth="2"
                />
                
                {/* Text label for node */}
                <foreignObject 
                  x={node.x - 30} 
                  y={node.y - 15} 
                  width="60" 
                  height="30"
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      textAlign: 'center',
                      fontSize: '10px',
                      fontWeight: isCompleted ? 'bold' : 'normal',
                      color: isCompleted ? 'white' : 'black'
                    }}
                  >
                    <Link href={`/grammar/${pattern.id}`}>
                      {pattern.name.split(' ').slice(0, 2).join(' ')}
                    </Link>
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </svg>
      </div>
      
      {/* Legend */}
      <div className="mt-4 border-t pt-3">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Legend</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-white border-2 border-gray-400 mr-2"></div>
            <span className="text-xs text-gray-600">Not Started</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-turkish-blue mr-2"></div>
            <span className="text-xs text-gray-600">Completed</span>
          </div>
          <div className="flex items-center relative">
            <div className="w-4 h-4 rounded-full bg-white border-2 border-turkish-blue mr-2"></div>
            <div className="absolute w-6 h-6 rounded-full border-2 border-turkish-blue animate-pulse opacity-70"></div>
            <span className="text-xs text-gray-600">Recommended Next</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
            <span className="text-xs text-gray-600">Beginner</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
            <span className="text-xs text-gray-600">Intermediate</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
            <span className="text-xs text-gray-600">Advanced</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrammarRoadmap;
