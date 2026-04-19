"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const portfolioItems = [
  {
    id: 1,
    image: "/images/portfolio/portfolio_1.webp",
    category: "CONSTRUCTION",
    title: "Residential Building",
  },
  {
    id: 2,
    image: "/images/portfolio/portfolio_2.webp",
    category: "ARCHITECTURE",
    title: "Building Design",
  },
  {
    id: 3,
    image: "/images/portfolio/portfolio_3.webp",
    category: "APARTMENT",
    title: "Empire Apartment",
  },
];

function getVisibleCount(width: number) {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const setCount = () => setVisibleCount(getVisibleCount(window.innerWidth));
    setCount();
    window.addEventListener("resize", setCount);
    return () => window.removeEventListener("resize", setCount);
  }, []);

  const loopedItems = [...portfolioItems, ...portfolioItems];
  const cardWidth = 100 / visibleCount;
  const translateX = currentIndex * cardWidth;

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const goPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length,
    );
  };

  return (
    <section className="bg-[var(--section-bg)] py-10">
      <div className="relative ">
        <div className="relative overflow-hidden bg-[var(--secondary-color)] pt-10">
          <Image
            src="/images/bg/portfolio_bg.webp"
            alt="Construction portfolio background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--secondary-color)]/80" />

          <div className="relative z-10 mx-auto max-w-[1200px] px-4 pb-24 text-center">
            <span className="inline-flex h-8 items-center gap-2 rounded-full bg-[var(--primary-color)] px-3 text-xs font-semibold text-white">
              <i className="fa-solid fa-images" />
              Our Portfolio
            </span>
            <h2 className="mx-auto mt-3 max-w-[559px] text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Let&apos;s Check Our Latest{" "}
              <span className="text-[var(--primary-color)]">Portfolio</span>
            </h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-[3px] w-14 rounded-full bg-[var(--primary-color)]" />
              <span className="h-[3px] w-2 rounded-full bg-[var(--primary-color)]/80" />
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-auto -mt-16 max-w-[1200px] px-4">
          <button
            type="button"
            aria-label="Previous portfolio item"
            onClick={goPrev}
            className="absolute left-1 top-1/2 z-30 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow md:inline-flex"
          >
            <i className="fa-solid fa-arrow-left text-xs" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${translateX}%)` }}
            >
              {loopedItems.map((item, index) => (
                <article
                  key={`${item.id}-${index}`}
                  className="px-2"
                  style={{ width: `${cardWidth}%`, minWidth: `${cardWidth}%` }}
                >
                  <div className="rounded-[22px] border-[6px] border-[#f2f2f2] bg-white shadow-sm">
                    <div className="relative h-[210px] overflow-hidden rounded-t-[16px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="rounded-b-[16px] bg-[var(--primary-color)] px-3 py-2 text-left text-white">
                      <p className="text-[10px] font-semibold tracking-[0.06em] text-white/90">
                        {item.category}
                      </p>
                      <div className="mt-1 flex items-center justify-between gap-2">
                        <h3 className="text-sm font-bold leading-tight">{item.title}</h3>
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[var(--primary-color)]">
                          <i className="fa-solid fa-arrow-right text-[10px]" />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Next portfolio item"
            onClick={goNext}
            className="absolute right-1 top-1/2 z-30 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow md:inline-flex"
          >
            <i className="fa-solid fa-arrow-right text-xs" />
          </button>

          <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
            <button
              type="button"
              aria-label="Previous portfolio item mobile"
              onClick={goPrev}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary-color)] text-white"
            >
              <i className="fa-solid fa-arrow-left text-xs" />
            </button>
            <button
              type="button"
              aria-label="Next portfolio item mobile"
              onClick={goNext}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary-color)] text-white"
            >
              <i className="fa-solid fa-arrow-right text-xs" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
