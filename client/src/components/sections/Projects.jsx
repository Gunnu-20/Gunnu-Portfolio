import { projects } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useAnimations";

export default function Projects() {
  const { ref, visible } = useReveal();

  return (
    <section id="projects" className="relative py-32 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`flex items-center gap-4 mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <span className="text-violet-400 text-sm font-mono tracking-widest uppercase">03 / Projects</span>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
        </div>

        <h2 className={`text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ fontFamily: "'Playfair Display', serif" }}>
          Featured Work
        </h2>
        <p className={`text-white/40 text-lg mb-14 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Projects that showcase my full-stack capabilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`group relative p-7 rounded-2xl border border-white/5 bg-gradient-to-br ${project.color} hover:border-white/15 transition-all duration-500 hover:-translate-y-1 overflow-hidden cursor-default ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" style={{ boxShadow: `inset 0 0 60px ${project.accent}15` }} />
              <span className="absolute top-4 right-6 text-7xl font-black opacity-5 select-none" style={{ color: project.accent }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="w-3 h-3 rounded-full mb-5 shadow-lg" style={{ background: project.accent, boxShadow: `0 0 12px ${project.accent}60` }} />
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full text-xs font-medium border border-white/5 bg-white/5 text-white/50">{t}</span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors duration-200">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Code
                </a>
                <a href={project.live}
                  className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                  style={{ color: project.accent + "99" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = project.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = project.accent + "99")}
                >
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <a href="https://github.com/gungunrathore" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/40 hover:text-violet-400 text-sm font-medium transition-colors duration-300 border-b border-transparent hover:border-violet-400 pb-0.5">
            View all projects on GitHub
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}