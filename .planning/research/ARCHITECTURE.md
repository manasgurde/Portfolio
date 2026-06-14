# Architecture Research

## Component Boundaries
- **Hero/Intro Engine**: Manages full-screen canvas and particle field.
- **Scroll Story Orchestrator**: Controls scroll-linked GSAP timelines across sections.
- **Content Blocks**: Reusable UI components (Project cards, Testimonials).
- **Contact Service**: Next.js API route integrating with Resend and Supabase.

## Data Flow
- Static content (Project details, Timeline) fetched at build time.
- Dynamic submissions (Contact form) sent via client-side fetch to Next.js API Route -> Resend & Supabase.

## Build Order
1. Foundational layout and Next.js setup.
2. WebGL/Three.js hero background.
3. GSAP ScrollTrigger orchestrator.
4. Individual storytelling sections.
5. API Routes and integrations.
6. Performance optimization and SEO.
