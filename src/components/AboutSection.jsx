import { BedDouble, MapPinned, Volume1, MessageCircleMore } from "lucide-react";
import Reveal from "./Reveal";

const REASONS = [
  {
    icon: BedDouble,
    title: "Comfortable Rooms",
    text: "Thoughtfully prepared rooms for short and extended stays.",
  },
  {
    icon: MapPinned,
    title: "Convenient Location",
    text: "Easy to reach in Hossana, right behind Nock Gas Station.",
  },
  {
    icon: Volume1,
    title: "Quiet Atmosphere",
    text: "A calm place to rest after a busy day.",
  },
  {
    icon: MessageCircleMore,
    title: "Easy Booking",
    text: "Contact the guest house directly through Telegram or phone.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative bg-[#f7f2ea] py-24 sm:py-28 border-t border-[#211a16]/8"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-[#6b1f2a]">
            <span className="h-px w-8 plate-rule" />
            Why Navom
          </span>
          <h2
            id="about-heading"
            className="font-display text-4xl sm:text-5xl text-[#211a16] mt-4 max-w-xl leading-[1.1]"
          >
            A guest house built
            <br />
            <span className="italic text-[#6b1f2a]">around the basics, done right.</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {REASONS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-[#211a16]/10 bg-white p-7">
                <div className="h-11 w-11 rounded-full bg-[#6b1f2a]/10 flex items-center justify-center">
                  <Icon size={19} className="text-[#6b1f2a]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg text-[#211a16] mt-5">
                  {title}
                </h3>
                <p className="text-[#8b8178] text-sm mt-2 leading-relaxed">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
