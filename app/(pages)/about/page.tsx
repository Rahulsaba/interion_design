import type { Metadata } from "next";
import PageHero from "@/components/sections/page-hero";
import AboutContentSection from "@/components/sections/about/about-content";
import AboutStatsStripSection from "@/components/sections/about/about-stats-strip";
import WorkingProcessSection from "@/components/sections/about/working-process";
import TestimonialSection from "@/components/sections/testimonial/testimonial-section";
import TeamSection from "@/components/sections/team/team-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Constux, our construction expertise, experienced team, and commitment to delivering quality projects.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero title="About Us" breadcrumbLabel="About Us" />
      <AboutContentSection />
      <AboutStatsStripSection />
      <WorkingProcessSection />
      <TestimonialSection />
      <TeamSection />
    </main>
  );
}
