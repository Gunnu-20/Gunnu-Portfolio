import { personalInfo } from "../../data/portfolioData";
import { useTypewriter, useReveal } from "../../hooks/useAnimations";

export default function Hero() {
  const { ref, visible } = useReveal();
  const typed = useTypewriter(
    ["Full Stack Developer", "React/Redux", "Node.js", "Frontend Design"],
    100,
    2200
  );

  const handleScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 sm:left-1/3 w-48 sm:w-96 h-48 sm:h-96 bg-violet-600/15 rounded-full blur-[80px] sm:blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 sm:right-1/3 w-40 sm:w-80 h-40 sm:h-80 bg-cyan-600/10 rounded-full blur-[60px] sm:blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[600px] h-72 sm:h-[600px] bg-violet-900/5 rounded-full blur-[100px] sm:blur-[150px]" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Content */}
      <div ref={ref} className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 text-center">

        {/* Name */}
        <h1
          className={`text-5xl sm:text-6xl md:text-8xl font-bold mb-3 sm:mb-4 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="text-white">Gungun</span>
          <br />
          <span
            className="text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 50%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Rathore
          </span>
        </h1>

        {/* Typewriter */}
        <div
          className={`h-8 sm:h-10 mb-5 sm:mb-6 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-lg sm:text-xl md:text-2xl text-white/60 font-light tracking-wide">
            {typed}
            <span className="inline-block w-0.5 h-5 sm:h-6 bg-violet-400 ml-1 animate-pulse align-middle" />
          </span>
        </div>

        {/* Tagline */}
        <p
          className={`text-white/40 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {personalInfo.tagline}
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-700 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            onClick={() => handleScroll("#projects")}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-white text-sm sm:text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:-translate-y-0.5 active:scale-95"
            style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
          >
            <span className="flex items-center justify-center gap-2">
              View My Work
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </button>

          <button
            onClick={() => handleScroll("#contact")}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold border border-white/10 text-white/70 text-sm sm:text-base hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div
          className={`flex items-center justify-center gap-5 sm:gap-6 mt-10 sm:mt-14 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/40 hover:text-white active:text-white transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span className="text-sm font-medium">GitHub</span>
          </a>
          


          <div className="w-px h-4 bg-white/10" />

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/40 hover:text-cyan-400 active:text-cyan-400 transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce">
        <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-white/20">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}