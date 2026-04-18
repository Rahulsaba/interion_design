"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How long does an interior project take?",
    answer:
      "Project timelines depend on size and scope. Most interior projects are completed within a few weeks after design approval and material confirmation.",
  },
  {
    id: 2,
    question: "Do you provide free site consultation?",
    answer:
      "Yes, DM Construction offers a free initial consultation to understand your requirements, inspect the space, and suggest suitable design options.",
  },
  {
    id: 3,
    question: "How do you estimate project cost?",
    answer:
      "We prepare a transparent estimate based on layout, materials, finishes, and labor. You receive a clear cost breakdown before work begins.",
  },
  {
    id: 4,
    question: "Can I customize design and materials?",
    answer:
      "Absolutely. You can choose colors, finishes, materials, and style preferences. Our team will tailor the design to your budget and vision.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="bg-[var(--section-bg)] py-10">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 lg:grid-cols-2 lg:items-start">
        <div>
          <span className="inline-flex h-8 items-center gap-2 rounded-full bg-[var(--primary-color)] px-3 text-xs font-semibold text-white">
            <i className="fa-regular fa-circle-question" />
            Faq&apos;s
          </span>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[var(--secondary-color)] md:text-4xl">
            Frequently Asked
            <span className="text-[var(--primary-color)]"> Questions</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#4f5d78] md:text-base">
            Find quick answers about our interior design and construction
            services, including timelines, pricing, and customization options.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#4f5d78] md:text-base">
            DM Construction is committed to clear communication at every stage,
            so you always know what to expect from consultation to completion.
          </p>

          <button
            type="button"
            className="mt-5 inline-flex h-10 items-center rounded-md bg-[var(--primary-color)] px-4 text-sm font-semibold text-white transition hover:brightness-95"
          >
            Have Any Questions?
          </button>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => {
            const isOpen = openId === item.id;

            return (
              <article
                key={item.id}
                className="overflow-hidden rounded-xl border border-[#ebebeb] bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? 0 : item.id)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary-color)] text-[11px] text-white">
                      ?
                    </span>
                    <span className="text-base font-bold text-[var(--secondary-color)]">
                      {item.question}
                    </span>
                  </span>
                  <i
                    className={`fa-solid ${isOpen ? "fa-angle-up" : "fa-angle-down"} text-xs text-[#8c97ad]`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-[#f0f0f0] px-4 pb-4 pt-3">
                    <p className="text-sm leading-7 text-[#4f5d78]">{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
