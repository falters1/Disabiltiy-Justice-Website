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
    author: 'Dr. Sarah Chen',
    enrolledCount: 1247,
    longDescription: 'This 7-day reading plan introduces you to the fundamental concepts that shape disability studies. You will learn about the social model of disability, understand the difference between impairment and disability, and explore how disability intersects with other identities.',
    learningObjectives: [
      'Understand the social model vs. medical model of disability',
      'Recognize ableism in everyday life',
      'Learn about the history of the disability rights movement',
      'Explore disability identity and culture'
    ],
    dailyReadings: [
      {
        day: 1,
        title: 'What is Disability Studies?',
        content: 'Disability Studies is an academic field that examines disability as a social, cultural, and political phenomenon rather than simply a medical condition.',
        resources: ['Introduction to Disability Studies by Lennard Davis', 'The Social Model of Disability'],
        reflectionQuestions: ['How has your understanding of disability been shaped by medical narratives?', 'What might change if we viewed disability through a social lens?']
      },
      {
        day: 2,
        title: 'The Social Model of Disability',
        content: 'The social model argues that people are disabled by barriers in society, not by their impairment or difference.',
        resources: ['Mike Oliver - The Social Model', 'UPIAS Statement 1976'],
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
    author: 'Marcus Williams',
    enrolledCount: 892,
    longDescription: 'Dive deep into the disability justice movement, learning from activists who have fought for accessibility, inclusion, and liberation. This plan covers key moments in disability rights history and introduces you to the 10 principles of disability justice.',
    learningObjectives: [
      'Learn the history of disability rights activism',
      'Understand the 10 principles of disability justice',
      'Study key activists and their contributions',
      'Connect disability justice to other liberation movements'
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
    author: 'Prof. Aisha Patel',
    enrolledCount: 654,
    longDescription: 'This advanced reading plan explores the intersections of disability with race, gender, sexuality, class, and other identities. Learn how systems of oppression are interconnected and why disability justice must be intersectional.',
    learningObjectives: [
      'Apply intersectionality framework to disability',
      'Understand multiple marginalization',
      'Learn from scholars of color in disability studies',
      'Examine disability in different cultural contexts'
    ]
  },
  {
    id: '4',
    title: 'Accessible Design Principles',
    description: 'Practical approaches to creating accessible spaces, technology, and communication.',
    duration: 5,
    category: 'Practice',
    difficulty: 'Beginner',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800',
    author: 'Jamie Rodriguez',
    enrolledCount: 1103,
    longDescription: 'A practical guide to implementing accessibility in your work and life. Learn universal design principles, digital accessibility standards, and how to create inclusive environments.',
    learningObjectives: [
      'Understand universal design principles',
      'Learn WCAG accessibility guidelines',
      'Create accessible documents and presentations',
      'Design inclusive physical spaces'
    ]
  },
  {
    id: '5',
    title: 'Disability Culture & Arts',
    description: 'Explore the rich cultural contributions of disabled artists, writers, and performers.',
    duration: 7,
    category: 'Culture',
    difficulty: 'Beginner',
    imageUrl: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800',
    author: 'Alex Kim',
    enrolledCount: 567,
    longDescription: 'Celebrate disability culture through art, literature, performance, and media. This plan introduces you to disabled artists who are reshaping culture and challenging ableist narratives.',
    learningObjectives: [
      'Discover disabled artists and their work',
      'Understand disability aesthetics',
      'Learn about crip time and disabled ways of being',
      'Explore disability representation in media'
    ]
  },
  {
    id: '6',
    title: 'Neurodiversity & Autism Advocacy',
    description: 'Understanding neurodiversity as natural human variation and learning from autistic self-advocates.',
    duration: 10,
    category: 'Neurodiversity',
    difficulty: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800',
    author: 'Dr. Riley Thompson',
    enrolledCount: 978,
    longDescription: 'Learn about the neurodiversity paradigm and autism advocacy from autistic people themselves. This plan challenges deficit-based narratives and celebrates neurological differences.',
    learningObjectives: [
      'Understand the neurodiversity paradigm',
      'Learn from autistic self-advocates',
      'Challenge medical model narratives of autism',
      'Support neurodivergent people authentically'
    ]
  }
];

export const categories = ['All', 'Foundations', 'Activism', 'Theory', 'Practice', 'Culture', 'Neurodiversity'];

export const getPlanById = (id: string): ReadingPlan | undefined => {
  return readingPlans.find(plan => plan.id === id);
};