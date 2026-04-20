"use client";

import { useEffect, useState } from "react";

const SHOW_AFTER_SCROLL_Y = 300;

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_SCROLL_Y);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleMobileMenuStateChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ isOpen?: boolean }>;
      setIsMobileMenuOpen(Boolean(customEvent.detail?.isOpen));
    };

    window.addEventListener("mobile-menu-state-change", handleMobileMenuStateChange);

    return () => {
      window.removeEventListener("mobile-menu-state-change", handleMobileMenuStateChange);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed bottom-[80px] right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow-lg transition-all duration-300 hover:bg-[#e18817] ${
        isVisible && !isMobileMenuOpen
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <i className="fa-solid fa-arrow-up" />
    </button>
  );
}
