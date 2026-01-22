# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server**: `npm run dev` - Start Vite development server with HMR
- **Build**: `npm run build` - TypeScript compile + Vite production build
- **Lint**: `npm run lint` - Run ESLint
- **Preview**: `npm run preview` - Preview production build locally

## Architecture

This is a personal portfolio website built with React 19, TypeScript, and Vite.

### Tech Stack
- React 19 with React Router v7 for client-side routing
- TypeScript for type safety
- Tailwind CSS for styling (with custom animations for marquee effects)
- EmailJS for contact form functionality
- react-scroll for smooth scrolling navigation

### Project Structure
- `src/App.tsx` - Main router setup with Navbar and Footer wrapping all routes
- `src/components/Home.tsx` - Landing page combining Hero, About, TechStack, Projects, and Contact sections
- `src/constants/constants.tsx` - Hero text variations (randomly selected on page load)
- `src/blogs/` - Markdown blog posts (blog feature currently commented out in App.tsx)

### Key Patterns
- Single-page application with section-based navigation using react-scroll
- Static assets served from `/public/assets/`
- Tailwind configuration includes custom marquee animations at varying speeds

## Coding Style

### Core Principles
- Follow SOLID principles
- Apply DRY (Don't Repeat Yourself) - extract reusable logic
- Write pure functions where possible - avoid side effects, return predictable outputs

### Functions
- Keep functions small and focused (single responsibility)
- Extract complex logic into well-named helper functions
- Prefer composition over inheritance

### Constants
- Create constants for colors, spacing, padding, and other UI values
- Store magic numbers and strings as named constants
- Place shared constants in `src/constants/` directory
- Use TypeScript `as const` for immutable constant objects

### React Specific
- Prefer functional components with hooks
- Extract reusable UI logic into custom hooks
- Memoize expensive computations with `useMemo`
- Memoize callback functions with `useCallback` when passed as props
- Keep components focused - split large components into smaller ones
- Colocate related state - lift state only when necessary

### TypeScript
- Define explicit types for props and function parameters
- Avoid `any` - use proper types or `unknown` when type is uncertain
- Create interfaces for component props
- Use type inference where types are obvious

### Naming
- Components: PascalCase (`ProjectCard.tsx`)
- Hooks: camelCase with `use` prefix (`useScrollPosition`)
- Constants: UPPER_SNAKE_CASE for primitives, PascalCase for objects/arrays
- Files: Match the default export name
