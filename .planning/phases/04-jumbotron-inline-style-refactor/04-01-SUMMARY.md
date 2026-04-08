---
phase: 04-jumbotron-inline-style-refactor
plan: "01"
subsystem: css
tags: [css, design-system, jumbotron, wcag, mailchimp]
requirements: [DSS-01, DSS-02, DSS-03, DSS-04]

dependency_graph:
  requires: []
  provides:
    - .jumbotron--bg-treecover
    - .jumbotron--bg-pool
    - .jumbotron--bg-snow
    - .jumbotron--bg-emailsignup
    - .jumbotron-overlay
    - .jumbotron-overlay--deep
    - .display_archive
    - .campaign
    - "#mc_embed_signup font/bg rules"
  affects:
    - css/pwg.css

tech_stack:
  added: []
  patterns:
    - BEM modifier classes for jumbotron backgrounds (jumbotron--bg-*)
    - CSS attribute selector [class*="jumbotron--bg-"] for conditional override
    - CSS cascade layering — second #mc_embed_signup block merges with INFRA-04 rule

key_files:
  created: []
  modified:
    - css/pwg.css

decisions:
  - "Used var(--font-body) instead of hardcoded 'arial,verdana' for .display_archive to comply with TYPE-02"
  - "Used font-size: 0.875rem instead of original 12px for .display_archive — scaled to rem-based system while matching intent"
  - "Added second #mc_embed_signup rule block below INFRA-04 rule; CSS cascade merges correctly without removing existing width/max-width rules"
  - "background-size: cover added to all jumbotron bg modifier classes for responsive fill behavior"

metrics:
  duration_minutes: 8
  completed_date: "2026-04-08T15:02:59Z"
  tasks_completed: 2
  tasks_total: 2
  files_modified: 1
---

# Phase 4 Plan 01: Jumbotron CSS Modifier Classes Summary

**One-liner:** Extended pwg.css with WCAG safety comment, four BEM jumbotron background modifier classes, two overlay opacity classes, and Mailchimp typography rules migrated from inline styles.

## What Was Built

All CSS rules that Plans 02 and 03 depend on are now defined in `css/pwg.css` before any HTML is touched. This ensures no style regression window exists between commits when Plans 02 and 03 remove inline styles from `_includes/` files.

### Changes to css/pwg.css

1. **--pine-sage safety comment (DSS-01):** Token line now carries an inline warning that `--pine-sage` fails WCAG AA (3.9:1) for text use.

2. **Jumbotron background modifier classes (DSS-02):**
   - `.jumbotron--bg-treecover` — treecover.jpg, 50% 0, cover
   - `.jumbotron--bg-pool` — pool-texture.jpg, 50% 0, cover
   - `.jumbotron--bg-snow` — snow.JPG, 50% 0, cover
   - `.jumbotron--bg-emailsignup` — emailsignup.jpg, 50% 0, cover
   - `.jumbotron[class*="jumbotron--bg-"]` — suppresses mint-tint background-color when any bg image class is present; plain `.jumbotron` retains default styling

3. **Overlay opacity classes (DSS-03):**
   - `.jumbotron-overlay` — rgba(0,0,0,0.8)
   - `.jumbotron-overlay--deep` — rgba(0,0,0,0.9)

4. **Mailchimp typography rules (DSS-04):**
   - `.display_archive` — font-family: var(--font-body); font-size: 0.875rem
   - `.campaign` — line-height: 1.25; margin: 5px 0
   - Second `#mc_embed_signup` block — font-family: var(--font-body); font-size: 0.875rem; background-color: #fff

## Task Commits

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Add --pine-sage safety comment to :root | 47072e9 | css/pwg.css |
| 2 | Add jumbotron bg/overlay modifier classes and Mailchimp typography rules | 91e5908 | css/pwg.css |

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None — all rules are fully defined with production values.

## Threat Flags

None — no new network endpoints, auth paths, or trust boundary surfaces introduced. CSS file only.

## Self-Check: PASSED

- css/pwg.css: FOUND (modified)
- Commit 47072e9: FOUND
- Commit 91e5908: FOUND
- grep "NEVER use as text color" css/pwg.css: 1 match on line 16
- grep -c "jumbotron--bg-" css/pwg.css: 5 (4 classes + 1 attribute selector)
- grep -c "jumbotron-overlay" css/pwg.css: 2
- grep ".display_archive" css/pwg.css: 1 match on line 362
- grep "width: 100% !important" css/pwg.css: 2 matches (INFRA-04 rule preserved)
