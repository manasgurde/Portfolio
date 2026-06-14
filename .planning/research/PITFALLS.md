# Pitfalls Research

## Common Mistakes
1. **Performance Degradation**: Heavy 3D elements and complex GSAP timelines can tank frame rates on mobile devices.
   - *Prevention*: Lazy load Three.js components, use `requestAnimationFrame` properly, disable complex WebGL on low-end mobile.
   - *Phase*: Addressed in base architecture and optimization phases.
2. **Scroll Hijacking**: Forcing unnatural scroll speed frustrates users.
   - *Prevention*: Use ScrollTrigger to link animations to natural scroll progress rather than preventing default scroll.
   - *Phase*: Storytelling / Animation setup.
3. **Accessibility Failures**: Missing focus states and unreadable text over complex backgrounds.
   - *Prevention*: Ensure high contrast, add `prefers-reduced-motion` support.
   - *Phase*: UI/UX Polish.
