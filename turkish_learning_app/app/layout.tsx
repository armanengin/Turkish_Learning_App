import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '../contexts/AuthContext';
import { ConversationProvider } from '../contexts/ConversationContext';
import { FlashcardProvider } from '../contexts/FlashcardContext';
import { GrammarTutorProvider } from '../contexts/GrammarTutorContext';
import Layout from '../components/layout/Layout';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Turkish Language Learning App',
  description: 'Learn Turkish through AI-powered conversations with virtual characters.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <AuthProvider>
          <ConversationProvider>
            <FlashcardProvider>
              <GrammarTutorProvider>
                <Layout>{children}</Layout>
              </GrammarTutorProvider>
            </FlashcardProvider>
          </ConversationProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
