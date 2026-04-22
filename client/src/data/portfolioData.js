export const personalInfo = {
  name: "Gungun Rathore",
  title: "Full Stack Developer",
  tagline: "Building elegant, scalable web experiences.",
  bio: "I'm a passionate Full Stack Developer with hands-on experience in building modern web applications from frontend to backend. I love crafting clean UI, designing robust APIs, and solving real-world problems with code. Whether it's a pixel-perfect React interface or a well-structured Node.js backend, I bring both creativity and engineering discipline to every project.",
  location: "India",
  email: "rathoregungun200406@gmail.com",
  github: "https://github.com/Gunnu-20",
  linkedin: "https://linkedin.com/in/gungun-rathore-2197143a1",
  // resumeUrl: "#",                        // ← apna resume link
};

export const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Redux", "Tailwind CSS", "Three.js", "Frontend Design"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST API", "Python (Basic)"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Mongoose"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "Vercel", "Render"],
  },
];

export const projects = [
  {
    id: 1,
    title: "DogStudio - Website",
    description:
      "A pixel-perfect clone of the award-winnig DogStudio agency website, featuring immersive 3D visuals,smooth animations, and interactive UI elements.",
    tech: ["React", "Three.js", "React Three Fiber", "GSAP", "React Three Drei", "Tailwind CSS"],
    github: "https://github.com/Gunnu-20/DogStudio-Website",
    live: "https://dog-studio-clone.netlify.app",
    color: "from-violet-600/20 to-purple-900/20",
    accent: "#8b5cf6",
  },
  {
    id: 2,
    title: "Spendly - Expense Tracker",
    description:
      "A full-stack, MERN expense tracker app with JWTauth, real-time dashboard, budget alerts, and CSV exports.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Recharts.js"],
    github: "https://github.com/Gunnu-20/Expense-Tracker",
    live: "https://expense-tracker-client-zf2q.onrender.com/login",
    color: "from-cyan-600/20 to-teal-900/20",
    accent: "#06b6d4",
  },
  {
    id: 3,
    title: "CodeWprld - 3D Learning Simulator",
    description:
      "A 3D learning simulator with WASD movement, real-rooms, and a custonm character-features per-language quizzes and progress tracking.",
    tech: ["React", "Three.js", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/Gunnu-20/3D-code-wprld-simulator",
    live: "https://threed-code-wprld-simulator-frontend.onrender.com",
    color: "from-rose-600/20 to-pink-900/20",
    accent: "#f43f5e",
  },
  {
    id: 4,
    title: "Notes - Notes App ",
    description:
      "A full-stack notes app with JWTauth, theme-toggle, and note history tracking. Built with MERN stack and sytyled with Tailwind CSS.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Gunnu-20/NotesApp",
    live: "https://notesapp-frontend-emnk.onrender.com",
    color: "from-amber-600/20 to-orange-900/20",
    accent: "#f59e0b",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];