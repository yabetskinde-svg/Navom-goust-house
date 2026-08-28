import { useEffect, useRef } from "react";
import { X } from "lucide-react";

/**
 * Minimal, dependency-free modal shell. Traps focus loosely (returns
 * focus to the element that opened it), closes on Escape or backdrop
 * click, and locks body scroll while open.
 */
export default function Modal({ open, onClose, labelledBy, children, panelClassName = "" }) {
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (open) {
      triggerRef.current = document.activeElement;
      document.body.classList.add("no-scroll");
      panelRef.current?.focus();
    } else {
      document.body.classList.remove("no-scroll");
      if (triggerRef.current instanceof HTMLElement) {
        triggerRef.current.focus();
      }
    }
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      <button
        aria-label="Close"
        className="absolute inset-0 bg-[#170f0c]/85 backdrop-blur-sm cursor-default"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className={`relative z-10 w-full max-h-[90vh] overflow-y-auto outline-none ${panelClassName}`}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-[#170f0c]/70 hover:bg-[#170f0c] text-[#f7f2ea] flex items-center justify-center transition-colors"
        >
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}
