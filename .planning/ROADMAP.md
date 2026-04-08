# Roadmap: Pinewood Greens HOA Website Redesign

## Overview

Seven phases turn a broken-state Bootstrap 3 static site into a polished, accessible, on-brand HOA presence. The sequence is dependency-driven: foundation fixes first so fonts load, then WCAG blockers cleared, then typography wired, then inline styles extracted into the token system, then content pages polished, then SEO/reach additions, and finally a full accessibility audit validates the complete site. Each phase delivers a verifiable, coherent capability before the next begins.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Broken Foundation Fixes** - Repair head.html infrastructure so fonts load, HTML is valid, and dead code is eliminated
- [ ] **Phase 2: Accessibility Blockers** - Resolve three existing WCAG 2.1 AA failures before they become launch blockers
- [ ] **Phase 3: Typography & Token Completion** - Define and wire font tokens; establish visual hierarchy across heading levels
- [ ] **Phase 4: Jumbotron & Inline Style Refactor** - Extract all hardcoded inline styles into the CSS token system
- [ ] **Phase 5: Content Page Polish** - Consistent page titles, logo spacing, footer display, and responsive images
- [ ] **Phase 6: Reach & SEO** - Meta descriptions, Open Graph tags, and print stylesheet
- [ ] **Phase 7: Accessibility Audit** - Final axe DevTools + Lighthouse validation across all pages

## Phase Details

### Phase 1: Broken Foundation Fixes
**Goal**: The site loads fonts correctly, has valid HTML, and carries no non-functional dead code
**Depends on**: Nothing (first phase)
**Requirements**: INFRA-01, INFRA-02, INFRA-03, INFRA-04, INFRA-05
**Success Criteria** (what must be TRUE):
  1. Google Fonts load over HTTPS with preconnect hints visible in DevTools waterfall
  2. The page source contains exactly one `</title>` closing tag
  3. No Google Analytics UA/SafeLinks script tag appears in page source
  4. Mailchimp widget fills its container column on a 375px-wide viewport with no horizontal scroll
  5. A comment in head.html explicitly documents that Bootstrap must precede pwg.css
**Plans**: 2 plans

Plans:
- [x] 01-01-PLAN.md — Fix head.html: HTTPS fonts with preconnect, remove duplicate title tag, remove broken GA script, add load-order comment
- [x] 01-02-PLAN.md — Fix Mailchimp responsive: remove fixed 600px inline width from subscribe.md, add responsive CSS rule to pwg.css

### Phase 2: Accessibility Blockers
**Goal**: Keyboard and screen-reader users can navigate the site without encountering WCAG 2.1 AA failures
**Depends on**: Phase 1
**Requirements**: A11Y-01, A11Y-02, A11Y-03, A11Y-04, A11Y-05
**Success Criteria** (what must be TRUE):
  1. Tab key alone opens and closes all navbar dropdown menus at every viewport width
  2. A visible focus ring appears on every interactive element including dropdown toggles when focused with the keyboard
  3. The logo image in the navbar has a non-empty alt attribute describing its link destination
  4. A skip-to-content link is the first focusable element on the page and jumps focus to main content when activated
  5. A screen reader announces the navigation landmark with a meaningful label (not just "navigation")
**Plans**: 2 plans

Plans:
- [x] 02-01-PLAN.md — HTML/CSS fixes: focus ring, logo alt, skip link, nav aria-label
- [x] 02-02-PLAN.md — Keyboard handler for Bootstrap dropdowns (Enter/Space/Escape)
**UI hint**: yes

### Phase 3: Typography & Token Completion
**Goal**: The site uses a consistent, token-driven font pairing that replaces Bootstrap's default Helvetica stack
**Depends on**: Phase 2
**Requirements**: TYPE-01, TYPE-02, TYPE-03, TYPE-04, TYPE-05
**Success Criteria** (what must be TRUE):
  1. `--font-body` and `--font-heading` CSS custom properties are defined in the `:root` block of pwg.css
  2. Body text renders in the chosen body font (not Helvetica/Arial) on all pages
  3. H1, H2, and H3 elements render in the chosen heading font and are visually distinct from each other in size
  4. Paragraph text has comfortable line height and spacing that does not crowd on long-form content pages
**Plans**: 1 plan

Plans:
- [x] 03-01-PLAN.md — Define font tokens, wire body/heading typography, upgrade Google Fonts loading to HTTPS
**UI hint**: yes

### Phase 4: Jumbotron & Inline Style Refactor
**Goal**: All hardcoded inline styles and inline `<style>` blocks are moved into pwg.css so the token system controls the full design
**Depends on**: Phase 3
**Requirements**: DSS-01, DSS-02, DSS-03, DSS-04, DSS-05
**Success Criteria** (what must be TRUE):
  1. No jumbotron include file contains a `background-image` inline `style=` attribute; images are applied via CSS modifier classes
  2. Jumbotron overlay color is set by a CSS class, not a hardcoded `rgba()` inline value
  3. No inline `<style>` block exists in index.html, newsarchive.md, or subscribe.md
  4. pwg.css `:root` block contains a comment on `--pine-sage` warning it must never be used as text color
  5. Footer contrast pair is confirmed passing via axe DevTools before phase closes
**Plans**: 3 plans
**UI hint**: yes

Plans:
- [x] 04-01-PLAN.md — Add CSS modifier classes for jumbotron backgrounds, overlays, and migrated widget styles to pwg.css
- [x] 04-02-PLAN.md — Remove inline styles from all jumbotron includes and inline style blocks from index.html, newsarchive.md, subscribe.md
- [ ] 04-03-PLAN.md — Footer contrast verification checkpoint (DSS-05)

### Phase 5: Content Page Polish
**Goal**: Content pages have consistent, visually treated headings, correct logo spacing, a readable footer, and images that scale on mobile
**Depends on**: Phase 4
**Requirements**: PLSH-01, PLSH-02, PLSH-03, PLSH-04
**Success Criteria** (what must be TRUE):
  1. The h1 on every content page is visually distinct from body text (size, weight, or color treatment)
  2. The header logo has consistent padding that does not crowd the navbar edge at any viewport width
  3. Footer address and phone number display with adequate padding — no text touching the container edge
  4. All inline pixel-dimension img tags on content pages scale correctly on a 375px-wide viewport without overflow
**Plans**: TBD
**UI hint**: yes

### Phase 6: Reach & SEO
**Goal**: All major pages have accurate meta descriptions, Open Graph tags for social sharing, and a print stylesheet for clean printing
**Depends on**: Phase 5
**Requirements**: SEO-01, SEO-02, SEO-03
**Success Criteria** (what must be TRUE):
  1. Viewing page source on any major page shows a populated `<meta name="description">` tag with relevant content
  2. Sharing the homepage URL in a social app (or using an OG debugger) shows a title, description, and image
  3. Printing any page via the browser produces output with no navbar and no sidebar clutter
**Plans**: TBD

### Phase 7: Accessibility Audit
**Goal**: A complete axe DevTools and Lighthouse pass confirms the site meets WCAG 2.1 AA with no remaining failures
**Depends on**: Phase 6
**Requirements**: A11Y-06
**Success Criteria** (what must be TRUE):
  1. axe DevTools reports zero violations on the homepage, at least one dropdown page, and at least one content page
  2. Lighthouse accessibility score is 90 or higher on the homepage
  3. All color/background pairs in the design system are documented as confirmed passing 4.5:1 contrast in pwg.css comments
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5 → 6 → 7

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Broken Foundation Fixes | 0/2 | Not started | - |
| 2. Accessibility Blockers | 0/TBD | Not started | - |
| 3. Typography & Token Completion | 0/TBD | Not started | - |
| 4. Jumbotron & Inline Style Refactor | 2/3 | In Progress|  |
| 5. Content Page Polish | 0/TBD | Not started | - |
| 6. Reach & SEO | 0/TBD | Not started | - |
| 7. Accessibility Audit | 0/TBD | Not started | - |
