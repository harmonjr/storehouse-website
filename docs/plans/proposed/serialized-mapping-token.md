# Storehouse: Strategic Realignment — Website, PRD, and App

**Project:** Storehouse (storehouse-website + storehouse app)
**Date:** 2026-02-16

---

## Context

Two independent AI reviews (Claude and ChatGPT) of the Storehouse website surfaced a consistent finding: the site has strong writing and a clear product concept, but it's trying to speak to everyone and hiding its most distinctive quality — the biblical foundation and giving-first priority.

Randy's strategic direction after discussion:

1. **Margin is the bigger key.** You can't give, save, or breathe without it. Margin is the universal need — the homepage lead.
2. **Giving is what margin makes possible** — for people who have a heart for it. Giving is structurally prominent (first in the hierarchy) but not the headline. It's a discovery moment, not a sales pitch.
3. **Faith named directly, not hidden.** "Built on biblical financial principles" — stated clearly, part of the brand identity. Not subtle hints in the footer. Not sermons or church marketing. Just honest about where the conviction comes from.
4. **Categories exist for reporting and learning** — not for determining what you can spend (not an envelope system).

**The emotional journey of the homepage:** stressed → margin → freedom → generosity (for those who want it).

This plan covers three deliverables:
- **A. Unified PRD** — the source of truth for what Storehouse is and who it's for
- **B. Website homepage rewrite** — making the site match the vision
- **C. App development path** — aligning the working app with the new direction

---

## A. Unified PRD

The existing v2 PRD (`projects/storehouse2/STOREHOUSE_PRD.md`) is well-written and comprehensive. Rather than starting from scratch, we update it to reflect the strategic shift and place it in the storehouse project (v1) as the single source of truth.

### What Changes in the PRD

#### 1. Audience Shift

**Current PRD:** "Faith-based families with stable income who want to live below their means, build margin, and honor God with their finances."

**Updated:** "People who need breathing room. Families living paycheck to paycheck — not because they don't earn enough, but because there's no margin between what comes in and what goes out. Storehouse creates that margin by enforcing a biblical priority order: give first, save second, spend what remains. The people who stay are the ones who discover that giving isn't a sacrifice when you have margin — it's the whole point."

**Primary Persona: The Margin Seeker**
- Feels financially stretched despite decent income
- Every purchase carries a little guilt — "can we afford this?"
- Has tried budgeting apps, quit because they felt punishing
- Wants one answer: "what can I actually spend?"
- May have irregular or variable income
- What Storehouse does: Shows them one number — Safe-to-Spend — and it's enough

**Secondary Persona: The Aspiring Giver**
- Has a heart to give generously but doesn't see how
- Wants to tithe or increase giving but looks at finances and thinks "I can't afford this"
- Discovers Storehouse puts giving first and shows what's left — and it's enough
- The app makes giving possible by making it the priority, not the afterthought

**Tertiary Persona: The Couple**
- Both spouses need to see the same number
- "Eliminate arguments" — if it fits within Safe-to-Spend, it's fine
- Shared login, shared clarity, shared peace

#### 2. Problem Statement Shift

**Current:** "Most households spend first, save what's left, give if there's extra."

**Updated:**
> "You earn a decent living, but there's never anything left. You're not irresponsible — you just don't have margin. Without breathing room, everything feels tight. You can't give without stressing. You can't save without sacrificing. Every purchase comes with a whisper of guilt. The problem isn't your income — it's the order. Most budgets work backwards: spend first, save what's left, give if there's anything remaining. Storehouse flips that order."

#### 3. Category Philosophy (Explicit)

Add a new section to the PRD:

**Categories: For Learning, Not Limiting**

Storehouse has categories (Groceries, Dining, Gas, etc.) but they work differently than other apps:

| Other Apps | Storehouse |
|---|---|
| Set a budget per category | No per-category budgets |
| "You overspent on dining by $23" | "Here's where your money went this month" |
| Categories determine what you can spend | One number (Safe-to-Spend) determines what you can spend |
| Guilt when you exceed a category | Freedom within your number |

Categories exist for:
- **Classification** — determining how a transaction affects Safe-to-Spend (giving/saving/fixed/discretionary)
- **Reporting** — showing where money went (spending by category breakdown)
- **Learning** — helping users spot patterns over time ("dining has been climbing")
- **Rules** — auto-categorizing future transactions from the same merchant

Categories do NOT:
- Set spending limits
- Generate alerts when "over budget"
- Create guilt about individual purchases
- Function as envelopes

#### 4. Feature Priority Reorder

Margin-first audience, giving-prominent:

| Priority | Feature | Why |
|----------|---------|-----|
| P0 | Safe-to-Spend Dashboard | The one number. The core promise. |
| P0 | Transaction Import | Gets real data in. The weekly ritual. |
| P0 | Auth (shared login) | Both spouses see the same number |
| P0 | Giving Tracker + Pledges | First in the hierarchy, visible and tracked |
| P1 | Priority Status Row | Visual proof: giving handled, saving handled, bills handled |
| P1 | Transaction Review + Rules | Keep categorization accurate for reporting |
| P1 | Spending by Category | "Where does our money actually go?" (reporting, not budgeting) |
| P1 | Subscription Tracker | "Small leaks sink big ships" — find hidden margin |
| P2 | Onboarding Flow | Walk users through setting up their priorities |
| P2 | Margin Gauge | Emergency fund progress (months of cushion) |
| P2 | Biblical Terms Toggle | Actually working throughout the app |
| P3 | Bonus Wizard | Allocate windfalls with giving first |
| P3 | Income Verification | Compare declared vs actual after a few imports |
| Future | Year-End Giving Export | Tax deduction summary |
| Future | Coaching Questions | Thoughtful prompts about spending patterns |
| Future | Plaid (paid tier) | Convenience after habit is built |

#### 5. Onboarding Flow

**Current:** Settings → Income → Giving % → Saving → Start importing

**Updated — margin-first, giving invited (not assumed):**
1. "What's your monthly take-home pay?" (the foundation — everything flows from this)
2. "What are your priorities?" — Show the hierarchy: Give → Save → Bills → Live. **Giving defaults to 0%** with a clear invitation: "Many Storehouse users start with giving as their first priority. Want to set a giving goal?" Let the user opt in. The discovery is more powerful when chosen, not pre-filled.
3. "Any saving goals?" (retirement contribution, emergency fund)
4. "Add your first account and import" (the weekly ritual starts)
5. Dashboard reveals: "After your priorities are handled, you have $X to spend freely."

The emotional arc: **stress → clarity → relief.** They came in feeling stretched. They leave onboarding seeing a number that says "this is what's truly available" — and it's enough. For those who set a giving goal, they see it's already handled. For those who didn't, the option is always there when they're ready.

#### 6. What Stays the Same

- The Five Contracts (declared income, all math server-side, category type drives behavior, no double-counting, trust indicators)
- The Safe-to-Spend formula
- The tech stack (React + Vite + Supabase)
- Manual import as the default (weekly ritual philosophy)
- Warm design language (amber/emerald, no blue, no red for negative)
- "Eliminate arguments" shared-login concept

### PRD Deliverable

Write updated `STOREHOUSE_PRD.md` in `projects/storehouse/` (v1, the active project). Keep v2's PRD as historical reference. The new PRD incorporates v2's feature specs but with the updated audience, priorities, and category philosophy.

---

## B. Website Homepage Rewrite

### Current State (10 sections)

1. Hero — "Know exactly what you can spend" (secular, no faith)
2. Problem — Three pain points (categories, leftovers, irregular income)
3. Solution — "One number. Total clarity." (duplicate screenshot)
4. How It Works — Three steps (priorities, import, live)
5. Variable Income — The Margin Method
6. Comparison — Table (other apps vs Storehouse)
7. Philosophy Teaser — Margin concept (no faith)
8. Subscriptions — "See where money disappears"
9. Testimonials — Three quotes
10. Final CTA — Waitlist form

### Proposed Homepage (8 sections)

The scroll follows the emotional journey: **stressed → margin → freedom → generosity**

#### Section 1: Hero (REWRITE)
**Current:** "Know exactly what you can spend." (secular, no faith)
**New direction:** Lead with margin. Name faith directly.

**Hero stack (decided):**

> **Finally, breathing room.**
>
> Built on biblical financial principles. Designed for anyone who wants breathing room.
>
> Storehouse shows you one number — what's truly safe to spend after your priorities are handled.
>
> [See How It Works] [Join Waitlist]

Three layers: headline hooks emotionally, subhead names the faith and broadens the audience, supporting line delivers the product promise concretely.

CTA: "See How It Works" + "Join Waitlist" (switches to "Start Free Trial" at beta)

Use a DIFFERENT visual than the Solution section. No duplicate screenshots.

**Lines saved for other locations:**
- "One number. No guilt. That's the whole idea." → Hierarchy section (Section 3), under the Safe-to-Spend formula
- "Spend freely. Give generously. Know the math is done." → Tagline for social media, email headers, app store listing
- "Peace isn't a number. But it starts with one." → Philosophy page opening line

**File:** `src/components/sections/HeroSection.astro`

#### Section 2: Problem (REWRITE)
**Current:** Three cards about categories, leftovers, irregular income.
**New direction:** Three cards about the absence of margin.

Card concepts:
1. **"There's never anything left"** — You're not irresponsible. You just don't have margin. By the time bills are paid and life happens, the breathing room is gone.
2. **"Every purchase comes with guilt"** — Without a clear number, every coffee, every dinner out carries a whisper: "should I be spending this?"
3. **"You've tried three apps and quit all of them"** — They made you track everything, shamed you when you didn't, and you still didn't know what you could spend. That's not help — that's homework.

**File:** `src/components/sections/ProblemSection.astro`

#### Section 3: The Hierarchy (REWRITE — replaces Solution)
**Current:** "One number. Total clarity." with duplicate screenshot.
**New direction:** The hierarchy as the hero visual. This is where giving becomes structurally visible.

Show the formula:
```
Income
  → Give First (tithe, generosity)
  → Save Second (retirement, emergency fund)
  → Pay Bills (mortgage, utilities, insurance)
  = Safe to Spend ← your one number
```

"Most apps work backwards — spend first, save what's left, give if there's anything remaining. Storehouse flips the order. Your priorities are handled before you see your number. What's left is truly yours to spend, freely."

This is the **discovery moment** for the giving audience. They see giving in the first position and think "this was made for me." But it doesn't exclude margin-seekers — the promise is still "one number, total clarity."

Use a NEW visual — the priorities setup screen or the STS breakdown modal.

**File:** `src/components/sections/SolutionSection.astro` (rewritten)

#### Section 4: How It Works (SIMPLIFY)
Keep three steps, tighten:
1. **"Set your priorities"** — Giving, saving, bills. These come off the top, not from leftovers.
2. **"Import your transactions"** — One file from your bank, once a week. Two minutes. Your data stays in your hands.
3. **"See your number"** — Safe-to-Spend updates. Green means go. Spend freely within it.

**File:** `src/components/sections/HowItWorksSection.astro`

#### Section 5: Comparison (KEEP — minor updates)
Reorder to put giving first (the differentiator):

| Other Apps | Storehouse |
|---|---|
| Giving is optional | Giving comes first |
| Track every category | Track one number |
| Built for steady paychecks | Built for real life |
| Restriction mindset | Freedom through clarity |
| You failed the budget | The budget serves you |

**File:** `src/components/sections/ComparisonSection.astro`

#### Section 6: Who This Is For (NEW — replaces Variable Income + Subscriptions)
Both reviewers asked "who is this for?" Answer it directly:

**"Storehouse is built for..."**
- Anyone who feels stretched — not because they don't earn enough, but because there's no margin
- Couples who want to see the same number and stop arguing about money
- People with irregular income who need a system that adapts
- Families who want to give generously but can't find the breathing room

**"Storehouse is not for..."**
- People who want to track every dollar across dozens of categories
- Investment managers or day traders
- Anyone who needs real-time automatic bank sync (we use weekly file imports — your banking credentials stay in your hands)

**File:** New component: `src/components/sections/AudienceSection.astro`

#### Section 7: Testimonials (KEEP)
Keep the three testimonials. Joe's "eliminate arguments" is gold.

**File:** `src/components/sections/TestimonialsSection.astro`

#### Section 8: Final CTA (UPDATE copy)
Tie back to margin and freedom:
*"Ready for the breathing room you've been missing?"*

**File:** `src/components/sections/FinalCtaSection.astro`

### Sections Removed from Homepage

- **Variable Income** — Folded into "Who This Is For" as a bullet. Full treatment on How It Works page.
- **Subscriptions** — Feature detail on How It Works page, not a homepage section.
- **Philosophy Teaser** — No longer needed. Faith is named directly on the homepage. Philosophy page still exists for the deep dive.

### Other Website Changes

**Navigation:** Reduce from 7 to 5 + CTA:
1. How It Works
2. Foundations
3. Philosophy
4. Our Story
5. FAQ
6. **Join Waitlist** (CTA button)

Remove Pricing (premature for pre-launch — address in FAQ).

**Footer:** Keep "Biblical financial principles for modern families" — it now matches the homepage tone.

**Our Story page (not this session, but before beta):**
- Fix nav label: "Our Story" → "My Story" (it's personal, not a company origin)
- Consider using full name instead of "JR" — trust matters for a finance product
- Weave personal details into the narrative instead of a tacked-on bio section at the end

**Foundations vs. Philosophy nav items:** These serve different purposes. Foundations = 14 practical teaching articles organized by pillar (Margin, Clarity, Order, Peace). Philosophy = the biblical conviction behind the hierarchy. Both earn their nav spot.

**Files:**
- `src/components/Header.astro`
- `src/components/MobileNav.astro`

### Category Messaging Fix

The website currently says "no categories" and uses "47 categories" as a straw man. But Storehouse has 32 categories — the difference is how they're used.

**Update messaging from:** "No categories to track"
**To:** "Categories help you learn where your money goes. They don't limit where it can go. One number determines what you can spend — not 47 little buckets."

This is more honest and aligns with the app's actual architecture.

---

## C. App Development Path

### Recommendation: Continue with V1

**V1 (storehouse)** is the right foundation:
- 17 sessions of development, 15 merged PRs
- Live Supabase database with 12 tables and RLS
- Working import pipeline (CSV, OFX/QFX, YNAB with 2-tier category mapping)
- Working Safe-to-Spend calculation with the hierarchy already in place
- Working giving tracker with pledges
- Working transaction review with swipeable cards
- Working spending by category with drill-downs
- Warm design language (amber/emerald, DM Serif Display)
- 32 categories classified by type (giving/saving/fixed/discretionary)

**V2 (storehouse2)** is an abandoned prototype. Mock data only. Never wired to a database. Its value is the documentation (PRD, Spec, Plan), which we're incorporating into the unified PRD.

**Starting over would lose 17 sessions of working infrastructure for no clear benefit.**

### What V1 Needs to Align with the New Direction

#### Bug Fixes (High Priority)
1. **Oops Buffer** — `oops_buffer_used` is never incremented. Either implement depletion/reset or remove for MVP.
2. **Biblical Terms Toggle** — Only changes 2 labels in Settings. Needs to work throughout dashboard, giving, and spending pages.
3. **Stale Warning** — Make "Updated Xd ago" tappable → navigates to import.

#### Feature Gaps (Medium Priority)
4. **Onboarding Flow** — Currently drops users into dashboard with no guidance. Build the priorities-first onboarding.
5. **Subscription Auto-Detection** — Website claims it, app doesn't have it. Either build basic pattern matching or update website claims.
6. **"Something Wrong?" Escape Hatch** — Simple link on dashboard for when numbers look off.

#### Nice to Have (Lower Priority)
7. **Year-End Giving Export** — Important for givers, not MVP-blocking.
8. **Dashboard Hierarchy Visual** — Show Give → Save → Bills → Live waterfall more prominently (not just in breakdown modal).
9. **Second Screenshot for Website** — New visual of priorities setup screen.

### Category Alignment

V1 already handles categories correctly:
- 32 categories with `type` field driving calculation behavior
- No per-category budgets (spending by category is reporting only)
- SpendingPage shows breakdown for awareness, not management
- This MATCHES Randy's direction — no changes needed to category architecture

---

## Release Strategy

**The website does not go live until the app is ready for beta users.** Both are being built in parallel toward a beta launch. The website is a thinking tool and a preview — not a standalone marketing site.

When the app reaches beta:
- Switch all "Join Waitlist" CTAs to "Start Free Trial"
- Remove any "launching soon" language
- Ensure every claim on the site matches what the app actually does

## Implementation Order

| Phase | What | Deliverable | Status |
|-------|------|-------------|--------|
| **1** | Write unified PRD | `projects/storehouse/STOREHOUSE_PRD.md` (living document — revise as messaging is tested) | Done |
| **2** | Rewrite homepage sections | 6 modified components + 1 new | Done |
| **3** | Update nav | Header, MobileNav | Done |
| **4** | Fix V1 app bugs | Oops buffer, biblical terms, stale warning | Done (PR #16) |
| **5** | Build onboarding flow | Priorities-first setup wizard (giving invited, not assumed) | Next |
| **6** | Shared login onboarding | Explain credential sharing to couples in signup flow and settings. Guide them to share one login rather than create separate accounts. | Planned |
| **7** | Subscription auto-detection + known merchant database | Basic pattern matching on imported transactions to surface recurring charges. Also: pre-loaded database of common merchants → categories (Tier 1 categorization) to reduce first-import friction. MCC codes and/or a curated merchant list so "Walmart" auto-categorizes without the user creating a rule. Website claims auto-detection — app needs it before beta. | Planned |
| **8** | "Something wrong?" escape hatch | Simple link/button on dashboard Safe-to-Spend card for when numbers look off. Could navigate to a help screen or prompt to re-import/check settings. | Planned |
| **9** | Generate new screenshots | Real app screens for homepage visual variety | Planned |
| **10** | Beta readiness pass | Align all website claims with app reality, switch CTAs to free trial | Final |

Phases 1-3 (PRD + website) happened in one session.
Phase 4 (bug fixes) completed in one session.
Phases 5-8 (app work) are separate development sessions. Phase 7 is the biggest — combines subscription detection with merchant intelligence.
Phase 9-10 happen when the app is beta-ready.

---

## Critical Files

### Website (storehouse-website)
| File | Action |
|------|--------|
| `src/pages/index.astro` | Update section imports (remove 2, add 1) |
| `src/components/sections/HeroSection.astro` | Rewrite — margin-forward with faith named |
| `src/components/sections/ProblemSection.astro` | Rewrite — margin pain points |
| `src/components/sections/SolutionSection.astro` | Rewrite — hierarchy visual |
| `src/components/sections/HowItWorksSection.astro` | Simplify |
| `src/components/sections/ComparisonSection.astro` | Reorder rows |
| `src/components/sections/AudienceSection.astro` | **NEW** — "Who this is for" |
| `src/components/sections/FinalCtaSection.astro` | Update copy |
| `src/components/Header.astro` | Remove Pricing nav item |
| `src/components/MobileNav.astro` | Remove Pricing nav item |
| `docs/storehouse-content-integrity-system.md` | Update audience definition |

### App (storehouse — V1)
| File | Action |
|------|--------|
| `STOREHOUSE_PRD.md` | **NEW** — unified PRD |
| `supabase/migrations/` | Oops buffer fix migration |
| `src/pages/DashboardPage.tsx` | Biblical terms, stale warning tap |
| `src/pages/GivingPage.tsx` | Biblical terms throughout |
| `src/pages/SpendingPage.tsx` | Biblical terms throughout |
| New onboarding components | Priorities-first setup wizard |

---

## Verification

### Website
- `npm run build` passes
- Homepage: 8 sections in order (Hero → Problem → Hierarchy → How It Works → Comparison → Audience → Testimonials → CTA)
- No duplicate screenshots
- Faith named directly in hero area
- Hierarchy visual shows giving in first position
- "Who this is for" section present
- Navigation: 5 items + CTA
- Mobile nav matches desktop
- Category messaging updated (learning, not limiting)

### PRD
- Single file at `projects/storehouse/STOREHOUSE_PRD.md`
- Audience: margin-seekers primary, aspiring givers secondary
- Category philosophy explicitly documented
- Feature priorities reflect margin-first positioning
- Onboarding flow described
- No aspirational claims beyond current app capabilities

### App (future session)
- Oops buffer properly depletes or is removed
- Biblical terms toggle works on dashboard, giving, and spending pages
- Stale warning navigates to import on tap
