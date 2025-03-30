# Turkish Language Learning App: Product Requirements Document

## 1. Executive Summary

The Turkish Language Learning App is a web-based application designed to help users learn Turkish through interactive conversations with AI-powered characters in realistic scenarios. This immersive approach focuses on contextual learning rather than traditional flashcard methods, offering personalized dialogues with different Turkish personas representing various regions, ages, and speaking styles. The app will serve as a thoughtful birthday gift while providing practical language skills through engaging, culturally relevant interactions.

## 2. Target Audience

- **Primary**: Your friend who is interested in learning Turkish and has some exposure to Turkish culture
- **Secondary**: Beginning to intermediate Turkish language learners seeking conversational practice
- **Tertiary**: Language enthusiasts interested in Turkish culture and practical language use

## 3. Product Vision

To create an engaging, personalized web application that teaches Turkish language in context through realistic AI-powered conversations, focusing on practical scenarios relevant to the learner's interests, including shared experiences like visits to waterfronts and appreciation of Turkish culture.

## 4. Technical Architecture Overview

### 4.1 Technology Stack

| Component | Technology | Rationale |
|-----------|------------|-----------|
| Frontend | React.js with Next.js | Server-side rendering, great performance, and simplified deployment |
| State Management | React Context API & Redux | Predictable state management with clear separation |
| Styling | Tailwind CSS | Rapid development with utility classes and responsive design |
| AI Integration | OpenAI API (GPT-3.5 Turbo) | Cost-effective, high-quality language model with consistent Turkish capabilities |
| Backend | Next.js API Routes | Lightweight API for handling AI requests and minimal user data |
| Data Storage | LocalStorage + Firebase (optional) | Client-side storage for basic needs, optional server storage for expanded features |
| Authentication | Simple password protection | Basic access control to limit app use to intended recipients |
| Hosting | Vercel | Seamless integration with Next.js with generous free tier |

### 4.2 High-Level Architecture

```
┌──────────────────────────────────────────────┐
│                 Next.js App                   │
│                                              │
│   ┌──────────┐    ┌─────────┐   ┌─────────┐  │
│   │ Character│    │ Scenario│   │ Settings│  │
│   │ Selection│    │Selection│   │ Screen  │  │
│   └──────────┘    └─────────┘   └─────────┘  │
│                                              │
│   ┌──────────────────────────────────────┐   │
│   │        Conversation Screen            │   │
│   └──────────────────────────────────────┘   │
│                                              │
│   ┌──────────────────────────────────────┐   │
│   │           Context Providers           │   │
│   └──────────────────────────────────────┘   │
│                                              │
│   ┌──────────────────────────────────────┐   │
│   │             Hooks & Utils             │   │
│   └──────────────────────────────────────┘   │
│                                              │
└──────────────────────────────────────────────┘
            │
            ▼
┌──────────────────────────────────────────────┐
│             API Layer (Next.js API)           │
│                                              │
│   ┌──────────┐┌─────────┐┌───────┐┌────────┐ │
│   │ Character││Conversa-││Learning││Access  │ │
│   │ API      ││tion API ││Progress││Control │ │
│   └──────────┘└─────────┘└───────┘└────────┘ │
│                                              │
└──────────────────────────────────────────────┘
            │
            ▼
┌──────────────────────────────────────────────┐
│                OpenAI API                     │
│              (AI Service)                     │
└──────────────────────────────────────────────┘
```

## 5. Feature Requirements

### 5.1 Authentication & Access Control

- **Password Protection**:
  - Simple password screen for app access
  - Customizable password that can be shared with your friend
  - Optional ability to remember login on trusted devices
  - Clear indication this is a personalized gift

- **Access Restriction Options**:
  - Ability to limit access to only intended users
  - Optional special access link with unique code parameter
  - Access expiration settings (optional)

- **Session Management**:
  - Local storage for maintaining session
  - Simple session timeout for security
  - Logout functionality

### 5.2 Character Selection

- **Character Profiles**:
  - Minimum 5 distinct Turkish characters with varying backgrounds
  - Name, age, region of origin, and occupation
  - Visual representation (avatar/illustration)
  - Personality description and speaking style
  - Brief background story establishing character

- **Character Attributes**:
  - Regional origin affecting dialect/accent (Istanbul, Ankara, Eastern Turkey, etc.)
  - Age diversity (young adults, middle-aged, elderly)
  - Occupation variety (bazaar vendor, café server, tour guide, etc.)
  - Personality traits influencing conversation style
  - Cultural background informing references and expressions

- **Difficulty Levels**:
  - Beginner: Speaks slowly, uses simple vocabulary, understands broken Turkish
  - Intermediate: More natural speech with some colloquialisms
  - Advanced: Native-like speech with idioms and cultural references
  - Visual indicators of difficulty level on character cards

- **Character Browsing**:
  - Card-based interface with character portraits
  - Filter by difficulty level
  - Filter by region or occupation
  - Quick view of key character traits
  - Special recommendation for first-time users

### 5.3 Scenario Selection

- **Scenario Categories**:
  - Marketplace/Bazaar (shopping, bargaining)
  - Café/Restaurant (ordering food and drinks)
  - Transportation (asking for directions, taking a taxi)
  - Daily conversation (greetings, small talk)
  - Waterfront/scenic locations (based on shared experiences)
  - Cultural events (discussing Turkish traditions)

- **Scenario Information**:
  - Visual representation of the setting
  - Brief description of the situation
  - Estimated conversation length (2-5 min, 5-10 min, etc.)
  - Key vocabulary relevant to the scenario
  - Cultural notes where appropriate

- **Scenario Components**:
  - Initial prompt setting the scene
  - Starting dialogue from the AI character
  - Recommended response options for beginners
  - Learning objectives for the scenario
  - Suggested follow-up scenarios

- **Scenario Browsing**:
  - Visual grid or carousel of scenario cards
  - Difficulty indicator matching character requirements
  - Recommended character pairings for each scenario
  - Sorting by category or difficulty
  - Search functionality (optional)

### 5.4 Conversation Interface

- **Chat UI Design**:
  - Clean, modern chat interface with message bubbles
  - Visual distinction between user and AI character messages
  - Character avatar displayed with messages
  - Typing indicators during AI response generation
  - Message timestamp display (optional)

- **Message Formatting**:
  - Clear structure with Turkish text first
  - English translation below or toggled
  - Optional romanized pronunciation guide
  - Highlighting of key vocabulary words
  - Collapsible grammar notes for complex sentences

- **Input Options**:
  - Multiple-choice responses for beginners (3-4 options)
  - Free text input for intermediate/advanced learners
  - Quick reply suggestions based on context
  - "I don't understand" button triggering simplified responses
  - Voice input capability (optional, future enhancement)

- **Learning Aids**:
  - Word translation on hover/tap
  - Grammar explanation buttons for complex structures
  - Cultural context notes with Turkish flag icon
  - Pronunciation tips for difficult words
  - Save phrase to vocabulary list functionality

- **Conversation Flow Controls**:
  - Pause conversation option
  - Restart conversation button
  - Change character mid-scenario option (advanced)
  - Adjust difficulty level during conversation
  - End conversation and view summary

### 5.5 Learning Progress Tracking

- **Vocabulary Collection**:
  - Automatic tracking of words encountered
  - Mark words as "learned" or "still learning"
  - Categorization by topic/scenario
  - Frequency indicator for common words
  - Export vocabulary list functionality

- **Conversation History**:
  - Save complete conversations for review
  - Browse past conversations by date, character, or scenario
  - Search within conversation history
  - Delete unwanted conversations
  - Share conversation (optional)

- **Progress Visualization**:
  - Words learned counter with milestone celebrations
  - Topics/scenarios completed tracker
  - Time spent practicing graph
  - Most used phrases collection
  - Learning streak calendar (optional)

- **Personal Dictionary**:
  - User-created vocabulary list
  - Custom notes feature
  - Categorization options
  - Spaced repetition review suggestions
  - Practice mode using saved vocabulary

### 5.6 Settings and Personalization

- **Appearance Settings**:
  - Light/dark mode toggle
  - Text size adjustment
  - Chat bubble style options
  - Animation enable/disable

- **Language Display Options**:
  - Toggle English translations (always/on demand/never)
  - Toggle pronunciation guides
  - Grammar notes display preferences
  - Vocabulary highlighting intensity

- **Conversation Preferences**:
  - AI response length (concise/moderate/detailed)
  - Correction style (immediate/gentle/end of conversation)
  - Input mode default (multiple choice/free text)
  - Auto-suggestion settings

- **Privacy & Data**:
  - Conversation history retention period
  - Clear all data option
  - Data export functionality
  - Usage statistics opt-in/out

- **Birthday Personalization**:
  - Custom greeting message display settings
  - Special birthday scenarios toggle
  - Shared experience references frequency
  - Friend-specific customizations

## 6. UI/UX Requirements

### 6.1 Design System

- **Visual Style**:
  - Clean, modern interface with subtle Turkish design elements
  - Warm, inviting color palette reflecting Turkish culture
  - Consistent card-based UI components
  - Appropriate white space for readability
  - Gentle animations for state transitions

- **Color Scheme**:
  - Primary: Turkish red (#E30A17)
  - Secondary: Deep blue (#003F87)
  - Accents: Turquoise (#00C1DE) and gold (#FFD700)
  - Neutrals: Soft whites and grays
  - Status colors: Success green, warning amber, error red

- **Typography**:
  - Primary sans-serif font for UI elements (Inter or similar)
  - Reading-optimized font for conversation text
  - Turkish-compatible font with proper diacritical marks
  - Clear hierarchy with distinct heading styles
  - Minimum 16px base font size for readability

- **Icons and Illustrations**:
  - Consistent icon style throughout the application
  - Character illustrations with Turkish cultural elements
  - Scenario illustrations depicting locations
  - Turkey-inspired decorative elements
  - Custom icon set for language learning features

### 6.2 Navigation

- **Information Architecture**:
  - Home/dashboard as central hub
  - Main sections: Characters, Scenarios, Conversations, Progress, Settings
  - Logical grouping of related features
  - Consistent navigation patterns
  - Clear user location indicators

- **Navigation Components**:
  - Primary navigation bar (top or sidebar)
  - Secondary navigation within sections
  - Breadcrumb navigation for deeper screens
  - Back buttons with consistent placement
  - Home button always accessible

- **Screen Transitions**:
  - Smooth, meaningful transitions between screens
  - Micro-animations for state changes
  - Loading states during data fetching
  - Transition hierarchy maintaining spatial awareness
  - Reduced motion option for accessibility

### 6.3 Responsiveness

- **Device Support**:
  - Desktop: Full-featured experience optimized for 1024px+
  - Tablet: Adapted layout preserving all functionality
  - Mobile: Reorganized interface prioritizing core features
  - Touch-friendly across all devices

- **Layout Adaptability**:
  - Fluid layout with appropriate breakpoints
  - Flexible component sizing
  - Reflow content rather than horizontal scrolling
  - Stack elements vertically on narrower screens
  - Maintain readable text line lengths

- **Mobile Optimizations**:
  - Bottom navigation bar on mobile
  - Larger touch targets (minimum 44×44px)
  - Collapsible sections to conserve space
  - Full-screen conversation mode
  - Virtual keyboard considerations

### 6.4 Accessibility

- **Standards Compliance**:
  - WCAG 2.1 AA level compliance
  - Semantic HTML structure
  - Keyboard navigability
  - Focus management
  - Proper heading hierarchy

- **Visual Accessibility**:
  - Sufficient color contrast (minimum 4.5:1 for text)
  - Text resize support up to 200%
  - Alternative text for images
  - Visual indicators beyond color alone
  - Reduced motion option

- **Interactive Elements**:
  - Clear focus states
  - Descriptive button labels
  - Consistent interactive patterns
  - Error prevention techniques
  - Undo capabilities for destructive actions

## 7. Technical Implementation Guidelines

### 7.1 Next.js Implementation

- **Project Structure**:
  ```
  /
  ├── pages/                     # Next.js pages
  │   ├── index.js               # Home/landing page
  │   ├── auth.js                # Authentication page
  │   ├── characters/            # Character selection
  │   ├── scenarios/             # Scenario selection
  │   ├── conversation/          # Conversation interfaces
  │   ├── progress/              # Learning progress
  │   ├── settings/              # User settings
  │   └── api/                   # API routes
  ├── components/                # Reusable components
  │   ├── common/                # Shared UI components
  │   ├── characters/            # Character components
  │   ├── scenarios/             # Scenario components
  │   ├── conversation/          # Conversation components
  │   └── progress/              # Progress components
  ├── context/                   # React Context providers
  ├── hooks/                     # Custom React hooks
  ├── lib/                       # Utility functions
  ├── data/                      # Static data
  ├── public/                    # Static assets
  └── styles/                    # CSS styles
  ```

### 7.2 AI Character System

- **Character Definition Structure**:
  ```javascript
  {
    id: "istanbul-vendor",
    name: "Ahmet",
    age: 55,
    gender: "male",
    occupation: "Spice Vendor",
    region: "Istanbul",
    difficultyLevel: "beginner",
    personalityTraits: ["friendly", "talkative", "traditional"],
    speakingStyle: "Uses short sentences, speaks slowly for beginners",
    dialectFeatures: "Standard Istanbul Turkish with some traditional expressions",
    backstory: "Ahmet has been selling spices in the Grand Bazaar for 30 years...",
    avatarUrl: "/images/characters/ahmet.jpg",
    systemPrompt: "You are Ahmet, a 55-year-old spice vendor from Istanbul...",
    commonPhrases: [
      { turkish: "Hoş geldiniz!", english: "Welcome!" },
      { turkish: "Ne arıyorsunuz?", english: "What are you looking for?" }
    ]
  }
  ```

- **Core Characters**:
  1. **Ahmet - Istanbul Bazaar Vendor (Beginner)**
  2. **Zeynep - Young Barista (Beginner-Intermediate)**
  3. **Mehmet - Eastern Turkish Farmer (Intermediate)**
  4. **Ayşe - Waterfront Restaurant Owner (Beginner)**
  5. **Can - University Student (Intermediate-Advanced)**

- **Character Voice Guidelines**:
  - Beginner-friendly characters use short, simple sentences with frequent repetition
  - Intermediate characters use natural speech with some cultural references
  - Advanced characters use authentic, native-like speech patterns with regional dialectal features

### 7.3 Scenario System

- **Scenario Definition Structure**:
  ```javascript
  {
    id: "grand-bazaar",
    title: "Shopping at the Grand Bazaar",
    description: "Practice bargaining and shopping vocabulary in Istanbul's famous bazaar",
    difficulty: "beginner",
    location: "Istanbul",
    estimatedDuration: "5-10 minutes",
    imageUrl: "/images/scenarios/grand-bazaar.jpg",
    recommendedCharacterIds: ["istanbul-vendor", "tourist-guide"],
    keyVocabulary: [
      { turkish: "Ne kadar?", english: "How much?" },
      { turkish: "Pahalı", english: "Expensive" }
    ],
    culturalNotes: "Bargaining is expected in Turkish bazaars...",
    initialPrompt: "You are at the Grand Bazaar in Istanbul...",
    category: "shopping"
  }
  ```

- **Core Scenarios**:
  1. **Grand Bazaar Shopping** (bargaining, products)
  2. **Café Experience** (ordering food and drinks)
  3. **Waterfront Conversation** (scenery, casual conversation)
  4. **Finding Your Way** (directions, transportation)
  5. **Celebrating a Birthday** (celebrations, well-wishes)
  6. **At the Fruit Stand** (food vocabulary, quantities)

## 8. Learning Methodology

- **Contextual Learning Approach**:
  - Learn vocabulary and grammar through real-world usage
  - Understand language in cultural context
  - Focus on practical communication over memorization

- **Vocabulary Acquisition System**:
  - New words highlighted in conversation
  - Spaced repetition for review
  - Thematic grouping of related words
  - Progress tracking for mastery

- **Grammar Introduction**:
  - Just-in-time explanations when needed
  - Pattern recognition through repeated exposure
  - Simplified explanations for beginners
  - Progressive complexity as learner advances

## 9. Cost Analysis

### 9.1 Development Costs
- **Time Investment**: 80-120 hours depending on feature scope
- **Asset Costs**: $0-220 for illustrations, images, and resources

### 9.2 Ongoing Infrastructure Costs
- **Domain**: $10-15/year (optional)
- **Hosting**: $0 (Vercel free tier) to $20/month (Pro tier)
- **OpenAI API**: 
  - Light usage: ~$1.60/month
  - Moderate usage: ~$6/month
  - Heavy usage: ~$18/month

### 9.3 Total Cost Estimates
- **Initial Setup**: $10-235 (domain + assets)
- **Monthly Maintenance**: $3-25/month (primarily OpenAI API)

## 10. Implementation Timeline

### Phase 1: Foundation (2 weeks)
- Project setup and architecture
- Authentication system
- Character and scenario data structures
- Basic UI components
- Initial OpenAI integration

### Phase 2: Core Conversation System (3 weeks)
- Character selection interface
- Scenario selection interface
- Basic conversation UI
- AI response formatting
- Multiple-choice conversation options

### Phase 3: Learning Features (2 weeks)
- Vocabulary tracking system
- Progress visualization
- Conversation history
- Free text input capability
- Translation toggle functionality

### Phase 4: Personalization and Polish (1 week)
- User preferences and settings
- Birthday-specific customizations
- UI refinement and animations
- Performance optimization
- Mobile responsiveness improvements

## Appendix A: Example Character Prompts

### Istanbul Bazaar Vendor (Beginner)

```
You are Mehmet, a 60-year-old spice and tea vendor at Istanbul's Grand Bazaar. 
You've been selling in the same shop for 40 years and love to chat with tourists.

PERSONALITY:
- Friendly and welcoming but also a skilled salesperson
- Patient with language learners
- Proud of Turkish culture and traditions
- Loves to offer tea to customers and tell stories

LANGUAGE STYLE:
- You speak slowly and clearly for beginners
- You use simple, common Turkish phrases
- You sometimes repeat important words
- You provide English translations after Turkish phrases
- You occasionally teach simple Turkish expressions

SCENARIO CONTEXT:
The user is shopping at your stall in the Grand Bazaar.

INTERACTION RULES:
1. Always respond in this format:
   TURKISH: [Your response in Turkish]
   ENGLISH: [English translation]
   NOTES: [Any helpful grammar or vocabulary notes - optional]

2. Keep responses relatively short (2-3 sentences in Turkish)

3. If the user makes Turkish language mistakes, gently correct them but understand what they mean

4. Occasionally ask simple questions to keep the conversation going

5. Use some of these common Turkish merchant phrases naturally in conversation:
   - "Hoş geldiniz!" (Welcome!)
   - "Buyurun" (Here you are/Can I help you?)
   - "Ne aramıştınız?" (What are you looking for?)
   - "Çay içer misiniz?" (Would you like some tea?)
   - "Size yardımcı olabilir miyim?" (Can I help you?)
```

## Appendix B: Example Scenario Definitions

### Waterfront Café Visit

```javascript
{
  id: "waterfront-cafe",
  title: "Afternoon at a Waterfront Café",
  description: "Enjoy a relaxing conversation at a café overlooking the water, discussing the view and ordering refreshments.",
  difficulty: "beginner",
  location: "Coastal Town",
  estimatedDuration: "5-10 minutes",
  imageUrl: "/images/scenarios/waterfront-cafe.jpg",
  recommendedCharacterIds: ["waterfront-restaurant-owner", "cafe-server"],
  keyVocabulary: [
    { turkish: "deniz", english: "sea" },
    { turkish: "manzara", english: "view" },
    { turkish: "çay", english: "tea" },
    { turkish: "kahve", english: "coffee" },
    { turkish: "balık", english: "fish" },
    { turkish: "taze", english: "fresh" },
    { turkish: "güzel", english: "beautiful" }
  ],
  culturalNotes: "Turkish coastal towns have a strong café culture, with establishments often located right on the waterfront. Tea is the most common beverage and is served in small tulip-shaped glasses. People often spend hours relaxing, enjoying the view, and engaging in conversation.",
  initialPrompt: "You're sitting at a small café table on a terrace overlooking the beautiful blue water. Seagulls fly overhead and small fishing boats bob in the harbor. Ayşe, the owner, approaches your table with a warm smile.",
  category: "dining"
}
```

## Conclusion

The Turkish Language Learning App provides an innovative, engaging approach to language learning through AI-powered conversations in realistic scenarios. By focusing on contextual learning, cultural immersion, and personalized experiences, the app offers a unique birthday gift that will help your friend learn Turkish in an enjoyable, effective way.

The web-based implementation ensures easy access across devices without installation barriers, while the AI character system provides variety and authenticity in the learning experience. By incorporating shared experiences like waterfront visits and interest in Turkish culture, the app becomes a meaningful, personalized gift.

This project balances technical sophistication with practical implementation constraints, providing a roadmap for development that can be executed within a reasonable timeframe and budget.