# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern portfolio website for Lakzhmy Mari Zaro, an Industrial & Computational Designer. The site is built entirely with vanilla HTML5, CSS3, and JavaScript with zero dependencies, designed for easy deployment and maintenance.

## Tech Stack

- **No Build Process**: Pure HTML/CSS/JS - open `index.html` directly in a browser
- **No Dependencies**: No npm, webpack, or any build tools
- **Theme System**: CSS variables for light/dark theme switching with localStorage persistence
- **Deployment**: Static site ready for GitHub Pages, Netlify, or Vercel

## Development Commands

### Local Development
```bash
# Simply open the file in your browser
open index.html   # macOS
start index.html  # Windows
xdg-open index.html  # Linux
```

No server required, though you can use any static server:
```bash
# Python 3
python -m http.server 8000

# Node.js (if http-server is installed)
npx http-server
```

### Deployment
This is a static site - no build step needed. Just deploy the files directly to:
- GitHub Pages: Push to repo, enable in Settings > Pages
- Netlify/Vercel: Connect repo, no build settings required

## Architecture

### File Structure
```
LZ-website/
├── index.html              # Home page with hero, bio, project grid, and contact
├── story.html              # About page with experience and skills
├── css/
│   ├── style.css          # Main styles, CSS variables, theme system, responsive design
│   ├── project.css        # Project detail page specific styles
│   └── story.css          # Story/about page specific styles
├── js/
│   └── main.js            # Theme toggle, smooth scroll, lazy loading, animations
├── images/
│   ├── nose-pad-system/   # Images for Nose Pad System project
│   ├── bex-sunglasses/    # Images for Bex Sunglasses project
│   ├── pet-care-startup/  # Images for Pet Care Startup project
│   └── led-light-wedges/  # Images for LED Light Wedges project
└── projects/
    ├── nose-pad-system.html
    ├── bex-sunglasses.html
    ├── pet-care-startup.html
    └── led-light-wedges.html
```

### Theme System

The entire site uses a CSS variable-based theming system defined in `css/style.css`:

```css
:root {
    --bg-primary: #FFFFFF;
    --text-primary: #000000;
    --border-color: #585858;
    --label-color: #585858;
    /* ... more variables */
}

[data-theme="dark"] {
    --bg-primary: #000000;
    --text-primary: #FFFFFF;
    --border-color: #585858;
    --label-color: #585858;
    /* ... dark variants */
}
```

Theme switching is handled in `js/main.js` via:
- `toggleTheme()` - switches between light/dark
- `applyTheme(theme)` - applies theme to `<html data-theme="...">`
- `localStorage.getItem('theme')` - persists user preference

**IMPORTANT**: When modifying any colors or creating new components:
1. Always use CSS variables (e.g., `var(--bg-primary)`, `var(--border-color)`, `var(--label-color)`)
2. Never hardcode colors - this breaks the theme system
3. Test in both light and dark themes
4. Border color is intentionally subtle (#585858) and uses 0.5px thickness for minimal visual separation

### Page Types & Patterns

**Home Page** (`index.html`):
- Header with sticky navigation and mix-blend-mode: difference effect
- Hero section with large name title (max 160px, 60px spacing to bio section)
- Bio section with label/content grid layout (no border-top)
- Projects grid (2 columns desktop, 1 column mobile) with rounded images (8px radius)
- Contact section with label/content grid
- Footer with branding and social links

**Story Page** (`story.html`):
- Extends main layout with `story.css`
- Uses sections with consistent `.story-section` class
- Experience/skills organized in grid layouts

**Project Pages** (files in `projects/`):
- Consistent template structure with back navigation
- Project header with metadata (role, year, category)
- Multiple content sections with consistent spacing
- Image grid layouts (single-column, 2-column, or 3-column)
- Images stored in organized folders under `images/[project-name]/`
- Navigation to next project
- Uses `project.css` for specific styles
- Images have 8px border-radius and no borders/shadows

### JavaScript Architecture

`js/main.js` is organized into functional modules:

1. **Theme Management** (lines 7-42)
   - Core theme switching logic
   - localStorage persistence

2. **Smooth Scroll** (lines 44-69)
   - Handles anchor link navigation with header offset

3. **Lazy Loading** (lines 71-95)
   - Uses IntersectionObserver for images with `data-src` attribute

4. **Header Scroll Effect** (lines 97-115)
   - Adds shadow to header on scroll

5. **Project Card Animations** (lines 128-157)
   - Fade-in and slide-up animations using IntersectionObserver

### Responsive Breakpoints

Defined in `css/style.css` with mobile-first approach:

- **Desktop**: Default (1024px+)
- **Tablet**: `@media (max-width: 1024px)`
- **Mobile**: `@media (max-width: 768px)`
- **Small Mobile**: `@media (max-width: 480px)`

Changes at each breakpoint:
- Font sizes scale down (via CSS variable overrides)
- Grid layouts collapse (2-col → 1-col)
- Header becomes vertical stack
- Padding reduces progressively

## Adding New Content

### Adding a New Project

1. **Duplicate a project template**:
   ```bash
   cp projects/nose-pad-system.html projects/new-project.html
   ```

2. **Edit the new project page**:
   - Update `<title>` and meta description
   - Change project metadata (role, year, category)
   - Update content sections
   - Replace image placeholders

3. **Add to home page grid** (`index.html`):
   ```html
   <a href="projects/new-project.html" class="project-card">
       <div class="project-image">
           <img src="image-url.jpg" alt="Description">
       </div>
       <div class="project-info">
           <div class="project-details">
               <h3 class="project-title">Project Name</h3>
               <p class="project-subtitle">Project Subtitle</p>
           </div>
           <span class="project-type">Product Design</span>
       </div>
   </a>
   ```

4. **Update next/previous project navigation** in surrounding project pages

**Project Card Layout**:
- Image with 8px border-radius at top
- Project info section below with flexbox layout
- Left side: project title and subtitle (left-aligned)
- Right side: project type(s) in uppercase (right-aligned)
- No borders or shadows on card container
- Hover effect: image scales to 1.05x

### Modifying Theme Colors

Edit CSS variables in `css/style.css` (lines 4-40):
- Change `:root` for light theme
- Change `[data-theme="dark"]` for dark theme
- Always update both to maintain theme consistency

### Adding New Pages

Follow the pattern from `story.html`:
1. Copy header and footer HTML structure
2. Include main stylesheet: `<link rel="stylesheet" href="css/style.css">`
3. Add page-specific styles in a new CSS file if needed
4. Include `js/main.js` for theme switching
5. Update navigation links in header

## Design Principles

**Maintained in this codebase:**

1. **Minimalist aesthetic** - Clean borders, generous whitespace, simple typography
2. **Consistent spacing** - Use CSS variable spacing scale (--spacing-xs through --spacing-xl)
3. **Responsive grid layouts** - Label + content pattern for bio/contact sections
4. **Theme-aware design** - All new components must support both themes
5. **Zero dependencies** - Keep the project dependency-free for maximum portability
6. **Semantic HTML** - Use proper heading hierarchy and semantic elements

## Common Gotchas

1. **Relative paths in project pages**: Project files are in `projects/` subdirectory, so they use `../` for CSS, JS, and back navigation
2. **Theme toggle must exist on every page**: The theme switcher button with id `theme-toggle` is required on all pages - icons use `var(--text-primary)` to ensure visibility
3. **Project card image aspect ratio**: Set to 4/3 via CSS (`aspect-ratio: 4/3`) with 8px border-radius
4. **Grid template columns**: Bio and contact sections use `grid-template-columns: 200px 1fr` (desktop), collapsing to 1fr on mobile
5. **Border styling**: All section borders use 0.5px thickness with #585858 color for subtle separation
6. **Hero spacing**: No border between hero and bio sections, uses 60px padding-bottom on hero instead
7. **Header text styling**: Uses `mix-blend-mode: difference` with `var(--text-primary)` for dynamic color inversion

## Image Guidelines

- **Project cards**: 800x600px (4:3 aspect ratio) with 8px border-radius
- **Project detail images**: 1200x900px or larger with 8px border-radius
- **Format**: PNG or WebP recommended
- **Loading**: Images support lazy loading with `data-src` attribute
- **Alt text**: Always provide descriptive alt text for accessibility
- **Organization**: Store images in `images/[project-name]/` folders
- **Styling**: No borders or drop shadows, clean rounded corners only

### Image Layout Options

Project pages support three grid layouts via CSS classes:

1. **Two-column grid** (default): `<div class="project-images-grid">`
   - 2 columns on desktop, 1 column on mobile
   - Good for side-by-side comparisons

2. **Three-column grid**: `<div class="project-images-grid three-col">`
   - 3 columns on desktop, 2 on tablet, 1 on mobile
   - Ideal for multiple small detail shots

3. **Single-column layout**: `<div class="project-images-grid single-col">`
   - 1 column on all screen sizes
   - Best for full-width showcase images
