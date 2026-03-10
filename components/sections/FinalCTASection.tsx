'use client';

import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { brand, sectionCopy } from '@/data/brand';

export function FinalCTASection() {
  return (
    <SectionContainer>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-bronze/40 bg-gradient-to-r from-mocha/80 via-espresso/80 to-black/70 p-8 shadow-glow"
      >
        <h3 className="text-2xl font-semibold text-cream md:text-3xl">{sectionCopy.finalCtaTitle}</h3>
        <p className="mt-3 max-w-2xl text-champagne/80">{sectionCopy.finalCtaText}</p>
        <div className="mt-6">
          <PremiumButton href={brand.whatsappLink}>Quero meu atendimento premium</PremiumButton>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
