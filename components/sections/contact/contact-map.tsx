export default function ContactMapSection() {
  return (
    <section className="bg-[var(--section-bg)] pt-10">
      <iframe
        title="Office location map"
        src="https://maps.google.com/maps?q=147F%2C%20Mill%20Road%2C%20Nazareth%2C%20Tuticorin%20-%20628%20617&t=&z=13&ie=UTF8&iwloc=&output=embed"
        className="h-[360px] w-full border-0 md:h-[420px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
