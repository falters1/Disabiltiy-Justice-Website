// src/components/Header.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition">
            <BookOpen className="w-8 h-8 text-purple-600" />
            <h1 className="text-2xl font-bold text-gray-900">Disability Justice Reads (DISCLAIMER WEBSITE STILL IN DEVELOPMENT)</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition">
              Reading Plans
            </Link>
            <Link href="/getting-started" className="text-gray-700 hover:text-purple-600 transition">
              Getting Started
            </Link>
            <Link href="/accessibility" className="text-gray-700 hover:text-purple-600 transition">
              Accessibility
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <Link
              href="/"
              className="block text-gray-700 hover:text-purple-600 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reading Plans
            </Link>
            <Link
              href="#about"
              className="block text-gray-700 hover:text-purple-600 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#community"
              className="block text-gray-700 hover:text-purple-600 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}






