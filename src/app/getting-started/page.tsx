// src/app/getting-started/page.tsx
import React from 'react';
import Link from 'next/link';
import { BookOpen, Lightbulb, Users, Heart, Target, ArrowRight, Sparkles, GraduationCap } from 'lucide-react';

export default function GettingStartedPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Sparkles className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Disability Justice Reads
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your accessible gateway to understanding disability studies, justice, and activism!
          </p>
        </div>

        {/* What We Do */}
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl font-bold text-gray-900">What We Do</h2>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Disability Justice Reads provides easy to understand reading plans that educate people about 
            disability studies, justice, and activism. We break down complex theory and academic concepts 
            into accessible, engaging content for everyone — whether you're brand new to disability studies 
            or deepening your existing knowledge.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-purple-50 rounded-xl p-6">
              <GraduationCap className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">Structured Learning</h3>
              <p className="text-gray-700 text-sm">
                Curated reading plans ranging from 7 to 14 days, designed to guide you through key concepts 
                at your own pace.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6">
              <Target className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">Clear Objectives</h3>
              <p className="text-gray-700 text-sm">
                Each plan has defined learning goals, helping you understand exactly what you'll gain from 
                your reading journey.
              </p>
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl p-8 md:p-12 mb-8 text-white">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="w-8 h-8" />
            <h2 className="text-3xl font-bold">Why This Matters</h2>
          </div>
          
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Many people don't have the opportunity to take a formal class in disability studies, and many 
              don't even know it exists as a field of study. But disability justice affects everyone. It shapes 
              how we design our buildings, create our technologies, write our policies, and interact with each other.
            </p>
            
            <p>
              Understanding disability justice means recognizing how everyday actions and assumptions impact 
              disabled people. It means questioning what we take for granted: Why are there stairs but no ramps? 
              Why is certain communication valued over others? Who gets left out when we don't think about accessibility?
            </p>

            <p className="font-semibold bg-white/10 rounded-lg p-4">
              Education is a tool for justice. When more people understand disability through a justice lens, 
              we create a world that works better for everyone.
            </p>
          </div>
        </section>

        {/* The Challenge */}
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Lightbulb className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl font-bold text-gray-900">The Challenge We Address</h2>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Disability studies theory can feel overwhelming. The field uses specialized terminology, draws from 
            multiple disciplines, and engages with complex philosophical questions. For people who are simply 
            curious or want to learn but don't have time for dense academic texts, the barrier to entry can 
            feel impossibly high.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-purple-600">
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong className="text-gray-900">The gap between activism and theory:</strong> Activism is 
              immediate and concrete-protests, policy changes, community organizing. Theory on the other hand can feel abstract 
              and distant. But theory gives us the language and frameworks to understand why things are the 
              way they are and imagine how they could be different.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We bridge this gap by translating theory into practical, understandable concepts while honoring 
              the depth and nuance of the field.
            </p>
          </div>
        </section>

        {/* Our Approach */}
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl font-bold text-gray-900">Our Approach</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accessibility First</h3>
              <p className="text-gray-700 leading-relaxed">
                We believe accessibility isn't just about who can access our website. It's about who can access 
                the knowledge itself. Our reading plans use clear language, provide context for terminology, 
                and break complex ideas into digestible pieces.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick and Meaningful</h3>
              <p className="text-gray-700 leading-relaxed">
                Each daily reading is designed to take 15-30 minutes. You don't need to dedicate hours to 
                learn something valuable. We respect your time while ensuring depth of understanding.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multiple Entry Points</h3>
              <p className="text-gray-700 leading-relaxed">
                Whether you're a complete beginner, someone with lived experience of disability, an educator, 
                or an activist, we have reading plans that meet you where you are. Choose plans based on your 
                interests, skill level, and goals.
              </p>
            </div>
          </div>
        </section>


        {/* How Disability Justice Affects Daily Life */}
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How Disability Justice Affects Daily Life
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Even if you don't identify as disabled, disability justice shapes your world in ways you might 
            not realize:
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
              <p>
                <strong className="text-gray-900">Automatic doors</strong> were designed for wheelchair users 
                but help parents with strollers, delivery workers, and people carrying groceries.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
              <p>
                <strong className="text-gray-900">Captions on videos</strong> were created for Deaf people 
                but benefit people learning new languages, watching in noisy environments, or processing 
                information better through reading.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
              <p>
                <strong className="text-gray-900">Curb cuts</strong> (the slopes where sidewalks meet streets) 
                help wheelchair users but also people with bikes, skateboards, walkers, and more.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
              <p>
                <strong className="text-gray-900">Flexible work arrangements</strong> fought for by disabled 
                workers now benefit working parents, people managing chronic conditions, and anyone seeking 
                work-life balance.
              </p>
            </div>
          </div>
        </section>

        {/* Get Started CTA */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Start your learning journey today. Choose a reading plan that interests you, and take the first 
            step toward understanding disability justice!
          </p>
          
          <Link href="/">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg inline-flex items-center space-x-2">
              <span>Explore Reading Plans</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </section>

      </div>
    </main>
  );
}