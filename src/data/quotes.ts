import { DailyQuote } from '@/types';

export const dailyQuotes: DailyQuote[] = [
  {
    text: "All bodies are caught in the bindings of ability, race, class, gender, sexual orientation, sexuality, citizenship. We are powerful not despite the complexities of our identities, but because of them. Only universal, collective access can lead to universal, collective liberation.",
    author: "Sins Invalid",
    context: "Disability justice performance project"
  },
  {
    text: "There has always been resistance to all forms of oppression, as we know through our bones that there have simultaneously been disabled people visioning a world where we flourish, that values and celebrates us in all our myriad beauty.",
    author: "Sins Invalid",
    context: "Disability justice performance project"
  },
  {
    text: "True accountability is not only apologizing, understanding the impact your actions have caused on yourself and others, making amends or reparations to the harmed parties; but most importantly, true accountability is changing your behavior so that the harm, violence, abuse does not happen again.",
    author: "Mia Mingus",
    context: "Disability activist"
  },
  {
    text: "Storytelling can be more than a blog post, essay, or book. It can be an emoji, a meme, a selfie, or a tweet. It can become a movement for social change.",
    author: "Alice Wong",
    context: "Disability activist"
  },
  {
    text: "For we are leaders of inclusiveness and community, of love, equity, and justice.",
    author: "Judith Heumann",
    context: "Disability rights advocate"
  },
  {
    text: "Part of the problem is that we tend to think that equality is about treating everyone the same, when it’s not. It’s about fairness. It’s about equity of access.",
    author: "Judith Heumann",
    context: "Disability rights advocate"
  },
  {
    text: "Advocacy is not just a task for charismatic individuals or high-profile community organizers. Advocacy is for all of us; advocacy is a way of life. It is a natural response to the injustices and inequality in the world.",
    author: "Alice Wong",
    context: "Disability activist"
  }
];

export const getRandomQuote = (): DailyQuote => {
  return dailyQuotes[Math.floor(Math.random() * dailyQuotes.length)];
};