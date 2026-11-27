import {
  personalInfo,
  socialLinks,
  footerContent,
  academy,
} from "../data/portfolioData";

// Current year for the copyright line (computed once outside render)
const currentYear = new Date().getFullYear();

export default function Footer() {

  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      {/* ── Top row ─────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto w-full">
        {/* Column 1 — taglines */}
        <div className="space-y-2">
          {footerContent.taglines.map((line, i) => (
            <p key={i} className="uppercase">
              {line}
            </p>
          ))}
        </div>

        {/* Column 2 — credential + view work */}
        <div className="flex flex-col items-start md:items-center space-y-2">
          <p className="uppercase">{footerContent.credential}</p>
          <a
            href="#projects"
            className="underline underline-offset-4 hover:text-white transition-colors"
          >
            View Work
          </a>
        </div>

        {/* Column 3 — availability + year */}
        <div className="flex flex-col items-start md:items-end space-y-2">
          <p className="uppercase">Available for opportunities</p>
          <p>{currentYear}</p>
        </div>
      </div>

      {/* ── Middle — huge brand name ────────────────────── */}
      <div className="py-20 md:py-24 overflow-hidden">
        <h2 className="text-center text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4]">
          {personalInfo.brandName.toLowerCase()}
        </h2>
      </div>

      {/* ── Bottom row ──────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto w-full items-end">
        {/* Column 1 — contact link + copyright + academy credit */}
        <div className="space-y-3">
          <a
            href="#contact"
            className="underline underline-offset-4 hover:text-white transition-colors uppercase"
          >
            Contact
          </a>
          <p className="text-white/60">{footerContent.copyright}</p>
          <p className="text-white/40">
            Trained at{" "}
            <a
              href={academy.url}
              target="_blank"
              rel="noopener"
              className="underline underline-offset-4 hover:text-white/70 transition-colors"
            >
              {academy.name}
            </a>
          </p>
        </div>

        {/* Column 2 — email + social icons */}
        <div className="flex flex-col items-start md:items-center space-y-4">
          <a
            href={`mailto:${personalInfo.emails.primary}`}
            className="underline underline-offset-4 hover:text-white transition-colors"
          >
            {personalInfo.emails.primary}
          </a>

          {/* Social icons row */}
          <div className="flex space-x-5">
            {/* GitHub */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#d4d4d4] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#d4d4d4] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#d4d4d4] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 3 — Explore GitHub */}
        <div className="flex flex-col items-start md:items-end">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-white transition-colors uppercase"
          >
            Explore My GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
