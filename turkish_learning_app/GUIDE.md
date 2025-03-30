# Turkish Learning App - Developer Guide

This document provides an overview of the project structure and instructions for running and developing the application.

## Project Structure

```
turkish_learning_app/
├── app/                      # Next.js App Router pages
│   ├── dashboard/            # Dashboard page
│   ├── characters/           # Character selection page
│   ├── scenarios/            # Scenario selection page
│   ├── conversation/         # Conversation page with AI
│   ├── flashcards/           # Flashcard review system
│   ├── phrases/              # Common Turkish phrases
│   ├── globals.css           # Global CSS styles
│   ├── layout.tsx            # Root layout component
│   ├── page.tsx              # Home/login page
│   └── not-found.tsx         # 404 page
├── components/               # React components
│   ├── characters/           # Character-related components
│   ├── conversation/         # Conversation components
│   ├── layout/               # Layout components
│   └── scenarios/            # Scenario-related components
├── contexts/                 # React context providers
│   ├── AuthContext.tsx       # Authentication state
│   ├── ConversationContext.tsx # Conversation state
│   └── FlashcardContext.tsx  # Flashcard management
├── data/                     # Static data
│   ├── characters.ts         # Character definitions
│   └── scenarios.ts          # Scenario definitions
├── lib/                      # Utility functions
│   ├── api.ts                # API interactions
│   ├── formatTurkish.ts      # Turkish text formatting utilities
│   └── localStorage.ts       # Local storage helpers
├── public/                   # Static assets
│   └── images/               # Images including logo
├── types/                    # TypeScript type definitions
│   └── index.ts              # Type definitions
├── .env.local                # Environment variables (local)
├── .env.example              # Example environment variables
├── next.config.js            # Next.js configuration
├── package.json              # Project dependencies
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Key Features

1. **Authentication System**:
   - Simple password-based protection for the app
   - Manages user session with local storage

2. **Character System**:
   - Multiple Turkish personas with different backgrounds
   - Each character has a specific difficulty level and speaking style
   - Selection interface with filtering by difficulty and region

3. **Scenario System**:
   - Various conversational contexts (café, bazaar, etc.)
   - Each scenario has a difficulty level and recommended characters
   - Cultural notes and learning objectives

4. **Conversation Interface**:
   - Interactive chat with AI characters using OpenRouter API
   - Save vocabulary to flashcards during conversations
   - Suggested responses to help beginners

5. **Flashcard Review System**:
   - Spaced repetition algorithm for vocabulary review
   - Add, review, and manage vocabulary
   - Track learning progress

6. **Common Phrases**:
   - Categorized collection of useful Turkish phrases
   - Add any phrase to personal flashcards

## Running the Application

1. **Install Dependencies**:
   ```bash
   cd turkish_learning_app
   npm install
   ```

2. **Set Environment Variables**:
   - Copy `.env.example` to `.env.local`
   - Update with your own OpenRouter API key if needed

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

4. **Access the Application**:
   - Open your browser to http://localhost:3000
   - Use the default password: `birthdaygift2025` (or whatever you set in `.env.local`)

## Development Guidelines

### Adding New Characters

Edit `data/characters.ts` to add new characters with the following structure:

```typescript
{
  id: "unique-id",
  name: "Character Name",
  age: "Age",
  occupation: "Occupation",
  region: "Region",
  description: "Brief description",
  avatar: "/images/character-avatar.jpg", // Optional
  difficultyLevel: "beginner" | "intermediate" | "advanced",
  systemPrompt: "Instructions for the AI on how to roleplay this character",
  traits: ["trait1", "trait2"]
}
```

### Adding New Scenarios

Edit `data/scenarios.ts` to add new scenarios:

```typescript
{
  id: "unique-id",
  title: "Scenario Title",
  description: "Brief description",
  difficultyLevel: "beginner" | "intermediate" | "advanced",
  culturalNotes: "Cultural context",
  vocabularyFocus: ["word1", "word2"],
  initialPrompt: "Starting prompt for the scenario",
  imageUrl: "/images/scenario-image.jpg", // Optional
  recommendedCharacters: ["character-id-1", "character-id-2"]
}
```

### Modifying the AI Integration

The OpenRouter API integration is in `lib/api.ts`. To modify how the app interacts with the AI:

1. Update the API endpoint or parameters in `api.ts`
2. Adjust the conversation handling in `ConversationContext.tsx`

## Deployment

To deploy the application:

1. Build the production version:
   ```bash
   npm run build
   ```

2. Test the production build locally:
   ```bash
   npm run start
   ```

3. Deploy to Vercel:
   ```bash
   vercel deploy
   ```

Make sure to set the environment variables in your deployment environment.

## Customization Ideas

- Add more characters and scenarios
- Implement user accounts to save progress across devices
- Add audio pronunciation of Turkish phrases
- Create grammar exercises specific to each difficulty level
- Implement a leaderboard or achievement system
