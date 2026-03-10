'use client';

import { motion } from 'framer-motion';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="mb-8 max-w-2xl"
    >
      <h2 className="text-3xl font-semibold leading-tight text-cream md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-sm text-champagne/80 md:text-base">{subtitle}</p> : null}
    </motion.div>
  );
}
