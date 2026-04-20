const contactCards = [
  {
    title: "Office Address",
    detail: "147F, Mill Road, Nazareth,Tuticorin - 628 617. ",
    iconClass: "fa-regular fa-map",
  },
  {
    title: "Call Us",
    detail: "+91 6383154985",
    href: "tel:+916383154985",
    iconClass: "fa-solid fa-phone-volume",
  },
  {
    title: "Email Us",
    detail: "dm.propertiees@gmail.com",
    href: "mailto:dm.propertiees@gmail.com",
    iconClass: "fa-regular fa-envelope",
  },
  {
    title: "Open Time",
    detail: "Mon - Sat\n(10.00AM - 05.30PM)",
    iconClass: "fa-regular fa-clock",
  },
];

export default function ContactInfoCards() {
  return (
    <section className="bg-[var(--section-bg)] py-10">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[24px] bg-[var(--secondary-color)] px-6 py-8 text-center shadow-sm"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary-color)] text-2xl text-white">
                <i className={card.iconClass} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold leading-tight text-white md:text-2xl">
                {card.title}
              </h3>
              <p className="mt-3 whitespace-pre-line text-sm font-medium text-white md:text-base">
                {card.href ? (
                  <a href={card.href} className="transition hover:text-[var(--primary-color)]">
                    {card.detail}
                  </a>
                ) : (
                  card.detail
                )}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
