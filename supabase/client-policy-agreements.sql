-- Lyn & Lili's Tidy House client policy agreement records
-- Run this once in the Supabase SQL editor for the project you want to use.

create extension if not exists pgcrypto;

create table if not exists public.client_policy_agreements (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  accepted_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text not null,
  service_address text not null,
  service_notes text,
  typed_signature text not null,
  agreed_to_policies boolean not null default false,
  policy_version text not null,
  policy_snapshot jsonb not null,
  card_authorization boolean not null default false,
  card_on_file boolean not null default false,
  card_on_file_at timestamptz,
  stripe_customer_id text,
  stripe_checkout_session_id text,
  stripe_setup_intent_id text,
  client_ip text,
  user_agent text
);

create index if not exists client_policy_agreements_email_idx
  on public.client_policy_agreements (lower(email));

create index if not exists client_policy_agreements_created_at_idx
  on public.client_policy_agreements (created_at desc);

alter table public.client_policy_agreements enable row level security;

-- No browser-facing policies are needed. The website writes through the server
-- with SUPABASE_SERVICE_ROLE_KEY, which bypasses RLS. Keep anon/authenticated
-- clients from directly reading or writing agreement records.
