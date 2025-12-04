import { ReadingPlan } from '@/types';

export const readingPlans: ReadingPlan[] = [
  {
    id: '1',
    title: 'Introduction to Disability Studies',
    description: 'Explore foundational concepts in disability studies, from the social model to intersectionality.',
    duration: 7,
    category: 'Foundations',
    difficulty: 'Beginner',
    imageUrl: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800',
    author: 'N/A',
    longDescription: 'This 7-day reading plan introduces you to the fundamental concepts that shape disability studies.',
    learningObjectives: [
      'Understand the social model vs. medical model of disability',
      'Hear stories from people with disabilities',
      'Learn about the history of the disability rights movement',
      'Explore disability identity and culture'
    ],
    dailyReadings: [
      {
        day: 1,
        title: 'What is Disability Studies?',
        content: 'Disability Studies is an academic field that examines disability as a social, cultural, and political phenomenon rather than simply a medical condition.',
        resources: ['N/A'],
        reflectionQuestions: ['How has your understanding of disability been shaped by medical narratives?', 'What might change if we viewed disability through a social lens?']
      },
      {
        day: 2,
        title: 'The Social Model of Disability',
        content: 'The social model argues that people are disabled by barriers in society, not by their impairment or difference.',
        resources: ['N/A'],
        reflectionQuestions: ['What barriers exist in your community that disable people?', 'How can we shift from fixing individuals to fixing society?']
      }
    ]
  },
  {
    id: '2',
    title: 'Disability Justice & Activism',
    description: 'Learn about the disability justice movement and key activists who shaped accessibility rights.',
    duration: 14,
    category: 'Activism',
    difficulty: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800',
    author: 'N/A',
    longDescription: 'Dive deep into the disability justice movement, learning from activists who have fought for accessibility, inclusion, and liberation. This plan covers key moments in disability rights history and introduces you to the 10 principles of disability justice. Prerequisites: Introduction to Disability Studies.',
    learningObjectives: [
      'Learn the history of disability rights activism',
      'Understand the 10 principles of disability justice',
      'Study key activists and their contributions',
      'Connect disability justice to other movements'
    ]
  },
  {
    id: '3',
    title: 'Intersectionality & Disability',
    description: 'Understanding how race, gender, class, and disability intersect in systems of oppression.',
    duration: 10,
    category: 'Theory',
    difficulty: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800',
    author: 'N/A',
    longDescription: 'This advanced reading plan explores the intersections of disability with race, gender, sexuality, class, and other identities. Learn how systems of oppression are interconnected and why disability justice must be intersectional.',
    learningObjectives: [
      'Apply intersectionality framework to disability',
      'Analyze case studies of intersecting identities',
      'Explore systemic oppression affecting disabled people of color',
      'Examine disability in different cultural contexts'
    ]
  },
  {
    id: '4',
    title: 'Hostile Architecture & Public Space',
    description: 'Analyze how urban design can exclude disabled people and ways to advocate for inclusive spaces.',
    duration: 10,
    category: 'Practice',
    difficulty: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'N/A',
    longDescription: 'This reading plan examines the concept of hostile architecture—design elements that deter certain behaviors or populations, often impacting disabled individuals.',
    learningObjectives: [
      'Identify examples of hostile architecture',
      'Understand the impact on disabled communities',
      'Why does hostile architecture exist?',
      'Advocate for inclusive urban design'
    ]
  }
];

export const categories = ['All', 'Foundations', 'Activism', 'Theory', 'Practice'];

export const getPlanById = (id: string): ReadingPlan | undefined => {
  return readingPlans.find(plan => plan.id === id);
};