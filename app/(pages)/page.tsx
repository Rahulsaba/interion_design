import type { Metadata } from "next";
import HeroCarousel from "@/components/sections/home/hero-carousel";
import FeatureCards from "@/components/sections/home/feature-cards";
import AboutSection from "@/components/sections/home/about-section";
import ServiceSection from "@/components/sections/service/service-section";
import WorkingProcessSection from "@/components/sections/about/working-process";
import PortfolioSection from "@/components/sections/portfolio/portfolio-section";
import WhyChooseSection from "@/components/sections/why/why-choose-section";
import TeamSection from "@/components/sections/team/team-section";
import FaqSection from "@/components/sections/faq/faq-section";
import TestimonialSection from "@/components/sections/testimonial/testimonial-section";
// import BlogSection from "@/components/sections/blog/blog-section";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover Constux construction services, featured projects, expert team, and trusted solutions for modern building needs.",
};

export default function Home() {
  return (
    <main className="[&>section:not(:first-child)]:!py-10 md:[&>section:not(:first-child)]:!py-10">
      <HeroCarousel />
      <FeatureCards />
      <AboutSection />
      <ServiceSection showIntro />
      <WorkingProcessSection />
      <PortfolioSection />
      <WhyChooseSection />
      <TeamSection />
      <FaqSection />
      <TestimonialSection />
      {/* <BlogSection /> */}
    </main>
  );
}
