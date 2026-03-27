import type { Metadata } from 'next';
import PlixGuavaGlowSequence from '@/components/PlixGuavaGlowSequence';

export const metadata: Metadata = {
  title: "Plix Guava Glow | Rooted in Nature",
  description: "Your daily performance perfected.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F0EC]">
      <PlixGuavaGlowSequence />
    </main>
  );
}
