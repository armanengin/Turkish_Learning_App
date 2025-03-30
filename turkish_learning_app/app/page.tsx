'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';
import Image from 'next/image';

export default function Home() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { isAuthenticated, login } = useAuth();
  const router = useRouter();

  // Redirect if already authenticated
  if (isAuthenticated) {
    router.push('/dashboard');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      router.push('/dashboard');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 animate-fadeIn">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image 
              src="/images/logo.svg" 
              alt="Turkish Learning App Logo"
              className="object-contain"
              fill
              priority
            />
          </div>
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-turkish-red">Turkish</span> Learning App
          </h1>
          <p className="text-gray-600">
            Learn Turkish through interactive conversations with AI characters
          </p>
        </div>

        <div className="mb-6 p-4 bg-turkish-blue bg-opacity-5 border-l-4 border-turkish-blue rounded">
          <p className="text-turkish-blue font-medium mb-2">🎁 Happy Birthday!</p>
          <p className="text-sm text-gray-600">
            This app was created specially for you as a birthday gift. Enjoy learning Turkish in an interactive way!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="turkish-input w-full"
              placeholder="Enter the password you were given"
              required
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          </div>
          
          <button
            type="submit"
            className="w-full turkish-button py-3"
          >
            Enter the App
          </button>
        </form>
      </div>
      
      <p className="mt-8 text-sm text-gray-500">
        Created with ❤️ for language learning
      </p>
    </div>
  );
}
