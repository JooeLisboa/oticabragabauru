'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

type PremiumButtonProps = {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
};

export function PremiumButton({ href, children, ariaLabel }: PremiumButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <Link
        href={href}
        aria-label={ariaLabel}
        className="group inline-flex items-center gap-2 rounded-full border border-bronze/40 bg-gradient-to-r from-bronze/90 to-amber-200 px-6 py-3 text-sm font-semibold text-espresso shadow-glow transition-all hover:brightness-105"
      >
        {children}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}
