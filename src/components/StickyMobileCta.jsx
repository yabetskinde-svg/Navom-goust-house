import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { TELEGRAM_GENERAL_URL } from "../siteConfig";

export default function StickyMobileCta() {
  const [pastHero, setPastHero] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !nearFooter;

  return (
    <div
      className={`sm:hidden fixed inset-x-0 bottom-0 z-40 px-4 pb-4 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href={TELEGRAM_GENERAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full rounded-full bg-[#6b1f2a] text-[#f7f2ea] text-sm font-medium py-3.5 shadow-[0_8px_24px_-6px_rgba(23,15,12,0.5)]"
      >
        <Send size={16} aria-hidden="true" />
        Check Availability →
      </a>
    </div>
  );
}
