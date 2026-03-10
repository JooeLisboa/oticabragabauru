'use client';

import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { BadgePill } from '@/components/ui/BadgePill';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { brand } from '@/data/brand';

export function HeroSection() {
  return (
    <SectionContainer className="relative overflow-hidden" >
      <div className="pointer-events-none absolute -left-16 top-12 h-52 w-52 rounded-full bg-bronze/20 blur-3xl" />
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative">
        <div className="mb-6 flex flex-wrap gap-2">
          {brand.institutionalBadges.map((badge) => (
            <BadgePill key={badge} label={badge} />
          ))}
        </div>
        <h1 id="inicio" className="max-w-3xl text-4xl font-semibold leading-tight text-cream md:text-6xl">{brand.headline}</h1>
        <p className="mt-5 max-w-2xl text-base text-champagne/85 md:text-lg">{brand.subheadline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <PremiumButton href={brand.whatsappLink}>Falar com especialista</PremiumButton>
          <PremiumButton href="#lojas">Ver lojas</PremiumButton>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
