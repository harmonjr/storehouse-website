## NEXT SESSION PROMPT

I'm working on the **Storehouse website** (storehouse-website).

**Context:**
- Strategic realignment complete (Phases 1-3): PRD v3.0, homepage rewrite, nav update
- Homepage: 8 sections following stressed -> margin -> freedom -> generosity journey
- Faith named directly in hero: "Built on biblical financial principles"
- Three sections removed (Variable Income, Subscriptions, Philosophy)
- One new section added (Audience: "Who This Is For")
- Pricing removed from nav (premature for pre-launch)
- Plan: `docs/plans/proposed/serialized-mapping-token.md` (phases 4-7 remain)

**Remaining from the realignment plan (future sessions):**
- Phase 4: Fix V1 app bugs (oops buffer, biblical terms toggle, stale warning) -- in storehouse repo
- Phase 5: Build onboarding flow -- in storehouse repo
- Phase 6: Generate new screenshots for homepage visual variety
- Phase 7: Beta readiness pass (align all website claims with app reality, switch CTAs)

**Other website items not in the realignment plan:**
- Our Story page: "Our Story" -> "My Story", consider full name, weave bio into narrative
- Content integrity system: update audience definition in `docs/storehouse-content-integrity-system.md`
- Visual check: run dev server and verify hierarchy visual renders well on mobile

**WORKFLOW:**
1. Read PROGRESS.md and NEXT_SESSION.md
2. Choose focus area (content integrity update, visual QA, or other website work)
3. Implement changes
4. Verify with `npm run build`
5. Commit with proper prefixes

STOP CONDITION: After completing the chosen focus area.
- Do NOT start app-side work (that's in the storehouse repo)
- Do NOT switch CTAs to "Start Free Trial" (beta isn't ready)
