import { useState } from "react";
import {
  Send,
  BedDouble,
  SunMedium,
  ShowerHead,
  Wifi,
  Sparkles,
} from "lucide-react";
import { TELEGRAM_GENERAL_URL, telegramRoomUrl, ROOM_COUNT } from "../siteConfig";
import Reveal from "./Reveal";
import RoomModal from "./RoomModal";

import room1 from "../assets/room-1.jpg";
import room2 from "../assets/room-2.jpg";
import room3 from "../assets/room-3.jpg";
import room4 from "../assets/room-4.jpg";
import room5 from "../assets/room-5.jpg";

const AMENITIES = [
  { icon: BedDouble, label: "Plush queen bed" },
  { icon: SunMedium, label: "Large windows, natural light" },
  { icon: ShowerHead, label: "En-suite bathroom" },
  { icon: Wifi, label: "Free Wi-Fi" },
];

const ROOMS = [
  {
    plate: "01",
    name: "Garden View Room",
    image: room1,
    blurb:
      "A quiet room designed for restful stays, dressed in soft patterned linen with natural light and a comfortable atmosphere.",
  },
  {
    plate: "02",
    name: "Deluxe Mirror Room",
    image: room2,
    blurb:
      "A brighter, modern room with dark wood furnishings, a full-length mirror and a calm interior.",
  },
  {
    plate: "03",
    name: "Executive Comfort Room",
    image: room3,
    blurb:
      "A fresh, spacious room designed for guests who want extra comfort — made up and ready the moment you arrive.",
  },
  {
    plate: "04",
    name: "Classic Wood Room",
    image: room4,
    blurb:
      "A warm room with rich wood details and a traditional, welcoming atmosphere.",
  },
  {
    plate: "05",
    name: "Twin Comfort Room",
    image: room5,
    blurb:
      "A practical twin room with two well-dressed beds, designed for friends, family, or guests travelling together.",
  },
];

export default function RoomsSection() {
  const [activeRoom, setActiveRoom] = useState(null);

  return (
    <section
      id="rooms"
      aria-labelledby="rooms-heading"
      className="relative bg-[#f7f2ea] py-24 sm:py-32"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-[#6b1f2a]">
                <span className="h-px w-8 plate-rule" />
                The Rooms
              </span>
              <h2
                id="rooms-heading"
                className="font-display text-4xl sm:text-5xl text-[#211a16] mt-4 max-w-xl"
              >
                {ROOM_COUNT} rooms, one standard of comfort.
              </h2>
            </div>
            <p className="text-[#8b8178] max-w-sm text-sm leading-relaxed">
              Navom has {ROOM_COUNT} rooms designed for comfortable stays.
              Every one shares the same considered details — comfortable
              beds, modern furnishings and a calm, well-kept feel. A few
              room types are shown here — tap any card to see more.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {ROOMS.map((room, i) => (
            <Reveal key={room.plate} delay={i * 80}>
              <RoomCard room={room} onOpen={() => setActiveRoom(room)} />
            </Reveal>
          ))}

          {/* Closing card standing in for the remaining rooms */}
          <Reveal delay={ROOMS.length * 80}>
            <div className="h-full min-h-[420px] rounded-2xl border border-[#211a16]/10 bg-[#211a16] flex flex-col items-center justify-center text-center p-8">
              <Sparkles className="text-[#ac8a4e] mb-4" size={26} aria-hidden="true" />
              <p className="font-display text-2xl text-[#f7f2ea] leading-snug">
                +{ROOM_COUNT - ROOMS.length} more rooms,
                <br />
                <span className="italic text-[#e7c98f]">just as considered.</span>
              </p>
              <p className="text-[#f7f2ea]/60 text-sm mt-3 max-w-[220px]">
                Tell us your dates on Telegram and we'll find the right room
                for you.
              </p>
              <a
                href={TELEGRAM_GENERAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#6b1f2a] hover:bg-[#7c2632] text-[#f7f2ea] px-6 py-3 text-sm mt-6 transition-colors"
              >
                <Send size={15} aria-hidden="true" />
                Ask on Telegram
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <RoomModal room={activeRoom} onClose={() => setActiveRoom(null)} />
    </section>
  );
}

function RoomCard({ room, onOpen }) {
  return (
    <article className="group h-full flex flex-col rounded-2xl overflow-hidden bg-white border border-[#211a16]/8 shadow-[0_1px_2px_rgba(33,26,22,0.06)] hover:shadow-[0_12px_30px_-8px_rgba(33,26,22,0.18)] transition-shadow duration-300">
      <button
        onClick={onOpen}
        className="relative h-56 overflow-hidden text-left w-full focus-visible:ring-2 focus-visible:ring-[#ac8a4e] focus-visible:ring-inset"
        aria-label={`View details for ${room.name}`}
      >
        <img
          src={room.image}
          alt={room.name}
          loading="lazy"
          width={1920}
          height={2560}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#211a16]/70 backdrop-blur-sm rounded-md px-3 py-1.5">
          <span className="h-1 w-1 rounded-full bg-[#ac8a4e]" aria-hidden="true" />
          <span className="font-display text-[#e7c98f] text-sm tracking-widest">
            {room.plate}
          </span>
        </div>
      </button>

      <div className="p-6 flex flex-col flex-1">
        <button
          onClick={onOpen}
          className="text-left focus-visible:ring-2 focus-visible:ring-[#ac8a4e] rounded"
        >
          <h3 className="font-display text-xl text-[#211a16]">{room.name}</h3>
        </button>
        <p className="text-[#8b8178] text-sm mt-2 leading-relaxed">
          {room.blurb}
        </p>

        <ul className="grid grid-cols-2 gap-y-2.5 gap-x-3 mt-5">
          {AMENITIES.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-1.5 text-xs text-[#211a16]/70"
            >
              <Icon size={14} className="text-[#6b1f2a] shrink-0" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>

        <a
          href={telegramRoomUrl(room.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-[#211a16]/15 hover:bg-[#6b1f2a] hover:border-[#6b1f2a] hover:text-[#f7f2ea] text-[#211a16] text-sm px-5 py-2.5 transition-colors"
        >
          <Send size={14} aria-hidden="true" />
          Book Room via Telegram
        </a>
      </div>
    </article>
  );
}
