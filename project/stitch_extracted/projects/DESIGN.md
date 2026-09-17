---
name: Saksham Jain Portfolio
colors:
  surface: '#fbf9fa'
  surface-dim: '#dcd9da'
  surface-bright: '#fbf9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f4'
  surface-container: '#f0edee'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e3'
  on-surface: '#1b1b1d'
  on-surface-variant: '#44474c'
  inverse-surface: '#303031'
  inverse-on-surface: '#f3f0f1'
  outline: '#74777c'
  outline-variant: '#c4c6cc'
  surface-tint: '#535f6f'
  primary: '#000712'
  on-primary: '#ffffff'
  primary-container: '#14202d'
  on-primary-container: '#7c8898'
  inverse-primary: '#bbc8d9'
  secondary: '#526167'
  on-secondary: '#ffffff'
  secondary-container: '#d5e5ec'
  on-secondary-container: '#58676d'
  tertiary: '#0d0500'
  on-tertiary: '#ffffff'
  tertiary-container: '#2b1c08'
  on-tertiary-container: '#9b8367'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e3f6'
  primary-fixed-dim: '#bbc8d9'
  on-primary-fixed: '#101c29'
  on-primary-fixed-variant: '#3c4856'
  secondary-fixed: '#d5e5ec'
  secondary-fixed-dim: '#b9c9d0'
  on-secondary-fixed: '#0f1e23'
  on-secondary-fixed-variant: '#3a494f'
  tertiary-fixed: '#fbdebe'
  tertiary-fixed-dim: '#dec2a3'
  on-tertiary-fixed: '#271906'
  on-tertiary-fixed-variant: '#56432c'
  background: '#fbf9fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e3'
  ivory: '#F5F1E8'
  mist: '#E8EFF1'
  morning-sky: '#DCECF3'
  soft-water: '#AFCBD3'
  sunlight: '#F1CF98'
  deep-ink: '#14202D'
  muted-ink: '#687581'
  cloud: '#F6F8F7'
  clear-sky: '#D7EAF1'
  water: '#9FC3CF'
  warm-light: '#F3D7AD'
  warm-sand: '#E7C49D'
  soft-apricot: '#DFA486'
  dusty-rose: '#C98D8D'
  late-water: '#91AEB7'
  dusk: '#5E6172'
  deep-blue: '#283247'
  night: '#111827'
  dark-water: '#182536'
  moonlight: '#D9E3EA'
  soft-text: '#B8C3CC'
typography:
  headline-hero:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.25'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.1em
  headline-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 38px
    fontWeight: '500'
    lineHeight: '1.15'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 24px
  margin: 48px
  space-xs: 6px
  space-sm: 12px
  space-md: 24px
  space-lg: 48px
  space-xl: 96px
---

## Brand & Style

This design system establishes a calm, cinematic digital landscape that moves organically from dawn through daylight, golden hour, dusk, and moonlight as the visitor scrolls. The visual identity is built on restraint, continuity, and strong editorial typography rather than visual noise or dashboard clichés.

### Core Identity
- **Personality:** Quietly confident, natural, technical yet human, warm, and minimally artistic.
- **Visual Metaphor:** Flowing water, changing atmospheric light, and thoughtful software craftsmanship.
- **Design Style:** Editorial Minimalism with cinematic atmospheric blending and subtle, fluid motion.
- **Target Audience:** Engineering peers, technical recruiters, and collaborators who value taste, precision, and genuine software capability.

## Colors

The color system is restrained and atmospheric, transitioning gradually across the natural phases of the day. 

### Palette Strategy
- **Base Surfaces & Atmosphere:** Light ivories, mists, and soft watery blues transition through warm golden sands and soft apricots into deep navy dusk and moonlight.
- **Typography & Structure:** Deep Ink (`#14202D`) provides high-contrast legibility against light backgrounds, while Muted Ink (`#687581`) and Soft Text (`#B8C3CC`) anchor secondary elements.
- **Accent Use:** Warm gold (`#F1CF98` / `#E7C49D`) is strictly reserved for small active indicators, tiny metadata labels, subtle sunlight effects, and understated hover states. Avoid using warm gold as a heavy interface fill.

## Typography

Typography pairs a refined, high-contrast serif for editorial headlines with a clean neutral sans-serif for interface elements and body copy.

### Usage Guidelines
- **Display / Editorial:** Reserve Playfair Display for hero names and major section statements. Maintain natural tracking on large headlines; avoid extreme letter spacing.
- **Interface / Body:** Use Inter for clean, readable body paragraphs and metadata. Apply tracking (`letterSpacing`) primarily to small uppercase metadata and navigation items.

## Layout & Spacing

The layout follows an editorial grid philosophy with generous negative space and a maximum readable content width of 1100–1250px on desktop.

### Grid & Structure
- **Desktop:** 12-column grid with generous outer canvas margins and 24px gutters.
- **Tablet:** 8-column grid.
- **Mobile:** 4-column grid with comfortable touch margins.
- **Vertical Rhythm:** Sections are spacious and continuous. Avoid stacking sections immediately without environmental transitions or visual breathing space.

## Elevation & Depth

Depth is conveyed through subtle atmospheric layering rather than harsh drop shadows or high-contrast borders.

### Guidelines
- **Surface Elevation:** Use tonal atmospheric shifts (dawn to night) and subtle opacity changes to establish hierarchy.
- **Shadow Character:** Project cards and floating elements cast very soft, diffused shadows with low opacity and warm tinting, creating a floating presence above the landscape.
- **Borders:** Avoid heavy outlines and glowing neon borders. Rely on low-opacity dividers (`rgba` lines) or clean whitespace to separate structural zones.

## Shapes

The shape language is refined and restrained, favoring subtle softness over stark geometric rigidity or overly playful pill containers.

### Guidelines
- **UI Elements:** Use soft corners (`0.25rem` to `0.5rem` radius) for cards, interactive containers, and buttons.
- **Badges & Indicators:** Small status indicators or active dots may use full circular geometry (`9999px`), while structural containers remain gently rounded to preserve an organic, architectural feel.

## Components

Components are designed to blend seamlessly into the continuous cinematic landscape. Avoid dense SaaS admin panel patterns.

### Buttons
- **Primary Button:** Deep Ink background (`#14202D`), Ivory text (`#F5F1E8`), soft rounded corners, and a subtle upward translation (`2px`) on hover. No glowing neon effects.
- **Secondary Button:** Transparent or light surface, Deep Ink text, and a subtle border or opacity transition on hover.

### Input Fields & Controls
- Clean, minimal borders with high-contrast text and generous padding. Focus states use a soft warm-gold outline or subtle ink darkening rather than heavy glow effects.

### Cards & Project Showcases
- Large visual project presentations rather than small thumbnail grids. Cards should feature generous whitespace, clear typography hierarchies, and subtle hover scale effects (`1.01` to `1.03`).

### Navigation
- Understated text navigation with tiny warm-gold active indicators or subtle opacity shifts. Avoid large rounded container pills or heavy underlines.

### Chips & Tags
- Typographic and editorial. Technology labels should be clean, text-based tags with soft background tints, avoiding fake progress bars or proficiency scores.