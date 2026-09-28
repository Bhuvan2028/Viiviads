import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Cookie } from "lucide-react";

export const metadata = {
  title: "Cookie Policy | VIIVIADS",
  description: "Information regarding the use of cookies and tracking technologies on the VIIVIADS website.",
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[#fffaf0] text-[#0a0a0a] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-10">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0a0a0a] hover:underline mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-xl bg-[#faf5e8] text-[#0a0a0a] border border-[#e5e5e5]">
              <Cookie className="w-5 h-5 text-[#ff4d8b]" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#6a6a6a]">
              Tracking Notice
            </span>
          </div>

          <h1 className="clay-display-lg text-[#0a0a0a]">
            Cookie Policy
          </h1>
          <p className="text-xs text-[#6a6a6a] mt-2">
            Last Updated: January 2026 · VIIVIADS Advertising Services, Mumbai, India
          </p>
        </div>

        <div className="prose prose-sm max-w-none text-[#3a3a3a] space-y-6 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#120e24]">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device by websites that you visit. They are widely used to make websites work efficiently, recognize return visitors, and provide analytics information to website owners.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#120e24]">2. How VIIVIADS Uses Cookies</h2>
            <p>
              VIIVIADS uses cookies and similar storage technologies on viiviads.com for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Essential Cookies:</strong> Required to enable navigation, form submission security, and cookie consent preferences.</li>
              <li><strong>Analytics Cookies:</strong> Help us measure aggregate site traffic, popular content pages, and technical load performance.</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences when interacting with our campaign calculators and forms.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#120e24]">3. Managing Cookie Preferences</h2>
            <p>
              You can control or delete cookies through your browser settings or via our on-site cookie banner. If you disable essential cookies, certain features of the site may not function as intended.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#120e24]">4. Inquiries</h2>
            <p>
              For further questions about our cookie practices, contact us at:
            </p>
            <div className="p-4 rounded-xl bg-[#f4f2f9] border border-[#e6e2f0] text-xs font-mono space-y-1">
              <div>Email: hello@viiviads.com</div>
              <div>Address: Mumbai, Maharashtra, 401208, India</div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
