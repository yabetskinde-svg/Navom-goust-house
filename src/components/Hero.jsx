import { Send, BedDouble, MapPin, Sparkles } from "lucide-react";
import { TELEGRAM_GENERAL_URL, ROOM_COUNT, LOCATION_SHORT } from "../siteConfig";
import exterior from "../assets/exterior.jpg";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Welcome"
      className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden"
    >
      <img
        src={exterior}
        alt="Navom Guest House building exterior at dusk"
        width={1536}
        height={2048}
        fetchpriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#170f0c] via-[#170f0c]/70 to-[#170f0c]/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#170f0c]/60 via-transparent to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pb-16 pt-40 sm:py-32">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-[#ac8a4e]">
            <span className="h-px w-8 plate-rule" />
            {LOCATION_SHORT}
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-display text-[#f7f2ea] text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mt-5 max-w-3xl">
            A quiet comfort,
            <br />
            <span className="italic text-[#e7c98f]">eighteen times over.</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-[#f7f2ea]/80 text-base sm:text-lg mt-6 max-w-xl leading-relaxed">
            Welcome to Navom Guest House — {ROOM_COUNT} rooms, each dressed in
            soft linens, warm wood and honest natural light. Modern comfort,
            without the fuss.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-wrap items-center gap-4 mt-9">
            <a
              href={TELEGRAM_GENERAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#6b1f2a] hover:bg-[#7c2632] text-[#f7f2ea] px-7 py-3.5 text-sm tracking-wide transition-colors"
            >
              <Send size={16} aria-hidden="true" />
              Check Availability on Telegram
            </a>
            <a
              href="#rooms"
              className="inline-flex items-center gap-2 rounded-full border border-[#f7f2ea]/30 hover:border-[#ac8a4e] text-[#f7f2ea] px-7 py-3.5 text-sm tracking-wide transition-colors"
            >
              Explore Rooms
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-14 grid grid-cols-3 max-w-lg rounded-2xl border border-[#f7f2ea]/15 bg-[#f7f2ea]/10 backdrop-blur-md divide-x divide-[#f7f2ea]/15">
            <Stat icon={<BedDouble size={18} aria-hidden="true" />} label="Rooms" value={String(ROOM_COUNT)} />
            <Stat icon={<Sparkles size={18} aria-hidden="true" />} label="Style" value="Modern" />
            <Stat icon={<MapPin size={18} aria-hidden="true" />} label="Setting" value="Central" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 py-4 px-2 text-center">
      <span className="text-[#ac8a4e]">{icon}</span>
      <span className="font-display text-[#f7f2ea] text-lg">{value}</span>
      <span className="text-[10px] tracking-[0.2em] uppercase text-[#f7f2ea]/60">
        {label}
      </span>
    </div>
  );
}
