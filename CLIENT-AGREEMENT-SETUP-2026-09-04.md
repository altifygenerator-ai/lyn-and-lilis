# Lyn & Lili's Client Agreement + Card-on-File Setup

This update adds a shareable client policy agreement and optional Stripe card-on-file setup.

## What was added

- `/policies` rewritten with the updated cancellation, access, deposit, payment, and card-on-file policies.
- `/client-agreement` shareable form for new or existing clients.
- Typed-name acknowledgment with policy version and full policy snapshot stored at acceptance time.
- Optional Stripe Checkout setup flow for securely saving a card without storing card numbers on the website.
- `/client-agreement/complete` confirmation page.
- Supabase-backed private agreement records.
- Stripe webhook that marks an agreement when card setup completes.
- Email notification to Lyn & Lili's and a confirmation email to the client.

## Supabase setup

Run `supabase/client-policy-agreements.sql` in the SQL editor of the Supabase project you want to use.

Then add these Vercel environment variables:

- `SUPABASE_URL` (or `NEXT_PUBLIC_SUPABASE_URL`)
- `SUPABASE_SERVICE_ROLE_KEY`

The service-role key is server-only. Do not expose it with a `NEXT_PUBLIC_` prefix.

## Stripe setup

Add:

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_SITE_URL=https://www.lynandlilistidyhouse.com`

In Stripe Dashboard, create a webhook endpoint pointing to:

`https://www.lynandlilistidyhouse.com/api/stripe/webhook`

Subscribe it to:

- `checkout.session.completed`

The client agreement uses Stripe Checkout in `setup` mode, so the website never sees or stores full card details.

## Email

Existing Resend setup is reused. Optional variables:

- `CLIENT_AGREEMENT_NOTIFY_EMAIL=lynandlilistidyhouse@gmail.com`
- `RESEND_FROM_EMAIL="Lyn and Lilis Website <your verified sending address>"`

If `RESEND_FROM_EMAIL` is omitted, the current website sender fallback is used.

## Sharing with clients

Send clients:

`https://www.lynandlilistidyhouse.com/client-agreement`

They can accept the policies without saving a card, or choose the optional card-on-file flow.

## Deposit handling

This version records the deposit policy and supports a secure card on file, but it does not automatically choose or charge a deposit amount. That is intentional so a client cannot manipulate a deposit value in a public URL. Deposits can be charged/sent separately through Stripe, or a staff-only quote/deposit link generator can be added later.
