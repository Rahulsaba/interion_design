import PageHero from "@/components/sections/page-hero";
import ContactInfoCards from "@/components/sections/contact/contact-card";
import ContactFormSection from "@/components/sections/contact/contact-form";
import ContactMapSection from "@/components/sections/contact/contact-map";
import ScrollReveal from "@/components/sections/contact/scroll-reveal";

export default function ContactPage() {
  return (
    <main>
      <PageHero title="Contact Us" breadcrumbLabel="Contact Us" />
      <ScrollReveal>
        <ContactInfoCards />
      </ScrollReveal>
      <ScrollReveal delay={0.08}>
        <ContactFormSection />
      </ScrollReveal>
      <ScrollReveal delay={0.12}>
        <ContactMapSection />
      </ScrollReveal>
    </main>
  );
}
