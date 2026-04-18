"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: "150",
    suffix: "k",
    label: "Projects Done",
    iconClass: "fa-regular fa-building",
  },
  {
    value: "25",
    suffix: "K",
    label: "Happy Clients",
    iconClass: "fa-solid fa-people-group",
  },
  {
    value: "120",
    suffix: "+",
    label: "Experts Staff",
    iconClass: "fa-solid fa-people-group",
  },
  {
    value: "50",
    suffix: "+",
    label: "Win Awards",
    iconClass: "fa-solid fa-award",
  },
];

export default function AboutStatsStripSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [animatedValues, setAnimatedValues] = useState(() => stats.map(() => 0));

  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(currentSection);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const targetValues = stats.map((item) => Number(item.value));
    const durationMs = 900;
    const tickMs = 18;
    const totalSteps = Math.ceil(durationMs / tickMs);
    let currentStep = 0;

    const timer = window.setInterval(() => {
      currentStep += 1;
      const progress = Math.min(currentStep / totalSteps, 1);

      setAnimatedValues(
        targetValues.map((target) => Math.round((Number.isNaN(target) ? 0 : target) * progress)),
      );

      if (progress >= 1) {
        window.clearInterval(timer);
      }
    }, tickMs);

    return () => window.clearInterval(timer);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-10"
      style={{ backgroundColor: "var(--secondary-color)" }}
    >
      <div className="relative mx-auto grid max-w-[1200px] gap-3 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <article
            key={item.label}
            className="relative z-[1] mx-auto flex w-full max-w-[320px] flex-col items-center justify-center gap-3 rounded-[100px] px-4 py-5 text-center shadow-[0_0_40px_5px_rgb(0_0_0_/_5%)] sm:max-w-none"
          
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[18px] text-[#FC8C03]">
              <i className={item.iconClass} aria-hidden="true" />
            </span>
            <div className="text-center text-white">
              <p className="font-heading text-4xl leading-[0.9] font-bold tracking-tight text-white">
                {animatedValues[index]}
                <span className="align-top text-xl text-[#FC8C03]">
                  {item.suffix}
                </span>
              </p>
              <p className="mt-0.5 text-sm font-semibold leading-none text-white/95">
                {item.label}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
