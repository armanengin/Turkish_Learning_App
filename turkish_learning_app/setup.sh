#!/bin/bash

# Turkish Learning App Setup Script

echo "📚 Setting up Turkish Learning App..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create images directory if it doesn't exist
mkdir -p public/images

# Check if logo exists, otherwise create a placeholder
if [ ! -f public/images/logo.png ]; then
  echo "🖼️ Creating placeholder logo..."
  # The SVG logo has already been created
fi

# Set up environment variables if not already set
if [ ! -f .env.local ]; then
  echo "🔑 Creating environment variables..."
  cp .env.example .env.local
  echo "⚠️ Please update .env.local with your actual API keys"
fi

echo "✅ Setup complete! Run 'npm run dev' to start the application."
