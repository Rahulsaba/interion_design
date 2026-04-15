import Image from "next/image";
import Link from "next/link";

const aboutHighlights = [
  {
    title: "Our Experts Team",
    description: "Take a look at our up of the round shows",
    iconClass: "fa-solid fa-people-group",
  },
  {
    title: "Strong Materials",
    description: "Take a look at our up of the round shows",
    iconClass: "fa-solid fa-drafting-compass",
  },
];

export default function AboutContentSection() {
  return (
    <section className="bg-[#f5f5f5] py-10">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 lg:grid-cols-2 lg:items-center">
        <div className="relative mx-auto w-full max-w-[620px] pb-0 md:pb-12">
          <div className="relative h-[420px] w-full overflow-hidden rounded-[30px] md:h-[480px] md:w-[74%]">
            <Image
              src="/images/aboutus/about1.webp"
              alt="Construction site with cranes"
              fill
              sizes="(min-width: 768px) 46vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="relative mt-4 h-[360px] w-full overflow-hidden rounded-[28px] border-[7px] border-[#f5f5f5] md:absolute md:bottom-0 md:right-0 md:mt-0 md:h-[391px] md:w-[68%]">
            <Image
              src="/images/aboutus/about2.webp"
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

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102c63] md:text-5xl">
            We Are The
            <span className="text-[var(--primary-color)]"> Best And Expert </span>
            For Construction
          </h2>

          <p className="mt-4 max-w-[620px] text-sm leading-8 text-[#4f5d78] md:text-base">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even.
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
                  <h3 className="text-lg font-bold text-[#102c63]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-[#4f5d78]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <Link
            href="/contact"
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
