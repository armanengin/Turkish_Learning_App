'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { Flashcard } from '../types';

interface FlashcardContextType {
  flashcards: Flashcard[];
  addFlashcard: (flashcard: Omit<Flashcard, 'id' | 'createdAt' | 'easinessFactor' | 'interval' | 'repetitions'>) => void;
  updateFlashcard: (id: string, difficulty: number) => void;
  deleteFlashcard: (id: string) => void;
  getDueFlashcards: () => Flashcard[];
}

const FlashcardContext = createContext<FlashcardContextType | undefined>(undefined);

export function FlashcardProvider({ children }: { children: React.ReactNode }) {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

  useEffect(() => {
    // Load flashcards from localStorage on mount
    const savedFlashcardsJson = localStorage.getItem('flashcards');
    if (savedFlashcardsJson) {
      setFlashcards(JSON.parse(savedFlashcardsJson));
    }
  }, []);

  // Save flashcards to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
  }, [flashcards]);

  const addFlashcard = (newFlashcard: Omit<Flashcard, 'id' | 'createdAt' | 'easinessFactor' | 'interval' | 'repetitions'>) => {
    const flashcard: Flashcard = {
      ...newFlashcard,
      id: Date.now().toString(),
      createdAt: Date.now(),
      easinessFactor: 2.5, // Default value for SM-2 algorithm
      interval: 1, // Days until next review
      repetitions: 0 // Number of successful reviews in a row
    };

    setFlashcards(prevFlashcards => [...prevFlashcards, flashcard]);
  };

  const updateFlashcard = (id: string, difficulty: number) => {
    // Implement SM-2 spaced repetition algorithm
    setFlashcards(prevFlashcards => 
      prevFlashcards.map(card => {
        if (card.id !== id) return card;

        // SM-2 algorithm implementation
        let newEasinessFactor = card.easinessFactor;
        let newInterval = card.interval;
        let newRepetitions = card.repetitions;

        // Update based on difficulty rating (0-5 scale)
        if (difficulty >= 3) {
          // Successful recall
          if (newRepetitions === 0) {
            newInterval = 1;
          } else if (newRepetitions === 1) {
            newInterval = 6;
          } else {
            newInterval = Math.round(newInterval * newEasinessFactor);
          }
          newRepetitions += 1;
        } else {
          // Failed recall
          newRepetitions = 0;
          newInterval = 1;
        }

        // Update easiness factor
        newEasinessFactor = Math.max(
          1.3, 
          newEasinessFactor + (0.1 - (5 - difficulty) * (0.08 + (5 - difficulty) * 0.02))
        );

        // Calculate next review date
        const now = new Date();
        const nextReviewDate = new Date(now.setDate(now.getDate() + newInterval)).getTime();

        return {
          ...card,
          lastReviewed: Date.now(),
          nextReviewDate,
          easinessFactor: newEasinessFactor,
          interval: newInterval,
          repetitions: newRepetitions
        };
      })
    );
  };

  const deleteFlashcard = (id: string) => {
    setFlashcards(prevFlashcards => 
      prevFlashcards.filter(card => card.id !== id)
    );
  };

  const getDueFlashcards = () => {
    const now = Date.now();
    return flashcards.filter(card => 
      !card.nextReviewDate || card.nextReviewDate <= now
    );
  };

  return (
    <FlashcardContext.Provider value={{
      flashcards,
      addFlashcard,
      updateFlashcard,
      deleteFlashcard,
      getDueFlashcards
    }}>
      {children}
    </FlashcardContext.Provider>
  );
}

export function useFlashcards() {
  const context = useContext(FlashcardContext);
  if (context === undefined) {
    throw new Error('useFlashcards must be used within a FlashcardProvider');
  }
  return context;
}
