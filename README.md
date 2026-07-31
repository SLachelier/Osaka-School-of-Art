# Osaka School of Art

Official website for the Osaka School of Art (大阪芸術学校) — a professional manga education institution based in Osaka, Japan. The website showcases programs, facilities, faculty, and provides enrollment information for aspiring mangaka worldwide.

## Overview

This is a modern, performant single-page application built with Next.js 16, featuring a sophisticated dark/light theme system, smooth animations, and a design that blends traditional Japanese aesthetics with contemporary web design.

## Tech Stack

### Core Framework
- **Next.js 16.2.9** - React framework with App Router and Turbopack
- **React 19.2.4** - UI library
- **TypeScript 5** - Type-safe development

### Styling & Animation
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Production-ready motion library
- **Custom CSS Variables** - Theme-aware design tokens

### UI Components
- **Radix UI** - Accessible component primitives (Accordion, Dialog, Navigation)
- **Lucide React** - Icon system
- **React Intersection Observer** - Scroll-based animations

### Development Tools
- **ESLint 9** - Code quality and consistency
- **Sharp** - High-performance image optimization

## Features

### Design System
- **Dual Theme Support**: Seamless dark/light mode with localStorage persistence and FOUC prevention
- **Japanese Aesthetics**: Color palette inspired by traditional Japanese art (Sumi, Washi, Akane)
- **Brand Colors**: Coral red (#f55546) and cyan blue (#68e0ff) accent system
- **Custom Typography**: Three-tier font system (Lato, Fjalla One, Facile Sans)
- **Responsive Design**: Mobile-first approach with breakpoint optimization

### Performance Optimizations
- **Dynamic Imports**: Below-the-fold sections lazy-loaded to reduce initial bundle size
- **Image Optimization**: Lazy loading with proper sizing and Next.js Image component
- **CSS Performance**: GPU acceleration, content-visibility, and containment strategies
- **Component Memoization**: React.memo for static components
- **Progressive Scrollbar**: Color transitions from coral to cyan based on scroll position

### User Experience
- **Smooth Animations**: Framer Motion-powered transitions with custom easing curves
- **Scroll Progress Indicators**: Visual feedback throughout the page
- **Intersection Observers**: Section-aware navigation with active state tracking
- **Accessible Navigation**: ARIA labels, focus management, and keyboard support
- **Mobile-Optimized**: Touch-friendly interface with hamburger menu

### Sections
1. **Hero**: Full-viewport call-to-action with founding principles
2. **About**: School mission and founder's story
3. **Facilities**: Real campus photography and amenities showcase
4. **Programs**: Three-tier curriculum (Beginner, Intermediate, Advanced)
5. **Faculty**: Instructor profiles and expertise
6. **Tuition**: Transparent pricing breakdown
7. **Visa**: Cultural visa pathway information
8. **FAQ**: Expandable accordion with common questions
9. **Enrollment**: Contact form and inquiry submission

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd osa

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application. The page auto-reloads on file changes.

### Build

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Project Structure

```
osa/
├── public/
│   ├── fonts/          # Local font files (Lato, Fjalla One, Facile Sans)
│   └── osa-logo-*.png  # Theme-specific logo assets
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles and design tokens
│   │   ├── layout.tsx      # Root layout with font loading
│   │   └── page.tsx        # Homepage with dynamic imports
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Page sections (Hero, About, etc.)
│   │   └── ui/             # Reusable UI components (Button, etc.)
│   ├── context/
│   │   └── ThemeContext.tsx  # Dark/light theme management
│   ├── lib/
│   │   ├── animations.ts   # Framer Motion variants
│   │   ├── constants.ts    # Site-wide content and configuration
│   │   ├── types.ts        # TypeScript type definitions
│   │   └── utils.ts        # Utility functions (cn, etc.)
├── eslint.config.mjs
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Key Implementation Details

### Theme System
- **Storage**: localStorage with `osa-theme` key
- **Initialization**: Inline blocking script prevents FOUC
- **CSS Strategy**: Custom properties remapped for light mode (Sumi/Washi inversion)
- **Smooth Transitions**: 250ms animations after initial load via `theme-ready` class

### Color System
Theme-aware CSS variables defined in `globals.css`:
- **Sumi (墨)**: Dark cool neutrals for backgrounds
- **Washi (和紙)**: Light neutrals for text
- **Akane (茜)**: Coral red primary accent
- **Cyan**: Electric blue secondary accent

### Animation Philosophy
- **Custom Easing**: `[0.25, 0.1, 0.25, 1.0]` for premium feel
- **Stagger Animations**: Sequential reveals for visual hierarchy
- **Hover States**: Smooth scale and shadow transitions
- **Scroll Triggers**: Intersection Observer-based viewport animations

### Performance Strategy
- **Code Splitting**: Dynamic imports reduce initial JavaScript by ~40%
- **Image Loading**: Lazy loading below-the-fold, priority for above-the-fold
- **CSS Containment**: Isolated component boundaries prevent layout thrashing
- **Will-change Hints**: GPU acceleration for animated elements

## Content Management

All site content is centralized in `src/lib/constants.ts`:
- Navigation items
- Contact information
- Program details
- Faculty profiles
- FAQ entries
- Facility features

Update content by editing this single file — no component changes required.

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Self-Hosted
```bash
# Build for production
npm run build

# Start server
npm start
```

The application runs on port 3000 by default.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## License

Private - All rights reserved.

## Contact

For inquiries about the school or website:
- Email: osa.culturalvisa@gmail.com
- Location: Arles Tanimachi 4F-W, 6-4-6 Tanimachi, Chuo-ku, Osaka 542-0012

---

Built with Next.js by the Osaka School of Art development team.
