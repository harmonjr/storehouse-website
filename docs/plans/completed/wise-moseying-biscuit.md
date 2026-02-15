# Plan: Website Functionality Completion

**Created:** 2026-02-06
**Status:** Proposed

## Overview

Complete missing functionality for the Storehouse marketing website:
1. Activate waitlist (configuration only)
2. Replace "Randy Harmon" with "JR" for anonymity
3. Fix dropdown UX issues
4. Create Pricing and FAQ pages

---

## Task 1: Activate Waitlist

The waitlist is already fully built. Just needs Supabase connection.

### Steps

1. **Copy `.env` from storehouse project**
   - Source: `projects/storehouse/.env`
   - Create: `projects/storehouse-website/.env`
   ```
   PUBLIC_SUPABASE_URL=https://[your-project].supabase.co
   PUBLIC_SUPABASE_ANON_KEY=[your-anon-key]
   ```

2. **Run migration in Supabase SQL Editor**
   - Paste contents of `supabase/migrations/001_waitlist.sql`

3. **Add env vars to Vercel** for production

---

## Task 2: Replace "Randy Harmon" with "JR"

**Files to modify:**

| File | Change |
|------|--------|
| `src/components/sections/our-story/AboutRandySection.astro` | "Randy Harmon" → "JR", "— Randy" → "— JR" |
| `src/content.config.ts` | Default author "Randy Harmon" → "JR" |
| Rename component? | `AboutRandySection.astro` → `AboutJRSection.astro` (optional) |

**FAQ page (when created):**
The "Who created Storehouse?" answer mentions "Randy Harmon" — will update to "JR"

---

## Task 3: Fix Dropdown UX

### 3.1 Expand Frustration Options

Replace the current 4 options with a more emotionally resonant list:

```javascript
const frustrationOptions = [
  { value: '', label: "What's your biggest money frustration?" },
  { value: 'too-many-categories', label: 'Too many categories to track' },
  { value: 'paycheck-to-paycheck', label: 'Living paycheck to paycheck' },
  { value: 'irregular-income', label: 'Irregular or unpredictable income' },
  { value: 'cant-stick-to-budget', label: "Can't stick to a budget" },
  { value: 'money-anxiety', label: 'Constant money anxiety' },
  { value: 'want-to-give-more', label: "Want to give more but can't seem to" },
  { value: 'apps-never-stick', label: "I've tried apps that never stick" },
  { value: 'budgeting-feels-like-punishment', label: 'Budgeting feels like punishment' },
  { value: 'other', label: 'Other' },
];
```

**Keep "Other"** — it's fine to just capture "other" as the value for analytics.

### 3.2 Dropdown Styling Issues

**Current:** Standard browser select with caret too close to right edge

**Fix:** Use custom styled select with proper padding and custom caret:
```css
select {
  appearance: none;
  background-image: url("data:image/svg+xml,..."); /* custom chevron */
  background-position: right 1rem center;
  background-repeat: no-repeat;
  padding-right: 2.5rem;
}
```

---

## Task 4: Create Pricing & FAQ Pages

Content provided in: `docs/plans/proposed/storehouse-pricing-faq-pages.md`

### Pricing Page (`/pricing`)
- Single "Founding Member" tier at $4.99/month or $49/year
- Feature checklist with green checkmarks
- Social proof section
- FAQ preview
- Final CTA

### FAQ Page (`/faq`)
- Category navigation (Getting Started, How It Works, Pricing, Security, Philosophy)
- Accordion expand/collapse for each Q&A
- Contact CTA at bottom

### Components Needed
- `PricingCard.astro`
- `FAQAccordion.astro`
- `FAQCategory.astro`

**Note:** Update "Randy Harmon" reference in FAQ to "JR"

---

## Files to Modify

| File | Action |
|------|--------|
| `.env` (new) | Copy from storehouse project |
| `src/components/sections/our-story/AboutRandySection.astro` | Randy → JR |
| `src/content.config.ts` | Default author → JR |
| `src/components/WaitlistForm.astro` | Expand options, fix dropdown styling |
| `src/components/sections/TestimonialsSection.astro` | Curly quotes with Cormorant Garamond |
| `src/styles/global.css` | Add Cormorant Garamond font, .font-quote class |
| `src/pages/pricing.astro` (new) | Create pricing page |
| `src/pages/faq.astro` (new) | Create FAQ page |
| `src/components/PricingCard.astro` (new) | Pricing card component |
| `src/components/FAQAccordion.astro` (new) | Accordion component |
| `src/components/Footer.astro` | Remove "Coming Soon" from pricing/faq links |

---

## Task 5: Elegant Curly Quote Marks

Replace straight quote `"` with typographic curly quote `"` using Cormorant Garamond font.

**File:** `src/styles/global.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap');

.font-quote {
  font-family: "Cormorant Garamond", Georgia, serif;
}
```

**File:** `src/components/sections/TestimonialsSection.astro`
```html
<span class="absolute top-4 left-4 text-7xl text-gold-400/50 leading-none select-none pointer-events-none font-quote" aria-hidden="true">
  "
</span>
```

---

## Verification

1. **Waitlist:** Submit test email, verify in Supabase
2. **JR:** No "Randy" or "Randy Harmon" anywhere on site
3. **Dropdown:** Expanded options, caret styled properly
4. **Quotes:** Testimonials show elegant curly quotes in Cormorant Garamond
5. **Pricing:** `/pricing` loads with founding member card
6. **FAQ:** `/faq` loads with accordion functionality
7. **Footer:** Links to /pricing and /faq work (no "Coming Soon")
