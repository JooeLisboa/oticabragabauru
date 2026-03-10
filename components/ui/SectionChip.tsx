import { cn } from '@/lib/utils';

export function SectionChip({ text, className = '' }: { text: string; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full border border-[rgba(231,199,141,0.24)] bg-[rgba(233,215,190,0.07)] px-3 py-1 text-xs font-medium text-[#E9D7BE]',
        className
      )}
    >
      {text}
    </span>
  );
}
