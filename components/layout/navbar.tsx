 "use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const whatsappLink =
  "https://wa.me/919677559741?text=Hi%20I%20am%20interested%20in%20your%20services";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="border-b border-[#e9e9e9] bg-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <span className="text-[26px] font-extrabold tracking-tight text-[#1f2d3d]">
            <span className="text-[var(--primary-color)]">dm</span>construction
          </span>
        </div>

        <div className="flex items-center gap-5 lg:gap-6">
          <nav className="hidden items-center gap-6 lg:flex">
            {menuItems.map((item) =>
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[15px] font-semibold transition hover:text-[var(--primary-color)] ${
                    isActiveLink(item.href)
                      ? "text-[var(--primary-color)]"
                      : "text-[#1b2735]"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  key={item.label}
                  className="cursor-default text-[15px] font-semibold text-[#1b2735] transition hover:text-[var(--primary-color)]"
                >
                  {item.label}
                </span>
              ),
            )}
          </nav>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-[var(--primary-color)] px-5 py-2 text-[15px] font-bold text-white transition hover:bg-[#e48518] sm:inline-flex sm:items-center"
          >
            Let&apos;s Talk
            <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-[13px]" />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#d9d9d9] text-[18px] text-[#1d2a3a] transition hover:bg-[var(--section-bg)] lg:hidden"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <i className={isMobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-40 bg-black/35 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.nav
              className="fixed right-0 top-0 z-50 h-full w-[280px] border-l border-[#ececec] bg-white px-4 py-6 shadow-xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-base font-bold text-[#1f2d3d]">Menu</span>
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#d9d9d9] text-[16px] text-[#1d2a3a]"
                  aria-label="Close menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>

              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={`block rounded-md px-3 py-2 text-sm font-semibold transition hover:bg-[#f8f8f8] hover:text-[var(--primary-color)] ${
                          isActiveLink(item.href)
                            ? "bg-[var(--primary-color)]/10 text-[var(--primary-color)]"
                            : "text-[#1b2735]"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="block rounded-md px-3 py-2 text-sm font-semibold text-[#1b2735]">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-10 items-center rounded-md bg-[var(--primary-color)] px-4 text-sm font-bold text-white transition hover:bg-[#e48518]"
              >
                Let&apos;s Talk
                <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-[12px]" />
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
