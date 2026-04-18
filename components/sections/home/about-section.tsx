import Image from "next/image";
import Link from "next/link";

const aboutHighlights = [
  {
    title: "Design Experts",
    description:
      "Smart layouts and practical planning for interiors.",
    iconClass: "fa-solid fa-pen-ruler",
  },
  {
    title: "Quality Materials",
    description:
      "Durable, high-grade materials for lasting finishes.",
    iconClass: "fa-solid fa-cubes",
  },
];

export default function AboutSection() {
  const primaryImageSrc = "/images/aboutus/about1.webp?v=2";
  const secondaryImageSrc = "/images/aboutus/about2.webp?v=2";
  // #region agent log
  fetch("http://127.0.0.1:7306/ingest/2036b00e-37c3-47b3-9077-4c8bfcc3e38f", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "f2df8a" },
    body: JSON.stringify({
      sessionId: "f2df8a",
      runId: "pre-fix",
      hypothesisId: "H2",
      location: "about-section.tsx:20",
      message: "AboutSection rendering secondary image",
      data: { secondaryImageSrc },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion

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
            We Are The
            <span className="text-[var(--primary-color)]"> Interior Design Experts </span>
            At DM Construction
          </h2>

          <p className="mt-4 max-w-[620px] text-sm leading-8 text-[#4f5d78] md:text-base">
            DM Construction delivers complete interior design and construction services for
            homes and commercial spaces, combining creative planning, premium materials,
            and precise execution to create functional and elegant environments.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <article
                key={item.title}
                className="flex items-start gap-3 rounded-2xl bg-[#efefef] p-4 shadow-sm"
              >
                <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--primary-color)] text-lg text-white">
                  <i className={item.iconClass} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[var(--secondary-color)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-[#4f5d78]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-6 inline-flex h-11 items-center rounded-md bg-[var(--primary-color)] px-5 text-sm font-semibold text-white transition hover:brightness-95"
          >
            Discover More
            <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-[12px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
