import { personalInfo } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useAnimations";
import gunImage from "../assets/gun1.jpeg";

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "7+", label: "Technologies" },
  { value: "100%", label: "Clean Code" },
  { value: "∞", label: "Learning" },
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="relative py-32 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className={`flex items-center gap-4 mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <span className="text-violet-400 text-sm font-mono tracking-widest uppercase">01 / About</span>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Photo */}
          <div className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-3 rounded-2xl opacity-60" style={{ background: "linear-gradient(135deg, #7c3aed20, #06b6d420)", border: "1px solid rgba(139,92,246,0.2)" }} />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 bg-[#111118]">

                  <img
                    src={gunImage}
                    alt="Gungun Rathore"
                    className="w-full h-full object-cover object-top"
                  />
               
                <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center text-4xl font-bold text-white border-2 border-violet-500/30" style={{ background: "linear-gradient(135deg, #7c3aed40, #4f46e540)" }}>
                    GR
                  </div>
                  <p className="text-white/30 text-sm font-mono">Add your photo</p>
                  <p className="text-white/20 text-xs">public/photo.jpg</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl border border-white/10 backdrop-blur-sm" style={{ background: "rgba(15,15,25,0.9)" }}>
                <p className="text-violet-400 text-xs font-mono">Full Stack Dev</p>
                <p className="text-white text-sm font-semibold">Available for Work</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 mt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-violet-500/30 transition-colors duration-300">
                  <div className="text-2xl font-bold mb-1" style={{ background: "linear-gradient(135deg, #a78bfa, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {stat.value}
                  </div>
                  <div className="text-white/30 text-xs leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Bio */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-5xl font-bold mb-6 text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Who Am I?
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-6">{personalInfo.bio}</p>
            <p className="text-white/35 leading-relaxed mb-10">
              When I'm not coding, I'm exploring new design patterns, contributing to open source projects, and continuously expanding my knowledge in frontend architecture and scalable systems.
            </p>

            <div className="space-y-3 mb-10">
              {[
                { icon: "📍", label: "Location", value: personalInfo.location },
                { icon: "📧", label: "Email", value: personalInfo.email },
                { icon: "🔗", label: "GitHub", value: "github.com/gungunrathore" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-base">{item.icon}</span>
                  <span className="text-white/30 text-sm w-20">{item.label}</span>
                  <span className="text-white/60 text-sm">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white text-sm hover:-translate-y-0.5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white/70 text-sm border border-white/10 hover:border-cyan-500/40 hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}