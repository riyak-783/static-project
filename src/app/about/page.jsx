import AboutHero from "@/Components/About/AboutHero";
import AboutIntro from "@/Components/About/AboutIntro";
import AboutMissionVision from "@/Components/About/AboutMissionVision";
import Cta from "@/Components/Shared/Cta";
import Stats from "@/Components/Shared/Stats";
export const metadata = {
  title: "About | Nexora",
  description:
    "Learn more about Nexora, a premier digital studio dedicated to building innovative and modern digital experiences that blend architectural precision with creative excellence.",

  alternates: {
    canonical: "https://nexora.in/about",
  },

  openGraph: {
    title: "About | Nexora",
    description:
      "Learn more about Nexora, a premier digital studio dedicated to building innovative and modern digital experiences that blend architectural precision with creative excellence.",
    url: "https://nexora.in/about",
    type: "website",
    siteName: "Nexora",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Nexora",
      },
    ],
  },

  icons: {
    icon: [
      { url: "/nexora.png", sizes: "32x32", type: "image/png" },
      { url: "/nexora.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function Page() {
  return (
    <div className="bg-[#0e0e0e] text-white font-sans">
      <main>
        {/* Hero */}
        <AboutHero />

        {/* Intro Section */}
        <AboutIntro />

        {/* Mission Vision */}
        <AboutMissionVision />

        {/* Stats */}
        {/* <Stats /> */}

        {/* CTA */}
        <Cta />
      </main>
    </div>
  );
}
