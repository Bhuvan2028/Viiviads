"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("viiviads_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("viiviads_cookie_consent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("viiviads_cookie_consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-6 left-6 right-6 md:left-6 md:right-auto md:max-w-md z-50 bg-[#fffaf0]/95 backdrop-blur-md border border-[#e5e5e5] p-5 rounded-[16px] shadow-lg transition-all"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-[#faf5e8] text-[#0a0a0a] border border-[#e5e5e5] shrink-0">
          <Cookie className="w-5 h-5 text-[#ff4d8b]" />
        </div>
        <div className="flex-1 text-xs text-[#3a3a3a] leading-relaxed">
          <p className="font-semibold text-sm text-[#0a0a0a] mb-1">
            Cookie &amp; Privacy Notice
          </p>
          VIIVIADS uses essential cookies to analyze site traffic, optimize campaign workflows, and enhance user experience. Learn more in our{" "}
          <Link href="/cookies" className="text-[#0a0a0a] font-medium underline">
            Cookie Policy
          </Link>
          .
        </div>
        <button
          onClick={handleDecline}
          aria-label="Dismiss cookie notice"
          className="text-[#6a6a6a] hover:text-[#0a0a0a] p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center gap-2.5 mt-4 pt-3 border-t border-[#ebe6d6]">
        <button
          onClick={handleAccept}
          className="flex-1 py-2 px-3 rounded-[12px] bg-[#0a0a0a] text-white text-xs font-semibold hover:bg-[#1f1f1f] transition-colors"
        >
          Accept All
        </button>
        <button
          onClick={handleDecline}
          className="py-2 px-3 rounded-[12px] bg-[#faf5e8] text-[#0a0a0a] border border-[#e5e5e5] text-xs font-semibold hover:bg-[#f5f0e0] transition-colors"
        >
          Essential Only
        </button>
      </div>
    </aside>
  );
}
