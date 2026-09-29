'use strict';
// 교범 데이터: 숫자 밸런스보다 관찰과 판단의 순서를 설명합니다.
const guides = {
  "ling": {
    "name": "링링(저글링·맹독충) 대응",
    "threat": "저글링은 빠른 근접 유닛이다. 정면에서 맞아주는 동안 옆으로 돌아온 저글링이 퇴로를 막는 식으로 싸운다. 맹독충까지 섞이면 흔히 말하는 ‘링링’ 조합이다. 맹독충은 자폭 범위 공격으로 뭉친 해병을 노린다.",
    "signs": "정면 숫자만 세지 말고 양옆을 본다. 본대가 밖에 나가 있을 때 본진으로 들어오는 저글링도 조심할 것.",
    "steps": [
      "입구와 측면에 시야를 두고 저글링이 퇴로를 감싸는지 확인한다.",
      "붙기 전에 해병을 여러 덩어리로 나눈다.",
      "가까운 맹독충부터 쏘되, 한 기를 찍었다가 전 병력이 앞으로 걸어가지 않게 한다.",
      "뒤로 빼면서 싸울 공간을 남긴다. 저글링에 퇴로가 막히면 먼저 풀어야 한다."
    ],
    "avoid": "해병을 한 점에 모아 후퇴시키는 것. 이동은 했는데 여전히 뭉쳐 있으면 같이 터진다.",
    "rule": "링링 = 저글링 + 맹독충. 이름은 짧은데 막을 때는 손이 바쁘다.",
    "relevant": [
      "병력 밀집",
      "퇴로 미확보",
      "정찰 부족",
      "무리한 추격"
    ],
    "community": "‘링링’이나 ‘더블링’은 저글링과 맹독충 조합을 가리키는 말. PlayXP의 테란 게시판에도 보급고가 깨진 뒤 저글링에 둘러싸였다는 질문이 올라와 있다.",
    "sources": [
      [
        "링링 찌르기 질문 · PlayXP (2013)",
        "https://www.playxp.com/sc2/terran/view.php?article_id=4617545"
      ],
      [
        "저그 용어 · 블리자드",
        "https://news.blizzard.com/en-us/article/47685/in-the-vernacular-learning-the-language-of-starcraft-part-1"
      ],
      [
        "맹독충 사용 질문 · PlayXP (2011)",
        "https://www.playxp.com/sc2/zerg/view.php?article_id=3348944&category=9876"
      ],
      [
        "유닛 별명 모음 · PlayXP (2010)",
        "https://www.playxp.com/sc2/bbs/view.php?article_id=2192960"
      ],
      [
        "저글링에서 맹독충으로 변태 · 블리자드",
        "https://news.blizzard.com/en-us/article/5740264/game-guide-zerg-basics"
      ]
    ]
  },
  "roach": {
    "name": "바퀴·히드라 혼합 병력 대응",
    "threat": "바퀴는 짧은 사거리와 튼튼한 몸을 가진 지상 유닛이다. 뒤에 히드라리스크가 붙는 ‘바드라’에서는 바퀴가 앞에서 버티는 동안 뒤쪽 화력도 계속 들어온다.",
    "signs": "앞줄 바퀴만 보고 들어가지 말고 히드라가 얼마나 붙었는지 확인한다. 한 번 막은 뒤에 오는 추가 병력도 봐야 한다.",
    "steps": [
      "해병만 앞으로 나가지 말고 전차와 불곰 등 지원 병력에 맞춰 싸운다.",
      "히드라를 잡겠다고 바퀴 사이로 걸어 들어가지 않는다.",
      "적 증원이 계속 오면 아군 생산 병력과 합류할 수 있는 쪽으로 물러난다."
    ],
    "avoid": "바퀴가 버티는 동안 뒤쪽 히드라에 계속 맞는 자리에서 싸움을 고집하는 것.",
    "rule": "바드라 = 바퀴 + 히드라. 옛 빌드 글에는 그냥 “바드라 부와아앙”.",
    "relevant": [
      "정찰 부족",
      "퇴로 미확보",
      "무리한 추격"
    ],
    "community": "PlayXP의 2014년 바드라 질문 글에 실제로 나온 표현이다. 병력을 모아 밀어붙이는 느낌을 줄인 댓글이며, 당시 빌드 시간표를 현재 공략으로 옮긴 것은 아니다.",
    "sources": [
      [
        "바드라 빌드 질문 · PlayXP (2014)",
        "https://www.playxp.com/sc2/zerg/view.php?article_id=5118013"
      ],
      [
        "스타2 유닛 목록 · StarCraft Wiki",
        "https://starcraft.fandom.com/wiki/List_of_StarCraft_II_units"
      ]
    ]
  },
  "muta": {
    "name": "뮤탈리스크 기습 대응",
    "threat": "뮤탈리스크는 지상과 공중을 공격하는 비행 유닛이다. 공격이 주변 목표로 튕기고, 지형을 넘어 다니며 일꾼과 빈 방어선을 건드린다.",
    "signs": "한 번 쫓아냈다고 끝난 게 아니다. 빠져나간 방향과 다른 광물 지대가 비었는지 확인한다.",
    "steps": [
      "광물 지대와 생산 시설 쪽에 방어 병력을 남긴다.",
      "해병은 방어 건물과 같이 싸울 수 있는 위치에 둔다.",
      "도망가는 뮤탈을 쫓아 병력 전체가 기지 밖으로 나가지 않게 한다."
    ],
    "avoid": "뮤탈이 보일 때마다 전 병력을 한곳으로 보내는 것. 반대쪽이 다시 비게 된다.",
    "rule": "뮤탈 + 저글링 + 맹독충 = 뮤링링. 뮤탈만 쳐다보다가 링링을 놓치기 쉽다.",
    "relevant": [
      "정찰 부족",
      "무리한 추격",
      "병력 밀집"
    ],
    "community": "스타2 게시판에서 ‘뮤링링’은 기동성과 지속적인 견제를 이야기할 때 등장한다. ‘뮤짤’은 스타1 뮤탈 뭉치기와 함께 쓰인 말이어서, 그 조작법을 그대로 스타2 설명으로 옮기지는 않았다.",
    "sources": [
      [
        "뮤링링 운영 이야기 · PlayXP (2013)",
        "https://www.playxp.com/sc2/zerg/view.php?article_id=4692552&category=9876"
      ],
      [
        "뮤탈리스크 · StarCraft Wiki",
        "https://starcraft.fandom.com/wiki/Mutalisk_(StarCraft_II)"
      ],
      [
        "뮤탈짤짤이 · 우만위키",
        "https://tcatmon.com/wiki/뮤탈뭉치기"
      ]
    ]
  },
  "lurker": {
    "name": "잠복 가시지옥 대응",
    "threat": "가시지옥은 히드라리스크에서 변태하는 지상 유닛이다. 땅에 잠복해서 일직선으로 가시를 쏘므로, 해병이 줄지어 서 있으면 여러 기가 함께 맞는다.",
    "signs": "바닥에서 가시가 올라오면 먼저 멈추고 위치를 확인한다. 탐지가 없으면 잠복한 적을 보통 공격으로 조준할 수 없다.",
    "steps": [
      "스캔이나 밤까마귀로 위치를 먼저 확인한다.",
      "해병을 길게 한 줄로 세우지 말고 전차 등 지원 화력과 같이 움직인다.",
      "탐지가 끝났거나 가시지옥이 여러 겹으로 깔려 있으면 그대로 밀어 넣지 않는다."
    ],
    "avoid": "스캔이 있다고 해병만 정면으로 보내는 것. 보이게 만드는 것과 안전하게 잡는 것은 별개다.",
    "rule": "가시지옥이 여러 겹으로 깔리면 ‘연탄밭’. 이름 그대로 밟고 지나갈 곳은 아니다.",
    "relevant": [
      "탐지 부재",
      "병력 밀집",
      "정찰 부족",
      "퇴로 미확보"
    ],
    "community": "‘연탄밭’은 전작의 럴커 조이기에서 이어진 표현이다. 스타2 가시지옥을 설명하는 글에서도 전작의 연탄밭에 빗대어 쓴다.",
    "sources": [
      [
        "가시지옥 · StarCraft Wiki",
        "https://starcraft.fandom.com/wiki/Lurker_(StarCraft_II)"
      ],
      [
        "가시지옥과 연탄밭 표현 · 우만위키",
        "https://tcatmon.com/wiki/럴커"
      ]
    ]
  },
  "ultra": {
    "name": "울트라리스크(울라리) 대응",
    "threat": "군락 단계에 나오는 커다란 근접 유닛. 체력과 방어력이 높고 칼날로 여러 지상 유닛을 함께 때린다. 해병이 붙어서 싸우면 손해를 보기 쉽다.",
    "signs": "울트라리스크 동굴이 보이면 조합을 바꿀 준비를 한다. 울라리만 보지 말고 같이 들어오는 저글링·맹독충, 뒤쪽 감염충도 확인한다.",
    "steps": [
      "해병만 계속 찍기보다 불곰 등 중장갑에 강한 화력을 섞는다.",
      "붙기 전에 거리를 벌리면서 쏜다. 뒤로 뺄 길에 저글링이 돌아왔는지도 본다.",
      "좁은 곳에서 아군끼리 길이 막히지 않게 배치하고, 지원 병력과 함께 싸운다."
    ],
    "avoid": "체력 많은 해병 한 기처럼 생각하고 정면에서 맞붙는 것. 불곰의 충격탄만 믿고 도망가는 것도 금물이다. 울트라리스크는 이동 속도 감소 효과에 면역이다.",
    "rule": "울트라리스크, 줄여서 울라리. 옛 게시판에는 ‘울레기’와 ‘울느님’이 나란히 있다.",
    "relevant": [
      "병력 밀집",
      "퇴로 미확보",
      "정찰 부족"
    ],
    "community": "‘울라리’는 울트라리스크를 줄여 부르는 인터넷 표현이다. 더 오래된 PlayXP 별명 모음에는 ‘울레기, 울느님’도 함께 올라와 있다. 별명은 커뮤니티 농담이며, 현재 성능 평가와는 별개다.",
    "sources": [
      [
        "울트라리스크 게임 정보 · StarCraft Wiki",
        "https://starcraft.fandom.com/wiki/Ultralisk_(StarCraft_II)"
      ],
      [
        "울라리 뜻 · 오늘의짤방",
        "https://www.jjalbang.today/memedictview/449"
      ],
      [
        "유닛 별명 모음 · PlayXP (2010)",
        "https://www.playxp.com/sc2/bbs/view.php?article_id=2192960"
      ]
    ]
  },
  "overlord": {
    "name": "대군주 정찰 차단",
    "threat": "대군주는 저그의 보급을 담당하면서 공중에서 정찰도 한다. 기지 위에 머물면 생산 시설과 병력 이동을 상대에게 보여준다.",
    "signs": "기지 가장자리와 절벽 주변에 떠 있는 대군주를 확인한다. 내 병력이 나가는 길을 보고 있는지도 살핀다.",
    "steps": [
      "해병 등 공중 공격이 가능한 유닛으로 접근 가능한 대군주를 쫓아낸다.",
      "시야가 없는 높은 지형 위로 숨으면 위치를 먼저 확인한다.",
      "대군주를 쫓느라 입구와 본대의 방어 병력을 전부 빼지 않는다."
    ],
    "avoid": "대군주 한 기를 잡겠다고 병력 전체가 따라가거나, 기지 위에 계속 떠 있게 두는 것.",
    "rule": "대군주는 보급과 정찰을 함께 맡는다. 기지 위에 떠 있으면 내 빌드를 보고 있는 셈이다.",
    "relevant": [
      "정찰 부족",
      "무리한 추격"
    ],
    "community": "블리자드의 저그 정찰 가이드는 초반 대군주를 적 기지 위에 배치해 상대의 움직임을 확인하는 방법을 소개한다. 테란 입장에서는 그 시야를 끊는 것이 대응의 핵심이다.",
    "sources": [
      [
        "대군주 정찰 · 블리자드",
        "https://news.blizzard.com/en-us/article/5838589/game-guide-zerg-scouting"
      ],
      [
        "저그 보급 · 블리자드",
        "https://news.blizzard.com/en-us/article/5740264/game-guide-zerg-basics"
      ]
    ]
  }
};
const focusNames = {threat:'위협 파악',response:'대응 순서',avoid:'피해야 할 행동'};
// 예전 맹독충 책갈피는 링링 교범으로 연결하되 별도 카드는 만들지 않습니다.
Object.defineProperty(guides,'bane',{value:guides.ling,enumerable:false});
const weaknessTips = {'병력 밀집':'병력 사이의 간격과 범위 공격에 겹치는 위치를 점검하세요.','퇴로 미확보':'교전 전에 빠져나갈 길을 한 곳 이상 확인하세요.','정찰 부족':'보이는 적뿐 아니라 측면과 증원 경로도 확인하세요.','무리한 추격':'추격 전에 시야와 지원 범위가 유지되는지 확인하세요.','탐지 부재':'잠복 위협에는 탐지 수단의 위치와 사용 가능 여부를 확인하세요.'};
const $ = id => document.getElementById(id);
const form = $('bookmark-form');
const KEY = 'terran-zerg-bookmarks-v1';
let records = [], editingId = null;
const fmt = value => value.toLocaleString('ko-KR');
// 사용자 입력은 HTML 문자열에 넣지 않고 textContent로 출력합니다.
function element(tag, text, className){const node=document.createElement(tag);if(text!==undefined)node.textContent=text;if(className)node.className=className;return node;}
Object.entries(guides).forEach(([key,guide])=>{const option=element('option',guide.name);option.value=key;$('guide').append(option);});
Object.keys(weaknessTips).forEach((name,index)=>{const label=element('label');const input=document.createElement('input');input.type='checkbox';input.name='weakness';input.value=name;input.id=`weak-${index}`;label.htmlFor=input.id;label.append(input,document.createTextNode(name));$('weaknesses').append(label);});
function state(){return {title:$('title').value.trim(),guide:$('guide').value,focus:form.querySelector('[name="focus"]:checked').value,weaknesses:[...form.querySelectorAll('[name="weakness"]:checked')].map(input=>input.value),goal:Number($('goal').value),memo:$('memo').value.trim()};}
function validGoal(value){return Number.isInteger(value)&&value>=1&&value<=10;}
function renderManual(data){
  const box=$('manual-content');box.replaceChildren();const guide=guides[data.guide];
  if(!guide){box.append(element('p','위에서 저그 위협을 선택하면 대응 교범이 펼쳐집니다.','empty'));return;}
  box.append(element('h3',guide.name));
  [['threat','적의 위협',guide.threat],['signs','관찰할 징후',guide.signs],['response','권장 대응 순서',guide.steps],['avoid','피해야 할 행동',guide.avoid]].forEach(([key,title,body])=>{
    const section=element('div',undefined,'manual-block'+(data.focus===key?' selected':''));section.id=`section-${key}`;section.tabIndex=-1;section.append(element('h4',title));
    if(Array.isArray(body)){const list=element('ol');body.forEach(text=>list.append(element('li',text)));section.append(list);}else section.append(element('p',body));box.append(section);
  });box.append(element('p',guide.rule,'survival')); const note=element('div',undefined,'community-note'); note.append(element('h4','게시판에서 쓰던 말'),element('p',guide.community)); const links=element('div',undefined,'source-links'); guide.sources.forEach(([label,url])=>{const a=element('a',label+' ↗');a.href=url;a.target='_blank';a.rel='noopener noreferrer';links.append(a);});note.append(links);box.append(note);
}
function refresh(){const data=state(),guide=guides[data.guide],valid=validGoal(data.goal);$('goal-error').hidden=valid;$('goal').setAttribute('aria-invalid',String(!valid));
  $('summary-main').textContent=guide?`${guide.name} · ${focusNames[data.focus]}`:'복습할 저그 대응 교범을 선택하세요';
  $('summary-sub').textContent=guide?`취약점 ${fmt(data.weaknesses.length)}개 점검 · ${valid?`목표 ${fmt(data.goal)}회 복습`:'목표 횟수를 확인하세요'}`:'관찰 → 판단 → 대응';
  $('tips').replaceChildren();$('tips').hidden=!data.weaknesses.length;
  data.weaknesses.forEach(name=>$('tips').append(element('p',`${guide?.relevant.includes(name)?'교범 연계':'일반 점검'} · ${weaknessTips[name]}`)));renderManual(data);
}
function storageWarning(message){$('storage-warning').textContent=message;$('storage-warning').hidden=false;}
function persist(){try{localStorage.setItem(KEY,JSON.stringify(records));$('storage-warning').hidden=true;return true;}catch{storageWarning('브라우저 저장에 실패했습니다. 변경 내용은 현재 화면에서만 유지됩니다. 엑셀 파일로 기록을 보관하세요.');return false;}}
// 손상되거나 다른 형식인 데이터는 읽지 않습니다.
function isRecord(r){return r&&typeof r.id==='string'&&typeof r.title==='string'&&r.title.trim()&&Object.hasOwn(guides,r.guide)&&Object.hasOwn(focusNames,r.focus)&&Array.isArray(r.weaknesses)&&r.weaknesses.every(w=>Object.hasOwn(weaknessTips,w))&&validGoal(r.goal)&&Number.isInteger(r.done)&&r.done>=0&&r.done<=r.goal&&typeof r.memo==='string'&&typeof r.created==='string'&&Number.isFinite(Date.parse(r.created));}
// 공동 목록은 cloud.js에서 불러옵니다. 예전 로컬 기록은 공유 버튼으로 가져옵니다.
function renderRecords(){const box=$('bookmarks');box.replaceChildren();$('count').textContent=fmt(records.length);$('export').disabled=!records.length;
  if(!records.length){box.append(element('p','아직 저장한 저그 대응 교범이 없습니다.','empty'));return;}
  records.forEach(r=>{const card=element('article',undefined,'bookmark');card.append(element('h3',r.title),element('p',`${guides[r.guide].name} · ${focusNames[r.focus]}`),element('p',`취약점: ${r.weaknesses.join(', ')||'없음'}`),element('p',`메모: ${r.memo||'없음'}`),element('p',`${r.done===r.goal?'✓ 목표 달성':'복습 진행'} · ${fmt(r.done)} / ${fmt(r.goal)}회`,'progress-text'));
    const progress=document.createElement('progress');progress.max=r.goal;progress.value=r.done;progress.setAttribute('aria-label',`${r.title} 복습 진행`);card.append(progress,element('p',`저장: ${new Date(r.created).toLocaleString('ko-KR')}`));
    const actions=element('div',undefined,'card-actions');[['다시 보기',()=>loadRecord(r)],['복습 완료 +1',async()=>{if(r.done<r.goal)await commitRecord({...r,done:r.done+1});}],['삭제',async()=>{if(await commitRecord(r,true)){if(editingId===r.id)form.reset();}}]].forEach(([name,callback],index)=>{const button=element('button',name,'secondary'+(index===2?' delete':''));button.type='button';button.disabled=index===1&&r.done>=r.goal;button.addEventListener('click',callback);actions.append(button);});card.append(actions);box.append(card);
  });
}
function loadRecord(r){editingId=r.id;$('title').value=r.title;$('guide').value=r.guide==='bane'?'ling':r.guide;$('goal').value=r.goal;$('memo').value=r.memo;form.querySelectorAll('[name="focus"]').forEach(input=>input.checked=input.value===r.focus);form.querySelectorAll('[name="weakness"]').forEach(input=>input.checked=r.weaknesses.includes(input.value));$('save').textContent='책갈피 수정';$('confirmation').hidden=true;refresh();const section=$(`section-${r.focus}`);section.focus({preventScroll:true});section.scrollIntoView({behavior:'smooth',block:'center'});}
form.addEventListener('input',refresh);form.addEventListener('change',refresh);
form.addEventListener('reset',()=>{editingId=null;setTimeout(()=>{$('save').textContent='책갈피 저장';$('confirmation').hidden=true;refresh();},0);});
form.addEventListener('submit',async event=>{event.preventDefault();if(busy)return;const data=state();const error=!data.title?['책갈피 이름을 입력해주세요','title']:!data.guide?['저그 대응 교범을 선택해주세요','guide']:!validGoal(data.goal)?['복습 목표는 1~10 사이의 정수로 입력해주세요','goal']:null;if(error){alert(error[0]);$(error[1]).focus();return;}
  const previous=records.find(r=>r.id===editingId);const record={...data,id:previous?.id||crypto.randomUUID(),done:Math.min(previous?.done||0,data.goal),created:previous?.created||new Date().toISOString()};
  // DB 저장 응답을 기다린 뒤 확인 메시지를 보여줍니다.
  const result=await commitRecord(record);
  if(!result)return;
  editingId=record.id;renderRecords();$('save').textContent='책갈피 수정';$('confirmation').hidden=false;
  const destination=result==='cloud'?'Supabase에 저장':result==='local'?'이 브라우저에 저장':'현재 화면에만 반영';
  $('confirmation').textContent=`‘${data.title}’ 책갈피가 ${destination}되었습니다. ${guides[data.guide].name} · 목표 ${fmt(data.goal)}회 복습.`;
});
// 외부 라이브러리 없이 표준 XLSX(XML + ZIP) 파일을 생성합니다.
// 모든 사용자 문자열은 inlineStr로 저장하여 수식으로 실행되지 않습니다.
function xml(value){return String(value).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\uFFFE\uFFFF]/g,'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');}
function crc32(bytes){let crc=0xffffffff;for(const byte of bytes){crc^=byte;for(let i=0;i<8;i++)crc=(crc>>>1)^((crc&1)?0xedb88320:0);}return (crc^0xffffffff)>>>0;}
function zip(files){const enc=new TextEncoder(),parts=[],central=[];let offset=0,centralSize=0;for(const [name,content]of Object.entries(files)){const filename=enc.encode(name),data=enc.encode(content),crc=crc32(data),header=new Uint8Array(30+filename.length),view=new DataView(header.buffer);view.setUint32(0,0x04034b50,true);view.setUint16(4,20,true);view.setUint16(12,33,true);view.setUint32(14,crc,true);view.setUint32(18,data.length,true);view.setUint32(22,data.length,true);view.setUint16(26,filename.length,true);header.set(filename,30);parts.push(header,data);const dir=new Uint8Array(46+filename.length),dv=new DataView(dir.buffer);dv.setUint32(0,0x02014b50,true);dv.setUint16(4,20,true);dv.setUint16(6,20,true);dv.setUint16(14,33,true);dv.setUint32(16,crc,true);dv.setUint32(20,data.length,true);dv.setUint32(24,data.length,true);dv.setUint16(28,filename.length,true);dv.setUint32(42,offset,true);dir.set(filename,46);central.push(dir);centralSize+=dir.length;offset+=header.length+data.length;}const end=new Uint8Array(22),ev=new DataView(end.buffer);ev.setUint32(0,0x06054b50,true);ev.setUint16(8,central.length,true);ev.setUint16(10,central.length,true);ev.setUint32(12,centralSize,true);ev.setUint32(16,offset,true);return new Blob([...parts,...central,end],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});}
function createWorkbook(){const rows=[['책갈피 이름','대응 교범','중점 항목','취약점','메모','목표 횟수','완료 횟수','상태','저장 일시'],...records.map(r=>[r.title,guides[r.guide].name,focusNames[r.focus],r.weaknesses.join(', ')||'없음',r.memo,r.goal,r.done,r.done===r.goal?'목표 달성':'복습 중',new Date(r.created).toLocaleString('ko-KR')])];const ns='http://schemas.openxmlformats.org/spreadsheetml/2006/main';const sheet=`<?xml version="1.0" encoding="UTF-8"?><worksheet xmlns="${ns}"><sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews><cols><col min="1" max="4" width="28" customWidth="1"/><col min="5" max="5" width="55" customWidth="1"/><col min="6" max="8" width="14" customWidth="1"/><col min="9" max="9" width="28" customWidth="1"/></cols><sheetData>${rows.map((row,i)=>`<row r="${i+1}" ht="${i===0?26:60}" customHeight="1">${row.map((value,j)=>`<c r="${String.fromCharCode(65+j)}${i+1}" s="${i===0?1:2}"${typeof value==='number'?'':' t="inlineStr"'}>${typeof value==='number'?`<v>${value}</v>`:`<is><t xml:space="preserve">${xml(value)}</t></is>`}</c>`).join('')}</row>`).join('')}</sheetData><autoFilter ref="A1:I${rows.length}"/></worksheet>`;
return zip({'[Content_Types].xml':'<?xml version="1.0"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>',
'_rels/.rels':'<?xml version="1.0"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
'xl/workbook.xml':`<?xml version="1.0" encoding="UTF-8"?><workbook xmlns="${ns}" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="대저그 복습 기록" sheetId="1" r:id="rId1"/></sheets></workbook>`,
'xl/_rels/workbook.xml.rels':'<?xml version="1.0"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
'xl/styles.xml':`<?xml version="1.0"?><styleSheet xmlns="${ns}"><fonts count="2"><font><sz val="11"/><name val="Malgun Gothic"/></font><font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Malgun Gothic"/></font></fonts><fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF243F2A"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="1"><border/></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="3"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyAlignment="1"><alignment vertical="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>`,
'xl/worksheets/sheet1.xml':sheet});}
$('export').addEventListener('click',()=>{if(!records.length)return;try{const url=URL.createObjectURL(createWorkbook()),link=document.createElement('a');link.href=url;const date=new Date();link.download=`대저그_복습기록_${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}.xlsx`;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);$('export-status').textContent=`${fmt(records.length)}개 기록의 엑셀 다운로드를 요청했습니다.`;}catch{$('export-status').textContent='엑셀 파일을 만들지 못했습니다. 다시 시도해주세요.';}});
refresh();renderRecords();

// 원본 이미지를 그대로 표시하는 도감과 빠른 탐색 버튼입니다.
const visualCaptions=Object.fromEntries(Object.entries(guides).map(([key,guide])=>[key,guide.name]));
Object.entries(guides).forEach(([key,guide],index)=>{
 const button=element('button',undefined,'guide-card');button.type='button';button.dataset.guide=key;button.setAttribute('aria-pressed','false');
 const art=element('span',undefined,'card-art');art.setAttribute('aria-hidden','true');art.style.backgroundImage=`url("assets/${key==='lurker'?'lurker-v2':key==='roach'?'roach-hydra':key==='ling'?'ling-bane':key}.png")${['lurker','ultra'].includes(key)?', radial-gradient(ellipse at center,#393465 0%,#1c2b36 75%)':''}`;
 const label=element('span',undefined,'card-label');label.append(element('small',`FIELD NOTE / 0${index+1}`),document.createTextNode(guide.name));button.append(art,label);
 button.addEventListener('click',()=>{$('guide').value=key;refresh();$('manual-heading').scrollIntoView({behavior:'smooth',block:'start'});});$('guide-cards').append(button);
});
const originalRenderManual=renderManual;
renderManual=function(data){originalRenderManual(data);document.querySelectorAll('.guide-card').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.guide===data.guide)));const figure=element('figure',undefined,'manual-visual');const img=document.createElement('img');img.src=data.guide?'assets/'+(data.guide==='lurker'?'lurker-v2':data.guide==='roach'?'roach-hydra':data.guide==='ling'?'ling-bane':data.guide)+'.png':'assets/carbot-zerg-cover.png';img.alt=data.guide?guides[data.guide].name+' 캐릭터':'첨부한 카봇 저그 캐릭터 모음';img.width=data.guide?1254:806;img.height=data.guide?1254:416;figure.append(img,element('figcaption',data.guide?visualCaptions[data.guide]:'카봇 저그 도감 · 외모는 귀여워도 대응은 진지하게.'));$('manual-content').prepend(figure);};
$('open-art').addEventListener('click',()=>$('art-dialog').showModal());$('close-art').addEventListener('click',()=>$('art-dialog').close());$('art-dialog').addEventListener('click',event=>{if(event.target===$('art-dialog'))$('art-dialog').close();});
refresh();



// 교범의 생존 수칙을 교관 말풍선과 동기화합니다.
const instructorRenderManual=renderManual;
renderManual=function(data){instructorRenderManual(data);$('instructor-tip').textContent=data.guide?guides[data.guide].rule:'유닛을 골라보세요. 특징, 상대할 때 주의할 점, 게시판에서 쓰던 별명을 모았습니다.';};
refresh();


// 페이지에 들어올 때마다 표시하며 클릭·Enter·Space·Escape로 닫습니다.
const welcomePopup = document.getElementById('welcome-popup');
const welcomeMain = document.querySelector('main');
if (welcomePopup) {
  welcomeMain.inert = true;
  welcomePopup.focus({preventScroll:true});
  function dismissWelcome(event) {
    if (event.type === 'keydown' && !['Enter',' ','Escape'].includes(event.key)) return;
    event.preventDefault();
    event.stopPropagation();
    welcomePopup.hidden = true;
    welcomeMain.inert = false;
    welcomeMain.setAttribute('tabindex','-1');
    welcomeMain.focus({preventScroll:true});
    welcomePopup.removeEventListener('click',dismissWelcome);
    welcomePopup.removeEventListener('keydown',dismissWelcome);
  }
  welcomePopup.addEventListener('click',dismissWelcome);
  welcomePopup.addEventListener('keydown',dismissWelcome);
}
