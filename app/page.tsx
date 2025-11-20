'use client';

import { Hero } from '@/components/sections/Hero';
import { Products } from '@/components/sections/Products';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Benefits } from '@/components/sections/Benefits';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Products />
      <HowItWorks />
      <Benefits />
      <FinalCTA />
      <Footer />
    </main>
  );
}