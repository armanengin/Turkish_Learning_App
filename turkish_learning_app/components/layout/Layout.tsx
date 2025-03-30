'use client';
import React from 'react';
import NavBar from './NavBar';
import { useAuth } from '../../contexts/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="flex flex-col min-h-screen">
      {isAuthenticated && <NavBar />}
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>
      <footer className="bg-turkish-blue text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p> {new Date().getFullYear()} Turkish Language Learning App</p>
          <p className="text-sm mt-1">Created with ❤️ as a birthday gift</p>
        </div>
      </footer>
    </div>
  );
}
