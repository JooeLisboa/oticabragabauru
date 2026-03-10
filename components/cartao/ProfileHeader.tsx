import { Crown } from 'lucide-react';
import { brand } from '@/data/brand';
import { SectionChip } from '@/components/ui/SectionChip';

export function ProfileHeader() {
  return (
    <header className="text-center">
      <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-[rgba(231,199,141,0.35)] bg-gradient-to-b from-[#D5A35B] to-[#9A6036] text-[#1B100D] shadow-[0_8px_30px_rgba(213,163,91,0.32)]">
        <Crown className="h-7 w-7" aria-hidden />
      </div>
      <h1 className="text-3xl font-semibold tracking-tight text-[#F8ECDD]">{brand.name}</h1>
      <p className="mt-2 text-sm font-medium text-[#E7C78D]">{brand.tagline}</p>
      <p className="mx-auto mt-2 max-w-sm text-xs text-[#E9D7BE]/80">{brand.subtitle}</p>
      <div className="mt-3">
        <SectionChip text={brand.premiumBadge} />
      </div>
    </header>
  );
}
