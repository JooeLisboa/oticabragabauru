import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { LocationCard } from '@/components/ui/LocationCard';
import { brand, sectionCopy } from '@/data/brand';

export function LocationsSection() {
  return (
    <SectionContainer className="scroll-mt-16" >
      <div id="lojas">
        <SectionTitle title={sectionCopy.locationsTitle} subtitle={sectionCopy.locationsSubtitle} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {brand.locations.map((location, index) => (
          <LocationCard key={`${location.address}-${index}`} name={location.name} address={location.address} />
        ))}
      </div>
    </SectionContainer>
  );
}
