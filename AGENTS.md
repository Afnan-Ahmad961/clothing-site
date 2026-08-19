# ZaamGrip Industries - Portfolio Implementation Instructions

Both the AI Agent and Cursor must strictly adhere to the following guidelines before and during implementation.

## 1. Project Overview
- **Brand Name**: ZaamGrip Industries
- **Type**: Portfolio website for a specialist sportswear & sports gloves manufacturer.
- **Business Niche**: The company specialises in **gym wear, street wear, sports wear, and sports gloves & accessories**. Product lines include:
  - Gym wear (compression tights, training tops, hoodies, joggers)
  - Street wear (casual athletic apparel)
  - Sports wear (performance jerseys, shorts, tracksuits)
  - Baseball batting gloves
  - Gym / weight-lifting gloves
  - MMA gloves & protective accessories
- **Content Rule**: All copy, headings, statistics, CTAs, and descriptions MUST be specific to these product lines. **Never use generic clothing or fashion references.** Always refer to athletes, gyms, sports teams, and performance wear.
- **Goal**: Showcase manufacturing capabilities, quality craftsmanship, and product range to attract B2B clients (brands, sports teams, retailers).
- **Inspiration**: [Byon Textile](https://www.byontextile.com/)

## 2. Design & UX Guidelines
- **Aesthetic**: Premium, luxury feel.
  - **Layout**: Clean, editorial-style layouts with generous whitespace. **Strictly NO generic card dumps.**
  - **Colors & Typography**: Curated, harmonious palettes (e.g., sleek dark modes or sophisticated light modes) and modern, elegant typography. **Strictly use theme-defined colors/variables** (e.g. Tailwind colors defined in the theme, `bg-background`, `bg-primary`, `text-muted-foreground`, etc.) instead of hardcoded hex codes, HSL values, or arbitrary inline colors, unless specifically requested.
- **Animations**: Animation-rich but soothing.
  - Use smooth scrolling (e.g., Lenis).
  - Implement subtle entrance animations, float effects, and micro-interactions on hover (e.g., Framer Motion).
  - Animations should feel fluid, not abrupt.

## 3. Architecture & File Structure
- **Component Organization**: Each page section MUST go in its own dedicated folder.
  - **Format**: `components/sections/[page_name]/[section_name].tsx`
  - **Example**: `components/sections/home/hero.tsx`
- **UI Components**: Place generic, reusable elements (like buttons and inputs from shadcn/ui) in `components/ui/`.
- **Tech Stack**: Next.js (App Router), Tailwind CSS, React.
- **Package Manager**: Use `pnpm` exclusively.

## 4. Implementation Rules
- **Review First**: Always read this file before writing or modifying code.
- **Rich Media**: Incorporate high-quality visual placeholders or generated images if real assets are missing, avoiding "empty" looks.
- **SEO & Performance**: Ensure semantic HTML, proper meta tags, and optimized performance for a premium feel.
