## NEXT SESSION PROMPT

I'm working on the **Storehouse website** (storehouse-website).

**Context:**
- All 5 new/rewritten articles reviewed and high-priority feedback applied
- CIS updated with margin-first voice guideline
- My Story page: nav label updated, Randy Harmon (full name), bio woven into narrative
- Content review docs in docs/content-review/ for all 17 articles
- Build passes: 28 pages

**Remaining website items:**
- Medium/low-priority review feedback (optional -- see review files in docs/content-review/)
- **Waitlist-to-CTA conversion** -- Randy will decide timing. All "Join Waitlist" / "launching soon" language needs updating when app beta is ready. Touches ~15 files (WaitlistForm component, Header, MobileNav, hero, final CTA, blog layout, dedicated waitlist page, etc.)
- Visual review on dev server / preview deployment
- Deploy to production (Vercel)

**From the realignment plan (future sessions, app-side):**
- Phase 4: Fix V1 app bugs (oops buffer, biblical terms toggle, stale warning) -- in storehouse repo
- Phase 5: Build onboarding flow -- in storehouse repo
- Phase 6: Generate new screenshots for homepage visual variety
- Phase 7: Beta readiness pass (align all website claims with app reality)

**WORKFLOW:**
1. Read PROGRESS.md and NEXT_SESSION.md
2. Choose focus area (CTA update, visual QA, or remaining review feedback)
3. Implement changes
4. Verify with `npm run build`
5. Commit with proper prefixes

STOP CONDITION: After completing the chosen focus area.
- Do NOT start app-side work (that's in the storehouse repo)
- Do NOT switch CTAs without Randy's direction on timing and wording
