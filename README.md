# Portfolio

React 기반 개인 포트폴리오 사이트입니다. 한국어와 영어 라우트를 모두 제공하고, GitHub Pages에 배포되며, 이력서 PDF도 프로젝트 안에서 직접 생성할 수 있습니다.

## Tech Stack

- React 19
- react-router-dom
- i18next / react-i18next
- Create React App
- GitHub Pages
- Puppeteer

## Quick Start

의존성 설치는 아래 명령을 권장합니다.

```bash
npm install --legacy-peer-deps
```

개발 서버 실행:

```bash
npm start
```

브라우저에서 `http://localhost:3000` 으로 접속합니다.

## Scripts

### `npm start`

개발 서버를 실행합니다.

### `npm run build`

배포용 정적 파일을 `build/` 에 생성합니다.

### `npm run generate:pdf`

프로덕션 빌드를 만든 뒤 임시 로컬 서버를 자동으로 띄워 한국어/영어 이력서 PDF를 생성합니다.

생성 위치:

- `src/assets/docs/resume_ko.pdf`
- `src/assets/docs/resume_en.pdf`

### `npm run deploy`

`build/` 결과물을 `gh-pages` 브랜치로 배포합니다.

## Routes

- `/` : 한국어 포트폴리오
- `/en` : 영어 포트폴리오

## Project Structure

```text
public/                 정적 자산, 메타 태그, manifest
scripts/                PDF 생성 스크립트
src/assets/             이미지와 생성된 PDF
src/components/         실제 사용 중인 UI 컴포넌트
src/hooks/              재사용 훅
src/locales/            ko / en 번역 리소스
src/App.js              라우팅, 메타 태그, 공통 레이아웃 조합
```

## Deployment

GitHub Actions가 `main` 브랜치 푸시를 감지하면 자동으로 빌드 후 `gh-pages` 브랜치에 배포합니다.

워크플로우는 아래 파일에서 관리합니다.

- `.github/workflows/deploy.yml`

## Verification Notes

최근 정리 기준으로 아래 항목을 확인했습니다.

- 데스크톱/모바일 네비게이션 동작
- `/en` 언어 전환
- 다크 테마 토글
- Contact 섹션 CTA 정리
- `npm run build` 성공
- `npm run generate:pdf` 성공

## Notes

- Create React App와 `react-scripts` 조합 특성상 설치 시 `--legacy-peer-deps` 사용을 권장합니다.
- GitHub Pages 사용자 사이트 저장소(`jang961111-hash.github.io`)이므로 루트 경로 기준으로 배포됩니다.
