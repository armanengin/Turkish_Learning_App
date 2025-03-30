import { Scenario } from '../types';

export const scenarios: Scenario[] = [
  {
    id: 'grand-bazaar',
    title: 'Grand Bazaar Shopping',
    description: 'Practice bargaining and shopping vocabulary in Istanbul\'s famous Grand Bazaar.',
    location: 'Grand Bazaar, Istanbul',
    difficultyLevel: 'beginner',
    estimatedDuration: '5-10 minutes',
    keyVocabulary: [
      'kaç para', 'pahalı', 'ucuz', 'lira', 'indirim', 'almak', 'satmak'
    ],
    culturalNotes: 'Bargaining is a cultural tradition in Turkish bazaars. It\'s expected and often seen as a friendly interaction, not confrontational.',
    initialPrompt: 'You are browsing colorful Turkish ceramics in the Grand Bazaar when the shopkeeper approaches you with a friendly smile.',
    recommendedCharacters: ['istanbul-vendor']
  },
  {
    id: 'cafe-experience',
    title: 'Café Experience',
    description: 'Order drinks and snacks while chatting with a friendly server in a modern Istanbul café.',
    location: 'Modern café, Istanbul',
    difficultyLevel: 'beginner-intermediate',
    estimatedDuration: '5-10 minutes',
    keyVocabulary: [
      'kahve', 'çay', 'su', 'menü', 'lütfen', 'hesap', 'sıcak', 'soğuk'
    ],
    culturalNotes: 'Turkish coffee and tea culture is central to social life. Cafés are places for long conversations and people-watching.',
    initialPrompt: 'You enter a charming café looking for refreshment. The young server greets you warmly and asks what you\'d like to order.',
    recommendedCharacters: ['cafe-server']
  },
  {
    id: 'waterfront-conversation',
    title: 'Waterfront Conversation',
    description: 'Enjoy a relaxing conversation by the sea, discussing the scenery and local seafood.',
    location: 'Seaside restaurant, Aegean Coast',
    difficultyLevel: 'beginner',
    estimatedDuration: '5-10 minutes',
    keyVocabulary: [
      'deniz', 'balık', 'manzara', 'güzel', 'restoran', 'yemek', 'içmek'
    ],
    culturalNotes: 'Coastal life in Turkey revolves around the sea, with seafood being an important part of the cuisine and culture.',
    initialPrompt: 'You\'re seated at a beautiful seaside restaurant with a stunning view. The friendly owner approaches to welcome you and recommend today\'s fresh catch.',
    recommendedCharacters: ['waterfront-owner']
  },
  {
    id: 'finding-your-way',
    title: 'Finding Your Way',
    description: 'Practice asking for directions and understanding location instructions in the city.',
    location: 'City streets, Ankara',
    difficultyLevel: 'intermediate',
    estimatedDuration: '5-10 minutes',
    keyVocabulary: [
      'nerede', 'sağ', 'sol', 'düz', 'yakın', 'uzak', 'cadde', 'sokak'
    ],
    culturalNotes: 'Turks are generally very helpful to tourists who are lost. It\'s common to escort someone part way rather than just giving directions.',
    initialPrompt: 'You\'re trying to find your way to a famous local landmark, but you seem to be lost. You decide to ask someone for directions.',
    recommendedCharacters: ['university-student', 'cafe-server']
  },
  {
    id: 'birthday-celebration',
    title: 'Celebrating a Birthday',
    description: 'Learn birthday wishes and gift-giving expressions in a celebratory context.',
    location: 'Home setting, Turkey',
    difficultyLevel: 'beginner-intermediate',
    estimatedDuration: '5-10 minutes',
    keyVocabulary: [
      'doğum günü', 'hediye', 'kutlamak', 'pasta', 'dilek', 'mutlu', 'teşekkür ederim'
    ],
    culturalNotes: 'Turkish birthday celebrations often include traditional foods, strong family presence, and specific well-wishing expressions.',
    initialPrompt: 'You\'ve been invited to a Turkish friend\'s birthday celebration. As you arrive with a gift, family members warmly welcome you.',
    recommendedCharacters: ['eastern-farmer', 'cafe-server', 'waterfront-owner']
  }
];
