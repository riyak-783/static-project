import Portfolio from "@/Components/Portfolio/Portfolio";
export const metadata = {
  title: "Portfolio | Nexora",
  description:
    "Explore Nexora's portfolio of innovative digital projects and modern digital experiences crafted with precision and creativity.",

  alternates: {
    canonical: "https://nexora.in/portfolio",
  },

  openGraph: {
    title: "Portfolio | Nexora",
    description:
      "Explore Nexora's portfolio of innovative digital projects and modern digital experiences crafted with precision and creativity.",
    url: "https://nexora.in/portfolio",
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
export default function PortfolioPage() {
  return <Portfolio />;
}
