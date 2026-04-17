import Image from "next/image";

type PageHeroProps = {
  title: string;
  breadcrumbLabel: string;
};

export default function PageHero({ title, breadcrumbLabel }: PageHeroProps) {
  return (
    <section className="relative h-[260px] overflow-hidden md:h-[320px]">
      <Image
        src="/images/bg/inner_bg.webp"
        alt="Construction site background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[var(--secondary-color)] opacity-80" />

      <div className="relative mx-auto flex h-full max-w-[1200px] items-center justify-center px-4 text-center text-white">
        <div>
          <h1 className="text-4xl font-extrabold md:text-5xl">{title}</h1>
          <p className="mt-3 text-[17px] font-medium text-white/90">
            Home
            <i className="fa-solid fa-angles-right mx-2 text-[13px] text-[var(--primary-color)]" />
            <span className="text-[var(--primary-color)]">{breadcrumbLabel}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
