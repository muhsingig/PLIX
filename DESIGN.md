# Design System Document

## 1. Overview & Creative North Star: "The Radiant Editorial"

This design system is built to transform the digital presence of a modern wellness brand into a high-energy, editorial experience. We are moving away from the static, boxed layouts of traditional e-commerce and toward a "Radiant Editorial" aesthetic. 

The Creative North Star centers on **Juicy Vitality**: a UI that feels as fresh and organic as the guava and botanical ingredients in the products. By leveraging intentional asymmetry, oversized typography, and a "liquid" layout philosophy, we create a sense of movement. We replace rigid grids with overlapping elements and soft, rounded forms that mirror the tactile nature of premium skincare packaging.

## 2. Colors: Tonal Depth & Vibrancy

Our palette is a sophisticated interplay between "Juicy Pinks" and "Botanical Greens." 

- **Primary & Secondary Roles:** Use `primary` (#953f50) for moments of high energy and brand authority. The `secondary` (#3a6625) should be used as a grounding element, representing the "fresh green" organic roots of the brand.
- **The "No-Line" Rule:** To maintain a premium, seamless feel, **prohibit the use of 1px solid borders for sectioning.** Boundaries must be defined through background color shifts. For example, a `surface-container-low` (#ffecf1) section should sit against a `background` (#fff4f5) to create a soft, natural break.
- **Surface Hierarchy & Nesting:** Treat the UI as layers of fine, tinted paper. Use `surface-container-lowest` (#ffffff) for high-priority interactive cards and `surface-container-highest` (#ffd1e0) for deep-set background elements.
- **The "Glass & Gradient" Rule:** For hero sections or high-impact CTAs, use a subtle linear gradient transitioning from `primary` (#953f50) to `primary_container` (#ff94a5). When overlaying UI elements on product photography, utilize Glassmorphism: apply a semi-transparent `surface` color with a 20px-40px backdrop blur to create a "frosted" effect that feels integrated rather than floating.

## 3. Typography: Bold Modernity

The typography is designed to balance youthful energy with a clean, high-readability structure.

- **Display & Headlines (Plus Jakarta Sans):** These are the voice of the brand. Use `display-lg` (3.5rem) and `headline-lg` (2rem) with tight letter-spacing to create "impact blocks." This bold, modern sans-serif provides a confident, editorial look that commands attention.
- **Body & Labels (Manrope):** Chosen for its exceptional legibility and modern geometric construction. Use `body-lg` (1rem) for product descriptions to ensure a premium reading experience. 
- **The Hierarchy Strategy:** Use extreme scale differences. A `display-lg` headline should often be paired directly with a `label-md` uppercase kicker to create a sophisticated, high-fashion layout contrast.

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are replaced with ambient light and tonal shifts to mimic the "Glow" of the product line.

- **The Layering Principle:** Depth is achieved by "stacking" container tiers. A `surface-container-lowest` card placed on a `surface-container-low` background creates a natural lift.
- **Ambient Shadows:** If a floating element (like a mobile navigation bar or a "Buy Now" button) requires a shadow, it must be extra-diffused. Use a blur value of 40px-60px at 6% opacity, using a tinted version of `on_surface` (#4a2133) rather than pure black.
- **The "Ghost Border" Fallback:** If a container requires definition against a similar background, use a "Ghost Border": the `outline_variant` (#d89cb2) token at 15% opacity. Never use 100% opaque borders.
- **Organic Rounding:** Follow the scale religiously. Use `xl` (3rem) for main product cards and `full` (9999px) for buttons. This high-radius look mimics the soft, ergonomic curves of the product bottles.

## 5. Components: Fluid & Friendly

### Buttons
- **Primary:** Rounded `full`, background `primary`, text `on_primary`. Use a slight horizontal expansion on hover.
- **Secondary:** Rounded `full`, background `secondary_container`, text `on_secondary_container`.
- **States:** Transitions should be 300ms "ease-out" to feel organic.

### Chips
- **Selection Chips:** Use `secondary_fixed_dim` for unselected and `secondary` for selected. Rounding should always be `full`.

### Input Fields
- **Styling:** Use `surface_container_low` for the field background. Forgo the bottom border; instead, use a subtle `outline_variant` at 20% opacity. 
- **Corners:** Use `md` (1.5rem) rounding to ensure they feel softer than standard utility inputs.

### Cards & Lists
- **No Dividers:** Forbid the use of line dividers. Use `spacing-6` (2rem) or `spacing-8` (2.75rem) to create separation through white space. 
- **The "Juicy" Card:** Product cards should use `surface-container-lowest` with a very soft `xl` corner radius. Use high-quality imagery that breaks the container bounds (z-index overlap) to create a 3D effect.

### Interactive Tooltips
- **Appearance:** Use `inverse_surface` with `on_tertiary` text. Use `sm` (0.5rem) rounding to keep them distinct from the larger, rounder brand elements.

## 6. Do's and Don'ts

### Do:
- **Use Intentional Asymmetry:** Let text elements and images overlap to create an editorial, "scannable" flow.
- **Embrace White Space:** Use `spacing-16` and `spacing-20` to allow the vibrant colors to breathe.
- **Tint Your Neutrals:** Use `surface` (#fff4f5) instead of pure white (#ffffff) for a warmer, skin-tone-friendly feel.

### Don't:
- **Don't use hard lines:** Avoid 1px dividers or high-contrast borders that break the "organic" flow.
- **Don't use "Default" Shadows:** Avoid the standard Material Design shadows. They are too industrial for a wellness brand.
- **Don't crowd the content:** Skincare is about clarity and glow; the UI should reflect that by never feeling cluttered.
- **Don't use "Stock" Grid Layouts:** Avoid 12-column symmetry; try placing a 4-column text block against a 6-column image for a more custom feel.