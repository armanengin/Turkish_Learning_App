# Turkish Language Learning App - Development Guide

## Project Overview

Build a Turkish language learning web application using Next.js that features AI-powered conversations with virtual Turkish characters. The app will use Google's Gemini 2.0 Flash model via OpenRouter API to generate interactive dialogues in realistic scenarios.

## Core Features

1. **AI Characters System**
   - Multiple Turkish personas with different backgrounds, ages, and speech styles
   - Character difficulty levels (beginner to advanced)
   - Character selection interface

2. **Conversation Scenarios**
   - Various contexts (bazaar, café, waterfront, etc.)
   - Difficulty-appropriate vocabulary and grammar
   - Cultural notes and context

3. **Interactive Chat Interface**
   - Multiple-choice responses for beginners
   - Free text input for advanced learners
   - Vocabulary highlighting with flashcard saving

4. **Learning Tools**
   - Save words/phrases to flashcards during conversations
   - Spaced repetition flashcard review system
   - Progress tracking

5. **Common Turkish Phrases Section**
   - Organized collection of expressions
   - Grammar explanations
   - Cultural idioms and proverbs

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **AI Integration**: OpenRouter API with Gemini 2.0 Flash
- **Data Storage**: Local storage (with optional Firebase)
- **Authentication**: Simple password protection
- **Deployment**: Vercel (Hobby plan)

## Project Structure

```
src/
├── app/                       # Next.js pages
│   ├── page.tsx               # Landing/auth page
│   ├── dashboard/             # Dashboard page
│   ├── characters/            # Character selection
│   ├── scenarios/             # Scenario selection
│   ├── conversation/          # Conversation page
│   ├── flashcards/            # Flashcard system
│   ├── phrases/               # Common phrases
│   └── api/                   # API routes
├── components/                # UI components
├── contexts/                  # React contexts
├── hooks/                     # Custom hooks
├── lib/                       # Utility functions
├── data/                      # Static data
└── types/                     # TypeScript types
```

## Data Models

### Character Model
- ID, name, age, occupation
- Region of origin affecting dialect
- Difficulty level
- Personality traits and speaking style
- Avatar image
- System prompt for AI

### Scenario Model
- Title, description, location
- Difficulty level and estimated duration
- Key vocabulary
- Cultural notes
- Initial conversation prompt
- Recommended characters

### Message Model
- Role (user/assistant)
- Content (Turkish and English)
- Optional grammar notes
- Highlighted vocabulary
- Timestamp

### Flashcard Model
- Turkish and English text
- Example usage
- Notes for context
- Category (vocabulary, grammar, phrase)
- Spaced repetition metadata

## Implementation Steps

### 1. Setup and Authentication
- Create Next.js project with Tailwind CSS
- Implement simple password protection for access control
- Create a basic layout with navigation

### 2. Characters and Scenarios
- Create character data with profiles and system prompts
- Implement scenario data with relevant information
- Build selection interfaces for both

### 3. Conversation System
- Implement OpenRouter API integration for the Gemini model
- Create message parsing and formatting functions
- Build chat interface with response options
- Add vocabulary highlighting functionality

### 4. Flashcard System
- Create flashcard data model and storage
- Implement in-conversation word saving
- Build spaced repetition review system
- Develop progress tracking

### 5. Common Phrases Section
- Organize useful expressions by category
- Create interface for browsing phrases
- Implement search functionality

## AI Integration Details

### OpenRouter Configuration
- **API Endpoint**: https://openrouter.ai/api/v1/chat/completions
- **Model**: google/gemini-2.0-flash-001
- **Required Headers**:
  - Authorization: Bearer [your_api_key]
  - HTTP-Referer: [your_domain]
  - Content-Type: application/json

### AI Prompt Structure
- **System Message**: Character background and personality
- **User Context**: Scenario description and previous messages
- **Response Format**: Structure for separating Turkish and English

### Response Parsing
- Extract Turkish text, English translation, and notes
- Identify vocabulary items for highlighting
- Generate suggested responses for beginners

## Character System Details

### Character Types
1. **Istanbul Bazaar Vendor (Beginner)**
   - Speaks slowly and clearly
   - Simple vocabulary and basic expressions
   - Friendly, traditional personality

2. **Young Café Server (Beginner-Intermediate)**
   - Modern Turkish with some slang
   - Contemporary cultural references
   - Medium-paced speech

3. **Eastern Turkish Farmer (Intermediate)**
   - Regional dialect and expressions
   - Traditional sayings and idioms
   - More complex grammar structures

4. **Waterfront Restaurant Owner (Beginner)**
   - Coastal vocabulary (seafood, water features)
   - Warm, maternal personality
   - Clear pronunciation with some regional terms

5. **University Student (Advanced)**
   - Fast, natural speech
   - Modern slang and English loanwords
   - Complex sentence structures

## Scenario System Details

### Scenario Types
1. **Grand Bazaar Shopping**
   - Bargaining and product vocabulary
   - Numbers and pricing expressions
   - Cultural notes on shopping etiquette

2. **Café Experience**
   - Food and beverage vocabulary
   - Ordering and preference expressions
   - Café culture in Turkey

3. **Waterfront Conversation**
   - Nature and scenery vocabulary
   - Descriptive language practice
   - Casual conversation structures

4. **Finding Your Way**
   - Directions and location vocabulary
   - Transportation terminology
   - Asking for help expressions

5. **Celebrating a Birthday**
   - Celebration vocabulary
   - Well-wishes and congratulations
   - Gift-giving expressions

## Flashcard System Details

### Flashcard Creation
- Extract vocabulary from conversations
- Allow manual word selection for saving
- Automatic metadata generation (context, source)

### Spaced Repetition Algorithm
- Track review dates and performance
- Calculate next review date based on difficulty rating
- Optimize review schedule for retention

### Review Interface
- Card-flip interaction for testing recall
- Difficulty self-rating system
- Progress visualization

## UI/UX Guidelines

### Color Scheme
- Primary: Turkish red (#E30A17)
- Secondary: Deep blue (#003F87)
- Accents: Turquoise (#00C1DE) and gold (#FFD700)
- Neutrals: Soft whites and grays

### Typography
- Primary sans-serif font for UI
- Reading-focused font for conversation text
- Turkish character support required

### Responsiveness
- Mobile-first approach
- Full functionality on all device sizes
- Touch-friendly interface elements

## Deployment

### Vercel Configuration
- Use Hobby plan (free tier)
- Configure environment variables for API keys
- Set up custom domain (optional)

### Security Considerations
- Secure API key handling
- Rate limiting for API requests
- Input sanitization for user messages

## Development Roadmap

### Phase 1: Foundation (2 weeks)
- Project setup and architecture
- Authentication system
- Basic character and scenario data
- UI components library

### Phase 2: Core Features (3 weeks)
- Character and scenario interfaces
- Conversation system with AI integration
- Basic flashcard functionality
- Initial phrase collection

### Phase 3: Enhanced Learning (2 weeks)
- Vocabulary highlighting
- Flashcard review system
- Progress tracking
- Expanded phrase content

### Phase 4: Polish (1 week)
- UI refinement
- Performance optimization
- Bug fixes and testing
- Deployment and documentation

## Additional Considerations

### Cost Management
- Monitor OpenRouter API usage
- Implement caching for common responses
- Set usage limits to prevent unexpected charges

### Accessibility
- Ensure adequate color contrast
- Support keyboard navigation
- Provide text alternatives for visual elements

### Future Enhancements
- Audio pronunciation guides
- Grammar visualization tools
- Voice input capability
- Community features

This development guide provides a comprehensive roadmap for building the Turkish Learning App. Implement the core features first, then enhance with additional functionality as time permits.