import HeroSection from "@/Components/Home/HeroSection";
import PortfolioComp from "@/Components/Home/PortfolioComp";
import ServicesComp from "@/Components/Home/ServicesComp";
import WhyChooseUsComp from "@/Components/Home/WhyChooseUsComp";
import CaptionGenComp from "@/Components/Home/CaptionGenComp";
import ChatbotComp from "@/Components/Home/ChatbotComp";

export const metadata = {
  title: "Home | Nexora",
  description:
    "Welcome to Nexora, a boutique digital studio crafting modern digital experiences with architectural precision and creative innovation.",

  alternates: {
    canonical: "https://nexora.in",
  },

  openGraph: {
    title: "Home | Nexora",
    description:
      "Welcome to Nexora, a boutique digital studio crafting modern digital experiences with architectural precision and creative innovation.",
    url: "https://nexora.in",
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
      { url: "/fav32.png", sizes: "32x32", type: "image/png" },
      { url: "/fav16.png", sizes: "16x16", type: "image/png" },
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
    <>
      <HeroSection />
      <ServicesComp />
      <WhyChooseUsComp />
      <CaptionGenComp />
      <PortfolioComp />
      <ChatbotComp />
    </>
  );
}
