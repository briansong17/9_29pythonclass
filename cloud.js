'use strict';
// 모든 방문자가 같은 테이블을 사용합니다. 인증이나 사용자별 필터는 없습니다.
const database = window.cafeDatabase;
const TABLE = 'shared_bookmarks';
let busy = false;
let cloudReady = false;
let lastCloudError = null;
// 저장 결과를 버튼 바로 아래에도 표시해 스크롤 위치와 관계없이 확인합니다.
function saveFeedback(message) {
  const box = $('storage-warning'); box.textContent = message; box.hidden = !message;
  if(message) $('confirmation').hidden = true;
}
function cloudMessage(message) {
  $('auth-message').textContent = message;
  $('auth-message').hidden = !message;
}
function setBusy(value) {
  busy = value;
  document.querySelectorAll('#bookmark-form button, #account-actions button').forEach(button => button.disabled = value);
}
function fromRow(row) {
  return {id:row.id,title:row.title,guide:row.guide_key,focus:row.focus,weaknesses:row.weaknesses,memo:row.memo,goal:row.goal_count,done:row.done_count,created:row.created_at};
}
function toRow(record) {
  return {id:record.id,title:record.title,guide_key:record.guide,focus:record.focus,weaknesses:record.weaknesses,memo:record.memo,goal_count:record.goal,done_count:record.done,created_at:record.created};
}
function showError(error) {
  cloudReady = false;
  lastCloudError = error;
  $('cloud-status').textContent = '공유 저장소 연결을 확인해주세요.';
  // 서버 오류 코드를 구분하여 필요한 해결 방법을 안내합니다.
  const code = error?.code || '';
  let message;
  if(code === '23514' && error?.message?.includes('guide_key')) {
    message = '대군주가 아직 데이터베이스의 허용 목록에 없습니다. Supabase SQL Editor에서 supabase-add-overlord.sql을 실행한 뒤 다시 저장해주세요. 입력한 내용은 유지됩니다.';
  } else if(['PGRST205','42P01'].includes(code)) {
    message = '공유 테이블이 없습니다. Supabase SQL Editor에서 supabase-setup.sql을 실행해주세요.';
  } else if(code === '42501') {
    message = '공유 기록 접근 권한이 없습니다. supabase-setup.sql의 공개 접근 정책을 적용해주세요.';
  } else if(code === '23514') {
    message = '입력값이 데이터베이스 조건과 맞지 않습니다. 목표 횟수와 입력 길이를 확인해주세요. 오류 코드: 23514';
  } else if(code === 'PGRST116') {
    message = '이 기록은 다른 사용자가 삭제했거나 변경했습니다. 공유 기록을 새로고침해주세요.';
  } else if(error?.message === '기록 형식 오류') {
    message = '저장된 기록의 형식이 현재 교범과 맞지 않습니다. 데이터베이스 열과 교범 코드를 확인해주세요.';
  } else if(error?.message === 'SDK 없음') {
    message = 'Supabase 연결 파일을 읽지 못했습니다. assets/supabase.min.js 파일이 있는지 확인해주세요.';
  } else {
    message = '공유 기록 요청을 완료하지 못했습니다. 연결 상태를 확인하고 다시 시도해주세요.' + (code ? ' 오류 코드: ' + code : '');
  }
  cloudMessage(message);
}
// 많은 기록도 누락하지 않도록 페이지 단위로 읽습니다.
async function fetchCloud() {
  if (!database) throw new Error('SDK 없음');
  const rows = [];
  for (let offset=0;;offset+=1000) {
    const {data,error}=await database.from(TABLE).select('*').order('created_at',{ascending:false}).order('id').range(offset,offset+999);
    if(error)throw error;
    rows.push(...data);
    if(data.length<1000)break;
  }
  const mapped=rows.map(fromRow);
  if(!mapped.every(isRecord))throw new Error('기록 형식 오류');
  records=mapped;cloudReady=true;lastCloudError=null;renderRecords();cloudMessage('');
  $('cloud-status').textContent=`공유 저장소 연결됨 · ${fmt(records.length)}개 기록`;
}
async function refreshShared() {
  if(busy)return;
  setBusy(true);
  try{await fetchCloud();}catch(error){showError(error);}finally{setBusy(false);}
}
// 서버 성공 후에만 화면에 반영합니다. 실패한 입력을 로컬 저장으로 대체하지 않습니다.
async function commitRecord(record,remove=false) {
  if(busy)return false;
  setBusy(true);
  saveFeedback('공유 저장소에 저장 중입니다…');
  try {
    if(!cloudReady) await fetchCloud();
    const query=database.from(TABLE);
    const existing=records.some(item=>item.id===record.id);
    const response=remove
      ? await query.delete().eq('id',record.id).select('id')
      : existing
        ? await query.update(toRow(record)).eq('id',record.id).select('*').single()
        : await query.insert(toRow(record)).select('*').single();
    if(response.error)throw response.error;
    if(remove)records=records.filter(item=>item.id!==record.id);
    else{const saved=fromRow(response.data);const index=records.findIndex(item=>item.id===record.id);if(index<0)records.unshift(saved);else records[index]=saved;}
    renderRecords();cloudMessage('');saveFeedback('');
    $('cloud-status').textContent=`공유 저장소 연결됨 · ${fmt(records.length)}개 기록`;
    return 'cloud';
  }catch(error){showError(error);saveFeedback($('auth-message').textContent);return false;}finally{setBusy(false);}
}
$('cloud-refresh').addEventListener('click',refreshShared);
// 기존 로컬 기록은 사용자가 공유 버튼을 누른 경우에만 공개합니다.
$('import-local').addEventListener('click',async()=>{
  if(busy||!cloudReady)return;
  setBusy(true);
  try{
    const list=JSON.parse(localStorage.getItem(KEY)||'[]');
    const local=Array.isArray(list)?list.filter(isRecord):[];
    if(!local.length){cloudMessage('이 브라우저에 저장된 기록이 없습니다.');return;}
    const mapKey=KEY+'-shared-import';
    const map=JSON.parse(localStorage.getItem(mapKey)||'{}');
    const rows=local.map(record=>toRow({...record,id:map[record.id]||(map[record.id]=crypto.randomUUID())}));
    localStorage.setItem(mapKey,JSON.stringify(map));
    const {error}=await database.from(TABLE).upsert(rows,{onConflict:'id',ignoreDuplicates:true});
    if(error)throw error;
    await fetchCloud();cloudMessage('브라우저 기록을 공동 목록에 공유했습니다.');
  }catch(error){showError(error);}finally{setBusy(false);}
});
refreshShared();
// 화면에 머무는 동안 목록만 갱신하며 작성 중인 폼은 유지합니다.
setInterval(()=>{if(!document.hidden)refreshShared();},15000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)refreshShared();});
