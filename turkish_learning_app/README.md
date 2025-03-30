# Turkish Language Learning App

A web application for learning Turkish through interactive AI-powered conversations with virtual characters across various scenarios.

## Features

- **AI Characters**: Converse with various Turkish personas with different backgrounds and speaking styles
- **Realistic Scenarios**: Practice Turkish in contexts like cafés, bazaars, or tourist locations
- **Interactive Conversations**: Chat with AI characters to practice your Turkish skills
- **Vocabulary Building**: Save words and phrases to flashcards during conversations
- **Spaced Repetition**: Review flashcards with a spaced repetition system
- **Common Phrases**: Browse essential Turkish expressions by category

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **AI Integration**: OpenRouter API with Google's Gemini 2.0 Flash model
- **Data Persistence**: Local storage

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Create a `.env.local` file in the root directory with your OpenRouter API key:
   ```
   OPENROUTER_API_KEY=your_api_key_here
   ```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
# or
yarn build
```

## License

This project is a personal educational tool and not intended for commercial use.

## Acknowledgements

This app was created as a birthday gift for learning Turkish in an interactive way.
