import { ShieldCheck, Sparkles, Clock } from "lucide-react";
import hallway from "../assets/hallway.jpg";
import Reveal from "./Reveal";

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Kept, not just cleaned",
    text: "Polished floors, fresh paint and doors that shut properly — the small things guests notice first.",
  },
  {
    icon: Sparkles,
    title: "Modern throughout",
    text: "The same clean, contemporary feel follows you from the entrance to your room.",
  },
  {
    icon: Clock,
    title: "Always ready",
    text: "Rooms are turned around promptly, so a fresh one is ready whenever you check in.",
  },
];

export default function VibeSection() {
  return (
    <section
      id="vibe"
      aria-labelledby="vibe-heading"
      className="relative bg-[#211a16] py-24 sm:py-32"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={hallway}
              alt="A bright, polished hallway inside Navom Guest House"
              width={1920}
              height={2560}
              loading="lazy"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-[#f7f2ea]/10 rounded-2xl" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-[#ac8a4e]">
              <span className="h-px w-8 plate-rule" />
              The Vibe
            </span>
            <h2 id="vibe-heading" className="font-display text-4xl sm:text-5xl text-[#f7f2ea] mt-4 leading-[1.1]">
              The kind of quiet
              <br />
              <span className="italic text-[#e7c98f]">that's easy to feel.</span>
            </h2>
            <p className="text-[#f7f2ea]/70 mt-6 max-w-md leading-relaxed">
              Navom Guest House is looked after floor by floor, room by room.
              Wide, bright corridors lead to doors that all open onto the
              same standard of comfort — nothing showy, just consistently
              well kept.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="flex gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-full bg-[#f7f2ea]/8 flex items-center justify-center">
                    <p.icon size={17} className="text-[#ac8a4e]" />
                  </div>
                  <div>
                    <h3 className="text-[#f7f2ea] font-medium">{p.title}</h3>
                    <p className="text-[#f7f2ea]/60 text-sm mt-1 leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
