"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    id: "01",
    title: "Choose Service",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    iconClass: "fa-solid fa-clipboard-check",
  },
  {
    id: "02",
    title: "Free Consultant",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    iconClass: "fa-solid fa-users",
  },
  {
    id: "03",
    title: "Estimate Budget",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    iconClass: "fa-solid fa-sack-dollar",
  },
  {
    id: "04",
    title: "Project Production",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    iconClass: "fa-solid fa-building-shield",
  },
];

const skillBars = [
  { label: "Construction", value: 85 },
  { label: "Experience", value: 65 },
  { label: "Architecture", value: 75 },
];

export default function WorkingProcessSection() {
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const isSkillsInView = useInView(skillsRef, { once: true, amount: 0.35 });
  const [animatedValues, setAnimatedValues] = useState(
    skillBars.map(() => 0),
  );

  useEffect(() => {
    if (!isSkillsInView) return;

    const durationMs = 900;
    const tickMs = 18;
    const totalSteps = Math.ceil(durationMs / tickMs);
    let currentStep = 0;

    const timer = window.setInterval(() => {
      currentStep += 1;
      const progress = Math.min(currentStep / totalSteps, 1);

      setAnimatedValues(
        skillBars.map((skill) => Math.round(skill.value * progress)),
      );

      if (progress >= 1) {
        window.clearInterval(timer);
      }
    }, tickMs);

    return () => window.clearInterval(timer);
  }, [isSkillsInView]);

  return (
    <section className="bg-[var(--section-bg)] py-10">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-center">
          <span className="inline-flex h-9 items-center gap-2 rounded-full bg-[var(--primary-color)] px-4 text-sm font-semibold text-white">
            <i className="fa-regular fa-building" />
            Working Process
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[var(--secondary-color)] md:text-4xl">
            Easy Steps For <span className="text-[var(--primary-color)]">dmconstruction</span>
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[var(--primary-color)]" />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.id}
              className="card-hover-icon-3d rounded-2xl bg-[#efefef] px-4 py-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-4xl font-extrabold leading-none tracking-wide text-white [text-shadow:-1px_0_#8d99ab,0_1px_#8d99ab,1px_0_#8d99ab,0_-1px_#8d99ab]">
                  {step.id}
                </p>
                <span className="card-hover-icon-3d__icon flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary-color)] text-[22px] text-white">
                  <i className={step.iconClass} aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-3 text-3xl font-extrabold text-[var(--secondary-color)] md:text-[31px]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-8 text-[#4f5d78]">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-[34px]">
            <Image
              src="/images/working_img.webp"
              alt="Construction engineers reviewing plans"
              width={800}
              height={650}
              className="h-[360px] w-full object-cover md:h-[520px]"
            />
            <span className="absolute bottom-0 right-0 h-24 w-24 bg-[var(--primary-color)] [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
          </div>

          <div>
            <span className="inline-flex h-9 items-center gap-2 rounded-full bg-[var(--primary-color)] px-4 text-sm font-semibold text-white">
              <i className="fa-regular fa-building" />
              Our Skills
            </span>
            <h3 className="mt-4 max-w-[560px] text-3xl font-extrabold leading-tight text-[var(--secondary-color)] md:text-4xl">
              We Offers You Best
              <span className="text-[var(--primary-color)]"> Construction </span>
              Services
            </h3>
            <p className="mt-4 max-w-[620px] text-sm leading-8 text-[#4f5d78] md:text-base">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable.
            </p>

            <div ref={skillsRef} className="mt-6 space-y-5">
              {skillBars.map((skill, index) => (
                <div key={skill.label}>
                  <div className="mb-2 flex items-center justify-between text-sm font-semibold text-[var(--secondary-color)]">
                    <span>{skill.label}</span>
                    <span>{animatedValues[index]}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#dfdfdf]">
                    <div
                      className="h-1.5 rounded-full bg-[var(--primary-color)] transition-[width] duration-200 ease-out"
                      style={{ width: `${animatedValues[index]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
