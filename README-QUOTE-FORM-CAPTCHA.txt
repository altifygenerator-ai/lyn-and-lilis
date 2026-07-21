QUOTE FORM CAPTCHA UPDATE

Updated files:
- src/components/QuoteForm.tsx
- src/app/api/quote/route.ts

What was added:
- A small addition question on the public quote form.
- Server-side signed validation so visitors cannot simply alter the expected answer in the browser.
- A 10-minute expiration on each challenge.
- A short minimum completion time to reject instant automated submissions.
- A hidden honeypot field that silently discards basic form bots.

Environment variables:
- No new variable is required if RESEND_API_KEY is already configured.
- Optional: add CAPTCHA_SECRET in Vercel with any long random value. When present, it is used only to sign CAPTCHA challenges.

Checks completed:
- TypeScript: passed
- ESLint on changed files: passed
- Local API tests: challenge creation passed; incorrect answer rejected; honeypot submission discarded; correct answer accepted

The full Next.js production build reached the existing Google Font download step but could not finish in the isolated test environment because Google Fonts was unreachable. This is unrelated to the CAPTCHA code.
