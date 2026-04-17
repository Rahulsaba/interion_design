import type { Metadata } from "next";
import PageHero from "@/components/sections/page-hero";
import ServiceSection from "@/components/sections/service/service-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore dmconstruction services including construction, maintenance, and design solutions tailored to your project goals.",
};

export default function ServicePage() {
  return (
    <main>
      <PageHero title="Service" breadcrumbLabel="Service" />
      <ServiceSection />
    </main>
  );
}
