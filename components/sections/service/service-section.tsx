import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Interior design",
    description:
      "We create stylish and functional interior spaces with smart layouts, quality finishes, and detail-focused execution for daily comfort.",
    image: "/images/services/service-1.webp",
    iconClass: "fa-solid fa-home",
  },
  {
    id: "02",
    title: "Commercial design",
    description:
      "Our commercial design solutions improve workflow, brand presence, and space efficiency through practical planning and modern aesthetics.",
    image: "/images/services/service-2.webp",
    iconClass: "fa-solid fa-city",
  },
  {
    id: "03",
    title: "Repair and finishing",
    description:
      "We handle repairs and final finishing with precision, delivering clean surfaces, lasting durability, and polished project outcomes.",
    image: "/images/services/service-3.webp",
    iconClass: "fa-solid fa-paint-roller",
  },
  // {
  //   id: "04",
  //   title: "Construction",
  //   description:
  //     "There are many variations of passages have available but the majority have suffered some form by injected humour words believable.",
  //   image: "/images/services/service-4.webp",
  //   iconClass: "fa-solid fa-drafting-compass",
  // },
];

type ServiceSectionProps = {
  showIntro?: boolean;
};

export default function ServiceSection({ showIntro = false }: ServiceSectionProps) {
  return (
    <section className="bg-[var(--section-bg)] py-10">
      <div className="mx-auto max-w-[1200px] px-4">
        {showIntro && (
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-flex h-8 items-center gap-2 rounded-full bg-[var(--primary-color)] px-3 text-xs font-semibold text-white">
                <i className="fa-solid fa-hard-hat" />
                Services
              </span>
              <h2 className="mt-3 max-w-[460px] text-3xl font-extrabold leading-tight text-[var(--secondary-color)] md:text-4xl">
                What Services We Are
                <span className="text-[var(--primary-color)]"> Provide </span>
                To You
              </h2>
            </div>

            <div className="max-w-[420px]">
              <p className="text-sm leading-7 text-[#4f5d78]">
                There are many variations of passages available but the majority
                have suffered alteration in some form by injected humour slightly
                believable.
              </p>
              <Link
                href="/service"
                className="mt-3 inline-flex h-10 items-center rounded-md bg-[var(--primary-color)] px-4 text-sm font-semibold text-white transition hover:brightness-95"
              >
                All Services
                <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-[11px]" />
              </Link>
            </div>
          </div>
        )}

        <div className={`${showIntro ? "mt-8" : ""} grid gap-5 md:grid-cols-2 xl:grid-cols-3`}>
          {services.map((service) => (
            <article
              key={service.id}
              className="card-hover-icon-3d relative rounded-2xl bg-[#ffffff] p-3 text-[#1b2735]"
            >
              <div className="relative h-[190px] overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <span className="card-hover-icon-3d__icon absolute right-7 top-[175px] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow">
                <i className={service.iconClass} aria-hidden="true" />
              </span>

              <div className="pt-4">
                <h3 className="text-lg font-extrabold text-[var(--secondary-color)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#4f5d78]">
                  {service.description}
                </p>
              </div>
              <span className="absolute bottom-0 right-0 h-10 w-10 rounded-br-2xl border-b-4 border-r-4 border-[var(--primary-color)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
