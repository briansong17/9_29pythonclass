'use strict';
// 브라우저 공개용 키만 사용합니다. 관리자 키는 절대로 이 파일에 넣지 않습니다.
const SUPABASE_URL = 'https://dacqwfthymirpbusfgfw.supabase.co';
const SUPABASE_PUBLIC_KEY = 'sb_publishable_jjKVL0gVeo37Pg6qkpQocw_PiwLsryy';
// SDK를 불러오지 못해도 로컬 교범은 사용할 수 있습니다.
window.cafeDatabase = window.supabase?.createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY, {auth: {persistSession: false, autoRefreshToken: false, detectSessionInUrl: false}}) || null;
