import axios from 'axios';
import { Character, Scenario, AIResponse } from '../types';

// Use environment variables for API configuration
const OPENROUTER_API_KEY = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY || '';
const API_URL = process.env.NEXT_PUBLIC_OPENROUTER_API_URL || 'https://openrouter.ai/api/v1/chat/completions';

export async function generateAIResponse(
  character: Character,
  scenario: Scenario,
  messages: { role: 'user' | 'assistant', content: string }[]
): Promise<AIResponse> {
  try {
    // Format the conversation history for the AI
    const formattedMessages = [
      // System message with character information
      {
        role: 'system',
        content: character.systemPrompt
      },
      // Context message with scenario information
      {
        role: 'system',
        content: `The conversation is taking place in this scenario: ${scenario.description} at ${scenario.location}. 
        Initial situation: ${scenario.initialPrompt}`
      },
      // Format message history
      ...messages.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      // Instructions for response format
      {
        role: 'system',
        content: `Please format your response in JSON structure like this:
        {
          "turkish": "Your response in Turkish",
          "english": "English translation of your response",
          "grammarNotes": "Optional brief explanation of grammar used",
          "vocabulary": [
            {"word": "important_word1", "translation": "translation1"},
            {"word": "important_word2", "translation": "translation2"}
          ],
          "suggestedResponses": [
            {"turkish": "suggested_response1", "english": "translation1"},
            {"turkish": "suggested_response2", "english": "translation2"}
          ]
        }`
      }
    ];

    // Make the actual API call to OpenRouter
    try {
      const response = await axios.post(
        API_URL,
        {
          model: 'google/gemini-2.0-flash-001',
          messages: formattedMessages,
          temperature: 0.7,
          max_tokens: 800,
          response_format: { type: "json_object" }
        },
        {
          headers: {
            'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
            'HTTP-Referer': typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000',
            'Content-Type': 'application/json'
          }
        }
      );
      
      // Parse the JSON response
      let aiResponse: AIResponse;
      try {
        aiResponse = JSON.parse(response.data.choices[0].message.content);
        return aiResponse;
      } catch (parseError) {
        console.error("Error parsing AI response:", parseError);
        // If parsing fails, fall back to demo response
        return generateFallbackResponse(character, scenario);
      }
    } catch (apiError) {
      console.error("API call error:", apiError);
      // Fall back to demo response if API call fails
      return generateFallbackResponse(character, scenario);
    }
  } catch (error) {
    console.error("Error in generateAIResponse:", error);
    return generateFallbackResponse(character, scenario);
  }
}

// Helper function to generate fallback responses when API fails
function generateFallbackResponse(character: Character, scenario: Scenario): AIResponse {
  console.log("Using fallback response");
  
  if (character.difficultyLevel === 'beginner') {
    return {
      turkish: `Merhaba! Benim adım ${character.name}. ${scenario.location}'da hoş geldiniz. Size nasıl yardımcı olabilirim?`,
      english: `Hello! My name is ${character.name}. Welcome to ${scenario.location}. How can I help you?`,
      grammarNotes: "This uses the dative case with '-da' for location (at the location).",
      vocabulary: [
        { word: "merhaba", translation: "hello" },
        { word: "hoş geldiniz", translation: "welcome" },
        { word: "nasıl", translation: "how" },
        { word: "yardımcı olmak", translation: "to help" }
      ],
      suggestedResponses: [
        { turkish: "Merhaba! Benim adım [isim]. Tanıştığımıza memnun oldum.", english: "Hello! My name is [name]. Nice to meet you." },
        { turkish: "Teşekkür ederim. Türkçe öğreniyorum.", english: "Thank you. I am learning Turkish." },
        { turkish: "Burada ne tavsiye edersiniz?", english: "What do you recommend here?" }
      ]
    };
  } else if (character.difficultyLevel === 'intermediate') {
    return {
      turkish: `Merhaba! ${scenario.location}'ya hoş geldiniz. Ben ${character.name}, ${character.occupation} olarak çalışıyorum. Bugün hava çok güzel, değil mi? Size nasıl yardımcı olabilirim?`,
      english: `Hello! Welcome to ${scenario.location}. I am ${character.name}, I work as a ${character.occupation}. The weather is very nice today, isn't it? How can I help you?`,
      grammarNotes: "This uses the dative case with '-ya' for direction (to the location) and the question particle 'mi' for yes/no questions.",
      vocabulary: [
        { word: "hoş geldiniz", translation: "welcome" },
        { word: "çalışmak", translation: "to work" },
        { word: "bugün", translation: "today" },
        { word: "hava", translation: "weather" },
        { word: "değil mi", translation: "isn't it?" }
      ],
      suggestedResponses: [
        { turkish: "Evet, hava gerçekten çok güzel. Burada ne yapabilirim?", english: "Yes, the weather is really nice. What can I do here?" },
        { turkish: "Merhaba! Sizinle tanıştığıma memnun oldum. Buraya ilk defa geliyorum.", english: "Hello! Pleased to meet you. This is my first time here." },
        { turkish: "Bu bölgede görülmesi gereken yerler nelerdir?", english: "What are the must-see places in this area?" }
      ]
    };
  } else {
    return {
      turkish: `Merhaba! ${scenario.location}'ya hoş geldiniz. Ben ${character.name}, ${character.age} yaşındayım ve burada ${character.occupation} olarak çalışıyorum. ${character.region} bölgesindenim. Türkiye'yi ziyaret ettiğiniz için nasıl hissediyorsunuz? Size yardımcı olabilir miyim?`,
      english: `Hello! Welcome to ${scenario.location}. I am ${character.name}, I am ${character.age} years old and I work here as a ${character.occupation}. I am from the ${character.region} region. How do you feel about visiting Turkey? Can I help you?`,
      grammarNotes: "This uses the dative case with '-ya' for direction, and the possibility suffix '-abilir' to ask if something is possible.",
      vocabulary: [
        { word: "yaş", translation: "age" },
        { word: "bölge", translation: "region" },
        { word: "ziyaret etmek", translation: "to visit" },
        { word: "hissetmek", translation: "to feel" }
      ],
      suggestedResponses: [
        { turkish: "Türkiye'yi çok seviyorum. Bana kültürünüzden bahsedebilir misiniz?", english: "I love Turkey. Can you tell me about your culture?" },
        { turkish: "Burada kaç yıldır çalışıyorsunuz?", english: "How many years have you been working here?" },
        { turkish: "Bölgenizdeki en iyi yemekler nelerdir?", english: "What are the best foods in your region?" }
      ]
    };
  }
}
