import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { skillsContent } from "../data/portfolioData";

// SVG path shared by both guide and animated layers (desktop)
const desktopPath =
  "M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200";

// Desktop card positions, tilts and AOS config
const cardConfigs = [
  {
    className:
      "md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6",
    aos: "fade-left",
    delay: 100,
  },
  {
    className:
      "md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6",
    aos: "fade-right",
    delay: 200,
  },
  {
    className:
      "md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3",
    aos: "fade-left",
    delay: 300,
  },
  {
    className:
      "md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3",
    aos: "fade-right",
    delay: 400,
  },
];

// ── Hanging tag card ───────────────────────────────────────
function TagCard({
  number,
  title,
  text,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef,
}) {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef(null);

  // Activate the card when the animated path tip passes it
  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!cardRef.current || !containerRef?.current) return;
    const containerH = containerRef.current.offsetHeight;
    const containerTop = containerRef.current.getBoundingClientRect().top;
    const cardTop =
      cardRef.current.getBoundingClientRect().top - containerTop;
    setIsActive(latest * containerH >= cardTop + 50);
  });

  return (
    <div
      ref={cardRef}
      className={`w-72 sm:w-80 ${className}`}
      data-aos={aosType}
      data-aos-delay={aosDelay}
    >
      <div
        className={`rounded-[2rem] p-2 transition-all duration-700 ${
          isActive
            ? "bg-[#ff2a2a] shadow-[0_10px_40px_rgba(255,42,42,0.3)]"
            : "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
        }`}
      >
        {/* Punched hole */}
        <div className="flex justify-center pt-2">
          <div
            className={`w-6 h-6 rounded-full border-4 transition-colors duration-700 ${
              isActive ? "border-red-300/50" : "border-gray-300"
            }`}
          />
        </div>

        {/* Inner panel */}
        <div
          className={`rounded-[1.5rem] mt-8 p-8 min-h-[220px] transition-colors duration-700 ${
            isActive
              ? "bg-red-700/50 text-white"
              : "bg-[#f4f4f4] text-gray-700"
          }`}
        >
          <span
            className={`text-5xl font-black italic font-serif transition-colors duration-700 ${
              isActive ? "text-white/30" : "text-gray-200"
            }`}
          >
            {number}
          </span>
          <h3
            className={`text-2xl font-black mt-2 transition-colors duration-700 ${
              isActive ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm mt-3 leading-relaxed transition-colors duration-700 ${
              isActive ? "text-white/80" : "text-gray-500"
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Services / Process section ─────────────────────────────
export default function Services() {
  const containerRef = useRef(null);

  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* ── Header ────────────────────────────────────── */}
        <div
          className="md:absolute md:top-10 md:left-0 md:w-[450px] z-20 mb-12 md:mb-0"
          data-aos="fade-up"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-xs font-bold uppercase tracking-widest mb-4">
            {skillsContent.badge}
          </span>
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900">
              {skillsContent.heading}
            </h2>
            {/* Hand-drawn arrow */}
            <svg
              className="absolute -bottom-6 -right-10 w-10 h-10 text-gray-400"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </div>
          <p className="text-gray-500 mt-6">{skillsContent.description}</p>
        </div>

        {/* ── Desktop SVG path (hidden on mobile) ───────── */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="path-mask">
              <motion.path
                d={desktopPath}
                stroke="white"
                strokeWidth="20"
                fill="none"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* Faint guide path */}
          <path
            d={desktopPath}
            stroke="#cbd5e1"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8 10"
          />

          {/* Animated dashed path (revealed by mask) */}
          <path
            d={desktopPath}
            stroke="black"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* ── Mobile SVG path (hidden on desktop) ───────── */}
        <svg
          className="md:hidden absolute left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="path-mask-mobile">
              <motion.path
                d="M 2,0 L 2,100"
                stroke="white"
                strokeWidth="20"
                fill="none"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* Faint guide path */}
          <path
            d="M 2,0 L 2,100"
            stroke="#cbd5e1"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />

          {/* Animated dashed path */}
          <path
            d="M 2,0 L 2,100"
            stroke="black"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* ── Cards ─────────────────────────────────────── */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, i) => (
            <TagCard
              key={card.number}
              number={card.number}
              title={card.title}
              text={card.text}
              className={cardConfigs[i]?.className || ""}
              aosType={cardConfigs[i]?.aos || "fade-up"}
              aosDelay={cardConfigs[i]?.delay || 0}
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}
        </div>

        {/* ── Hand-written end note ──────────────────────── */}
        <p className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none">
          {skillsContent.endText}
        </p>
      </div>
    </section>
  );
}
