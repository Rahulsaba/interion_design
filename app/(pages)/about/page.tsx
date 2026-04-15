import PageHero from "@/components/sections/page-hero";
import AboutContentSection from "@/components/sections/about/about-content";
import AboutStatsStripSection from "@/components/sections/about/about-stats-strip";
import ScrollReveal from "@/components/sections/about/scroll-reveal";
import WorkingProcessSection from "@/components/sections/about/working-process";

export default function AboutPage() {
  return (
    <main>
      <PageHero title="About Us" breadcrumbLabel="About Us" />
      <ScrollReveal>
        <AboutContentSection />
      </ScrollReveal>
      <ScrollReveal delay={0.08}>
        <AboutStatsStripSection />
      </ScrollReveal>
      <ScrollReveal delay={0.12}>
        <WorkingProcessSection />
      </ScrollReveal>
    </main>
  );
}
