# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Rocco Sassani. A React SPA with a futuristic AI theme showcasing projects, social links, and stock trading tools.

## Development Commands

All commands run from `personalwebsiteapp/` directory:

```bash
cd personalwebsiteapp
npm start         # Dev server at localhost:3000
npm run build     # Production build to build/
npm test          # Run tests (interactive watch mode)
```

## Architecture

### Directory Structure
- `personalwebsiteapp/` - React app root (Create React App)
- `personalwebsiteapp/src/App.js` - Main app with all routes and page sections
- `personalwebsiteapp/src/components/ui/` - Reusable UI components (shadcn/ui pattern)
- `personalwebsiteapp/src/lib/utils.js` - `cn()` utility for Tailwind class merging

### Routes (React Router)
- `/` - Homepage with Hero, Projects, Social, Stockhours, Contact sections
- `/stockoptionscalculator` - Stock options calculator tool
- `/optionscalculator` - Options P&L calculator (iOS app showcase)
- `/optionscalculator/privacy` - Privacy policy page

### UI Component Pattern
Components follow shadcn/ui conventions:
- Built on Radix UI primitives
- Styled with Tailwind CSS + class-variance-authority (CVA)
- Use `cn()` from `lib/utils.js` to merge class names

### Styling
- Tailwind CSS with custom config (`tailwind.config.js`)
- Custom animations: `animate-fade-in`, `animate-slide-up`, `animate-glow`, `animate-float`
- Animation delays: `animation-delay-200`, `animation-delay-400`, etc.
- Dark theme with glass-morphism effects (backdrop-blur, bg-white/5)

### Firebase
Environment variables for Firebase config (add to `.env`):
- `REACT_APP_FIREBASE_API_KEY`
- `REACT_APP_FIREBASE_AUTH_DOMAIN`
- `REACT_APP_FIREBASE_DATABASE_URL`
- `REACT_APP_FIREBASE_PROJECT_ID`
- `REACT_APP_FIREBASE_STORAGE_BUCKET`
- `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
- `REACT_APP_FIREBASE_APP_ID`

## Key Dependencies
- React 19, React Router 7
- Tailwind CSS + tailwindcss-animate
- Radix UI (Avatar, Dialog, Dropdown, Tooltip, etc.)
- lucide-react for icons
- class-variance-authority for component variants
