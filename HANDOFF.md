# 📅 작업 재개 가이드 (Hand-off Note)

**마지막 작업 일시:** 2026년 7월 8일 (수) 새벽 (KST)
**현재 상태:** PR #1~#4 전부 머지 + 배포 완료. **라이브 = main `5953d9b`.** 프로젝트 9개(SUPPORTY 추가), Loggy 프론트엔드 섹션, PDF 최신 재생성분까지 라이브 반영·검증 완료.
**배포 주소:** https://jang961111-hash.github.io/

---

## 🎯 확정된 전략 (변경 시 반드시 근거와 함께)

- **타깃:** 삼성SDS · SK AX 신입 (1지망 기획/PM, 2지망 SW개발 — "가능성 높은 쪽" 방침)
- **포지셔닝:** "AI를 서비스로 만드는 사람" (AI 서비스 개발 · 기획)
- **근거:** SK AX는 코딩테스트를 AICT(AI 활용 능력 평가)로 대체, "AI 능력자" 채용. SDS는 생성형 AI(Brity/FabriX)+클라우드 중심. 백엔드 전환은 실물 산출물 없이 불가 판정.
- **작업 방식:** 수정 → 테스트(`CI=true npx react-scripts test --watchAll=false`) → `npm run deploy` → 브라우저 검증을 한 사이클로. 큰 변경은 사용자에게 before/after 제시 후 진행.

---

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

### 다음 사이클 (Claude 작업)
1. [x] ~~SUPPORTY/D4D 9번째 프로젝트 추가~~ — PR #3 머지·배포 완료 (Oregon UAS Accelerator 수상 포함).
2. [x] ~~Loggy `loggy_fronted_portfolio.md` 반영~~ — PR #4 머지·배포 완료.
3. [ ] KRAFTON AI 해커톤 추가 — 자산 확인됨: `G:\...\2학기\0328\extracted_handoff\` (MultiplierBoard 리포트 PDF·learning_curve.png·OPUS_HANDOFF.md 먼저 읽기). work_automation_pipeline도 검토.
4. [ ] DailyLog figma_export_1 화면 ~30장 큐레이션 — G:드라이브.
5. [ ] 디자인 개선: 빈 우측 컬럼, 리빌 애니메이션 축소, Contact CTA 액센트, 'Ask my portfolio' AI 위젯.
6. [ ] 검토 항목: SUPPORTY를 AI in Action 카드(자연어 지휘→제어 시퀀스 사례)로 추가 여부, 13MB mp4 외부 호스팅 전환, sales-crm 노출 유지 여부, og-image.png(1200×630) 리브랜딩 여부. (참고: translation.json `awards` 블록은 어떤 컴포넌트도 렌더하지 않는 레거시 — 수상 노출은 각 프로젝트 metrics/highlights로 처리 중)

---

## 🏃‍♂️ 다시 시작하는 법

1. `npm install` (node_modules 없을 때) → `npm start`
2. 이 파일과 `PROJECT_LOG.md` 최상단을 읽고 맥락 파악.
3. Claude에게 "포트폴리오 수정 작업 시작하자"라고 하면 메모리에서 이 상태를 불러와 위 "다음 사이클" 1번부터 이어서 진행.
