# Story Motion and Top Picks Grid

## Goal
Make the sample traveler stories scale cleanly beyond ten entries and automatically advance every four seconds, while changing “Chosen with care” into a fixed responsive grid with correctly fitted images.

## Changes
- Update the story presentation to show the appropriate number of cards per viewport and advance by one story every 4 seconds.
- Keep previous/next controls, touch-friendly navigation, pause behavior, and smooth transitions.
- Ensure navigation and wrapping continue to work when the story data grows beyond ten entries.
- Replace the horizontal “Chosen with care” strip with a responsive grid at every screen size.
- Size grid images consistently with `object-cover`, balanced aspect ratios, and one/two/four-column layouts for mobile, tablet, and desktop.
- Prevent horizontal scrolling and preserve the existing colors, wording, cards, and actions.

## Verification
- Check automatic four-second story movement and manual controls.
- Check both sections at mobile, tablet, and desktop sizes for clipping, overflow, and image fit.
