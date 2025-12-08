// src/app/accessibility/page.tsx
import React from 'react';
import { Check, Heart, Users, Eye, Ear, MessageSquare } from 'lucide-react';

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Heart className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Accessibility Statement
          </h1>
          <p className="text-xl text-gray-600">
            Our commitment to creating an inclusive digital space
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
          
          {/* Our Commitment */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Disability Justice Reads is committed to ensuring digital accessibility for people of all abilities. 
              We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe that accessibility is not just a feature—it is a fundamental right. Our platform centers 
              the principles of disability justice, which means building with and for disabled communities from the ground up.
            </p>
          </section>


          {/* Known Limitations */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Known Limitations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Despite our best efforts to ensure accessibility, there may be some limitations. We are aware of the following:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6">
              <li>• Some third-party content may not be fully accessible</li>
              <li>• No audio reader on the website</li>
              <li>• No alt text for images</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We are committed to addressing these issues and improving accessibility across our platform.
            </p>
          </section>

          {/* Feedback */}
          <section className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">We Welcome Your Feedback</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We welcome feedback on the accessibility of Disability Justice Reads. Please let us know if you 
              encounter accessibility barriers on our platform.
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Contact us:</strong></p>
              <p>Email: COMING SOON</p>
            </div>
          </section>

          {/* Nothing About Us */}
          <section className="bg-purple-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              "Nothing About Us Without Us"
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This platform is built in the spirit of the well known slogan 
              "Nothing About Us Without Us." We actively seek input from people with disabilities and 
              prioritize their lived experiences in all our design and development decisions.
            </p>
          </section>

          {/* Last Updated */}
          <section className="text-center pt-8 border-t">
            <p className="text-gray-600 text-sm">
              This statement was last updated on December 2025.
            </p>
            <p className="text-gray-600 text-sm mt-2">
              We are committed to continuous improvement of our accessibility practices.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}