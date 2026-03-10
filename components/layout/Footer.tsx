import Link from 'next/link';
import { brand } from '@/data/brand';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-champagne/80 md:flex-row md:items-center md:justify-between md:px-6">
        <p>© {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.</p>
        <div className="flex items-center gap-4">
          <Link href={brand.instagram} target="_blank">{brand.handle}</Link>
          <Link href={brand.whatsappLink} target="_blank">{brand.whatsappDisplay}</Link>
        </div>
      </div>
    </footer>
  );
}
