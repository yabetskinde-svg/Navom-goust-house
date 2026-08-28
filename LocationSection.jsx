import { MapPin, ArrowDown, Building2, Phone, Send, Compass, Fuel } from "lucide-react";
import {
  TELEGRAM_GENERAL_URL,
  TELEGRAM_DIRECTIONS_URL,
  PHONE_NUMBERS,
  LOCATION_SHORT,
  LANDMARK_NAME,
} from "../siteConfig";
import Reveal from "./Reveal";

export default function LocationSection() {
  const primaryPhone = PHONE_NUMBERS[0];

  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="relative bg-[#f7f2ea] py-24 sm:py-32"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-[#6b1f2a]">
            <span className="h-px w-8 plate-rule" />
            Find Us
          </span>
          <h2
            id="location-heading"
            className="font-display text-4xl sm:text-5xl text-[#211a16] mt-4 max-w-xl leading-[1.1]"
          >
            Easy to find,
            <br />
            <span className="italic text-[#6b1f2a]">easier to reach.</span>
          </h2>
          <p className="text-[#8b8178] text-sm sm:text-base mt-5 max-w-lg leading-relaxed">
            Navom sits on a quiet street that isn't always easy to pin down
            on a map — so instead, we'll get you here the way our guests
            actually find us: by landmark, and by a quick message.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6 mt-14 items-stretch">
          {/* 1. Location card */}
          <Reveal delay={80}>
            <div className="h-full flex flex-col rounded-2xl border border-[#211a16]/10 bg-white p-8">
              <div className="h-12 w-12 rounded-full bg-[#6b1f2a]/10 flex items-center justify-center">
                <MapPin size={20} className="text-[#6b1f2a]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl text-[#211a16] mt-6">
                Navom Guest House
              </h3>
              <p className="text-[#ac8a4e] text-sm tracking-wide mt-1">
                {LOCATION_SHORT}
              </p>
              <p className="text-[#8b8178] text-sm mt-4 leading-relaxed">
                Located in Hossana, Navom Guest House is easy to reach from
                the surrounding area — just ask any local for the landmark
                below.
              </p>
            </div>
          </Reveal>

          {/* 2. Finding Navom — landmark route */}
          <Reveal delay={160}>
            <div className="h-full flex flex-col rounded-2xl bg-[#211a16] p-8 text-center items-center">
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#ac8a4e]">
                Finding Navom
              </span>

              <div className="flex flex-col items-center mt-6">
                <RouteNode icon={Fuel} label={LANDMARK_NAME} sublabel="Start here" />
                <RouteConnector />
                <RouteNode icon={Compass} label="Follow the road behind it" />
                <RouteConnector />
                <RouteNode
                  icon={Building2}
                  label="Navom Guest House"
                  sublabel="You've arrived"
                  emphasized
                />
              </div>
            </div>
          </Reveal>

          {/* 3. Contact for directions */}
          <Reveal delay={240}>
            <div className="h-full flex flex-col rounded-2xl border border-[#6b1f2a]/20 bg-[#6b1f2a]/5 p-8">
              <div className="h-12 w-12 rounded-full bg-[#6b1f2a]/10 flex items-center justify-center">
                <Send size={19} className="text-[#6b1f2a]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl text-[#211a16] mt-6">
                Need help finding us?
              </h3>
              <p className="text-[#8b8178] text-sm mt-3 leading-relaxed">
                Send us a message and we'll help you get here.
              </p>

              <div className="mt-auto pt-8 flex flex-col gap-3">
                <a
                  href={TELEGRAM_GENERAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6b1f2a] hover:bg-[#7c2632] text-[#f7f2ea] px-6 py-3 text-sm tracking-wide transition-colors"
                >
                  <Send size={15} aria-hidden="true" />
                  Message on Telegram
                </a>
                <a
                  href={`tel:${primaryPhone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#211a16]/15 hover:border-[#6b1f2a] text-[#211a16] px-6 py-3 text-sm tracking-wide transition-colors"
                >
                  <Phone size={15} aria-hidden="true" />
                  Call Navom
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 4. Primary directions CTA */}
        <Reveal delay={320}>
          <div className="mt-8 rounded-2xl border border-[#211a16]/10 bg-white px-8 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="font-display text-xl sm:text-2xl text-[#211a16]">
                We'll make sure you can find us.
              </h3>
              <p className="text-[#8b8178] text-sm mt-1.5">
                One tap on Telegram gets you clear, step-by-step directions.
              </p>
            </div>
            <a
              href={TELEGRAM_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 shrink-0 rounded-full bg-[#211a16] hover:bg-[#332721] text-[#f7f2ea] px-7 py-3.5 text-sm tracking-wide transition-colors"
            >
              <Compass size={16} aria-hidden="true" />
              Ask for Directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RouteNode({ icon: Icon, label, sublabel, emphasized = false }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`h-14 w-14 rounded-full flex items-center justify-center ${
          emphasized
            ? "bg-[#ac8a4e] text-[#211a16]"
            : "bg-[#f7f2ea]/10 text-[#ac8a4e]"
        }`}
      >
        <Icon size={22} aria-hidden="true" />
      </div>
      <p
        className={`font-display mt-3 ${
          emphasized ? "text-[#f7f2ea] text-lg" : "text-[#f7f2ea]/90 text-base"
        }`}
      >
        {label}
      </p>
      {sublabel && (
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#ac8a4e] mt-1">
          {sublabel}
        </p>
      )}
    </div>
  );
}

function RouteConnector() {
  return (
    <div className="flex flex-col items-center py-2" aria-hidden="true">
      <span className="h-6 w-px bg-[#f7f2ea]/20" />
      <ArrowDown size={14} className="text-[#ac8a4e] animate-pulse" />
      <span className="h-6 w-px bg-[#f7f2ea]/20" />
    </div>
  );
}
