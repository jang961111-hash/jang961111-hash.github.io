# 📅 작업 재개 가이드 (Hand-off Note)

**마지막 작업 일시:** 2026년 7월 8일 (수) 새벽 (KST)
**현재 상태:** PR #1(디자인 감사)·PR #2(실제 자산 연결) 머지 → `npm run deploy` 완료. **라이브 = main `7672407`.** 신규 자산 6종(스크린샷·수상사진·시연영상·발표자료) 라이브 200 확인, 테스트 11개·스모크 5개 라우트 통과, 새 메타 타이틀/설명 라이브 반영 확인.
**배포 주소:** https://jang961111-hash.github.io/

---

## 🎯 확정된 전략 (변경 시 반드시 근거와 함께)

- **타깃:** 삼성SDS · SK AX 신입 (1지망 기획/PM, 2지망 SW개발 — "가능성 높은 쪽" 방침)
- **포지셔닝:** "AI를 서비스로 만드는 사람" (AI 서비스 개발 · 기획)
- **근거:** SK AX는 코딩테스트를 AICT(AI 활용 능력 평가)로 대체, "AI 능력자" 채용. SDS는 생성형 AI(Brity/FabriX)+클라우드 중심. 백엔드 전환은 실물 산출물 없이 불가 판정.
- **작업 방식:** 수정 → 테스트(`CI=true npx react-scripts test --watchAll=false`) → `npm run deploy` → 브라우저 검증을 한 사이클로. 큰 변경은 사용자에게 before/after 제시 후 진행.

---

## ✅ 2026-07-08 새벽 세션 완료 내역 (머지 + 배포)

1. **PR #1 → PR #2 순서로 squash 머지** (파일 충돌 없음, 리베이스 불필요했음).
2. **배포:** `npm run deploy` 실행, 라이브 검증 — 새 타이틀/설명 반영, 신규 자산 6종 HTTP 200, 스모크 체크 통과.
3. PR #2 내용 요약: DailyLog 앱 스크린샷 4장(webp)+3등 수상사진 히어로+발표 PPT, Loggy 시연영상 2:13+발표 PDF, Tamna 제주 해커톤 덱, GenWing 배너, 상세페이지 '서비스 화면' 스크린샷 그리드 컴포넌트 신설, package-lock 동기화.

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
1. [ ] **SUPPORTY/D4D 9번째 프로젝트 추가** — 자산 최다(영상3+PDF+사진13, `C:\Users\SAMSUNG\Desktop\D4D\` + supporty-d4d.github.io repo).
2. [ ] work_automation_pipeline·KRAFTON AI 해커톤 추가 검토.
3. [ ] DailyLog figma_export_1 화면 ~30장 큐레이션, Loggy `loggy_fronted_portfolio.md`(본인 기여) 반영 — G:드라이브 필요.
4. [ ] 디자인 개선: 빈 우측 컬럼, 리빌 애니메이션 축소, Contact CTA 액센트, 'Ask my portfolio' AI 위젯.
5. [ ] 검토 항목: Awards 섹션(항목 1개) 통합 여부, 13MB mp4 외부 호스팅 전환, sales-crm 노출 유지 여부, AI in Action 카드에 다이어그램 연결 여부, og-image.png(1200×630) 리브랜딩 여부.

---

## 🏃‍♂️ 다시 시작하는 법

1. `npm install` (node_modules 없을 때) → `npm start`
2. 이 파일과 `PROJECT_LOG.md` 최상단을 읽고 맥락 파악.
3. Claude에게 "포트폴리오 수정 작업 시작하자"라고 하면 메모리에서 이 상태를 불러와 위 "다음 사이클" 1번부터 이어서 진행.
