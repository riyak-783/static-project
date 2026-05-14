import HeaderComp from "@/Components/Layout/HeaderComp";
import "./global.css";
import { Poppins } from "next/font/google";
import FloatingComp from "@/Components/Layout/FloatingComp";
import FooterComp from "@/Components/Layout/FooterComp";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://nexora.in"),
  title: "Nexora",
  description:
    "Nexora is a boutique digital studio specializing in crafting high-end digital products that blend architectural precision with creative soul.",

  icons: {
    icon: [
      { url: "/fav32.png", sizes: "32x32", type: "image/png" },
      { url: "/fav16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="font-sans">
        {/* ✅ Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-336C6NSBFK"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-336C6NSBFK');
          `}
        </Script>

        <HeaderComp />
        <FloatingComp />
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#131313",
              color: "#fff",
              border: "1px solid #e3f700",
            },
          }}
        />
        <FooterComp />
      </body>
    </html>
  );
}
