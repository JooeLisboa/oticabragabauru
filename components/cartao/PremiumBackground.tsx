export function PremiumBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(130deg,#140C09_0%,#1d120e_40%,#110a08_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(213,163,91,0.16),transparent_35%),radial-gradient(circle_at_88%_20%,rgba(231,199,141,0.13),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(154,96,54,0.20),transparent_45%)]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  );
}
