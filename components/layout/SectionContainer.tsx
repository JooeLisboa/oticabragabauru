export function SectionContainer({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`mx-auto w-full max-w-6xl px-4 py-14 md:px-6 md:py-20 ${className}`}>{children}</section>;
}
