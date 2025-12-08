// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <p className="text-gray-400">
              A platform dedicated to disability justice education, centering disabled voices and experiences.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/getting-started" className="hover:text-white transition">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-white transition">
                  Accessibility Statement
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <p className="text-gray-400 mb-4">
              Join our community in building a more accessible and just world.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>Built with accessibility and inclusion at the core</p>
        </div>
      </div>
    </footer>
  );
}