import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Daniel Porter",
    role: "Customer",
    image: "/images/testmonial/testmonial_1.webp",
    text: "There are many variations passage available the majority have suffered of alteration in some form by the injected humour or randomised words which look even slightly believable.",
  },
  {
    id: 2,
    name: "Ebony Swihart",
    role: "Customer",
    image: "/images/testmonial/testmonial_2.webp",
    text: "There are many variations passage available the majority have suffered of alteration in some form by the injected humour or randomised words which look even slightly believable.",
  },
  {
    id: 3,
    name: "Loreta Jones",
    role: "Customer",
    image: "/images/testmonial/testmonial_1.webp",
    text: "There are many variations passage available the majority have suffered of alteration in some form by the injected humour or randomised words which look even slightly believable.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <Image
        src="/images/bg/testmonial_bg.png"
        alt="Testimonial background texture"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[var(--secondary-color)]/82" />

      <div className="relative z-10 mx-auto max-w-[1220px] px-4 text-center">
        <span className="inline-flex h-8 items-center gap-2 rounded-full bg-[var(--primary-color)] px-4 text-xs font-semibold text-white">
          <i className="fa-regular fa-message text-[11px]" />
          Testimonials
        </span>
        <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl">
          What Our Client <span className="text-[var(--primary-color)]">Say&apos;s</span> About Us
        </h2>
        <div className="mx-auto mt-4 flex items-center justify-center gap-2">
          <span className="h-[3px] w-14 rounded-full bg-[var(--primary-color)]" />
          <span className="h-[3px] w-2 rounded-full bg-[var(--primary-color)]/80" />
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.id} className="text-left">
              <div className="relative rounded-3xl bg-white px-6 pb-7 pt-6 shadow-[0_10px_25px_rgba(0,0,0,0.12)]">
                <div className="mb-4 flex items-center gap-1 text-[13px] text-[var(--primary-color)]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <i key={idx} className="fa-solid fa-star" />
                  ))}
                </div>
                <Image
                  src="/images/bg/quote.svg"
                  alt="Quote icon"
                  width={90}
                  height={90}
                  className="pointer-events-none absolute right-8 top-5 opacity-10"
                />
                <span className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-3xl bg-[var(--primary-color)] px-3 py-1.5 text-[34px] leading-none font-bold text-white">
                  99
                </span>
                <p className="relative mt-1 text-[17px] leading-[1.95] font-medium text-[#253b56] italic">
                  {item.text}
                </p>
                <span className="absolute -bottom-4 left-12 h-0 w-0 border-l-[14px] border-r-[14px] border-t-[16px] border-l-transparent border-r-transparent border-t-white" />
              </div>

              <div className="mt-7 flex items-center gap-3 pl-5">
                <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[#f6c06f] ring-2 ring-white/25">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </span>
                <div>
                  <h3 className="text-1xl leading-tight font-bold text-white md:text-2xl">
                    {item.name}
                  </h3>
                  <p className="text-base font-semibold text-[var(--primary-color)]">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-9 flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/80" />
          <span className="h-2 w-7 rounded-full bg-[var(--primary-color)]" />
        </div>
      </div>
    </section>
  );
}
