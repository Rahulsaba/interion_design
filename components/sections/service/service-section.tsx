import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Building Construction",
    description:
      "There are many variations of passages have available but the majority have suffered some form by injected humour words believable.",
    image: "/images/aboutus/about1.webp",
    iconClass: "fa-solid fa-building",
  },
  {
    id: "02",
    title: "Building Maintenance",
    description:
      "There are many variations of passages have available but the majority have suffered some form by injected humour words believable.",
    image: "/images/aboutus/about2.webp",
    iconClass: "fa-solid fa-screwdriver-wrench",
  },
  {
    id: "03",
    title: "Design & Estimating",
    description:
      "There are many variations of passages have available but the majority have suffered some form by injected humour words believable.",
    image: "/images/main_contact.webp",
    iconClass: "fa-solid fa-drafting-compass",
  },
];

export default function ServiceSection() {
  return (
    <section className="relative overflow-hidden py-10 text-white">
      <Image
        src="/images/bg/service_bg.webp"
        alt="Architecture blueprint background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[var(--secondary-color)]/85" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-flex h-8 items-center gap-2 rounded-full bg-[var(--primary-color)] px-3 text-xs font-semibold">
              <i className="fa-regular fa-building" />
              Services
            </span>
            <h2 className="mt-3 max-w-[460px] text-3xl font-extrabold leading-tight md:text-4xl">
              What Services We Are
              <span className="text-[var(--primary-color)]"> Provide </span>
              To You
            </h2>
          </div>

          <div className="max-w-[420px]">
            <p className="text-sm leading-7 text-white/90">
              There are many variations of passages available but the majority
              have suffered alteration in some form by injected humour slightly
              believable.
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-flex h-10 items-center rounded-md bg-[var(--primary-color)] px-4 text-sm font-semibold text-white transition hover:brightness-95"
            >
              All Services
              <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-[11px]" />
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="relative rounded-2xl bg-[#f2f2f2] p-3 text-[#1b2735]"
            >
              <div className="relative h-[190px] overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <span className="absolute right-7 top-[175px] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow">
                <i className={service.iconClass} aria-hidden="true" />
              </span>

              <div className="pt-4">
                <h3 className="text-lg font-extrabold text-[var(--secondary-color)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#4f5d78]">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex h-9 items-center rounded-md bg-[var(--primary-color)] px-3 text-sm font-semibold text-white transition hover:brightness-95"
                >
                  Learn More
                  <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-[11px]" />
                </Link>
              </div>

              <p className="mt-2 text-5xl font-extrabold leading-none tracking-wide text-[#eaeaea] [text-shadow:-1px_0_#c9c9c9,0_1px_#c9c9c9,1px_0_#c9c9c9,0_-1px_#c9c9c9]">
                {service.id}
              </p>
              <span className="absolute bottom-0 right-0 h-10 w-10 rounded-br-2xl border-b-4 border-r-4 border-[var(--primary-color)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
