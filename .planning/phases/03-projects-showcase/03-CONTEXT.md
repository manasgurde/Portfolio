# Phase 3 Context: Projects Showcase

## Domain
This phase implements the "Selected Works" or Projects section, which reveals the user's projects with cinematic details and layout.

## Decisions

### Project Layout Style
- **Decision**: Horizontal scrolling carousel.
- **Details**: As the user scrolls vertically down the page, GSAP ScrollTrigger will pin the Projects section and translate the projects container horizontally to create a smooth, side-scrolling carousel effect.

### Media Type
- **Decision**: High-res Images / Screenshots.
- **Details**: Each project card/slide will prominently feature high-quality images. The images will likely have parallax or reveal effects tied to the horizontal scroll progress.

### Background Behavior
- **Decision**: Camera orbits slowly around a central point.
- **Details**: During the Projects section, the 3D particle background will shift to a slow orbit mode. The particles will serve as a subtle, elegant backdrop that doesn't distract from the project images, but maintains the premium feel.

## Prior Decisions Carried Forward
- Next.js 15+ App Router, Tailwind CSS, TypeScript.
- Zustand `useStore` to sync active chapter/section state to the 3D canvas.
- GSAP and ScrollTrigger for complex scroll animations (like pinning and horizontal scrolling).

## Canonical Refs
- None.
