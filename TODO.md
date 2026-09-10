# TransDataNexus static site — build checklist

Phase 0 — Scaffold & design system
- [x] Project folder, assets, screenshots copied from the public showcase
- [x] styles.css — TDN theme (teal-black ink, teal + amber accents, Manrope / IBM Plex)
- [x] main.js — mobile nav, reveal-on-scroll, count-up numbers, tabs, typed question, video
- [x] Shared header / footer markup, favicon, OG image

Phase 1 — Home
- [x] Hero: authorised sources → molecule spine → lenses (live lines), stats strip
- [x] Three product cards, embedded teaser video, services strip, CTA band

Phase 2 — Trade Data page (diagram + 5 real screenshots) — [x] done
Phase 3 — Healthcare & Pharma page (nine-lens layer panel, Data Atlas counts, lens tabs with 8 screenshots) — [x] done
Phase 4 — NLQ page (question → verify → answer pipeline, typed demo, fresh Ask console screenshot) — [x] done (real answer: 51 alert-free apixaban suppliers, 0.39 s)
Phase 5 — Services page + Demo request (FormSubmit → suresh@transdatanexus.com → thanks page) — [x] done
Phase 6 — [x] QA (links, forbidden words, 3 widths, reduced motion, weight), sitemap/robots, deploy to GitHub Pages, verify live

Post-launch
- [ ] Activate FormSubmit: submit the form once, then click the confirmation link that arrives at suresh@transdatanexus.com
- [ ] Point transdatanexus.com at GitHub Pages when approved (CNAME file + DNS), then update the form's _next URL and sitemap/og URLs

Phase 7 — Enterprise upgrade (2026-09-10, user: "much more modern and enterprise level")
- [x] Trust strip, animated hero orb, icon tiles, personas (15 roles × verified questions), platform tour tabs, before/after table, data coverage metrics + source families, enterprise & deployment, engagement models, FAQ
- [x] suresh@transdatanexus.com + Mumbai everywhere
Phase 8 — Three-pillar structure (Consulting · Products · Development)
- [x] Nav: Products / Data / Consulting / Development; footer columns; contact form options (Data package, Platform development, Consulting)
- [ ] products.html (overview + comparison), data.html (9 packages, no prices), development.html (platform build), privacy.html, terms.html
- [ ] QA all pages, push, verify live
- [ ] Domain: user sets GoDaddy records (README-DNS.md), then ./go-live.sh
