import Image from "next/image";

const reasons = [
  {
    title: "Affordable Cost",
    description:
      "We offer cost-effective interior design and construction solutions with clear pricing and no hidden project charges.",
    iconClass: "fa-solid fa-coins",
  },
  {
    title: "Our Experience Team",
    description:
      "Our experienced team manages planning, execution, and finishing with precision to deliver high-quality project results.",
    iconClass: "fa-solid fa-users-gear",
  },
  {
    title: "Certified Company",
    description:
      "As a certified company, DM Construction follows trusted standards to ensure safety, quality, and client confidence.",
    iconClass: "fa-regular fa-circle-check",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-[var(--section-bg)] py-10">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 lg:grid-cols-2 lg:items-start">
        <div>
          <span className="inline-flex h-8 items-center gap-2 rounded-full bg-[var(--primary-color)] px-3 text-xs font-semibold text-white">
            <i className="fa-regular fa-building" />
            Why Choose Us
          </span>

          <h2 className="mt-3 max-w-[560px] text-3xl font-extrabold leading-tight text-[var(--secondary-color)] md:text-4xl">
            Why DM Construction Is
            <span className="text-[var(--primary-color)]"> The Right Choice</span>
          </h2>

          <p className="mt-3 max-w-[620px] text-sm leading-7 text-[#4f5d78] md:text-base">
            We combine creative interior design, reliable construction, and
            transparent communication to deliver quality spaces that match your
            style, budget, and timeline.
          </p>

          <div className="mt-6 space-y-4">
            {reasons.map((reason) => (
              <article key={reason.title} className="flex items-start gap-3">
                <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--primary-color)] text-white">
                  <i className={reason.iconClass} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[var(--secondary-color)]">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-[#4f5d78]">
                    {reason.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] pb-0 md:pb-16">
          <span className="absolute left-7 top-8 hidden h-[220px] w-[220px] rounded-[30px] border-[6px] border-[var(--primary-color)] md:block" />

          <div className="relative z-10 mx-auto h-[330px] w-full max-w-[420px] overflow-hidden rounded-[30px] md:ml-auto md:mr-0 md:h-[420px]">
            <Image
              src="/images/why/choose_2.jpg"
              alt="Construction team at elevated work area"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-20 mx-auto mt-4 h-[190px] w-[190px] overflow-hidden rounded-full border-[7px] border-[#f5f5f5] md:absolute md:bottom-0 md:left-0 md:mt-0 md:h-[220px] md:w-[220px]">
            <Image
              src="/images/why/choose_1.jpg"
              alt="Engineers checking construction plans"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
