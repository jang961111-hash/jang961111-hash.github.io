# 🚀 Project Development Log & Roadmap

**마지막 업데이트:** 2026년 7월 7일 (화) 저녁
**현재 상태:** "AI 서비스 개발자" 재포지셔닝 배포 완료 — 상세 재개 정보는 `HANDOFF.md` 참조

---

## 📋 1. 지금까지의 작업 현황 (Done)

### 🤖 2026-07-07 저녁 세션: AI 서비스 개발자 재포지셔닝 (리서치 기반)
- **채용 리서치**: SK AX는 코딩테스트를 AICT(AI 활용 능력 평가)로 대체·"AI 능력자" 채용, SDS는 생성형 AI+클라우드 중심 → "AI 서비스 개발자" 포지셔닝 확정 (사용자 승인).
- **히어로/메타**: "AI를 서비스로 만드는 사람" / "장병헌 | AI 서비스 개발 · 기획 포트폴리오".
- **AI in Action 섹션 신설**: 4개 사례(문제→AI 활용→결과) + 프로젝트 링크, 내비 "AI 활용" 추가.
- **증거 중심 카피**: 자기선언형 문구를 검증 가능한 사실로 전면 교체, 직함 표기 8개 프로젝트 통일.
- **버그 수정**: 전역 word-break: keep-all, 핵심 역량 카드 제목-본문 붙음 해결.
- **메인 순서**: DailyLog → Promtree → Loggy (AI 활용도 순).

### 🔄 2026-07-07 세션: 브랜치 동기화 및 정리
- **브랜치 동기화**: 배포된 사이트(gh-pages, 5/23 빌드)의 소스인 `portfolio-week-0522` 브랜치를 `main`에 fast-forward 병합. 로컬 코드와 배포본이 일치함 (테스트 11개 통과 확인).
- **플레이스홀더 제거**: GenWing·DailyLog 상세 페이지에서 방문자에게 노출되던 `[IMAGE_PLACEHOLDER]` 텍스트 제거 (`heroImage` 필드 삭제 → 비주얼 블록 미표시). 실제 스크린샷 확보 시 `heroImage: "/projects/<slug>/..."` 형태로 다시 추가하면 됨.
- **sales-crm 검토**: 이력서 기반 추론으로 작성된 내용 확인 결과 구체적 수치·명칭 없이 정성적 서술만 있어 즉시 수정 불필요. 원본 기획서 확보 시 TODO 주석(`src/content/projects.js`) 기준으로 검증할 것.

### 📦 2026-05-22 세션: SSAFY 제출용 재구성 (`portfolio-week-0522`)
- 포트폴리오 구조를 SSAFY 제출 기준으로 재편, 히어로 타이틀을 "AI/SW 기반 문제정의형 서비스 기획자 / PM"으로 변경.
- 6개 프로젝트 전체에 caseStudy(Decision Deep Dive) 작성, 프로젝트 상세 콘텐츠 대폭 확충 (`projects.js` +1,161줄).
- 국문/영문 포트폴리오 PDF 산출물 연결 (`src/assets/docs/`), Promtree 데모 영상·발표자료 추가.

### 🏗️ 아키텍처 및 구조 리팩토링
- **전체 프로젝트 리팩토링**: PM 포지셔닝에 맞게 타이틀 동기화 및 핵심 컴포넌트(`Competencies`, `Projects`) 구조 개선.
- **데이터 구조 고도화**: 프로젝트 성과 지표(Metrics)를 구조화된 데이터(Value/Label)로 전환하여 시각적 임팩트 강화.
- **콘텐츠 심화**: `Loggy` 프로젝트의 의사결정 트레이드오프 케이스 스터디(`Decision Deep Dive`) 추가.
- **출력 최적화**: PDF Resume 내보내기를 위한 `@media print` 스타일 고도화 (Case Study 및 신규 UI 대응).
- **폴더 구조 체계화**: `src/components`를 `layout`과 `sections`로 분리하고, `src/pages` 폴더를 신설하여 유지보수성 향상.
- **섹션 통폐합**: 파편화되어 있던 4개 섹션(전략, 기술, AI, 사고법)을 **'핵심 역량(Competencies)'**이라는 하나의 강력한 섹션으로 통합 (2x2 그리드 레이아웃).
- **네비게이션 최적화**: GNB 메뉴를 8개에서 5개 핵심 메뉴(`소개`, `프로젝트`, `핵심 역량`, `경험`, `연락`)로 압축.

### 🎯 포지셔닝 및 콘텐츠 최적화
- **직무 타이틀 변경**: `Technical Product Manager` → **`Product Manager`** (기술적 이해도를 무기로 가진 기획자로 재정의).
- **히어로 섹션 강화**: 상단 키워드 라벨을 배지 스타일로 변경하여 시각적 강조 및 전문성 부여.
- **다국어 고도화**: 한/영 버전 모두 기획자(PM) 관점에서 전문적인 용어와 자연스러운 문장으로 텍스트 전면 수정.

---

## 🛠️ 2. 개발 컨벤션 (Conventions)

- **컴포넌트 구조**: 
  - 공통 레이아웃은 `src/components/layout`
  - 메인 페이지의 각 섹션은 `src/components/sections`
  - 페이지 단위는 `src/pages`
- **다국어 관리**: 모든 텍스트는 `src/locales/[lang]/translation.json`에서 관리하며, 직접 하드코딩하지 않음.
- **스타일링**: 섹션별 CSS 파일을 컴포넌트와 함께 위치시키며, 전역 변수는 `index.css` 혹은 테마 변수 활용.
- **인덱스 관리**: `SectionShell`의 `index` 프롭을 통해 섹션 순서(`01`, `02`...)를 명확히 관리함.

---

## 💡 3. 주요 인사이트 & 결정 이유 (Rationale)

- **왜 PM인가?**: 신입 레벨에서 TPM은 과도한 기술 압박 면접을 초래할 수 있음. "기술을 아는 PM"이 훨씬 더 공격적이고 유리한 포지션임.
- **왜 섹션을 합쳤는가?**: 평가자는 1~2분 내에 서류를 검토함. 나열된 정보보다 묶여 있는 정보가 지원자의 역량을 "패키지"로 인식하게 만드는 데 효과적임.

---

## 🚀 4. 다음 작업 추천 사항 (Next Steps)

1.  **원격 main 동기화**: 로컬 `main`이 `origin/main`보다 앞서 있으므로 `git push origin main` 실행 (사용자 직접 실행 필요).
2.  **실제 스크린샷 추가**: GenWing(라이브 랜딩/프로필 카드), DailyLog(AI 질문 흐름/대시보드) 스크린샷을 `public/projects/<slug>/`에 넣고 `heroImage` 필드 복원.
3.  **sales-crm 원본 자료 검증**: 원본 기획서 확보 시 '고객 여정 5단계' 명칭과 '정체 구간 알림' 로직 세부 내용 대조 (`projects.js`의 TODO 참고).
4.  **저장소 용량 관리**: `public/projects/promtree/promtree-demo.mp4`(21MB)가 git에 직접 커밋됨. 영상이 더 늘어나면 외부 호스팅(YouTube 등) 전환 고려.
5.  **인터랙티브 요소 추가**: 서비스 로직이나 데이터 흐름을 보여주는 간단한 애니메이션/다이어그램 추가 고려.

---

## 🏃‍♂️ 다시 시작할 때 (Quick Start)
1. `npm start` (또는 네트워크 문제 시 `npm run build` 후 `python -m http.server 3000 --directory build`)
2. 이 `PROJECT_LOG.md` 파일을 먼저 읽고 지난 맥락을 파악할 것.
3. `refactor/structure` 브랜치가 `main`에 병합되었으므로, 새로운 작업은 `main`에서 브랜치를 새로 따서 시작할 것.