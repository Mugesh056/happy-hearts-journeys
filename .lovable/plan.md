# Happy Hearts Holidays — UI Refinement

## Goal
Refine the existing landing page without changing its branding, content, sections, navigation, or enquiry behavior. The update will make imagery and the form more balanced, repair the “Follow the Feeling” scroller, add the supplied brand logo, and strengthen the existing travel motion system.

## Visual Scale and Responsiveness
- Reduce the visual height/scale of destination cards, experience tiles, editorial imagery, package photos, gallery cells, and full-width image sections by roughly 10–20% while preserving aspect ratios and image quality.
- Keep the cinematic hero immersive but refine its crop and spacing so imagery supports rather than overwhelms the message.
- Tighten section spacing where image reductions would otherwise leave excess whitespace.
- Preserve clean touch targets and readable content at desktop, tablet, and 360–414px mobile widths.

## Compact Enquiry Form
- Constrain and center the form at a more appropriate desktop width, with a better-balanced text/form split.
- Reduce form padding, fieldset spacing, label spacing, input height, and textarea height while retaining comfortable mobile touch sizing.
- Use responsive grids that stack cleanly on small screens and keep the submission controls within the viewport.
- Keep the existing validation, confirmation, and manual WhatsApp handoff unchanged.

## “Follow the Feeling” Scroller
- Replace the fixed hero-slide index mapping with dynamically derived entries from destination data.
- Deduplicate by destination identity and render exactly the available matching items—never clone cards to fill capacity.
- Add a clear empty state for missing data.
- Keep horizontal touch scrolling and scroll snapping, hide decorative scrollbars, and constrain item widths so desktop and mobile never overflow the page.

## Travel Motion
- Improve the existing aircraft animation with a natural curved path, gentle banking, depth/scale changes, and a route trail that stays inside the hero.
- Add a lightweight CSS-based globe vignette with subtle depth, route arcs, and location points in an appropriate travel section; no heavy 3D dependency.
- Add restrained reveal-on-scroll behavior to selected section headings, images, and cards using IntersectionObserver and CSS transitions.
- Keep hover movement subtle and preserve full `prefers-reduced-motion` fallbacks.

## Brand Logo
- Optimize and tightly crop the supplied colored Happy Hearts Holidays logo for web delivery.
- Replace the temporary icon-and-text brand treatment in the header with the real logo and use it again where contrast remains accessible in the footer.
- Preserve the current favicon and overall brand palette unless the supplied logo requires a context-safe presentation.

## Verification
- Check desktop, tablet, and mobile layouts in the live page.
- Verify no horizontal overflow, image failures, duplicated scroller items, clipped controls, form overflow, or layout shifts.
- Verify hero controls, menu, scroller gestures, enquiry validation/success, reduced-motion behavior, and console errors.
