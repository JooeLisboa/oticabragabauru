import { MapPin } from 'lucide-react';
import { GlassCard } from './GlassCard';

export function LocationCard({ name, address }: { name: string; address: string }) {
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <GlassCard>
      <div className="flex items-start gap-3">
        <MapPin className="mt-1 h-5 w-5 text-bronze" />
        <div>
          <h3 className="font-semibold text-cream">{name}</h3>
          <p className="mt-1 text-sm text-champagne/80">{address}</p>
          <a className="mt-3 inline-block text-sm font-medium text-bronze" href={maps} target="_blank" rel="noreferrer">
            Abrir no mapa
          </a>
        </div>
      </div>
    </GlassCard>
  );
}
