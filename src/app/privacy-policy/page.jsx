import Privacy from "@/Components/Legal/Privacy";
export const metadata = {
  title: "Privacy Policy | Nexora",
  description:
    "Review Nexora's privacy policy to understand how we collect, use, and protect your personal information.",

  alternates: {
    canonical: "https://nexora.in/privacy-policy",
  },

  openGraph: {
    title: "Privacy Policy | Nexora",
    description:
      "Review Nexora's privacy policy to understand how we collect, use, and protect your personal information.",
    url: "https://nexora.in/privacy-policy",
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
  return <Privacy />;
}
