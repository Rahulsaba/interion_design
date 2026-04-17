"use client";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const companyLinks = [
  "About Us",
  "Update News",
  "Testimonials",
  "Contact Us",
  "Terms Of Service",
  "Privacy policy",
];

const contactItems = [
  {
    icon: "fa-solid fa-location-dot",
    title: "Our Address",
    value: "25/AB Milford Road, New York, USA",
  },
  {
    icon: "fa-solid fa-phone-volume",
    title: "Call Us",
    value: "+2 123 654 7898",
  },
  {
    icon: "fa-regular fa-envelope",
    title: "Mail Us",
    value: "info@example.com",
  },
];

const socialIcons = [
  "fa-facebook-f",
  "fa-x-twitter",
  "fa-linkedin-in",
  "fa-youtube",
];

type NewsletterFormValues = {
  email: string;
};

export default function SiteFooter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormValues>({
    defaultValues: {
      email: "",
    },
  });

  const handleSubscribe = () => {
    reset();
  };

  return (
    <footer className="mt-auto bg-[var(--secondary-color)] text-white">
      <div className="mx-auto max-w-[1200px] px-4 pb-9 pt-14">
        <div className="grid items-start gap-y-10 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-x-16">
          <div className="w-full">
            <h2 className="text-[36px] font-extrabold leading-none tracking-tight">
              <span className="text-[var(--primary-color)]">dm</span>construction
            </h2>
            <p className="mt-5 text-[17px] leading-8 text-white/90">
              We are many variations of passages available but the majority have
              suffered alteration some form by injected humour looking layout
              words believable.
            </p>

            <h3 className="mt-8 text-[16px] font-bold">Subscribe Our Newsletter</h3>
            <form
              className="mt-4 w-full"
              onSubmit={handleSubmit(handleSubscribe)}
              noValidate
            >
              <div className="flex items-center rounded-full border border-white/20 p-1">
                <div className="flex flex-1 items-center gap-2 pl-4">
                  <i className="fa-regular fa-envelope text-[var(--primary-color)]" />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    aria-invalid={errors.email ? "true" : "false"}
                    className="h-10 border-0 bg-transparent p-0 text-[15px] text-white placeholder:text-white/70 focus-visible:ring-0 aria-invalid:border-0 aria-invalid:ring-0 dark:aria-invalid:border-0 dark:aria-invalid:ring-0"
                    {...register("email", {
                      setValueAs: (value: string) => value.trim(),
                      required: "Email is required.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address.",
                      },
                    })}
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-[var(--primary-color)] px-5 py-2 text-[14px] font-bold text-white transition hover:bg-[#e18817]"
                >
                  Subscribe
                  <i className="fa-solid fa-paper-plane ml-1 text-[12px]" />
                </button>
              </div>
              {errors.email ? (
                <p className="mt-2 pl-4 text-sm text-red-300">{errors.email.message}</p>
              ) : null}
            </form>
          </div>

          <div className="w-full">
            <h3 className="text-[28px] font-extrabold">Company</h3>
            <div className="mb-5 mt-2 h-[3px] w-7 bg-[var(--primary-color)]" />
            <ul className="space-y-3 text-[18px]">
              {companyLinks.map((item) => (
                <li key={item} className="text-white/95">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <h3 className="text-[28px] font-extrabold">Get In Touch</h3>
            <div className="mb-5 mt-2 h-[3px] w-7 bg-[var(--primary-color)]" />
            <ul className="space-y-5">
              {contactItems.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary-color)] text-white">
                    <i className={item.icon} />
                  </span>
                  <div>
                    <p className="text-[20px] font-bold leading-tight">{item.title}</p>
                    <p className="mt-1 text-[18px] text-white/90">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/20 pt-6 md:flex-row">
          <p className="text-[17px] text-white/90">
            &copy; Copyright 2026{" "}
            <span className="text-[var(--primary-color)]">dmconstruction</span>{" "}
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
            {socialIcons.map((icon) => (
              <button
                key={icon}
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--secondary-color)] transition hover:bg-[var(--primary-color)] hover:text-white"
              >
                <i className={`fa-brands ${icon}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
