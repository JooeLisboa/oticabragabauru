import { cn } from '@/lib/utils';

type GlassPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div
      className={cn(
        'rounded-[28px] border border-[rgba(231,199,141,0.18)] bg-[rgba(41,24,18,0.72)] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:p-5',
        className
      )}
    >
      {children}
    </div>
  );
}
