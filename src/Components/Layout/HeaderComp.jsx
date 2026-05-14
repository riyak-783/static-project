"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiHome,
  FiInfo,
  FiBriefcase,
  FiLayers,
  FiMail,
  FiTag,
} from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Home", icon: FiHome },
  { href: "/services", label: "Our Services", icon: FiLayers },
  { href: "/portfolio", label: "Portfolio", icon: FiBriefcase },
  { href: "/about", label: "About", icon: FiInfo },
  { href: "/contact", label: "Contact", icon: FiMail },
];

export default function HeaderComp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        /* Hamburger animation */
        .ham-line {
          display: block;
          width: 24px;
          height: 2px;
          background: white;
          border-radius: 2px;
          transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1),
                      opacity 0.25s ease,
                      width 0.3s ease;
          transform-origin: center;
        }
        .ham-line-top.open    { transform: translateY(8px) rotate(45deg); }
        .ham-line-mid.open    { opacity: 0; transform: scaleX(0); }
        .ham-line-bot.open    { transform: translateY(-8px) rotate(-45deg); }

        /* Mobile menu slide-in */
        .mobile-nav {
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .mobile-nav.open {
          transform: translateX(0);
        }

        /* Staggered nav link reveal */
        .nav-item {
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .mobile-nav.open .nav-item {
          opacity: 1;
          transform: translateX(0);
        }
        .mobile-nav.open .nav-item:nth-child(1) { transition-delay: 0.1s; }
        .mobile-nav.open .nav-item:nth-child(2) { transition-delay: 0.16s; }
        .mobile-nav.open .nav-item:nth-child(3) { transition-delay: 0.22s; }
        .mobile-nav.open .nav-item:nth-child(4) { transition-delay: 0.28s; }
        .mobile-nav.open .nav-item:nth-child(5) { transition-delay: 0.34s; }
        .mobile-nav.open .nav-cta  { transition-delay: 0.42s; }

        /* Overlay fade */
        .overlay {
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        /* Nav link hover bar */
        .nav-link-desktop {
          position: relative;
        }
        .nav-link-desktop::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--bb-yellow);
          border-radius: 2px;
          transition: width 0.25s ease;
        }
        .nav-link-desktop:hover::after { width: 100%; }
      `}</style>

      {/* ───────────────── HEADER BAR ───────────────── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-lg shadow-lg shadow-black/30"
            : "bg-black/40 backdrop-blur-md"
        } border-b border-white/5`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-black tracking-tight shrink-0"
          >
            <span className="text-bb-yellow">Nexora</span>
            <span className="text-white">Studio</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="nav-link-desktop flex items-center gap-1.5 text-white/60 hover:text-bb-yellow transition-colors duration-200"
              >
                <Icon size={14} />
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/pricing"
            className="hidden lg:flex items-center gap-2 bg-bb-yellow text-black px-5 py-2 rounded-full font-bold hover:scale-105 hover:bg-bb-yellow-dark transition-all duration-200 shrink-0"
          >
            <FiTag size={14} />
            Get Pricing
          </Link>

          {/* Hamburger – mobile/tablet only */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10 rounded-lg hover:bg-white/10 transition"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`ham-line ham-line-top ${menuOpen ? "open" : ""}`}
            />
            <span
              className={`ham-line ham-line-mid ${menuOpen ? "open" : ""}`}
            />
            <span
              className={`ham-line ham-line-bot ${menuOpen ? "open" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* ───────────────── OVERLAY ───────────────── */}
      <div
        className={`overlay fixed inset-0 z-40 bg-black/60 backdrop-blur-sm ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ───────────────── MOBILE DRAWER ───────────────── */}
      <aside
        className={`mobile-nav fixed top-0 right-0 z-50 h-full w-[75vw] max-w-[320px] bg-[#0d0d0d] border-l border-white/10 flex flex-col pt-24 pb-10 px-7 ${menuOpen ? "open" : ""}`}
      >
        {/* Close button */}
        <button
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-lg text-white/60 hover:text-bb-yellow hover:bg-white/10 transition"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="text-2xl leading-none">✕</span>
        </button>

        {/* Logo inside drawer */}
        <p className="absolute top-5 left-6 text-xl font-black tracking-tight">
          <span className="text-bb-yellow">Black</span>
          <span className="text-white">Giraffe</span>
        </p>

        <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-5">
          Navigation
        </div>

        <nav className="flex flex-col gap-1">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-white/60 hover:text-bb-yellow hover:bg-bb-yellow-light transition-all duration-200"
            >
              <Icon size={17} />
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA in drawer */}
        <Link
          href="/pricing"
          onClick={() => setMenuOpen(false)}
          className="nav-item nav-cta mt-8 flex items-center justify-center gap-2 bg-bb-yellow text-black px-5 py-3 rounded-full font-bold hover:bg-bb-yellow-dark transition-all duration-200"
        >
          <FiTag size={15} />
          Get Pricing
        </Link>

        {/* Bottom tagline */}
        <p className="mt-auto text-[11px] text-white/20 text-center">
          © 2026 NexoraStudio. All rights reserved.
        </p>
      </aside>
    </>
  );
}
