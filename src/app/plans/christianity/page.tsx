import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Users, BookOpen, Target, Heart, Cross } from 'lucide-react';

export default function ChristianityPlanPage() {
    const dailyReadings = [
      {
        day: 1,
        title: 'John 9: The Man Born Blind',
        content: 'Read John 9:1-41. Pay attention to the disciples’ question about sin and disability, and Jesus’ response. As you go through it, reflect on how assumptions around disability show up in the story. What might the passage feel like if healing weren’t the main focus?',
        resources: ['John 9:1-41 (Bible)'],
        reflectionQuestions: [
          'What assumptions about disability appear in this story?',
          'How does Jesus challenge or reshape those assumptions?',
          'How else could this story be interpreted?'
        ]
      },
      {
        day: 2,
        title: 'Mark 2: The Paralyzed Man and His Friends',
        content: 'Read Mark 2:1-12. Instead of focusing only on the healing, take note of the friends’ actions and the accessibility barriers they address. Consider how the story highlights community support and creativity.',
        resources: ['Mark 2:1-12 (Bible)'],
        reflectionQuestions: [
          'What does this story show about community care?',
          'What feels significant about the friends’ determination?',
          'How do communities today remove or reinforce barriers?'
        ]
      },
      {
        day: 3,
        title: 'Matthew 9: Touch and Healing',
        content: 'Read Matthew 9:18-26. Think about the woman with chronic bleeding and how social or religious norms shaped her experience. Notice Jesus’ response and consider what inclusion might look like beyond healing.',
        resources: ['Matthew 9:18-26 (Bible)'],
        reflectionQuestions: [
          'How did purity laws affect this woman’s life?',
          'What stands out about Jesus’ interaction with her?',
          'Where do similar patterns show up today?'
        ]
      },
      {
        day: 4,
        title: 'Acts 3: Peter, John, and the Beggar',
        content: 'Read Acts 3:1-10. Pay attention to the social and economic context of the man at the temple gate. Think about how cure is presented as the solution and what other needs might be at play.',
        resources: ['Acts 3:1-10 (Bible)'],
        reflectionQuestions: [
          'Why might the man have been begging?',
          'What assumptions about disability appear here?',
          'What might change if accessibility were addressed first?'
        ]
      },
      {
        day: 5,
        title: 'Reflection: What Have We Learned So Far?',
        content: 'Take today to look back on Days 1–4. Notice any patterns in how disability is treated in these stories. Think about what feels familiar, surprising, or challenging.',
        resources: ['Your notes from Days 1–4'],
        reflectionQuestions: [
          'What themes keep coming up?',
          'How have these stories shaped Christian views of disability?',
          'What questions are you still sitting with?'
        ]
      },
      {
        day: 6,
        title: 'Introduction to Disability Theology',
        content: 'Today, explore some basics of disability theology. It invites us to move beyond charity or cure focused approaches and to consider disability as part of human diversity.',
        resources: ['Jeff McNair, Ben Rhodes - "Towards a Christian Model of Disability"'],
        reflectionQuestions: [
          'What parts of this perspective feel new to you?',
          'How does disability theology reframe familiar stories?',
          'Who gets centered in these discussions?'
        ]
      },
      {
        day: 7,
        title: 'Nancy Eiesland: The Disabled God',
        content: 'Learn about Nancy Eiesland’s idea of the “disabled God,” which reflects on Jesus’ resurrected body retaining its wounds. Consider how this challenges assumptions about perfection and ability.',
        resources: ['Nancy Eiesland - "The Disabled God" (excerpts)'],
        reflectionQuestions: [
          'How does this change the way you see the resurrection?',
          'What do Christ’s scars represent to you?',
          'How might this perspective shape church spaces?'
        ]
      },
      {
        day: 8,
        title: 'Amos Yong: A New Vision of the People of God',
        content: 'Amos Yong highlights how the Holy Spirit works through all kinds of bodies and minds. Think about how this broadens understandings of spiritual gifts and participation.',
        resources: ['Amos Yong - "The Bible, Disability, and the Church"'],
        reflectionQuestions: [
          'How does this view expand ideas of inclusion?',
          'What gifts might be overlooked in your community?',
          'How does this shift your view of the Spirit’s work?'
        ]
      },
      {
        day: 9,
        title: 'Deborah Beth Creamer: Limitations',
        content: 'Creamer’s “limits model” emphasizes that all people have limits, and disability can make these limits more visible. Reflect on how this model broadens conversations around access and embodiment.',
        resources: ['Creamer - Disability and Christian Theology: Embodied Limits and Constructive Possibilities'],
        reflectionQuestions: [
          'How does this model differ from others you’ve seen?',
          'What does it reveal about how we treat limitations?',
          'How might this shape faith communities?'
        ]
      },
      {
        day: 10,
        title: 'The Imago Dei: Created in God’s Image',
        content: 'Return to Genesis 1:27 and reflect on what it means for "everyone" to be made in God’s image. Think about how this relates to diversity in bodies and minds.',
        resources: ['Genesis 1:27'],
        reflectionQuestions: [
          'How has “image of God” been discussed in your experience?',
          'How does disability fit into this idea?',
          'What does this mean for community life?'
        ]
      },
      {
        day: 11,
        title: 'Revisiting John 9 with New Eyes',
        content: 'Read John 9 again, bringing what you’ve learned so far. Notice where the story shifts when you’re not focused solely on healing.',
        resources: ['John 9:1-41 (Bible)'],
        reflectionQuestions: [
          'What feels different this time?',
          'Who gains voice or agency in the story?',
          'What themes stand out now?'
        ]
      },
      {
        day: 12,
        title: 'Revisiting Mark 2: Community as the Miracle',
        content: 'Read Mark 2 again and pay attention to the role of the community. Think about how problem-solving, access, and care show up in the story.',
        resources: ['Mark 2:1-12 (Bible)'],
        reflectionQuestions: [
          'What barriers show up in your community?',
          'How does this story reframe “miracle”?',
          'What would prioritizing access look like?'
        ]
      },
      {
        day: 13,
        title: 'Building Accessible Faith Communities',
        content: 'Reflect on what makes a community genuinely accessible (physically, socially, and theologically). Consider practical, everyday ways this takes shape.',
        resources: ['Accessibility guides for churches'],
        reflectionQuestions: [
          'What forms of access exist in your community?',
          'What could be improved?',
          'What steps could you take or encourage?'
        ]
      },
      {
        day: 14,
        title: 'Your Call to Action',
        content: 'As you wrap up these 14 days, think about what has shifted for you. Consider what practical steps you’d like to take or explore further.',
        resources: ['Disability justice organizations'],
        reflectionQuestions: [
          'What have you learned?',
          'What next step feels meaningful?',
          'How will you keep learning from disabled voices?'
        ]
      }
    ];
  
  

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              src="https://images.unsplash.com/photo-1613963986655-ba1797350998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Disability & Christianity"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center space-x-3 mb-3">
                <span className="px-3 py-1 bg-purple-600 rounded-full text-xs font-semibold">
                  Faith
                </span>
                <span className="px-3 py-1 bg-yellow-500 rounded-full text-xs font-semibold">
                  Intermediate
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Disability & Christianity: A Theological Journey
              </h1>
              <p className="text-lg text-gray-200">DISCLAIMER: AI was used to help craft this plan</p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b">
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="w-5 h-5 text-purple-600" />
                <span><strong>14</strong> days</span>
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
                This 14-day reading plan takes you on a theological journey through disability and Christianity. 
                Beginning with traditional biblical healing narratives, we move into contemporary disability 
                theology that challenges ableist interpretations, and finally return to scripture with new eyes. 
                You will explore how disabled theologians are reshaping Christian thought and practice.
                Pre-Requisites: Social and Medical Models of Disability, Experience with Biblical Texts are helpful.
              </p>
            </div>

            {/* Learning Objectives */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2 text-purple-600" />
                What You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Examine biblical healing stories with critical awareness',
                  'Understand key concepts in disability theology',
                  'Challenge the "charity model" within religious communities',
                  'Reimagine biblical texts through a disability justice lens',
                ].map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-purple-50 p-4 rounded-lg">
                    <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{objective}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Journey Overview */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl p-8 md:p-12 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Cross className="w-8 h-8 mr-3" />
            The Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-2">Part 1: Days 1-5</h3>
              <p className="text-purple-100">
                Biblical Healing Narratives - Examine traditional scripture passages with critical awareness
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-2">Part 2: Days 6-10</h3>
              <p className="text-purple-100">
                Disability Theology - Learn from disabled theologians who are reshaping Christian thought
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-2">Part 3: Days 11-14</h3>
              <p className="text-purple-100">
                Reimagining Scripture - Return to the Bible with a disability justice lens
              </p>
            </div>
          </div>
        </div>

        {/* All 14 Daily Readings */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">14-Day Reading Plan</h2>
          
          {dailyReadings.map((reading) => (
            <div key={reading.day} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Day {reading.day}</h3>
                </div>
                <h4 className="text-xl mt-2">{reading.title}</h4>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h5 className="font-bold text-gray-900 mb-2">Today's Reading:</h5>
                  <p className="text-gray-700 leading-relaxed">{reading.content}</p>
                </div>

                <div className="mb-6">
                  <h5 className="font-bold text-gray-900 mb-2">Resources:</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {reading.resources.map((resource, idx) => (
                      <li key={idx} className="text-gray-700 text-sm">{resource}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-bold text-gray-900 mb-2">Reflection Questions:</h5>
                  <ul className="space-y-2">
                    {reading.reflectionQuestions.map((question, idx) => (
                      <li key={idx} className="text-gray-700 text-sm flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            This 14-day plan will transform how you read scripture and understand disability in faith communities.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
            Start Day 1
          </button>
        </div>
      </div>
    </main>
  );
}