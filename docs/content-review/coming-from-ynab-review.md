# Content Review: Coming to Storehouse from YNAB

**Source:** `projects/storehouse-website/src/content/blog/coming-to-storehouse-from-ynab.md`
**Reviewed:** 2026-02-16
**Reviewer:** content-reviewer agent
**Verdict:** Publish-ready with revisions

## Review Summary

This is one of the strongest pieces in the Storehouse corpus. It does something remarkably difficult: it respects a competitor's product, empathizes with the reader who used it, honestly names what they'll lose, and still makes a compelling case for the alternative. The "What You'll Lose" section (lines 50-62) is the article's trust anchor -- few marketing pieces would voluntarily enumerate their disadvantages. The YNAB import details (38 sub-category defaults, 28 group-level defaults) are specific enough to be useful and confident enough to be convincing. The primary integrity issue is the complete absence of biblical attribution -- the hierarchy is presented as a purely practical framework without once naming its biblical foundation, which contradicts the "Attributive, not vague" voice guideline. The primary craft issue is a single AI-tell pattern ("Here's how it works in practice" variant at line 86) and one moment where the reframe is stated rather than earned (line 86: "What if the problem wasn't your discipline?"). Five proposed changes, none structural.

---

## Filter Questions

| # | Question | Result |
|---|----------|--------|
| 1 | Does this serve stewardship? | PASS -- The article positions the switch from YNAB to Storehouse as moving from micro-management to priority-setting (line 34). Line 80: "Storehouse trains you to think in priorities. What matters most? Is it handled? Then spend what remains without guilt." The hierarchy is the stewardship framework, and it structures the entire comparison. |
| 2 | Which pillar does this serve? | PASS -- Primary: **Peace** (the entire piece is about reducing the cognitive burden of budgeting). Secondary: **Order** (the hierarchy as the alternative structure). Also touches **Clarity** (one number vs. forty-seven categories). |
| 3 | Does this make the reader feel equipped and hopeful -- or guilty and overwhelmed? | PASS -- Line 8: "YNAB taught you to pay attention to your money, and that's worth something real." Line 18: "You're not starting over. You're carrying forward the most important thing YNAB gave you." Line 102: "If it's working for you, keep using it. Seriously." The piece consistently respects where the reader has been and validates their past investment. |
| 4 | Would Joseph recognize this wisdom? | PASS with a caveat -- Joseph would recognize the principle of concentrating attention on what matters most and delegating the rest. The hierarchy's priority-first approach mirrors his strategy. But the article never names Joseph, the Bible, or God. Joseph would recognize the wisdom but wonder why the source went unacknowledged. See Change 1. |
| 5 | Am I being honest -- or performative? | PASS -- The "What You'll Lose" section (lines 50-62) is the honesty proof. "If those features were the reason YNAB worked for you, Storehouse might not be the right move. These aren't things we plan to add." (line 62). The article explicitly tells readers to stay with YNAB if it's working. This level of honesty cannot be faked. |

---

## Proposed Changes

### Change 1: Add biblical attribution to the hierarchy presentation

**Priority:** High
**Why:** Voice alignment ("Attributive, not vague") and Biblical Attribution Standard (Craft Guide). The article presents the hierarchy -- Give first, Save second, Pay bills, Spend what remains -- as a practical framework without once acknowledging its biblical foundation. The word "stewardship" does not appear. The Bible is not referenced. God is not named. The hierarchy's giving-first order comes from the firstfruits principle (Proverbs 3:9), and the entire Storehouse framework is rooted in biblical stewardship. The Integrity System says: "When a principle comes from the Bible, say so." The Craft Guide says: "Cite when the principle originates from a specific passage."

This article will be read by YNAB users who are likely encountering Storehouse for the first time. They deserve to know the foundation, not just the mechanics. The "Philosophical Difference" section (lines 22-34) is the natural home for one brief attribution -- it's where the article explains why the hierarchy exists.

> **Current (lines 32-33):**
> Storehouse concentrates your attention into one decision: set your hierarchy. Give first. Save second. Pay your bills. Spend what remains. Four tiers instead of forty-seven categories. One number -- Safe-to-Spend -- instead of a dashboard full of progress bars.

> **Proposed:**
> Storehouse concentrates your attention into one decision: set your hierarchy. Give first. Save second. Pay your bills. Spend what remains. The order comes from the Bible -- the principle of firstfruits, honoring God with the first of what you earn rather than the leftovers. Four tiers instead of forty-seven categories. One number -- Safe-to-Spend -- instead of a dashboard full of progress bars.

This adds one sentence. It names the source, cites the principle, and fits naturally into the flow. The sentence that follows ("Four tiers instead of forty-seven categories") works as a pivot back to the practical comparison. A YNAB user who doesn't share the faith sees a transparent statement about the framework's origin. A YNAB user who does share the faith sees something that differentiates Storehouse from every other budgeting tool at the values level.

---

### Change 2: Temper the "47 categories" claim for factual accuracy

**Priority:** Medium
**Why:** Factual Consistency (dimension 4). The article uses "forty-seven categories" twice (lines 32, 66) as a shorthand for YNAB's complexity. This specific number also appears in Articles #2 and #3 as a general budgeting critique, not a YNAB-specific claim. In the context of a YNAB comparison article, the number reads as a factual claim about YNAB specifically. YNAB's default category count varies by setup, and many users have fewer. Using this number in an article specifically about YNAB risks being perceived as an exaggeration.

> **Current (line 66):**
> **One number instead of forty-seven categories.** Safe-to-Spend tells you what you can freely spend after giving, saving, and bills are handled.

> **Proposed:**
> **One number instead of dozens of categories.** Safe-to-Spend tells you what you can freely spend after giving, saving, and bills are handled.

The first instance (line 32, "Four tiers instead of forty-seven categories") works because it's in the philosophical comparison section where the number serves as a rhetorical contrast. The second instance (line 66) is in the "What You'll Gain" section where it reads more like a factual claim. Softening the second to "dozens" preserves the contrast while avoiding a disputable number in a product-comparison context.

---

### Change 3: Refine the YNAB import specifics for verifiability

**Priority:** Medium
**Why:** Factual Consistency (dimension 4) and Financial Accuracy. Lines 42-43 state: "Storehouse includes 38 sub-category defaults that map your YNAB categories to the right tier" and "28 group-level defaults for broader mapping." These are very specific numbers. If these numbers are accurate to the current codebase, they are excellent -- specific numbers build trust. If they are approximations or aspirational, they should be softened. The CIS Financial Accuracy section says: "never let marketing outpace reality."

> **Current (lines 42-43):**
> Storehouse includes 38 sub-category defaults that map your YNAB categories to the right tier. Your "Groceries" category maps to Live. Your "Rent" maps to Bills. Your "Tithe" maps to Give. There are also 28 group-level defaults for broader mapping -- so if you have a YNAB group called "Immediate Obligations," the import knows where those sub-categories belong even if a specific sub-category name isn't in the defaults.

> **Proposed:**
> Verify that 38 sub-category defaults and 28 group-level defaults match the current Storehouse codebase. If they do, keep as-is -- the specificity is a strength. If the numbers have changed, update them. If the import feature is not yet built, reframe as planned capability: "Storehouse will include default mappings that automatically assign your YNAB categories to the right tier."

This is a verification request, not a text change. The existing text is excellent if accurate.

---

### Change 4: Remove the rhetorical question that tells rather than earns

**Priority:** Medium
**Why:** Craft quality -- Earned Conclusions (Craft Guide). Line 86 asks: "What if the problem wasn't your discipline? It was the tool asking too much of it." This is a genuinely strong reframe, but it's placed at the end of the "Mindset Shift" section after a paragraph that already walks the reader through the insight. The reader has already arrived at the conclusion through the preceding sentences ("The control they were maintaining wasn't serving them anymore. It was serving the system. The categories were accurate, but the experience was exhausting."). The rhetorical question restates what the reader just discovered, which makes it feel like a summary rather than an insight.

> **Current (lines 83-86):**
> Give it a month. What most YNAB switchers discover is that the control they were maintaining wasn't serving them anymore. It was serving the system. The categories were accurate, but the experience was exhausting. When you replace forty-seven decisions with one number, the relief is physical. You can feel your shoulders drop.
>
> What if the problem wasn't your discipline? It was the tool asking too much of it.

> **Proposed:**
> Give it a month. What most YNAB switchers discover is that the control they were maintaining wasn't serving them anymore. It was serving the system. The categories were accurate, but the experience was exhausting. When you replace those decisions with one number, the relief is physical. You can feel your shoulders drop.
>
> The problem was never your discipline. It was a tool that asked too much of it.

This converts the rhetorical question to a declarative statement, which is more confident and avoids the "What if..." hedge. The insight is earned by the preceding paragraph and deserves to be stated directly.

---

### Change 5: Fix the "Not Better. Different." section's internal tension

**Priority:** Low
**Why:** Voice alignment -- Competitor Respect Standard. The section heading "Not Better. Different." is a good framing. But line 106 says: "It asks less of you in the details so you can focus more on the priorities." Read in context, this implies Storehouse IS better -- it just achieves the improvement through a different mechanism. The heading promises neutrality that the body doesn't quite deliver.

This is a minor tension, not a blocking issue. The overall section is respectful and honest. The "If it's working for you, keep using it. Seriously." (line 102) is one of the best competitor-respect lines in the entire corpus. The tension between "Not Better" and "focus more on the priorities" is the kind of honest inconsistency that feels human rather than calculated. No text change proposed -- noting for awareness only.

---

## Craft Quality

### AI Tells Found
- **Rhetorical question as summary device:** "What if the problem wasn't your discipline?" (line 86) -- Functions as a restatement rather than a discovery. Addressed in Change 4.
- **Rule of three in "What You'll Gain":** Four items listed (lines 66-72), each with bold header and explanation. The count is four, not three, which actually breaks the AI-three pattern. The parallel structure is appropriate for a comparison piece. No change needed.
- **"Seriously." as standalone emphasis (line 102):** This is a deliberate choice, not an AI tell. It works because it interrupts the reader's assumption that the "keep using it" recommendation is performative. Clean.

**AI Tells Count: 1 actionable, 2 noted only**

### Prose Rhythm: Strong

The opening paragraph (lines 8-10) builds recognition through specific YNAB terminology ("given every dollar a job," "rolled with the punches," "aged your money"). The switch at line 10 -- "paying attention started to feel like a second job" -- is a punchy pivot that earns the rest of the article. The "Maybe" repetition at lines 12-13 ("Maybe it was the Tuesday night... Maybe it was the monthly ritual... Maybe you kept up for two years") creates an effective escalating rhythm, though three "Maybe" beats is right at the edge of the Craft Guide's rule-of-three warning. It works here because each beat escalates in severity.

The "Philosophical Difference" section uses the italicized questions (lines 24-26) as structural contrast -- short, centered, different from the surrounding prose. The "What You'll Lose" section varies between bold headers and plain-prose explanations. The "Mindset Shift" section (lines 74-86) builds to a genuine emotional climax at "the relief is physical. You can feel your shoulders drop." The one section that could use more rhythm variation is "How the Import Actually Works" (lines 37-48), which runs at a fairly uniform medium sentence length -- appropriate for instructional content but slightly monotonous.

### Reframes Found
- **"You're not starting over. You're carrying forward the most important thing YNAB gave you -- the habit of being intentional." (line 18)** -- Strong. Takes the reader's fear (starting over) and inverts it (continuing forward). This is the article's first emotional hook and it earns trust immediately.
- **"The control shifts from micro-management to priority-setting." (line 34)** -- Strong. Reframes what feels like losing control (fewer categories) as gaining a better kind of control (priorities instead of transactions).
- **"The problem was never your discipline. It was a tool that asked too much of it." (line 86, proposed)** -- Strong. Takes the reader's self-blame and redirects it to the system. Echoes Article #2's "That's not a discipline problem. That's a design problem."
- **"You already know how to be intentional with money. YNAB taught you that. Now you get to keep the intention and let go of the overhead." (line 108)** -- Strong closing reframe. Affirms what YNAB gave, names what the reader gets to release.

**Reframe count: 4 strong. Well above the minimum.**

### Engagement: Pulls forward

The opening builds recognition through YNAB-specific language that only a YNAB user would know. By line 14, the reader who came from YNAB feels seen. "The Philosophical Difference" creates curiosity about how the two approaches differ at the conceptual level. "How the Import Actually Works" answers the practical question ("Can I bring my data?"). "What You'll Lose" is the section that keeps the reader -- they need to know if the tradeoffs are acceptable. "What You'll Gain" provides the payoff. "The Mindset Shift" addresses the emotional dimension. "A Practical Transition" converts to action. Each section builds on the previous one. The piece does not lose the reader at any point.

### The "Changed Inside" Test

The reader arrives believing: "I need to track every category to be responsible with money." The reader leaves believing: "I need to set my priorities and trust the one number." The shift from micro-management to priority-setting is a genuine internal change, not just an information transfer. The conclusion is earned through the journey -- the reader experiences the YNAB fatigue (opening), understands the philosophical difference (middle), sees the honest tradeoffs (losses/gains), and arrives at the reframe through a guided emotional journey ("the relief is physical"). Passes.

### Condescension Check: Clean

No "simply put," "let me explain," or "let's break this down." The article assumes the reader is a sophisticated YNAB user who understands budgeting concepts. It never explains what a category is, what reconciliation means, or how budgeting works. It trusts the reader to understand the comparison. Line 8: "You know what zero-based budgeting is" -- the very first sentence treats the reader as an expert.

### Blame & Villainization Check: Clean

This is where the article excels. YNAB is treated with genuine respect throughout. Line 8: "YNAB taught you to pay attention to your money, and that's worth something real." Line 102: "YNAB is a well-built tool that has helped millions of people take control of their finances." The critique is always structural -- the approach of zero-based budgeting, the cognitive load of category management -- never personal to YNAB's team or users. Line 104: "that's not a failure of discipline. It might be a mismatch between the tool's demands and your capacity." A satisfied YNAB user reading this would feel respected, not attacked.

---

## Red Lines Check

| Red Line | Status |
|----------|--------|
| Shaming people for financial situation | CLEAR -- The entire piece validates the reader's YNAB experience |
| Prosperity gospel messaging | CLEAR |
| Legalistic messaging | CLEAR |
| Attacking other apps by name | REQUIRES ATTENTION -- YNAB is named throughout. The Integrity System says: "Comparisons to other apps by name that feel like attacks" are a red line. This article names YNAB but treats it with genuine respect. Every critique targets the approach (zero-based budgeting, category maintenance), not the product or its creators. Lines 8, 18, 102, and 108 explicitly praise YNAB. PASSES the red line test -- this is differentiation, not attack. |
| Replacing professional financial advice | CLEAR |
| Fear-based messaging | CLEAR |
| Excluding non-Christians | CLEAR -- but the complete absence of biblical attribution means a reader who encounters Storehouse through this article would have no idea the hierarchy is biblically grounded. This isn't exclusionary, but it misses the "Attributive, not vague" standard. |

No red line violations. The YNAB naming is handled with the respect the Competitor Respect Standard requires.

---

## Truths Extracted

- **"You're not starting over. You're carrying forward the most important thing YNAB gave you -- the habit of being intentional." (line 18)** -- Applicable beyond YNAB to anyone switching financial tools. Quotable in onboarding.

- **"The problem was never your discipline. It was a tool that asked too much of it." (line 86, proposed version)** -- Echoes Article #2's founding truth ("That's not a discipline problem. That's a design problem.") in a YNAB-specific context. Quotable independently.

- **"Permission to stop tracking every dollar." (line 72)** -- Not a full truth statement, but the concept -- permission as a feature -- is powerful and could be referenced in onboarding and marketing.

- **"You already know how to be intentional with money. YNAB taught you that. Now you get to keep the intention and let go of the overhead." (line 108)** -- The article's best closing line. Affirms, reframes, and invites in three sentences.

---

## Cross-Reference Notes

### Consistency with "Why Most Budgeting Apps Make You Feel Worse" (Article #3)

Article #3 names YNAB, Mint, and Monarch, and critiques zero-based budgeting as a system that "punishes you" when you fall behind (line 25). This blog post takes a warmer tone toward YNAB -- "YNAB is a well-built tool" (line 102). The two pieces are compatible (Article #3 critiques the category approach; this article empathizes with the YNAB user's experience) but readers who encounter both may notice the tonal difference. Article #3's "punishes" language (flagged in that article's review) is more aggressive than anything in this blog post. The blog post's tone is the better model.

### Consistency with "The One Number That Tells You the Truth" (Article #2)

Article #2 introduces Safe-to-Spend with the formula: Income - Giving - Saving - Bills = Safe-to-Spend. This blog post references Safe-to-Spend multiple times (lines 32, 66, 70, 94, 96, 106) and the description is consistent: "what you can freely spend after giving, saving, and bills are handled" (line 66). No contradictions.

### Consistency with "The Weekly Ritual" (Article #4)

Line 70: "Storehouse works on a weekly review cycle. Check in once a week, review your Safe-to-Spend, make adjustments if needed." This is consistent with Article #4's ten-minute weekly ritual. The blog post does not reference Article #4 by name -- an opportunity for a cross-link in the "weekly rhythm" mention on line 70.

### Consistency with "Setting Your Hierarchy" (Article #5)

Line 94: "Set your hierarchy. Decide your giving target, your saving target, and confirm your bills." This is consistent with Article #5's walkthrough of hierarchy setup. The blog post's Step 3 serves as a bridge to Article #5 for readers who proceed with the transition.

### Biblical attribution gap

This article has zero biblical attribution -- no mention of the Bible, God, stewardship, firstfruits, or Scripture. The hierarchy is presented as a practical framework. Among all Storehouse content, this is the piece most likely to be a reader's first encounter with the brand (YNAB users searching for alternatives). A reader who arrives here would encounter the hierarchy as a secular productivity system, missing the biblical foundation that the Integrity System calls the "heart of Storehouse." Change 1 addresses this with one sentence.

### "47 categories" usage

Appears twice in this article (lines 32, 66). Also appears in Articles #2 and #3. In the context of a YNAB-specific comparison, the number reads as a factual claim about YNAB rather than a general budgeting critique. Change 2 addresses the second instance.

### Frontmatter consistency

Same observation as the bank-connection article: blog posts lack `pillar`, `tier`, `articleNumber`, `status`, and `author` fields present in foundations articles. This appears to be a content-type distinction.

### No factual contradictions found across any cross-referenced articles.
