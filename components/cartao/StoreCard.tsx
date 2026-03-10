import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { GlassPanel } from '@/components/ui/GlassPanel';

export function StoreCard({
  name,
  address,
  mapsUrl,
  whatsappUrl
}: {
  name: string;
  address: string;
  mapsUrl: string;
  whatsappUrl: string;
}) {
  return (
    <GlassPanel className="rounded-2xl p-4">
      <div className="flex gap-3">
        <MapPin className="mt-1 h-4 w-4 text-[#D5A35B]" />
        <div>
          <h3 className="text-sm font-semibold text-[#F8ECDD]">{name}</h3>
          <p className="mt-1 text-xs leading-relaxed text-[#E9D7BE]/80">{address}</p>
          <div className="mt-3 flex gap-2">
            <Link
              href={mapsUrl}
              target="_blank"
              aria-label={`Ver rota para ${name}`}
              className="rounded-xl border border-[rgba(231,199,141,0.25)] bg-[rgba(255,255,255,0.04)] px-3 py-2 text-xs font-medium text-[#F8ECDD]"
            >
              Ver rota
            </Link>
            <Link
              href={whatsappUrl}
              target="_blank"
              aria-label={`Falar no WhatsApp da ${name}`}
              className="rounded-xl border border-[rgba(231,199,141,0.4)] bg-[rgba(213,163,91,0.18)] px-3 py-2 text-xs font-medium text-[#E7C78D]"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}
