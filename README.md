# Saksham Jain — Personal Portfolio

A cinematic, interactive portfolio website for Saksham Jain, a Computer Science & Engineering student at SKIT Jaipur and Software Developer.

🌐 **Live Website**: [https://saksham-jain-portfolio.vercel.app/](https://saksham-jain-portfolio.vercel.app/)

The application presents a continuous landscape experience that dynamically evolves through time of day as you scroll through projects, skills, and background.

---

## 🌅 Portfolio Concept

The core experience is built around a single, continuous landscape that transitions through seven distinct temporal chapters:

1. **01 — DAWN** (`06:20 AM`) — Hero & Introduction
2. **02 — MORNING** (`07:45 AM`) — About & Educational Background
3. **03 — DAYLIGHT** (`10:15 AM`) — Skills & Technical Capabilities
4. **04 — LATE AFTERNOON** (`04:30 PM`) — Projects Showcase
5. **05 — GOLDEN HOUR** (`06:15 PM`) — Sunset Atmospheric Transition
6. **06 — MOONLIGHT** (`10:45 PM`) — Contact & Direct Channels

---

## ✨ Key Features

- **Continuous Scroll-Driven Atmosphere**: Frame-by-frame mathematical linear interpolation of sky gradients, lighting, sun trajectory, aura, and moon phase.
- **Dynamic Water Canvas**: A 60 FPS HTML5 Canvas loop rendering continuous ambient water waves with organic horizon feathering.
- **Atmosphere-Aware Navigation**: Adaptive sticky header that dynamically updates active chapter states, color tokens, and metadata telemetry.
- **Architectural Project Showcase**: Real application screenshots, verified project documentation, and fallback technical visualizers.
- **Accessibility & Reduced Motion**: WCAG 2.1 AA focus rings, semantic HTML structure, keyboard navigation, and full `@media (prefers-reduced-motion: reduce)` support.
- **Optimized Performance**: Component memoization (`React.memo`), lazy image loading (`decoding="async"`), and decoupled render loops.

---

## 🛠️ Tech Stack

- **Core**: React 18, JavaScript (ES6+), Vite 6
- **Styling**: Tailwind CSS, Vanilla CSS (Glassmorphism, custom scrollbars)
- **Canvas / Animation**: HTML5 2D Canvas API, Linear RGB Interpolation engine
- **Fonts**: Cormorant Garamond, Playfair Display, Plus Jakarta Sans, Fira Code

---

## 🚀 Featured Projects

### 01. AssetArray
A wealth management platform combining portfolio analytics, risk intelligence, AI-assisted decision support, secure data workflows, and cloud synchronization.
- **Live Demo**: [https://asset-array.web.app/](https://asset-array.web.app/)
- **GitHub Repository**: [https://github.com/SakshamJ01/AssetArray](https://github.com/SakshamJ01/AssetArray)

### 02. Simulation-Alchemist
A Python simulation composition framework connecting reaction-diffusion partial differential equations (PDEs), 2D physics engines, and agent-based models through a deterministic feedback loop.
- **GitHub Repository**: [https://github.com/SakshamJ01/Simulation-Alchemist](https://github.com/SakshamJ01/Simulation-Alchemist)

### 03. The Six Yards
A responsive fashion e-commerce storefront featuring curated collection galleries, bespoke product workflows, and client-side state management.
- **Live Demo**: [https://the-six-yards-a-fashion-website.vercel.app/](https://the-six-yards-a-fashion-website.vercel.app/)
- **GitHub Repository**: [https://github.com/SakshamJ01/THE-SIX-YARDS-A-Fashion-Website](https://github.com/SakshamJ01/THE-SIX-YARDS-A-Fashion-Website)

---

## 📂 Repository Structure

```text
├── public/
│   ├── assets/projects/     # Project screenshots and assets
│   └── favicon.svg          # Monogram vector favicon
├── src/
│   ├── components/
│   │   ├── Chapters/        # Section components (Hero, About, Skills, Projects, Contact)
│   │   ├── Landscape/       # Continuous atmosphere and HTML5 water canvas components
│   │   └── Navigation/      # Adaptive sticky header and mobile menu
│   ├── data/
│   │   └── portfolioData.js # Centralized portfolio content objects
│   ├── hooks/
│   │   └── useScrollProgress.js # Scroll tracking and interpolation hooks
│   ├── styles/
│   │   └── index.css        # Core design tokens and global styles
│   ├── utils/
│   │   └── atmosphere.js   # Mathematical linear color interpolation engine
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

---

## 💻 Local Development Setup

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SakshamJ01/SAKSHAM-JAIN-PORTFOLIO.git
   cd SAKSHAM-JAIN-PORTFOLIO
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000/` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## ♿ Accessibility & Performance

- **Semantic HTML**: Formatted with `<header>`, `<main>`, `<section>`, `<footer>`, and proper heading hierarchy (`<h1>` through ``<h3>`).
- **Keyboard Navigation**: Interactive elements have visible focus indicators (`:focus-visible`) and ARIA labels.
- **Motion Controls**: Disables non-essential animations when `prefers-reduced-motion: reduce` is enabled in system settings.
- **Production Build**: Zero development logging, production-optimized Vite output (`dist/`).

---

## 📬 Contact & Links

- **Live Portfolio**: [https://saksham-jain-portfolio.vercel.app/](https://saksham-jain-portfolio.vercel.app/)
- **Author**: Saksham Jain
- **Email**: [jainsaksham8b@gmail.com](mailto:jainsaksham8b@gmail.com)
- **GitHub**: [https://github.com/SakshamJ01](https://github.com/SakshamJ01)
- **LinkedIn**: [https://www.linkedin.com/in/saksham-jain-595987375](https://www.linkedin.com/in/saksham-jain-595987375)
- **Location**: Jaipur, India (IST / UTC+5:30)
