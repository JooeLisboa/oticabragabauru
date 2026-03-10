'use client';

import { motion } from 'framer-motion';

export function FloatingGlow() {
  return (
    <>
      <motion.div
        aria-hidden
        animate={{ y: [0, -16, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-14 top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(213,163,91,0.3),transparent_65%)] blur-2xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 14, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        className="pointer-events-none absolute -right-20 bottom-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(231,199,141,0.25),transparent_70%)] blur-3xl"
      />
    </>
  );
}
