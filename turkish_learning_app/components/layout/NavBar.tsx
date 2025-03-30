'use client';

import Link from 'next/link';
import { useAuth } from '../../contexts/AuthContext';

export default function NavBar() {
  const { isAuthenticated, logout } = useAuth();
  
  if (!isAuthenticated) return null;
  
  return (
    <nav className="bg-turkish-blue text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/dashboard" className="font-bold text-xl flex items-center">
            <span className="text-turkish-gold">Turkish</span>
            <span className="ml-1">Learning</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link href="/dashboard" className="hover:text-turkish-gold transition-colors">
              Dashboard
            </Link>
            <Link href="/characters" className="hover:text-turkish-gold transition-colors">
              Characters
            </Link>
            <Link href="/scenarios" className="hover:text-turkish-gold transition-colors">
              Scenarios
            </Link>
            <Link href="/grammar" className="hover:text-turkish-gold transition-colors">
              Grammar Tutor
            </Link>
            <Link href="/flashcards" className="hover:text-turkish-gold transition-colors">
              Flashcards
            </Link>
            <Link href="/phrases" className="hover:text-turkish-gold transition-colors">
              Phrases
            </Link>
            <button 
              onClick={logout}
              className="hover:text-turkish-gold transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
