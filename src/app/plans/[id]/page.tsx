import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, BookOpen, Target } from 'lucide-react';
import { getPlanById } from '@/data/readingPlans';

export default function PlanDetailPage({ params }: { params: { id: string } }) {
  const plan = getPlanById(params.id);

  if (!plan) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Reading Plans
        </Link>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="relative h-80">
            <Image
              src={plan.imageUrl}
              alt={plan.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center space-x-3 mb-3">
                <span className="px-3 py-1 bg-purple-600 rounded-full text-xs font-semibold">
                  {plan.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  plan.difficulty === 'Beginner' ? 'bg-green-500' :
                  plan.difficulty === 'Intermediate' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}>
                  {plan.difficulty}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-2">{plan.title}</h1>
              <p className="text-lg text-gray-200">by {plan.author}</p>
            </div>
          </div>

          <div className="p-8">
            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b">
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="w-5 h-5 text-purple-600" />
                <span><strong>{plan.duration}</strong> days</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <BookOpen className="w-5 h-5 text-purple-600" />
                <span><strong>Self-paced</strong> learning</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Plan</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {plan.longDescription || plan.description}
              </p>
            </div>

            {/* Learning Objectives */}
            {plan.learningObjectives && plan.learningObjectives.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2 text-purple-600" />
                  What You'll Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {plan.learningObjectives.map((objective, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-purple-50 p-4 rounded-lg">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{objective}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Daily Readings Preview */}
            {plan.dailyReadings && plan.dailyReadings.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Daily Reading Preview</h2>
                <div className="space-y-4">
                  {plan.dailyReadings.slice(0, 3).map((reading) => (
                    <div key={reading.day} className="border-l-4 border-purple-600 pl-6 py-3 bg-gray-50 rounded-r-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-semibold text-purple-600">Day {reading.day}</span>
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{reading.title}</h3>
                      <p className="text-gray-600 text-sm">{reading.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Button */}
            <div className="flex justify-center pt-8">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
                Start Reading Plan
              </button>
            </div>
          </div>
        </div>

        {/* Related Plans */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Your Learning</h2>
          <p className="text-gray-600 mb-6">
            Explore more reading plans to deepen your understanding of disability justice.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition"
          >
            View All Reading Plans
            <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
          </Link>
        </div>
      </div>
    </main>
  );
}