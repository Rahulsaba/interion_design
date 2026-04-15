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
  return (
    <section
      className="relative overflow-hidden !py-7 md:!py-8"
      style={{ backgroundColor: "#0A8182" }}
    >
      <div className="relative mx-auto grid max-w-[1200px] gap-3 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <article
            key={item.label}
            className="relative z-[1] flex items-center gap-3 rounded-[100px] px-[15px] py-5 pl-5 shadow-[0_0_40px_5px_rgb(0_0_0_/_5%)]"
            style={{ border: "2px solid rgba(255,255,255,0.2)" }}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[18px] text-[#FC8C03]">
              <i className={item.iconClass} aria-hidden="true" />
            </span>
            <div className="text-white">
              <p className="font-heading text-[48px] leading-[0.9] font-bold tracking-tight text-white">
                {item.value}
                <span className="ml-1 align-top text-[20px] text-[#FC8C03]">
                  {item.suffix}
                </span>
              </p>
              <p className="mt-0.5 text-[15px] font-semibold leading-none text-white/95">
                {item.label}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
