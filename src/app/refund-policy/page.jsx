import RefundPolicy from "@/Components/Legal/RefundPolicy";
export const metadata = {
  title: "Refund Policy | Nexora",
  description:
    "Learn about Nexora's refund policy and the terms for requesting refunds on our digital services.",

  alternates: {
    canonical: "https://nexora.in/refund-policy",
  },

  openGraph: {
    title: "Refund Policy | Nexora",
    description:
      "Learn about Nexora's refund policy and the terms for requesting refunds on our digital services.",
    url: "https://nexora.in/refund-policy",
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
  return <RefundPolicy />;
}
