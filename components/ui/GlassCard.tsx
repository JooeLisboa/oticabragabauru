import { cn } from '@/lib/utils';

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm shadow-soft',
        className
      )}
    >
      {children}
    </div>
  );
}
