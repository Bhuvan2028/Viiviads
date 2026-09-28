"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50 group">
      <a
        href="https://wa.me/919067677624?text=Hello%20VIIVIADS%20team,%20I%20would%20like%20to%20inquire%20about%20your%20in-app%20advertising%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-medium text-sm shadow-lg hover:shadow-xl hover:bg-[#20ba5a] hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat with VIIVIADS on WhatsApp (+91 9067677624)"
      >
        <MessageCircle className="w-5 h-5 fill-white stroke-none" />
        <span className="hidden sm:inline font-semibold tracking-wide">Chat with VIIVIADS</span>
      </a>
    </aside>
  );
}
