const featureCards = [
  {
    id: "01",
    title: "Affordable Pricing",
    description:
      "DM Construction offers transparent pricing for interior design and construction, delivering quality workmanship within your planned budget.",
    iconClass: "fa-solid fa-money-bill-wave",
  },
  {
    id: "02",
    title: "Expert Consultation",
    description:
      "Get daily guidance from DM Construction experts for planning, material selection, and smooth execution from start to finish.",
    iconClass: "fa-solid fa-users-gear",
  },
  {
    id: "03",
    title: "Custom Interior Design",
    description:
      "We design and build personalized residential and commercial interiors that match your style, function, and long-term needs.",
    iconClass: "fa-solid fa-home",
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-[var(--section-bg)] py-10">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((card) => (
            <article
              key={card.id}
              className="card-hover-icon-3d relative rounded-[20px] bg-[#efefef] px-5 py-5 shadow-sm sm:px-6"
            >
              <div className="flex items-start gap-4">
                <span className="card-hover-icon-3d__icon mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--primary-color)] text-[22px] text-white">
                  <i className={card.iconClass} aria-hidden="true" />
                </span>

                <div>
                  <h3 className="text-xl font-extrabold text-[var(--secondary-color)]">
                    {card.title}
                  </h3>
                  <p className="mt-2 max-w-[280px] text-sm leading-7 text-[#4f5d78]">
                    {card.description}
                  </p>
                </div>
              </div>

              <span className="absolute bottom-0 right-0 h-11 w-11 rounded-br-[20px] border-b-4 border-r-4 border-[var(--primary-color)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
