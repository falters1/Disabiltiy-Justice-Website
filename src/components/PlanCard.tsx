import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ChevronRight } from 'lucide-react';
import { ReadingPlan } from '@/types';

interface PlanCardProps {
  plan: ReadingPlan;
}

export default function PlanCard({ plan }: PlanCardProps) {
  return (
    <Link href={`/plans/${plan.id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 h-full flex flex-col">
        <div className="h-48 overflow-hidden relative">
          <Image
            src={plan.imageUrl}
            alt={plan.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
              {plan.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              plan.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
              plan.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {plan.difficulty}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">{plan.description}</p>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{plan.duration} days</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">by {plan.author}</span>
            <ChevronRight className="w-5 h-5 text-purple-600" />
          </div>
        </div>
      </div>
    </Link>
  );
}