export const PERSONAL_INFO = {
  name: "SAKSHAM JAIN",
  title: "Computer Science & Engineering Student · Software Developer",
  institution: "SKIT Jaipur",
  graduation: "2025–2029",
  location: "Jaipur, India",
  timezone: "IST (UTC+5:30)",
  coordinates: "26.9124° N, 75.7873° E",
  email: "jainsaksham8b@gmail.com",
  github: "https://github.com/SakshamJ01",
  linkedin: "https://www.linkedin.com/in/saksham-jain-595987375",
  tagline: "I build practical software, explore new technologies, and turn ideas into working products.",
  aboutManifesto: "Turning curiosities into quiet, resilient software.",
  aboutParagraph1: "I’m a Computer Science & Engineering student at SKIT Jaipur who learns by creating. I enjoy turning ideas into working software, experimenting with new technologies, and understanding how systems work beneath the surface.",
  aboutParagraph2: "Whether designing intuitive interfaces or architecting decoupled backend services, my focus stays rooted in simplicity, deliberate detail, and lasting utility."
};

export const CHAPTERS = [
  {
    id: "dawn",
    number: "01",
    label: "DAWN",
    time: "06:20 AM",
    title: "DAWN — HERO",
    accentColor: "#E8C58D",
  },
  {
    id: "about",
    number: "02",
    label: "ABOUT",
    time: "07:45 AM",
    title: "MORNING — ABOUT",
    accentColor: "#D4A373",
  },
  {
    id: "skills",
    number: "03",
    label: "SKILLS",
    time: "10:15 AM",
    title: "DAYLIGHT — SKILLS",
    accentColor: "#D4A373",
  },
  {
    id: "projects",
    number: "04",
    label: "PROJECTS",
    time: "04:30 PM",
    title: "LATE AFTERNOON — PROJECTS",
    accentColor: "#F1CF98",
  },
  {
    id: "golden-hour",
    number: "05",
    label: "GOLDEN HOUR",
    time: "06:15 PM",
    title: "GOLDEN HOUR — SUNSET",
    accentColor: "#DF6A44",
  },
  {
    id: "contact",
    number: "06",
    label: "CONTACT",
    time: "10:45 PM",
    title: "NIGHT — CONTACT",
    accentColor: "#D9E3EA",
  },
];

export const SKILL_GROUPS = [
  {
    number: "01",
    name: "LANGUAGES",
    primary: ["C++", "TypeScript"],
    secondary: ["JavaScript", "Python"],
    offset: "pt-0",
  },
  {
    number: "02",
    name: "DEVELOPMENT",
    primary: ["React", "Node.js"],
    secondary: ["Express", "Vite"],
    offset: "md:translate-y-2",
  },
  {
    number: "03",
    name: "DATA & CLOUD",
    primary: ["MongoDB"],
    secondary: ["Firebase", "REST APIs"],
    offset: "md:-translate-y-1",
  },
  {
    number: "04",
    name: "TOOLS",
    primary: ["Git", "GitHub"],
    secondary: ["VS Code"],
    offset: "md:translate-y-3",
  },
];

export const PROJECTS = [
  {
    id: "assetarray",
    number: "01",
    type: "PRIMARY LANDMARK",
    name: "AssetArray",
    category: "FULL-STACK · FINTECH · AI",
    description: "Full-stack wealth-management platform combining portfolio analytics, risk intelligence, AI-assisted decision support, secure data workflows and cloud synchronization.",
    technologies: [
      "React Native / Expo",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "AI APIs"
    ],
    // Set path to real screenshot (e.g. "/assets/projects/assetarray/dashboard.png")
    // When empty ("") or missing, the graceful illustrative preview is rendered automatically
    image: "/assets/projects/assetarray/dashboard.png",
    liveUrl: "https://asset-array.web.app/",
    githubUrl: "https://github.com/SakshamJ01/AssetArray",
    accent: "#D4AF37",
    previewLabel: "ASSETARRAY / PORTFOLIO ANALYTICS PREVIEW"
  },
  {
    id: "simulation-alchemist",
    number: "02",
    type: "SECONDARY LANDMARK",
    name: "Simulation-Alchemist",
    category: "SCIENTIFIC COMPUTING · PYTHON · SYSTEMS",
    description: "Python simulation-composition framework connecting reaction-diffusion, physics and agent-based systems through a deterministic feedback loop.",
    technologies: [
      "Python",
      "py-pde",
      "Pymunk",
      "Mesa"
    ],
    // Keep empty to use fallback illustrative visualization (no fabricated screenshots)
    image: "",
    liveUrl: null,
    githubUrl: "https://github.com/SakshamJ01/Simulation-Alchemist",
    accent: "#91AEB7",
    previewLabel: "SIMULATION-ALCHEMIST / SIMULATION VISUALIZATION"
  },
  {
    id: "the-six-yards",
    number: "03",
    type: "SECONDARY LANDMARK",
    name: "The Six Yards",
    category: "EDITORIAL COMMERCE · FRONTEND · RETAIL",
    description: "Responsive fashion e-commerce experience built with React and Vite, featuring collections, product pages, cart functionality and persistent client-side state.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "React Router",
      "CSS"
    ],
    // Set path to real screenshot (e.g. "/assets/projects/six-yards/hero.png")
    // When empty ("") or missing, the graceful illustrative preview is rendered automatically
    image: "/assets/projects/six-yards/hero.png",
    liveUrl: "https://the-six-yards-a-fashion-website.vercel.app/",
    githubUrl: "https://github.com/SakshamJ01/THE-SIX-YARDS-A-Fashion-Website",
    accent: "#E7C49D",
    previewLabel: "THE SIX YARDS / COMMERCE PREVIEW"
  }
];
