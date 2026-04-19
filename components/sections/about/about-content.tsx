import Image from "next/image";
import { aboutHighlights } from "./about-shared-content";

export default function AboutContentSection() {
  const primaryImageSrc = "/images/aboutus/about1.webp?v=2026-04-19";
  const secondaryImageSrc = "/images/aboutus/about2.webp?v=2026-04-19";

  return (
    <section className="bg-[var(--section-bg)] py-10">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 lg:grid-cols-2 lg:items-center">
        <div className="relative mx-auto w-full max-w-[620px] pb-0 md:pb-12">
          <div className="relative h-[420px] w-full overflow-hidden rounded-[30px] md:h-[480px] md:w-[74%]">
            <Image
              src={primaryImageSrc}
              alt="Construction site with cranes"
              fill
              sizes="(min-width: 768px) 46vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="relative mt-4 h-[360px] w-full overflow-hidden rounded-[28px] border-[7px] border-[#f5f5f5] md:absolute md:bottom-0 md:right-0 md:mt-0 md:h-[391px] md:w-[68%]">
            <Image
              src={secondaryImageSrc}
              alt="Construction team discussing plans"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <span className="inline-flex h-9 items-center gap-2 rounded-full bg-[var(--primary-color)] px-4 text-sm font-semibold text-white">
            <i className="fa-regular fa-building" />
            About Us
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[var(--secondary-color)] md:text-4xl">
            We Are
            <span className="text-[var(--primary-color)]"> Trusted Home Builders </span>
            At DM Construction
          </h2>

          <p className="mt-4 max-w-[620px] text-sm leading-8 text-[#4f5d78] md:text-base">
          DM Construction delivers complete home building and construction services for residential and commercial projects, combining smart planning, quality materials, and precise execution to create strong and lasting spaces.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <article
                key={item.title}
                className="card-hover-icon-3d flex items-start gap-3 rounded-2xl bg-[#efefef] p-4 shadow-sm"
              >
                <span className="card-hover-icon-3d__icon mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--primary-color)] text-lg text-white">
                  <i className={item.iconClass} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[var(--secondary-color)]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-[#4f5d78]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
