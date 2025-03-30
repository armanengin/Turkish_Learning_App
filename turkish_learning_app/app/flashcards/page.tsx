'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import { useFlashcards } from '../../contexts/FlashcardContext';
import { Flashcard } from '../../types';

export default function FlashcardsPage() {
  const { isAuthenticated } = useAuth();
  const { flashcards, updateFlashcard, deleteFlashcard, getDueFlashcards } = useFlashcards();
  const router = useRouter();
  
  const [mode, setMode] = useState<'browse' | 'review'>('browse');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [dueCards, setDueCards] = useState<Flashcard[]>([]);
  const [filter, setFilter] = useState<string>('all');
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);
  
  // Set due cards when entering review mode
  useEffect(() => {
    if (mode === 'review') {
      const due = getDueFlashcards();
      setDueCards(due);
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  }, [mode, getDueFlashcards]);
  
  if (!isAuthenticated) {
    return null;
  }
  
  // Get the current flashcard for review
  const currentFlashcard = dueCards[currentIndex];
  
  // Filter flashcards based on selection
  const filteredFlashcards = filter === 'all' 
    ? flashcards 
    : flashcards.filter(card => card.category === filter);
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  const handleDifficultyRating = (difficulty: number) => {
    if (currentFlashcard) {
      updateFlashcard(currentFlashcard.id, difficulty);
      
      // Move to next card or end review
      if (currentIndex < dueCards.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setIsFlipped(false);
      } else {
        // End of review
        setMode('browse');
      }
    }
  };
  
  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this flashcard?')) {
      deleteFlashcard(id);
    }
  };
  
  const startReview = () => {
    setMode('review');
  };
  
  const exitReview = () => {
    setMode('browse');
  };
  
  return (
    <div className="animate-fadeIn">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Flashcards</h1>
        <p className="text-gray-600">
          Review vocabulary you've saved during conversations with spaced repetition.
        </p>
      </div>
      
      {mode === 'browse' ? (
        <>
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <select
                  className="turkish-input"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="vocabulary">Vocabulary</option>
                  <option value="grammar">Grammar</option>
                  <option value="phrase">Phrases</option>
                </select>
              </div>
              
              <button
                onClick={startReview}
                className="turkish-button"
                disabled={flashcards.length === 0}
              >
                Start Review Session
              </button>
            </div>
          </div>
          
          {filteredFlashcards.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFlashcards.map((card) => (
                <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4 border-b">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg text-turkish-blue">{card.turkish}</h3>
                      <span className="bg-turkish-turquoise bg-opacity-20 text-turkish-blue text-xs px-2 py-1 rounded">
                        {card.category}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-1">{card.english}</p>
                  </div>
                  
                  <div className="p-4 bg-gray-50">
                    <p className="text-sm text-gray-600 italic mb-2">"{card.exampleUsage}"</p>
                    {card.notes && <p className="text-xs text-gray-500 mb-2">{card.notes}</p>}
                    
                    <div className="flex justify-between items-center mt-2">
                      <div className="text-xs text-gray-500">
                        Created: {new Date(card.createdAt).toLocaleDateString()}
                      </div>
                      <button
                        onClick={() => handleDelete(card.id)}
                        className="text-xs text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-700 mb-2">No Flashcards Yet</h3>
              <p className="text-gray-600 mb-4">
                Save words and phrases during conversations to create flashcards.
              </p>
              <button
                onClick={() => router.push('/characters')}
                className="turkish-button"
              >
                Start a Conversation
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="max-w-2xl mx-auto">
          {dueCards.length > 0 ? (
            <div className="mb-4 text-center">
              <div className="mb-2">
                <span className="text-sm text-gray-600">
                  Card {currentIndex + 1} of {dueCards.length}
                </span>
              </div>
              
              <div 
                className={`flashcard ${isFlipped ? 'flipped' : ''}`}
                onClick={handleFlip}
              >
                <div className="flashcard-front">
                  <h3 className="text-2xl font-bold text-turkish-blue mb-4">{currentFlashcard.turkish}</h3>
                  <p className="text-gray-600 text-sm italic">Click to reveal translation</p>
                </div>
                <div className="flashcard-back">
                  <h3 className="text-2xl font-bold mb-4">{currentFlashcard.english}</h3>
                  <p className="text-sm mb-4">Example: "{currentFlashcard.exampleUsage}"</p>
                  {currentFlashcard.notes && (
                    <p className="text-sm opacity-90 mb-4">{currentFlashcard.notes}</p>
                  )}
                </div>
              </div>
              
              {isFlipped && (
                <div className="mt-6">
                  <p className="text-sm text-gray-600 mb-2">How well did you remember this?</p>
                  <div className="flex justify-between space-x-2">
                    <button 
                      onClick={() => handleDifficultyRating(1)}
                      className="flex-1 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                      Forgot
                    </button>
                    <button 
                      onClick={() => handleDifficultyRating(3)}
                      className="flex-1 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                    >
                      Hard
                    </button>
                    <button 
                      onClick={() => handleDifficultyRating(4)}
                      className="flex-1 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                    >
                      Good
                    </button>
                    <button 
                      onClick={() => handleDifficultyRating(5)}
                      className="flex-1 py-2 bg-turkish-blue text-white rounded hover:bg-opacity-90 transition-colors"
                    >
                      Easy
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-700 mb-2">No Cards Due for Review</h3>
              <p className="text-gray-600 mb-4">
                You've completed all your reviews for now. Check back later!
              </p>
              <button
                onClick={exitReview}
                className="turkish-button"
              >
                Back to Flashcards
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
