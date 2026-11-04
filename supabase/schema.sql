-- Run this once in the Supabase dashboard: SQL Editor → New query → paste → Run

-- ACCENT_SUBMISSIONS TABLE
-- one row per donated recording; the audio itself lives in the `accent-recordings` bucket
create table public.accent_submissions (
	id uuid primary key default gen_random_uuid(),
	created_at timestamptz not null default now(),
	place text not null check (char_length(place) <= 100),
	audio_path text not null check (char_length(audio_path) <= 200),
	mime_type text check (char_length(mime_type) <= 100),
	duration_seconds numeric check (duration_seconds between 0 and 120),
	email text check (char_length(email) <= 320),
	race text[] not null default '{}' check (cardinality(race) <= 20),
	age text check (char_length(age) <= 50),
	hometown text check (char_length(hometown) <= 200),
	consent boolean not null check (consent),

	-- for us, while reviewing in the dashboard
	reviewed boolean not null default false,
	notes text
);

-- the public can add rows, but can't read, edit or delete them
alter table public.accent_submissions enable row level security;

create policy "Anyone can submit an accent"
	on public.accent_submissions
	for insert
	to anon
	with check (reviewed = false and notes is null);


-- ACCENT-RECORDINGS BUCKET
-- private, audio only, 2 MB max per file
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('accent-recordings', 'accent-recordings', false, 2097152, array['audio/*']);

-- the public can upload into the bucket, but can't list, download, overwrite or delete
create policy "Anyone can upload an accent recording"
	on storage.objects
	for insert
	to anon
	with check (bucket_id = 'accent-recordings');


-- MIGRATIONS
-- if the table already exists, run these instead of recreating it

-- 2026-11-04: add hometown
alter table public.accent_submissions
	add column if not exists hometown text check (char_length(hometown) <= 200);
