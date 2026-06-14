# Phase 1: Foundation & Base Intro Context

## Domain
Setup Next.js, basic layout, and the 3D hero environment. We'll clarify HOW to implement this. (New capabilities belong in other phases.)

## Locked Requirements (from SPEC.md)
*No SPEC.md found.*

## Canonical Refs
- No external specs or ADRs referenced.

## Decisions
- **Next.js App Router Structure:** Wrap the entire application in the 3D canvas so particles flow seamlessly as the user scrolls down through the journey.
- **Typography Animation Trigger:** Play the "Hello" -> "I'm [Name]" sequence automatically on load to provide immediate engagement and set the cinematic tone right away.
- **Three.js Performance:** Reduce particle count and disable post-processing (bloom/glow) on low-end devices to ensure the cinematic feel is maintained without lag.

## Code Context
- (No prior reusable components found; empty codebase)
