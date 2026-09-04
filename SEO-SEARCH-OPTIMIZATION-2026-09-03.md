# Search optimization update — September 3, 2026

## What changed

- Made each main city page the clear target for broad searches such as “house cleaning Hot Springs AR,” “house cleaning Arkadelphia AR,” and similar city-level searches.
- Repositioned each city-specific standard-cleaning page around recurring, weekly, and biweekly cleaning so it does not compete as directly with the main city house-cleaning page.
- Updated Hot Springs page copy, title, description, service-card language, and internal anchor text to reinforce that hierarchy.
- Added recurring-cleaning FAQs and recurring-cleaning structured-data names for local standard-cleaning pages.
- Standardized structured data around one CleaningService business entity instead of creating a separate business entity for every city page.
- Added a city-level Service schema that points back to the single Lyn & Lili’s business entity.
- Removed the obsolete global meta-keywords list.
- Replaced ordinary image tags with Next.js Image optimization across the hero, gallery, before/after section, and service-page photography.
- Kept existing local service URLs and redirects in place. No ranking URLs were deleted during this pass because Search Console already shows useful impressions/clicks on several of them.

## Bing / DuckDuckGo discovery

- Added an IndexNow ownership key at the site root.
- Added `npm run seo:indexnow` to submit the URLs in the live sitemap to IndexNow after deployment.
- Existing robots.txt already allows normal crawlers and references the XML sitemap.

## After deployment

1. Open the live site and confirm the main city pages and recurring-cleaning pages render normally.
2. In Google Search Console, resubmit `https://www.lynandlilistidyhouse.com/sitemap.xml`.
3. Request indexing for these changed pages first:
   - `/house-cleaning-hot-springs-ar`
   - `/house-cleaning-arkadelphia-ar`
   - `/house-cleaning-malvern-ar`
   - `/house-cleaning-glenwood-ar`
   - `/house-cleaning-amity-ar`
   - `/locations/hot-springs-ar/standard-cleaning`
4. Import the verified Google Search Console property into Bing Webmaster Tools and submit the same sitemap there.
5. After the new deployment is live, run `npm run seo:indexnow` once from the project directory. Do not run it before the deployment because the IndexNow key file must already be live.
6. Compare the next 7 days against the previous 7 days in Search Console, especially the Hot Springs city page and the recurring-cleaning page.
