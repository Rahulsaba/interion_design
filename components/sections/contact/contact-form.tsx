import Image from "next/image";

export default function ContactFormSection() {
  return (
    <section className="bg-[#f5f5f5] py-10">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden rounded-[28px]">
            <Image
              src="/images/main_contact.webp"
              alt="Customer support representative smiling"
              fill
              className="object-cover"
            />
          </div>

          <div className="rounded-[28px] bg-[#ead9cf] p-5 sm:p-7 md:p-8">
            <h2 className="text-2xl font-extrabold text-[#102c63] md:text-3xl">
              Get In Touch
            </h2>
            <p className="mt-3 max-w-[620px] text-sm leading-7 text-[#4f5d78] md:text-base">
              It is a long established fact that a reader will be distracted by
              the readable content of a page randomised words which do not look
              even slightly when looking at its layout.
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative">
                  <i
                    className="fa-regular fa-user absolute left-4 top-1/2 -translate-y-1/2 text-[#f7901d]"
                    aria-hidden="true"
                  />
                  <label htmlFor="contact-name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your Name"
                    className="h-12 w-full rounded-xl border border-transparent bg-white pl-11 pr-4 text-sm text-[#102c63] outline-none transition focus:border-[#f7901d]"
                  />
                </div>

                <div className="relative">
                  <i
                    className="fa-regular fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-[#f7901d]"
                    aria-hidden="true"
                  />
                  <label htmlFor="contact-email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Your Email"
                    className="h-12 w-full rounded-xl border border-transparent bg-white pl-11 pr-4 text-sm text-[#102c63] outline-none transition focus:border-[#f7901d]"
                  />
                </div>
              </div>

              <div className="relative">
                <i
                  className="fa-solid fa-pencil absolute left-4 top-1/2 -translate-y-1/2 text-[#f7901d]"
                  aria-hidden="true"
                />
                <label htmlFor="contact-subject" className="sr-only">
                  Your Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Your Subject"
                  className="h-12 w-full rounded-xl border border-transparent bg-white pl-11 pr-4 text-sm text-[#102c63] outline-none transition focus:border-[#f7901d]"
                />
              </div>

              <div className="relative">
                <i
                  className="fa-regular fa-message absolute left-4 top-5 text-[#f7901d]"
                  aria-hidden="true"
                />
                <label htmlFor="contact-message" className="sr-only">
                  Write Your Message
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Write Your Message"
                  className="min-h-[140px] w-full resize-y rounded-xl border border-transparent bg-white pl-11 pr-4 pt-4 text-sm text-[#102c63] outline-none transition focus:border-[#f7901d]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#f7901d] px-5 text-sm font-semibold text-white transition hover:brightness-95"
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
