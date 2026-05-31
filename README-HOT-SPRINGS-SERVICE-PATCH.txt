Copy the src folder from this patch into your project root and let it overwrite matching files.

This patch adds hard-coded service page routes under:
- src/app/services/standard-cleaning/page.tsx
- src/app/services/deep-cleaning/page.tsx
- src/app/services/move-in-move-out-cleaning/page.tsx
- src/app/services/airbnb-cleaning/page.tsx
- src/app/services/professional-building-cleaning/page.tsx

It also adds the hard-coded Hot Springs local service routes under:
- src/app/locations/hot-springs-ar/airbnb-cleaning/page.tsx
- src/app/locations/hot-springs-ar/deep-cleaning/page.tsx
- src/app/locations/hot-springs-ar/move-in-move-out-cleaning/page.tsx

Important cleanup after copying:
- Delete src/app/services/[slug]
- Delete src/app/locations/[slug]/[serviceSlug] only if you truly do not want any dynamic local service routes.

The broken import of @/components/ServiceLocationPage is not used anywhere in these hard-coded pages. The Hot Springs pages use your existing LocalServicePageContent component.
