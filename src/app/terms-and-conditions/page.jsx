import TermsAndCondition from "@/Components/Legal/TermsAndCondition";
export const metadata = {
  title: "Terms and Conditions | Nexora",
  description:
    "Read Nexora's terms and conditions to understand the rules and guidelines for using our services and website.",

  alternates: {
    canonical: "https://nexora.in/terms-and-conditions",
  },

  openGraph: {
    title: "Terms and Conditions | Nexora",
    description:
      "Read Nexora's terms and conditions to understand the rules and guidelines for using our services and website.",
    url: "https://nexora.in/terms-and-conditions",
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
  return <TermsAndCondition />;
}
