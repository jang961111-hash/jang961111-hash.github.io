# AGENTS.md

## Project Overview

This repository is a React 19 + Create React App portfolio site.

The current portfolio direction is:

> AI/SW 기반 문제정의형 서비스 기획자 / PM

The goal is to prepare a stable portfolio for SSAFY Portfolio Week, PDF submission, and job interviews.

## Non-Negotiable Rules

1. Do not migrate this project to Vite, Next.js, or any other framework.
2. Do not add, remove, or upgrade dependencies in `package.json` unless explicitly requested.
3. Do not modify `node_modules`, `build`, or `.git`.
4. Do not run destructive Git commands such as `git reset`, `git clean`, force push, or deploy commands unless explicitly requested.
5. Do not change Git history.
6. Do not change deployment settings without explicit approval.
7. Keep the existing Create React App structure.

## Encoding and Korean Text

1. Be careful not to break Korean text encoding.
2. Pay special attention to:
   - `README.md`
   - `HANDOFF.md`
   - `PROJECT_LOG.md`
   - `src/locales/ko/translation.json`
   - `src/locales/en/translation.json`
   - `src/content/projects.js`
3. If Korean text appears broken, stop and report before rewriting large sections.
4. Keep UTF-8 compatibility.

## Translation Rules

1. If Korean and English translation JSON files exist, keep their structures aligned.
2. Do not update only one language file when the same key exists in both.
3. If a translation is uncertain, leave a clear `TODO` rather than inventing content.
4. Avoid changing translation keys unless necessary.

## Content Rules

1. Project content should be based on facts already present in the repository.
2. Do not invent awards, metrics, roles, dates, links, or technical achievements.
3. If information is uncertain, mark it as `TODO`.
4. Project descriptions should follow this logic:
   - Problem definition
   - My role
   - Technical choices
   - Solution process
   - Result or lesson learned
5. The portfolio should help interviewers understand the candidate within:
   - 5 seconds: identity
   - 30 seconds: key projects
   - 3 minutes: strengths and interview points

## Portfolio Direction

Use this positioning consistently:

> AI/SW 기반 문제정의형 서비스 기획자 / PM

Related themes:
- Problem structuring
- User experience design
- AI/SW technical understanding
- Product planning
- Collaboration and documentation
- SSAFY project-based growth

Avoid mixing too many identity labels such as:
- PM형 개발자
- Technical Product Manager
- Product Manager
- Service Planner

Choose one clear direction and keep wording consistent.

## Main Files to Check

Main home text:
- `src/locales/ko/translation.json`
- `src/locales/en/translation.json`

Project detail data:
- `src/content/projects.js`

Main layout/components:
- `src/App.js`
- `src/components/Navbar`
- `src/components/Hero`
- `src/components/Projects`
- `src/components/Competencies`
- `src/components/Experience`

Styles:
- `src/index.css`
- Section-level CSS files
- Component-level CSS files

Build and validation:
- `npm run build`
- `npm run smoke:build`
- `npm run generate:pdf`

## Workflow Rules

1. Work in small, reviewable steps.
2. Do not perform broad refactoring.
3. Do not edit Hero, Projects, Skills, CSS, and translations all at once.
4. Prefer this order:
   1. `AGENTS.md`
   2. `PORTFOLIO_PLAN.md`
   3. Hero positioning
   4. Core 3 project selection
   5. Project detail structure
   6. Skills/Experience cleanup
   7. UI polish
   8. Build/PDF verification
5. After each change, report:
   - Changed files
   - Summary of changes
   - Validation commands
   - Remaining TODOs

## Local Development

On Windows, the local server may need:

```powershell
$env:HOST="localhost"; npm start
```

The project currently has successful build checks:

```bash
npm run build
npm run smoke:build
```

Future changes should not break this state.

## Git Safety

The main branch may be ahead of origin by several commits.

Do not:

- deploy
- force push
- reset
- clean
- rewrite history
- delete existing work

without explicit user approval.
