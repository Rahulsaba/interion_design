const contactCards = [
  {
    title: "Office Address",
    detail: "25/B Milford, New York, USA",
    iconClass: "fa-regular fa-map",
  },
  {
    title: "Call Us",
    detail: "+2 123 4565 789",
    iconClass: "fa-solid fa-phone-volume",
  },
  {
    title: "Email Us",
    detail: "info@example.com",
    iconClass: "fa-regular fa-envelope",
  },
  {
    title: "Open Time",
    detail: "Mon - Sat (10.00AM - 05.30PM)",
    iconClass: "fa-regular fa-clock",
  },
];

export default function ContactInfoCards() {
  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[24px] bg-[#ead9cf] px-6 py-8 text-center shadow-sm"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f7901d] text-2xl text-white">
                <i className={card.iconClass} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold leading-tight text-[var(--secondary-color)] md:text-2xl">
                {card.title}
              </h3>
              <p className="mt-3 text-sm font-medium text-[var(--secondary-color)] md:text-base">
                {card.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
