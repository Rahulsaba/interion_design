"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    id: 1,
    image: "/sliders_image/main_bg_2.webp",
    eyebrow: "DM CONSTRUCTION",
    title: "Smart Construction for Modern Spaces",
    description:
      "DM Construction creates modern interior spaces and delivers complete construction solutions with quality materials, skilled execution, and on-time delivery.",
  },
  {
    id: 2,
    image: "/sliders_image/main_bg_1.webp",
    eyebrow: "DM CONSTRUCTION",
    title: " Luxury Interior Design by DM Construction",
    description:
      "From planning and design to final finishing, DM Construction transforms homes and commercial spaces into functional, elegant, and durable environments.",
  },
  {
    id: 3,
    image: "/sliders_image/main_bg_3.webp",
    eyebrow: "DM CONSTRUCTION",
    title: "Pre Engineered Steel Building Solutions ",
    description:
      "Choose DM Construction for custom pre-engineered steel buildings, fabrication, and installation services tailored to your needs, budget, and project requirements.",
  },
];

const HERO_IMAGE_VERSION = "2026-04-19-2";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative !py-0 min-h-[calc(100dvh-88px)] w-full max-w-full overflow-x-hidden overflow-y-hidden lg:min-h-[calc(100dvh-136px)]">
      <AnimatePresence mode="sync">
        <motion.div
          key={slides[currentSlide].id}
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0.3, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.2, scale: 1.01 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={`${slides[currentSlide].image}?v=${HERO_IMAGE_VERSION}`}
            alt="Construction workers at a site"
            fill
            priority
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(43,43,43,0.88)_0%,rgba(43,43,43,0.7)_35%,rgba(43,43,43,0.2)_70%,rgba(43,43,43,0.1)_100%)]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-88px)] w-full max-w-[1200px] items-center px-4 lg:min-h-[calc(100dvh-136px)]">
        <motion.div
          key={`content-${slides[currentSlide].id}`}
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-[620px]"
        >
          <p className="text-xs font-semibold tracking-[0.24em] text-white/90 md:text-sm">
            {slides[currentSlide].eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white md:text-4xl">
            {slides[currentSlide].title.split("Construction")[0]}
            <span className="text-[var(--primary-color)]">Construction</span>
            {slides[currentSlide].title.split("Construction")[1]}
          </h1>
          <p className="mt-4 max-w-[560px] text-sm leading-7 text-white/90 md:text-base">
            {slides[currentSlide].description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/about"
              className="inline-flex h-10 items-center rounded-md bg-[var(--primary-color)] px-4 text-sm font-semibold text-white transition hover:brightness-95"
            >
              About More
              <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-[11px]" />
            </Link>
            <Link
              href="/service"
              className="inline-flex h-10 items-center rounded-md bg-[var(--secondary-color)] px-4 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Learn More
              <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-[11px]" />
            </Link>
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={goToPrev}
        className="absolute left-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[var(--primary-color)] shadow-md transition hover:bg-white md:left-6"
      >
        <i className="fa-solid fa-arrow-left text-sm" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={goToNext}
        className="absolute right-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[var(--primary-color)] shadow-md transition hover:bg-white md:right-6"
      >
        <i className="fa-solid fa-arrow-right text-sm" />
      </button>
    </section>
  );
}
