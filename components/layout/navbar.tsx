import Link from "next/link";

const menuItems = [
  { label: "Home" },
  { label: "About" },
  { label: "Services" },
  { label: "Pages" },
  { label: "Portfolio" },
  { label: "Blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <div className="border-b border-[#e9e9e9] bg-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <span className="text-[26px] font-extrabold tracking-tight text-[#1f2d3d]">
            <span className="text-[#f7901d]">cons</span>tux
          </span>
        </div>

        <nav className="hidden items-center gap-7 lg:flex">
          {menuItems.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className="text-[15px] font-semibold text-[#1b2735] transition hover:text-[#f7901d]"
              >
                {item.label}
              </Link>
            ) : (
              <span
                key={item.label}
                className="cursor-default text-[15px] font-semibold text-[#1b2735] transition hover:text-[#f7901d]"
              >
                {item.label}
              </span>
            ),
          )}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="hidden text-[20px] text-[#1d2a3a] md:block"
            aria-label="Search"
          >
            <i className="fa-solid fa-magnifying-glass" />
          </button>
          <button
            type="button"
            className="rounded-md bg-[#f7901d] px-5 py-2 text-[15px] font-bold text-white transition hover:bg-[#e48518]"
          >
            Let&apos;s Talk
            <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-[13px]" />
          </button>
          <button
            type="button"
            className="text-[20px] text-[#1d2a3a]"
            aria-label="Open menu"
          >
            <i className="fa-solid fa-sliders" />
          </button>
        </div>
      </div>
    </div>
  );
}
