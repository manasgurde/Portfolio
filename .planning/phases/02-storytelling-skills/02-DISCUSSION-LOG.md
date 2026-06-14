# Phase 2 Discussion Log: Storytelling & Skills

*This log captures the interaction that led to the decisions in `02-CONTEXT.md`.*

## Discussed Areas

### 1. Story Layout Structure
**Options Presented:**
- Full-screen snapping panels (User scrolls and the page "snaps" to the next chapter)
- Continuous fluid scroll (Text flows smoothly over a fixed background)
- Horizontal scrolling section (User scrolls down, but the content moves horizontally)

**Selection:** Full-screen snapping panels.

### 2. Background Evolution
**Options Presented:**
- Particles accelerate and form a tunnel/vortex
- Particles change color and density based on the chapter theme
- Camera flies through the particles at varying speeds

**Selection:** Particles change color and density based on the chapter theme.

### 3. Skill Card Rendering
**Options Presented:**
- 2D HTML/CSS overlays synced with 3D camera (Crisp text, easier to style, sit "above" particles)
- True 3D meshes in the Three.js canvas (Cards exist inside the particle field, react to 3D lighting)
- Hybrid: 3D floating icons with HTML text labels on hover

**Selection:** Hybrid: 3D floating icons with HTML text labels on hover.
