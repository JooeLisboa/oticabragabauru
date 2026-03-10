'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { brand } from '@/data/brand';
import { PremiumBackground } from '@/components/cartao/PremiumBackground';
import { FloatingGlow } from '@/components/cartao/FloatingGlow';
import { ProfileHeader } from '@/components/cartao/ProfileHeader';
import { InfoBadges } from '@/components/cartao/InfoBadges';
import { ActionList } from '@/components/cartao/ActionList';
import { SocialProofCard } from '@/components/cartao/SocialProofCard';
import { StoreCard } from '@/components/cartao/StoreCard';
import { GlassPanel } from '@/components/ui/GlassPanel';

export default function CartaoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:py-10">
      <PremiumBackground />
      <div className="relative mx-auto w-full max-w-xl">
        <FloatingGlow />

        <motion.section
          initial={{ opacity: 0, y: 22, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative rounded-[34px] border border-[rgba(231,199,141,0.2)] bg-[rgba(43,26,20,0.72)] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.5),0_0_0_1px_rgba(213,163,91,0.14)] backdrop-blur-2xl sm:p-6"
        >
          <ProfileHeader />
          <InfoBadges />
          <ActionList />
          <SocialProofCard />

          <motion.div
            id="lojas"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="mt-6 space-y-3"
          >
            {brand.stores.map((store) => (
              <StoreCard
                key={store.address}
                name={store.name}
                address={store.address}
                mapsUrl={store.mapsUrl}
                whatsappUrl={store.whatsappUrl}
              />
            ))}
          </motion.div>

          <GlassPanel className="mt-6 rounded-2xl p-4 text-center">
            <p className="text-sm font-medium text-[#F8ECDD]">{brand.instagramHandle} · {brand.whatsappDisplay}</p>
            <p className="mt-1 text-xs text-[#E9D7BE]/75">Marca com presença digital forte e atendimento acolhedor.</p>
            <div className="mt-3 flex justify-center gap-3 text-xs text-[#E7C78D]">
              <Link href={brand.instagramUrl} target="_blank" aria-label="Instagram Ótica Braga">Instagram</Link>
              <Link href={brand.whatsappUrl} target="_blank" aria-label="WhatsApp Ótica Braga">WhatsApp</Link>
            </div>
          </GlassPanel>
        </motion.section>
      </div>
    </main>
  );
}
