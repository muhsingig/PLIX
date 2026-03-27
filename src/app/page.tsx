import type { Metadata } from 'next';
import PlixGuavaGlowSequence from '@/components/PlixGuavaGlowSequence';

export const metadata: Metadata = {
  title: "Plix Guava Glow | Rooted in Nature",
  description: "Your daily performance perfected.",
};

import LandingContent from '@/components/LandingContent';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F0EC]">
      <PlixGuavaGlowSequence />
      <LandingContent />
    </main>
  );
}
