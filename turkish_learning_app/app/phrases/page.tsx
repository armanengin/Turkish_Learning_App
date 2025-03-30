'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import { useFlashcards } from '../../contexts/FlashcardContext';

// Common phrases data
const phrasesData = [
  {
    category: "Greetings & Basics",
    phrases: [
      { turkish: "Merhaba", english: "Hello", notes: "Standard greeting" },
      { turkish: "Günaydın", english: "Good morning", notes: "Used until around noon" },
      { turkish: "İyi günler", english: "Good day", notes: "Can be used as hello or goodbye" },
      { turkish: "İyi akşamlar", english: "Good evening", notes: "Used after sunset" },
      { turkish: "Hoşça kal", english: "Goodbye (to person staying)", notes: "Said by the person leaving" },
      { turkish: "Güle güle", english: "Goodbye (to person leaving)", notes: "Said by the person staying" },
      { turkish: "Teşekkür ederim", english: "Thank you", notes: "Formal, polite" },
      { turkish: "Sağ ol", english: "Thanks", notes: "Informal, casual" },
      { turkish: "Rica ederim", english: "You're welcome", notes: "Response to thanks" },
      { turkish: "Lütfen", english: "Please", notes: "Used when making requests" },
      { turkish: "Özür dilerim", english: "I'm sorry", notes: "For apologies" },
      { turkish: "Affedersiniz", english: "Excuse me", notes: "To get attention or apologize" }
    ]
  },
  {
    category: "Introductions",
    phrases: [
      { turkish: "Benim adım [name]", english: "My name is [name]", notes: "Formal introduction" },
      { turkish: "Ben [name]", english: "I'm [name]", notes: "Casual introduction" },
      { turkish: "Memnun oldum", english: "Nice to meet you", notes: "Literally: 'I became pleased'" },
      { turkish: "Ben de memnun oldum", english: "Nice to meet you too", notes: "Response to 'memnun oldum'" },
      { turkish: "Nasılsınız?", english: "How are you? (formal)", notes: "Used when addressing someone formally" },
      { turkish: "Nasılsın?", english: "How are you? (informal)", notes: "Used with friends and family" },
      { turkish: "İyiyim, teşekkürler", english: "I'm fine, thank you", notes: "Common response" },
      { turkish: "Nerelisiniz?", english: "Where are you from? (formal)", notes: "Asking about origin" },
      { turkish: "Nerelisin?", english: "Where are you from? (informal)", notes: "Asking about origin casually" },
      { turkish: "Ben Amerikalıyım", english: "I am American", notes: "Replace with your nationality" }
    ]
  },
  {
    category: "Cafe & Restaurant",
    phrases: [
      { turkish: "Menü alabilir miyim?", english: "Can I have a menu?", notes: "When seated at a restaurant" },
      { turkish: "Ne önerirsiniz?", english: "What do you recommend?", notes: "Asking for suggestions" },
      { turkish: "Bir [item] lütfen", english: "One [item] please", notes: "Basic ordering format" },
      { turkish: "Hesap alabilir miyim?", english: "Can I have the bill?", notes: "Asking for the check" },
      { turkish: "Bir kahve lütfen", english: "One coffee please", notes: "Ordering coffee" },
      { turkish: "Şekerli/Şekersiz", english: "With sugar/Without sugar", notes: "Coffee preference" },
      { turkish: "Afiyet olsun", english: "Enjoy your meal", notes: "Said before eating" },
      { turkish: "Çok lezzetli", english: "Very delicious", notes: "Complimenting the food" },
      { turkish: "Suyu var mı?", english: "Is there water?", notes: "Asking for water" },
      { turkish: "Bir şişe su lütfen", english: "A bottle of water please", notes: "Ordering water" }
    ]
  },
  {
    category: "Shopping & Bargaining",
    phrases: [
      { turkish: "Ne kadar?", english: "How much?", notes: "Asking for price" },
      { turkish: "Çok pahalı", english: "Very expensive", notes: "When bargaining" },
      { turkish: "İndirim yapabilir misiniz?", english: "Can you give a discount?", notes: "Negotiating" },
      { turkish: "Bunu deneyebilir miyim?", english: "Can I try this on?", notes: "For clothing" },
      { turkish: "Başka rengi var mı?", english: "Do you have another color?", notes: "Shopping for alternatives" },
      { turkish: "Kredi kartı kabul ediyor musunuz?", english: "Do you accept credit cards?", notes: "Payment inquiry" },
      { turkish: "Sadece bakıyorum", english: "I'm just looking", notes: "When browsing" },
      { turkish: "Bunu alacağım", english: "I'll take this", notes: "Making a purchase decision" },
      { turkish: "Fiş alabilir miyim?", english: "Can I have a receipt?", notes: "Asking for receipt" },
      { turkish: "Teşekkürler, iyi günler", english: "Thank you, have a good day", notes: "Leaving a shop" }
    ]
  },
  {
    category: "Directions & Transport",
    phrases: [
      { turkish: "Nerede?", english: "Where is?", notes: "Basic location question" },
      { turkish: "[Place] nerede?", english: "Where is [place]?", notes: "Asking for directions" },
      { turkish: "Sağda/Solda", english: "On the right/On the left", notes: "Directional" },
      { turkish: "Düz devam edin", english: "Go straight ahead", notes: "Direction instruction" },
      { turkish: "Yakın mı?", english: "Is it close?", notes: "Asking about distance" },
      { turkish: "Bir taksi lütfen", english: "A taxi please", notes: "Requesting transport" },
      { turkish: "Buraya gidebilir miyiz?", english: "Can we go here?", notes: "Showing an address" },
      { turkish: "Otobüs durağı nerede?", english: "Where is the bus stop?", notes: "Public transportation" },
      { turkish: "Ne zaman varırız?", english: "When will we arrive?", notes: "Asking about ETA" },
      { turkish: "Burada durabilir misiniz?", english: "Can you stop here?", notes: "Requesting to stop" }
    ]
  },
  {
    category: "Emergency & Health",
    phrases: [
      { turkish: "Yardım!", english: "Help!", notes: "Emergency call" },
      { turkish: "Polis çağırır mısınız?", english: "Can you call the police?", notes: "Requesting police" },
      { turkish: "Ambulans lütfen", english: "Ambulance please", notes: "Medical emergency" },
      { turkish: "Hastanede", english: "At the hospital", notes: "Location" },
      { turkish: "Doktor lazım", english: "I need a doctor", notes: "Medical need" },
      { turkish: "Hasta hissediyorum", english: "I feel sick", notes: "Expressing illness" },
      { turkish: "Ağrım var", english: "I have pain", notes: "General pain" },
      { turkish: "Baş ağrısı", english: "Headache", notes: "Specific pain" },
      { turkish: "İlaç", english: "Medicine", notes: "Requesting medication" },
      { turkish: "Alerjim var", english: "I have an allergy", notes: "Medical information" }
    ]
  }
];

export default function PhrasesPage() {
  const { isAuthenticated } = useAuth();
  const { addFlashcard } = useFlashcards();
  const router = useRouter();
  
  const [selectedCategory, setSelectedCategory] = useState("Greetings & Basics");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);
  
  if (!isAuthenticated) {
    return null;
  }
  
  // Filter phrases based on search term
  const filteredData = phrasesData.map(category => {
    const filteredPhrases = category.phrases.filter(phrase => 
      phrase.turkish.toLowerCase().includes(searchTerm.toLowerCase()) || 
      phrase.english.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return {
      ...category,
      phrases: filteredPhrases
    };
  }).filter(category => category.phrases.length > 0);
  
  // Get current category phrases
  const currentCategory = searchTerm 
    ? filteredData 
    : phrasesData.filter(category => category.category === selectedCategory);
  
  // Handle adding phrase to flashcards
  const handleAddToFlashcards = (phrase: any) => {
    addFlashcard({
      turkish: phrase.turkish,
      english: phrase.english,
      exampleUsage: phrase.turkish, // Using the phrase itself as an example
      notes: phrase.notes,
      category: 'phrase'
    });
    
    // Show confirmation
    alert(`Added "${phrase.turkish}" to your flashcards!`);
  };
  
  return (
    <div className="animate-fadeIn">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Common Turkish Phrases</h1>
        <p className="text-gray-600">
          Browse essential Turkish expressions organized by situation.
          Click the + button to add any phrase to your flashcards for review.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Search phrases in Turkish or English..."
              className="turkish-input w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {!searchTerm && (
            <div>
              <select
                className="turkish-input"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {phrasesData.map((category, index) => (
                  <option key={index} value={category.category}>
                    {category.category} ({category.phrases.length})
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
      
      {currentCategory.length > 0 ? (
        <>
          {currentCategory.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-turkish-blue">
                {category.category}
              </h2>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-turkish-blue bg-opacity-10">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-turkish-blue">Turkish</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-turkish-blue">English</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-turkish-blue">Notes</th>
                      <th className="px-4 py-3 w-16"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {category.phrases.map((phrase, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-turkish-blue font-medium">
                          {phrase.turkish}
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          {phrase.english}
                        </td>
                        <td className="px-4 py-3 text-gray-500 text-sm">
                          {phrase.notes}
                        </td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => handleAddToFlashcards(phrase)}
                            className="p-1 rounded-full text-turkish-blue hover:bg-turkish-blue hover:text-white transition-colors"
                            title="Add to flashcards"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-gray-500">No phrases match your search. Try different keywords.</p>
        </div>
      )}
      
      <div className="mt-8 p-4 bg-turkish-blue bg-opacity-5 rounded-lg">
        <h3 className="font-bold text-turkish-blue mb-2">Pro Tip</h3>
        <p className="text-gray-600 text-sm">
          Turkish pronunciation is generally phonetic, meaning words are pronounced as they are spelled. 
          The Turkish alphabet includes special characters like ç (ch), ş (sh), ğ (elongates the preceding vowel), 
          ı (undotted i), and ö and ü (similar to German).
        </p>
      </div>
    </div>
  );
}
