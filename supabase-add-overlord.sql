-- 대군주 교범을 허용하고 기존 링링 책갈피도 유지합니다.
begin;
alter table public.shared_bookmarks drop constraint if exists shared_bookmarks_guide_key_check;
alter table public.shared_bookmarks add constraint shared_bookmarks_guide_key_check
check (guide_key in ('ling','bane','roach','muta','lurker','ultra','overlord'));
commit;
