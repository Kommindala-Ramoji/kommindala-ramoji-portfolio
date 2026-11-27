import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";

// Navigation links — each scrolls to the matching section id
const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

// Pre-built mailto link for the "Hire Me" button
const hireMeMailto = `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry – Portfolio&body=Hello ${personalInfo.name},%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll to toggle the navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? "bg-[#ff2a2a] py-4"
          : isScrolled
            ? "bg-black/80 backdrop-blur-md py-4"
            : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* ── Logo ──────────────────────────────────────── */}
        <a href="#" className="text-white text-2xl font-black select-none">
          {personalInfo.brandName}
          <span className="text-[#ff2a2a]">.</span>
        </a>

        {/* ── Desktop links (centre) ────────────────────── */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="group relative text-white/80 hover:text-white font-medium transition-colors"
              >
                {link}
                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop "Hire Me" pill (right) ─────────────── */}
        <a
          href={hireMeMailto}
          className="hidden md:block px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-md hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300"
        >
          Hire Me
        </a>

        {/* ── Mobile hamburger button ───────────────────── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* ── Mobile dropdown menu ─────────────────────────── */}
      <div
        className={`md:hidden absolute top-full w-full bg-[#ff2a2a] shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <li key={link} className="border-b border-white/20 last:border-0">
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-white font-bold text-lg hover:text-black transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Full-width Hire Me button */}
        <div className="px-6 pb-6">
          <a
            href={hireMeMailto}
            onClick={() => setIsOpen(false)}
            className="block w-full text-center py-3 rounded-full bg-white text-[#ff2a2a] font-bold text-lg hover:bg-white/90 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
