import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import StructuredData from "@/components/StructuredData";
import CookieConsent from "@/components/CookieConsent";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.viiviads.com"),
  title: {
    default: "VIIVIADS | Mobile-First Ad Partner & In-App Performance",
    template: "%s | VIIVIADS",
  },
  description:
    "VIIVIADS is a mobile-first ad partner helping brands grow through in-app campaigns, with smart targeting, quality traffic and performance you can measure.",
  keywords: [
    "VIIVIADS",
    "mobile advertising agency",
    "in-app advertising",
    "performance marketing",
    "CPI campaigns",
    "CPA campaigns",
    "CPL campaigns",
    "mobile app promotion",
    "native advertising",
    "programmatic advertising",
    "DSP",
    "app install campaigns",
    "publisher network",
    "ad network India",
  ],
  authors: [{ name: "VIIVIADS" }],
  creator: "VIIVIADS",
  publisher: "VIIVIADS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.viiviads.com",
    siteName: "VIIVIADS",
    title: "VIIVIADS | Mobile-First Ad Partner",
    description:
      "VIIVIADS connects advertisers with high-quality mobile audiences through smart in-app campaigns, built for performance across every app vertical.",
    images: [
      {
        url: "/viiviads-logo.svg",
        width: 1200,
        height: 630,
        alt: "VIIVIADS Mobile-First Ad Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIIVIADS | Mobile-First Ad Partner",
    description:
      "Grow your brand with mobile-first advertising. Smart in-app campaigns that drive real performance.",
    images: ["/viiviads-logo.svg"],
  },
  icons: {
    icon: "/viiviads-mark.svg",
    shortcut: "/viiviads-mark.svg",
    apple: "/viiviads-mark.svg",
  },
};

export const viewport = {
  themeColor: "#fffaf0",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen bg-[#fffaf0] text-[#0a0a0a] font-sans antialiased selection:bg-[#ff4d8b] selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
        <CookieConsent />
      </body>
    </html>
  );
}
