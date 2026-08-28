// ─────────────────────────────────────────────────────────────
// Edit this file to update contact and location details across
// the whole site.
// ─────────────────────────────────────────────────────────────

export const TELEGRAM_URL = "https://t.me/basiliel_won";

export const PHONE_NUMBERS = ["0461780003", "0912686368"];

export const ROOM_COUNT = 18;

export const SITE_NAME = "Navom Guest House";

// ── SEO ─────────────────────────────────────────────────────
export const SITE_TITLE =
  "Navom Guest House — Guest House in Hossana, Ethiopia";
export const SITE_DESCRIPTION =
  "Navom Guest House in Hossana, Ethiopia — 18 modern, comfortable rooms with clean interiors and a quiet, well-kept setting. Check availability directly on Telegram.";
// Replace with the live domain once the site is deployed.
export const SITE_URL = "https://navomguesthouse.example.com";

// ── Telegram deep links with pre-filled messages ───────────────
// Builds a wa.me-style Telegram link that opens the chat with a
// pre-written (editable) message already in the input box.
function telegramLink(message) {
  return `${TELEGRAM_URL}?text=${encodeURIComponent(message)}`;
}

export const TELEGRAM_GENERAL_URL = telegramLink(
  "Hello Navom Guest House, I would like to ask about room availability."
);

export function telegramRoomUrl(roomName) {
  return telegramLink(
    `Hello Navom Guest House, I would like to ask about availability for the ${roomName}.`
  );
}

export function telegramStayUrl({ roomName, checkIn, checkOut, guests }) {
  const lines = [
    "Hello Navom Guest House, I would like to check availability.",
    roomName ? `Room: ${roomName}` : null,
    checkIn ? `Check-in: ${checkIn}` : null,
    checkOut ? `Check-out: ${checkOut}` : null,
    guests ? `Guests: ${guests}` : null,
  ].filter(Boolean);
  return telegramLink(lines.join("\n"));
}

export const TELEGRAM_DIRECTIONS_URL = telegramLink(
  "Hello Navom Guest House, I'm trying to find your location. Could you please send me directions?"
);

// ── Location ────────────────────────────────────────────────
// Short line used in the hero / nav / footer.
export const LOCATION_SHORT = "Hossana, Ethiopia";

// Full landmark description used in the Find Us section.
export const LOCATION_FULL =
  "Hossana, Ethiopia — located directly behind Nock Gas Station.";

// The nearest known landmark, used in the "Finding Navom" route card.
export const LANDMARK_NAME = "Nock Gas Station";
