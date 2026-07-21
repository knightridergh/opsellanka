import { Navbar } from '@/components/navbar';
import { ScrollProgress } from '@/components/scroll-progress';
import { DroneMascot } from '@/components/drone-mascot';
import { Hero } from '@/components/sections/hero';
import { FlagshipsSection } from '@/components/sections/flagships';
import { AppleUniverseSection } from '@/components/sections/apple-universe';
import { AndroidGalaxySection } from '@/components/sections/android-galaxy';
import { AccessoriesSection } from '@/components/sections/accessories';
import { GamingZoneSection } from '@/components/sections/gaming-zone';
import { RepairLabSection } from '@/components/sections/repair-lab';
import { TradeInSection } from '@/components/sections/trade-in';
import { WhyOpselSection } from '@/components/sections/why-opsel';
import { ReviewsSection } from '@/components/sections/reviews';
import { LocationSection } from '@/components/sections/location';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <DroneMascot />
      <Hero />
      <FlagshipsSection />
      <AppleUniverseSection />
      <AndroidGalaxySection />
      <AccessoriesSection />
      <GamingZoneSection />
      <RepairLabSection />
      <TradeInSection />
      <WhyOpselSection />
      <ReviewsSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
