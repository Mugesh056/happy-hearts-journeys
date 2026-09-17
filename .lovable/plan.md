# Happy Hearts Holidays — Phase 1 Landing Page

## Goal
Build a polished, cinematic travel-agency landing page that guides visitors from inspiration to a validated enquiry and then opens a prepared WhatsApp message for manual sending.

## Page Structure
- Sticky, responsive navigation with scroll-aware styling, mobile menu, anchor links, and enquiry CTA.
- Five-slide cinematic hero with realistic imagery, readable overlays, 5–7 second autoplay, arrows, indicators, touch gestures, hover pause, and reduced-motion support.
- A subtle realistic aircraft and route animation positioned away from key text and controls.
- Trust bar with four professional icon-led promises.
- “Travel Your Way” destination discovery with three data-driven categories and animated content changes.
- Destination sections in the requested order: Popular, Indian, Visa Information Available, Top Picks, and an asymmetric Most Popular editorial layout.
- Curated For You, Travel Experiences, brand story, sample traveler stories carousel, destination mood strip, holiday packages, gallery, three-step process, about content, final call-to-action, and premium footer.
- Image-led sections will preserve the requested 40–45% visual and 55–60% content balance.

## Enquiry and WhatsApp Flow
- Build the full enquiry form with accessible labels, required fields, Indian WhatsApp number validation, date checks, traveler controls, trip type, budget, requirements, and notes.
- Display friendly inline errors without browser alerts.
- On success, show the confirmation state and generate the structured, URL-encoded WhatsApp enquiry.
- Keep the WhatsApp number in one clearly configurable constant using the supplied placeholder; no automatic sending or API integration.
- Add a compact mobile fixed WhatsApp action that does not obstruct form fields or page content.

## Content and Data
- Store destinations, packages, experiences, hero slides, testimonials, and gallery items as replaceable typed data separate from presentation components.
- Mark all supplied testimonials as “Sample traveler story.”
- Use placeholders for all unknown contact details and never invent prices, claims, reviews, statistics, partnerships, or visa guarantees.
- Generate a cohesive set of realistic travel imagery and a transparent realistic aircraft asset; optimize delivery and lazy-load below-the-fold images.

## Visual System
- Create a semantic Tailwind design system using deep navy, midnight blue, warm orange, soft gold, warm off-white, white, and subtle sky blue.
- Use Playfair Display for headings and Inter for body copy.
- Apply restrained cinematic transitions, image reveal/zoom, gentle parallax, polished button movement, visible focus states, and reduced-motion fallbacks.
- Keep layouts intentional at 360–414px mobile, tablet widths, and wide desktop sizes with no horizontal overflow.

## Technical Approach
- Implement with the project’s TanStack Start/React/TypeScript foundation, Tailwind CSS v4, Lucide icons, Embla carousel, reusable components, and semantic HTML.
- Keep all links functional as section anchors; legal links remain non-deceptive placeholders until pages/content are supplied.
- Add route-specific title, description, Open Graph, Twitter card, canonical path, and TravelAgency structured data.
- Preserve performance with responsive local assets, stable image dimensions, restrained JavaScript, and no heavy video.

## Verification
- Validate the live page at desktop and mobile sizes with browser interaction checks.
- Test both carousels, navigation, category switching, enquiry errors, success state, generated WhatsApp URL/message, touch-sized controls, reduced-motion behavior, broken images, console errors, and horizontal overflow.
