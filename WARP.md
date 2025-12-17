# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Package Manager
This project uses **pnpm** as the package manager (pnpm-lock.yaml is present).

### Common Commands
```bash
# Development
pnpm dev                    # Start Next.js development server at http://localhost:3000

# Building
pnpm build                  # Production build

# Production
pnpm start                  # Start production server

# Linting
pnpm lint                   # Run ESLint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16.0.10 with App Router
- **React**: Version 19.2.1 (React Server Components enabled)
- **TypeScript**: Strict mode enabled
- **Styling**: Tailwind CSS v4 with custom theme system
- **UI Components**: Base UI (@base-ui/react) + shadcn-style components
- **Icons**: Tabler Icons React
- **Animations**: tw-animate-css

### Project Structure
```
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout with font configuration
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles with Tailwind imports
├── components/            # React components
│   ├── ui/               # Reusable UI components (shadcn-style)
│   └── *.tsx             # Page-specific components
├── lib/                   # Utility functions
│   └── utils.ts          # cn() utility for className merging
└── public/               # Static assets
```

### Key Configurations

#### Path Aliases
The project uses `@/*` for absolute imports pointing to the root directory:
- `@/components` → `./components`
- `@/lib` → `./lib`
- `@/hooks` → `./hooks` (configured but not yet created)

#### TypeScript
- Strict mode enabled
- Target: ES2017
- JSX: react-jsx (modern JSX transform)
- Module resolution: bundler

#### Tailwind CSS
- **Version**: 4.0 (using new CSS-first configuration)
- **Configuration**: Defined inline in `app/globals.css` using `@theme` directive
- **Imports**: 
  - `@import "tailwindcss"`
  - `@import "tw-animate-css"`
  - `@import "shadcn/tailwind.css"`
- **Theme System**: 
  - Uses OKLCH color space for better color consistency
  - CSS variables for theming with light/dark mode support
  - Custom radius variables (sm, md, lg, xl, 2xl, 3xl, 4xl)
  - Shadcn-style design tokens
- **PostCSS**: Uses `@tailwindcss/postcss` plugin

#### shadcn/ui Configuration (components.json)
- **Style**: base-nova
- **Base Color**: neutral
- **Icon Library**: tabler
- **CSS Variables**: enabled
- **RSC**: enabled (React Server Components)

### Fonts
The project uses three Google Fonts configured in the root layout:
- **Nunito Sans**: Primary sans-serif (CSS variable: `--font-sans`)
- **Geist Sans**: Secondary sans-serif (CSS variable: `--font-geist-sans`)
- **Geist Mono**: Monospace font (CSS variable: `--font-geist-mono`)

### Component Patterns

#### UI Components
- Built with Base UI primitives for accessibility
- Located in `components/ui/`
- Follow shadcn/ui conventions with composition patterns
- Use `cn()` utility from `lib/utils.ts` for conditional classNames
- Components are client-side by default (use `"use client"` directive)

#### Styling Approach
- Tailwind CSS utility classes
- Class Variance Authority (CVA) for component variants
- `clsx` and `tailwind-merge` combined in `cn()` utility

### Component Library
The UI component system includes:
- **Layout**: Card, Separator
- **Forms**: Input, Textarea, Label, Field, InputGroup, Select, Combobox
- **Feedback**: Badge, AlertDialog
- **Navigation**: DropdownMenu, Button

### ESLint Configuration
- Uses Next.js ESLint config (core-web-vitals + TypeScript)
- Flat config format (eslint.config.mjs)
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Development Notes

### Adding New UI Components
When adding shadcn-style components, they should be placed in `components/ui/` and follow these patterns:
- Use Base UI primitives for accessibility
- Support component composition
- Include TypeScript types
- Use CVA for variants when applicable
- Export all sub-components

### Styling Guidelines
- Use Tailwind utility classes directly in components
- Reference CSS variables for colors (e.g., `bg-background`, `text-foreground`)
- For conditional classes, use the `cn()` utility from `@/lib/utils`
- Support dark mode via the `.dark` class on ancestors

### TypeScript
- Always type component props
- Use `React.ComponentPropsWithoutRef<>` for component prop extension
- Leverage path aliases (`@/*`) for imports
