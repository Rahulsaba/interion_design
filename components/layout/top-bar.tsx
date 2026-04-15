const leftInfo = [
  {
    icon: "fa-regular fa-envelope",
    title: "Email",
    value: "info@example.com",
  },
  {
    icon: "fa-solid fa-phone-volume",
    title: "Phone",
    value: "+2 123 654 7898",
  },
  {
    icon: "fa-regular fa-clock",
    title: "Time",
    value: "Sun - Fri (08AM - 10PM)",
  },
];

const socialIcons = [
  "fa-brands fa-facebook-f",
  "fa-brands fa-x-twitter",
  "fa-brands fa-instagram",
  "fa-brands fa-linkedin-in",
];

export default function TopBar() {
  return (
    <div className="bg-[#0f8f96] text-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-2">
        <ul className="hidden items-center gap-8 lg:flex">
          {leftInfo.map((item) => (
            <li key={item.title} className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/45 text-[13px]">
                <i className={item.icon} />
              </span>
              <div className="leading-tight">
                <p className="text-[14px] font-semibold">{item.title}</p>
                <p className="text-[13px] text-white/85">{item.value}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="hidden h-12 items-center bg-[#f7901d] px-8 lg:flex [clip-path:polygon(6%_0,100%_0,94%_100%,0_100%)]">
          <div className="flex items-center gap-4 text-[14px]">
            <button type="button" className="font-medium hover:text-black/70">
              <i className="fa-solid fa-arrow-right-to-bracket mr-1" />
              Login
            </button>
            <button type="button" className="font-medium hover:text-black/70">
              <i className="fa-solid fa-globe mr-1" />
              Eng
            </button>
            <span className="font-medium">Follow Us:</span>
            <ul className="flex items-center gap-2">
              {socialIcons.map((icon) => (
                <li key={icon}>
                  <button
                    type="button"
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-white/55 text-[12px] transition hover:bg-white hover:text-[#f7901d]"
                  >
                    <i className={icon} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
