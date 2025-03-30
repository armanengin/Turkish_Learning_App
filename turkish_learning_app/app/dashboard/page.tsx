'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import Link from 'next/link';
import Image from 'next/image';

export default function Dashboard() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="animate-fadeIn">
      <div className="bg-turkish-blue text-white rounded-xl p-6 mb-8">
        <h1 className="text-2xl font-bold mb-2">Welcome to Turkish Language Learning!</h1>
        <p className="opacity-90">
          Start your journey by selecting a character and scenario to practice Turkish in realistic conversations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Link 
          href="/characters" 
          className="turkish-card bg-gradient-to-br from-turkish-turquoise to-turkish-blue text-white hover:shadow-lg hover:scale-105 transition-all"
        >
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Choose a Character</h2>
            <p className="mb-4">Select from various Turkish personas with different backgrounds and speaking styles.</p>
            <span className="inline-block rounded-full bg-white bg-opacity-20 px-3 py-1 text-sm">
              5 Characters Available
            </span>
          </div>
        </Link>

        <Link 
          href="/scenarios" 
          className="turkish-card bg-gradient-to-br from-turkish-red to-turkish-gold text-white hover:shadow-lg hover:scale-105 transition-all"
        >
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Select a Scenario</h2>
            <p className="mb-4">Practice Turkish in different contexts like cafés, bazaars, or scenic locations.</p>
            <span className="inline-block rounded-full bg-white bg-opacity-20 px-3 py-1 text-sm">
              5 Scenarios Available
            </span>
          </div>
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Learning Progress</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Flashcards Created</span>
              <span className="text-sm text-turkish-blue">0 cards</span>
            </div>
            <div className="progress-bar">
              <div className="progress-value w-0"></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Conversations Completed</span>
              <span className="text-sm text-turkish-blue">0 conversations</span>
            </div>
            <div className="progress-bar">
              <div className="progress-value w-0"></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Vocabulary Mastered</span>
              <span className="text-sm text-turkish-blue">0 words</span>
            </div>
            <div className="progress-bar">
              <div className="progress-value w-0"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/flashcards" className="turkish-card h-full">
          <div className="p-4 flex flex-col h-full">
            <h3 className="font-bold text-lg mb-2 text-turkish-blue">Flashcards</h3>
            <p className="text-sm text-gray-600 mb-4 flex-grow">Review vocabulary with spaced repetition.</p>
            <span className="text-xs text-turkish-blue">View Flashcards →</span>
          </div>
        </Link>
        
        <Link href="/phrases" className="turkish-card h-full">
          <div className="p-4 flex flex-col h-full">
            <h3 className="font-bold text-lg mb-2 text-turkish-blue">Common Phrases</h3>
            <p className="text-sm text-gray-600 mb-4 flex-grow">Browse useful Turkish expressions.</p>
            <span className="text-xs text-turkish-blue">View Phrases →</span>
          </div>
        </Link>
        
        <div className="turkish-card h-full bg-gray-50">
          <div className="p-4 flex flex-col h-full">
            <h3 className="font-bold text-lg mb-2 text-gray-700">Learning Tip</h3>
            <p className="text-sm text-gray-600 mb-2 flex-grow">
              Practice consistently! Even 10 minutes a day is more effective than cramming once a week.
            </p>
            <div className="text-xs text-gray-500 italic">Updated daily</div>
          </div>
        </div>
      </div>
    </div>
  );
}
