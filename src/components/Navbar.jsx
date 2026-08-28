import { useEffect, useState } from "react";
import { Send, Menu, X } from "lucide-react";
import { TELEGRAM_GENERAL_URL } from "../siteConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Rooms", href: "#rooms" },
    { label: "About", href: "#about" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#footer" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#211a16]/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(172,138,78,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <a href="#top" className="flex flex-col leading-none group">
          <span className="font-display text-2xl tracking-wide text-[#f7f2ea]">
            Navom
          </span>
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#ac8a4e] mt-1">
            Guest House
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm tracking-wide text-[#f7f2ea]/85 hover:text-[#ac8a4e] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={TELEGRAM_GENERAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#6b1f2a] hover:bg-[#7c2632] text-[#f7f2ea] text-sm px-5 py-2.5 transition-colors"
          >
            <Send size={15} strokeWidth={2} aria-hidden="true" />
            Book on Telegram
          </a>
        </nav>

        <button
          className="md:hidden text-[#f7f2ea]"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="md:hidden bg-[#211a16]/95 backdrop-blur-md px-5 pb-6 pt-2 flex flex-col gap-4"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#f7f2ea]/90 text-base py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href={TELEGRAM_GENERAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6b1f2a] text-[#f7f2ea] text-sm px-5 py-3 mt-2"
          >
            <Send size={15} aria-hidden="true" />
            Book on Telegram
          </a>
        </div>
      )}
    </header>
  );
}
