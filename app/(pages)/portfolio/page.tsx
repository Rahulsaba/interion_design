import type { Metadata } from "next";
import PageHero from "@/components/sections/page-hero";
import PortfolioInnerCardsSection from "@/components/sections/portfolio/portfolio-inner-cards-section";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View dmconstruction portfolio projects and completed works across construction, architecture, and design categories.",
};

export default function PortfolioPage() {
  return (
    <main>
      <PageHero title="Portfolio" breadcrumbLabel="Portfolio" />
      <PortfolioInnerCardsSection />
    </main>
  );
}
