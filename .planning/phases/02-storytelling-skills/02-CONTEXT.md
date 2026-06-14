# Phase 2 Context: Storytelling & Skills

## Domain
This phase implements the scroll-linked storytelling chapters ("Who Am I") and the interactive floating skill cards ecosystem.

## Decisions

### Story Layout Structure
- **Decision**: Full-screen snapping panels.
- **Details**: As the user scrolls, the page will "snap" to the next storytelling chapter to create distinct, framed beats for the narrative.

### Background Evolution
- **Decision**: Particles change color and density based on the chapter theme.
- **Details**: The underlying 3D particle canvas (created in Phase 1) will listen to scroll events and transition its colors and particle density to match the mood of the active storytelling panel.

### Skill Card Rendering
- **Decision**: Hybrid rendering (3D floating icons with HTML text labels on hover).
- **Details**: The skills will be represented as 3D meshes (icons/shapes) floating inside the R3F canvas to interact with the lighting and depth, but will use HTML overlays (via `@react-three/drei` `Html` component or similar) to show crisp, styleable text labels on hover.

## Prior Decisions Carried Forward
- Next.js 15+ App Router, Tailwind CSS, TypeScript.
- GSAP and Framer Motion for scroll animations and transitions.
- The 3D canvas wraps the entire application as a fixed background.

## Canonical Refs
- None. (No external specs or ADRs linked for this phase).
