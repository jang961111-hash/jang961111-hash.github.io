# 📅 작업 재개 가이드 (Hand-off Note)

**마지막 작업 일시:** 2026년 7월 7일 (화) 저녁 (KST)
**현재 상태:** "AI 서비스 개발자" 재포지셔닝 배포 완료. 라이브 = 로컬 main (`c38c20b`)
**배포 주소:** https://jang961111-hash.github.io/

---

## 🎯 확정된 전략 (변경 시 반드시 근거와 함께)

- **타깃:** 삼성SDS · SK AX 신입 (1지망 기획/PM, 2지망 SW개발 — "가능성 높은 쪽" 방침)
- **포지셔닝:** "AI를 서비스로 만드는 사람" (AI 서비스 개발 · 기획)
- **근거:** SK AX는 코딩테스트를 AICT(AI 활용 능력 평가)로 대체, "AI 능력자" 채용. SDS는 생성형 AI(Brity/FabriX)+클라우드 중심. 백엔드 전환은 실물 산출물 없이 불가 판정.
- **작업 방식:** 수정 → 테스트(`CI=true npx react-scripts test --watchAll=false`) → `npm run deploy` → 브라우저 검증을 한 사이클로. 큰 변경은 사용자에게 before/after 제시 후 진행.

---

## ✅ 2026-07-07 세션 완료 내역

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
- [ ] **`git push origin main`** — 로컬이 origin/main보다 10커밋 앞섬. Claude는 main 직접 push가 권한 정책으로 차단되므로 사용자가 프롬프트에 `! git push origin main` 입력해 직접 실행.
- [ ] **실측 자료 찾기** (로컬/구글드라이브/다른 컴퓨터): 프로젝트 스크린샷, 팀 규모/기간/사용자 테스트 수치, DailyLog "3 min"·Loggy "85%" 배지 수치의 출처 확인, sales-crm 원본 기획서.

### 다음 사이클 (Claude 작업)
1. [ ] **아키텍처 다이어그램 SVG 제작** (사용자 승인 완료된 증거 보강 ②): DailyLog 파이프라인(음성입력→질문흐름→추천), Loggy 의사결정 흐름(Issue→PR→Merge). 완성본 before/after 제시 후 배포.
2. [ ] **디자인 A to Z 감사:** 다크 모드, 모바일 반응형, 인쇄/PDF 레이아웃 전수 점검.
3. [ ] **PDF 산출물 재생성:** `src/assets/docs/portfolio_ko.pdf`/`_en.pdf`가 재포지셔닝 이전 내용임 — `scripts/generate_pdfs.js`로 갱신 필요.
4. [ ] 자료 도착 시: 실측 수치 반영 + `heroImage` 필드 복원(스크린샷을 `public/projects/<slug>/`에 배치).
5. [ ] 검토 항목: Awards 섹션(항목 1개) 통합 여부, 21MB mp4 외부 호스팅 전환, sales-crm 노출 유지 여부.

---

## 🏃‍♂️ 다시 시작하는 법

1. `npm install` (node_modules 없을 때) → `npm start`
2. 이 파일과 `PROJECT_LOG.md` 최상단을 읽고 맥락 파악.
3. Claude에게 "포트폴리오 수정 작업 시작하자"라고 하면 메모리에서 이 상태를 불러와 위 "다음 사이클" 1번부터 이어서 진행.
