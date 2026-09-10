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
- [x] Point transdatanexus.com at GitHub Pages — DONE 2026-09-10; form _next, sitemap and og URLs all swapped

Phase 7 — Enterprise upgrade (2026-09-10, user: "much more modern and enterprise level")
- [x] Trust strip, animated hero orb, icon tiles, personas (15 roles × verified questions), platform tour tabs, before/after table, data coverage metrics + source families, enterprise & deployment, engagement models, FAQ
- [x] suresh@transdatanexus.com + Mumbai everywhere
Phase 8 — Three-pillar structure (Consulting · Products · Development)
- [x] Nav: Products / Data / Consulting / Development; footer columns; contact form options (Data package, Platform development, Consulting)
- [x] products.html, data.html, development.html, privacy.html, terms.html
- [x] QA all pages (12/12 clean), pushed 710cf91, all 12 live 200
- [x] Domain: GoDaddy records set by user, ./go-live.sh run 2026-09-10 — LIVE on https://transdatanexus.com (4e18ef6), cert approved, HTTPS enforced, www + old github.io URL both redirect to apex

Phase 9 — Data page: measured figures, neutral trade wording, use cases (2026-09-10)
- [x] data.html #holdings — the 11 Atlas headline figures as figure cards (13.4bn claims, $2.21T spend, 9.49mn providers, 29,142 approvals, 21,112 patents/exclusivity, 587,105 trials, 9,714 plants, 71,319 inspections, 97,038 findings, 11,668 plans, 24.1mn coverage decisions) + measured-on footnote
- [x] data.html #use-cases — 18 use cases, each naming the packages it reads
- [x] RULE: trade data carries no country of origin anywhere (kept: "Mumbai, India" address, terms.html jurisdiction, Ask demo on Indian apixaban suppliers = DMF data, not trade)
- [x] RULE: "rows" → "records" in all reader-visible copy, alt text and diagram labels
- [x] Reconciled with the live Atlas: 1,180 → 1,160 original files, 1939 to 2026 → 1939 to 2028
- [x] Fixed SVG label overflow in the trade and pipeline diagrams

Phase 10 — Screenshot leaks + go-live (2026-09-10)
- [x] Verification workflow (47 agents) found 26 confirmed defects; the serious ones were baked into screenshot PIXELS, invisible to text search
- [x] Retouched 7 PNGs by shifting the real rendered text (no fonts faked; originals backed up in scratchpad/shots-bak):
      dashboard.png (India→World toggle band cut + whole HS CODE column removed + HS Code filter chip)
      dashboard-global-trade.png ("UN Comtrade" ×2, HS Codes button, HS CODE column, "300490 - " product prefix)
      dashboard-trade-flow.png ("India →" origin, "DRUGS / HS CODES")
      dashboard-country.png ("from India", "India-origin pharma", "India-origin supply chain")
      dashboard-company.png ("Indian exporter")
      ask-console.png ("Top 10 Indian exporters" chip + "curated rows · 198 datasets" footer)
      supply-plant-map.png ("India → US Shipments", "(Comtrade)", footer)
- [x] Text fixes from the same pass: 3 missed "row"s, wrong rows→records substitution on products.html, plants 9,015 vs 9,714, package/holdings contradictions
- [x] LIVE on transdatanexus.com
- [ ] Activate FormSubmit: submit the form once, click the link that arrives at suresh@transdatanexus.com
