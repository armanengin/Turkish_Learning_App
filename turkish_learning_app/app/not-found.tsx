'use client';

import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';

export default function NotFound() {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-turkish-blue mb-4">404</h1>
        <h2 className="text-2xl font-medium mb-6">Sayfa Bulunamadı</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Link
          href={isAuthenticated ? "/dashboard" : "/"}
          className="turkish-button inline-block"
        >
          {isAuthenticated ? "Return to Dashboard" : "Return Home"}
        </Link>
        
        <div className="mt-8 p-4 bg-turkish-blue bg-opacity-5 rounded-lg max-w-md mx-auto">
          <h3 className="font-bold text-turkish-blue mb-2">Turkish Lesson</h3>
          <p className="text-gray-600 text-sm">
            <span className="turkish-text">Sayfa Bulunamadı</span> (sah-fah boo-loon-ah-mah-duh) means "Page Not Found" in Turkish. 
            <br />
            <span className="turkish-text">Sayfa</span> = Page, 
            <span className="turkish-text">Bulunamadı</span> = Not Found
          </p>
        </div>
      </div>
    </div>
  );
}
