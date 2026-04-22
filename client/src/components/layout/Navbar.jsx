import { useState, useEffect } from "react";
import { navLinks, personalInfo } from "../../data/portfolioData";
import { useScrollSpy } from "../../hooks/useAnimations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_0_30px_rgba(139,92,246,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span
          className="font-bold text-xl tracking-tight cursor-pointer"
          style={{ fontFamily: "'Playfair Display', serif" }}
          onClick={() => handleNav("#home")}
        >
          <span className="text-white">G</span>
          <span className="text-violet-400">.</span>
          <span className="text-white/60 text-base font-normal">Rathore</span>
        </span>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                  active === link.href.slice(1)
                    ? "text-violet-400"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-violet-400 transition-all duration-300 ${
                    active === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        
          <a
              href={personalInfo.resumeUrl}
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-violet-500/40 text-violet-400 text-sm font-medium hover:bg-violet-500/10 hover:border-violet-400 transition-all duration-300"
        >
          Resume
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>

        <button
          className="md:hidden text-white/70 hover:text-white transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`text-left text-sm font-medium transition-colors ${
                active === link.href.slice(1) ? "text-violet-400" : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}