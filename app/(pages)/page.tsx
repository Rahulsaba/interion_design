import HeroCarousel from "@/components/sections/home/hero-carousel";
import FeatureCards from "@/components/sections/home/feature-cards";
import AboutSection from "@/components/sections/home/about-section";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <FeatureCards />
      <AboutSection />
    </main>
  );
}
