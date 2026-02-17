# Content Review: Coming to Storehouse from YNAB

**Source:** `projects/storehouse-website/src/content/blog/coming-to-storehouse-from-ynab.md`
**Reviewed:** 2026-02-17
**Reviewer:** content-reviewer agent
**Verdict:** Publish-ready with revisions

## Review Summary

One of the strongest pieces in the Storehouse collection. It does something remarkably difficult: it respects a competitor's product, empathizes with the reader who used it, honestly names what they'll lose, and still makes a compelling case for the alternative. The "What You'll Lose" section (lines 50-62) is the article's trust anchor -- few marketing pieces would voluntarily enumerate their disadvantages. The YNAB import details (38 sub-category defaults, 28 group-level defaults) are specific enough to be useful and confident enough to be convincing. The primary integrity issue is that the hierarchy's biblical foundation is understated -- line 32 includes one sentence ("The order comes from the Bible -- the principle of firstfruits, honoring God with the first of what you earn rather than the leftovers") which meets the "Attributive, not vague" standard. The main concern is the category description on line 60 which needs alignment with the updated CIS guidance on how Storehouse handles categories.

## Filter Questions

| # | Question | Result |
|---|----------|--------|
| 1 | Does this serve stewardship? | PASS -- The article positions the switch from YNAB to Storehouse as moving from micro-management to priority-setting. Line 80: "Storehouse trains you to think in priorities. What matters most? Is it handled? Then spend what remains without guilt." The hierarchy is the stewardship framework and it structures the entire comparison. |
| 2 | Which pillar does this serve? | PASS -- Primary: Peace (reducing the cognitive burden of budgeting). Secondary: Order (the hierarchy as the alternative structure). Also touches Clarity (one number vs. dozens of categories). |
| 3 | Does this make the reader feel equipped and hopeful -- or guilty and overwhelmed? | PASS -- Line 8: "YNAB taught you to pay attention to your money, and that's worth something real." Line 18: "You're not starting over." Line 102: "If it's working for you, keep using it. Seriously." The piece consistently validates the reader's past investment and current hesitation. |
| 4 | Would Joseph recognize this wisdom? | PASS -- The hierarchy's biblical foundation is stated on line 32: "The order comes from the Bible -- the principle of firstfruits." Joseph would recognize the stewardship principle of concentrating attention on what matters most. The article names the source without over-preaching. |
| 5 | Am I being honest -- or performative? | PASS -- The "What You'll Lose" section (lines 50-62) is the honesty proof. "If those features were the reason YNAB worked for you, Storehouse might not be the right move. These aren't things we plan to add." (line 62). The article explicitly tells readers to stay with YNAB if it's working. This level of honesty cannot be faked. |

## Proposed Changes

### Change 1: Category description needs alignment with updated CIS

**Priority:** High
**Why:** Feature Accuracy (CIS) and Categories guidance. The updated CIS says Storehouse "auto-categorizes for awareness" but has "no category budgets." The signature phrase is: "Categories are the rearview mirror, not the steering wheel." Line 60 says: "The detail within 'everything else' isn't broken out by category." This implies Storehouse does no category tracking at all, which contradicts the CIS statement that Storehouse DOES track categories for awareness -- it just doesn't set category budgets.

> **Current (lines 59-60):**
> YNAB shows you exactly how much went to groceries versus dining out versus household supplies. Storehouse shows you how much you gave, saved, spent on bills, and spent on everything else. The detail within "everything else" isn't broken out by category.

> **Proposed:**
> YNAB shows you exactly how much went to groceries versus dining out versus household supplies, and lets you budget each one. Storehouse auto-categorizes your spending for awareness -- you can see where the money went -- but there are no category budgets. Categories are the rearview mirror, not the steering wheel. Your spending decisions are guided by one number, not forty-seven buckets.

This aligns with the CIS distinction: categories exist for awareness (rearview mirror), but Safe-to-Spend is the steering wheel. The current text makes it sound like Storehouse has no category visibility at all, which understates the feature.

---

### Change 2: Missing author field in frontmatter

**Priority:** Medium
**Why:** Author Naming (CIS). The CIS specifies the author is "JR" only. The frontmatter lacks an author field.

> **Current (lines 1-6):**
> ---
> title: "Coming to Storehouse from YNAB"
> description: "If you're a YNAB user looking for something different, Storehouse speaks your language. Here's how the transition works."
> publishDate: 2026-02-14
> category: "practical-money"
> ---

> **Proposed:**
> ---
> title: "Coming to Storehouse from YNAB"
> description: "If you're a YNAB user looking for something different, Storehouse speaks your language. Here's how the transition works."
> publishDate: 2026-02-14
> author: "JR"
> category: "practical-money"
> ---

---

### Change 3: YNAB import specifics -- verify accuracy

**Priority:** Medium
**Why:** Factual Consistency (dimension 4) and Financial Accuracy. Lines 42-43 state "38 sub-category defaults" and "28 group-level defaults." These are very specific numbers. If they match the current Storehouse codebase, they are excellent -- specific numbers build trust. If the numbers have changed since writing, or if the import feature is still being built, they should be updated. The CIS says: "never let marketing outpace reality."

> **Current (lines 42-43):**
> Storehouse includes 38 sub-category defaults that map your YNAB categories to the right tier. [...] There are also 28 group-level defaults for broader mapping.

> **Proposed:**
> Verify that 38 sub-category defaults and 28 group-level defaults match the current Storehouse codebase. If accurate, keep as-is -- the specificity is a strength. If numbers have changed, update them. If the import feature is not yet built, reframe: "Storehouse will include default mappings that automatically assign your YNAB categories to the right tier."

This is a verification request, not a text change.

---

### Change 4: "47 categories" appears twice -- consider softening the second instance

**Priority:** Low
**Why:** Factual Consistency. "Forty-seven categories" appears on lines 32 and 66. In a general budgeting critique, this number works as rhetorical contrast. In an article specifically about YNAB, the second instance (line 66, in "What You'll Gain") reads more like a factual claim about YNAB's category count. YNAB's actual default category count varies by setup and many users have fewer.

> **Current (line 66):**
> **One number instead of forty-seven categories.**

> **Proposed:**
> **One number instead of dozens of categories.**

The first instance (line 32, "Four tiers instead of forty-seven categories") works as philosophical contrast and can stay. The second instance is in a product-comparison section where precision matters more.

---

### Change 5: Tighten the "What if" rhetorical question

**Priority:** Low
**Why:** Craft quality -- Earned Conclusions (Craft Guide). Lines 85-86 use a rhetorical question ("The problem was never your discipline. It was a tool that asked too much of it.") that restates what the preceding paragraph already demonstrated. The insight is earned by the journey -- "the control they were maintaining wasn't serving them anymore. It was serving the system." The following line should state the conclusion with confidence, not as a question.

> **Current (lines 85-86):**
> The problem was never your discipline. It was a tool that asked too much of it.

> **Proposed:**
> No change needed. The current text on lines 85-86 already uses declarative form ("The problem was never..."), not a question. This appears to have been updated since the previous review. The current version is confident and lands well.

---

## Craft Quality

### AI Tells Found
- **Rule of three (borderline):** The "Maybe" repetition in lines 12-13 uses three parallel beats ("Maybe it was the Tuesday night... Maybe it was the monthly ritual... Maybe you kept up for two years"). This is right at the edge of the Craft Guide's rule-of-three warning. It works here because each beat escalates in severity and the third ("took a week off and the backlog felt so heavy you never went back") is the longest and most devastating. The asymmetry saves it.
- No other significant AI tells. The piece reads as genuinely written.

**AI Tells Count: 1 noted (no change needed)**

### Prose Rhythm: Strong

The opening paragraph (lines 8-10) builds recognition through specific YNAB terminology ("given every dollar a job," "rolled with the punches," "aged your money"). Only a YNAB user would recognize all three. The switch at line 10 -- "paying attention started to feel like a second job" -- is a punchy pivot. The "Philosophical Difference" section uses italicized questions (lines 24-26) as structural contrast -- short, centered, different from the surrounding prose. "What You'll Lose" and "What You'll Gain" vary between bold headers and explanatory prose. The "Mindset Shift" section builds to a genuine emotional climax at "the relief is physical. You can feel your shoulders drop." (line 84). The one section with slightly uniform rhythm is "How the Import Actually Works" (lines 37-48), which runs at a fairly consistent medium sentence length -- appropriate for instructional content.

### Reframes Found
- "You're not starting over. You're carrying forward the most important thing YNAB gave you -- the habit of being intentional." (line 18) -- Strong. Takes the reader's fear (starting over) and inverts it (continuing forward). The first emotional hook.
- "The control shifts from micro-management to priority-setting." (line 34) -- Strong. Reframes losing categories (feels like losing control) as gaining a better kind of control (priorities).
- "The problem was never your discipline. It was a tool that asked too much of it." (lines 85-86) -- Strong. Takes the reader's self-blame and redirects it to the system.
- "You already know how to be intentional with money. YNAB taught you that. Now you get to keep the intention and let go of the overhead." (line 108) -- Strong closing reframe that affirms the past and releases the burden.

**Reframe count: 4 strong. Well above the minimum.**

### Engagement: Pulls forward

The opening builds recognition through YNAB-specific language that only a YNAB user would know. By line 14, the reader feels seen. "The Philosophical Difference" creates curiosity about how the approaches differ at the conceptual level. "How the Import Actually Works" answers the practical question. "What You'll Lose" is the section that keeps the reader -- they need to know if the tradeoffs are acceptable. "What You'll Gain" provides the payoff. "The Mindset Shift" addresses the emotional dimension. Each section builds on the previous. No natural exit point until the close.

## The "Changed Inside" Test

The reader arrives believing: "I need to track every category to be responsible with money." The reader leaves believing: "I need to set my priorities and trust the one number." The shift from micro-management to priority-setting is a genuine internal change, not just information. The conclusion is earned through the journey: YNAB fatigue (opening), philosophical difference (middle), honest tradeoffs (losses/gains), and the emotional release ("the relief is physical"). Passes.

## Condescension Check: Clean

No "simply put," "let me explain," or "let's break this down." The article assumes the reader is a sophisticated YNAB user who understands budgeting concepts. Line 8: "You know what zero-based budgeting is" -- the very first sentence treats the reader as an expert.

## Blame & Villainization Check: Clean

This is where the article excels. YNAB is treated with genuine respect throughout. Line 8: "YNAB taught you to pay attention to your money, and that's worth something real." Line 102: "YNAB is a well-built tool that has helped millions of people take control of their finances." The critique is always structural -- the approach of zero-based budgeting, the cognitive load of category management -- never personal to YNAB's team or users. Line 104: "that's not a failure of discipline. It might be a mismatch between the tool's demands and your capacity." A satisfied YNAB user reading this would feel respected, not attacked.

## Red Lines Check

| Red Line | Status |
|----------|--------|
| Shaming people for financial situation | CLEAR -- The entire piece validates the reader's experience |
| Prosperity gospel messaging | CLEAR |
| Legalistic messaging | CLEAR |
| Attacking other apps by name | REQUIRES ATTENTION -- YNAB is named throughout. The Red Line says: "Comparisons to other apps by name that feel like attacks." This article names YNAB but treats it with genuine respect. Every critique targets the approach (zero-based budgeting, category maintenance), not the product or its creators. Lines 8, 18, 102, and 108 explicitly praise YNAB. PASSES -- this is differentiation with respect, not attack. |
| Replacing professional financial advice | CLEAR |
| Fear-based messaging | CLEAR |
| Excluding non-Christians | CLEAR -- The biblical attribution on line 32 is transparent without requiring shared faith |

No red line violations.

## Truths Extracted

- "You're not starting over. You're carrying forward the most important thing YNAB gave you -- the habit of being intentional." (line 18)
- "The problem was never your discipline. It was a tool that asked too much of it." (line 86)
- "You already know how to be intentional with money. YNAB taught you that. Now you get to keep the intention and let go of the overhead." (line 108)

## Cross-Reference Notes

### Consistency with Why Most Budgeting Apps Make You Feel Worse
That foundations article names YNAB and critiques zero-based budgeting more aggressively. This blog post takes a warmer, more empathetic tone. The two are compatible: the foundations article makes the philosophical case against the approach, while this blog post empathizes with the specific user's experience. The blog post's tone is the better model for competitor references. No contradictions.

### Consistency with The One Number That Tells You the Truth
Safe-to-Spend is referenced multiple times (lines 32, 66, 70, 94, 96, 106) and the description is consistent: "what you can freely spend after giving, saving, and bills are handled" (line 66). Matches the foundations article.

### Consistency with The Weekly Ritual
Line 70: "Storehouse works on a weekly review cycle." Consistent with The Weekly Ritual's ten-minute practice. No contradictions.

### Category description conflict (CRITICAL)
Line 60 says: "The detail within 'everything else' isn't broken out by category." The updated CIS says Storehouse "auto-categorizes for awareness" and the signature phrase is "Categories are the rearview mirror, not the steering wheel." The CIS explicitly notes: "say 'no category budgets' (not 'no category tracking' -- we DO track categories)." Line 60 implies no category tracking at all, which understates the feature and contradicts the CIS. Change 1 addresses this.

### Biblical attribution
Line 32 includes: "The order comes from the Bible -- the principle of firstfruits, honoring God with the first of what you earn rather than the leftovers." This meets the "Attributive, not vague" standard and follows the Craft Guide's guidance to weave attribution naturally into the text. One citation in a blog post is appropriate.

### "47 categories" usage
Appears twice (lines 32, 66). Also appears in The One Number and Why Most Budgeting Apps articles. In a YNAB-specific comparison, the second instance reads as a factual claim. Change 4 addresses this.

### YNAB import numbers
38 sub-category defaults and 28 group-level defaults are cited. These should be verified against the current codebase (Change 3).

### Frontmatter consistency
Blog posts lack `author`, `pillar`, `tier`, `articleNumber`, and `status` fields present in foundations articles.

## Cross-Link Recommendations

### Forward Links (this article to existing)
| Target Article | Suggested Anchor Text | Section | Reason |
|---------------|----------------------|---------|--------|
| The Weekly Ritual | "weekly review" | A Weekly Rhythm | Line 70 describes the weekly cycle but doesn't link to the full article |
| Setting Your Hierarchy | "Set your hierarchy" | A Practical Transition | Step 3 pairs naturally with the hierarchy setup guide |
| Why We Don't Connect to Your Bank | "why we chose manual import" | How the Import Actually Works | YNAB users will wonder about the lack of auto-sync |

### Backlinks Needed (existing to this article)
| Source Article | Suggested Anchor Text | Reason |
|---------------|----------------------|--------|
| Why Most Budgeting Apps Make You Feel Worse | "coming from YNAB" | Readers who resonate with the budgeting apps critique may want the YNAB-specific transition guide |
| Why We Don't Connect to Your Bank | "If you're coming from YNAB" | Line 62 of that article mentions YNAB but doesn't link to this piece |
