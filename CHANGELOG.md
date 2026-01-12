# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - 2026-01-12

### Added
- **WhatsApp Floating Button**: Added a fixed floating action button for WhatsApp contact.
    - Uses `react-icons` (FaWhatsapp) for standard branding.
    - Features glassmorphism styling and "pop-up" hover animation.
    - Accessible via `WhatsAppButton.jsx`.
- **Mobile Navigation**: Implemented a responsive Hamburger Menu for the Navbar.
    - Links collpase into a drawer on mobile devices to prevent overflow.

### Changed
- **Heading Alignment**: Refactored all section headings (`h2`) to use `text-align: center` for robust centering across all devices.
- **Hero Typography**: Removed inline styles from Hero title. Now uses CSS classes (`.hero-title`) to properly scale font size from `6rem` (desktop) to `2.5rem` (mobile).
- **Mobile Layout**:
    - Reduced section padding from `6rem` to `4rem 1rem` on mobile.
    - Forced grid layouts (`.grid-cols-2`, `.grid-cols-3`) to stacked single columns on mobile.
    - Added `padding-top: 100px` to Hero section to prevent the fixed navbar from overlapping content.
- **Dependencies**: Added `react-icons` package.
- **Configuration**: Updated `vite.config.js` with `base: '/Portfolio/'` for GitHub Pages deployment.

### Fixed
- **Navbar Overlap**: Fixed issue where the navbar covered the profile photo on mobile by adding top padding to the hero section.
- **Horizontal Scroll**: Eliminated horizontal scrolling on mobile by fixing width constraints and font sizes.
