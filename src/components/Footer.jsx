import { Send, Phone, MapPin } from "lucide-react";
import {
  TELEGRAM_GENERAL_URL,
  PHONE_NUMBERS,
  LOCATION_FULL,
  ROOM_COUNT,
} from "../siteConfig";
import Reveal from "./Reveal";

const NAV_LINKS = [
  { label: "Rooms", href: "#rooms" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#footer" },
];

export default function Footer() {
  return (
    <footer id="footer" aria-labelledby="footer-heading" className="relative bg-[#170f0c] pt-24 pb-10">
      <h2 id="footer-heading" className="sr-only">
        Contact Navom Guest House
      </h2>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="rounded-3xl bg-[#f7f2ea]/5 border border-[#f7f2ea]/10 px-8 py-14 sm:px-16 sm:py-16 text-center">
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-[#ac8a4e] justify-center">
              <span className="h-px w-8 plate-rule" />
              Ready when you are
            </span>
            <p className="font-display text-3xl sm:text-4xl text-[#f7f2ea] mt-5 max-w-lg mx-auto leading-tight">
              {ROOM_COUNT} rooms are waiting.
              <br />
              Reach out to check what's available.
            </p>
            <a
              href={TELEGRAM_GENERAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#6b1f2a] hover:bg-[#7c2632] text-[#f7f2ea] px-8 py-3.5 text-sm tracking-wide mt-8 transition-colors"
            >
              <Send size={16} aria-hidden="true" />
              Message Navom on Telegram
            </a>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-4 gap-10 mt-16">
          <div className="sm:col-span-1">
            <span className="font-display text-2xl text-[#f7f2ea]">Navom</span>
            <span className="block text-[10px] tracking-[0.35em] uppercase text-[#ac8a4e] mt-1">
              Guest House
            </span>
            <p className="text-[#f7f2ea]/50 text-sm mt-4 leading-relaxed max-w-xs">
              Modern, comfortable rooms in a well-kept building — booked
              simply, over Telegram.
            </p>
          </div>

          <div>
            <h4 className="text-[#f7f2ea]/90 text-sm tracking-wide mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[#f7f2ea]/60 hover:text-[#ac8a4e] text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#f7f2ea]/90 text-sm tracking-wide mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              {PHONE_NUMBERS.map((num) => (
                <li key={num}>
                  <a
                    href={`tel:${num}`}
                    className="flex items-center gap-2 text-[#f7f2ea]/60 hover:text-[#ac8a4e] text-sm transition-colors"
                  >
                    <Phone size={14} aria-hidden="true" />
                    {num}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={TELEGRAM_GENERAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#f7f2ea]/60 hover:text-[#ac8a4e] text-sm transition-colors"
                >
                  <Send size={14} aria-hidden="true" />
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#f7f2ea]/90 text-sm tracking-wide mb-4">
              Location
            </h4>
            <p className="flex items-start gap-2 text-[#f7f2ea]/60 text-sm leading-relaxed max-w-xs">
              <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
              {LOCATION_FULL}
            </p>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[#f7f2ea]/10 text-center text-[#f7f2ea]/35 text-xs">
          © {new Date().getFullYear()} Navom Guest House. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
