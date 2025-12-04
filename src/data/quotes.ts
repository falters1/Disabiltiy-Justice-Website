import { DailyQuote } from '@/types';

export const dailyQuotes: DailyQuote[] = [
  {
    text: "Disability is not a brave struggle or courage in the face of adversity. Disability is an art. It's an ingenious way to live.",
    author: "Neil Marcus",
    context: "Poet and playwright"
  },
  {
    text: "We are powerful, not despite the complexities of our bodies, but because of them.",
    author: "Harriet McBryde Johnson",
    context: "Attorney and disability rights activist"
  },
  {
    text: "Access is love.",
    author: "Disability Justice Movement",
    context: "Core principle"
  },
  {
    text: "When we design for disability first, we create better things for everyone.",
    author: "Elise Roy",
    context: "Disability rights lawyer and activist"
  },
  {
    text: "Nothing about us without us.",
    author: "Disability Rights Movement",
    context: "Fundamental slogan"
  },
  {
    text: "Disability is a natural part of the human experience.",
    author: "Judith Heumann",
    context: "Disability rights advocate"
  },
  {
    text: "Our struggle is not for the right to be the same, but for the right to be different.",
    author: "Autistic Self Advocacy Network",
    context: "Neurodiversity movement"
  }
];

export const getRandomQuote = (): DailyQuote => {
  return dailyQuotes[Math.floor(Math.random() * dailyQuotes.length)];
};