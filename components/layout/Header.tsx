import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { brand } from '@/data/brand';
import { PremiumButton } from '@/components/ui/PremiumButton';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-espresso/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="#inicio" className="text-base font-semibold tracking-wide text-cream">
          {brand.name}
        </Link>
        <div className="flex items-center gap-3">
          <Link href={brand.instagram} target="_blank" className="rounded-full border border-white/10 p-2 text-champagne hover:text-cream">
            <Instagram className="h-4 w-4" />
          </Link>
          <PremiumButton href={brand.whatsappLink} ariaLabel="Abrir WhatsApp">Agendar atendimento</PremiumButton>
        </div>
      </div>
    </header>
  );
}
