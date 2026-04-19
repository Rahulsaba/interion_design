"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactFormSection() {
  const contactImageSrc = "/images/main_contact.webp?v=2026-04-19";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Contact form submitted:", data);
    reset();
  };

  return (
    <section className="bg-[var(--section-bg)] py-10">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden rounded-[28px]">
            <Image
              src={contactImageSrc}
              alt="Customer support representative smiling"
              fill
              className="object-cover"
            />
          </div>

          <div className="rounded-[28px] bg-[var(--secondary-color)] p-5 sm:p-7 md:p-8">
            <h2 className="text-2xl font-extrabold text-[var(--primary-color)] md:text-3xl">
              Get In Touch
            </h2>
            <p className="mt-3 max-w-[620px] text-sm leading-7 text-white md:text-base">
              It is a long established fact that a reader will be distracted by
              the readable content of a page randomised words which do not look
              even slightly when looking at its layout.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="relative">
                    <i
                      className="fa-regular fa-user absolute left-4 top-1/2 -translate-y-1/2 text-[var(--primary-color)]"
                      aria-hidden="true"
                    />
                    <label htmlFor="contact-name" className="sr-only">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your Name"
                      aria-invalid={errors.name ? "true" : "false"}
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                      className="h-12 w-full rounded-xl border border-transparent bg-white pl-11 pr-4 text-sm text-[var(--secondary-color)] outline-none transition focus:border-[var(--primary-color)]"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-xs font-medium text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <i
                      className="fa-regular fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-[var(--primary-color)]"
                      aria-hidden="true"
                    />
                    <label htmlFor="contact-email" className="sr-only">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="Your Email"
                      aria-invalid={errors.email ? "true" : "false"}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email",
                        },
                      })}
                      className="h-12 w-full rounded-xl border border-transparent bg-white pl-11 pr-4 text-sm text-[var(--secondary-color)] outline-none transition focus:border-[var(--primary-color)]"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs font-medium text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <div className="relative">
                  <i
                    className="fa-solid fa-pencil absolute left-4 top-1/2 -translate-y-1/2 text-[var(--primary-color)]"
                    aria-hidden="true"
                  />
                  <label htmlFor="contact-subject" className="sr-only">
                    Your Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Your Subject"
                    aria-invalid={errors.subject ? "true" : "false"}
                    {...register("subject", {
                      required: "Subject is required",
                      minLength: {
                        value: 3,
                        message: "Subject must be at least 3 characters",
                      },
                    })}
                    className="h-12 w-full rounded-xl border border-transparent bg-white pl-11 pr-4 text-sm text-[var(--secondary-color)] outline-none transition focus:border-[var(--primary-color)]"
                  />
                </div>
                {errors.subject && (
                  <p className="mt-1 text-xs font-medium text-red-600">{errors.subject.message}</p>
                )}
              </div>

              <div className="relative">
                <i
                  className="fa-regular fa-message absolute left-4 top-5 text-[var(--primary-color)]"
                  aria-hidden="true"
                />
                <label htmlFor="contact-message" className="sr-only">
                  Write Your Message
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Write Your Message"
                  aria-invalid={errors.message ? "true" : "false"}
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  className="min-h-[140px] w-full resize-y rounded-xl border border-transparent bg-white pl-11 pr-4 pt-4 text-sm text-[var(--secondary-color)] outline-none transition focus:border-[var(--primary-color)]"
                />
                {errors.message && (
                  <p className="mt-1 text-xs font-medium text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-[var(--primary-color)] px-5 text-sm font-semibold text-white transition hover:brightness-95"
              >
                Send Message
                <i className="fa-regular fa-paper-plane" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
