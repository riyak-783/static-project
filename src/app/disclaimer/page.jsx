import Disclaimer from "@/Components/Legal/Disclaimer";
export const metadata = {
  title: "Disclaimer | Nexora",
  description:
    "Read Nexora's disclaimer to understand the terms and limitations of our services and website content.",

  alternates: {
    canonical: "https://nexora.in/disclaimer",
  },

  openGraph: {
    title: "Disclaimer | Nexora",
    description:
      "Read Nexora's disclaimer to understand the terms and limitations of our services and website content.",
    url: "https://nexora.in/disclaimer",
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
export default function DisclaimerPage() {
  return <Disclaimer />;
}
