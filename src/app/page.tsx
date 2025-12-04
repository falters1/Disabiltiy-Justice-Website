import QuoteOfTheDay from '@/components/QuoteOfTheDay';
import PlanGrid from '@/components/PlanGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <QuoteOfTheDay />
      <PlanGrid />
    </main>
  );
}