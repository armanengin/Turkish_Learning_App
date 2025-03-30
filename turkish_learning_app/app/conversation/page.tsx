'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import { useConversation } from '../../contexts/ConversationContext';
import { useFlashcards } from '../../contexts/FlashcardContext';
import ChatMessage from '../../components/conversation/ChatMessage';
import ChatInput from '../../components/conversation/ChatInput';
import Image from 'next/image';

export default function ConversationPage() {
  const { isAuthenticated } = useAuth();
  const { 
    activeCharacter, 
    activeScenario, 
    messages, 
    isLoading, 
    startConversation, 
    sendMessage, 
    resetConversation 
  } = useConversation();
  const router = useRouter();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [suggestedResponses, setSuggestedResponses] = useState<{turkish: string, english: string}[]>([
    { turkish: "Merhaba! Nasılsınız?", english: "Hello! How are you?" },
    { turkish: "Anlamadım. Tekrar eder misiniz?", english: "I didn't understand. Can you repeat that?" },
    { turkish: "Teşekkür ederim.", english: "Thank you." }
  ]);

  // Redirect if not authenticated or if character/scenario not selected
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
      return;
    }
    
    if (!activeCharacter || !activeScenario) {
      router.push('/dashboard');
      return;
    }
    
    // Start conversation if it hasn't started yet (no messages)
    if (messages.length === 0) {
      startConversation();
    }
  }, [isAuthenticated, activeCharacter, activeScenario, messages.length, router, startConversation]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle reset conversation
  const handleReset = () => {
    resetConversation();
    startConversation();
  };

  // Handle going back to selection screens
  const handleChangeCharacter = () => {
    router.push('/characters');
  };

  const handleChangeScenario = () => {
    router.push('/scenarios');
  };

  if (!isAuthenticated || !activeCharacter || !activeScenario) {
    return null;
  }

  return (
    <div className="h-full flex flex-col">
      {/* Conversation header */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 relative mr-3">
              <Image 
                src={activeCharacter.avatar || "https://via.placeholder.com/300?text=Character"} 
                alt={activeCharacter.name}
                className="object-cover rounded-full"
                fill
              />
            </div>
            <div>
              <h1 className="font-bold text-lg">{activeCharacter.name}</h1>
              <p className="text-sm text-gray-600">
                {activeCharacter.age} • {activeCharacter.occupation} • {activeCharacter.region}
              </p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button 
              onClick={handleChangeCharacter}
              className="text-sm px-3 py-1 border border-turkish-blue text-turkish-blue rounded hover:bg-turkish-blue hover:text-white transition-colors"
            >
              Change Character
            </button>
            <button 
              onClick={handleChangeScenario}
              className="text-sm px-3 py-1 border border-turkish-blue text-turkish-blue rounded hover:bg-turkish-blue hover:text-white transition-colors"
            >
              Change Scenario
            </button>
            <button 
              onClick={handleReset}
              className="text-sm px-3 py-1 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      
      {/* Scenario description */}
      <div className="bg-turkish-turquoise bg-opacity-10 rounded-lg p-4 mb-4">
        <h2 className="font-bold text-turkish-blue mb-1">{activeScenario.title}</h2>
        <p className="text-sm mb-2">{activeScenario.description}</p>
        <p className="text-xs italic text-gray-600">{activeScenario.initialPrompt}</p>
      </div>
      
      {/* Chat messages */}
      <div className="flex-grow bg-white rounded-lg shadow-md p-4 mb-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage 
              key={message.id} 
              message={message} 
              characterAvatar={message.role === 'assistant' ? activeCharacter.avatar : undefined}
            />
          ))}
          
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="flex-shrink-0 mr-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 relative">
                  {activeCharacter.avatar && (
                    <Image 
                      src={activeCharacter.avatar}
                      alt="Character avatar" 
                      className="object-cover"
                      fill
                    />
                  )}
                </div>
              </div>
              <div className="max-w-[70%] bg-white border border-gray-200 rounded-lg p-3 shadow">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-turkish-blue rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-turkish-blue rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  <div className="w-2 h-2 bg-turkish-blue rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Chat input */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <ChatInput 
          onSendMessage={sendMessage} 
          isLoading={isLoading} 
          difficultyLevel={activeCharacter.difficultyLevel}
          suggestedResponses={suggestedResponses}
        />
      </div>
    </div>
  );
}
