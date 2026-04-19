const processSteps = [
  {
    id: "01",
    title: "Choose Service",
    description:
      "Choose the interior or construction service that best fits your space, goals, and project expectations.",
    iconClass: "fa-solid fa-clipboard-list",
  },
  {
    id: "02",
    title: "Free Consultant",
    description:
      "Get a free consultation with our team to discuss design ideas, timelines, materials, and execution plans.",
    iconClass: "fa-solid fa-people-group",
  },
  {
    id: "03",
    title: "Estimate Budget",
    description:
      "Receive a clear budget estimate with transparent pricing based on your design and construction requirements.",
    iconClass: "fa-solid fa-calculator",
  },
  {
    id: "04",
    title: "Project Production",
    description:
      "We begin project execution with skilled workmanship, quality checks, and timely delivery from start to finish.",
    iconClass: "fa-solid fa-city",
  },
];

export default function WorkingProcessSection() {
  return (
    <section className="bg-[var(--section-bg)] py-10">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--primary-color)] px-4 py-1 text-sm font-semibold text-white shadow-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/65 text-[11px]">
              <i className="fa-regular fa-clock" />
            </span>
            Working Process
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[var(--secondary-color)] md:text-4xl">
            Easy Steps For{" "}
            <span className="text-[var(--primary-color)]">dmconstruction</span>
          </h2>

          <div className="mx-auto mt-3 flex w-[90px] items-center justify-center gap-2">
            <span className="h-[3px] w-16 rounded-full bg-[var(--primary-color)]" />
            <span className="h-[3px] w-3 rounded-full bg-[var(--primary-color)]/65" />
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.id}
              className="card-hover-icon-3d relative min-h-[250px] rounded-[16px] bg-[#f9f9f9] px-6 pb-6 pt-9 shadow-[0_8px_28px_rgba(0,0,0,0.04)]"
            >
              <span className="card-hover-icon-3d__icon absolute right-4 top-0 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#f5f5f5] bg-[var(--primary-color)] text-[20px] text-white shadow-sm">
                <i className={step.iconClass} aria-hidden="true" />
              </span>

              <p
                className="font-heading text-[44px] font-bold leading-none tracking-wide text-transparent"
                style={{ WebkitTextStroke: "1px var(--primary-color)" }}
              >
                {step.id}
              </p>

              <h3 className="mt-2 text-[20px] font-extrabold leading-tight text-[var(--secondary-color)]">
                {step.title}
              </h3>

              <p className="mt-2.5 text-[15px] leading-8 text-[#637082]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
