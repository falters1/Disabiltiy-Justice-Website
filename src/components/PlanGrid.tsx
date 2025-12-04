'use client';

import React, { useState } from 'react';
import { readingPlans, categories } from '@/data/readingPlans';
import PlanCard from './PlanCard';

export default function PlanGrid() {
  const [filter, setFilter] = useState<string>('All');

  const filteredPlans = filter === 'All' 
    ? readingPlans 
    : readingPlans.filter(plan => plan.category === filter);

  return (
    <section id="plans" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 shadow'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Reading Plans</h2>
        <p className="text-gray-600">Deepen your understanding of disability justice and activism</p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlans.map(plan => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}