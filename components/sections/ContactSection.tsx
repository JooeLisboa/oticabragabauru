import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { brand, sectionCopy } from '@/data/brand';

export function ContactSection() {
  return (
    <SectionContainer>
      <SectionTitle title={sectionCopy.contactTitle} />
      <p className="max-w-2xl text-champagne/80">{sectionCopy.contactText}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <PremiumButton href={brand.whatsappLink}>Chamar no WhatsApp</PremiumButton>
        <PremiumButton href={brand.instagram}>Ver Instagram</PremiumButton>
      </div>
    </SectionContainer>
  );
}
