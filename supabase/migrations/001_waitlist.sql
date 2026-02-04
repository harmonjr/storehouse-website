-- Waitlist table for Storehouse marketing website
-- Run this in your Supabase SQL editor

create table if not exists waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  frustration text,
  source text default 'website',
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table waitlist enable row level security;

-- Allow anonymous users to insert (join waitlist)
create policy "Anyone can join waitlist"
  on waitlist
  for insert
  with check (true);

-- Only authenticated admins can read (for dashboard later)
-- For now, no read policy = no one can read from client
-- Admin access via Supabase dashboard or service role key

-- Create index on email for fast lookups
create index if not exists waitlist_email_idx on waitlist(email);

-- Create index on created_at for sorting
create index if not exists waitlist_created_at_idx on waitlist(created_at desc);
