'use client';

import React, { useState, useEffect } from 'react';
import { GrammarPattern, PracticeExercise, GrammarExerciseItem } from '../../types/grammar';
import WordBreakdown from './WordBreakdown';
import { useGrammarTutor } from '../../contexts/GrammarTutorContext';
import Link from 'next/link';
import { VisualAidRenderer } from '../visuals';

interface GrammarLessonDetailProps {
  pattern: GrammarPattern;
}

export default function GrammarLessonDetail({ pattern }: GrammarLessonDetailProps) {
  const { savePattern, userProgress, getPracticeExercises, tutorMessages } = useGrammarTutor();
  const [activeTab, setActiveTab] = useState<'explanation' | 'examples' | 'practice'>('explanation');
  const [practiceExercises, setPracticeExercises] = useState<PracticeExercise[]>(pattern.practiceExercises || []);
  const [loading, setLoading] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{[key: number]: string}>({});
  const [checkedExercises, setCheckedExercises] = useState<{[key: number]: boolean}>({});
  const [isCorrect, setIsCorrect] = useState<{[key: number]: boolean}>({});
  
  const isSaved = userProgress?.savedPatterns.includes(pattern.id) || false;
  
  // Effect to watch tutorMessages for new exercises
  useEffect(() => {
    // Look for the latest tutor message that might contain exercises
    const latestTutorMsg = [...tutorMessages]
      .reverse()
      .find(msg => 
        msg.role === 'tutor' && 
        msg.aiResponse?.exercise?.items && 
        Array.isArray(msg.aiResponse.exercise.items) && 
        msg.aiResponse.exercise.items.length > 0
      );
    
    if (latestTutorMsg?.aiResponse?.exercise?.items) {
      // Convert the exercise items to our PracticeExercise format
      const newExercises: PracticeExercise[] = latestTutorMsg.aiResponse.exercise.items.map((item: GrammarExerciseItem) => ({
        type: 'fill-in-blank',
        prompt: item.prompt,
        correctAnswer: item.answer,
        explanation: item.rule,
        relatedRule: pattern.id
      }));
      
      // Update exercises if we found new ones
      if (newExercises.length > 0) {
        setPracticeExercises(prev => [...prev, ...newExercises]);
        setLoading(false);
      }
    }
  }, [tutorMessages, pattern.id]);
  
  const handleSavePattern = () => {
    savePattern(pattern.id);
  };
  
  const handleGetMorePractice = () => {
    setLoading(true);
    // Just call the function which updates the context
    getPracticeExercises(pattern.id);
    // The useEffect above will capture the new exercises when tutorMessages updates
  };
  
  // Map difficulty to color
  const difficultyColor = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  }[pattern.difficulty];
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      {/* Header */}
      <div className="bg-turkish-blue p-4 text-white flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold mb-1">{pattern.name}</h2>
          {pattern.summary && (
            <p className="text-sm text-blue-100 mb-2">{pattern.summary}</p>
          )}
          <div className="flex items-center gap-2">
            <span className={`text-xs px-2 py-1 rounded ${difficultyColor}`}>
              {pattern.difficulty.charAt(0).toUpperCase() + pattern.difficulty.slice(1)}
            </span>
            <span className="text-xs px-2 py-1 rounded bg-blue-200 text-blue-800">
              {typeof pattern.category === 'string' && pattern.category.split('-').map((word: string) => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </span>
          </div>
        </div>
        <button 
          onClick={handleSavePattern}
          className="bg-white text-turkish-blue px-3 py-1 rounded hover:bg-gray-100"
        >
          {isSaved ? 'Saved ★' : 'Save ☆'}
        </button>
      </div>
      
      {/* Tabs */}
      <div className="border-b">
        <nav className="flex">
          <button 
            className={`px-4 py-2 border-b-2 ${activeTab === 'explanation' ? 'border-turkish-blue text-turkish-blue' : 'border-transparent'}`}
            onClick={() => setActiveTab('explanation')}
          >
            Explanation
          </button>
          <button 
            className={`px-4 py-2 border-b-2 ${activeTab === 'examples' ? 'border-turkish-blue text-turkish-blue' : 'border-transparent'}`}
            onClick={() => setActiveTab('examples')}
          >
            Examples
          </button>
          <button 
            className={`px-4 py-2 border-b-2 ${activeTab === 'practice' ? 'border-turkish-blue text-turkish-blue' : 'border-transparent'}`}
            onClick={() => setActiveTab('practice')}
          >
            Practice
          </button>
        </nav>
      </div>
      
      {/* Tab Content */}
      <div className="p-4">
        {activeTab === 'explanation' && (
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Formula</h3>
              <div className="bg-gray-50 p-3 rounded font-mono text-gray-800">
                {pattern.formula ? (
                  <div className="mb-1">{pattern.formula}</div>
                ) : pattern.formulas && pattern.formulas.map((formula, index) => (
                  <div key={index} className="mb-1">{formula}</div>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Explanation</h3>
              <div className="text-gray-700">
                {pattern.explanation}
              </div>
            </div>
            
            {pattern.usageNotes && pattern.usageNotes.length > 0 && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Usage Notes</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {pattern.usageNotes.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {pattern.exceptions && pattern.exceptions.length > 0 && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Exceptions</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {pattern.exceptions.map((exception, index) => (
                    <li key={index}>{exception}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {pattern.commonErrors && pattern.commonErrors.length > 0 && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Common Mistakes</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {pattern.commonErrors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {pattern.notes && (
              <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-100">
                <h4 className="font-medium text-blue-700 mb-1">Notes</h4>
                <p className="text-blue-800 text-sm">{pattern.notes}</p>
              </div>
            )}
            
            {pattern.culturalContext && (
              <div className="mt-4 p-3 bg-teal-50 rounded-md border border-teal-100">
                <h4 className="font-medium text-teal-700 mb-1">Cultural Context</h4>
                <p className="text-teal-800 text-sm">{pattern.culturalContext}</p>
              </div>
            )}
            
            {pattern.visualAids && pattern.visualAids.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Visual Aids</h3>
                <div className="space-y-4">
                  {pattern.visualAids.map((aid, index) => (
                    <VisualAidRenderer key={index} visualAid={aid} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'examples' && (
          <div className="space-y-6">
            {pattern.examples && pattern.examples.map((example, index) => (
              <div key={index} className="border rounded-lg p-3">
                <div className="text-lg font-medium mb-1">{example.turkish}</div>
                <div className="text-gray-600 mb-3">{example.english}</div>
                
                {example.context && (
                  <div className="text-sm text-gray-500 italic mb-3">
                    Context: {example.context}
                  </div>
                )}
                
                {example.breakdown && (
                  <div className="mt-2 pt-2 border-t">
                    <WordBreakdown 
                      breakdown={example.breakdown} 
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'practice' && (
          <div>
            {practiceExercises.length > 0 ? (
              <div className="space-y-4">
                {practiceExercises.map((exercise, index) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                        {exercise.type}
                      </span>
                    </div>
                    
                    <div className="mb-3 font-medium">{exercise.prompt}</div>
                    
                    {exercise.type === 'multiple-choice' && exercise.alternatives ? (
                      <div className="space-y-2">
                        {[exercise.correctAnswer, ...(exercise.alternatives || [])].sort().map((option, optIndex) => (
                          <div key={optIndex} className="flex items-center">
                            <input 
                              type="radio" 
                              name={`exercise-${index}`} 
                              id={`option-${index}-${optIndex}`}
                              className="mr-2"
                              value={option}
                              onChange={(e) => {
                                setUserAnswers({...userAnswers, [index]: e.target.value});
                                setCheckedExercises({...checkedExercises, [index]: false});
                              }}
                              checked={userAnswers[index] === option}
                            />
                            <label htmlFor={`option-${index}-${optIndex}`}>{option}</label>
                          </div>
                        ))}
                      </div>
                    ) : exercise.type === 'fill-in-blank' ? (
                      <div className="mb-3">
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded" 
                          placeholder="Your answer..."
                          value={userAnswers[index] || ''}
                          onChange={(e) => {
                            setUserAnswers({...userAnswers, [index]: e.target.value});
                            setCheckedExercises({...checkedExercises, [index]: false});
                          }}
                        />
                      </div>
                    ) : (
                      <div className="mb-3">
                        <textarea 
                          className="w-full p-2 border rounded" 
                          rows={3}
                          placeholder="Your answer..."
                          value={userAnswers[index] || ''}
                          onChange={(e) => {
                            setUserAnswers({...userAnswers, [index]: e.target.value});
                            setCheckedExercises({...checkedExercises, [index]: false});
                          }}
                        ></textarea>
                      </div>
                    )}
                    
                    <div className="mt-2 flex justify-end">
                      <button 
                        className="bg-turkish-blue text-white px-3 py-1 rounded text-sm"
                        onClick={() => {
                          // Check if the answer is correct
                          let answerCorrect = false;
                          const userAnswer = userAnswers[index] || '';
                          
                          if (exercise.type === 'multiple-choice') {
                            answerCorrect = userAnswer === exercise.correctAnswer;
                          } else if (exercise.type === 'fill-in-blank') {
                            // For fill-in-blank, check against correctAnswer or alternatives if available
                            if (exercise.alternatives) {
                              answerCorrect = userAnswer.trim().toLowerCase() === exercise.correctAnswer.trim().toLowerCase() || 
                                exercise.alternatives.some(alt => userAnswer.trim().toLowerCase() === alt.trim().toLowerCase());
                            } else {
                              answerCorrect = userAnswer.trim().toLowerCase() === exercise.correctAnswer.trim().toLowerCase();
                            }
                          } else if (exercise.type === 'match-pairs') {
                            // Basic exact match for now (could be enhanced for match pairs)
                            answerCorrect = userAnswer.trim().toLowerCase() === exercise.correctAnswer.trim().toLowerCase();
                          } else if (exercise.type === 'error-correction' || exercise.type === 'translation') {
                            // For these types, check against correctAnswer or alternatives if available
                            if (exercise.alternatives) {
                              answerCorrect = userAnswer.trim().toLowerCase() === exercise.correctAnswer.trim().toLowerCase() || 
                                exercise.alternatives.some(alt => userAnswer.trim().toLowerCase() === alt.trim().toLowerCase());
                            } else {
                              answerCorrect = userAnswer.trim().toLowerCase() === exercise.correctAnswer.trim().toLowerCase();
                            }
                          } else if (exercise.type === 'sentence-building') {
                            // For sentence building, check against correctAnswer or alternatives if available
                            if (exercise.alternatives) {
                              answerCorrect = userAnswer.trim().toLowerCase() === exercise.correctAnswer.trim().toLowerCase() || 
                                exercise.alternatives.some(alt => userAnswer.trim().toLowerCase() === alt.trim().toLowerCase());
                            } else {
                              answerCorrect = userAnswer.trim().toLowerCase() === exercise.correctAnswer.trim().toLowerCase();
                            }
                          }
                          
                          // Update state to mark this exercise as checked and store the result
                          setCheckedExercises({...checkedExercises, [index]: true});
                          setIsCorrect({...isCorrect, [index]: answerCorrect});
                        }}
                      >
                        Check
                      </button>
                    </div>
                    
                    {checkedExercises[index] && (
                      <div className={`mt-3 p-2 ${isCorrect[index] ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'} rounded text-sm`}>
                        {isCorrect[index] ? (
                          <div>
                            <p className="font-medium">Correct! ✓</p>
                            {exercise.explanation && <p className="mt-1">{exercise.explanation}</p>}
                          </div>
                        ) : (
                          <div>
                            <p className="font-medium">Not quite right. ✗</p>
                            <p className="mt-1">The correct answer is: {exercise.correctAnswer}</p>
                            {exercise.explanation && <p className="mt-1">{exercise.explanation}</p>}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-gray-500 mb-4">No practice exercises available for this grammar pattern yet.</p>
              </div>
            )}
            
            <button 
              onClick={handleGetMorePractice}
              className={`mt-4 px-4 py-2 rounded text-white w-full ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-turkish-blue hover:bg-turkish-blue-dark'}`}
              disabled={loading}
            >
              {loading ? 'Generating...' : 'Generate More Practice Exercises'}
            </button>
          </div>
        )}
      </div>
      
      {/* Related Grammar Patterns */}
      {pattern.relatedPatterns && pattern.relatedPatterns.length > 0 && (
        <div className="bg-gray-50 p-4 border-t">
          <h3 className="text-lg font-semibold mb-2">Related Grammar Patterns</h3>
          <div className="flex flex-wrap gap-2">
            {pattern.relatedPatterns.map(relatedId => (
              <Link 
                key={relatedId}
                href={`/grammar/${relatedId}`}
                className="px-3 py-1 bg-white border rounded-full text-sm hover:bg-gray-100"
              >
                {relatedId.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Categories */}
      {pattern.categories && pattern.categories.length > 0 && (
        <div className="bg-gray-50 p-4 border-t">
          <h3 className="text-sm font-semibold mb-2">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {pattern.categories.map(category => (
              <Link 
                key={category}
                href={`/grammar?category=${category}`}
                className="px-2 py-1 bg-white border rounded-full text-xs hover:bg-gray-100"
              >
                {category.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
