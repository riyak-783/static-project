import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { Constant } from "@/Data/Constant";
import Link from "next/link";
import { formatPhone } from "../../../public/js/helpers";

export default function FooterComp() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#0e0e0e] mt-32">
      {/* Honeycomb Background */}
      <div className="absolute inset-0 honeycomb-pattern pointer-events-none"></div>

      {/* Gradient Line */}
      <div className="gradient-line"></div>

      <div className="relative z-10 w-full pt-16 sm:pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-5 sm:px-8 max-w-7xl mx-auto items-start">
          {/* Left Column — spans full width on mobile, half on sm, 1/3 on lg */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-7">
            <div className="flex flex-col gap-3">
              <div className="text-3xl sm:text-4xl font-black text-bb-yellow tracking-tighter">
                Nexora<span className="text-white">Studio</span>
              </div>
              <p className="font-bold text-bb-yellow tracking-tight text-lg sm:text-xl">
                We work like bees for your brand.
              </p>
              <p className="text-white/60 leading-relaxed max-w-sm text-sm sm:text-base">
                Harnessing collective intelligence and precision design to
                create buzzing digital ecosystems that drive unparalleled
                growth.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-3">
              {[
                {
                  href: Constant.Company.instagram,
                  icon: <FaInstagram />,
                  label: "Instagram",
                },
                {
                  href: Constant.Company.linkedin,
                  icon: <FaLinkedin />,
                  label: "LinkedIn",
                },
                {
                  href: `https://wa.me/${Constant.Company.whatsapp}`,
                  icon: <FaWhatsapp />,
                  label: "WhatsApp",
                },
                {
                  href: `mailto:${Constant.Company.email}`,
                  icon: <FaEnvelope />,
                  label: "Email",
                },
                {
                  href: `tel:${Constant.Company.phones[0]}`,
                  icon: <FaPhoneAlt />,
                  label: "Phone",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  aria-label={label}
                  className="w-11 h-11 rounded-full bg-[#1f1f1f] flex items-center justify-center text-white hover:bg-bb-yellow hover:text-black transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Center Column */}
          <div className="space-y-6">
            <h4 className="font-bold text-white uppercase tracking-widest text-xs sm:text-sm">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm uppercase tracking-widest">
              {[
                { name: "Home", href: "/" },
                { name: "Our Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Pricing", href: "/pricing" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-bb-yellow transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="h-[1px] w-0 bg-bb-yellow transition-all duration-300 group-hover:w-4 shrink-0"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h4 className="font-bold text-white uppercase tracking-widest text-xs sm:text-sm">
              Get In Touch
            </h4>
            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-start gap-3 group">
                <div className="mt-0.5 w-8 h-8 shrink-0 rounded-sm bg-[#262626] flex items-center justify-center text-bb-yellow group-hover:bg-bb-yellow group-hover:text-black transition-colors">
                  <HiOutlineMail />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                    Email us
                  </span>
                  <a
                    href={`mailto:${Constant.Company.email}`}
                    className="text-white hover:text-bb-yellow transition-colors text-sm break-all"
                  >
                    {Constant.Company.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 group">
                <div className="mt-0.5 w-8 h-8 shrink-0 rounded-sm bg-[#262626] flex items-center justify-center text-bb-yellow group-hover:bg-bb-yellow group-hover:text-black transition-colors">
                  <HiOutlinePhone />
                </div>

                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                    Call us
                  </span>

                  {Constant.Company.phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone}`}
                      className="text-white hover:text-bb-yellow transition-colors text-sm"
                    >
                      {formatPhone(phone)}
                    </a>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 group">
                <div className="mt-0.5 w-8 h-8 shrink-0 rounded-sm bg-[#262626] flex items-center justify-center text-bb-yellow group-hover:bg-bb-yellow group-hover:text-black transition-colors">
                  <HiOutlineLocationMarker />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                    Visit us
                  </span>
                  <span className="text-white text-sm">India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/5 pt-8">
          <div className="flex flex-col gap-6 px-5 sm:px-8 max-w-7xl mx-auto">
            {/* Policy links — wrappable row */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-3 text-[10px] sm:text-xs uppercase tracking-widest">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
                { label: "Refund Policy", href: "/refund-policy" },
                { label: "Cookie Policy", href: "/cookie-policy" },
                { label: "Disclaimer", href: "/disclaimer" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-white/50 hover:text-bb-yellow transition-colors whitespace-nowrap"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-[11px] sm:text-sm uppercase tracking-widest text-white/40 text-center sm:text-left">
              © 2026 NexoraStudio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
