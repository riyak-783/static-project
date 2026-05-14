import CookiePolicy from "@/Components/Legal/CookiePolicy";
export const metadata = {
  title: "Cookie Policy | Nexora",
  description:
    "Learn about Nexora's cookie policy and how we use cookies to improve your browsing experience on our website.",

  alternates: {
    canonical: "https://nexora.in/cookie-policy",
  },

  openGraph: {
    title: "Cookie Policy | Nexora",
    description:
      "Learn about Nexora's cookie policy and how we use cookies to improve your browsing experience on our website.",
    url: "https://nexora.in/cookie-policy",
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
  return <CookiePolicy />;
}
