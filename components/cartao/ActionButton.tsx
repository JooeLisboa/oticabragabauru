'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Instagram, MapPin, MessageCircle, PhoneCall, Store, Star } from 'lucide-react';
import { QuickAction } from '@/data/brand';
import { cn } from '@/lib/utils';

const iconMap = {
  message: MessageCircle,
  store: Store,
  instagram: Instagram,
  star: Star,
  phone: PhoneCall,
  map: MapPin
};

export function ActionButton({ action, index }: { action: QuickAction; index: number }) {
  const Icon = iconMap[action.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.18 + index * 0.07, ease: 'easeOut' }}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={action.href}
        aria-label={action.label}
        target={action.href.startsWith('http') ? '_blank' : undefined}
        className={cn(
          'group relative flex h-14 items-center justify-between rounded-2xl border px-4 text-sm font-semibold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7C78D]',
          action.variant === 'primary'
            ? 'border-[#E7C78D]/45 bg-gradient-to-r from-[#D5A35B] to-[#E7C78D] text-[#1B100D] shadow-[0_10px_26px_rgba(213,163,91,0.34)]'
            : 'border-[rgba(231,199,141,0.2)] bg-[rgba(255,255,255,0.03)] text-[#F8ECDD] hover:border-[rgba(231,199,141,0.35)] hover:bg-[rgba(255,255,255,0.06)]'
        )}
      >
        {action.variant === 'primary' ? (
          <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.35)_45%,transparent_70%)] opacity-40 [background-size:200%_100%] animate-[sheen_3.8s_ease-in-out_infinite]" />
        ) : null}
        <span className="relative flex items-center gap-3">
          <Icon className="h-4 w-4" />
          {action.label}
        </span>
        <ArrowUpRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.div>
  );
}
