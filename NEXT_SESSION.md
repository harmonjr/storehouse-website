## NEXT SESSION PROMPT

I'm working on the **Storehouse website** (storehouse-website). This is the **launch session**.

**Context:**
- Full content alignment pass complete (2026-02-17): CIS updated, all 17 articles + FAQ revised
- Website is content-complete and build-verified (28 pages)
- Randy has: Kit.com (ConvertKit) account (on dashboard), Cloudflare domain (mystorehouse.app), Zoho email (hello@, support@, jr@ all @mystorehouse.app, first two forwarding to personal)
- App is NOT ready yet -- waitlist is the correct CTA for now

**This session has 5 phases:**

### Phase 1: Kit.com Waitlist Integration
- Walk Randy through Kit.com setup: create a form/landing page for the waitlist
- Get the Kit.com form ID or embed code
- Rewire all waitlist CTAs on the website to submit to Kit.com
- Current waitlist touchpoints: WaitlistForm component, Header, MobileNav, hero section, blog layout, dedicated waitlist page, final CTA sections
- Test the form submission end-to-end

### Phase 2: Kit.com Welcome Email Sequence
- Set up a 4-email welcome sequence in Kit.com:
  - **Day 0:** Welcome + link to "Give First, Save Second, Spend What Remains"
  - **Day 3:** Link to "The One Number That Tells You the Truth"
  - **Day 7:** Link to "Why Most Budgeting Apps Make You Feel Worse"
  - **Day 14:** Link to "When You're Starting From Zero"
- Draft the email copy (short, warm, matches CIS voice)
- Configure automation trigger: new subscriber → welcome sequence

### Phase 3: Domain & Email Updates
- Update 4 references from `storehouse.app` to `mystorehouse.app`:
  - `src/pages/faq.astro` (lines 32, 401) -- mailto links
  - `src/components/Footer.astro` (line 13) -- mailto link
  - `src/layouts/BaseLayout.astro` (line 14) -- siteUrl
- Verify privacy.astro and terms.astro reference correct domain/email
- Check meta tags, og:image, canonical URLs

### Phase 4: Final Visual Review
- Run `npm run dev` and walk through every page together
- Check mobile responsiveness
- Verify all links work
- Verify all content reads correctly after revisions
- Screenshot key pages for reference

### Phase 5: Deploy to Vercel + Custom Domain
- Deploy to Vercel (may already have a project, check first)
- Configure custom domain: mystorehouse.app
- DNS setup on Cloudflare:
  - Add CNAME record pointing to Vercel
  - NOTE: Cloudflare proxy (orange cloud) can cause SSL issues with Vercel -- may need to set DNS-only (grey cloud) or configure Cloudflare SSL to "Full (Strict)"
- Verify HTTPS works
- Verify email addresses still work (Zoho MX records shouldn't be affected by Vercel CNAME)
- Test live site

**WORKFLOW:**
1. Read PROGRESS.md and NEXT_SESSION.md
2. Work through phases 1-5 in order
3. Commit after each phase
4. Push after final verification

**Randy's setup:**
- Kit.com account (on dashboard, ready to configure)
- Cloudflare account with mystorehouse.app domain
- Zoho email: hello@mystorehouse.app, support@mystorehouse.app, jr@mystorehouse.app
- First two emails are groups forwarding to personal

STOP CONDITION: Website is live at mystorehouse.app with working waitlist → Kit.com → welcome sequence.
- Do NOT change any content (content alignment is done)
- Do NOT start app-side work
