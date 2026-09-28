import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | VIIVIADS",
  description: "Terms and conditions governing the use of the VIIVIADS platform and advertising services.",
};

export default function TermsAndConditions() {
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
              <FileText className="w-5 h-5 text-[#ff4d8b]" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#6a6a6a]">
              Commercial Terms
            </span>
          </div>

          <h1 className="clay-display-lg text-[#0a0a0a]">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-[#6a6a6a] mt-2">
            Effective Date: January 2026 · VIIVIADS Advertising Services, Mumbai, India
          </p>
        </div>

        <div className="prose prose-sm max-w-none text-[#3a3a3a] space-y-6 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#120e24]">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website, services, or publisher network provided by VIIVIADS (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;), you agree to be bound by these Terms and Conditions. If you represent an entity, you certify that you have the authority to bind that entity to these terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#120e24]">2. Advertiser Commitments</h2>
            <p>
              Advertisers agree that all creatives, landing pages, and promotional materials provided comply with applicable local laws and app store guidelines. Campaigns promoting illegal goods, malicious code, deceptive claims, or unauthorized content are strictly prohibited. Payments must adhere to the agreed Insertion Order (IO) terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#120e24]">3. Publisher Commitments &amp; Anti-Fraud</h2>
            <p>
              Publishers agree to deliver genuine, human traffic. Any traffic generated via bots, emulators, automated scripts, click injection, incentivized fraud (unless explicitly allowed in the IO), or misleading placements will result in immediate termination of the publisher account and forfeiture of revenues associated with invalid impressions or conversions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#120e24]">4. Tracking &amp; Attribution</h2>
            <p>
              Performance metrics (CPI, CPA, CPL, CPS) are governed by tracking numbers recorded by certified MMPs or agreed tracking platforms. VIIVIADS reserves the right to audit suspicious discrepancies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#120e24]">5. Limitation of Liability</h2>
            <p>
              In no event shall VIIVIADS be liable for any indirect, incidental, punitive, or consequential damages arising out of or related to these terms or the performance of any advertising campaign.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#120e24]">6. Contact Information</h2>
            <p>
              For legal inquiries concerning these terms, please contact:
            </p>
            <div className="p-4 rounded-xl bg-[#f4f2f9] border border-[#e6e2f0] text-xs font-mono space-y-1">
              <div>VIIVIADS Legal Affairs</div>
              <div>Email: hello@viiviads.com</div>
              <div>Phone: +91 9067677624</div>
              <div>Address: Mumbai, Maharashtra, 401208, India</div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
