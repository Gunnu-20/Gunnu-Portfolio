import { skills } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useAnimations";

const techColors = {
  "HTML5": "#e34c26", "CSS3": "#264de4", "JavaScript": "#f0db4f",
  "React": "#61dafb", "Redux": "#764abc", "Tailwind CSS": "#38bdf8",
  "Frontend Design": "#f472b6", "Node.js": "#68a063", "Express.js": "#ffffff",
  "REST API": "#ff6c37", "Python (Basic)": "#3572A5",
  "MongoDB": "#47a248", "Mongoose": "#880000",
  "Git": "#f05032", "GitHub": "#ffffff",
  "Vercel": "#ffffff", "Render": "#46e3b7",
};

const categoryColors = {
  "Frontend":       { from: "#7c3aed", to: "#4f46e5", glow: "rgba(124,58,237,0.2)" },
  "Backend":        { from: "#0891b2", to: "#0e7490", glow: "rgba(8,145,178,0.2)" },
  "Database":       { from: "#059669", to: "#047857", glow: "rgba(5,150,105,0.2)" },
  "Tools & DevOps": { from: "#d97706", to: "#b45309", glow: "rgba(217,119,6,0.2)" },
};

export default function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" className="relative py-32 bg-[#07070d] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`flex items-center gap-4 mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <span className="text-violet-400 text-sm font-mono tracking-widest uppercase">02 / Skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
        </div>

        <h2 className={`text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ fontFamily: "'Playfair Display', serif" }}>
          My Tech Stack
        </h2>
        <p className={`text-white/40 text-lg mb-14 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Technologies I use to build, scale, and ship.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, i) => {
            const colors = categoryColors[category.category] || categoryColors["Frontend"];
            return (
              <div
                key={category.category}
                className={`p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + i * 80}ms`, boxShadow: visible ? `0 0 40px ${colors.glow}` : "none" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-2 h-8 rounded-full" style={{ background: `linear-gradient(to bottom, ${colors.from}, ${colors.to})` }} />
                  <h3 className="text-white font-semibold text-lg">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((tech) => (
                    <div key={tech} className="group flex items-center gap-2 px-3 py-2 rounded-lg border border-white/5 bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.06] transition-all duration-300 cursor-default">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: techColors[tech] || "#a78bfa" }} />
                      <span className="text-white/60 group-hover:text-white/90 text-sm font-medium transition-colors">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-12 p-6 rounded-2xl border border-white/5 bg-white/[0.01] transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-white/30 text-sm text-center font-mono tracking-wide">
            Always learning · Currently exploring: Advanced System Design · Microservices · Docker
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}