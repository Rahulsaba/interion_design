const featureCards = [
  {
    id: "01",
    title: "The Best Price",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of the when looking layout.",
    iconClass: "fa-solid fa-suitcase-rolling",
  },
  {
    id: "02",
    title: "Daily Consultant",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of the when looking layout.",
    iconClass: "fa-solid fa-users-gear",
  },
  {
    id: "03",
    title: "Custom Design",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of the when looking layout.",
    iconClass: "fa-solid fa-drafting-compass",
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
              className="relative rounded-[20px] bg-[#efefef] px-5 py-5 shadow-sm sm:px-6"
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--primary-color)] text-[22px] text-white">
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

              <p className="mt-2 text-5xl font-extrabold leading-none tracking-wide text-white [text-shadow:-1px_0_#8d99ab,0_1px_#8d99ab,1px_0_#8d99ab,0_-1px_#8d99ab]">
                {card.id}
              </p>
              <span className="absolute bottom-0 right-0 h-11 w-11 rounded-br-[20px] border-b-4 border-r-4 border-[var(--primary-color)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
