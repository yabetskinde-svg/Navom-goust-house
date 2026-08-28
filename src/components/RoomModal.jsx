import { Send, BedDouble, SunMedium, ShowerHead, Wifi } from "lucide-react";
import { telegramRoomUrl } from "../siteConfig";
import Modal from "./Modal";

const AMENITIES = [
  { icon: BedDouble, label: "Plush queen bed" },
  { icon: SunMedium, label: "Large windows, natural light" },
  { icon: ShowerHead, label: "En-suite bathroom" },
  { icon: Wifi, label: "Free Wi-Fi" },
];

export default function RoomModal({ room, onClose }) {
  const open = Boolean(room);

  return (
    <Modal
      open={open}
      onClose={onClose}
      labelledBy="room-modal-title"
      panelClassName="max-w-2xl bg-[#f7f2ea] rounded-2xl"
    >
      {room && (
        <div>
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-64 sm:h-80 object-cover rounded-t-2xl"
          />

          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-[#6b1f2a]">
              <span className="h-px w-6 plate-rule" />
              Room {room.plate}
            </div>

            <h3
              id="room-modal-title"
              className="font-display text-2xl sm:text-3xl text-[#211a16] mt-3"
            >
              {room.name}
            </h3>

            <p className="text-[#8b8178] text-sm sm:text-base mt-3 leading-relaxed">
              {room.blurb}
            </p>

            <h4 className="text-[#211a16] text-sm font-medium mt-6 mb-3">
              Amenities
            </h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {AMENITIES.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm text-[#211a16]/75"
                >
                  <Icon size={15} className="text-[#6b1f2a] shrink-0" />
                  {label}
                </li>
              ))}
            </ul>

            <a
              href={telegramRoomUrl(room.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-[#6b1f2a] hover:bg-[#7c2632] text-[#f7f2ea] px-7 py-3.5 text-sm tracking-wide transition-colors"
            >
              <Send size={16} />
              Ask About Availability
            </a>
          </div>
        </div>
      )}
    </Modal>
  );
}
