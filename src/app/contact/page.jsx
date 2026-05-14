import Contact from "@/Components/Contact/Contact";
export const metadata = {
  title: "Contact | Nexora",
  description:
    "Get in touch with Nexora, your premier digital studio for innovative digital experiences. Contact us today to discuss your project.",

  alternates: {
    canonical: "https://nexora.in/contact",
  },

  openGraph: {
    title: "Contact | Nexora",
    description:
      "Get in touch with Nexora, your premier digital studio for innovative digital experiences. Contact us today to discuss your project.",
    url: "https://nexora.in/contact",
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
      { url: "/brandbuzz.png", sizes: "32x32", type: "image/png" },
      { url: "/brandbuzz.png", sizes: "16x16", type: "image/png" },
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

export default function ContactPage() {
  return <Contact />;
}
