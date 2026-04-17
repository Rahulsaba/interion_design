export default function ContactMapSection() {
  return (
    <section className="bg-[var(--section-bg)] pt-10">
      <iframe
        title="Office location map"
        src="https://maps.google.com/maps?q=350%205th%20Ave%2C%20New%20York%2C%20NY%2010118&t=&z=13&ie=UTF8&iwloc=&output=embed"
        className="h-[360px] w-full border-0 md:h-[420px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
