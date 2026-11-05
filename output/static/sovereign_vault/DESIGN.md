---
name: Sovereign Vault
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3f4850'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#707881'
  outline-variant: '#bfc7d2'
  surface-tint: '#006398'
  primary: '#006194'
  on-primary: '#ffffff'
  primary-container: '#007bb9'
  on-primary-container: '#fdfcff'
  inverse-primary: '#93ccff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#00685f'
  on-tertiary: '#ffffff'
  tertiary-container: '#008378'
  on-tertiary-container: '#f4fffc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#93ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b73'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#89f5e7'
  tertiary-fixed-dim: '#6bd8cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-xs:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2.5rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets European entrepreneurs, SME operators, and discerning individuals demanding institutional-grade security alongside modern digital fluency. The brand identity fuses the sobriety of private banking with the effortless ergonomics of modern cloud infrastructure.

The visual style embodies Corporate Modernism with calibrated digital precision:
- **Atmosphere**: Crisp, composed, and structurally unambiguous. It avoids gimmicks, loud gamification, and neon saturation in favor of calm clarity and structural confidence.
- **Form & Order**: Structured whitespace and quiet micro-textures replace decorative clutter. High-contrast typography guarantees legal and financial legibility at glance.
- **Emotional Intent**: Inspires absolute discretion, institutional permanence, regulatory compliance, and computational intelligence.

## Colors

The palette is engineered around clarity, trust, and structural calm:

- **Primary (`#0284C7`)**: Trustworthy cobalt blue used for decisive focal points, primary calls to action, active document statuses, and validated verification states.
- **Secondary (`#0F172A`)**: Deep obsidian navy serving as the foundational anchor for primary text, high-tier navigation frames, and critical regulatory indicators.
- **Tertiary (`#0D9488`)**: Deep teal reserved for cryptographic confirmations, verified biometric states, and encrypted vault storage badges.
- **Neutrals & Surfaces**: Built from cool slate gradations (`#F8FAFC` base surface, `#F1F5F9` nested canvas, `#E2E8F0` structural hair-lines, and `#475569` secondary body copy). This ensures a daylight-crisp canvas that mitigates optical fatigue during sustained document audits.
- **Semantic Accents**: Error states utilize `#DC2626` (Ruby), warning states rely on `#D97706` (Amber), and success verification uses `#059669` (Emerald).

## Typography

The dual-type pairing balances institutional authority with optimal optical legibility:

- **Headlines (Plus Jakarta Sans)**: Delivers geometric clarity and sculpted authority. Used for primary screen headings, metrics overviews, and modal titling. Tracking remains slightly tight across all display sizes to ensure visual cohesion.
- **Body & Data Displays (Inter)**: Handles micro-data, contractual paragraphs, audit trails, and transactional tables. Its tall x-height and neutral letterforms prevent ink bleed and fatigue across diverse screen densities.
- **Numeric & Monospace Alignments**: For document references, cryptographic hashes, and currency amounts, Inter's tabular figures (`tnum`) must be enforced to ensure vertical numerical alignment in accounting tables.

## Layout & Spacing

The layout is built upon an 8pt architectural rhythm, maintaining clear hierarchy between dense financial records and expansive workspace canvases.

- **Grid Architecture**: 
  - **Desktop (1280px+)**: 12-column layout with 24px (`1.5rem`) gutters and a max canvas width of 1440px. Section margins expand up to 40px (`2.5rem`).
  - **Tablet (768px - 1279px)**: 8-column layout with 20px gutters and 24px margins. Sidebar transitions to an off-canvas drawer or icon-collapsed rail.
  - **Mobile (<768px)**: 4-column layout with 16px (`1rem`) gutters and 16px outer safe margins. Stacked cards and tabular summaries prioritize vertical scroll.
- **Vertical Rhythm**: Functional sections inside document streams maintain `space-xl` (40px) vertical detachment. Internal card padding strictly implements `space-md` (16px) for compact widgets and `space-lg` (24px) for master records.

## Elevation & Depth

Visual hierarchy relies on structural planes and subtle atmospheric light rather than pronounced dropshadows:

- **Ground Plane**: Base canvas sits on `#F8FAFC`.
- **Card Tier (Elevation 1)**: White surface (`#FFFFFF`) with a 1px boundary of `#E2E8F0` and an ultra-subtle diffused ambient shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.03)`.
- **Raised & Hover Tier (Elevation 2)**: Used for active interactive tiles and floating data bars: `0 8px 16px -4px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.03)`.
- **Overlay Tier (Elevation 3)**: Modals, secure transaction dialogs, and drawer menus: `0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.03)`. Modals pair with a frosted ambient backdrop (`#0F172A` with 30% opacity and 4px backdrop blur).
- **Security Inset**: Verified data vaults and read-only token fields employ a shallow inner hairline shadow: `inset 0 1px 2px rgba(15, 23, 42, 0.04)`.

## Shapes

The design system employs a calibrated `roundedness: 2` scale, balancing friendly human accessibility with structured corporate stability:

- **Cards & Document Frames (`rounded-xl` / 1.5rem / 24px)**: Outer enclosures for document containers, analytics summaries, and auth panels.
- **Action Buttons & Form Inputs (`rounded` / 0.5rem / 8px)**: Inputs, segmented tabs, and secondary buttons carry crisp, functional corners that preserve space.
- **Badges & Trust Statuses (`rounded-full` / Pill)**: Encryption tags, status chips, and verification badges utilize a full radius to cleanly contrast against structural rectilinear grids.

## Components

- **Buttons**:
  - *Primary*: `#0284C7` background, `#FFFFFF` text, `rounded` (8px), height 40px (desktop) / 44px (mobile), font-weight 600. Focus ring uses a 2px offset with `#0284C7` at 40% alpha.
  - *Secondary*: Surface `#FFFFFF`, border 1px solid `#E2E8F0`, text `#0F172A`. Hover transitions background to `#F8FAFC`.
  - *Destructive / Revoke*: Surface `#FEF2F2`, border 1px solid `#FEE2E2`, text `#DC2626`.
- **Inputs & Document Uploaders**:
  - Input fields use 40px height, 1px `#E2E8F0` border, `#FFFFFF` fill, and `#0F172A` text. Placeholder in `#94A3B8`.
  - Focus state elevates with 1px border `#0284C7` and 3px diffused outer halo `rgba(2, 132, 199, 0.15)`.
  - Document dropzones feature a 1.5px dashed border in `#CBD5E1` over `#F8FAFC`, transitioning to `#0284C7` border and `#F0F9FF` surface on drag-over.
- **Security & Trust Badges**:
  - Encrypted Status Chip: Pill-shaped, padding `4px 10px`, background `#F0FDFA`, border 1px solid `#CCFBF1`, text `#0F766E`, displaying a miniature lock glyph and label-xs typography.
- **Cards & Document Vault Rows**:
  - Vault Card: `#FFFFFF` fill, `rounded-xl` (16px to 24px), border 1px solid `#E2E8F0`, internal padding `space-lg` (24px).
  - Document Table Row: Height 56px, subtle divider `#F1F5F9`, hover background `#F8FAFC`. Row selections highlight with a left-edge 3px solid `#0284C7` indicator.
- **Checkboxes & Radios**:
  - Size 18x18px, `rounded` (4px for checkboxes, full circle for radios), border 1.5px solid `#CBD5E1`. Checked state transitions fill to `#0284C7` with a crisp white glyph checkmark.
