import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { HighlightsSection } from '@/components/sections/HighlightsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { LocationsSection } from '@/components/sections/LocationsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';
import { brand } from '@/data/brand';

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-espresso bg-luxe text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_40%)]" />
      <Header />
      <HeroSection />
      <HighlightsSection />
      <AboutSection />
      <ReviewsSection />
      <LocationsSection />
      <ContactSection />
      <FinalCTASection />
      <Footer />
      <FloatingWhatsApp href={brand.whatsappLink} />
    </main>
  );
}
