'use client';

import { Message } from '../../types';
import { useFlashcards } from '../../contexts/FlashcardContext';
import Image from 'next/image';

interface ChatMessageProps {
  message: Message;
  characterAvatar?: string;
}

export default function ChatMessage({ message, characterAvatar }: ChatMessageProps) {
  const { addFlashcard } = useFlashcards();
  
  const isUserMessage = message.role === 'user';
  
  const handleSaveWord = (word: string, translation: string) => {
    addFlashcard({
      turkish: word,
      english: translation,
      exampleUsage: message.content.turkish,
      category: 'vocabulary'
    });
  };
  
  return (
    <div className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUserMessage && (
        <div className="flex-shrink-0 mr-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 relative">
            {characterAvatar && (
              <Image 
                src={characterAvatar}
                alt="Character avatar" 
                className="object-cover"
                fill
              />
            )}
          </div>
        </div>
      )}
      
      <div className={`max-w-[70%] ${isUserMessage ? 'bg-turkish-blue text-white' : 'bg-white border border-gray-200'} rounded-lg p-3 shadow`}>
        {/* Turkish content */}
        <p className={`font-bold ${isUserMessage ? 'text-white' : 'text-turkish-blue'} mb-1`}>
          {message.content.turkish}
        </p>
        
        {/* English translation */}
        <p className="text-sm opacity-80">
          {message.content.english}
        </p>
        
        {/* Grammar notes if available */}
        {message.grammarNotes && (
          <div className="mt-2 p-2 bg-gray-100 bg-opacity-20 rounded text-xs">
            <p className="font-semibold">Grammar Note:</p>
            <p>{message.grammarNotes}</p>
          </div>
        )}
        
        {/* Vocabulary highlights */}
        {message.highlightedVocabulary && message.highlightedVocabulary.length > 0 && (
          <div className="mt-2">
            <p className="text-xs font-semibold mb-1">Vocabulary:</p>
            <div className="flex flex-wrap gap-1">
              {message.highlightedVocabulary.map((item, index) => (
                <button
                  key={index}
                  className="text-xs bg-turkish-turquoise bg-opacity-20 text-turkish-blue hover:bg-opacity-30 px-2 py-1 rounded flex items-center"
                  onClick={() => handleSaveWord(item.word, item.translation)}
                  title="Click to save to flashcards"
                >
                  <span>{item.word}</span>
                  <span className="mx-1">-</span>
                  <span>{item.translation}</span>
                  <span className="ml-1 text-gray-500">+</span>
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Message timestamp */}
        <div className="text-right mt-1">
          <span className="text-xs opacity-50">
            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
      
      {isUserMessage && (
        <div className="flex-shrink-0 ml-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600 font-bold">U</span>
          </div>
        </div>
      )}
    </div>
  );
}
