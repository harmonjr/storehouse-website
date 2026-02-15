# NEXT SESSION PROMPT

I'm working on the **Storehouse website** (storehouse-website project).

**Context:**
- All content work is merged into `main` (PRs #1-4 merged, all feature branches deleted)
- 14 Foundation articles + 3 blog posts are live in the codebase
- Pillar balance is 3/3/4/4 (Margin/Clarity/Order/Peace)
- Content review drafts exist in `docs/content-review/` for 5 new/rewritten articles
- Build passes at 28 pages

**WORKFLOW:**
1. Read `PROGRESS.md` for current state
2. Check `docs/content-review/` for review verdicts on the 5 articles:
   - margin-for-freelancers-proposed.md
   - the-emergency-fund-proposed.md
   - (check for others: where-does-it-go, bank-connection, ynab-migration)
3. If any are NEEDS_REVISION, apply the suggested changes on `main`
4. Run `npm run build` to verify
5. Deploy to preview and do visual review
6. Deploy to production if preview looks good
7. Update PROGRESS.md

**STOP CONDITION:** After deploying to production and verifying, your work is DONE.
- Do NOT start new content or features
- Do NOT modify hub infrastructure

**BEFORE ENDING, provide:**
1. Summary of what was completed
2. Any issues or blockers encountered
3. **NEXT SESSION PROMPT** for the following phase
