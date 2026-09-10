#!/bin/bash
# Run ONLY after GoDaddy DNS points at GitHub Pages (see README-DNS.md). Switches every URL to transdatanexus.com.
set -e
cd "$(dirname "$0")"
OLD="https://sureshsormare.github.io/tdn-website"; NEW="https://transdatanexus.com"
for f in *.html sitemap.xml robots.txt; do sed -i '' "s|$OLD/|$NEW/|g; s|$OLD|$NEW|g" "$f"; done
echo "transdatanexus.com" > CNAME
git add -A && git commit -m "Go live on transdatanexus.com" && git push
gh api -X PUT repos/sureshsormare/tdn-website/pages -f cname=transdatanexus.com >/dev/null && echo "custom domain set"
echo "Wait a few minutes for the certificate, then: gh api -X PUT repos/sureshsormare/tdn-website/pages -F https_enforced=true"
