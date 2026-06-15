# Design System: Cerâmica Wabi-Sabi

## 1. Definição do Estilo

- **Nome:** Cerâmica Wabi-Sabi
- **Tipo:** Imperfect, Natural, Contemplative
- **Keywords:** wabi-sabi, ceramic, imperfect beauty, natural, contemplative, earth tones, handcrafted, organic textures, kintsugi, minimalist
- **Era:** Timeless Japanese Aesthetic
- **Light/Dark:** ✓ Full / ✗ No

## 2. Paleta de Cores

- **Primárias:** Clay Brown #A0522D, Stone Grey #8B8680, Cream #FAF0E6, Charcoal #36454F
- **Secundárias:** Matcha Green #6B7B3A, Indigo #3F51B5, Gold Repair #D4AF37, Soft Blush #E8C4B8

## 3. Efeitos Visuais

Crackle textures, gold kintsugi lines, organic asymmetric shapes, earth-tone gradients, handwritten annotations, imperfect borders, soft shadow layering, matte finishes

## 4. AI Prompt Keywords

Design a Wabi-Sabi ceramic landing page. Use: clay brown and stone grey, crackle textures, gold kintsugi lines, organic asymmetric shapes, earth-tone gradients, handwritten annotations, imperfect borders, matte finishes.

## 5. CSS Technical

```css
background: #FAF0E6, color: #36454F, font-family: 'Cormorant Garamond', serif, border: 1px solid #8B8680, box-shadow: 2px 4px 12px rgba(54,69,79,0.1), border-radius: 0 12px 0 12px, animation: crack-reveal 2s ease-out, background-image: url('clay-texture.png'), background-blend-mode: multiply, opacity: 0.95
```

## 6. Design System Variables

```css
--clay-brown-wabi: #A0522D, --stone-grey-wabi: #8B8680, --cream-wabi: #FAF0E6, --charcoal-wabi: #36454F, --kintsugi-gold: #D4AF37, --font-wabi: 'Cormorant Garamond', serif
```

## 7. Checklist de Implementação

- ☐ Crackle textures
- ☐ Gold kintsugi lines
- ☐ Organic asymmetric shapes
- ☐ Earth-tone gradients
- ☐ Handwritten annotations
- ☐ Imperfect borders

## 8. Visual Theme & Atmosphere

Cerâmica Wabi-Sabi — Design general com wabi-sabi, ceramic, imperfect beauty. Template e prompt pronto para IA. Estilo Cerâmica Wabi-Sabi representa uma tendência moderna em design UI/UX web com foco em general.

- Density: 3/10 — Airy
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

## 9. Color Palette & Roles

- **Clay Brown** (#A0522D) — Primary surface or dominant color
- **Stone Grey** (#8B8680) — Secondary text, borders, muted elements
- **Cream** (#FAF0E6) — Light surface, card backgrounds
- **Charcoal** (#36454F) — Dark surface, primary background
- **Matcha Green** (#6B7B3A) — Success states, positive indicators
- **Indigo** (#3F51B5) — Accent color, emphasis elements
- **Gold Repair** (#D4AF37) — Premium accent, decorative highlights
- **Soft Blush** (#E8C4B8) — Extended palette, decorative use

## 10. Typography Rules

- **Display / Hero:** Cormorant Garamond — Weight 700, tight tracking, used for headline impact
- **Body:** Cormorant Garamond — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Cormorant Garamond — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** JetBrains Mono — Used for code, metadata, and technical values

Scale:
- Hero: clamp(2.5rem, 5vw, 4rem)
- H1: 2.25rem
- H2: 1.5rem
- Body: 1rem / 1.6
- Small: 0.875rem

## 11. Component Stylings

- **Primary Button:** Sharp edges (0px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Sharp edges (0px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
- **Inputs:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background. Active item: accent color indicator. Font weight 500 when active.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.

## 12. Layout Principles

- **Grid:** CSS Grid primary. Max-width containment: 1280px centered with 1.5rem side padding.
- **Spacing rhythm:** Balanced. Base unit: 0.5rem (8px).
- **Section vertical gaps:** clamp(4rem, 8vw, 8rem).
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).

## 13. Motion & Interaction

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## 14. Anti-Patterns (Banned)

- No emojis in UI — use icon system only (Lucide, Heroicons)
- No decorative gradients — flat color only
- No shadows heavier than 0 2px 8px rgba(0,0,0,0.08)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

## Contexto Histórico

Estilo Cerâmica Wabi-Sabi representa uma tendência moderna em design UI/UX web com foco em general.

## Caso de Uso

Landing pages, SaaS
