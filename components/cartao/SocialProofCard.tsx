'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { brand } from '@/data/brand';
import { GlassPanel } from '@/components/ui/GlassPanel';

export function SocialProofCard() {
  return (
    <motion.div
      id="avaliacoes"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="mt-6"
    >
      <GlassPanel className="rounded-2xl p-4">
        <div className="mb-3 flex items-center gap-2 text-[#E7C78D]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
          <span className="ml-1 text-sm font-semibold text-[#F8ECDD]">
            {brand.googleRating} no Google · {brand.googleReviews} avaliações
          </span>
        </div>
        <ul className="space-y-2 text-xs text-[#E9D7BE]/90">
          {brand.reviews.map((review) => (
            <li key={review}>“{review}”</li>
          ))}
        </ul>
      </GlassPanel>
    </motion.div>
  );
}
