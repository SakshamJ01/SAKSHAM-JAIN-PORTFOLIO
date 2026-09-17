---
name: Dawn Horizon Portfolio
colors:
  surface: '#fbf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#fbf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#eae8e5'
  surface-container-highest: '#e4e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#44474c'
  inverse-surface: '#30312f'
  inverse-on-surface: '#f2f0ed'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#525f73'
  primary: '#000919'
  on-primary: '#ffffff'
  primary-container: '#142132'
  on-primary-container: '#7c899e'
  inverse-primary: '#bac7de'
  secondary: '#45636d'
  on-secondary: '#ffffff'
  secondary-container: '#c8e8f4'
  on-secondary-container: '#4b6973'
  tertiary: '#0f0700'
  on-tertiary: '#ffffff'
  tertiary-container: '#2d1d00'
  on-tertiary-container: '#a18351'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3fb'
  primary-fixed-dim: '#bac7de'
  on-primary-fixed: '#0f1c2d'
  on-primary-fixed-variant: '#3b485a'
  secondary-fixed: '#c8e8f4'
  secondary-fixed-dim: '#adcbd7'
  on-secondary-fixed: '#001f27'
  on-secondary-fixed-variant: '#2e4b55'
  tertiary-fixed: '#ffdeaa'
  tertiary-fixed-dim: '#e4c18a'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5a4317'
  background: '#fbf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2df'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '500'
    lineHeight: 84px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 44px
    fontWeight: '400'
    lineHeight: 54px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 30px
    fontWeight: '500'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-technical:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.12em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-tablet: 1.25rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-tablet: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2.25rem
  space-xl: 4rem
---

## Brand & Style

This design system expresses the synthesis of technical rigor and poetic refinement for Saksham Jain's software engineering portfolio. The narrative draws from the quiet atmosphere of dawn—first pale light hitting still water, morning fog lifting across a horizon, and the measured cadence of early sunlight.

The brand targets design-conscious tech leads, engineering recruiters, research collaborators, and venture partners who value polish, craftsmanship, and quiet confidence over loud visual gimmicks.

The design movement combines **Minimalism** with ethereal **Glassmorphic / Luminous** layers:
- Generous, deliberate negative space mirroring quiet morning air.
- Organic ambient gradients replicating dawn light diffusion across clean water.
- High typographic contrast pairing traditional editorial poise with contemporary technical precision.
- Restraint over decoration: surfaces breathe, borders are translucent, and interactions feel weighted, fluid, and serene.

## Colors

The palette captures dawn light shifting into day:
- **Canvas Neutral (`#FAF8F5`)**: Warm ivory foundation, softer and more organic than stark clinical white, lending an archival, literary paper feel.
- **Deep Quiet Navy (`#142132`)**: Primary text and ink color, grounding editorial hierarchy with high contrast, authority, and legibility.
- **Muted Horizon Teal (`#76949F`)**: Secondary tone used for subtle structural rules, secondary metadata, and quiet interactive states.
- **Sunlight Gold (`#E8C58D` / `#F4D59E`)**: Accent highlight evoking early solar warmth, used sparingly for status indicators, active states, key tags, and subtle focus halos.
- **Atmospheric Tints**:
  - Mist (`#BACEDF` at 15–30% opacity) for soft card borders and ethereal background bleeds.
  - Pale Sky (`#DDE9F4` at 40–60% opacity) for glass backdrops and elevated surface planes.

## Typography

The pairing reconciles editorial romance with engineering clarity:
- **Playfair Display**: Drives section titles, narrative statements, and the hero identity. Selected for its classical, fluid transitions between thicks and thins, lending a humanistic, literary elegance to an engineering portfolio.
- **Plus Jakarta Sans**: Manages all functional body text, navigation elements, interactive triggers, code metadata, and technical metric indicators. Its geometric, open counters offer crisp legibility even at compact sizes.
- **Hierarchy Notes**:
  - `label-technical` is always rendered in full uppercase with expanded tracking for technical specs, commit timestamps, and architecture labels.
  - Section subheaders balance italicized serif phrases with disciplined sans-serif tracking.

## Layout & Spacing

The portfolio employs a fixed maximum canvas of `1280px` framed within generous, intentional fluid margins to sustain an airy, gallery-grade presentation.

- **Grid Framework**:
  - **Desktop (≥ 1024px)**: 12-column layout, `gutter: 1.5rem`, `margin: 4rem`. Asymmetrical spans (e.g., 5-column narrative, 7-column project showcase) emphasize intentional editorial pacing.
  - **Tablet (768px – 1023px)**: 8-column layout, `gutter: 1.25rem`, `margin: 2rem`. Two-column cards collapse gracefully into uniform pairs.
  - **Mobile (< 768px)**: 4-column layout, `gutter: 1rem`, `margin: 1.25rem`. Single-column stack with generous vertical breathing room (`space-lg` to `space-xl`) between distinct thematic sections.
- **Vertical Rhythm**:
  - Major milestones and case study segments breathe via `space-xl`.
  - Component internals and data clusters maintain tighter discipline (`space-sm` and `space-md`) to ensure clear visual grouping.

## Elevation & Depth

Visual depth mirrors early morning atmosphere—water, mist, and radiant horizons—avoiding heavy dropshadows or harsh opacity steps:

1. **Base Layer (Ground Plane)**: The warm ivory canvas (`#FAF8F5`), occasionally lit by large radial background gradients using Pale Sky (`#DDE9F4`) and Sunlight Gold (`#F4D59E`) with 80px–120px blur at 20–30% opacity.
2. **Surface Tinting (Frosted Glass & Tonal Planes)**:
   - Elevated project cards and floating navigation bars utilize semi-transparent white-ivory (`rgba(250, 248, 245, 0.72)`) backed by a `16px` backdrop blur.
3. **Ambient Shadows**:
   - Depth is communicated via soft, widely diffused halos tinted with deep quiet navy: `0 12px 36px -8px rgba(20, 33, 50, 0.06)`.
   - Hovered states elevate subtly: `0 20px 48px -12px rgba(20, 33, 50, 0.10)`, with a faint top hairline reflection.
4. **Ghost Hairlines**:
   - Container boundaries are articulated with ultra-fine `1px` borders tinted with misty blue: `rgba(186, 206, 223, 0.45)`.

## Shapes

The interface embraces organic softness without sacrificing architectural balance:
- Base components (cards, code preview panes, modal containers) adhere to roundedness level `2` (`0.5rem` / `8px` base, extending to `1rem` / `16px` on expansive project containers).
- Secondary interactive tags, filter pills, and badge indicators borrow fluid, water-worn curvature with fully rounded pill radii (`9999px`).
- Form elements and input fields adopt a subtle `8px` corner radius to evoke modern physical stationery.

## Components

- **Buttons**:
  - *Primary*: Deep Quiet Navy (`#142132`) background, Warm Ivory (`#FAF8F5`) text, `0.5rem` radius. On hover: subtle scale transition (1.01) with a muted gold highlight border (`#E8C58D`).
  - *Secondary / Minimal*: Transparent backdrop, `1px` border in `rgba(118, 148, 159, 0.35)`, navy text. On hover: Pale Sky tint fill (`rgba(221, 233, 244, 0.35)`).
  - *Text Action*: Editorial serif text paired with an animated directional arrow that extends rightward on hover.
- **Project Cards**:
  - Built with frosted glass backing (`rgba(255, 255, 255, 0.65)` + `backdrop-filter: blur(12px)`), framed in `1px` misty border (`rgba(186, 206, 223, 0.4)`).
  - Featured engineering metrics (e.g., latency, throughput, scale) displayed in monospace-aligned sans labels atop quiet navy values.
- **Technical Chips & Tags**:
  - Pill geometry (`9999px`).
  - Subtle misty blue wash (`rgba(221, 233, 244, 0.5)`) with Muted Horizon Teal text (`#76949F`). Active or selected chips transition to Sunlight Gold fill with deep navy text.
- **Lists (Experience & Timeline)**:
  - Linear timeline bound by a delicate `1px` vertical rule in muted mist.
  - Active nodes marked by a miniature concentric dawn beacon (sunlight gold core wrapped in an ivory and teal halo).
- **Form Inputs**:
  - Clean ivory background, `1px` borderline in `rgba(118, 148, 159, 0.25)`.
  - Focus state shifts the border to Sunlight Gold (`#E8C58D`) accompanied by a diffuse ambient glow (`0 0 0 3px rgba(232, 197, 141, 0.25)`).
- **Code & Architecture Snippet Viewers**:
  - Framed in dark navy glass (`rgba(20, 33, 50, 0.94)`) with warm dawn syntax highlighting (gold functions, soft teal keywords, pale mist strings).