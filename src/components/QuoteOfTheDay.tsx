'use client';

import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { DailyQuote } from '@/types';
import { getRandomQuote } from '@/data/quotes';

export default function QuoteOfTheDay() {
  const [quote, setQuote] = useState<DailyQuote | null>(null);

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  if (!quote) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-4">
            <Quote className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">Quote of the Day</span>
          </div>
          <blockquote className="text-2xl md:text-3xl font-serif mb-4 leading-relaxed">
            "{quote.text}"
          </blockquote>
          <div className="text-purple-100">
            <p className="font-semibold">— {quote.author}</p>
            <p className="text-sm">{quote.context}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
