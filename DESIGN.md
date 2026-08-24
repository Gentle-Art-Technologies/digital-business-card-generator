---
name: "Alianza Digital Card"
description: "A calm, trustworthy system for creating and sharing an Alianza professional identity."
colors:
  ink: "#000000"
  navy: "#30374f"
  slate: "#53646e"
  mist: "#eef0f2"
  paper: "#f8f8f6"
  white: "#ffffff"
  line: "rgba(48, 55, 79, 0.16)"
  success: "#3f7d6b"
  error: "#a74343"
  accent-cool-gray: "#7b8790"
  accent-forest: "#315d54"
  accent-earth: "#7b503b"
typography:
  display:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(44px, 4.4vw, 68px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "31px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  title:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: "normal"
    letterSpacing: "-0.02em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "normal"
    letterSpacing: "normal"
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: "normal"
    letterSpacing: "0.12em"
rounded:
  control: "8px"
  field: "9px"
  tile: "10px"
  section: "14px"
  public-card: "16px"
  device: "43px"
  circle: "50%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  2xl: "24px"
  3xl: "30px"
  page: "48px"
components:
  app-header:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy}"
    height: "76px"
    padding: "0 28px"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "44px"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "44px"
  editor-section:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.section}"
    padding: "30px"
  text-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "0 14px"
    height: "66px"
  upload-tile:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "20px 12px"
    height: "138px"
  quick-action:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.navy}"
    rounded: "{rounded.circle}"
    size: "44px"
  accent-swatch:
    backgroundColor: "{colors.slate}"
    rounded: "{rounded.circle}"
    size: "44px"
  digital-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.public-card}"
    width: "min(100%, 480px)"
---

# Design System: Alianza Digital Card

## Overview

**Creative North Star: "The Calm Digital Handshake"**

The Alianza Digital Card turns a trusted professional introduction into a quiet, tangible credential. Its visual world is clean, functional, and implementation-focused: warm-white work surfaces, cool clinical grays, deep ink actions, and a restrained personal accent make the interface feel dependable before it feels expressive.

The builder separates making from seeing. A stable live card occupies one side on wide screens while a spacious, linear editor occupies the other; on small screens the editor leads and the preview becomes an explicit mode. Brand personality comes through disciplined typography, useful circular details, and a phone-like card frame rather than decorative spectacle.

**Key Characteristics:**

- Calm, professional, and immediately legible.
- Flat by default, with depth reserved for objects that genuinely float.
- Dense in information but generous around decisions and touch targets.
- Personal accent color is contained inside the digital card experience.
- The official Alianza lateral lockup anchors app headers; the fixed yellow nest mark anchors the card badge.
- Concise, confident interface language with honest prototype labeling.

## Colors

The palette pairs authoritative black and blue-gray with pale, clinical surfaces; optional earth and health tones let the card feel personal without diluting the Alianza identity.

### Primary

- **Pure Ink** (`ink`): Anchors primary actions, the strongest headings, and the outer device silhouette.
- **Trusted Slate** (`slate`): Serves as the default card accent and supporting text color.
- **Deep Alliance Navy** (`navy`): Carries body text, hover states, focus outlines, and icon detail.

### Secondary

- **Health Forest** (`accent-forest`): An optional card accent with a grounded care-oriented character.
- **Live Teal** (`success`): Signals locally saved and live states in small, contained indicators.
- **Quiet Steel** (`accent-cool-gray`): An optional low-chroma card accent.

### Tertiary

- **Grounded Umber** (`accent-earth`): An optional warm card accent.
- **Validation Red** (`error`): Reserved for required-field and validation communication.

### Neutral

- **Clinical Mist** (`mist`): The application ground and the default fill for quiet circular controls.
- **Warm Paper** (`paper`): The editor plane, field fill, and nearly opaque sticky header surface.
- **Clear White** (`white`): Cards, form sections, dialog surfaces, and inverse action text.
- **Soft Navy Divider** (`line`): Subtle borders and separators without introducing a new hue.

### Named Rules

**The Quiet Base Rule.** Pale neutrals must carry the workspace; strong color appears only where it communicates action, status, or card identity.

**The Accent Is Personal Rule.** The selected accent may shape the digital card's cover, icons, and hover details, but it must not recolor the surrounding builder chrome.

## Typography

**Display Font:** DM Sans (with `sans-serif` fallback)  
**Body Font:** DM Sans (with `sans-serif` fallback)  
**Label Font:** DM Sans (with `sans-serif` fallback)

**Character:** A single geometric sans-serif family keeps the product direct and contemporary. Weight, scale, negative tracking, and uppercase micro-labels create hierarchy without adding decorative typefaces.

### Hierarchy

- **Display** (700, fluid 44–68px, 1 line-height): Builder-page statements; use sparingly and keep tracking tight.
- **Headline** (700, 31px, 1.05 line-height): The professional's name in the public card.
- **Title** (700, 19px, normal line-height): Form-section and compact modal headings.
- **Body** (400, 16px, normal line-height): Default interface copy; supporting text steps down to 17px, 13px, 12px, or 10px according to density.
- **Label** (700, 11px, 0.12em tracking): Steps, live-preview captions, and other short uppercase wayfinding.

### Named Rules

**The One-Family Rule.** DM Sans must carry every interface role; hierarchy comes from size, weight, and tracking rather than a second typeface.

## Layout

The wide builder is a two-plane workspace below a 76px sticky header. The preview occupies a sticky 42% column with a centered 350px device, while the editor uses the remaining width, a maximum 900px form, and fluid outer padding from 48px to 84px. Editor sections stack with an 18px rhythm; fields use a two-column grid and the media uploads use three equal columns.

At 900px and below, the workspace becomes a single vertical editor and the live preview is hidden until the user requests it from the header. At 600px and below, header and editor padding tighten, upload and field grids become one column, section padding reduces to 22px by 16px, and final actions span the available width. The public card centers in a maximum 480px column and becomes a nearly full-height card on small screens.

Interactive targets must remain at least 44px in both dimensions. Content that can exceed the compact card viewport scrolls within the card body; long contact values truncate instead of expanding the layout.

### Named Rules

**The Split Focus Rule.** On wide screens, editing and previewing remain visible together; on narrow screens, they become explicit modes so neither is squeezed into an unusable column.

## Elevation & Depth

The system is flat by default. White sections separate from paper and mist backgrounds through tonal contrast and a soft navy divider, not ambient shadows. Elevation is reserved for genuinely layered objects: the phone device, the public card, the logo badge, the share dialog, and focus rings.

### Shadow Vocabulary

- **Device Lift** (`0 26px 60px rgba(48, 55, 79, 0.24)`): Makes the live phone preview read as a physical object above the preview plane.
- **Public Card Lift** (`0 24px 70px rgba(48, 55, 79, 0.16)`): Separates the shared card from the mist page without making it glossy.
- **Dialog Lift** (`0 30px 90px rgba(0, 0, 0, 0.25)`): Establishes modal priority above the dimmed workspace.
- **Badge Lift** (`0 5px 18px rgba(0, 0, 0, 0.13)`): Gives the company mark just enough separation from the card cover.

### Named Rules

**The Earned Lift Rule.** Resting workspace surfaces must remain shadowless; shadow is reserved for a physical or modal layer that sits above another surface.

## Shapes

Working controls use gently curved 8–10px corners, section and dialog containers use 14px corners, and the public card uses a restrained 16px silhouette. Circles identify avatars, icon actions, swatches, status dots, and section markers. The device preview is intentionally more sculptural, with a 43px outer shell and a 35px clipped card interior.

Borders are thin and low-contrast. Upload targets use a dashed boundary, fields use a solid boundary, and focus adds a clear three-pixel navy outline or halo. These treatments must remain distinguishable without relying on color alone.

### Named Rules

**The Radius Hierarchy Rule.** Use small curves for controls, medium curves for content containers, circles for compact identity and actions, and the largest radius only for the phone silhouette.

## Components

### Buttons

- **Shape:** Gently curved controls with a minimum 44px height and 8px radius.
- **Primary:** Pure ink fill, clear-white text, bold compact labeling, and 18px horizontal padding; the large form action grows to 50px high with 23px horizontal padding.
- **Hover / Focus:** Hover lifts one pixel and shifts ink to deep navy; active returns to the resting plane. Keyboard focus uses a visible three-pixel navy outline with offset. Motion collapses under reduced-motion preferences.
- **Secondary:** Clear-white fill with a soft navy divider; hover strengthens the border to navy while preserving the surface.

### Chips

- **Style:** Accent choices are 44px circular swatches with the color inset inside a transparent two-pixel selection ring.
- **State:** The selected swatch uses a pure-ink ring and `aria-pressed`; the custom-color control uses the same circular footprint with a subtle divider.

### Cards / Containers

- **Corner Style:** Editor sections and dialogs use 14px corners; the shared card uses 16px corners; the device preview uses the dedicated 43px silhouette.
- **Background:** Clear white on warm paper or clinical mist.
- **Shadow Strategy:** Editor sections are flat; only device, public-card, badge, and dialog layers use the elevation vocabulary.
- **Border:** Editor sections use the soft navy divider; the public card relies on shadow and clipping.
- **Internal Padding:** Desktop editor sections use 30px; compact sections use 22px vertically and 16px horizontally.

### Inputs / Fields

- **Style:** Warm-paper fill, soft navy one-pixel border, 9px corners, 66px minimum height, and a left icon paired with an uppercase micro-label.
- **Focus:** The border strengthens to deep navy and a translucent three-pixel navy halo appears around the field.
- **Error / Disabled:** Required markers use validation red. Native validation must remain available; disabled styling must preserve readable contrast and must not resemble an editable field.
- **Profile identity:** Email is required and must end in `@alianza.health`. Social fields accept usernames rather than full URLs; WhatsApp is the exception and accepts a full international phone number with country code.

### Navigation

- **Style:** A 76px sticky paper header keeps the Alianza mark at the leading edge, save state centered on wide screens, and preview/share actions at the trailing edge. At 900px and below, save state hides and Preview becomes an explicit toggle; at 600px, spacing tightens and the primary action drops its decorative icon.

### Upload Tiles

Upload tiles are clear-white, 10px-radius targets with a dashed soft navy border and a quiet circular icon ground. Profile and cover uploads form two equal columns on wide screens and become compact horizontal rows on small screens. Hover and focus strengthen the border and add a mist surface or focus halo. The company mark is never an upload: it is the fixed Alianza nest logo.

Product icons come exclusively from the free outline set in `@untitledui/icons`, rendered at the component's intended size with the library's consistent 2px stroke. Use direct subpath imports so the build includes only the icons the interface needs. When a brand-specific glyph is unavailable in the free set, use the closest neutral Untitled UI action icon and let the adjacent label carry the brand meaning; do not author a replacement SVG.

### Digital Card

The card combines a profile-accent cover, circular overlapping avatar, fixed Alianza nest badge, clear-white body, round quick actions, icon-led detail rows, and a persistent dark contact action. Uploaded imagery may replace the cover and avatar while the accent remains the fallback identity system. The company name and website stay fixed across every profile. Public presentation removes the device chrome and enlarges type and targets without changing the card's hierarchy.

### Share Dialog

The centered 14px-radius dialog uses a dimmed backdrop, strong dialog lift, concise completion copy, a copyable URL field, and a primary continuation. It traps keyboard focus, closes on Escape, and returns focus to the invoking control.

## Do's and Don'ts

### Do:

- Do use the semantic color, type, spacing, and radius roles captured in the frontmatter.
- Do keep primary actions obvious, dark, and at least 44px high.
- Do preserve visible keyboard focus, touch-safe targets, and reduced-motion behavior.
- Do label all demo identities and prototype persistence behavior honestly.
- Do let long card content scroll or truncate within its existing bounds.

### Don't:

- Don't spread the personal card accent across the neutral builder workspace.
- Don't add shadows to resting form sections or fields.
- Don't introduce a second font family or one-off display treatment.
- Don't hide focus indicators or communicate selection and error with color alone.
- Don't invent testimonials, metrics, customer logos, or production persistence claims.
