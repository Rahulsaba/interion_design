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
    <section className="relative overflow-hidden py-10">
      <Image
        src="/images/bg/testmonial_bg.png"
        alt="Testimonial background texture"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[var(--secondary-color)]/65" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 text-center">
        <span className="inline-flex h-8 items-center gap-2 rounded-full bg-[var(--primary-color)] px-3 text-xs font-semibold text-white">
          <i className="fa-regular fa-comments" />
          Testimonials
        </span>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white md:text-4xl">
          What Our Client Say&apos;s
          <br />
          About Us
        </h2>
        <span className="mx-auto mt-3 block h-1 w-14 rounded-full bg-[var(--primary-color)]" />

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.id}>
              <div className="relative rounded-2xl bg-white px-4 py-6 text-left shadow-sm">
                <Image
                  src="/images/bg/quote.svg"
                  alt="Quote icon"
                  width={54}
                  height={54}
                  className="absolute left-3 top-2 opacity-20"
                />
                <span className="absolute right-0 top-0 rounded-bl-xl rounded-tr-2xl bg-[var(--primary-color)] px-2 py-1 text-sm font-bold text-white">
                  99
                </span>
                <p className="relative text-sm leading-7 text-[#4f5d78]">{item.text}</p>
              </div>

              <div className="mx-auto mt-4 flex max-w-[250px] items-center gap-3 text-left">
                <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-white/50">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">{item.name}</h3>
                  <p className="text-xs font-medium text-[var(--primary-color)]">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--primary-color)]" />
          <span className="h-1 w-5 rounded-full bg-[var(--primary-color)]/70" />
        </div>
      </div>
    </section>
  );
}
