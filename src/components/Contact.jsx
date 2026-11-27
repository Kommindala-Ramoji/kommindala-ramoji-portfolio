import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  emailjsConfig,
  personalInfo,
  socialLinks,
} from "../data/portfolioData";

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  // Parallax for the giant background word
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  // ── Form submission ──────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const firstName = formRef.current.querySelector("#firstName").value.trim();
    const lastName = formRef.current.querySelector("#lastName").value.trim();
    const email = formRef.current.querySelector("#email").value.trim();
    const message = formRef.current.querySelector("#message").value.trim();

    // Basic validation
    if (!firstName || !email || !message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    // Populate hidden template fields if needed
    const fullName = `${firstName} ${lastName}`.trim();
    const setFieldValue = (name, val) => {
      const field = formRef.current.querySelector(`[name="${name}"]`);
      if (field) field.value = val;
    };
    setFieldValue("from_name", fullName);
    setFieldValue("name", fullName);
    setFieldValue("reply_to", email);
    setFieldValue("to_email", personalInfo.emails.primary);
    setFieldValue("to_name", personalInfo.name);

    const { serviceId, templateId, publicKey } = emailjsConfig;

    const isConfigured =
      serviceId &&
      templateId &&
      publicKey &&
      serviceId !== "YOUR_EMAILJS_SERVICE_ID" &&
      templateId !== "YOUR_EMAILJS_TEMPLATE_ID" &&
      publicKey !== "YOUR_EMAILJS_PUBLIC_KEY";

    // Direct mailto sender helper
    const triggerMailto = () => {
      const mailBody = encodeURIComponent(
        `From: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${mailBody}`,
        "_blank"
      );
      setStatus("success");
      setErrorMessage("");
      formRef.current.reset();
    };

    if (!isConfigured) {
      triggerMailto();
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    // Try EmailJS first; if suspended/blocked/failed, seamlessly open mailto so you always receive the message
    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });
      setStatus("success");
      setErrorMessage("");
      formRef.current.reset();
    } catch (err) {
      console.warn("EmailJS service unavailable, routing via direct email fallback:", err);
      // Account suspended or API error: fall back directly to mailto so the user's message is delivered!
      triggerMailto();
    }

    setTimeout(() => {
      setStatus("idle");
    }, 4000);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* ── Giant parallax background word ──────────────── */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/[0.03]"
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* ── Red contact card ───────────────────────────── */}
      <div
        className="relative z-10 bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] ml-auto p-8 md:p-16"
        data-aos="fade-up"
      >
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <span className="text-sm uppercase tracking-[0.2em] font-bold text-white/80">
            Reach Me
          </span>
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              DM on Instagram
            </a>
          )}
        </div>

        {/* ── Contact form ──────────────────────────────── */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-12"
        >
          {/* Hidden fields for EmailJS template compatibility */}
          <input type="hidden" name="from_name" value="" />
          <input type="hidden" name="name" value="" />
          <input type="hidden" name="reply_to" value="" />
          <input type="hidden" name="to_email" value={personalInfo.emails.primary} />
          <input type="hidden" name="to_name" value={personalInfo.name} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left column — inputs */}
            <div className="flex flex-col gap-8">
              <input
                id="firstName"
                name="first_name"
                type="text"
                required
                placeholder="First Name *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/60 focus:border-white focus:outline-none transition-colors"
              />
              <input
                id="lastName"
                name="last_name"
                type="text"
                placeholder="Last Name"
                className="bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/60 focus:border-white focus:outline-none transition-colors"
              />
              <input
                id="email"
                name="user_email"
                type="email"
                required
                placeholder="Email Address *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/60 focus:border-white focus:outline-none transition-colors"
              />
            </div>

            {/* Right column — textarea */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your Message *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/60 focus:border-white focus:outline-none transition-colors resize-none min-h-[120px] flex-1"
              />
            </div>
          </div>

          {/* Permission checkbox */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              className="mt-1 w-4 h-4 accent-white shrink-0"
            />
            <span className="text-sm text-white/70 leading-relaxed">
              I agree that my submitted data may be collected and stored to
              respond to my inquiry.
            </span>
          </label>

          {/* Info note */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-white/60">
            <p>
              Your message will be sent directly to my inbox. I typically
              respond within 24–48 hours.
            </p>
            <a
              href={`mailto:${personalInfo.emails.primary}?subject=Urgent – Portfolio Contact`}
              className="underline underline-offset-4 text-white/80 hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Urgent? Email directly →
            </a>
          </div>

          {/* Submit button */}
          <div>
            <button
              type="submit"
              disabled={status === "sending"}
              className={`group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border-2 font-semibold text-lg transition-all duration-300 cursor-pointer ${
                status === "sending"
                  ? "border-white/20 text-white/50 cursor-wait"
                  : status === "success"
                    ? "border-green-400 text-green-400"
                    : status === "error"
                      ? "border-red-900 bg-red-900/30 text-white"
                      : "border-white text-white hover:bg-white hover:text-[#ff2a2a]"
              }`}
            >
              {status === "sending" && (
                <>
                  {/* Spinner */}
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              )}
              {status === "success" && "Sent Successfully ✓"}
              {status === "error" && "Failed — Try Again"}
              {status === "idle" && (
                <>
                  Send Message
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </>
              )}
            </button>
            {errorMessage && (
              <p className="mt-3 text-sm bg-black/40 border border-white/20 text-white p-3 rounded-lg max-w-md font-mono">
                Error detail: {errorMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
