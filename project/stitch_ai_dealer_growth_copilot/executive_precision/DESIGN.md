---
name: Executive Precision
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#424751'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#727782'
  outline-variant: '#c2c6d3'
  surface-tint: '#1d5fa8'
  primary: '#003b72'
  on-primary: '#ffffff'
  primary-container: '#00529b'
  on-primary-container: '#a5c7ff'
  inverse-primary: '#a6c8ff'
  secondary: '#a04100'
  on-secondary: '#ffffff'
  secondary-container: '#fc7728'
  on-secondary-container: '#5d2300'
  tertiary: '#422a7d'
  on-tertiary: '#ffffff'
  tertiary-container: '#5a4396'
  on-tertiary-container: '#cebbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a6c8ff'
  on-primary-fixed: '#001c3b'
  on-primary-fixed-variant: '#004787'
  secondary-fixed: '#ffdbcb'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#341000'
  on-secondary-fixed-variant: '#7a3000'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#cfbcff'
  on-tertiary-fixed: '#22005d'
  on-tertiary-fixed-variant: '#4f378a'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-desktop: 32px
  margin-mobile: 16px
  max-width: 1440px
---

## Brand & Style
The design system is engineered for a high-stakes enterprise environment where data density must coexist with clarity. The brand personality is **authoritative, analytical, and proactive**, reflecting an AI partner that drives growth. 

The aesthetic draws from **Modern Corporate** and **Minimalism**, utilizing a refined "Software as a Service" (SaaS) look. It prioritizes functional elegance over decorative elements. The UI leverages generous whitespace to reduce cognitive load, while employing Material Design 3 principles—specifically surface-based hierarchy and tonal relationships—to guide the user through complex workflows. The emotional response should be one of confidence, reliability, and precision.

## Colors
The color strategy uses a deep **Trust Blue (#00529B)** as the primary anchor for navigation and primary actions, ensuring a professional enterprise feel. **Action Orange (#F37021)** is used sparingly for high-impact calls to action and highlighting growth opportunities.

The palette is supported by a robust set of semantic colors:
- **Healthy:** A vibrant emerald for positive growth metrics.
- **Moderate:** A warm amber for caution or neutral trends.
- **At Risk:** A crisp crimson for immediate attention areas.

The background is a clean white (#FFFFFF), with a subtle neutral gray (#F8FAFC) used for sectioning and card backgrounds to provide soft contrast without visual noise.

## Typography
This design system utilizes **Inter** exclusively to maintain a systematic, utilitarian, and modern feel. The type scale is optimized for data-heavy dashboards.

- **Headlines:** Use tighter letter spacing and semi-bold weights to create a strong visual anchor.
- **Body Text:** Standard weight with ample line-height ensures long-form reports remain readable.
- **Labels:** Small caps or increased letter spacing are used for secondary metadata and table headers to distinguish them from actionable data.
- **Responsive Note:** On mobile devices, Display and Headline Large scales are reduced to prevent awkward line breaks in card titles.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a max-width container of 1440px for desktop viewing. 

- **Grid:** A 12-column system is used for desktop, collapsing to 4 columns on mobile. 
- **Rhythm:** An 8px base grid governs all padding and margins (8, 16, 24, 32, 40, 64).
- **Desktop:** Features a fixed left-hand navigation rail (280px) with a fluid content area.
- **Mobile:** Transition to a top-bar navigation with a drawer; margins reduce to 16px to maximize screen real estate for data tables.
- **Consistency:** Gutters are fixed at 24px to ensure distinct separation between dashboard widgets and cards.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Ambient Shadows**, moving away from heavy borders.

1.  **Level 0 (Background):** #F8FAFC - The canvas.
2.  **Level 1 (Cards/Surface):** #FFFFFF - Primary content containers use a very soft, diffused shadow (0px 2px 4px rgba(0,0,0,0.05)) and a 1px subtle border (#E2E8F0).
3.  **Level 2 (Dropdowns/Modals):** High-elevation surfaces use a more pronounced ambient shadow (0px 10px 25px rgba(0,0,0,0.1)) to indicate temporary overlay status.

Interactive elements (buttons) use a subtle lift on hover rather than a color change alone to provide tactile feedback.

## Shapes
The shape language is **Rounded**, balancing the "hard" nature of financial data with a modern, approachable feel.

- **Standard Containers:** Cards and input fields use a 0.5rem (8px) radius.
- **Large Components:** Modals and large feature banners use a 1rem (16px) radius to soften the visual impact.
- **Interactive Elements:** Buttons and tags follow the standard 8px rounding, though small utility chips may use a full-pill radius (100px) for distinct categorization.

## Components
- **Buttons:** Primary buttons are solid Blue (#00529B) with white text. Secondary buttons use a subtle gray outline. Growth-specific actions (e.g., "Increase Budget") may use the Orange (#F37021) accent.
- **Cards:** White background, 8px radius, soft shadow. Headers inside cards should have a subtle bottom divider (#F1F5F9).
- **Input Fields:** 8px radius, 1px border (#CBD5E1). On focus, the border transitions to Primary Blue with a 2px outer glow.
- **Chips/Badges:** Use tinted backgrounds of semantic colors (e.g., Healthy status has a light green background with dark green text).
- **Data Tables:** Row-based with subtle hover states (#F8FAFC). No vertical borders; only horizontal dividers to maintain a clean, "airy" feel.
- **Navigation:** Vertical sidebar with active states indicated by a primary blue "indicator bar" on the left edge and a subtle tonal shift in the background.