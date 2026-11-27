import { useState } from "react";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";
import stackImage from "../assets/about/profile.png";
import { aboutContent, personalInfo, socialLinks } from "../data/portfolioData";

export default function About() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* ── Left — ID badge on a lanyard ──────────────── */}
        <motion.div
          className="md:w-[350px] shrink-0 relative pt-32"
          initial={{ y: -300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ type: "spring", stiffness: 110, damping: 9, mass: 1.1 }}
        >
          {/* Lanyard string */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black rounded-b-sm" />

          {/* Clip */}
          <div className="absolute top-[128px] left-1/2 -translate-x-1/2 w-10 h-5 bg-gray-400 rounded-sm z-10" />

          {/* ── Flip card wrapper ───────────────────────── */}
          <button
            type="button"
            aria-label="Flip ID card"
            onClick={() => setFlipped((prev) => !prev)}
            className="relative w-full max-w-[280px] mx-auto block -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] focus:outline-none cursor-pointer"
          >
            <div
              className="relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]"
              style={{
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* ── FRONT face — photo badge ─────────────── */}
              <div className="absolute inset-0 [backface-visibility:hidden] bg-gray-900 rounded-2xl p-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                {/* Cutout slot */}
                <div className="w-12 h-2 bg-gray-700 rounded-full mx-auto mb-3" />
                {/* Photo */}
                <img
                  src={stackImage}
                  alt="Kommindala Ramoji — Python Full Stack Developer, TAP Academy student"
                  className="w-full h-[calc(100%-20px)] rounded-xl object-cover object-top"
                />
              </div>

              {/* ── BACK face — visiting card ────────────── */}
              <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#141414] to-[#1f1f1f] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
                {/* Red top bar */}
                <div className="h-1.5 bg-[#ff2a2a] w-full shrink-0" />

                <div className="p-5 flex flex-col justify-between flex-1 text-left">
                  {/* Brand name */}
                  <div>
                    <p className="text-xl font-black text-white">
                      {personalInfo.brandName}
                      <span className="text-[#ff2a2a]">.</span>
                    </p>
                    {/* Title */}
                    <p className="text-xs uppercase tracking-widest text-red-400 mt-1">
                      {personalInfo.title}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/10 my-3" />

                  {/* Contact rows */}
                  <div className="space-y-2.5 flex-1">
                    {/* Email */}
                    {personalInfo.emails.primary && (
                      <a
                        href={`mailto:${personalInfo.emails.primary}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-xs text-white/85 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {personalInfo.emails.primary}
                      </a>
                    )}

                    {/* Phone */}
                    {personalInfo.phone && (
                      <a
                        href={`tel:${personalInfo.phone}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-xs text-white/85 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {personalInfo.phone}
                      </a>
                    )}

                    {/* Location */}
                    {personalInfo.location && (
                      <div className="flex items-center gap-2 text-xs text-white/85">
                        <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {personalInfo.location}
                      </div>
                    )}

                    {/* LinkedIn */}
                    {socialLinks.linkedin && (
                      <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-xs text-white/85 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4 text-red-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    )}

                    {/* GitHub */}
                    {socialLinks.github && (
                      <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-xs text-white/85 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4 text-red-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                  </div>

                  {/* QR code + caption */}
                  <div className="flex items-center gap-3 mt-3">
                    <div
                      className="bg-white rounded-lg p-2 shrink-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <QRCode
                        value={socialLinks.linkedin || `mailto:${personalInfo.emails.primary}`}
                        size={76}
                      />
                    </div>
                    <span className="text-[10px] text-white/60 leading-tight">
                      Scan to
                      <br />
                      connect
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </button>

          {/* Flip hint */}
          <p className="text-xs font-bold text-black/60 mt-4 text-center">
            Tap the card to flip ↻
          </p>
        </motion.div>

        {/* ── Right — heading + bio ─────────────────────── */}
        <div data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            {aboutContent.heading}
          </h2>
          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* ── Decorative 4-point stars ────────────────────── */}
      <svg
        className="absolute top-10 right-10 w-10 h-10 text-black opacity-30 animate-pulse"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>
      <svg
        className="absolute bottom-32 left-10 w-8 h-8 text-black opacity-30 animate-pulse"
        style={{ animationDelay: "1s" }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* ── Torn-paper divider ──────────────────────────── */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[120px] fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
