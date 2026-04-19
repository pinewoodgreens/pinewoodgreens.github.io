---
phase: 06-reach-seo
plan: 02
subsystem: seo
tags: [open-graph, frontmatter, social-sharing, seo]
dependency_graph:
  requires: [06-01]
  provides: [SEO-01, SEO-02]
  affects: [_includes/head.html, all-major-pages]
tech_stack:
  added: []
  patterns: [liquid-conditional-og-image, jekyll-frontmatter-seo]
key_files:
  created: []
  modified:
    - _includes/head.html
    - index.html
    - association.md
    - bark.md
    - contactus.md
    - forms.md
    - maps_and_metro.md
    - news.md
    - newsarchive.md
    - office.md
    - our_homes.md
    - parking.md
    - parks.md
    - policies.md
    - schools.md
    - subscribe.md
    - toolshed.md
    - trash_and_recycling.md
    - volunteer.md
    - welcome_home.md
    - pool.html
decisions:
  - "og:url uses site.url + page.url concatenation (not site.baseurl) per research anti-pattern D-07"
  - "og:image is conditional on page.image to prevent empty/broken image tags (T-06-06)"
  - "All OG interpolations use | escape filter to prevent XSS via frontmatter (T-06-04)"
  - "forms.md and schools.md excluded from image: frontmatter per plan spec"
metrics:
  duration_minutes: 12
  completed_date: "2026-04-08"
  tasks_completed: 2
  files_modified: 21
requirements: [SEO-01, SEO-02]
---

# Phase 06 Plan 02: Open Graph Meta Tags and Per-Page SEO Frontmatter Summary

**One-liner:** Open Graph tag block in head.html with conditional og:image, plus description: and image: frontmatter across all 20 major content pages for SEO-01 and SEO-02 coverage.

## Objective

Add the Open Graph meta block to `_includes/head.html` and populate `description:` (and `image:` where applicable) frontmatter on all 19 major content pages plus pool.html. This fulfills SEO-01 per-page descriptions and SEO-02 Open Graph social sharing.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Add Open Graph tag block to head.html | 6bb8152 | _includes/head.html |
| 2 | Add description: frontmatter to all 20 content pages | a181f39 | 20 content files |

## What Was Built

### Task 1: Open Graph block in head.html

Inserted a 5-tag OG block immediately after the `<title>` element and before the Bootstrap/font link tags:

- `og:type` — literal `website` (D-10)
- `og:title` — conditional page.title or site.title, with `| escape`
- `og:description` — conditional page.description or site.description, with `| escape`
- `og:url` — `{{ site.url }}{{ page.url }}` concatenation (research anti-pattern: avoid site.baseurl)
- `og:image` — wrapped in `{% if page.image %}...{% endif %}` to prevent empty tags

### Task 2: Frontmatter updates across 20 files

- Added `description:` to all 20 files (19 .md pages + pool.html)
- Added `image: /images/...` to 7 photo pages:
  - `our_homes.md` → `/images/houses.jpg`
  - `contactus.md` → `/images/office_door.jpg`
  - `office.md` → `/images/office_door.jpg`
  - `welcome_home.md` → `/images/2783.jpg`
  - `parks.md` → `/images/golf_course.jpg`
  - `pool.html` → `/images/pool_tables.jpg`
  - `volunteer.md` → `/images/flower_bucket.jpg`
- `forms.md` and `schools.md` intentionally excluded from image: per plan

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None. All description: values are meaningful per-page copy. All image: paths reference existing files in /images/.

## Threat Flags

No new security surface introduced beyond what was analyzed in the plan's threat model. The `| escape` filter is applied to all interpolated frontmatter values in OG tags (T-06-04 mitigated). The conditional og:image prevents empty/broken image tags (T-06-06 mitigated).

## Self-Check

**Created files exist:**
- N/A (no new files created, only modifications)

**Commits exist:**
- 6bb8152: feat(06-02): add Open Graph meta block to head.html
- a181f39: feat(06-02): add description and image frontmatter to all 20 content pages

## Self-Check: PASSED
