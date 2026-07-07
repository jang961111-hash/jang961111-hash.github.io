# 📅 작업 재개 가이드 (Hand-off Note)

**마지막 작업 일시:** 2026년 7월 8일 (수) 새벽 (KST)
**현재 상태:** PR #1~#7 전부 머지 + 배포 완료. **라이브 = main `dfaa88c`.** 프로젝트 10개(SUPPORTY 수상 포함 + KRAFTON MultiplierBoard), 디자인 리프레시(At-a-glance 카드·리빌 축소·브론즈 CTA), 'Ask my portfolio' AI 위젯 스캐폴드(비활성 — 워커 배포 대기)까지 반영.
**배포 주소:** https://jang961111-hash.github.io/

---

## 🎯 확정된 전략 (변경 시 반드시 근거와 함께)

- **타깃:** 삼성SDS · SK AX 신입 (1지망 기획/PM, 2지망 SW개발 — "가능성 높은 쪽" 방침)
- **포지셔닝:** "AI를 서비스로 만드는 사람" (AI 서비스 개발 · 기획)
- **근거:** SK AX는 코딩테스트를 AICT(AI 활용 능력 평가)로 대체, "AI 능력자" 채용. SDS는 생성형 AI(Brity/FabriX)+클라우드 중심. 백엔드 전환은 실물 산출물 없이 불가 판정.
- **작업 방식:** 수정 → 테스트(`CI=true npx react-scripts test --watchAll=false`) → `npm run deploy` → 브라우저 검증을 한 사이클로. 큰 변경은 사용자에게 before/after 제시 후 진행.

---

## ✅ 2026-07-08 새벽 2차 세션 완료 내역 (KRAFTON + 디자인 + AI 위젯)

1. **PR #5 — KRAFTON MultiplierBoard 10번째 프로젝트** (결과 무표기 — 사용자 확인: 이틀 시험 후 탈락. 리포트 PDF 근거, AI 핸드오프 워크플로우 서사). `.gitattributes` 바이너리 보호 추가.
2. **PR #3 수상 반영**: SUPPORTY — Oregon UAS Accelerator 상 수상·후속 지원 선정(사용자 확인, d4d.tech 쇼케이스 3쪽 1번째). metrics: Award / 1:N / Live.
3. **PR #6 — 디자인 리프레시 (제안 1–3 승인분)**: ① Identity 우측 'At a glance' 카드(10/2/6/SSAFY 14기, sticky) ② 리빌 28px/700ms→12px/380ms + prefers-reduced-motion ③ CTA 브론즈 액센트(`--cta-*` 토큰, 라이트 #8a5f3a AA 대비, 다크 #c2965c+어두운 텍스트).
4. **PR #7 — 'Ask my portfolio' AI 위젯 (제안 4-B)**: Cloudflare Worker 프록시(`workers/ask-portfolio/`, 공식 SDK·opus-4-8·프롬프트 캐싱·레이트리밋) + React 플로팅 위젯(ko/en). **`REACT_APP_ASK_ENDPOINT` 미설정 시 렌더 안 됨** — 활성화 절차는 workers/ask-portfolio/README.md.
5. 배포 3회, 라이브 검증(라우트·번들 문구·PDF 바이트 대조) 각각 완료. 참고: translation.json `awards` 블록은 렌더 안 되는 레거시.

## ✅ 2026-07-08 새벽 세션 완료 내역 (PR #1~#4 머지 + 배포 2회)

1. **PR #1 → #2 순서로 squash 머지 → 배포 1차** — 새 타이틀/설명 반영, 신규 자산 6종 HTTP 200, 스모크 통과.
2. **PR #3: SUPPORTY/D4D 9번째 프로젝트 추가** — D4D APAC 서울 해커톤(2026.07.03–05, 72h, 2인 팀). **Oregon UAS Accelerator 상 수상**(사용자 확인, d4d.tech 쇼케이스 3쪽 1번째 등재) — 액셀러레이터 후속 지원 과정 선정. 콘솔 캡처 히어로 + VTOL/UGV 스크린샷(~540KB, 얼굴 없음), 무거운 자산은 supporty-d4d.github.io 링크. metrics: Award / 1:N / Live.
3. **PR #4: Loggy 프론트엔드 설계 섹션** — `loggy_fronted_portfolio.md` 근거(React 18·TS·Zustand·TanStack Query·STOMP, 서버 기준 단일 소스 트러블슈팅).
4. **배포 2차:** PDF 재생성(수상 반영) → deploy → 라이브 검증(supporty 라우트·자산 200, 라이브 PDF가 최신 생성본과 바이트 일치).
5. PR #2 내용 요약: DailyLog 앱 스크린샷 4장+3등 수상사진 히어로+발표 PPT, Loggy 시연영상+발표 PDF, Tamna 덱, GenWing 배너, '서비스 화면' 그리드 신설, package-lock 동기화.

## ✅ 2026-07-07 심야 세션 완료 내역 (디자인 감사 + 메타 재포지셔닝 + PDF)

1. **CSS 변수 버그 수정:** `--nav-bg`·`--shadow-lg`가 참조만 되고 정의가 없어(정의는 `--nav-blur-bg`로 어긋남) 스크롤 내비바·모바일 메뉴 버튼·맨위로 버튼 배경이 투명으로 떨어지던 버그. `index.css`에서 리네임+정의 추가(라이트/다크).
2. **정적 메타 재포지셔닝:** `public/index.html`(title/description/keywords/og/twitter), `public/manifest.json`, `scripts/smoke_check.js` 기대 타이틀이 전부 옛 포지셔닝("문제정의형 서비스 기획자/PM")이었음 → `src/metadata.js`의 새 문구와 일치시킴. (링크 미리보기·SEO는 정적 HTML을 봄)
3. **PDF 재생성:** `npm run generate:pdf`로 `portfolio_ko/en.pdf` 갱신 — 새 포지셔닝 + 다이어그램 포함.
4. **검증:** 단위 테스트 11개 통과(워크트리에선 `--testMatch "**/src/**/*.{spec,test}.{js,jsx}"` 필요), `npm run smoke:build` 5개 라우트 통과, puppeteer 스크린샷으로 라이트/다크 스크롤 내비바·모바일 드로어·다크 다이어그램 확인.
5. **배포 미실행:** 백그라운드 세션 권한 정책으로 `npm run deploy` 차단됨 — 사용자가 머지 후 직접 실행.

## ✅ 2026-07-07 밤 세션 완료 내역 (다이어그램)

1. **아키텍처 다이어그램 배포:** DailyLog "AI 회고 파이프라인 구조"(음성입력→슬롯 질문 엔진→pgvector→Thompson Sampling), Loggy "의사결정 흐름 구조"(휘발 논의 레인→태그 커밋 필터→PR/Merge→AI 결정문).
2. **구현 방식:** 인라인 SVG React 컴포넌트(`src/components/diagrams/`) + CSS 변수 → 다크 모드·인쇄 자동 대응. `ProjectDetailPage.js`의 `section.diagram` 레지스트리로 렌더, 데이터는 `projects.js` sections에 추가.
3. **검증:** 테스트 11개 통과, 라이트/다크·ko/en·모바일(가로 스크롤) 브라우저 확인, 라이브 배포 후 재검증 완료. 미검증 수치("3 min"/"85%")는 다이어그램에서 제외.

## ✅ 2026-07-07 저녁 세션 완료 내역

1. **브랜치 동기화:** 배포본 소스(`portfolio-week-0522`)를 main에 fast-forward. 로컬=배포본 일치.
2. **증거 중심 카피 교체:** "~증명했습니다" 자기선언 → 검증 가능한 사실(우수상 3등, SenseVoice/Thompson Sampling/pgvector/WebSocket). "이 프로젝트가 증명하는 것" 라벨 → "핵심 기여".
3. **직함 통일:** Service Architect/Product Owner/Planning Lead 등 → "PM · 프론트엔드", "기획 담당" 등으로 8개 프로젝트 통일.
4. **AI 서비스 개발자 재포지셔닝:** 히어로 "AI를 서비스로 만드는 사람", 메타 타이틀 "장병헌 | AI 서비스 개발 · 기획 포트폴리오".
5. **AI in Action 섹션 신설:** 4개 사례(문제→AI 활용→결과), 각 카드에 상세 보기 링크. 내비 "AI 활용" 추가. 섹션 번호 03, 핵심역량 04, 경험 05로 재정렬.
6. **메인 프로젝트 순서:** DailyLog → Promtree → Loggy (AI 활용도 순, `coreProjectSlugs`).
7. **렌더링 버그 수정:** ① 전역 `word-break: keep-all`(한국어 어절 중간 줄바꿈 해결) ② `.competency-keyword/.competency-text` 스타일 누락으로 제목-본문이 붙어 보이던 문제 해결.
8. **플레이스홀더 제거:** GenWing/DailyLog의 `[IMAGE_PLACEHOLDER]` 노출 제거.

---

## 📋 남은 작업 (우선순위 순)

### 🔴 사용자 액션 필요
- [ ] **GitHub 저장소 정리:** loggy_private·loggy_1·tamna-eye-project·final-pjt 공개 전환(final-pjt는 db.sqlite3 개인정보 점검 후), `0407`→`promtree` rename.
- [ ] **수상사진 팀원 얼굴 공개 동의** 확인 (이미 라이브에 올라감 — 동의 못 받으면 즉시 알려주기, 블러 처리로 교체 가능).
- [ ] **실측 자료 찾기:** 팀 규모/기간/사용자 테스트 수치, DailyLog "3 min"·Loggy "85%" 배지 수치 출처, sales-crm 원본 기획서, 전주 ICT·Campus Chronicle 자료.

### 🟡 AI 위젯 — 보류 (사용자 결정: 추후 GPT API로 직접 연동 예정)
- 코드 머지됨·비활성. 연동 시 `workers/ask-portfolio/src/index.js`의 Claude 호출부만 교체하면 됨(위젯↔워커 계약은 `{messages}` → `{reply}` JSON). `REACT_APP_ASK_ENDPOINT` 설정 전까지 렌더 안 됨.

### 다음 사이클 (Claude 작업)
1. [x] ~~DailyLog Figma 큐레이션~~ — 157장 전수 검토, 완성도 높은 2장만 선별 반영(추천 별점 평가·일기 결과, 'Figma 시안' 라벨). PR #8 배포 완료.
2. [x] ~~SUPPORTY AI in Action 카드~~ — 자연어 지휘 사례 5번째 카드 추가. PR #9 배포 완료.
3. [x] ~~og-image 리브랜딩~~ — 기존 640×640 옛 포지셔닝 이미지를 1200×630 크림/브론즈 아이덴티티(히어로 배지+At-a-glance 수치)로 교체. PR #10 배포 완료.

### 검토 항목 결론 (2026-07-08)
- **work_automation_pipeline: 추가하지 않음** — 저장소가 README 1개뿐인 빈 껍데기(설명된 src/·templates/ 부재, "70% 절감" 검증 불가). 실제 코드가 채워지면 재검토.
- **Loggy 13MB mp4: 현행 유지** — `preload="metadata"`라 재생 전엔 다운로드 안 됨. 외부 호스팅 이득 없음.
- **sales-crm: 노출 유지** — 관통 프로젝트·CRM 도메인 폭을 보여주는 항목, 아카이브 하단 위치라 리스크 없음.

---

## 🏃‍♂️ 다시 시작하는 법

1. `npm install` (node_modules 없을 때) → `npm start`
2. 이 파일과 `PROJECT_LOG.md` 최상단을 읽고 맥락 파악.
3. Claude에게 "포트폴리오 수정 작업 시작하자"라고 하면 메모리에서 이 상태를 불러와 위 "다음 사이클" 1번부터 이어서 진행.
