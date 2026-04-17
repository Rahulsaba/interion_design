"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How Long Does A Service Take ?",
    answer:
      "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire unto odio dignissim quam vitae pulvinar turpis.",
  },
  {
    id: 2,
    question: "How Can I Become A Member ?",
    answer:
      "Becoming a member is simple. Reach out through our contact form and our team will guide you through onboarding, requirements, and the right service package.",
  },
  {
    id: 3,
    question: "What Payment Gateway You Support ?",
    answer:
      "We support secure online payments through major cards and trusted payment providers, along with bank transfer options for business requests.",
  },
  {
    id: 4,
    question: "How Can I Cancel My Request ?",
    answer:
      "You can cancel your request by contacting support before execution starts. Our team will help you with cancellation terms and confirmation quickly.",
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
            General
            <span className="text-[var(--primary-color)]"> Frequently </span>
            Asked Questions
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#4f5d78] md:text-base">
            There are many variations of passages of Lorem Ipsum available, but
            one majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#4f5d78] md:text-base">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>

          <button
            type="button"
            className="mt-5 inline-flex h-10 items-center rounded-md bg-[var(--primary-color)] px-4 text-sm font-semibold text-white transition hover:brightness-95"
          >
            Have Any Question ?
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
