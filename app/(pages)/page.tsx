import HeroCarousel from "@/components/sections/home/hero-carousel";
import FeatureCards from "@/components/sections/home/feature-cards";
import AboutSection from "@/components/sections/home/about-section";
import ServiceSection from "@/components/sections/service/service-section";
import WorkingProcessSection from "@/components/sections/service/working-process-section";
import PortfolioSection from "@/components/sections/portfolio/portfolio-section";
import WhyChooseSection from "@/components/sections/why/why-choose-section";
import TeamSection from "@/components/sections/team/team-section";
import FaqSection from "@/components/sections/faq/faq-section";
import TestimonialSection from "@/components/sections/testimonial/testimonial-section";
import BlogSection from "@/components/sections/blog/blog-section";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <FeatureCards />
      <AboutSection />
      <ServiceSection />
      <WorkingProcessSection />
      <PortfolioSection />
      <WhyChooseSection />
      <TeamSection />
      <FaqSection />
      <TestimonialSection />
      <BlogSection />
    </main>
  );
}
