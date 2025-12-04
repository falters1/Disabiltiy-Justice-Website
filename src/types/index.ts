export interface ReadingPlan {
    id: string;
    title: string;
    description: string;
    duration: number;
    category: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    imageUrl: string;
    author: string;
    enrolledCount: number;
    longDescription?: string;
    learningObjectives?: string[];
    dailyReadings?: DayReading[];
  }
  
  export interface DayReading {
    day: number;
    title: string;
    content: string;
    resources: string[];
    reflectionQuestions: string[];
  }
  
  export interface DailyQuote {
    text: string;
    author: string;
    context: string;
  }