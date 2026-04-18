import Image from "next/image";

const portfolioCards = [
  { id: 1, image: "/images/portfolio/portfollio_inner_card.jpg" },
  { id: 2, image: "/images/portfolio/portfolio_1.webp" },
  { id: 3, image: "/images/portfolio/portfolio_2.webp" },
  { id: 4, image: "/images/portfolio/portfolio_3.webp" },
];

export default function PortfolioInnerCardsSection() {
  return (
    <section className="bg-[var(--section-bg)] py-10 md:py-14">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioCards.map((card) => (
          <article
            key={card.id}
            className="group overflow-hidden rounded-[28px] shadow-sm"
          >
            <div className="relative h-[260px]">
              <Image
                src={card.image}
                alt={`Portfolio project ${card.id}`}
                fill
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 p-[10px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="h-full w-full rounded-[18px] bg-[#FF9800]/85" />
              </div>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="relative h-10 w-10">
                  <span className="absolute top-1/2 left-0 h-1 w-full -translate-y-1/2 rounded-full bg-white" />
                  <span className="absolute top-0 left-1/2 h-full w-1 -translate-x-1/2 rounded-full bg-white" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
