'use client';

import { motion } from 'framer-motion';
import { brand } from '@/data/brand';
import { SectionChip } from '@/components/ui/SectionChip';

export function InfoBadges() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
      className="mt-5 flex flex-wrap justify-center gap-2"
    >
      {brand.badges.map((badge) => (
        <motion.div key={badge} variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
          <SectionChip text={badge} className="text-[11px]" />
        </motion.div>
      ))}
    </motion.div>
  );
}
