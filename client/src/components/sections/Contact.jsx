import { useState } from "react";
import { personalInfo } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useAnimations";

export default function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://gunnu-portfolio-server.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Message send error:", err);
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-[#07070d] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        <div className={`flex items-center gap-4 mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <span className="text-violet-400 text-sm font-mono tracking-widest uppercase">04 / Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Let's Build
              <br />
              <span style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Something Great
              </span>
            </h2>
            <p className="text-white/40 leading-relaxed mb-10">
              Have a project in mind, or just want to connect? I'm always open to interesting conversations and new opportunities.
            </p>

            <div className="space-y-4">
              {[
                {
                  href: `mailto:${personalInfo.email}`,
                  label: "rathoregungun200406@gmail.com",
                  color: "text-violet-400",
                  icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                },
                {
                  href: personalInfo.github,
                  label: "github.com/Gunnu-20",
                  color: "text-white",
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>,
                },
                {
                  href: personalInfo.linkedin,
                  label: "linkedin.com/in/gungun-rathore-2197143a1",
                  color: "text-cyan-400",
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
                },
              ].map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.05] transition-all duration-300 group">
                  <div className={`${item.color} opacity-60 group-hover:opacity-100 transition-opacity`}>{item.icon}</div>
                  <span className="text-white/50 group-hover:text-white/80 text-sm transition-colors">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-white/40 text-xs font-mono mb-2 tracking-widest uppercase">{field.label}</label>
                  <input
                    type={field.type} name={field.name} value={form[field.name]}
                    onChange={handleChange} placeholder={field.placeholder} required
                    className="w-full px-4 py-3 rounded-xl border border-white/5 bg-white/[0.03] text-white/80 placeholder-white/20 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all duration-300"
                  />
                </div>
              ))}
              <div>
                <label className="block text-white/40 text-xs font-mono mb-2 tracking-widest uppercase">Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project..." required rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-white/5 bg-white/[0.03] text-white/80 placeholder-white/20 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                />
              </div>
              <button type="submit"
                className={`w-full py-4 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] ${sent ? "bg-emerald-600" : ""}`}
                style={!sent ? { background: "linear-gradient(135deg, #7c3aed, #4f46e5)" } : {}}
              >
                {sent ? "✓ Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/5 text-center">
          <p className="text-white/20 text-sm font-mono">
            Designed & Built by <span className="text-violet-400">Gungun Rathore</span> · React · Tailwind CSS v4
          </p>
        </div>
      </div>
    </section>
  );
}