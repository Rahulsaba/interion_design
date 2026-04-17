import Image from "next/image";

const portfolioCards = [
  {
    id: 1,
    category: "Food and Beverage",
    title: "Hill's Pet Nutrition",
  },
  {
    id: 2,
    category: "Food and Beverage",
    title: "Hill's Pet Nutrition",
  },
  {
    id: 3,
    category: "Food and Beverage",
    title: "Hill's Pet Nutrition",
  },
];

export default function PortfolioInnerCardsSection() {
  return (
    <section className="bg-[var(--section-bg)] py-10">
      <div className="mx-auto grid max-w-[1200px] gap-6 px-4 md:grid-cols-2 xl:grid-cols-3">
        {portfolioCards.map((card) => (
          <article
            key={card.id}
            className="overflow-hidden rounded-[10px] border-[6px] border-white shadow-sm"
          >
            <div className="relative h-[335px]">
              <Image
                src="/images/portfolio/portfollio_inner_card.jpg"
                alt={card.title}
                fill
                sizes="(min-width: 1280px) 32vw, (min-width: 768px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,43,43,0.62)_0%,rgba(43,43,43,0.18)_45%,rgba(43,43,43,0)_100%)]" />

              <div className="absolute left-7 top-7 text-white">
                <p className="text-[15px] font-semibold md:text-[16px]">{card.category}</p>
                <h3 className="mt-3 max-w-[250px] text-[28px] leading-tight font-extrabold md:text-[36px]">
                  {card.title}
                </h3>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
