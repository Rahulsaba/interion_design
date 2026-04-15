"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    id: 1,
    image: "/sliders_image/slider_1.webp",
    eyebrow: "BUILD YOUR DREAM",
    title: "We Are The Leader In Construction Company",
    description:
      "There are many variations of passages available but the majority have suffered alteration in some form by injected humour.",
  },
  {
    id: 2,
    image: "/sliders_image/slider_1.webp",
    eyebrow: "BUILD YOUR DREAM",
    title: "We Are The Leader In Construction Company",
    description:
      "There are many variations of passages available but the majority have suffered alteration in some form by injected humour.",
  },
  {
    id: 3,
    image: "/sliders_image/slider_1.webp",
    eyebrow: "BUILD YOUR DREAM",
    title: "We Are The Leader In Construction Company",
    description:
      "There are many variations of passages available but the majority have suffered alteration in some form by injected humour.",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative min-h-[430px] overflow-hidden md:min-h-[520px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          className="absolute inset-0"
          initial={{ opacity: 0.3, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.2, scale: 1.01 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={slides[currentSlide].image}
            alt="Construction workers at a site"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,46,105,0.88)_0%,rgba(17,46,105,0.7)_35%,rgba(17,46,105,0.2)_70%,rgba(17,46,105,0.1)_100%)]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex min-h-[430px] w-full max-w-[1200px] items-center px-4 md:min-h-[520px]">
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
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            {slides[currentSlide].title.split("Construction")[0]}
            <span className="text-[var(--primary-color)]">Construction</span>
            {slides[currentSlide].title.split("Construction")[1]}
          </h1>
          <p className="mt-4 max-w-[560px] text-sm leading-7 text-white/90 md:text-base">
            {slides[currentSlide].description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center rounded-md bg-[var(--primary-color)] px-4 text-sm font-semibold text-white transition hover:brightness-95"
            >
              About More
              <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-[11px]" />
            </Link>
            <Link
              href="/contact"
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
