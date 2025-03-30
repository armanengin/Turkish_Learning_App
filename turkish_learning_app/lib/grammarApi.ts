import axios from 'axios';
import { GrammarPattern, GrammarAIResponse } from '../types/grammar';

// Use environment variables for API configuration
const OPENROUTER_API_KEY = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY || '';
const API_URL = process.env.NEXT_PUBLIC_OPENROUTER_API_URL || 'https://openrouter.ai/api/v1/chat/completions';

interface GrammarExplanationResponse {
  explanation: string;
  structuredData?: GrammarAIResponse;
}

export async function generateGrammarExplanation(
  query: string,
  pattern: GrammarPattern | null,
  messages: { role: 'user' | 'assistant', content: string }[]
): Promise<GrammarExplanationResponse> {
  try {
    // Format the conversation history for the AI
    const formattedMessages = [
      // System message with grammar tutor instructions
      {
        role: 'system',
        content: `You are a Turkish Grammar Tutor specializing in clear, concise grammar explanations. Your role is to help language learners understand Turkish grammar patterns.

RESPONSE FORMAT GUIDELINES:
1. When explaining a grammar rule, use this structure:
   RULE: [Name of the grammar pattern]
   FORMULA: [Pattern formula in simple terms]
   EXPLANATION: [Clear, concise explanation]
   EXAMPLES: [2-3 simple examples with translations]

2. When breaking down a word, use this structure:
   WORD: [Full word]
   BREAKDOWN: [
     {"part": "root", "type": "noun/verb/etc", "meaning": "meaning"},
     {"part": "suffix1", "type": "tense/case/etc", "meaning": "function"},
     ...
   ]

3. For practice exercises, use:
   EXERCISE: [Description of the task]
   ITEMS: [
     {"prompt": "Fill in: Ben ___ gidiyorum (ev)", "answer": "eve", "rule": "dative case"},
     ...
   ]

IMPORTANT EXERCISE FORMATTING:
- Always format exercises as proper JSON objects
- The exercise 'items' must be an array of objects, not a string
- Never include the raw JSON in your human-readable response
- Place exercise JSON only in the structured data section

TEACHING APPROACH:
- For beginners: Focus on basic patterns and practical usage
- For intermediate learners: Include exceptions and variations
- For advanced learners: Explain nuances and native-like usage`
      },
      
      // If there's an active pattern, provide its info
      ...(pattern ? [{
        role: 'system',
        content: `The current grammar pattern being discussed is "${pattern.name}" (${pattern.difficulty} level). 
        Basic explanation: ${pattern.explanation}
        It belongs to the category: ${pattern.category}
        Formula: ${Array.isArray(pattern.formulas) ? pattern.formulas.join(', ') : pattern.formula || ''}`
      }] : []),
      
      // Format message history
      ...messages,
      
      // Add the current query
      {
        role: 'user',
        content: query
      },
      
      // Instructions for response format
      {
        role: 'system',
        content: `Please format your response in markdown and also provide a structured JSON response in a special delimited section like this:

\`\`\`json
{
  "rule": {
    "name": "Rule name",
    "formula": "Simple formula",
    "explanation": "Brief explanation",
    "examples": [
      {"turkish": "Example in Turkish", "english": "English translation"}
    ]
  }
}
\`\`\`

OR 

\`\`\`json
{
  "wordBreakdown": {
    "word": "Full word",
    "breakdown": [
      {"part": "root", "type": "noun/verb/etc", "meaning": "meaning"},
      {"part": "suffix1", "type": "tense/case/etc", "meaning": "function"},
      ...
    ]
  }
}
\`\`\`

OR

\`\`\`json
{
  "exercise": {
    "description": "Exercise description",
    "items": [
      {"prompt": "Fill in: Ben ___ gidiyorum (ev)", "answer": "eve", "rule": "dative case"},
      ...
    ]
  }
}
\`\`\`

The human-readable part should be clear and helpful markdown. The JSON should be valid and well-structured with no syntax errors.`
      }
    ];
    
    // Debug: Check if API key is available
    if (!OPENROUTER_API_KEY) {
      console.warn('OpenRouter API key is missing. Using fallback grammar explanation.');
      return generateFallbackExplanation(query, pattern);
    }
    
    // Make the API request to LLM endpoint
    const response = await axios.post(
      API_URL,
      {
        model: 'anthropic/claude-3-opus:beta',  // Using Claude for better instruction following
        messages: formattedMessages,
        temperature: 0.4,  // Lower temperature for more consistent, focused responses
        max_tokens: 2048,
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://lana-turkish-tutor.vercel.app',  // Update with your actual domain
          'X-Title': 'Lana Turkish Tutor'
        }
      }
    );
    
    // Extract the LLM response
    const llmResponse = response.data.choices[0]?.message?.content || '';
    
    // Parse out any structured data from the response
    let structuredData: GrammarAIResponse | undefined;
    
    // Look for JSON code blocks in the response
    const jsonMatch = llmResponse.match(/```json\s*({[\s\S]*?})\s*```/);
    if (jsonMatch && jsonMatch[1]) {
      try {
        structuredData = JSON.parse(jsonMatch[1]);
      } catch (error) {
        console.error('Failed to parse structured grammar data:', error);
      }
    }
    
    return {
      explanation: llmResponse,
      structuredData
    };
    
  } catch (error) {
    console.error('Error generating grammar explanation:', error);
    return generateFallbackExplanation(query, pattern);
  }
}

// Generate a fallback explanation for when the API call fails
function generateFallbackExplanation(query: string, pattern: GrammarPattern | null): GrammarExplanationResponse {
  return {
    explanation: `I'm sorry, I couldn't generate a response for "${query}" at the moment. 
    
${pattern ? `Here's some basic information about ${pattern.name}:
${pattern.explanation}

${Array.isArray(pattern.formulas) ? `Formula: ${pattern.formulas.join(', ')}` : pattern.formula ? `Formula: ${pattern.formula}` : ''}` : 'Please try again later or ask about a different grammar point.'}`,
  };
}
