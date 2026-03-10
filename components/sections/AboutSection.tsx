import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { brand } from '@/data/brand';
import { GlassCard } from '@/components/ui/GlassCard';

export function AboutSection() {
  return (
    <SectionContainer>
      <SectionTitle title={brand.about.title} />
      <GlassCard>
        <p className="text-champagne/85">{brand.about.text}</p>
        <p className="mt-4 text-champagne/75">{brand.about.extra}</p>
      </GlassCard>
    </SectionContainer>
  );
}
