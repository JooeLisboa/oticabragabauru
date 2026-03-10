'use client';

import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { brand } from '@/data/brand';
import { GlassCard } from '@/components/ui/GlassCard';

export function HighlightsSection() {
  return (
    <SectionContainer>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-2 gap-3 md:grid-cols-3"
      >
        {brand.highlights.map((item) => (
          <motion.div key={item} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <GlassCard className="h-full text-center text-sm font-medium text-champagne/90">{item}</GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
