import { Star } from 'lucide-react';
import { GlassCard } from './GlassCard';

export function ReviewCard({ author, text }: { author: string; text: string }) {
  return (
    <GlassCard className="h-full">
      <div className="mb-4 flex items-center gap-1 text-amber-300">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-sm text-champagne/90">“{text}”</p>
      <p className="mt-4 text-sm font-semibold text-cream">{author}</p>
    </GlassCard>
  );
}
