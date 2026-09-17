# Saksham Jain Portfolio — Design System

## 01. Product / Experience

**Name:** Saksham Jain — Personal Portfolio

**Experience concept:** A calm, cinematic digital landscape that moves from dawn to daylight, golden hour, dusk, and moonlight as the visitor scrolls.

The portfolio should feel like **one continuous journey**, not a collection of disconnected website sections.

The visual metaphor is:

> **Flowing water + changing light + thoughtful software**

The site communicates three things at once:

- Saksham is a Computer Science & Engineering student who builds real software.
- He learns through experimentation and hands-on projects.
- His work can be presented with taste, restraint, and strong visual craft.

---

## 02. Core Principles

### Calm over flashy

The portfolio should feel premium because of composition, typography, atmosphere, and motion quality — not because of visual noise.

### Fluid over fragmented

Transitions between sections should feel continuous. Avoid hard visual resets between pages or sections.

### Editorial over dashboard

Use strong typography, whitespace, hierarchy, photography, and carefully aligned information. Avoid card grids that make the site look like a SaaS admin panel.

### Subtle motion over constant motion

Motion should reward scrolling and interaction without competing with the content.

### Real work over decorative claims

Project content should be based on actual work and real repository capabilities. Do not invent technologies, metrics, awards, job titles, or achievements.

---

## 03. Visual Language

### Overall mood

- Cinematic
- Natural
- Quietly confident
- Modern
- Editorial
- Technical but human
- Warm
- Slightly artistic
- Minimal

### Avoid

- Cyberpunk
- Neon gradients
- Excessive glassmorphism
- Heavy HUD interfaces
- Fake terminal overlays everywhere
- Excessive 3D objects
- Bouncy animation
- Generic developer-template aesthetics
- Skill percentages or fake mastery scores
- Huge blocks of copy

---

## 04. Color System

Use a restrained palette. Colors should blend gradually as the visitor scrolls through the day.

### Dawn / Hero

```text
Ivory              #F5F1E8
Mist               #E8EFF1
Morning Sky        #DCECF3
Soft Water         #AFCBD3
Sunlight           #F1CF98
Deep Ink           #14202D
Muted Ink          #687581
```

### Daylight

```text
Cloud              #F6F8F7
Clear Sky          #D7EAF1
Water              #9FC3CF
Warm Light         #F3D7AD
Deep Ink           #172433
Muted Ink          #687781
```

### Golden Hour

```text
Warm Sand          #E7C49D
Soft Apricot       #DFA486
Dusty Rose         #C98D8D
Late Water         #91AEB7
Deep Ink           #202735
```

### Dusk / Night

```text
Dusk               #5E6172
Deep Blue          #283247
Night               #111827
Dark Water         #182536
Moonlight          #D9E3EA
Soft Text          #B8C3CC
```

### Accent use

Warm gold is an **accent**, not a primary interface color.

Use it sparingly for:
- small dots
- active indicators
- tiny labels
- sunlight effects
- subtle hover states

---

## 05. Typography

Use two complementary families.

### Display / Editorial

Preferred direction:
- elegant high-contrast serif
- large, refined, slightly literary
- used for hero name and major statements

Examples of suitable families:
- Playfair Display
- Cormorant Garamond
- Instrument Serif
- DM Serif Display

### Interface / Body

Use a clean neutral sans-serif.

Examples:
- Inter
- Manrope
- Plus Jakarta Sans
- Geist

### Hierarchy

```text
Hero name             Very large / editorial serif
Section statement     Large / editorial serif
Section title         Small uppercase / sans-serif
Body                  Medium / readable sans-serif
Metadata              Small uppercase / tracked sans-serif
Navigation            Small / clean sans-serif
Buttons               Small uppercase / medium weight
```

### Tracking

Do not use extreme letter spacing for large headlines.

Use tracking primarily for tiny uppercase metadata and navigation.

---

## 06. Layout

### Desktop

- Full-width visual canvas
- Maximum readable content width: approximately 1100–1250px
- Large horizontal margins
- Strong use of negative space
- Avoid dense card walls

### Grid

Use a simple editorial grid, generally:

```text
12-column desktop grid
8-column tablet grid
4-column mobile grid
```

### Section rhythm

Sections should feel spacious and continuous.

Preferred vertical rhythm:

```text
Hero
↓
slow environmental transition
↓
Content
↓
visual breathing space
↓
next content chapter
```

Do not stack every section immediately after the previous one.

---

## 07. Navigation

Navigation should remain understated.

Recommended items:

```text
ABOUT
SKILLS
PROJECTS
CONTACT
```

### Desktop

Use simple text navigation. Avoid a large rounded container or pill unless it is extremely subtle.

### Mobile

Use a minimal menu trigger. Keep the interface quiet and unobtrusive.

### Active state

Use:
- slightly darker text
- tiny warm-gold dot or line
- subtle opacity change

Do not use large underlines, glowing borders, or animated pills.

---

## 08. Hero — Dawn

### Purpose

Immediately establish identity and the landscape concept.

### Content

```text
SAKSHAM JAIN

Computer Science & Engineering Student · Software Developer

I build software, explore ideas, and learn by making things real.

[ Explore My Work ]   [ GitHub ]
```

### Environment

- Pale morning sky
- Soft warm sun
- Atmospheric haze
- Calm water in lower viewport
- Very subtle reflection

### Small details

One restrained environmental label may appear, e.g.:

```text
DAWN · 06:40
```

Avoid multiple fake technical/HUD labels.

### Motion

- Water: continuous, very subtle
- Sun: slow positional drift
- Atmosphere: slight parallax
- Hero text: minimal entrance reveal

---

## 09. About — Morning

The About section is a continuation of dawn rather than a new visual theme.

### Main statement

```text
I like building things.
```

### Supporting copy

> I’m a Computer Science & Engineering student at SKIT Jaipur who learns by creating. I enjoy turning ideas into working software, experimenting with new technologies, and understanding how systems work beneath the surface.

### Information blocks

```text
EDUCATION
B.Tech — Computer Science & Engineering
SKIT Jaipur
Expected 2029

FOCUS
Software Development
Full-Stack Development
AI & Experiments

BASED IN
Jaipur, India
```

Avoid adding unverified availability or employment claims.

### Motion

Information can reveal upward by a few pixels with a soft opacity transition.

Nothing should bounce.

---

## 10. Skills — Daylight

### Heading

```text
What I work with.
```

### Groups

```text
LANGUAGES
C++
JavaScript
TypeScript
Python

DEVELOPMENT
React
Node.js
Express
Vite

DATA & CLOUD
MongoDB
Firebase
REST APIs

TOOLS
Git
GitHub
VS Code
```

### Rules

Do not show:
- fake percentages
- progress bars
- stars
- “expert / master” labels
- numerical proficiency claims

### Visual treatment

Skills should feel typographic and editorial. Some primary technologies can be larger while secondary tools remain quieter.

The section may use subtle vertical offsets to create a floating rhythm.

---

## 11. Projects — Golden Hour Transition

Projects are the visual centerpiece.

The landscape begins shifting toward warmer light as the visitor reaches this section.

### Project order

1. AssetArray
2. Simulation-Alchemist
3. THE SIX YARDS

This order moves from highly technical/full-stack work to scientific experimentation to visual/product-oriented frontend work.

### Project card philosophy

Use **large visual project presentations**, not small thumbnail grids.

Each project should communicate:

```text
PROJECT NAME
Category
Short description
Technology
Live / GitHub actions
Large visual preview
```

Cards may appear to float subtly above the landscape and cast a very soft reflection.

---

## 12. AssetArray Project

### Positioning

A substantial wealth-management software platform combining portfolio analytics, risk intelligence, AI-assisted decision support, cloud synchronization, and security-oriented workflows.

### Technology labels

```text
React Native / Expo
TypeScript
Node.js
Express
MongoDB
Firebase
AI APIs
```

### Visual direction

Keep the portfolio's natural visual system, but make this project slightly more technical through:

- structured data visualization
- restrained dark surfaces
- charts / analytical imagery
- precise typography

Do not turn the portfolio into a fintech dashboard.

### Actions

```text
VIEW LIVE
VIEW GITHUB
```

---

## 13. Simulation-Alchemist Project

### Positioning

A Python simulation composition framework coupling reaction-diffusion, rigid-body physics, and agent-based behavior.

### Technology labels

```text
Python
py-pde
Pymunk
Mesa
Scientific Computing
```

### Visual direction

This is the ideal place for a subtle generative visual.

Possible visual:
- slowly moving field
- particles
- flowing gradient field
- thin trajectories
- restrained motion responding to scroll

The effect should remain calm and scientific rather than looking like a game.

### Actions

```text
VIEW GITHUB
```

---

## 14. THE SIX YARDS Project

### Positioning

A React/Vite fashion e-commerce website focused on editorial presentation, collections, product browsing and persistent cart interaction.

### Technology labels

```text
React
Vite
JavaScript
React Router
CSS
localStorage
```

### Visual direction

Allow a subtle editorial/fashion influence within the same overall portfolio world.

Use:
- large imagery
- elegant typography
- generous whitespace
- warm tones
- minimal UI

This project can become the transition point between technical project showcases and sunset.

### Actions

```text
VIEW LIVE
VIEW GITHUB
```

---

## 15. Golden Hour / Sunset

As the project section progresses:

```text
Morning blue
→ neutral daylight
→ warm gold
→ peach
→ dusty rose
→ violet dusk
```

The transition should be gradual over multiple viewport heights.

The sun approaches the horizon rather than jumping to a new position.

Water becomes warmer and more reflective.

---

## 16. Contact — Moonlight

The final section should be calm and minimal.

### Heading

```text
LET’S BUILD
SOMETHING
INTERESTING.
```

### Supporting text

```text
Saksham Jain
Computer Science & Engineering
Jaipur, India
```

### Links

```text
GitHub
LinkedIn
Email
```

### Environment

- Deep navy sky
- Quiet dark water
- Soft moonlight
- Sparse stars
- Very subtle reflection

No large contact form unless later required.

---

## 17. Motion System

Motion is a core part of the experience, but it must remain restrained.

### Global motion rules

- Prefer smooth interpolation over hard transitions.
- Prefer fade + translate 8–24px over large entrance movements.
- Use long easing curves.
- Avoid elastic/bounce easing.
- Avoid constant motion on every element.

### Suggested motion timing

```text
Micro interaction      180–280ms
Text reveal             500–800ms
Section reveal          700–1100ms
Environmental change    1.2–2.5s
Sun / moon movement      Multi-second / scroll driven
Water                   Continuous loop
```

### Water

Water should be the signature animation.

Preferred behavior:
- slow flowing distortion
- mild horizontal movement
- tiny vertical shimmer
- soft reflection of sun/moon
- no obvious looping seam

The water must remain visually subtle enough that text stays readable.

### Sun

The sun should move only slightly with scroll.

Use:
- position
- scale
- opacity
- glow intensity

Do not make it behave like a clock hand.

### Moon

The moon appears gradually around dusk.

Use:
- opacity fade
- vertical parallax
- very subtle glow

### Environment transitions

The environment should be driven by normalized scroll progress.

Conceptual timeline:

```text
0.00  Dawn
0.25  Morning
0.50  Daylight
0.70  Golden hour
0.85  Dusk
1.00  Night
```

---

## 18. Interaction

### Cursor

Desktop only:
- subtle atmospheric response
- very small parallax shifts
- optional water ripple on hover

Do not replace the cursor with a huge custom graphic.

### Project hover

Possible effects:
- 2–6px visual displacement
- image scale around 1.01–1.03
- very soft reflection/ripple
- button emphasis

### Buttons

Primary button:
- deep ink background
- ivory text
- subtle upward movement on hover

Secondary button:
- light/transparent surface
- dark text
- subtle border/opacity change

No glowing neon buttons.

---

## 19. Accessibility

The experience must remain usable without animation.

Support:
- `prefers-reduced-motion`
- keyboard navigation
- visible focus states
- sufficient text contrast
- readable body text
- semantic HTML
- descriptive image alt text
- reduced visual complexity on mobile if necessary

When reduced motion is enabled:
- freeze environmental movement
- replace scroll-linked motion with simple fades
- remove cursor-driven effects

---

## 20. Responsive Behavior

### Mobile priorities

Mobile should feel like the same landscape, not a collapsed desktop layout.

Prioritize:
1. typography
2. readability
3. landscape atmosphere
4. touch-friendly controls
5. project content

### Mobile adjustments

- Reduce hero name size while preserving impact.
- Stack About content vertically.
- Use fewer simultaneous decorative elements.
- Keep water visible but simpler.
- Reduce heavy background effects for performance.
- Keep buttons at comfortable touch size.

### Performance

Avoid loading unnecessary high-resolution media above the fold.

Lazy-load non-critical images.

Prefer CSS transforms and opacity for UI motion.

Keep canvas/WebGL effects lightweight and disable or simplify them on low-power/mobile devices when needed.

---

## 21. Content Rules

### Voice

The writing should be:
- direct
- thoughtful
- concise
- confident without bragging
- technically specific when needed

### Avoid

- “passionate about technology” filler
- “results-driven” corporate language
- unsupported superlatives
- fake metrics
- invented clients
- invented awards
- inflated skill claims

### Preferred tone

```text
I build software, explore ideas, and learn by making things real.
```

Use specific project descriptions instead of generic claims about being passionate.

---

## 22. Current Verified Project References

### AssetArray

Repository: `SakshamJ01/AssetArray`

Known stack/features include:
- React Native / Expo
- TypeScript
- Node.js / Express
- MongoDB Atlas
- Firebase Hosting
- AI integrations
- AES-256 client-side encryption workflows
- portfolio analytics
- risk metrics
- statement parsing
- automated testing
- cloud synchronization

### Simulation-Alchemist

Repository: `SakshamJ01/Simulation-Alchemist`

Known stack/features include:
- Python
- py-pde
- Pymunk
- Mesa
- deterministic simulation orchestration
- reaction-diffusion / morphogen field
- physics / wall agents
- validation and stability checks

### THE SIX YARDS

Repository: `SakshamJ01/THE-SIX-YARDS-A-Fashion-Website`

Known stack/features include:
- React
- Vite
- JavaScript
- React Router
- product / collection pages
- cart context
- localStorage persistence
- frontend testing setup
- live Netlify deployment

---

## 23. Implementation Direction

Recommended implementation stack:

```text
React + Vite
CSS
GSAP + ScrollTrigger
Lenis (optional)
React Three Fiber / WebGL (only where justified)
GitHub API (optional)
```

### Architecture principle

Keep the portfolio maintainable.

Suggested structure:

```text
src/
  components/
    Navigation/
    Landscape/
    Water/
    Sun/
    Moon/
    SectionIntro/
    ProjectShowcase/
    ProjectCard/
    Contact/
  pages/
    Home/
  data/
    projects.js
    skills.js
  styles/
    tokens.css
    global.css
    typography.css
```

Animation logic should be isolated from content data wherever practical.

---

## 24. Stitch Usage Rules

When generating new screens in Stitch:

1. Treat this file as the source of truth for the design language.
2. Preserve the existing serif + sans typography pairing.
3. Preserve the natural dawn-to-night palette.
4. Preserve the feeling of one continuous landscape.
5. Do not introduce a new UI style for individual sections.
6. Use project-specific visual treatments only as subtle variations.
7. Avoid decorative UI that does not communicate content or atmosphere.
8. Leave enough visual space for real motion to be implemented later.

### Stitch prompt pattern

For every new screen, start with:

> Continue the Saksham Jain portfolio using the existing DESIGN.md visual system. This screen is part of the same continuous natural landscape and must visually transition from the previous chapter rather than behaving like a separate webpage.

Then specify only what is unique to the new screen.

---

## 25. Design North Star

The final portfolio should make the visitor feel:

> **“This is a developer who cares about what he builds — and how it feels to experience it.”**

The site should be memorable through **restraint, continuity, typography, atmosphere, and beautifully controlled motion**.
