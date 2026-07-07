# 📅 작업 재개 가이드 (Hand-off Note)

**마지막 작업 일시:** 2026년 7월 7일 (화) (KST)
**현재 상태:** 로컬 `main` = 배포본 소스 (동기화 완료), 원격 push만 남음

---

## ✅ 직전 작업 요약 (Session Summary)

1. **브랜치 동기화:** 배포된 사이트(gh-pages)가 `portfolio-week-0522` 브랜치에서 빌드된 것을 확인하고, `main`을 해당 브랜치로 fast-forward 병합. 로컬 코드와 배포본이 이제 일치함 (테스트 3 스위트 / 11개 전부 통과).
2. **플레이스홀더 정리:** GenWing·DailyLog 상세 페이지에 노출되던 `[IMAGE_PLACEHOLDER]` 텍스트를 제거 (`src/content/projects.js`의 `heroImage` 필드 삭제). 실제 스크린샷 확보 시 필드를 복원하면 됨.
3. **sales-crm 검토:** 이력서 기반 추론 작성분에 구체적 수치·명칭이 없어 즉시 수정할 부정확 내용은 없음. 원본 기획서 확보 시 검증 필요 (파일 내 TODO 주석 참고).
4. **문서 최신화:** 이 파일과 `PROJECT_LOG.md`를 현재 상태 기준으로 갱신.

---

## 🔍 다음에 작업 재개할 때 (Next Step Guide)

### 1. 가장 먼저 할 일
- [ ] `git push origin main` — 로컬 main이 origin/main보다 앞서 있음. push해야 원격 기록이 배포본과 일치함.

### 2. 남은 과제 (Roadmap)
- [ ] **실제 스크린샷 추가:** GenWing / DailyLog 스크린샷을 `public/projects/<slug>/`에 넣고 `projects.js`의 `heroImage` 필드 복원.
- [ ] **sales-crm 원본 자료 검증:** '고객 여정 5단계' 명칭, '정체 구간 알림' 로직 세부 내용 대조.
- [ ] **재배포:** 콘텐츠 수정분(플레이스홀더 제거 등)이 반영되려면 `npm run deploy` 필요. 현재 배포본은 5/23 빌드 기준.

---

## 🏃‍♂️ 다시 시작하는 법
1. 터미널에서 `npm start` 실행 (`node_modules` 없으면 `npm install` 먼저).
2. `PROJECT_LOG.md` 파일의 최상단을 읽어 전체 맥락 파악.
3. 새 작업은 `main`에서 브랜치를 따서 시작.
