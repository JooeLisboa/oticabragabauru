export function BadgePill({ label }: { label: string }) {
  return (
    <span className="inline-flex rounded-full border border-bronze/35 bg-bronze/10 px-3 py-1 text-xs font-medium text-champagne">
      {label}
    </span>
  );
}
