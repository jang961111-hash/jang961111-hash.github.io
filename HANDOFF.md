# 📅 작업 재개 가이드 (Hand-off Note)

**마지막 작업 일시:** 2026년 7월 13일 (월) (KST)
**현재 상태:** 구조 리팩토링 Step 1~7 완료 · 7커밋 `origin/main` push · gh-pages 라이브 배포 성공 확인. **로컬 = origin = 라이브 3자 동기화.** 작업트리 클린, 열린 PR 없음. 콘텐츠/문구 변화 없음(순수 내부 구조 개선). **프로젝트 11개 · 수상 3회** 유지.
**배포 주소:** https://jang961111-hash.github.io/

---

## 🎯 확정된 전략 (변경 시 반드시 근거와 함께)

- **타깃:** 삼성SDS · SK AX 신입 (1지망 기획/PM, 2지망 SW개발 — "가능성 높은 쪽" 방침)
- **포지셔닝:** "AI를 서비스로 만드는 사람" (AI 서비스 개발 · 기획)
- **근거:** SK AX는 코딩테스트를 AICT(AI 활용 능력 평가)로 대체, "AI 능력자" 채용. SDS는 생성형 AI(Brity/FabriX)+클라우드 중심. 백엔드 전환은 실물 산출물 없이 불가 판정.
- **작업 방식:** 수정 → 테스트(`CI=true npx react-scripts test --watchAll=false`) → `npm run deploy` → 브라우저 검증을 한 사이클로. 큰 변경은 사용자에게 before/after 제시 후 진행.

---

## ✅ 2026-07-13 세션 완료 내역 (구조 리팩토링 Step 1~7 — 콘텐츠 무변화)

**배경:** 코드 구조 리팩토링 계획(총 12스텝)을 세우고 승인 순서대로 하나씩 진행. 원칙: **산출물/문구 변화 0**(순수 내부 구조 개선). 매 스텝 `CI=true npx react-scripts test --watchAll=false`(11/11) + `npm run build` + `npm run smoke:build`(5라우트) 통과 후 개별 커밋.

**완료된 Step 1~7 (각 1커밋):**

| Step | 커밋 | 내용 |
|---|---|---|
| 1 | `a3e3923` | 데드코드 제거 — 미사용 셀렉터 4개(getFeaturedProject·getArchiveProjects·getLocalized{Featured,Archive}Projects) + 미사용 카피 키 8종×ko/en |
| 2 | `cc4c439` | `updateMetaTag` 중복(useTheme.js·pageMetadata.js) → `src/utils/dom.js`로 추출 |
| 3 | `935b8f5` | `Contact.js` 오버라인 번호 `08.` → `06.` (섹션 통폐합 후 남은 스테일 버그) |
| 4 | `9de2367` | `AiCases.js` 수동 경로 조립 → `getProjectPath()` 사용 (+트레일링 슬래시 앱 전체와 통일) |
| 5 | `16d6663` | 이력서 PDF 로직 3중 복제(Hero·Navbar·Contact) → `src/utils/resumeAssets.js`의 `getResumeAsset(lang)`로 통일 |
| 6 | `f90d066` | `i18n.language==="en"?...` 반복 → `src/hooks/useLang.js` 훅으로 통일 (Projects·AiCases) |
| 7 | `a1253b8` | `src/content/projects.js`(1,901줄) → `src/content/projects/` 5개 모듈 분해 |

**Step 7 결과 구조 (반드시 기억):** `src/content/projects/`
- `data.js` — `portfolioProjects` (원본 rename 92%, 한글 데이터 바이트 무손상 검증됨)
- `uiCopy.js` — `projectUiCopy`
- `localize.js` — `localizeValue`(비공개) + `getLocalizedProject`
- `selectors.js` — `coreProjectSlugs`(비공개) + 셀렉터 6종
- `index.js` — 배럴(기존 export 1:1 재노출). 소비자 4곳(AiCases·Projects·ProjectDetailPage·ProjectPage) import 경로 `content/projects`는 디렉터리 index로 그대로 resolve → **변경 없음**.
- ⚠️ **숨은 5번째 소비자 발견·수정**: `scripts/generate_route_aliases.js`가 빌드 타임에 프로젝트 파일을 정규식 파싱해 슬러그 추출 → 경로를 `projects/data.js`로 수정(같은 커밋 포함). **앞으로 프로젝트 데이터 파일 위치를 또 옮기면 이 스크립트도 같이 고쳐야 함.**

**push / 배포:** 7커밋 전부 `git push origin main` 완료(`980b2e6..a1253b8`). push가 `.github/workflows/deploy.yml` 자동 트리거 → build+smoke+gh-pages 배포 **성공 확인**(Actions run 29251531225).

---

## 🔧 리팩토링 로드맵 — 다음 세션은 **Step 8부터** 시작

> 이 파일만 읽고 바로 이어가면 됨. 매 스텝 원칙: 콘텐츠 무변화 · test(11/11)+build+smoke 통과 후 개별 커밋 · 사용자 승인받아 하나씩.

- **Step 8 (다음, 리스크 낮음) — 카피 소스 단일화**: `src/components/sections/Projects.js` 상단의 하드코딩 `featureLabels`(ko/en 객체, 키: challenge·insight·solution·role·highlights·proof)를 `projectUiCopy`(`src/content/projects/uiCopy.js`)로 흡수. 현재 프로젝트 섹션 라벨이 `projectUiCopy` + `Projects.js`의 `featureLabels` + `translation.json` **3곳**에 흩어져 있음. `projectUiCopy`에 이미 유사 키(challenge·insight·solution·role·highlights 등)가 존재하므로 매핑 대조 후 흡수, 중복 제거.
- **Step 9 (리스크 중) — 섹션 레지스트리**: 섹션 순서/번호/nav가 `HomePage` JSX 나열 + `Navbar.navItems` + 각 섹션 컴포넌트 `index` prop **3곳**에 분산. 단일 배열로 묶어 Step 3에서 고친 `08.`류 스테일 재발 방지.
- **Step 10 (리스크 중) — `Experience.js` i18n 정리**: 하드코딩 `descKeys=[1,2,3]` + "번역 키가 그대로 반환되면 없는 것" 문자열 비교 폴백 → `translation.json`에서 desc 배열화. **ko/en 동시 수정**(구조 정렬 유지).
- **Step 11 (리스크 중상) — `Navbar.js`(339줄) 훅 분리**: useScrollSpy / useBodyScrollLock / useMobileMenu로 6개 useEffect 정리. ⚠️ **스크롤 로직은 과거 내비바 배경 버그 이력 있음** → 커밋 후 바로 push 금지, `npm start` 로컬 브라우저 확인 먼저.
- **Step 12 (리스크 상) — CSS 콜로케이션**: `src/components/layout/Section.css`(833줄 캐치올)를 컴포넌트별 CSS로 분리(Projects/About/Experience는 전용 CSS 없음). AGENTS.md도 "CSS는 마지막". ⚠️ **시각 회귀 위험 큼**.

⚠️ **Step 11·12는 리스크 중상~상**: 커밋 후 바로 push하지 말 것. `npm start`(Windows: `$env:HOST="localhost"`)로 **라이트/다크/모바일 로컬 확인** → 이상 없을 때만 push(= gh-pages 자동 배포됨). Step 1~10은 저리스크라 검증 통과 시 바로 push 가능.

**참고:** push하면 main→gh-pages 자동 배포. 검증 안 된 변경을 push하면 라이브에 바로 반영되니 주의. 세션 중 `PROJECT_LOG.md` "다음 작업" #6에 남긴 Contact 이력서 링크 다운로드 방식 불일치(Contact만 새 탭 열기)도 미해결 상태.

---

## ✅ 2026-07-08 3차 세션 완료 내역 (드라이브 발굴 + 타이포)

1. **PR #8** DailyLog Figma 시안 2장 선별 반영(157장 전수 검토). **PR #9** SUPPORTY 자연어 지휘 사례를 AI in Action 5번째 카드로. **PR #10** og-image 리브랜딩(1200×630 크림/브론즈).
2. **PR #11 — EasyExam 11번째 프로젝트**: SSAFY 창업캠프(6/24–26) 창업관심팀 **최우수팀**. 15p 덱 + 본인 단독 수상사진 히어로 + 라이브 noproblem.ssafy.live. At-a-glance·og-image 11/3/7 동기화.
3. **PR #12 — Chronicle 전면 보강**: 언더독팀 개발기획서(11p) 발굴 — 역할 공식 명시('UI/UX Designer & Frontend', Figma 디자인 시스템·RN 서브화면). 캠퍼스 크레도·Phaser.js 서사 반영 + PDF 첨부. Tamna 기획서 PDF docs 연결.
4. **PR #13 — 폰트 버그 수정**: Pretendard·JetBrains Mono가 선언만 되고 로드 안 되던 문제(Windows=맑은고딕) → `public/fonts/` 셀프호스트 woff2 + fonts.css + preload + 헤딩 자간 -0.02em. PDF 재생성.
5. **드라이브 전수 탐색** → `ASSET_WISHLIST.md` 작성(반영 완료/후보/사용자 확보 요청/공개 금지). work_automation_pipeline은 빈 저장소라 미반영 판정. 검토 항목(Loggy mp4·sales-crm) 현행 유지 결론.

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

### 다음 사이클 (Claude 작업 — 바로 시작 가능)
0. [ ] **★ 구조 리팩토링 Step 8부터 계속** ← 이번 세션 이어서. 상세는 위 "🔧 리팩토링 로드맵" 섹션. Step 8 = `Projects.js`의 하드코딩 `featureLabels`를 `projectUiCopy`로 흡수(카피 소스 단일화, 리스크 낮음).
1. [ ] **디자인 시안 2건 제작 → 승인분 적용**: ① 상세 페이지 박스 과밀 완화(일부 섹션 카드 제거, 여백 구분) ② 스크린샷 그리드 비율 통일(프레임 고정 + 원본 링크). before/after 스크린샷으로 제시.
2. [ ] `ASSET_WISHLIST.md`의 사용자 답변 도착분 반영.

### 🔴 사용자 입력 대기 (`ASSET_WISHLIST.md` 상세)
- [ ] 시연영상 3건 정체 확인(화면녹화 2026-02-06 2건, 마지막 브금까지.mp4)
- [ ] SSAFY 졸업반 해커톤 기획서(17.6MB)가 어떤 행사·결과인지
- [ ] AI 미니프로젝트(MCP 서버·MLOps 스택 등) GitHub repo화 여부 결정
- [ ] 구글 포토 현장 사진 → `Desktop/포트폴리오_사진/`에 모아두기
- [ ] 수상 증빙: DailyLog 상장 단독 사진, Oregon UAS 공지 캡처
- [ ] 저장소 공개 전환 4건(loggy_private·loggy_1·tamna-eye-project·final-pjt), `0407`→`promtree` rename
- [ ] DailyLog 수상사진 팀원 얼굴 동의 확인(사진 라이브 중 — 미동의 시 블러 교체)
- [ ] ⚠️ 보안: 드라이브의 신분증·통장사본·증명서 정리, `ai-dev-deployment/.env` API 키 노출 점검
- [ ] AI 위젯: 추후 GPT API로 직접 연동 예정(코드 머지됨·비활성, `workers/ask-portfolio/README.md`)

## 🏃‍♂️ 다시 시작하는 법

1. 컴퓨터 켜고 Claude Code를 이 폴더(`jang961111-hash.github.io`)에서 실행.
2. **"포트폴리오 수정 작업 시작하자"** 라고 입력 — 메모리가 이 파일과 `ASSET_WISHLIST.md`를 기준으로 상태를 복구해 "다음 사이클" 1번부터 이어서 진행.
3. 전부 맡기고 싶으면: **"포트폴리오 수정 작업 시작하자. 진행할 수 있는 만큼 진행하고 점검받을 부분 체크하고 계속 루프 돌려."**
4. (선택) 시작 전에 위 "사용자 입력 대기" 항목 중 답할 수 있는 것을 함께 적어주면 그 사이클부터 처리.
