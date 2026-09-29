-- Supabase SQL Editor에서 한 번 실행하세요. 기존의 다른 테이블은 변경하지 않습니다.
begin;
create table if not exists public.shared_bookmarks (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(trim(title)) between 1 and 100),
  guide_key text not null check (guide_key in ('ling','bane','roach','muta','lurker','ultra','overlord')),
  focus text not null check (focus in ('threat','response','avoid')),
  weaknesses text[] not null default '{}' check (weaknesses <@ array['병력 밀집','퇴로 미확보','정찰 부족','무리한 추격','탐지 부재']::text[]),
  memo text not null default '' check (char_length(memo) <= 2000),
  goal_count integer not null default 1 check (goal_count between 1 and 10),
  done_count integer not null default 0 check (done_count between 0 and goal_count),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
-- 수정 시각은 데이터베이스에서 자동으로 기록합니다.
create or replace function public.set_bookmark_updated_at() returns trigger
language plpgsql set search_path = '' as $$
begin new.updated_at = now(); return new; end; $$;
drop trigger if exists shared_bookmarks_updated_at on public.shared_bookmarks;
create trigger shared_bookmarks_updated_at before update on public.shared_bookmarks
for each row execute function public.set_bookmark_updated_at();
-- 공동 기록은 로그인하지 않은 방문자도 조회·추가·수정·삭제합니다.
alter table public.shared_bookmarks enable row level security;
grant select, insert, update, delete on public.shared_bookmarks to anon, authenticated;
drop policy if exists "Shared records for everyone" on public.shared_bookmarks;
create policy "Shared records for everyone" on public.shared_bookmarks
for all to anon, authenticated using (true) with check (true);
commit;

-- 대군주 교범을 허용하고 기존 링링 책갈피도 유지합니다.
begin;
alter table public.shared_bookmarks drop constraint if exists shared_bookmarks_guide_key_check;
alter table public.shared_bookmarks add constraint shared_bookmarks_guide_key_check
check (guide_key in ('ling','bane','roach','muta','lurker','ultra','overlord'));
commit;
