'use client';

import { MessageCircleMore } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function FloatingWhatsApp({ href }: { href: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="fixed bottom-5 right-5 z-50"
    >
      <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
        <Link
          href={href}
          aria-label="Falar no WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-soft ring-4 ring-green-400/20"
        >
          <MessageCircleMore className="h-6 w-6" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
