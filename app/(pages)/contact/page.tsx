import type { Metadata } from "next";
import PageHero from "@/components/sections/page-hero";
import ContactInfoCards from "@/components/sections/contact/contact-card";
import ContactFormSection from "@/components/sections/contact/contact-form";
import ContactMapSection from "@/components/sections/contact/contact-map";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact dmconstruction for project consultations, service inquiries, and support from our construction experts.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero title="Contact Us" breadcrumbLabel="Contact Us" />
      <ContactInfoCards />
      <ContactFormSection />
      <ContactMapSection />
    </main>
  );
}
