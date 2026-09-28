export const portfolioProjects = [
  {
    // 사실 원천: repo-revamp/repos/ops-sentinel/{metrics,fix-verification,fixes,readme-factcheck}.md,
    // 새 README 초안 ~/ops-docs (브랜치 docs/portfolio-readme). 수정 PR #48은 2026-09-28 기준 머지 전.
    // TODO(사용자 확인): PRD·마스터프롬프트의 작성 주체(readme-factcheck 5장 1번) — 역할 문구에 반영 필요 시 수정.
    slug: "ops-sentinel",
    featured: true,
    status: "completed",
    sortDate: "2026-08-09",
    period: {
      ko: "2026.08.08 - 08.09 (약 8시간 15분) · 사후 재측정·수정 2026.09.28",
      en: "Aug 8 - 9, 2026 (about 8h 15m) · Re-measured and fixed Sep 28, 2026",
    },
    category: {
      ko: "SKALA 4기 백엔드 최종 실습 (개인 과제)",
      en: "SKALA Cohort 4 Backend Final Lab (individual)",
    },
    title: {
      ko: "Ops Sentinel | 지표 이상을 규칙엔진으로 판정해 사건·조치·감사로그를 남기는 Spring Boot API",
      en: "Ops Sentinel | A Spring Boot API That Judges Metric Anomalies with a Rule Engine and Records Incidents, Actions, and Audit Logs",
    },
    summary: {
      ko: "가상 인프라 지표가 임계치를 넘으면 규칙엔진이 심각도와 조치를 정하고, 같은 리소스에 사건이 중복으로 생기지 않게 락으로 막으며, 판단을 AOP 감사로그로 남기는 백엔드입니다. LLM(gpt-4o-mini)은 이미 내려진 판단을 1~2문장으로 요약할 뿐 판단에 관여하지 않습니다.",
      en: "A backend where a rule engine sets severity and actions when virtual infrastructure metrics cross thresholds, a lock prevents duplicate incidents for the same resource, and decisions are recorded as AOP audit logs. The LLM (gpt-4o-mini) only summarizes decisions already made in one or two sentences.",
    },
    context: {
      ko: "SKALA(SK AI Leader Academy) 4기 백엔드 최종 실습 개인 과제입니다. 코드는 AI 코딩 에이전트(Claude Code)를 Ralph 루프로 돌려 작성했고(이슈 17개·PR 30개), 커밋은 모두 본인 계정입니다. 2026-09에 제출 당시 README의 수치 주장을 전부 다시 쟀고, 반증된 주장을 공개한 뒤 구조를 고쳤습니다.",
      en: "An individual SKALA (SK AI Leader Academy) Cohort 4 backend final lab. The code was written by an AI coding agent (Claude Code) running in a Ralph loop (17 issues, 30 PRs); all commits are under my account. In September 2026 I had every numeric claim in the original README re-measured, published the claims that turned out false, and then fixed the structure.",
    },
    story: {
      problem: {
        ko: "제출 README는 '모든 판단을 감사로그에 100% 기록', '커넥션 풀 30→60 증설로 해결'이라고 적었습니다. 2026-09 재측정에서 AI 응답 지연 3초를 넣고 같은 리소스에 동시 150건을 보내자 감사로그는 172/450(38.2%)만 남았고, 409로 끝난 요청은 성공·실패 기록이 모두 없었습니다.",
        en: "The submitted README claimed '100% of decisions recorded in the audit log' and 'fixed by growing the connection pool from 30 to 60'. In a September 2026 re-measurement with a 3-second injected AI delay and 150 concurrent requests to the same resource, only 172/450 audit records (38.2%) survived, and requests that ended in 409 left neither a success nor a failure record.",
      },
      insight: {
        ko: "풀 증설은 문턱만 옮겼습니다. 원인은 세 가지로 분리됐습니다: ① 비관적 락 안에서 OpenAI를 호출해 같은 리소스 요청 전체가 AI 지연만큼 직렬화 ② 락 안의 REQUIRES_NEW 감사가 커넥션을 하나 더 빌리다 락 대기자가 풀을 다 쥐면 교착 ③ OSIV가 쥔 커넥션이 락 타임아웃 뒤 폐기됐는데 같은 요청의 재시도·감사가 그 닫힌 커넥션을 재사용.",
        en: "Growing the pool only moved the threshold. The cause split into three: (1) calling OpenAI inside a pessimistic lock serialized every request for that resource by the AI delay; (2) the REQUIRES_NEW audit inside the lock needed a second connection and deadlocked once lock waiters held the whole pool; (3) the connection held by OSIV was discarded after a lock timeout, yet retries and audits in the same request reused that closed connection.",
      },
      solution: {
        ko: "결함마다 재현 테스트를 먼저 커밋해 수정 전 실패를 확인한 뒤 고쳤습니다. AI 요약은 커밋 후 비동기(AFTER_COMMIT + 전용 풀)로 옮기고, OSIV를 끄고, 감사 기록을 트랜잭션 위치에 따라 분기(트랜잭션 안 성공은 같은 트랜잭션, 실패는 롤백 후 기록)했으며, 락 없는 사전 조회(fast path)를 넣었습니다. 그 뒤 풀을 기본값 10으로 되돌려도 버티는지 다시 쟀습니다.",
        en: "For each defect, a reproduction test was committed first and its failure confirmed before the fix. The AI summary moved to after-commit async (AFTER_COMMIT + a dedicated pool), OSIV was turned off, audit recording was split by transaction position (success inside a transaction joins it; failure is recorded after rollback), and a lock-free pre-check (fast path) was added. Then I re-measured whether it holds with the pool back at the default of 10.",
      },
    },
    team: {
      ko: "개인 과제 (커밋 작성자 1명)",
      en: "Individual (single commit author)",
    },
    role: {
      ko: "주제·범위 설정, AI 코딩 에이전트 지시와 검증 구조 설계, 사후 재측정·수정 지시와 검수 (코드 작성은 Claude Code)",
      en: "Topic and scope, directing the AI coding agent and designing its verification, directing and reviewing the re-measurement and fixes (code written by Claude Code)",
    },
    tags: {
      ko: ["Java 21", "Spring Boot 3.3", "JPA + MyBatis", "동시성", "JaCoCo", "GitHub Actions", "AI 코딩 에이전트"],
      en: ["Java 21", "Spring Boot 3.3", "JPA + MyBatis", "Concurrency", "JaCoCo", "GitHub Actions", "AI Coding Agent"],
    },
    highlights: {
      ko: [
        "판단은 결정론 규칙엔진, LLM은 사후 요약만 하도록 경계를 나눴습니다. LLM 결과는 aiSummary 필드에만 들어갑니다.",
        "풀 10·같은 리소스 동시 150건·AI 지연 3초에서 수정 전 201 24건 / 500 372건(p95 30.19s) → 수정 후 201 450/450, 감사 450/450(p95 0.11s). 2026-09 재측정, H2 인메모리·단일 JVM.",
        "같은 리소스 20건·AI 지연 3초에서 p95 3.05s·6.6 rps → 0.05s·381.9 rps (풀 30).",
        "CI(GitHub Actions)를 처음 붙이자 로컬(macOS)에서 안 보이던 버그가 드러났습니다: Linux JVM은 나노초, H2 TIMESTAMP는 마이크로초라 해결 시각 비교가 실패 → 운영 코드에서 마이크로초로 절삭.",
        "독립 리뷰 에이전트가 비동기 요약 덮어쓰기와 rollback-only 커밋의 500을 지적 → 재현 테스트로 실패 확인 후 @DynamicUpdate·재시도 목록 추가로 반영. 테스트 46 → 56, 라인 커버리지 70.0% → 80.0%.",
      ],
      en: [
        "Split the boundary so a deterministic rule engine decides and the LLM only summarizes afterwards; LLM output only goes into the aiSummary field.",
        "Pool 10, 150 concurrent requests to one resource, 3 s AI delay: before, 201 ×24 / 500 ×372 (p95 30.19 s) → after, 201 450/450 and audit 450/450 (p95 0.11 s). Re-measured Sep 2026, H2 in-memory, single JVM.",
        "20 requests to one resource with a 3 s AI delay: p95 3.05 s at 6.6 rps → 0.05 s at 381.9 rps (pool 30).",
        "Adding CI (GitHub Actions) exposed a bug invisible on macOS: Linux JVMs produce nanoseconds while H2 TIMESTAMP stores microseconds, so a resolved-time comparison failed → truncated to microseconds in production code.",
        "An independent review agent flagged async-summary overwrites and a 500 from rollback-only commits → confirmed with reproduction tests, then fixed with @DynamicUpdate and an added retry case. Tests 46 → 56, line coverage 70.0% → 80.0%.",
      ],
    },
    proof: {
      ko: [
        "제출 당시 주장을 스스로 다시 재고, 틀린 주장(감사 100%, 풀 증설로 해결, 타임아웃 3초)을 README에 공개한 뒤 구조로 고쳤습니다.",
        "로그 집계(락 타임아웃 87 = 409 수, 감사 실패 174 = 87×2)로 가설을 검증해 원인 세 가지를 분리했습니다.",
      ],
      en: [
        "Re-measured my own submitted claims, published the false ones (100% audit, fixed by pool growth, 3 s timeout) in the README, and then fixed the structure.",
        "Separated three causes by testing hypotheses against log counts (lock timeouts 87 = number of 409s; audit failures 174 = 87×2).",
      ],
    },
    metrics: [
      {
        value: "450/450",
        label: {
          ko: "감사 기록, 풀 10·동시 150건·AI 지연 3초 (수정 전 500 372건)",
          en: "Audit records, pool 10 · 150 concurrent · 3 s AI delay (500 ×372 before)",
        },
      },
      {
        value: "3.05s → 0.05s",
        label: {
          ko: "p95, 같은 리소스 20건·AI 지연 3초",
          en: "p95, 20 requests to one resource · 3 s AI delay",
        },
      },
      {
        value: "46 → 56",
        label: {
          ko: "테스트 수 (라인 커버리지 70.0% → 80.0%)",
          en: "Tests (line coverage 70.0% → 80.0%)",
        },
      },
    ],
    caseStudy: {
      title: {
        ko: "Decision Deep Dive | 풀을 늘리지 않고 구조를 고쳤다",
        en: "Decision Deep Dive | Fixing the Structure Instead of Growing the Pool",
      },
      summary: {
        ko: "커넥션 풀 증설은 붕괴 문턱을 옮길 뿐이라는 것을 수치로 확인하고, 풀을 기본값 10으로 되돌린 채 동시 150건을 버티게 한 결정",
        en: "Measured that pool growth only moves the collapse threshold, then made 150 concurrent requests hold with the pool back at the default of 10",
      },
      content: {
        ko: "제출 당시에는 동시 요청에서 500이 나자 풀을 30, 60으로 늘렸고 40건 테스트가 통과해 해결됐다고 적었습니다. 재측정해 보니 풀 60도 150건에서 무너졌고(409 91~93건, 감사 38~39%), 키가 없어 AI 지연이 0일 때도 첫 라운드에서 같은 붕괴가 재현됐습니다. 버티는 한계는 대략 '동시 대기 요청 수 < 풀 크기 − 1'이었고, AI 지연은 그 기간을 늘릴 뿐이었습니다. 그래서 락 보유 구간을 조회·생성·조치 기록으로 줄이고 감사가 락 안에서 커넥션을 새로 빌리지 않게 바꾼 뒤, 풀을 10으로 되돌려 다시 쟀습니다. 대가도 적었습니다: 롤백된 트랜잭션의 성공 기록은 남지 않고, 생성 직후 조회하면 폴백 요약이 보이며, 선점 로직은 단일 JVM 기준입니다. PostgreSQL 프로필에서의 부하는 재지 않았습니다.",
        en: "At submission time, 500s under concurrency led to growing the pool to 30 and then 60; a 40-request test passed and the README called it fixed. Re-measurement showed pool 60 also collapsing at 150 requests (409 ×91-93, audit 38-39%), and the same collapse reproduced in the first round even with zero AI delay. The limit was roughly 'concurrent waiters < pool size − 1', and the AI delay only stretched that window. So I narrowed the lock to lookup, create, and action recording, stopped the audit from borrowing a new connection inside the lock, returned the pool to 10, and measured again. The trade-offs are written down too: success records of rolled-back transactions are not kept, a read right after creation shows the fallback summary, and the logic assumes a single JVM. Load on the PostgreSQL profile was not measured.",
      },
    },
    sections: [
      {
        id: "troubleshooting-lock",
        title: {
          ko: "트러블슈팅 1 — 락 안의 AI 호출 (재현 → 원인 → 수정 → 실측)",
          en: "Troubleshooting 1 — AI Call Inside the Lock (reproduce → cause → fix → measure)",
        },
        body: {
          ko: "재현: 가짜 OpenAI(지연 1.5s)로 같은 리소스 10건을 동시에 보내자 10건 전부 1,656~1,670ms가 걸렸습니다. 원인: 조치 결정 메서드 안의 요약 호출이 Resource 비관적 락 보유 구간에 있어, 락을 쥔 1건만 AI를 부르는데도 나머지 대기 요청이 모두 AI 지연만큼 기다렸습니다. 수정: 폴백 문구를 먼저 저장해 커밋하고, 커밋 후 이벤트 리스너가 전용 스레드 풀에서 요약을 만들어 UPDATE합니다. 실측: 테스트 최대 지연 1,670ms → 750ms 미만, 부하(N=20·AI 3초) p95 3.05s → 0.05s, 6.6 → 381.9 rps. 부수 발견: '타임아웃 3초'는 연결·읽기 단계에 각각 걸려 최악 5.86초 동안 락을 쥐었습니다.",
          en: "Reproduce: with a fake OpenAI (1.5 s delay), 10 concurrent requests to one resource all took 1,656-1,670 ms. Cause: the summary call sat inside the Resource pessimistic lock, so although only the lock holder called the AI, every waiter paid the AI delay. Fix: save and commit a fallback text first, then an after-commit event listener builds the summary on a dedicated pool and UPDATEs it. Measured: max test latency 1,670 ms → under 750 ms; under load (N=20, 3 s AI) p95 3.05 s → 0.05 s, 6.6 → 381.9 rps. Side finding: the '3-second timeout' applied separately to connect and read, holding the lock for up to 5.86 s.",
        },
      },
      {
        id: "troubleshooting-audit",
        title: {
          ko: "트러블슈팅 2 — '감사로그 100%'가 거짓이었다 (OSIV가 숨긴 원인)",
          en: "Troubleshooting 2 — The '100% Audit' Claim Was False (the Cause OSIV Hid)",
        },
        body: {
          ko: "재현: 409로 끝난 요청의 FAIL 감사가 0건이었습니다. 처음 가설(락 안 REQUIRES_NEW 교착)은 맞았지만 트랜잭션 밖에서 나는 실패 기록까지 사라지는 이유를 설명하지 못했습니다. 원인 확인: 측정 로그를 집계하니 락 타임아웃은 요청당 한 번(87건 = 409 수)뿐이고, 이후 재시도 261건과 감사 174건(= 87×2)이 모두 이미 닫힌 커넥션으로 실패했습니다. Spring Boot 기본값 open-in-view가 요청 동안 커넥션을 쥐고 있었기 때문입니다. 수정: OSIV 끔 + 감사 기록을 트랜잭션 위치에 따라 분기. 기여 분리: OSIV만 끈 상태에서는 20건이 모두 201이지만 2.14초(락 교착 잔존) → 둘 다 고친 뒤 0.076초. 실측: 풀 60·동시 150건·AI 3초 감사 172/450 → 450/450.",
          en: "Reproduce: requests ending in 409 had zero FAIL audits. The first hypothesis (REQUIRES_NEW deadlock inside the lock) was right but could not explain why failure records written outside the transaction also vanished. Confirming the cause: counting the logs showed one lock timeout per request (87 = number of 409s), after which 261 retries and 174 audits (= 87×2) all failed on an already-closed connection, because Spring Boot's default open-in-view held the connection for the whole request. Fix: turn OSIV off and split audit recording by transaction position. Isolating contributions: with only OSIV off, 20 requests all returned 201 but took 2.14 s (deadlock still present) → 0.076 s after both fixes. Measured: pool 60, 150 concurrent, 3 s AI — audit 172/450 → 450/450.",
        },
      },
      {
        id: "limits",
        title: {
          ko: "AI와 사람의 몫, 그리고 한계",
          en: "Who Did What, and Limits",
        },
        body: {
          ko: "코드는 처음 제출본부터 사후 수정까지 Claude Code가 작성했습니다. 제 몫은 주제·범위 설정(SK AX×대신증권 에이전틱 AIOps 사례를 개인 과제 규모로 축소, 판단/설명 분리), 에이전트 결과를 별도 리뷰 에이전트와 '콜드스타트 채점'(사전지식 없는 에이전트가 제출 zip을 풀어 서버를 띄움)으로 두 번 검증하게 한 구조, 그리고 2026-09 재측정·수정의 지시와 검수입니다. 수정은 PR #48(2026-09-28 기준 리뷰 대기)에 있고 수치는 그 브랜치 기준입니다. 한계: H2 인메모리·단일 JVM 측정이며 PostgreSQL 프로필 부하는 재지 않았습니다. 재시도 backoff 없음, 스케줄러 on/off 불가는 남은 과제입니다.",
          en: "Claude Code wrote the code, from the first submission through the later fixes. My part: setting topic and scope (scaling the SK AX × Daishin Securities agentic AIOps case down to an individual lab, separating judgment from explanation), making the agent's output go through two separate checks (a separate review agent and a 'cold-start grading' where an agent with no prior context unzips the submission and boots the server), and directing and reviewing the September 2026 re-measurement and fixes. The fixes are in PR #48 (awaiting review as of Sep 28, 2026) and the numbers are measured on that branch. Limits: measured on H2 in-memory with a single JVM; load on the PostgreSQL profile was not measured. No retry backoff and no scheduler toggle remain open.",
        },
      },
    ],
    artifacts: {
      ko: ["GitHub 저장소", "수정 PR #48 (재현 테스트·전후 측정)", "트러블슈팅·회고 문서", "측정 스크립트·원본 로그 (레포 밖)"],
      en: ["GitHub repository", "Fix PR #48 (reproduction tests, before/after)", "Troubleshooting & retrospective docs", "Measurement scripts & raw logs (outside the repo)"],
    },
    interviewQuestions: {
      ko: [
        "커넥션 풀을 늘렸는데 왜 해결이 아니었나요? 무엇으로 확인했나요?",
        "OSIV가 감사 기록 유실과 어떻게 연결됐고, 기여도를 어떻게 분리했나요?",
        "AI 에이전트가 쓴 코드를 어떤 방식으로 검증했나요?",
      ],
      en: [
        "Why was growing the connection pool not a fix, and how did you confirm it?",
        "How was OSIV linked to the lost audit records, and how did you isolate its contribution?",
        "How did you verify code written by an AI agent?",
      ],
    },
    heroImage: "/projects/ops-sentinel/concurrency-check.webp",
    screenshots: [
      {
        src: "/projects/ops-sentinel/concurrency-check.webp",
        alt: {
          ko: "제출 당시(2026-08) 동시 10건 중복 생성 방지 확인 캡처 — 이 조건에서는 통과했지만 150건 부하에서는 감사 유실이 있었습니다",
          en: "Capture from submission time (Aug 2026): 10 concurrent requests create exactly one incident — this passed, but audit loss appeared under 150-request load",
        },
      },
    ],
    links: {
      github: "https://github.com/jang961111-hash/ops-sentinel",
      fixPr: "https://github.com/jang961111-hash/ops-sentinel/pull/48",
    },
  },
  {
    // 사실 원천: repo-revamp/repos/rerun-self-healing-workflow/{metrics,fixes,readme-factcheck}.md,
    // 새 README 초안 ~/rerun-docs (브랜치 docs/portfolio-readme). 보완 PR #2는 2026-09-28 기준 머지 전.
    // TODO(사용자 확인): 원티드 AI Championship 2026 실제 제출 여부·결과, 대회 팀 구성 — 확인 전까지 쓰지 않음.
    slug: "rerun",
    featured: true,
    status: "completed",
    sortDate: "2026-09-15",
    period: {
      ko: "2026.09.15 MVP (약 18분) · 사후 실측·보완 2026.09.28",
      en: "MVP Sep 15, 2026 (about 18 min) · Measured and hardened Sep 28, 2026",
    },
    category: {
      ko: "원티드 AI Championship 2026 출품 목적 데모",
      en: "Demo built for Wanted AI Championship 2026",
    },
    title: {
      ko: "RE:RUN | 실패하면 AI가 수정안을 내고, 사람이 승인해야 다시 도는 업무 자동화 데모",
      en: "RE:RUN | When a Workflow Fails, AI Proposes a Fix and It Only Re-runs After a Human Approves",
    },
    summary: {
      ko: "이력서 추출 워크플로우가 데이터 계약(zod) 검증에서 실패하면, 실제 LLM(gpt-4.1-mini)이 원인과 프롬프트 수정안을 내고, 사람이 diff를 보고 승인해야만 실패 단계부터 다시 실행되는 Next.js 데모입니다. 승인 게이트는 서버에서 HMAC 서명으로 강제합니다.",
      en: "A Next.js demo: when a résumé-extraction workflow fails its data contract (zod), a real LLM (gpt-4.1-mini) proposes a root cause and a prompt fix, and the workflow re-runs from the failed step only after a human reviews the diff and approves. The server enforces the approval gate with HMAC signatures.",
    },
    context: {
      ko: "MVP는 AI 코딩 에이전트(Claude Code) 세션 하나로 약 18분 만에 만들었고, 커밋은 모두 본인 계정입니다. 이후 제 일은 그 MVP를 실측하고, 주장과 다른 부분을 찾아 고치는 것이었습니다.",
      en: "The MVP was built by a single AI coding agent (Claude Code) session in about 18 minutes; all commits are under my account. My work afterwards was to measure that MVP, find where it differed from its claims, and fix it.",
    },
    story: {
      problem: {
        ko: "'AI가 스스로 고친다'는 데모는 쉽게 과장됩니다. 실제로 이 데모의 진단 프롬프트에는 '재직 기간으로 현재 시점 기준 연차를 계산하라'는 정답 방향 예시가 들어 있었고, 승인 게이트는 화면에만 있어 서버를 직접 부르면 우회할 수 있었습니다.",
        en: "'AI fixes itself' demos are easy to overstate. In this one, the diagnosis prompt actually contained the answer's direction ('compute years of experience from employment periods as of now'), and the approval gate lived only in the UI, so calling the server directly bypassed it.",
      },
      insight: {
        ko: "힌트의 효과를 말로 주장하지 않고 실험으로 쟀습니다. 성공 기준을 실행 전에 문서로 등록하고, 수정 방향 예시 3줄만 지운 서버와 원본 서버에 같은 입력을 조건당 25회 넣었습니다. 올바른 자가수정은 18/25(72%) → 0/25(0%), Fisher 양측 p<0.0001이었습니다. 힌트가 없을 때 계약을 통과한 6회는 전부 '4년 경력자를 0년'으로 기록했는데 zod 계약은 이를 잡지 못했습니다.",
        en: "Instead of arguing about the hint, I measured it. Success criteria were registered in writing before running; a server with only the three fix-direction example lines removed and the original server got the same input 25 times per condition. Correct self-repair went from 18/25 (72%) to 0/25 (0%), two-sided Fisher p < 0.0001. The six runs that passed the contract without the hint all recorded a four-year candidate as '0 years' — and the zod contract did not catch it.",
      },
      solution: {
        ko: "결과를 README 첫 화면에 그대로 싣고, 이 레포를 '단일 시나리오 자가수정 데모'로 다시 정의했습니다. '계약 통과'와 '값이 맞음'이 다르다는 결과를 사람 승인 게이트를 없애면 안 되는 근거로 썼습니다. 보완 PR에서는 승인 게이트를 HMAC 서명 3단계로 서버에서 강제하고, 진단 입력을 서버 값으로 고정했으며, LLM 엔드포인트에 속도 제한을 두고, 테스트 0개 → 42개와 CI를 붙였습니다.",
        en: "I put the result on the README's first screen and redefined the repo as a 'single-scenario self-repair demo'. The finding that 'passes the contract' and 'the value is right' are different became the argument for keeping the human approval gate. In the hardening PR, the server enforces the gate with three HMAC signature stages, diagnosis inputs are pinned to server-side values, LLM endpoints are rate-limited, and tests went from 0 to 42 with CI added.",
      },
    },
    team: {
      ko: "커밋 작성자 1명 (본인)",
      en: "Single commit author (me)",
    },
    role: {
      ko: "기획 원칙·수용 기준 확정, 실측 설계, 결함 보완 지시와 검수 (MVP·보완 코드 작성은 Claude Code)",
      en: "Product principles and acceptance criteria, measurement design, directing and reviewing fixes (MVP and fix code written by Claude Code)",
    },
    tags: {
      ko: ["Next.js 16", "TypeScript", "OpenAI gpt-4.1-mini", "zod", "Human-in-the-loop", "vitest", "Playwright"],
      en: ["Next.js 16", "TypeScript", "OpenAI gpt-4.1-mini", "zod", "Human-in-the-loop", "vitest", "Playwright"],
    },
    highlights: {
      ko: [
        "코드 작성 전에 CONTRACT.md에 수용 기준 A1~A8과 '승인 게이트 우회 경로가 코드에 있으면 결함'이라는 스코프 가드를 먼저 두게 했습니다.",
        "힌트 제거 실험: 올바른 자가수정 72% → 0% (조건당 n=25, 성공 기준 사전 등록, 2026-09-28 재측정).",
        "느슨한 판정식(!r.ok)이 서버가 없는 빈 포트에서도 '10/10 결정적 실패'를 냈습니다 → HTTP 200 + 오류 문구 + raw null을 모두 보는 엄격 판정으로 바꿔 빈 포트 0/10, 실제 서버 순차 20/20 + 동시 10/10.",
        "승인 게이트를 고친 뒤 독립 리뷰에서 진단 입력 위조라는 2차 우회가 나왔습니다 → 재현 테스트(5 failed)로 확인 후 서버 값 고정으로 통과.",
        "실제 LLM으로 E2E 전체 사이클 5/5 통과, p50 18.4초, 1사이클 약 $0.0045(호출 10회·토큰 약 6.2k, 공개 단가 가정·청구서 미대조).",
      ],
      en: [
        "Before any code, had CONTRACT.md set acceptance criteria A1-A8 and a scope guard: 'any code path that bypasses the approval gate is a defect'.",
        "Hint-removal experiment: correct self-repair 72% → 0% (n=25 per condition, success criteria pre-registered, re-measured Sep 28, 2026).",
        "A loose check (!r.ok) reported '10/10 deterministic failures' even against an empty port with no server → a strict check (HTTP 200 + error text + raw null) gives 0/10 on the empty port and 20/20 sequential + 10/10 concurrent on the real server.",
        "After the approval gate was fixed, an independent review found a second bypass (forged diagnosis input) → confirmed with a reproduction test (5 failed), fixed by pinning server-side values.",
        "Full E2E cycle with the real LLM passed 5/5, p50 18.4 s; about $0.0045 per cycle (10 calls, ~6.2k tokens, assuming list price; not reconciled with the invoice).",
      ],
    },
    proof: {
      ko: [
        "자기 데모에 불리한 결과(72% → 0%)를 사전 등록 실험으로 확인하고 README 첫 화면에 공개했습니다.",
        "'계약을 통과했다'와 '값이 맞다'를 구분해, 사람 승인 게이트를 서버에서 강제하는 근거로 삼았습니다.",
      ],
      en: [
        "Confirmed a result unfavorable to my own demo (72% → 0%) with a pre-registered experiment and published it on the README's first screen.",
        "Separated 'passes the contract' from 'the value is correct' and used it as the reason to enforce human approval on the server.",
      ],
    },
    metrics: [
      {
        value: "72% → 0%",
        label: {
          ko: "힌트 제거 시 올바른 자가수정 (조건당 n=25)",
          en: "Correct self-repair without the hint (n=25 each)",
        },
      },
      {
        value: "0 → 42",
        label: {
          ko: "테스트 수 (보완 PR, CI 통과)",
          en: "Tests (hardening PR, CI passing)",
        },
      },
      {
        value: "5/5",
        label: {
          ko: "실제 LLM E2E 전체 사이클, p50 18.4초",
          en: "Full E2E cycles with a real LLM, p50 18.4 s",
        },
      },
    ],
    caseStudy: {
      title: {
        ko: "Decision Deep Dive | 불리한 실험 결과를 첫 화면에 올린 이유",
        en: "Decision Deep Dive | Why the Unfavorable Result Went on the First Screen",
      },
      summary: {
        ko: "'자가수정 엔진'이라는 주장을 실험으로 좁혀, 데모가 실제로 증명하는 범위만 말하기로 한 결정",
        en: "Narrowing the 'self-healing engine' claim through an experiment, and stating only what the demo actually proves",
      },
      content: {
        ko: "MVP는 A1~A7 수용 기준을 18분 만에 통과했습니다. 하지만 진단 프롬프트에 정답 방향이 들어 있다는 것을 알고 나서는, 이 데모를 범용 자가진단이라고 부를 수 없었습니다. 그래서 성공 기준(재추출이 계약 통과 + 연차 4~5년)을 먼저 문서로 등록하고 힌트 있음·없음 두 조건을 25회씩 돌렸습니다. 힌트가 있어도 6/25는 모델이 '현재 시점'의 연도를 바꿔 써서 틀렸고, temperature 0이어도 수정안 문구는 25회 중 22가지로 달랐습니다. 한계도 그대로 적었습니다: 시나리오는 지원자 한 명뿐이고, HMAC 게이트는 '사람이 눌렀다'를 증명하지 못하며, 속도 제한은 서버리스 인스턴스마다 따로 셉니다.",
        en: "The MVP passed acceptance criteria A1-A7 in 18 minutes. Once I knew the diagnosis prompt contained the answer's direction, I could not call it general self-diagnosis. So I registered the success criterion (re-extraction passes the contract and gives 4-5 years) in writing first and ran both conditions, with and without the hint, 25 times each. Even with the hint, 6/25 were wrong because the model rewrote the 'current' year, and at temperature 0 the fix text still varied 22 ways across 25 runs. The limits are written down too: there is only one scenario candidate, the HMAC gate cannot prove a human clicked, and rate limits are counted per serverless instance.",
      },
    },
    sections: [
      {
        id: "troubleshooting-build",
        title: {
          ko: "트러블슈팅 — 로컬에선 되던 '키 없는 빌드'가 CI에서 실패",
          en: "Troubleshooting — 'Build Without a Key' Worked Locally but Failed in CI",
        },
        body: {
          ko: "재현: CI 첫 실행에서 OpenAI 키 없이 next build가 실패했습니다. 원인: OpenAI 클라이언트를 모듈 최상단에서 만들어 import만으로 키를 요구했는데, 로컬 셸에는 키 환경변수가 남아 있어 착시가 생겼습니다. 수정: 클라이언트를 첫 호출 때 생성하고, env -u로 키를 지운 상태에서 빌드를 다시 검증. 결과: CI 실패 → success. 같은 방식으로 자동 진단에 실제 오류 대신 기본 문구가 전달되던 React stale closure도 E2E 5/5 재현 후 오류를 반환값으로 직접 넘겨 UI 테스트 2/2로 고정했습니다.",
          en: "Reproduce: the first CI run failed next build without an OpenAI key. Cause: the OpenAI client was created at module top level, so importing alone required a key; a leftover key in the local shell hid the problem. Fix: create the client on first call and re-verify the build with the key removed via env -u. Result: CI failure → success. In the same way, a React stale closure that sent a default message instead of the real error to auto-diagnosis was reproduced 5/5 in E2E, then fixed by passing the error as a return value and locked in with UI tests (2/2).",
        },
      },
      {
        id: "limits",
        title: {
          ko: "AI와 사람의 몫, 그리고 한계",
          en: "Who Did What, and Limits",
        },
        body: {
          ko: "MVP와 보완 코드는 Claude Code가 작성했습니다. 제 몫은 기존 프로젝트 재활용안을 접고 'AI는 제안만, 적용은 사람 승인' 원칙을 확정한 것, 수용 기준과 스코프 가드를 먼저 두게 한 것, 엄격 판정식과 힌트 제거 실험을 설계한 것, 결함마다 재현 테스트를 먼저 쓰게 하고 독립 리뷰 지적을 반영하게 한 것입니다. 보완은 PR #2(2026-09-28 기준 리뷰 대기)에 있습니다. 한계: 배포본이 없고, 시나리오는 1건이며, 측정 스크립트는 아직 레포 밖에 있습니다.",
          en: "Claude Code wrote the MVP and the fixes. My part: dropping the idea of reusing an older project and fixing the principle 'AI only proposes; applying needs human approval', having acceptance criteria and a scope guard set first, designing the strict check and the hint-removal experiment, and requiring a reproduction test before each fix plus applying the independent review's findings. The fixes are in PR #2 (awaiting review as of Sep 28, 2026). Limits: no deployment, a single scenario, and the measurement scripts still live outside the repo.",
        },
      },
    ],
    artifacts: {
      ko: ["GitHub 저장소", "보완 PR #2 (재현 테스트·CI)", "힌트 제거 실험 결과표", "E2E 증빙 스크린샷 7장"],
      en: ["GitHub repository", "Hardening PR #2 (reproduction tests, CI)", "Hint-removal experiment table", "Seven E2E evidence screenshots"],
    },
    interviewQuestions: {
      ko: [
        "힌트 제거 실험의 성공 기준을 왜 먼저 등록했고, 결과를 어떻게 해석했나요?",
        "'계약 통과'와 '값이 맞음'이 다르다는 걸 설계에 어떻게 반영했나요?",
        "승인 게이트를 서버에서 강제한 방식과 그 한계는 무엇인가요?",
      ],
      en: [
        "Why register the success criteria first, and how did you interpret the result?",
        "How did 'passes the contract' vs. 'is correct' change the design?",
        "How does the server enforce the approval gate, and what are its limits?",
      ],
    },
    heroImage: "/projects/rerun/failure-diagnosis.webp",
    screenshots: [
      {
        src: "/projects/rerun/failure-diagnosis.webp",
        alt: {
          ko: "지원자 4 추출이 계약 검증에서 실패한 뒤 AI 자가진단 결과가 나온 화면 (데모 데이터는 가명)",
          en: "After candidate 4 fails the contract check, the AI self-diagnosis appears (demo data is fictional)",
        },
      },
      {
        src: "/projects/rerun/approval-gate.webp",
        alt: {
          ko: "사람 승인 게이트 — 현재 프롬프트와 AI 수정안 diff, 승인·반려 버튼",
          en: "Human approval gate — diff between the current prompt and the AI fix, with approve and reject",
        },
      },
      {
        src: "/projects/rerun/audit-log.webp",
        alt: {
          ko: "재실행 후 리포트와 사람·AI·시스템 행위를 구분한 감사 로그",
          en: "Report after re-run and an audit log separating human, AI, and system actions",
        },
      },
    ],
    links: {
      github: "https://github.com/jang961111-hash/rerun-self-healing-workflow",
      fixPr: "https://github.com/jang961111-hash/rerun-self-healing-workflow/pull/2",
    },
  },
  {
    slug: "argus",
    featured: true,
    status: "completed",
    sortDate: "2026-09-04",
    period: {
      ko: "2026.09.02 - 09.04 (3일)",
      en: "Sep 2 - 4, 2026 (3 days)",
    },
    category: {
      ko: "SKALA 4기 미니 프로젝트 / AI 웹 서비스 설계",
      en: "SKALA Cohort 4 Mini-project / AI Web Service Design",
    },
    title: {
      ko: "ARGUS | 반도체 fab 부품 교체 승인을 돕는 온프레미스 AI 에이전트",
      en: "ARGUS | An On-Premise AI Agent for Semiconductor Fab Part-Replacement Approval",
    },
    summary: {
      ko: "반도체 fab 설비의 부품 교체 요청이 들어오면 AI 에이전트가 규격·호환, 법령·조문, 안전서류를 검토해 근거를 붙이고, 승인 여부는 안전관리자가 결정하는 온프레미스 승인 워크플로우 서비스입니다.",
      en: "An on-premise approval workflow for semiconductor fab part replacements: AI agents review spec compatibility, applicable regulations, and safety documents and attach the evidence, while the safety manager makes the approval decision.",
    },
    context: {
      ko: "SKALA(SK AI Leader Academy) 4기 AI 웹 서비스 설계 미니 프로젝트로, 5인 팀이 3일 동안 기획·설계·구현·발표까지 진행했습니다(공식 순위·수상 없음). 외부 클라우드 LLM을 쓸 수 없는 협력사 환경을 전제로 설계했습니다. 레포는 두 개입니다: 팀 공식 레포(Taeyum/skala-fixguide, Spring Boot)와, 팀 협업과 병렬로 제가 Claude 에이전트 트랙을 돌려 FastAPI + Vue 3로 다시 만든 백업·보완용 개인 재구현(skala-argus)입니다.",
      en: "A SKALA (SK AI Leader Academy) Cohort 4 mini-project in AI web service design: a five-person team went from planning to design, implementation, and presentation in three days (no official ranking or award), assuming partner-company sites that cannot use external cloud LLMs. There are two repositories: the team's official repo (Taeyum/skala-fixguide, Spring Boot) and my personal re-implementation in FastAPI + Vue 3 (skala-argus), built in parallel with the team by running Claude agent tracks as a backup and complement.",
    },
    story: {
      problem: {
        ko: "부품의 실제 교체는 2시간이면 끝나는데, 승인이 훨씬 오래 걸렸습니다. 규격 확인·법령 조사·안전 승인에 필요한 정보가 여러 곳에 흩어져 있었고, 대상 협력사는 보안상 외부 클라우드 LLM을 쓸 수 없었습니다.",
        en: "The physical part swap takes about two hours, but approval takes far longer. The information needed for spec checks, regulatory review, and safety sign-off is scattered across sources, and the target partner companies cannot use external cloud LLMs for security reasons.",
      },
      insight: {
        ko: "SK하이닉스 설비 담당자를 현장 인터뷰한 결과 처음 세운 두 가설이 기각되었고, 그 결과를 반영해 API 설계를 다시 잡았습니다. 설계 원칙은 '증명은 에이전트가, 판단은 사람이'로 정했습니다 — 에이전트는 근거를 모으고, 승인·거절은 안전관리자가 합니다.",
        en: "A field interview with an SK hynix equipment engineer rejected our first two hypotheses, and we redesigned the API around what we learned. The guiding principle became 'agents prove, people decide' — agents gather evidence; the safety manager approves or rejects.",
      },
      solution: {
        ko: "엔지니어가 교체 요청을 등록하면 역할별 AI 에이전트(규격·호환 / 법령·조문 / 안전서류)가 검토 결과를 만들고, 화면은 서버가 지정한 간격으로 진행 상태를 폴링해 보여줍니다. 안전관리자는 AI 결과물을 읽기 전용으로 확인한 뒤 승인 또는 거절(사유 포함)을 결정합니다. AI 공급자 설정은 기본값이 Mock·외부 전송 차단(egress_allowed=false)이며, 외부 전송이 꺼진 상태에서 외부 AI 공급자를 지정하면 서버가 기동을 거부하도록 했습니다. 개인 재구현(main)의 에이전트 3종은 아직 고정 응답(Mock)이고, 법령 에이전트의 실제 LLM 구현은 별도 브랜치에서 진행 중입니다.",
        en: "An engineer files a replacement request; role-specific AI agents (spec & compatibility / regulations / safety documents) produce review results while the UI polls progress at a server-specified interval. The safety manager reviews the AI output read-only, then approves or rejects with a reason. The AI provider config defaults to Mock with external egress disabled (egress_allowed=false), and the server refuses to start if an external AI provider is configured while egress is off. In the personal re-implementation (main), all three agents still return fixed responses (Mock); a real LLM for the regulations agent is in progress on a separate branch.",
      },
    },
    team: {
      ko: "5인 팀 (SKALA 4기, 팀장 은태현) · 개인 재구현은 커밋 작성자 1명(본인)",
      en: "Five-person team (SKALA Cohort 4, with a separate team lead) · personal re-implementation by a single commit author (me)",
    },
    role: {
      ko: "팀: 백엔드(Spring Boot) · 최종 발표 · 팀장-팀원 가교 | 개인 재구현: 계약 기반 에이전트 트랙 지휘·검수·통합 (코드 작성은 Claude 에이전트)",
      en: "Team: backend (Spring Boot), final presentation, bridge between lead and members | Personal re-implementation: directing, reviewing, and integrating contract-driven agent tracks (code written by Claude agents)",
    },
    tags: {
      ko: ["AI 에이전트", "온프레미스", "Human-in-the-loop", "FastAPI", "Vue 3"],
      en: ["AI Agents", "On-Premise", "Human-in-the-loop", "FastAPI", "Vue 3"],
    },
    highlights: {
      ko: [
        "SK하이닉스 설비 담당자 현장 인터뷰로 두 가설이 기각된 뒤, API 설계를 다시 잡았습니다.",
        "'증명은 에이전트가, 판단은 사람이' 원칙으로 AI 검토 결과는 근거로만 쓰고 승인·거절은 안전관리자가 하도록 설계했습니다.",
        "외부 전송 차단을 기본값으로 두고, 외부 AI 공급자는 명시적으로 허용해야만 기동되도록 해 온프레미스 전제를 코드로 강제했습니다.",
        "OpenAPI 명세, DBML 8개 테이블, 41장 발표자료로 설계부터 발표까지 3일 안에 정리했습니다.",
        "개인 재구현 사후 점검(2026-09)에서 하루 1,001번째 요청부터 등록이 전부 500이 되는 채번 버그를 찾았습니다: 요청번호 최댓값을 문자열로 비교해 '…-999'를 '…-1000'보다 크다고 판단(750건 추가 등록 시 500 ×32). 길이 우선 정렬로 고치고 경계 회귀 테스트를 추가했습니다(수정 PR #1).",
        "기각된 가설은 발표자료에서 지우지 않고 의도적으로 남겼고, 승인 시간 단축 같은 효과 수치는 실측이 없어 적지 않았습니다.",
      ],
      en: [
        "After a field interview with an SK hynix equipment engineer rejected two hypotheses, we redesigned the API.",
        "Under 'agents prove, people decide', AI review output serves only as evidence; approval and rejection stay with the safety manager.",
        "Made egress-off the default and required explicit permission before any external AI provider can start — enforcing the on-premise premise in code.",
        "Delivered an OpenAPI spec, an 8-table DBML schema, and a 41-slide deck within three days.",
        "A post-hoc check of the personal re-implementation (Sep 2026) found that every registration failed with 500 from the 1,001st request of a day: the max request number was compared as a string, so '…-999' ranked above '…-1000' (500 ×32 when adding 750 requests). Fixed with length-first ordering plus a boundary regression test (fix PR #1).",
        "Kept the rejected hypotheses in the deck on purpose, and left out effect numbers such as approval-time reduction because they were never measured.",
      ],
    },
    proof: {
      ko: [
        "현장 인터뷰로 가설을 검증하고, 틀린 가설을 설계 변경의 근거로 남기는 방식으로 문제를 정의했습니다.",
        "AI의 역할(근거 수집)과 사람의 역할(판단)을 나누는 경계를 제품 구조와 설정값으로 설계했습니다.",
        "측정하지 않은 효과는 주장하지 않는다는 원칙으로 결과를 보고했습니다.",
      ],
      en: [
        "Defined the problem by testing hypotheses in the field and keeping the wrong ones as the rationale for design changes.",
        "Designed the boundary between AI (evidence gathering) and people (judgment) into both the product flow and its configuration.",
        "Reported results on the principle of never claiming an effect that was not measured.",
      ],
    },
    metrics: [
      {
        value: "On-prem",
        label: {
          ko: "외부 전송 차단 기본값 (egress_allowed=false)",
          en: "Egress disabled by default (egress_allowed=false)",
        },
      },
      {
        value: "72 / 0",
        label: {
          ko: "개인 재구현 라이브 E2E 통과 / 실패 (3회 연속, 2026-09 재측정)",
          en: "Personal re-implementation live E2E passed / failed (3 runs in a row, re-measured Sep 2026)",
        },
      },
      {
        value: "94%",
        label: {
          ko: "개인 재구현 백엔드 라인 커버리지 (pytest 30개, 2026-09 재측정)",
          en: "Personal re-implementation backend line coverage (30 pytest tests, re-measured Sep 2026)",
        },
      },
    ],
    caseStudy: {
      title: {
        ko: "Decision Deep Dive | 증명은 에이전트가, 판단은 사람이",
        en: "Decision Deep Dive | Agents Prove, People Decide",
      },
      summary: {
        ko: "안전 승인처럼 책임이 따르는 결정에서 AI는 근거를 모으는 역할에 두고, 판단은 사람에게 남긴 설계",
        en: "For accountable decisions like safety approval, AI gathers evidence and the judgment stays with people",
      },
      content: {
        ko: "부품 교체 승인은 사고가 나면 책임이 따르는 결정입니다. 그래서 AI가 승인까지 대신하는 구조 대신, 규격·법령·안전서류 검토 결과를 근거로 정리해 넘기고 안전관리자가 그 근거를 읽고 승인하거나 사유를 적어 거절하는 구조를 택했습니다. 이 방향은 SK하이닉스 설비 담당자를 현장 인터뷰하며 처음 세운 두 가설이 기각된 뒤에 잡혔고, 기각된 가설은 발표자료에서 지우지 않고 남겼습니다. 외부 클라우드 LLM을 쓸 수 없는 협력사가 대상이었기 때문에, 외부 전송 차단을 기본값으로 두고 외부 AI 공급자는 명시적으로 허용해야만 기동되도록 설정 단계에서 막았습니다. 승인 시간 단축 같은 효과 수치는 실측이 없어 적지 않았습니다.",
        en: "Approving a part replacement is a decision someone is accountable for if something goes wrong. Instead of letting AI approve, we had it package spec, regulatory, and safety-document review results as evidence; the safety manager reads that evidence and approves, or rejects with a reason. This direction emerged after a field interview with an SK hynix equipment engineer rejected our first two hypotheses — and we kept those rejected hypotheses in the deck. Because the target partner companies cannot use external cloud LLMs, egress is off by default and any external AI provider must be explicitly allowed before the server will start. We did not report effect numbers such as approval-time reduction, because they were never measured.",
      },
    },
    sections: [
      {
        id: "architecture",
        title: {
          ko: "시스템 구조",
          en: "System Architecture",
        },
        body: {
          ko: "Vue 3 + Vite 프론트엔드와 FastAPI(Python) 백엔드가 REST JSON으로 통신하고, 데이터는 PostgreSQL(Supabase)을 전제로 로컬에서는 SQLite로 검증했습니다. 에이전트는 공통 인터페이스 뒤에 두어 3일 범위에서는 고정 응답(Mock) 구현으로 흐름을 검증하고, 이후 LLM 구현체로 교체할 수 있게 설계했습니다. 엔지니어와 안전관리자 역할에 따라 화면과 권한을 나눴습니다.",
          en: "A Vue 3 + Vite frontend talks to a FastAPI (Python) backend over REST JSON; data targets PostgreSQL (Supabase) and was verified locally on SQLite. Agents sit behind a common interface — within the three-day scope, fixed-response (Mock) implementations validated the flow, with LLM implementations swappable later. Screens and permissions are split by role: engineer and safety manager.",
        },
      },
      {
        id: "two-repos",
        title: {
          ko: "두 개의 레포 — 팀 공식 산출물과 개인 재구현",
          en: "Two Repositories — Team Deliverable and Personal Re-implementation",
        },
        body: {
          ko: "팀 공식 레포(Taeyum/skala-fixguide)는 Spring Boot 백엔드이고, 저는 그중 프로젝트 골격, JWT 로그인·내 정보 API, 공통 에러 포맷, 역할별 요청 목록·대시보드 API, 시드 데이터, 통합 테스트, 회원가입·Redis 로그아웃 블랙리스트 등 커밋 11개를 남겼습니다. 개인 레포(skala-argus)는 팀 작업과 동시에 단일 계약서(CONTRACT.md v3.0)를 기준으로 기획·API·DB·백엔드·프론트 트랙을 Claude 에이전트에 나눠 맡기고, 제가 지시·검수·통합한 1일 병렬 스프린트의 결과입니다. 문서 속 '은태현 담당' 같은 표기는 팀 R&R을 에이전트 트랙에 매핑한 것이지 실제 팀원이 이 레포를 작성했다는 뜻이 아닙니다.",
          en: "The team's official repo (Taeyum/skala-fixguide) is a Spring Boot backend; my 11 commits there cover the project scaffold, JWT login and 'me' APIs, the common error format, role-scoped request list and dashboard APIs, seed data, integration tests, and sign-up with a Redis-backed logout blacklist. The personal repo (skala-argus) came from a one-day parallel sprint alongside the team: I split planning, API, DB, backend, and frontend tracks among Claude agents against a single contract (CONTRACT.md v3.0) and directed, reviewed, and integrated them. Teammate names attached to tasks in its docs map team roles onto agent tracks; they do not mean those teammates wrote that repo.",
        },
      },
      {
        id: "troubleshooting-e2e",
        title: {
          ko: "트러블슈팅 — 실패해야 할 E2E가 조용히 PASS",
          en: "Troubleshooting — E2E Silently Passing When It Should Fail",
        },
        body: {
          ko: "재현: 라이브 E2E 스크립트가 실패해야 할 검사에서도 PASS를 냈습니다. 원인: 여러 줄 명령치환 결과를 인자로 바로 넘겨 단어 분리가 일어났고(인자 수 6), 검사가 의도대로 동작하지 않았습니다. 수정: 결과를 변수에 먼저 대입한 뒤 넘기도록 10곳을 고쳤습니다. 연속 실행 시 준비 대기 루프가 이전 실행의 서버 응답을 보고 통과하던 문제도 포트 해제 대기와 자기 서버 생존 확인으로 고쳐, 27/64 → 연속 3회 64/64가 됐습니다. 현재 72건(사진 검사 8건 추가)이 3회 연속 72/0입니다.",
          en: "Reproduce: the live E2E script reported PASS on checks that should have failed. Cause: multi-line command substitutions were passed directly as arguments, so word splitting occurred (argc 6) and the checks did not behave as intended. Fix: assign to variables first, in 10 places. A readiness loop that passed by seeing the previous run's server during back-to-back runs was also fixed by waiting for the port to free up and checking its own server is alive, going from 27/64 to 64/64 three times in a row. Today's 72 checks (8 photo checks added) pass 72/0 three times in a row.",
        },
      },
    ],
    artifacts: {
      ko: ["팀 레포 본인 커밋 11개", "개인 재구현 레포·수정 PR #1", "OpenAPI 명세", "DBML ERD", "아키텍처·시퀀스 다이어그램", "발표자료 41장", "화면 캡처"],
      en: ["My 11 commits in the team repo", "Personal re-implementation repo & fix PR #1", "OpenAPI spec", "DBML ERD", "Architecture & sequence diagrams", "41-slide deck", "Screen captures"],
    },
    interviewQuestions: {
      ko: [
        "현장 인터뷰에서 어떤 가설이 기각되었고, API 설계는 어떻게 바뀌었나요?",
        "왜 AI가 승인까지 하지 않고 근거 수집에서 멈추도록 설계했나요?",
        "외부 LLM을 쓸 수 없는 환경이라는 제약을 설계에 어떻게 반영했나요?",
      ],
      en: [
        "Which hypotheses did the field interview reject, and how did the API design change?",
        "Why did you stop the AI at evidence gathering instead of letting it approve?",
        "How did the no-external-LLM constraint shape the design?",
      ],
    },
    heroImage: "/projects/argus/agent-run-polling.webp",
    screenshots: [
      {
        src: "/projects/argus/agent-run-polling.webp",
        alt: {
          ko: "AI 검증 진행 화면 — 규격·호환, 법령·조문, 안전서류 에이전트의 진행 상태를 폴링으로 표시",
          en: "AI review progress — polling the status of spec, regulation, and safety-document agents",
        },
      },
      {
        src: "/projects/argus/approval-panel.webp",
        alt: {
          ko: "안전관리자 요청 상세 — AI 결과물(읽기 전용)과 승인·거절 처리 패널",
          en: "Safety manager request detail — read-only AI output and the approve/reject panel",
        },
      },
      {
        src: "/projects/argus/request-form.webp",
        alt: {
          ko: "엔지니어 교체 요청 등록 화면",
          en: "Engineer replacement request form",
        },
      },
    ],
    links: {
      github: "https://github.com/jang961111-hash/skala-argus",
      teamGithub: "https://github.com/Taeyum/skala-fixguide/commits?author=jang961111-hash",
      fixPr: "https://github.com/jang961111-hash/skala-argus/pull/1",
    },
  },
  {
    slug: "jangbogo",
    featured: false,
    status: "completed",
    sortDate: "2026-08-04",
    period: {
      ko: "2026.08",
      en: "Aug 2026",
    },
    category: {
      ko: "Google x Solana AI Agentic Hackathon",
      en: "Google x Solana AI Agentic Hackathon",
    },
    title: {
      ko: "장보고(JangBogo) | AI 에이전트가 견적 검증부터 결제까지 잇는 가맹점용 게이트웨이",
      en: "JangBogo | A Merchant Gateway Where AI Agents Go from Quote Verification to Payment",
    },
    summary: {
      ko: "구매 에이전트가 가맹점 견적을 비교하고 온체인으로 결제하면, 가맹점 쪽 결정론 정책 엔진이 위임장 서명·유효기간·범위·카트·예산·온체인 지불을 6단계로 검증하는 에이전트 커머스 게이트웨이입니다.",
      en: "An agent-commerce gateway: a buyer agent compares merchant quotes and pays on-chain, while a deterministic merchant-side policy engine verifies mandate signature, expiry, scope, cart, budget, and on-chain payment in six steps.",
    },
    context: {
      ko: "Google x Solana AI Agentic Hackathon 트랙 B(Autonomous On-chain Settlement)에 2인 팀 사공이(402)로 제출한 프로젝트입니다(2026-08-03 23:56 제출). 구현은 AI 코딩 에이전트(Claude Code) 세션 하나로 약 4시간에 했고, 레포 커밋은 모두 본인 계정입니다. 2026-09에 사후 점검으로 결제 경합 결함을 재현하고 고쳤습니다.",
      en: "Submitted to Track B (Autonomous On-chain Settlement) of the Google x Solana AI Agentic Hackathon as the two-person team Sagong-i (402), at 23:56 on Aug 3, 2026. It was built by a single AI coding agent (Claude Code) session in about four hours, and every commit in the repo is under my account. In September 2026 a post-hoc check reproduced and fixed a payment race.",
    },
    story: {
      problem: {
        ko: "에이전트가 스스로 구매하는 흐름이 열려도, 가맹점 입장에서는 '이 에이전트의 주문을 믿어도 되는가'라는 질문이 남습니다. 카드 결제는 본인인증 단계에 사람이 필요해 에이전트가 끝까지 결제하기 어렵습니다.",
        en: "Even when agents can buy on their own, merchants are left asking whether they can trust an agent's order. Card payments need a human in the authentication loop, so an agent cannot complete checkout by itself.",
      },
      insight: {
        ko: "경쟁 제출작들이 구매자측 한도 지갑에 집중한다고 분석하고, 비어 있던 판매자측(가맹점 온보딩 + 검증)을 겨냥했습니다. 프롬프트 인젝션은 완전히 막을 수 없다고 보고, 한도 집행은 LLM이 아니라 결정론 정책 엔진이 맡도록 신뢰 경계를 그었습니다.",
        en: "Our analysis showed competing entries focused on buyer-side spending-limit wallets, so we targeted the empty merchant side (onboarding + verification). Since prompt injection can't be fully prevented, we drew the trust boundary so a deterministic policy engine — not the LLM — enforces limits.",
      },
      solution: {
        ko: "상품 선택은 '조건을 만족하는 견적 중 최저 단가' 규칙이 하고, Gemini는 선택 사유 2문장만 씁니다(키가 없거나 실패하면 템플릿 문장으로 폴백). 결제 승인은 정책 엔진이 합니다. 가맹점은 코드 없이 온보딩해 엔드포인트를 발급받고, x402 방식(HTTP 402 → USDC 지불 → 재요청)으로 Solana devnet에서 결제한 뒤 주문 nonce를 memo로 묶어 온체인 지불을 대조합니다. 검증 6단계는 UI 스텝퍼로 시각화했습니다. AP2·x402·A2A는 SDK 없이 JSON 구조만 빌린 자체 축약 구현입니다.",
        en: "A rule picks the cheapest quote that meets the conditions, and Gemini only writes a two-sentence rationale (falling back to a template if the key is missing or the call fails). The policy engine approves payment. Merchants onboard without code and get an endpoint; payment follows the x402 pattern (HTTP 402 → USDC payment → retry) on Solana devnet, with the order nonce bound into the memo to match on-chain payment. The six verification steps are visualized as a UI stepper. AP2, x402, and A2A are simplified in-house versions that borrow only the JSON shapes, without their SDKs.",
      },
    },
    team: {
      ko: "사공이(402) 2인 팀",
      en: "Team Sagong-i (402), two members",
    },
    role: {
      ko: "팀장 | 에이전트에 기획→개발→배포→QA 루프 지시, Solana·Gemini·GCP 계정·인프라 설정, 제출, 사후 점검·수정 검수 (코드 작성은 Claude Code)",
      en: "Team lead | Directed the agent's plan→build→deploy→QA loop, set up Solana, Gemini, and GCP accounts and infrastructure, submitted, and reviewed the post-hoc check and fixes (code written by Claude Code)",
    },
    tags: {
      ko: ["AI 에이전트", "Gemini", "Solana", "x402", "Next.js", "Cloud Run"],
      en: ["AI Agents", "Gemini", "Solana", "x402", "Next.js", "Cloud Run"],
    },
    highlights: {
      ko: [
        "구매자측에 몰린 경쟁 흐름과 달리 판매자측(가맹점 온보딩 + 검증)을 문제로 잡았습니다.",
        "LLM은 선택 사유 서술에만 쓰고, 예산·범위·만료 집행은 결정론 정책 엔진이 하도록 신뢰 경계를 설계했습니다.",
        "해커톤 제출본은 예산 초과·만료 위임장·범위 밖·과소지불·리플레이 5종 차단을 순차 테스트로 확인했습니다(단위 11 + 통합 20 = 31/31). 그러나 동시 요청은 시험하지 않았습니다.",
        "사후 점검(2026-09): 같은 결제 증빙을 동시에 보내면 1회 지불로 주문이 최대 10건 확정됐습니다 → 검증 전 선점 + 기록 직전 재검사로 1건. 예산 100 USDC 위임장의 최대 확정액 327.59 → 65.52 USDC, 지불 후 거절(돈만 이동) 262.07 → 0 USDC (sandbox·검증 지연 650ms 주입, K≤10 × 5회).",
        "작성과 분리한 보안 리뷰가 수정이 만든 퇴행(위조 cart가 정당한 지불을 '미확정'으로 선점해 영구 409)을 머지 전에 잡았고, 그 과정에서 402와 품목만 바꾼 cart가 확정되던 원래 구멍도 막았습니다.",
        "개발 중 에이전트가 원두 조달 지시에 방금 온보딩된 최저가 베이글을 사 온 사고를 계기로 견적 매칭·범위 검증을 재설계했습니다.",
      ],
      en: [
        "Unlike competing entries clustered on the buyer side, framed the problem on the merchant side (onboarding + verification).",
        "Designed the trust boundary so the LLM only writes the rationale, while a deterministic policy engine enforces budget, scope, and expiry.",
        "At submission, sequential tests confirmed five failure/attack types are blocked — over-budget, expired mandate, out-of-scope, underpayment, replay (11 unit + 20 integration = 31/31). Concurrent requests were never tested.",
        "Post-hoc check (Sep 2026): sending the same payment proof concurrently confirmed up to 10 orders for one payment → claim-before-verify plus a re-check before recording brings it to 1. Max confirmed spend on a 100 USDC mandate 327.59 → 65.52 USDC; money moved but order rejected 262.07 → 0 USDC (sandbox, 650 ms injected verification delay, K ≤ 10 × 5 runs).",
        "A security review kept separate from authoring caught a regression the fix introduced (a forged cart could pre-claim a legitimate payment as 'unconfirmed', causing a permanent 409) before merge, and along the way closed an original hole where a cart differing from the 402 only in items was confirmed.",
        "Redesigned quote matching and scope checks after an incident where the agent, asked to source coffee beans, bought the cheapest newly onboarded bagel instead.",
      ],
    },
    proof: {
      ko: [
        "AI에게 맡길 일(선택 사유 설명)과 맡기면 안 되는 일(결제 승인)을 구분해 구조로 설계했습니다.",
        "테스트로 확인된 동작과 데모 범위의 한계(devnet, 고정 환율 시뮬레이션 등)를 README에 구분해 공개했습니다.",
      ],
      en: [
        "Separated what AI should do (explaining the choice) from what it must not (payment approval), and built that into the architecture.",
        "Published test-verified behavior separately from demo-scope limits (devnet, fixed-rate simulation, etc.) in the README.",
      ],
    },
    metrics: [
      {
        value: "10 → 1",
        label: {
          ko: "같은 결제 증빙 동시 전송 시 최대 주문 수 (수정 PR #1)",
          en: "Max orders from one payment proof sent concurrently (fix PR #1)",
        },
      },
      {
        value: "262.07 → 0",
        label: {
          ko: "지불 후 거절된 금액 USDC (돈만 이동)",
          en: "USDC paid but rejected (money moved, no order)",
        },
      },
      {
        value: "28 + 24",
        label: {
          ko: "vitest 28 + 서버 통합 24 테스트 통과 (이전 11 + 20)",
          en: "28 vitest + 24 server integration tests passing (was 11 + 20)",
        },
      },
    ],
    sections: [
      {
        id: "trust-boundary",
        title: {
          ko: "신뢰 경계 — LLM 불개입 검증 6단계",
          en: "Trust Boundary — Six Checks Without the LLM",
        },
        body: {
          ko: "① 위임장·카트 ed25519 서명 → ② 위임 유효기간 → ③ 위임 범위(카테고리) → ④ 카트 정합성(단가·재고) → ⑤ 누적 예산 한도 → ⑥ 온체인 지불 일치(금액·수취인·memo=nonce·리플레이). 1~5단계는 결제가 일어나기 전에 거절되어 자금이 이동하지 않고, 6단계는 온체인 트랜잭션을 조회해 대조합니다.",
          en: "① ed25519 signatures on mandate and cart → ② mandate expiry → ③ mandate scope (category) → ④ cart consistency (price, stock) → ⑤ cumulative budget limit → ⑥ on-chain payment match (amount, recipient, memo = nonce, replay). Steps 1-5 reject before any payment so no funds move; step 6 checks the on-chain transaction.",
        },
      },
      {
        id: "troubleshooting-race",
        title: {
          ko: "트러블슈팅 — '리플레이 차단'을 내세웠지만 동시 요청은 뚫렸다",
          en: "Troubleshooting — Replay Protection Was Advertised, but Concurrency Broke It",
        },
        body: {
          ko: "재현: sandbox 모드에서 온체인 검증 지연 650ms(같은 날 잰 devnet 조회 p50 0.66s에 맞춤)를 주입하고 같은 결제 증빙을 동시에 K=1·2·5·10건씩 5회 보내자, 1회 지불로 주문이 최대 10건 확정되고 재고가 5kg 대신 50kg 차감, 원장이 1줄 대신 10줄 생겼습니다. 원인: 리플레이 검사와 기록 사이에 온체인 검증 await가 끼어 있어 두 요청이 모두 '처음 본 증빙'으로 통과했습니다. 예산도 402 발급 때 미결제 금액을 빼지 않아 동시 402들이 한도를 함께 넘었습니다. 수정: 검증 전에 증빙을 선점하고 기록 직전 재검사, 402 발급 시 예산 예약. 재현 테스트를 먼저 올려 6건 실패를 확인한 뒤 고쳤습니다. 실측: 주문 최대 10 → 1(이후 커밋에서 0/20 재확인), 예산 초과 15/15 → 0/15.",
          en: "Reproduce: in sandbox mode with a 650 ms on-chain verification delay (matched to that day's devnet lookup p50 of 0.66 s), sending the same payment proof concurrently at K = 1, 2, 5, 10 for 5 runs confirmed up to 10 orders from one payment, deducting 50 kg of stock instead of 5 kg and writing 10 ledger lines instead of 1. Cause: an on-chain verification await sat between the replay check and the record, so both requests passed as 'never seen'. The budget also ignored unpaid amounts when issuing 402s, so concurrent 402s jointly exceeded the limit. Fix: claim the proof before verification and re-check right before recording; reserve budget when issuing a 402. A reproduction test went in first (6 failed) before the fix. Measured: max orders 10 → 1 (re-confirmed 0/20 on a later commit), over-budget 15/15 → 0/15.",
        },
      },
      {
        id: "limits",
        title: {
          ko: "한계",
          en: "Limits",
        },
        body: {
          ko: "증빙 선점 잠금과 파일 JSON DB가 프로세스 하나 기준이라 인스턴스가 둘 이상이면 경합 방어가 뚫립니다(라이브는 최대 인스턴스 1). 가맹점 등록에 인증이 없고 견적 매칭은 목표 문장의 토큰 하나만 상품명에 있어도 통과해, '카페 베이글' 가맹점을 등록하면 기본 목표 '카페 블렌드 원두 5kg 조달'에 베이글이 낙찰됩니다(2026-09-28 로컬 재현, 미해결). devnet 조건의 전후 비교는 faucet 제한으로 재지 못했고, 수정은 PR #1(2026-09-28 기준 리뷰 대기)에 있습니다.",
          en: "The proof-claim lock and the file JSON DB assume a single process, so concurrency protection breaks with more than one instance (the live deployment is capped at one). Merchant sign-up has no authentication, and quote matching passes if a single token of the goal sentence appears in a product name — registering a 'Cafe Bagel' merchant makes a bagel win the default goal 'source 5 kg of cafe blend beans' (reproduced locally on Sep 28, 2026; unresolved). A before/after comparison under devnet conditions could not be run because of faucet limits, and the fixes are in PR #1 (awaiting review as of Sep 28, 2026).",
        },
      },
    ],
    artifacts: {
      ko: ["데모 영상", "GitHub 저장소", "설계·QA 문서", "프로젝트 소개서"],
      en: ["Demo video", "GitHub repository", "Design & QA docs", "Project brief"],
    },
    interviewQuestions: {
      ko: [
        "왜 구매자측이 아니라 판매자측을 문제로 잡았나요?",
        "LLM과 정책 엔진의 역할을 어떻게 나눴고, 그 이유는 무엇인가요?",
        "베이글 사고 이후 검증 로직을 어떻게 바꿨나요?",
      ],
      en: [
        "Why did you target the merchant side instead of the buyer side?",
        "How did you split responsibilities between the LLM and the policy engine, and why?",
        "How did you change the verification logic after the bagel incident?",
      ],
    },
    heroImage: "/projects/jangbogo/agent-run.webp",
    screenshots: [
      {
        src: "/projects/jangbogo/agent-run.webp",
        alt: {
          ko: "에이전트 콘솔 — 자율 조달 실행 로그와 판매자측 6단계 검증 결과",
          en: "Agent console — autonomous procurement log and six-step merchant-side verification",
        },
      },
      {
        src: "/projects/jangbogo/policy-block.webp",
        alt: {
          ko: "네거티브 데모 — 예산 초과 주문을 결제 전에 차단",
          en: "Negative demo — an over-budget order blocked before payment",
        },
      },
      {
        src: "/projects/jangbogo/merchants.webp",
        alt: {
          ko: "가맹점 온보딩 — 코드 없이 엔드포인트 발급",
          en: "Merchant onboarding — endpoint issued without code",
        },
      },
    ],
    links: {
      github: "https://github.com/jang961111-hash/jangbogo",
      youtube: "https://youtu.be/ALdVyGhXPT8",
      fixPr: "https://github.com/jang961111-hash/jangbogo/pull/1",
    },
  },
  {
    slug: "ajob-radar",
    featured: false,
    status: "completed",
    sortDate: "2026-08-24",
    period: {
      ko: "2026.08",
      en: "Aug 2026",
    },
    category: {
      ko: "2026 전남광주 청년 AI 솔버톤",
      en: "2026 Jeonnam-Gwangju Youth AI Solvathon",
    },
    title: {
      ko: "무등산 A!잡레이더 | 청년에게 닿지 않는 지역 일자리를 잇는 AI 추천 서비스 기획",
      en: "Mudeungsan A!Job Radar | AI Recommendations Connecting Youth to Local Jobs",
    },
    summary: {
      ko: "있는 일자리가 청년에게 닿지 않는 문제를 구조화 추출 + 한국어 문장 임베딩 + 생성형 AI 파이프라인으로 풀고자 한 서비스 기획으로, 서류 심사를 통과해 본선에 진출했습니다.",
      en: "A service plan tackling the gap between existing jobs and the youth who never see them, using a structured-extraction + Korean sentence-embedding + generative-AI pipeline; it passed document screening and advanced to the finals.",
    },
    context: {
      ko: "팀장이자 공식 서식상 대표자로 기획·PM과 발표를 총괄했고, 사전역량교육 당일에 팀이 실습 결과물을 실제 서비스로 배포했습니다.",
      en: "As team lead and official representative, I led planning, PM, and the pitch; on the day of the pre-event training, the team deployed its practice output as a real service.",
    },
    story: {
      problem: {
        ko: "전체 고용지표는 멀쩡한데 청년만 반대로 무너지고 있습니다. 일자리가 없어서가 아니라, 있는 일자리가 청년에게 닿지 않아서입니다. 출처를 병기한 통계로 청년 실업률 광주 7.0%·전남 10.1%, 광주 청년 순유출률 2.50%(전국 2위), 광주 구인배율 0.24를 근거로 삼았습니다.",
        en: "Overall employment indicators look fine, yet youth employment is moving the other way — not because jobs don't exist, but because existing jobs don't reach young people. The plan cited sourced statistics: youth unemployment of 7.0% in Gwangju and 10.1% in Jeonnam, Gwangju's youth net outflow of 2.50% (2nd nationwide), and a Gwangju job-openings-to-applicants ratio of 0.24.",
      },
      insight: {
        ko: "심사 관점을 먼저 문항에 매핑하고, 페르소나 2종으로 대상 사용자를 좁혔습니다. 경쟁 서비스 20종을 7개 기능으로 비교한 표(4단계 신뢰 기호)를 직접 조사해 차별점을 정리했습니다.",
        en: "Mapped the judging criteria onto each application question first, narrowed the target users with two personas, and personally researched a 20-service × 7-feature competitor comparison table (with four-level confidence markers) to pin down differentiation.",
      },
      solution: {
        ko: "'구조화 추출 + 한국어 문장 임베딩 + 생성형 AI' 파이프라인을 설계하고, 제출 규격·출처 검증 체크리스트를 운영해 3쪽·1.70MB 제출본을 SHA256까지 기록해 관리했습니다.",
        en: "Designed a 'structured extraction + Korean sentence embedding + generative AI' pipeline and ran a submission-spec and source-verification checklist, tracking the 3-page, 1.70 MB submission down to its SHA256 hash.",
      },
    },
    team: {
      ko: "팀 프로젝트 (팀장 · 공식 대표자)",
      en: "Team project (team lead · official representative)",
    },
    role: {
      ko: "팀장 · PM · 프론트 리드 | 기획·PM·발표 총괄, React 프론트엔드, LLM·Prompt 추천·벡터검색",
      en: "Team lead · PM · Frontend lead | Planning, PM & pitch, React frontend, LLM/prompt recommendations & vector search",
    },
    tags: {
      ko: ["문제 정의", "AI 추천", "벡터 검색", "경쟁 분석", "지역 일자리"],
      en: ["Problem framing", "AI recommendations", "Vector search", "Competitive analysis", "Local jobs"],
    },
    highlights: {
      ko: [
        "청년 고용 문제를 '일자리 부족'이 아니라 '있는 일자리가 닿지 않는 문제'로 다시 정의했습니다.",
        "심사 관점 → 문항 매핑, 페르소나 2종, 경쟁 서비스 20종 × 7기능 비교표로 기획서를 설계했습니다.",
        "제출 규격·출처 검증 체크리스트를 운영하며 서류 심사를 통과해 본선에 진출했습니다.",
      ],
      en: [
        "Reframed youth unemployment from 'not enough jobs' to 'existing jobs never reach young people'.",
        "Built the proposal from judging-criteria mapping, two personas, and a 20-service × 7-feature competitor table.",
        "Ran a submission-spec and source-verification checklist, passed document screening, and advanced to the finals.",
      ],
    },
    proof: {
      ko: [
        "문제를 통계 근거와 함께 재정의하고, 경쟁 분석으로 차별점을 좁히는 기획 과정을 팀장으로 이끌었습니다.",
      ],
      en: [
        "Led, as team lead, a planning process that reframed the problem with sourced data and narrowed differentiation through competitive analysis.",
      ],
    },
    metrics: [
      {
        value: "본선",
        label: {
          ko: "서류 심사 통과 · 본선 진출",
          en: "Passed screening · advanced to finals",
        },
      },
      {
        value: "20 × 7",
        label: {
          ko: "경쟁 서비스 × 기능 비교표",
          en: "Competitor services × features compared",
        },
      },
    ],
    sections: [],
    artifacts: {
      ko: ["참가신청서 및 AI 개발계획서", "팀 소개", "경쟁·유사 서비스 분석", "제출 체크리스트"],
      en: ["Application & AI development plan", "Team introduction", "Competitor analysis", "Submission checklist"],
    },
    interviewQuestions: {
      ko: [
        "왜 청년 고용 문제를 '일자리 부족'이 아니라 '연결의 문제'로 정의했나요?",
        "경쟁 서비스 20종 비교에서 어떤 차별점을 찾았나요?",
      ],
      en: [
        "Why did you frame youth employment as a connection problem rather than a shortage of jobs?",
        "What differentiation did you find from comparing 20 competing services?",
      ],
    },
    links: {},
  },
  {
    slug: "skt-prompt-ansimcall",
    featured: false,
    status: "completed",
    sortDate: "2026-08-20",
    period: {
      ko: "2026.08 (수상 2026.08.20)",
      en: "Aug 2026 (awarded Aug 20, 2026)",
    },
    category: {
      ko: "SKT 「모두의 promp.T」 공모전 · Life AX 부문",
      en: "SKT 'promp.T for Everyone' Contest · Life AX",
    },
    title: {
      ko: "안심콜 | 판별해주지 않는 AI — 어르신 보이스피싱 판별 AI 말벗",
      en: "Ansim Call | An AI That Doesn't Judge for You — A Voice-Phishing Companion for Seniors",
    },
    summary: {
      ko: "어르신 보이스피싱 판별 AI 말벗 '안심콜'을 기획해 SKT 「모두의 promp.T」 공모전 Life AX 부문 최우수상을 받은 개인 출품작입니다.",
      en: "A solo entry planning 'Ansim Call', an AI companion that helps seniors judge voice-phishing attempts — winner of the top prize (Life AX category) in SKT's 'promp.T for Everyone' contest.",
    },
    context: {
      ko: "출품작 제목은 「어머니의 판별 카드에는, 제가 알려드린 게 하나도 없습니다」입니다. 어머니가 경고 문자 앞에서 47분을 망설인 일에서 출발했습니다.",
      en: "The entry was titled 'My Mother's Judgment Card Contains Nothing I Taught Her.' It started from the 47 minutes my mother spent hesitating over a warning text.",
    },
    story: {
      problem: {
        ko: "어머니가 경고 문자 사진을 보내며 무시해도 되는지 물으셨고, 제가 답하기까지 47분이 비어 있었습니다. 그동안 어머니는 그 화면을 혼자 보고 계셨습니다. 저는 어머니를 지켜드린 것이 아니라 어머니의 판단을 대신하고 있었고, 대신하는 동안 어머니에게는 아무것도 남지 않았습니다.",
        en: "My mother sent me a photo of a warning text asking whether she could ignore it; 47 minutes passed before I replied, and she sat with that screen alone. I realized I hadn't been protecting her — I had been making her judgments for her, and doing so left her with nothing.",
      },
      insight: {
        ko: "판별기(도구)가 아니라 판별력(사람의 역량)을 키우는 방향으로 설계를 뒤집었습니다 — '판별해주는 AI가 아니라 판별해주지 않는 AI'.",
        en: "Flipped the design from a judging tool to building the person's own judgment — 'not an AI that judges for you, but one that doesn't.'",
      },
      solution: {
        ko: "「어머니의 판별 카드」라는 형태로, AI 말벗이 답을 대신 내려주기보다 어르신이 스스로 판단할 수 있도록 돕는 경험을 기획했습니다.",
        en: "Planned the experience around 'Mother's Judgment Card', where the AI companion helps seniors reach their own judgment instead of handing them the answer.",
      },
    },
    team: {
      ko: "개인 출품",
      en: "Solo entry",
    },
    role: {
      ko: "개인 출품 | 문제 정의, 서비스 기획",
      en: "Solo | Problem framing, service planning",
    },
    tags: {
      ko: ["AI 서비스 기획", "시니어", "보이스피싱", "Life AX"],
      en: ["AI service planning", "Seniors", "Voice phishing", "Life AX"],
    },
    highlights: {
      ko: [
        "SKT 「모두의 promp.T」 공모전 Life AX 부문 최우수상을 개인 명의로 수상했습니다.",
        "판별기(도구)가 아니라 판별력(사람의 역량)을 키우는 방향으로 설계를 뒤집었습니다.",
        "가족의 실제 경험(47분의 공백)에서 문제를 정의했습니다.",
      ],
      en: [
        "Won the top prize in the Life AX category of SKT's 'promp.T for Everyone' contest as an individual.",
        "Flipped the design from a judging tool to strengthening the person's own judgment.",
        "Defined the problem from a real family experience — a 47-minute gap.",
      ],
    },
    proof: {
      ko: [
        "AI가 사람의 판단을 대신하는 대신, 사람의 판단력을 키우는 방향으로 AI의 역할을 정의했습니다.",
      ],
      en: [
        "Defined AI's role as strengthening human judgment rather than replacing it.",
      ],
    },
    metrics: [
      {
        value: "최우수상",
        label: {
          ko: "Life AX 부문 (개인 수상)",
          en: "Top prize, Life AX (individual)",
        },
      },
      {
        value: "47분",
        label: {
          ko: "문제 정의의 출발점",
          en: "Where the problem definition began",
        },
      },
    ],
    sections: [],
    artifacts: {
      ko: ["공모전 출품작"],
      en: ["Contest entry"],
    },
    interviewQuestions: {
      ko: [
        "왜 '판별해주는 AI'가 아니라 '판별해주지 않는 AI'를 택했나요?",
      ],
      en: [
        "Why did you choose an AI that doesn't judge for the user over one that does?",
      ],
    },
    links: {},
  },
  {
    slug: "krafton-multiplierboard",
    featured: false,
    status: "completed",
    sortDate: "2026-03-28",
    period: {
      ko: "2026.03.28 (Round 1 · Day 1)",
      en: "Mar 28, 2026 (Round 1 · Day 1)",
    },
    category: {
      ko: "AI R&D / Hackathon",
      en: "AI R&D / Hackathon",
    },
    title: {
      ko: "MultiplierBoard | 1-Layer 어텐션으로 이진 곱셈을 푸는 KRAFTON AI R&D 과제",
      en: "MultiplierBoard | Binary Multiplication with 1-Layer Attention (KRAFTON AI R&D)",
    },
    summary: {
      ko: "KRAFTON AI R&D Hackathon 라운드 1에서, 1-layer causal self-attention 제약 아래 6비트×6비트 이진 곱셈을 푸는 두 가지 해법(수학적 구성 해법 · 학습 모델)을 하루 안에 설계·검증해 제출한 개인 과제입니다.",
      en: "A solo Round-1 task from the KRAFTON AI R&D Hackathon: designing and verifying two solutions — a constructive-exact model and a learned model — for 6-bit binary multiplication under a 1-layer causal self-attention constraint, within a single day.",
    },
    context: {
      ko: "생성형 AI를 실행·검증 파트너로 쓰는 핸드오프 워크플로우로 코드·체크포인트·리포트·재현 명령까지 완결된 제출 패키지를 만든 프로젝트입니다.",
      en: "Built a complete submission package — code, checkpoints, report, and reproduction commands — using a hand-off workflow that treats generative AI as an execution-and-verification partner.",
    },
    story: {
      problem: {
        ko: "트랜스포머의 최소 구성(1-layer causal self-attention)이 곱셈이라는 조합적 연산을 표현하고 학습할 수 있는가를 묻는 과제였습니다. 12개 출력 비트를 자기회귀로 예측해야 하고, 학습 문제(1-2)는 옵티마이저·에폭·배치까지 학습 프로토콜이 고정되어 아키텍처 설계만으로 승부해야 했습니다.",
        en: "The task asked whether a minimal transformer — one causal self-attention layer — can represent and learn multiplication, predicting 12 output bits autoregressively. For the learned problem the training protocol (optimizer, epochs, batch) was fixed, so architecture design was the only lever.",
      },
      insight: {
        ko: "두 문제의 성격이 다르다고 판단했습니다. 1-1은 '표현 가능성 증명'이므로 학습 대신 수학적 구성이 허용되고, prefix-average 어텐션으로 입력 12비트를 유일한 스칼라 코드로 압축하면 출력 비트 복원이 1차원 스플라인 보간 문제로 환원됩니다. 1-2는 '학습 가능성' 문제이므로, 입력 비트를 명시적으로 라우팅하는 희소 어텐션이 학습을 안정화하는 열쇠였습니다.",
        en: "The two problems are different in kind. Problem 1-1 is a representability proof — a constructive solution is legitimate: prefix-average attention compresses the 12 input bits into a unique scalar code, reducing bit recovery to 1-D spline interpolation. Problem 1-2 is about learnability, where explicitly routing input bits through sparse attention heads was the key to stable training.",
      },
      solution: {
        ko: "1-1은 구성적 정확 모델(98,328 파라미터)로 4,096쌍 전수 검증 100%를 달성했습니다. 1-2는 fixed-routed 희소 어텐션 + MLP(274,898 파라미터)로 10K 랜덤·4,096쌍 전수 검증 모두 정확도 1.0을 기록했습니다. 구현 → 교차 리뷰 → 최종 검토로 이어지는 생성형 AI 핸드오프 문서 체계로 하루 안에 리포트까지 패키징했습니다.",
        en: "Problem 1-1: a constructive exact model (98,328 params) verified at 100% over all 4,096 pairs. Problem 1-2: a fixed-routed sparse-attention + MLP model (274,898 params) reaching accuracy 1.0 on both 10K random and exhaustive evaluation. An implement → cross-review → final-review AI hand-off pipeline packaged everything, report included, within the day.",
      },
    },
    team: {
      ko: "개인 참가",
      en: "Solo entry",
    },
    role: {
      ko: "개인 참가 | 문제 분석, 해법 방향 설계, 생성형 AI 실행·검증 워크플로우 구성, 결과 검증·리포트 작성",
      en: "Solo | Problem analysis, solution direction, generative-AI execution & verification workflow, result verification and reporting",
    },
    tags: {
      ko: ["Transformer", "AI 페어 워크플로우", "검증 설계", "AI R&D"],
      en: ["Transformer", "AI Pair Workflow", "Verification", "AI R&D"],
    },
    highlights: {
      ko: [
        "1-layer 어텐션 제약에서 곱셈을 '스칼라 코드 + 스플라인 복원' 문제로 환원하는 구성적 해법으로 4,096쌍 전수 검증 100%를 달성했습니다.",
        "입력 비트를 명시적으로 라우팅하는 희소 어텐션 구조를 설계해 학습 모델(274,898 파라미터)로 정확도 1.0을 재현했습니다.",
        "구현 → 교차 리뷰 → 최종 검토로 이어지는 생성형 AI 핸드오프 워크플로우를 문서화해 하루 안에 제출 패키지를 완성했습니다.",
        "고정 프로토콜(200에폭) 대비 실측은 20에폭이라는 한계를 리포트에 그대로 명시했습니다 — 검증 범위와 한계의 정직한 보고.",
      ],
      en: [
        "Reduced multiplication to a 'scalar code + spline recovery' problem under the 1-layer constraint — 100% on exhaustive 4,096-pair verification.",
        "Designed an explicitly-routed sparse attention architecture; the learned model (274,898 params) reproduced accuracy 1.0.",
        "Documented an implement → cross-review → final-review generative-AI hand-off workflow, completing the submission package in one day.",
        "Reported honestly that the measured run used 20 epochs versus the fixed 200-epoch protocol — stating verification scope and limits as they were.",
      ],
    },
    proof: {
      ko: [
        "생성형 AI를 파트너로 쓰되, 전수 검증과 정직한 리포팅은 사람이 책임지는 협업 방식을 보여줍니다.",
        "문제를 환원하는 사고(곱셈 → 스칼라 함수 보간)로 제약 조건을 정면 돌파했습니다.",
        "하루 마감에서 코드·체크포인트·리포트·재현 명령을 완결된 패키지로 전달하는 실행력을 증명했습니다.",
      ],
      en: [
        "Shows a collaboration model where generative AI executes, but exhaustive verification and honest reporting remain a human responsibility.",
        "Broke through constraints with reductive thinking — multiplication as scalar-function interpolation.",
        "Demonstrated delivery under a one-day deadline: code, checkpoints, report, and reproduction commands as one complete package.",
      ],
    },
    metrics: [
      {
        value: "100%",
        label: {
          ko: "4,096쌍 전수 검증 정확도",
          en: "Exhaustive 4,096-pair accuracy",
        },
      },
      {
        value: "275K",
        label: {
          ko: "학습 모델 파라미터",
          en: "Learned model parameters",
        },
      },
      {
        value: "1-Layer",
        label: {
          ko: "Causal self-attention 제약",
          en: "Causal self-attention constraint",
        },
      },
    ],
    caseStudy: {
      title: {
        ko: "Decision Deep Dive | 검증되지 않은 것은 '검증되지 않았다'고 쓴다",
        en: "Decision Deep Dive | If It Isn't Verified, Say So",
      },
      summary: {
        ko: "AI가 산출물을 만드는 속도가 빨라질수록, 신뢰의 기준은 사람의 검증과 정직한 보고로 이동한다는 판단",
        en: "As AI accelerates output, trust shifts to human verification and honest reporting",
      },
      content: {
        ko: "시간 제약으로 고정 프로토콜(200에폭)을 완주하지 못했을 때, 수치를 부풀리거나 모호하게 쓰는 대신 '측정된 것은 20에폭 실행이며 200에폭 재실행은 중단되었다'고 리포트에 명시하고 재현 명령까지 남겼습니다. 대신 신뢰의 근거는 다른 곳에 세웠습니다 — 가능한 전체 입력 4,096쌍에 대한 그리디 디코딩 전수 검증입니다. 생성형 AI가 구현을 빠르게 만들어줄수록 병목은 '검토와 판단'으로 이동합니다. 그래서 다음 검토자가 몇 분 안에 제출 여부를 판단할 수 있도록, 검증된 것과 안 된 것을 구분한 핸드오프 문서를 산출물의 일부로 설계했습니다.",
        en: "When the fixed 200-epoch protocol couldn't be completed in time, the report said exactly that — 'the measured run is 20 epochs; the 200-epoch rerun was interrupted' — with reproduction commands attached, instead of inflating or blurring the numbers. Trust was grounded elsewhere: exhaustive greedy-decoding verification over all 4,096 possible input pairs. As generative AI speeds up implementation, the bottleneck moves to review and judgment — so the hand-off document separating verified from unverified became part of the deliverable itself, letting the next reviewer decide in minutes.",
      },
    },
    sections: [
      {
        id: "ai-workflow",
        title: {
          ko: "생성형 AI 핸드오프 워크플로우",
          en: "Generative-AI Hand-off Workflow",
        },
        body: {
          ko: "구현 세션이 끝날 때마다 다음 검토자(사람이든 모델이든)가 몇 분 안에 판단할 수 있는 핸드오프 문서를 남겼습니다 — 현재 최선의 제출 수치, 검증된 것과 안 된 것의 구분, 재현 명령, 폴더 맵, 최종 의사결정 권고까지. 별도의 리뷰 프롬프트로 다른 모델에게 교차 검토를 시키는 체계도 함께 운영했습니다. AI가 산출물을 만드는 속도가 빨라질수록 병목은 검토와 판단으로 이동한다는 것을 체감했고, '검토가 빠른 산출물 구조' 자체를 설계 대상으로 삼았습니다.",
          en: "Each implementation session ended with a hand-off document a next reviewer — human or model — could act on in minutes: current best submission numbers, verified vs. unverified items, reproduction commands, a folder map, and a final-decision recommendation. A separate review prompt drove cross-review by another model. As AI accelerates production, the bottleneck moves to review and judgment — so 'artifacts that are fast to review' became a design goal in itself.",
        },
      },
    ],
    artifacts: {
      ko: ["제출 리포트 PDF", "학습 곡선", "해법 코드·체크포인트", "AI 핸드오프 문서"],
      en: ["Submission report PDF", "Learning curves", "Solution code & checkpoints", "AI hand-off documents"],
    },
    interviewQuestions: {
      ko: [
        "왜 1-1을 학습이 아니라 구성적 증명으로 접근했나요?",
        "생성형 AI와 협업할 때 결과물 검증 체계를 어떻게 설계했나요?",
        "시간 제약으로 프로토콜을 완주하지 못했을 때 어떻게 보고했나요?",
      ],
      en: [
        "Why did you approach Problem 1-1 as a constructive proof rather than training?",
        "How did you design the verification loop when collaborating with generative AI?",
        "How did you report results when the protocol couldn't be completed in time?",
      ],
    },
    heroImage: "/projects/krafton-multiplierboard/learning-curve.webp",
    media: {
      presentationHref: "/projects/krafton-multiplierboard/multiplierboard-report.pdf",
      title: {
        ko: "제출 리포트",
        en: "Submission Report",
      },
      presentationLabel: {
        ko: "제출 리포트 PDF 보기",
        en: "View submission report (PDF)",
      },
    },
    screenshots: [
      {
        src: "/projects/krafton-multiplierboard/learning-curve.webp",
        alt: {
          ko: "학습 곡선 — 20에폭에서 10K 랜덤 정확도 1.0 도달",
          en: "Learning curves — 10K random accuracy reaching 1.0 by epoch 20",
        },
      },
      {
        src: "/projects/krafton-multiplierboard/report-preview.webp",
        alt: {
          ko: "제출 리포트 1페이지 — 구성적 정확성 증명과 학습 아키텍처",
          en: "Submission report page 1 — constructive exactness proof and learned architecture",
        },
      },
    ],
    links: {},
  },
  {
    slug: "easyexam",
    featured: false,
    status: "completed",
    sortDate: "2026-06-26",
    period: {
      ko: "2026.06.24 - 06.26 (3일)",
      en: "Jun 24 - 26, 2026 (3 days)",
    },
    category: {
      ko: "SSAFY 창업캠프 / Startup",
      en: "SSAFY Startup Camp",
    },
    title: {
      ko: "EasyExam | 학원 출제·채점·관리를 하나의 루프로 만드는 AI SaaS",
      en: "EasyExam | An AI SaaS Turning Academy Exam Work into One Loop",
    },
    summary: {
      ko: "SSAFY 창업캠프(삼성·JA Korea)에서 3일 만에 기획부터 라이브 서비스까지 완성한, 학원 강사용 AI 문제은행·시험지 생성·자동 채점 SaaS입니다. 창업관심팀 최우수팀으로 선정되었습니다.",
      en: "An AI question-bank, exam-builder, and auto-grading SaaS for academy instructors — built from idea to live service in 3 days at the SSAFY Startup Camp (Samsung · JA Korea). Selected as Best Team.",
    },
    context: {
      ko: "팀 No Problem(5인)으로 참가해 전직 학원 강사의 현장 페인 포인트에서 출발했고, 시연 가능한 라이브 서비스(noproblem.ssafy.live)와 15장 사업 소개 덱으로 최우수팀에 선정된 프로젝트입니다.",
      en: "Team No Problem (5 members) started from a former academy instructor's field pain points, and won Best Team with a live demo service (noproblem.ssafy.live) and a 15-page business deck.",
    },
    story: {
      problem: {
        ko: "학원 강사는 가르치는 일에 집중해야 하지만, 실제로는 주 10시간 이상을 출제·채점·관리에 씁니다. 기존 도구는 문제 등록이 불편하고, 시험지 제작이 번거롭고, 수기 채점에 시간이 걸리는 세 지점에서 막힙니다.",
        en: "Instructors should focus on teaching, yet spend 10+ hours a week on exam creation, grading, and management. Existing tools fail at three points: registering questions, assembling papers, and manual grading.",
      },
      insight: {
        ko: "개별 기능 세 개를 파는 것이 아니라, '등록 → AI 분류 → 시험지 생성 → 자동 채점 → 약점 분석'이 이어지는 하나의 데이터 선순환 루프로 설계해야 쓸수록 똑똑해지고 갈아타기 어려운 제품이 된다고 판단했습니다.",
        en: "Rather than selling three features, we designed one data flywheel — capture → AI tagging → paper generation → auto-grading → weakness analytics — so the product gets smarter with use.",
      },
      solution: {
        ko: "책상에서 문제를 찍으면 원근 보정·OCR·레이아웃 분리 후 학년·과목·유형이 자동 태깅되어 문제은행에 쌓이고, 자연어 한 문장으로 맞춤 시험지가 조립되며, 답안을 찍으면 OCR·VLM·루브릭 기반으로 즉시 채점되고 오답노트가 자동 생성됩니다. 학원 단위 SaaS 구독(월 9.9/19.9만 원)으로 설계했습니다.",
        en: "Snap a photo — perspective correction, OCR, and layout segmentation feed an auto-tagged question bank; one natural-language sentence assembles a custom exam; snapping answer sheets triggers OCR/VLM rubric grading with automatic mistake-note generation. Priced as per-academy SaaS (₩99K/199K monthly).",
      },
    },
    team: {
      ko: "팀 No Problem (5인 — CEO·CTO·전 학원 강사·마케팅·인프라)",
      en: "Team No Problem (5 — CEO, CTO, ex-instructor, marketing, infra)",
    },
    role: {
      ko: "마케팅 · SEO 담당 | 시장·고객 검증과 서비스 확산 설계 파트",
      en: "Marketing & SEO | Market-customer validation and growth design",
    },
    tags: {
      ko: ["EdTech SaaS", "AI 파이프라인", "BM 설계", "창업"],
      en: ["EdTech SaaS", "AI Pipeline", "Business Model", "Startup"],
    },
    highlights: {
      ko: [
        "SSAFY 창업캠프 창업관심팀 최우수팀으로 선정되었습니다 (삼성·JA Korea 주최).",
        "3일 안에 아이디어 검증부터 시연 가능한 라이브 서비스(noproblem.ssafy.live)까지 완성했습니다.",
        "출제·채점·분석을 잇는 데이터 선순환 루프로 제품을 구조화했습니다 — 쓸수록 문제은행이 똑똑해지는 설계.",
        "전국 학원 8만여 곳 기준 SAM 965억 원 산정 등 시장·수익모델을 공식 통계로 뒷받침했습니다.",
      ],
      en: [
        "Selected as Best Team in the SSAFY Startup Camp (hosted by Samsung · JA Korea).",
        "Went from idea validation to a live, demoable service (noproblem.ssafy.live) within 3 days.",
        "Structured the product as a data flywheel connecting creation, grading, and analytics.",
        "Backed the market and revenue model with official statistics — ₩96.5B SAM across ~80K academies.",
      ],
    },
    proof: {
      ko: [
        "현장 전문가(전직 강사)의 페인 포인트를 AI 파이프라인 서비스 구조로 옮겼습니다.",
        "기능 나열이 아니라 데이터 선순환이라는 제품 전략으로 심사를 설득했습니다.",
        "짧은 마감(3일) 안에 기획·구현·발표를 완결한 팀 실행력을 보여줬습니다.",
      ],
      en: [
        "Translated a field expert's pain points into an AI-pipeline service structure.",
        "Won the judges over with a data-flywheel product strategy rather than a feature list.",
        "Demonstrated team execution — planning, build, and pitch completed in a 3-day deadline.",
      ],
    },
    metrics: [
      {
        value: "Best",
        label: {
          ko: "창업관심팀 최우수팀 선정",
          en: "Best Team award",
        },
      },
      {
        value: "3 days",
        label: {
          ko: "아이디어 → 라이브 서비스",
          en: "Idea to live service",
        },
      },
      {
        value: "Live",
        label: {
          ko: "noproblem.ssafy.live 시연",
          en: "Demo at noproblem.ssafy.live",
        },
      },
    ],
    sections: [
      {
        id: "ai-pipeline",
        title: {
          ko: "기능 뒤에서 도는 AI 파이프라인",
          en: "The AI Pipeline Behind Each Feature",
        },
        body: {
          ko: "등록(INGEST)은 촬영 → 원근 보정·OCR → 문항 분할 → 임베딩 분류 → 지식그래프 태깅으로, 생성(GENERATE)은 자연어 요청 → 의도 파싱 → 조건 제약 → 문제은행 RAG 검색 → 문항 조합으로, 채점(GRADE)은 답안 촬영 → OCR·손글씨 인식(VLM) → 정답·루브릭 채점 → 신뢰도 분기(낮으면 교사 검수 라우팅) → 기록·약점 분석으로 흐릅니다. 학원별 데이터 격리(멀티테넌트)를 전제로 설계했습니다.",
          en: "INGEST: capture → deskew/OCR → item segmentation → embedding classification → knowledge-graph tagging. GENERATE: natural-language request → intent parsing → constraints → question-bank RAG retrieval → assembly. GRADE: answer capture → OCR/handwriting VLM → rubric scoring → confidence routing (low-confidence items go to teacher review) → records and weakness analytics. Designed for per-academy data isolation (multi-tenant).",
        },
      },
    ],
    artifacts: {
      ko: ["사업 소개 덱 (15p)", "라이브 서비스", "수상 사진"],
      en: ["Business deck (15p)", "Live service", "Award photo"],
    },
    interviewQuestions: {
      ko: [
        "왜 개별 기능이 아니라 데이터 선순환 루프를 제품 전략으로 삼았나요?",
        "AI 채점의 신뢰도 문제를 서비스 설계에서 어떻게 다뤘나요?",
        "3일이라는 제약에서 무엇을 버리고 무엇을 지켰나요?",
      ],
      en: [
        "Why did you make the data flywheel the product strategy instead of individual features?",
        "How did the service design handle AI grading reliability?",
        "Under the 3-day constraint, what did you cut and what did you protect?",
      ],
    },
    heroImage: "/projects/easyexam/award-best-team.webp",
    media: {
      presentationHref: "/projects/easyexam/easyexam-deck.pdf",
      title: {
        ko: "사업 소개 덱",
        en: "Business Deck",
      },
      presentationLabel: {
        ko: "소개 덱 PDF 보기 (15p)",
        en: "View business deck (PDF, 15p)",
      },
    },
    links: {
      demo: "https://noproblem.ssafy.live",
    },
  },
  {
    slug: "supporty",
    featured: false,
    status: "completed",
    sortDate: "2026-07-05",
    period: {
      ko: "2026.07.03 - 07.05 (72시간)",
      en: "Jul 3 - 5, 2026 (72 hours)",
    },
    category: {
      ko: "Defense Tech / Hackathon",
      en: "Defense Tech / Hackathon",
    },
    title: {
      ko: "SUPPORTY | AI 코파일럿 기반 무인자산 작전지속지원 통제 시스템",
      en: "SUPPORTY | AI-Copilot Operator Console for Contested Logistics",
    },
    summary: {
      ko: "D4D(Deploy for Defense) APAC 서울 해커톤에서 72시간 동안 구축한, 한 명의 오퍼레이터가 AI 코파일럿과 함께 지상(UGV)·공중(VTOL) 무인자산을 동시에 지휘하는 작전지속지원 통제 시스템입니다.",
      en: "A contested-logistics control system built in 72 hours at the D4D (Deploy for Defense) APAC Seoul hackathon, where a single operator commands ground (UGV) and aerial (VTOL) unmanned assets alongside an AI copilot.",
    },
    context: {
      ko: "특전사 출신 하드웨어 리드와 2인 팀으로, 실물 UGV·VTOL과 라이브 오퍼레이터 콘솔을 연동해 시연했습니다. Oregon UAS Accelerator 상을 수상해 액셀러레이터 후속 지원 과정에 선정되었고, D4D 공식 쇼케이스에 등재되었습니다.",
      en: "A two-person team with a special-forces-veteran hardware lead; we demoed a live operator console wired to a real UGV and VTOL. The team won the Oregon UAS Accelerator award — with selection into the accelerator's follow-on startup support program — and is listed in the official D4D showcase.",
    },
    story: {
      problem: {
        ko: "현행 무인체계 운용은 자산 1대당 조종사 1명이 붙는 선형 인력 구조라, 장비가 늘수록 인력도 똑같이 늘어야 합니다. 병력이 줄어드는 환경에서는 지속 불가능하고, 그 대가는 전장에서 가장 절박한 순간에 청구됩니다 — 우크라이나 의용군 인터뷰에서 '지원을 요청할 수단조차 없어 제때 조치를 받지 못했다'는 증언을 직접 확인했습니다.",
        en: "Today's unmanned operations follow a linear staffing model — one pilot per asset — which cannot scale as fleets grow and forces shrink. The cost lands at the battlefield's most desperate moments; interviews with Ukrainian volunteers confirmed cases where soldiers had no channel even to request support in time.",
      },
      insight: {
        ko: "전투가 아니라 '작전지속지원(보급·정찰·중계)'을 서비스로 재설계하면, 작전 판단은 군에 남기고 요청 접수 → 우선순위 분류 → 자산 배분·실행만 맡는 As-a-Service 구조가 가능하다고 보았습니다. 1인 다중 통제의 진짜 병목은 오퍼레이터의 인지 과부하이므로, AI가 트리아지와 저위험 구간을 맡는 코파일럿 구조로 풀어야 한다고 판단했습니다.",
        en: "Reframing the domain from combat to logistics-as-a-service keeps operational judgment with the military while the service handles request intake, triage, and asset dispatch. The real bottleneck of one-to-many control is operator cognitive overload — so an AI copilot should own triage and low-risk flight phases.",
      },
      solution: {
        ko: "자연어 지휘(문장 → 제어 시퀀스 변환), AI 트리아지(생명 직결도 → 시간 민감도 → 임무 파급효과 순 정렬), 듀얼 카메라 병렬 제어, GPS 재밍 대비 비전 항법 전환, 셀룰러↔위성 링크 핫스탠바이를 하나의 오퍼레이터 콘솔로 설계하고 실물 UGV·VTOL로 시연했습니다.",
        en: "Designed a single operator console combining natural-language command (sentence-to-control-sequence), AI triage (life criticality → time sensitivity → mission impact), parallel dual-camera control, vision-based navigation fallback for GPS jamming, and cellular-satellite link hot-standby — demoed with a real UGV and VTOL.",
      },
    },
    team: {
      ko: "SUPPORTY 2인 팀 (하드웨어·운용 리드 / 기획·소프트웨어)",
      en: "SUPPORTY, two-person team (hardware & operations lead / planning & software)",
    },
    role: {
      ko: "기획 · 프론트엔드 | 오퍼레이터 콘솔 기획, 데모 시나리오 설계, 콘솔·랜딩 페이지 프론트엔드 구현",
      en: "Planning & Frontend | Operator console design, demo scenario design, console & landing page frontend",
    },
    tags: {
      ko: ["Defense Tech", "AI 코파일럿", "자연어 지휘", "무인체계 통제"],
      en: ["Defense Tech", "AI Copilot", "NL Command", "Unmanned Systems"],
    },
    highlights: {
      ko: [
        "자산 1대당 조종사 1명이 필요한 선형 인력 구조를 '1인 오퍼레이터 + AI 코파일럿' 통제 구조로 재설계했습니다.",
        "긴급 요청을 생명 직결도 → 시간 민감도 → 임무 파급효과 순으로 정렬하는 AI 트리아지 큐를 기획했습니다.",
        "\"전진 5초\" 같은 자연어 명령을 실제 제어 시퀀스로 변환하는 지휘 UX를 설계했습니다.",
        "72시간 안에 실물 UGV·VTOL 연동 라이브 콘솔, 공개 랜딩 페이지, 기획서까지 완성해 시연했습니다.",
        "Oregon UAS Accelerator 상을 수상해 스타트업 액셀러레이터 후속 지원 과정에 선정되었습니다.",
      ],
      en: [
        "Redesigned the one-pilot-per-asset staffing model into a single-operator-plus-AI-copilot control structure.",
        "Planned an AI triage queue ordering urgent requests by life criticality, time sensitivity, and mission impact.",
        "Designed a command UX translating natural-language orders like 'forward 5 seconds' into control sequences.",
        "Shipped a live console wired to a real UGV & VTOL, a public landing page, and a proposal deck within 72 hours.",
        "Won the Oregon UAS Accelerator award, earning selection into the accelerator's follow-on startup support program.",
      ],
    },
    proof: {
      ko: [
        "군 도메인의 제약을 서비스 범위 설계로 풀었습니다 — 작전 판단은 군에, 우선순위·배분·실행은 서비스에.",
        "AI를 기능 장식이 아니라 인지 과부하라는 병목을 푸는 구조(트리아지·코파일럿)로 사용했습니다.",
        "현장 전문가(특전사 출신 리드)와 협업하며 도메인 지식을 제품 언어로 옮겼습니다.",
      ],
      en: [
        "Resolved military-domain constraints through service-scope design — judgment stays with the military; triage, dispatch, and execution with the service.",
        "Used AI as the structure that removes the cognitive-overload bottleneck, not as decoration.",
        "Translated field expertise into product language, working with a special-forces-veteran lead.",
      ],
    },
    metrics: [
      {
        value: "Award",
        label: {
          ko: "Oregon UAS Accelerator 선정",
          en: "Oregon UAS Accelerator award",
        },
      },
      {
        value: "1 : N",
        label: {
          ko: "1인 오퍼레이터 다중 자산 통제 설계",
          en: "Single-operator multi-asset control",
        },
      },
      {
        value: "Live",
        label: {
          ko: "실물 UGV·VTOL 연동 시연",
          en: "Demo with real UGV & VTOL",
        },
      },
    ],
    caseStudy: {
      title: {
        ko: "Decision Deep Dive | '판단하지 않는 서비스'의 경계 설계",
        en: "Decision Deep Dive | Drawing the Boundary of a Service That Doesn't Judge",
      },
      summary: {
        ko: "민간 서비스가 전장에 들어갈 때 가장 위험한 것은 기능 부족이 아니라 역할의 월권이라고 판단한 사례",
        en: "Deciding that the biggest risk of a civilian service on the battlefield is overreach, not missing features",
      },
      content: {
        ko: "민간 서비스가 군 작전 영역에 들어갈 때 가장 위험한 것은 기능 부족이 아니라 '역할의 월권'이라고 판단했습니다. 그래서 작전 판단과 승인은 군(지휘관·FDC)에 남기고, 서비스는 들어온 요청의 우선순위 분류, 자산 배분, 배송·관측 대행까지만 담당하도록 범위를 명확히 그었습니다. 콜센터가 콜 우선순위를 정하는 것과 같은 '서비스 제공자의 정당한 판단 범위'라는 프레임입니다. 이 경계 덕분에 AI 트리아지의 권고 근거를 화면에 한 줄로 노출하는 UX를 설계할 수 있었고, 심사·질의에서 '작전 판단을 민간이 하는 것 아닌가'라는 가장 어려운 질문에 구조로 답할 수 있었습니다.",
        en: "I judged that the biggest risk of a civilian service entering military operations is role overreach, not missing features. So we drew a hard boundary: operational judgment and approval stay with the military (commander/FDC), while the service handles only request triage, asset allocation, delivery, and observation-by-proxy — the same legitimate scope as a call center prioritizing calls. This boundary enabled a UX that surfaces the AI triage rationale as a single line on screen, and let us answer the hardest judging question — 'isn't a civilian making operational decisions?' — with structure, not rhetoric.",
      },
    },
    sections: [
      {
        id: "console",
        title: {
          ko: "오퍼레이터 콘솔 설계",
          en: "Operator Console Design",
        },
        body: {
          ko: "듀얼 카메라(지상 전면 · 공중 노즈)와 전술 지도, P1~P3 자동 우선순위 Mission Queue, 자산 로스터, 음성 AI 패널을 한 화면에 배치했습니다. 오퍼레이터는 한 번에 한 자산에 집중하고, AI가 이륙·순항·대기 같은 저위험 구간을 맡다가 험로·관측·회피처럼 인간이 필요한 순간에만 제어권을 핸드오버합니다.",
          en: "One screen combines dual camera feeds (ground front / aerial nose), a tactical map, a P1-P3 auto-prioritized mission queue, an asset roster, and a voice-AI panel. The operator focuses on one asset at a time while the AI manages low-risk phases (takeoff, cruise, loiter) and hands control back only when a human is needed — rough terrain, observation, evasion.",
        },
      },
    ],
    artifacts: {
      ko: ["기획서 PDF", "라이브 오퍼레이터 콘솔", "작전 시나리오 영상", "공개 랜딩 페이지"],
      en: ["Proposal PDF", "Live operator console", "Operation scenario videos", "Public landing page"],
    },
    interviewQuestions: {
      ko: [
        "왜 전투 자동화가 아니라 작전지속지원을 서비스 범위로 선택했나요?",
        "1인 다중 자산 통제에서 오퍼레이터의 인지 과부하를 어떤 설계로 줄였나요?",
        "민간 서비스가 작전 판단을 하지 않도록 경계를 어떻게 설계했나요?",
      ],
      en: [
        "Why did you scope the service to contested logistics rather than combat automation?",
        "How did your design reduce operator cognitive overload in one-to-many control?",
        "How did you draw the boundary so a civilian service never makes operational judgments?",
      ],
    },
    heroImage: "/projects/supporty/console-live.webp",
    media: {
      presentationHref: "https://supporty-d4d.github.io/assets/supporty_proposal.pdf",
      title: {
        ko: "발표 자료 / 기획서",
        en: "Proposal Deck",
      },
      presentationLabel: {
        ko: "기획서 PDF 보기",
        en: "View proposal (PDF)",
      },
    },
    screenshots: [
      {
        src: "/projects/supporty/console-live.webp",
        alt: {
          ko: "SKYFLEET 오퍼레이터 콘솔 — 듀얼 카메라, 전술 지도, AI 트리아지 Mission Queue, 음성 AI 패널",
          en: "SKYFLEET operator console — dual cameras, tactical map, AI triage mission queue, voice-AI panel",
        },
      },
      {
        src: "/projects/supporty/vtol-heewing-t2.webp",
        alt: {
          ko: "공중 자산 — Heewing T2 VTOL 수직이착륙기 (ArduPlane)",
          en: "Aerial asset — Heewing T2 VTOL (ArduPlane)",
        },
      },
      {
        src: "/projects/supporty/ugv-defender.webp",
        alt: {
          ko: "지상 자산 — 전면 카메라·통신 모듈을 탑재한 UGV 보급 차량",
          en: "Ground asset — UGV resupply vehicle with front camera and comms module",
        },
      },
    ],
    links: {
      github: "https://github.com/supporty-d4d/supporty-d4d.github.io",
      demo: "https://supporty-d4d.github.io/",
    },
  },
  {
    slug: "genwing-live",
    featured: false,
    status: "completed",
    sortDate: "2026-05-16",
    period: {
      ko: "2026.05.16",
      en: "May 16, 2026",
    },
    category: {
      ko: "AI / Hackathon / Prototype",
      en: "AI / Hackathon / Prototype",
    },
    title: {
      ko: "GenWing Live | AI 기반 이벤트 네트워킹 앱",
      en: "GenWing Live | AI-Driven Event Networking App",
    },
    summary: {
      ko: "Genspark Meetup & Hackathon에서 Genspark OpenClaw를 활용해 제작한 AI 네트워킹 웹앱 프로토타입입니다.",
      en: "An AI networking web app prototype built using Genspark OpenClaw at the Genspark Meetup & Hackathon.",
    },
    context: {
      ko: "AI 에이전트를 단순 도구가 아닌 '실행 파트너'로 활용해 아이디어를 고속으로 프로토타입화한 프로젝트입니다.",
      en: "A project that rapidly prototyped an idea by treating AI agents as 'execution partners' rather than mere tools.",
    },
    story: {
      problem: {
        ko: "밋업이나 해커톤 같은 네트워킹 행사에서 참가자들이 서로를 자연스럽게 알아가고 대화를 시작하기 어려운 병목이 존재했습니다.",
        en: "At networking events like meetups or hackathons, there is a bottleneck in naturally getting to know participants and starting conversations.",
      },
      insight: {
        ko: "참가자 프로필을 단순히 나열하는 것이 아니라, 퀴즈와 매칭 인터랙션을 통해 '아이스브레이킹'을 시스템적으로 유도해야 한다고 판단했습니다.",
        en: "Instead of just listing profiles, icebreaking should be systemically induced through quizzes and matching interactions.",
      },
      solution: {
        ko: "참가자 카드, Wing Match, AI 아이스브레이커 흐름을 설계하고, Genspark OpenClaw를 통해 PWA, 모바일 최적화까지 반복 개선했습니다.",
        en: "Designed participant cards, Wing Match, and AI icebreaker flows, iteratively improving with PWA and mobile optimization via Genspark OpenClaw.",
      },
    },
    team: {
      ko: "해커톤 개인 프로젝트",
      en: "Hackathon Solo Project",
    },
    role: {
      ko: "1인 기획·개발 | 문제 정의, UX 설계, 에이전트 워크플로우 구축, 배포",
      en: "Solo planning & development | Problem framing, UX design, agent workflow, and deployment",
    },
    tags: {
      ko: ["Genspark OpenClaw", "AI Agent", "Prototype", "PWA"],
      en: ["Genspark OpenClaw", "AI Agent", "Prototype", "PWA"],
    },
    highlights: {
      ko: [
        "Genspark OpenClaw를 활용해 짧은 시간 안에 아이디어를 실제 작동하는 프로토타입으로 전환했습니다.",
        "참가자 카드, 퀴즈, Wing Match로 이어지는 매끄러운 이벤트 네트워킹 여정을 설계했습니다.",
        "랜딩 페이지부터 베타 데모 모드, PWA, 이미지 최적화까지 포함된 완성도 높은 데모를 구축했습니다.",
        "AI 에이전트를 활용한 고속 프로토타이핑 및 반복 개선 워크플로우의 가능성을 실험했습니다.",
      ],
      en: [
        "Transformed an idea into a functional prototype in a short time using Genspark OpenClaw.",
        "Designed a seamless networking journey with participant cards, quizzes, and Wing Match.",
        "Built a high-fidelity demo including landing pages, beta mode, PWA, and image optimization.",
        "Experimented with rapid prototyping and iterative improvement workflows using AI agents.",
      ],
    },
    proof: {
      ko: [
        "AI 에이전트를 활용해 문제 정의부터 배포까지의 사이클을 극도로 단축하는 역량을 보여줍니다.",
        "해커톤 환경에서 데모 흐름과 튜토리얼 UX를 고려한 제품 설계 능력을 증명했습니다.",
        "모바일 최적화 및 배포 안정성까지 고려한 프로토타이핑 실행력을 입증했습니다.",
      ],
      en: [
        "Demonstrated the ability to drastically shorten the cycle from problem framing to deployment using AI agents.",
        "Proven product design skills considering demo flows and tutorial UX in a hackathon environment.",
        "Shown execution power in prototyping, accounting for mobile optimization and deployment stability.",
      ],
    },
    metrics: [
      {
        value: "Rapid",
        label: {
          ko: "고속 프로토타이핑",
          en: "Rapid Prototyping",
        },
      },
      {
        value: "OpenClaw",
        label: {
          ko: "에이전트 워크플로우",
          en: "Agent Workflow",
        },
      },
      {
        value: "PWA",
        label: {
          ko: "모바일 최적화 완료",
          en: "Mobile Optimized",
        },
      },
    ],
    caseStudy: {
      title: {
        ko: "Prototyping with AI Agent | 모두가 개발자가 되는 시대의 실행력",
        en: "Prototyping with AI Agent | Execution in the Age of Everyone as a Developer",
      },
      summary: {
        ko: "AI 에이전트를 활용해 아이디어를 단시간에 실제 작동하는 프로토타입으로 구체화한 실험",
        en: "An experiment in materializing ideas into functional prototypes in a short time using AI agents.",
      },
      content: {
        ko: "Genspark Meetup & Hackathon에 참여하며 AI가 단순한 답변 도구를 넘어, 실제 업무와 서비스 제작 흐름을 수행하는 실행 파트너가 될 수 있다는 점을 실험했습니다. '모두가 이미 개발자다'라는 메시지에 영감을 받아, Genspark OpenClaw를 활용해 짧은 시간 안에 랜딩 페이지, 튜토리얼, 베타 데모 모드, 모바일 최적화, PWA 설정까지 반복 개선하는 워크플로우를 구축했습니다. 이는 AI를 단순히 사용하는 수준을 넘어, 리서치부터 배포까지 하나의 워크플로우로 연결하는 방식의 가능성을 보여준 사례입니다.",
        en: "Participating in the Genspark Meetup & Hackathon, I experimented with AI as an execution partner that performs actual tasks and service creation flows. Inspired by the message 'Everyone is already a developer,' I used Genspark OpenClaw to build a workflow for iteratively improving landing pages, tutorials, beta modes, mobile optimization, and PWA settings in a short time. This case demonstrates the potential of connecting everything from research to deployment into a single workflow using AI agents.",
      },
    },
    heroImage: "/projects/genwing/og-banner.webp",
    links: {
      github: "https://github.com/jang961111-hash/genwing-live",
    },
  },
  {
    slug: "dailylog",
    featured: true,
    status: "completed",
    sortDate: "2026-04-13",
    period: {
      ko: "2026.02 - 2026.04",
      en: "Feb 2026 - Apr 2026",
    },
    category: {
      ko: "SSAFY 특화 프로젝트",
      en: "SSAFY specialized project",
    },
    title: {
      ko: "DailyLog | AI 기반 회고 및 의사결정 지원 서비스",
      en: "DailyLog | AI-Driven Reflection & Decision Support",
    },
    summary: {
      ko: "사용자가 매일 기록을 지속하기 어려운 문제를 '입력 부담'과 '회고 흐름 단절'로 정의하고, AI 질문 흐름을 통해 해결한 서비스입니다.",
      en: "A service that solves user retention issues by defining the problem as 'input friction' and 'broken reflection flows', using AI-driven questioning.",
    },
    context: {
      ko: "사용자 행동 문제를 기술적 구조(AI 질문 흐름)로 해결하고, SSAFY 특화 프로젝트 우수상을 수상하며 성과를 입증한 프로젝트입니다.",
      en: "A project that proved its impact by solving behavioral issues through technical structures (AI flows) and winning the SSAFY Excellence Award.",
    },
    story: {
      problem: {
        ko: "기존의 회고 방식은 사용자에게 막연한 빈 화면을 제시하여 심리적 입력 부담이 컸고, 기록이 단발성으로 끝나 실질적인 행동 변화로 이어지지 못했습니다.",
        en: "Traditional journaling presents a daunting blank screen, leading to high psychological friction and failing to turn records into actual behavior change.",
      },
      insight: {
        ko: "병목은 '무엇을 써야 할지 모르는 상태'에 있으며, AI가 적절한 시점에 구조화된 질문을 던짐으로써 해결할 수 있다고 판단했습니다.",
        en: "The bottleneck is the state of 'not knowing what to write'. I realized this could be solved by having AI ask structured questions at the right moment.",
      },
      solution: {
        ko: "SenseVoice를 활용한 음성 입력, Thompson Sampling 기반 추천 로직, pgvector를 이용한 벡터 검색을 조합하여 매끄러운 회고 및 행동 추천 흐름을 설계했습니다.",
        en: "Designed a seamless reflection and action-recommendation flow combining SenseVoice for voice input, Thompson Sampling for recommendations, and pgvector for search.",
      },
    },
    team: {
      ko: "SSAFY 특화 프로젝트 팀 (6인)",
      en: "SSAFY specialized-project team (6 members)",
    },
    role: {
      ko: "PM · 프론트엔드 | 문제 정의, 사용자 여정 설계, 기능 우선순위 조율, 화면 구현, 발표",
      en: "PM & Frontend | Problem framing, user journey design, prioritization, UI implementation, and presentation",
    },
    tags: {
      ko: ["AI 회고", "추천 시스템", "서비스 기획", "PM"],
      en: ["AI reflection", "Recommendation", "Product planning", "PM"],
    },
    highlights: {
      ko: [
        "기록 지속 실패의 원인을 '심리적 입력 부담'과 '회고 구조의 부재'로 재정의했습니다.",
        "사용자의 발화를 Event, Emotion, Cause 등 7가지 슬롯으로 구조화하여 기록 편의성을 높였습니다.",
        "기록을 바탕으로 '내일 바로 실행 가능한 행동 1개'를 추천하여 회고와 실행을 연결했습니다.",
        "SSAFY 14기 특화 프로젝트 우수상을 수상했습니다.",
      ],
      en: [
        "Reframed recording failure as 'psychological friction' and 'lack of structure'.",
        "Increased input convenience by structuring day into 7 slots (Event, Emotion, Cause, etc.).",
        "Connected reflection to action by recommending 'one immediate task for tomorrow'.",
        "Won the Excellence Award at SSAFY 14th Specialized Project.",
      ],
    },
    proof: {
      ko: [
        "사용자 행동 문제를 기술적 구조(AI 질문 흐름)로 해결했습니다.",
        "인지적 부하를 줄이는 슬롯 기반 질문 엔진을 설계하여 기획 역량을 증명했습니다.",
        "팀 내 기획 방향을 일관되게 조율하는 PM 역량을 증명했습니다.",
      ],
      en: [
        "Solved behavioral problems through technical structures (AI flows).",
        "Demonstrated planning skills by designing a slot-based engine to reduce cognitive load.",
        "Proven PM skills in aligning team direction consistently.",
      ],
    },
    metrics: [
      {
        value: "Award",
        label: {
          ko: "특화 프로젝트 우수상",
          en: "SSAFY Excellence Award",
        },
      },
      {
        value: "3 min",
        label: {
          ko: "평균 기록 시간 단축",
          en: "Avg. Recording Time",
        },
      },
      {
        value: "Slot",
        label: {
          ko: "동적 질문 엔진 설계",
          en: "Dynamic Query Engine",
        },
      },
    ],
    caseStudy: {
      title: {
        ko: "Decision Deep Dive | 의지가 아닌 '구조'로 해결하는 기록의 병목",
        en: "Decision Deep Dive | Solving Friction with Structure, Not Will",
      },
      summary: {
        ko: "막연한 빈 화면이 주는 인지적 부하를 '슬롯 기반 질문 엔진'으로 해결한 사례",
        en: "Reducing cognitive load of blank screens through a slot-based query engine",
      },
      content: {
        ko: "일기 지속 실패의 본질을 사용자의 '의지 부족'이 아닌, 막연한 빈 화면이 주는 '인지적 부하(Cognitive Load)'로 정의했습니다. 이를 해결하기 위해 AI가 먼저 질문을 던지는 3~5턴의 가이드형 UX를 설계했습니다. 특히 LLM이 매번 일관된 질문을 던지지 못하는 문제를 해결하기 위해, 필수 정보(사건, 감정, 원인 등)를 '슬롯'으로 관리하고 부족한 정보만 골라 질문하는 '슬롯 기반 동적 질문 엔진'을 기획하여 기록 완료율과 데이터의 질을 동시에 잡았습니다.",
        en: "I defined the failure of journaling not as a 'lack of will', but as the 'cognitive load' of a blank screen. To solve this, I designed a 3-5 turn guided UX where AI initiates the conversation. To overcome the inconsistency of LLM responses, I devised a 'slot-based dynamic query engine' that manages essential data (Event, Emotion, Cause) as slots and selectively asks for missing information, successfully improving both completion rates and data quality.",
      },
    },
    sections: [
      {
        id: "architecture",
        title: {
          ko: "AI 회고 파이프라인 구조",
          en: "AI Reflection Pipeline",
        },
        body: {
          ko: "음성 입력부터 행동 추천까지의 데이터 흐름입니다. SenseVoice 음성 입력으로 빈 화면의 입력 부담을 낮추고, 슬롯 기반 질문 엔진이 비어 있는 정보만 골라 3~5턴의 가이드형 질문을 던집니다. 완성된 회고는 pgvector에 벡터로 저장되어 유사한 과거 기록을 소환하고, Thompson Sampling이 실행 피드백을 반영해 '내일 실행할 행동 1개'를 추천합니다.",
          en: "The data flow from voice input to action recommendation. SenseVoice lowers the friction of a blank page, the slot-based query engine asks 3-5 guided questions targeting only missing slots, completed entries are stored as vectors in pgvector to recall similar past reflections, and Thompson Sampling recommends one actionable task for tomorrow, tuned by execution feedback.",
        },
        diagram: "dailylog-pipeline",
      },
      {
        id: "strategy",
        title: {
          ko: "제품 전략 (Product Strategy)",
          en: "Product Strategy",
        },
        body: {
          ko: "AI가 단순히 글을 대신 써주는 것이 아니라, 사용자가 스스로 생각하고 기록할 수 있도록 '질문'을 던지는 비서 역할을 하도록 설계했습니다. 이는 사용자의 자아 효능감을 높이고 기록의 질을 개선하는 핵심 전략이었습니다.",
          en: "Instead of having AI just write for the user, I designed it as an assistant that 'asks' questions to help the user reflect. This strategy was key to increasing user efficacy and improving record quality.",
        },
      },
    ],
    artifacts: {
      ko: ["와이어프레임", "추천 흐름 설계서", "AI 상호작용 설계", "최종 UI"],
      en: ["Wireframes", "Recommendation logic notes", "AI interaction design", "Final UI"],
    },
    interviewQuestions: {
      ko: [
        "기록 지속 실패를 왜 의지 문제가 아니라 입력 부담과 회고 구조 문제로 정의했나요?",
        "AI 질문 흐름에서 사용자가 스스로 회고한다고 느끼게 만들기 위해 어떤 기준을 세웠나요?",
        "SenseVoice, Thompson Sampling, pgvector를 서비스 경험과 어떻게 연결했나요?",
      ],
      en: [
        "Why did you define journaling failure as input friction and reflection-structure issues rather than a willpower problem?",
        "What criteria did you use to make AI questioning feel like guided self-reflection rather than automation?",
        "How did you connect SenseVoice, Thompson Sampling, and pgvector to the service experience?",
      ],
    },
    heroImage: "/projects/dailylog/award-3rd-place.jpg",
    media: {
      presentationHref: "/projects/dailylog/dailylog-final-presentation.pptx",
      title: {
        ko: "발표 자료",
        en: "Presentation",
      },
      presentationLabel: {
        ko: "최종 발표자료 다운로드",
        en: "Download final presentation",
      },
    },
    screenshots: [
      {
        src: "/projects/dailylog/app-home.webp",
        alt: {
          ko: "홈 화면 — 오늘의 기록과 추천 행동",
          en: "Home — today's log and recommended action",
        },
      },
      {
        src: "/projects/dailylog/app-diary-ai.webp",
        alt: {
          ko: "AI 질문 흐름 기반 회고 작성 화면",
          en: "AI-guided reflection writing flow",
        },
      },
      {
        src: "/projects/dailylog/app-diary-photo.webp",
        alt: {
          ko: "사진과 함께 기록하는 다이어리 화면",
          en: "Diary entry with photo attachments",
        },
      },
      {
        src: "/projects/dailylog/app-runtime.webp",
        alt: {
          ko: "실제 구동 화면 — 기록에서 행동 추천까지",
          en: "Runtime — from logging to action recommendation",
        },
      },
      {
        src: "/projects/dailylog/design-reco-rating.webp",
        alt: {
          ko: "Figma 시안 — 어제 추천받은 활동을 별점으로 평가 (추천 피드백 루프 입력)",
          en: "Figma design — rating yesterday's recommended activity (feedback input for the recommendation loop)",
        },
      },
      {
        src: "/projects/dailylog/design-diary-result.webp",
        alt: {
          ko: "Figma 시안 — 일기 결과 페이지 (다이어리 감성 컨셉)",
          en: "Figma design — diary result page (journal-inspired visual concept)",
        },
      },
    ],
    links: {
      github: "https://github.com/jang961111-hash/daily_log",
      docs: "https://github.com/jang961111-hash/dailylog_page",
    },
  },
  {
    slug: "loggy",
    status: "completed",
    sortDate: "2026-02-15",
    period: {
      ko: "2026.01 - 2026.02",
      en: "Jan 2026 - Feb 2026",
    },
    category: {
      ko: "SSAFY 프로젝트",
      en: "SSAFY project",
    },
    title: {
      ko: "Loggy | 의사결정 기록 및 협업 플랫폼",
      en: "Loggy | Decision Recording & Collaboration Platform",
    },
    summary: {
      ko: "회의와 메신저의 파편화된 논의를 논의, 승인, 기록의 구조로 정립하여 협업 효율을 극대화하는 플랫폼입니다.",
      en: "A platform that maximizes collaboration efficiency by formalizing scattered discussions into Discussion, Approval, and Record structures.",
    },
    context: {
      ko: "GitHub의 Issue·PR·Merge 개념을 일반 협업 흐름에 적용하여 '의사결정의 확실성'을 제공하려 한 시도입니다.",
      en: "An attempt to provide 'decision certainty' by applying GitHub's Issue/PR/Merge concepts to general collaboration flows.",
    },
    story: {
      problem: {
        ko: "회의 후 결정사항이 기록되지 않거나 메신저의 논의가 휘발되어, 나중에 동일한 논의가 반복되는 비효율이 발생하고 있었습니다.",
        en: "Decisions from meetings and messengers were often lost, leading to repetitive discussions and wasted organizational energy.",
      },
      insight: {
        ko: "문제는 기록의 부재보다 '의사결정이 완료되었다는 시스템적 확신'이 없다는 데 있다고 보았습니다.",
        en: "The problem was not just missing records, but a lack of 'systemic certainty' that a decision had been finalized.",
      },
      solution: {
        ko: "WebSocket 기반 실시간 검토 흐름과 구조화된 필터링을 설계해 논의와 승인이 흐름 안에서 이어지게 만들었습니다.",
        en: "Designed a WebSocket-based real-time review flow and structured filtering to ensure discussion and approval stay within the workflow.",
      },
    },
    team: {
      ko: "팀 프로젝트",
      en: "Team project",
    },
    role: {
      ko: "기획 · 프론트엔드 리드 | 서비스 기획, 의사결정 흐름 구조화, 실시간 UI·상태 관리 구조 설계, 화면 구현 리드",
      en: "Planning & Frontend Lead | Service planning, decision flow structuring, real-time UI & state architecture, and frontend lead",
    },
    tags: {
      ko: ["협업 플랫폼", "GitHub 워크플로우", "실시간성", "PM"],
      en: ["Collaboration platform", "GitHub workflow", "Real-time", "PM"],
    },
    highlights: {
      ko: [
        "GitHub의 PR/Merge 개념을 협업 서비스 UX에 성공적으로 이식하여 의사결정 프로세스를 구조화했습니다.",
        "일반 채팅(휘발성)과 핵심 커밋(영구성)의 데이터 생명 주기를 분리하여 정보의 밀도를 높였습니다.",
        "회의의 논의 흐름을 한눈에 파악할 수 있는 Git Graph 기반의 Tree View UI를 기획했습니다.",
        "커밋 내역을 분석하여 Decision Record(결정문)를 자동 생성하는 AI 엔진을 구축했습니다.",
      ],
      en: [
        "Successfully ported GitHub's PR/Merge concepts into collaboration UX to structure decision processes.",
        "Separated data lifecycles between transient chat and permanent commits to increase info density.",
        "Planned and introduced a Git Graph-based Tree View UI to visualize discussion flows.",
        "Built an AI engine that automatically generates Decision Records by analyzing commit history.",
      ],
    },
    proof: {
      ko: [
        "복잡한 협업 문제를 명확한 시스템 구조(Git Metaphor)로 치환하는 역량을 증명했습니다.",
        "데이터의 비즈니스 가치에 따라 보존 전략을 설계하는 데이터 기획력을 보여줍니다.",
        "사용자 페인 포인트(문서화 비용)를 AI 자동화로 해결하는 솔루션 설계 능력을 증명했습니다.",
      ],
      en: [
        "Proven ability to translate complex collaboration issues into clear system structures (Git Metaphor).",
        "Demonstrated data planning skills by designing retention strategies based on business value.",
        "Shown solution design skills by solving user pain points (documentation costs) via AI automation.",
      ],
    },
    metrics: [
      {
        value: "Git-Flow",
        label: {
          ko: "협업 프로세스 구조화",
          en: "Structured Workflow",
        },
      },
      {
        value: "85%",
        label: {
          ko: "AI 요약 데이터 노이즈 감소",
          en: "Reduction in Data Noise",
        },
      },
      {
        value: "Auto",
        label: {
          ko: "결정문 자동 생성 구현",
          en: "Decision Record Automation",
        },
      },
    ],
    artifacts: {
      ko: ["와이어프레임", "시스템 아키텍처", "발표 자료"],
      en: ["Wireframes", "System architecture", "Presentation slides"],
    },
    sections: [
      {
        id: "decision-flow",
        title: {
          ko: "의사결정 흐름 구조",
          en: "Decision Flow Architecture",
        },
        body: {
          ko: "실시간 논의는 회의가 끝나면 휘발되고, INFO · OPINION · TODO 태그를 달아 커밋한 메시지만 영구 보존됩니다. 보존된 커밋은 Git Graph 기반 Tree View에서 검토·승인을 거쳐 Merge로 확정되고, AI가 커밋 내역을 분석해 결정문(Decision Record)을 자동 생성합니다. GitHub의 Issue → Branch → PR → Merge 흐름을 일반 협업의 의사결정 구조로 이식한 설계입니다.",
          en: "Live discussion expires when the meeting ends; only messages committed with INFO, OPINION, or TODO tags persist. Preserved commits go through review and approval in a Git-graph Tree View, are finalized via Merge, and an AI engine automatically drafts a Decision Record from the commit history — porting GitHub's Issue → Branch → PR → Merge flow into general collaboration.",
        },
        diagram: "loggy-decision-flow",
      },
      {
        id: "frontend-architecture",
        title: {
          ko: "프론트엔드 설계 — 서버 기준 단일 소스",
          en: "Frontend Design — Server as the Single Source of Truth",
        },
        body: {
          ko: "React 18 + TypeScript에 Zustand·TanStack Query·Tailwind CSS, WebSocket(STOMP)을 조합해 실시간 협업 화면을 구현했습니다. 실시간 이벤트가 동시에 도착하면 클라이언트 간 UI 상태가 어긋나는 문제가 발생했는데, 로컬 상태를 최소화하고 서버 상태를 기준 단일 소스(Single Source of Truth)로 삼아 클라이언트가 구독하는 구조로 재설계해 다중 사용자 환경에서도 일관된 UI를 유지했습니다. '결정이 필요한 순간'에 최소한의 클릭으로 진입하도록 인터랙션을 단순화한 것도 같은 맥락의 설계 판단입니다.",
          en: "The real-time collaboration UI was built with React 18 + TypeScript, Zustand, TanStack Query, Tailwind CSS, and WebSocket (STOMP). When concurrent real-time events caused UI state to diverge between clients, I minimized local state and redesigned clients to subscribe to server state as the single source of truth, keeping the UI consistent across users. Simplifying interactions so a 'decision moment' is reachable in minimal clicks followed the same design judgment.",
        },
      },
    ],
    caseStudy: {
      title: {
        ko: "Decision Deep Dive | '실시간 소음'을 '영구적 자산'으로 바꾸는 필터링 구조 설계",
        en: "Decision Deep Dive | Filtering 'Real-time Noise' into 'Permanent Assets'",
      },
      summary: {
        ko: "데이터의 완결성보다 '의사결정 근거의 가독성'을 우선순위에 둔 기획적 트레이드오프 사례",
        en: "A strategic trade-off prioritizing 'readability of logic' over data completeness",
      },
      content: {
        ko: "기존 메신저의 문제는 논의 과정이 투명하지 않고 결정 근거가 휘발된다는 것이었습니다. 저는 이를 해결하기 위해 모든 채팅을 저장하는 대신, Git의 커밋(Commit) 개념을 도입했습니다. 일반 채팅은 회의 종료 시 휘발되지만, 사용자가 INFO, OPINION, TODO 등의 태그를 달아 커밋한 메시지만 영구 보존하도록 설계했습니다. 이 과정에서 '모든 대화의 보존'이라는 기술적 완결성보다, '의사결정 핵심 근거의 가독성'이 더 높은 비즈니스 가치라고 판단했습니다. 결과적으로 AI가 요약해야 할 데이터의 노이즈를 85% 이상 제거하여, 매우 정교한 AI 결정문 자동 생성 엔진을 구축할 수 있었습니다.",
        en: "Traditional messengers lack transparency in logic and suffer from volatile decision trails. To solve this, I introduced Git's 'Commit' concept instead of storing every chat. While general chats expire after a meeting, messages tagged as INFO, OPINION, or TODO are permanently archived. I determined that the 'readability of decision logic' held higher business value than the technical completeness of 'storing everything'. Consequently, I reduced data noise for AI summarization by over 85%, enabling a highly precise automated Decision Record engine.",
      },
    },
    interviewQuestions: {
      ko: [
        "왜 협업 의사결정 문제를 단순 문서화 문제가 아니라 시스템적 확신의 부재로 보았나요?",
        "Git의 PR/Merge 구조를 일반 협업 UX로 옮길 때 가장 중요한 판단 기준은 무엇이었나요?",
        "모든 채팅을 저장하지 않고 커밋된 메시지만 보존하는 구조를 선택한 이유는 무엇인가요?",
      ],
      en: [
        "Why did you define the collaboration issue as a lack of systemic certainty rather than just missing documentation?",
        "What was the key criterion when translating Git's PR/Merge structure into general collaboration UX?",
        "Why did you choose to preserve only committed messages instead of storing every chat?",
      ],
    },
    media: {
      videoSrc: "/projects/loggy/loggy-demo.mp4",
      presentationHref: "/projects/loggy/loggy-presentation.pdf",
      title: {
        ko: "발표 자료 / 시연 영상",
        en: "Presentation / Demo Video",
      },
      videoLabel: {
        ko: "시연 영상 보기",
        en: "Watch demo video",
      },
      presentationLabel: {
        ko: "최종 발표자료 다운로드 (PDF)",
        en: "Download final presentation (PDF)",
      },
    },
    links: {},
  },
  {
    slug: "tamna-ai-eye",
    status: "completed",
    sortDate: "2026-02-04",
    period: {
      ko: "2026.02",
      en: "Feb 2026",
    },
    category: {
      ko: "제주 AWS Global Space Challenge 해커톤",
      en: "Jeju AWS Global Space Challenge hackathon",
    },
    title: {
      ko: "Tamna-AI | 재생에너지 기반 분산 데이터센터 입지 분석",
      en: "Tamna-AI | Distributed Data Center Location Analysis",
    },
    summary: {
      ko: "제주 재생에너지 출력 제한 문제를 계통 혼잡과 수요 불일치 문제로 재정의하고, 잉여 전력을 흡수할 수 있는 데이터센터 입지를 분석하는 서비스입니다.",
      en: "A service that reframes Jeju's energy curtailment as a grid mismatch issue and analyzes optimal locations for data centers to absorb surplus power.",
    },
    context: {
      ko: "기술적 난제를 사업 기회로 전환한 기획 중심 프로젝트로, 복합적인 의사결정 문제를 구조화한 사례입니다.",
      en: "A planning-focused project that transformed a technical challenge into a business opportunity by structuring complex decision factors.",
    },
    story: {
      problem: {
        ko: "제주도는 재생에너지 발전량이 과잉되어 출력 제한이 빈번하게 발생하고 있었으나, 이를 해결할 뚜렷한 수요처가 부족했습니다.",
        en: "Jeju Island faced frequent renewable energy curtailment due to oversupply, but lacked clear demand sources to absorb the surplus.",
      },
      insight: {
        ko: "단순한 에너지 저장보다, 에너지를 대량으로 소비하는 데이터센터를 분산 배치하여 계통의 부담을 덜어주는 방식이 경제적이라고 판단했습니다.",
        en: "I determined it was more economical to distribute energy-intensive data centers rather than just focusing on storage, easing grid pressure.",
      },
      solution: {
        ko: "지역별 전력 수급 데이터와 지리 정보를 연동하여 데이터센터 건립 시의 기대 효율을 시각화하는 입지 분석 서비스 구조를 기획했습니다.",
        en: "Planned a structure that visualizes expected efficiency for data center sites by linking regional power data with geographic information.",
      },
    },
    team: {
      ko: "해커톤 팀 프로젝트",
      en: "Hackathon team project",
    },
    role: {
      ko: "기획 담당 | 문제 재정의, 비즈니스 모델 기획, 서비스 구조 설계",
      en: "Planning | Problem reframing, business model design, and service structuring",
    },
    tags: {
      ko: ["에너지 도메인", "입지 분석", "사업 기획", "PM"],
      en: ["Energy domain", "Location analysis", "Business planning", "PM"],
    },
    highlights: {
      ko: [
        "제주 재생에너지 출력 제한 문제를 '에너지-IT 분산 데이터센터 입지 분석' 모델로 재정의했습니다.",
        "기존 재해 분석 기술 자산을 비즈니스 모델 기획으로 연결하여 해커톤 예선/본선을 통과하고 결선에 진출했습니다.",
        "출력 제한이 빈번한 지역에 데이터센터를 분산 배치하여 계통 부담을 줄이는 역발상 구조를 기획했습니다.",
        "지역별 전력 수급 데이터와 지리 정보를 연동한 입지 효율 시각화 모델을 제안했습니다.",
      ],
      en: [
        "Reframed Jeju's energy curtailment as a 'Distributed AI Data Center Siting' business model.",
        "Led product planning to pass prelims/semis and reach the finals of the Jeju AWS Global Space Challenge.",
        "Proposed an inverse approach of distributing AI data centers in high-curtailment areas to ease grid pressure.",
        "Designed a visualization model for siting efficiency by linking regional power data and GIS.",
      ],
    },
    proof: {
      ko: [
        "기술적 난제를 비즈니스 기회로 전환하는 PM의 전략적 사고력을 증명했습니다.",
        "복합적인 공공·에너지 도메인의 문제를 실행 가능한 서비스 구조로 치환하는 역량을 보여줍니다.",
        "기획서 작성을 주도하여 해커톤 전 과정을 통과시키는 기획 리드 역량을 증명했습니다.",
      ],
      en: [
        "Proven strategic thinking in transforming technical challenges into business opportunities.",
        "Demonstrated ability to translate complex public/energy domain issues into actionable structures.",
        "Proven planning lead skills by spearheading documentation that cleared all hackathon stages.",
      ],
    },
    metrics: [
      {
        value: "Finalist",
        label: {
          ko: "해커톤 결선 진출 (기획 리드)",
          en: "Hackathon Finalist",
        },
      },
      {
        value: "Pivot",
        label: {
          ko: "에너지 비즈니스 모델 전환",
          en: "Business Model Pivot",
        },
      },
      {
        value: "GIS",
        label: {
          ko: "입지 분석 알고리즘 기획",
          en: "Siting Logic Design",
        },
      },
    ],
    caseStudy: {
      title: {
        ko: "Decision Deep Dive | 기술적 난제를 사업적 기회로 바꾸는 '기획의 관점 전환'",
        en: "Decision Deep Dive | Pivoting Technical Assets into Business Opportunities",
      },
      summary: {
        ko: "재해 분석 시스템의 기술력을 '에너지 최적화 BM'으로 피벗하여 해커톤 결선에 진출한 사례",
        en: "Reaching hackathon finals by pivoting disaster analysis tech into an energy optimization BM",
      },
      content: {
        ko: "당초 제주도의 위험 지역을 분석하던 기술적 자산(지도 기반 분석 엔진)을 바탕으로, 해커톤 현장에서 제주도의 고질적인 문제인 '재생에너지 출력 제한'에 주목했습니다. 단순히 에너지를 버리는 대신, 전력을 대량으로 소비하는 AI 데이터센터를 출력 제한이 잦은 지역에 분산 배치하여 계통 부담을 줄이는 역발상을 제안했습니다. 이 과정에서 기술적 구현(지도 시각화)과 비즈니스 타당성(전력 수급 최적화) 사이의 연결 고리를 설계하여, 단순한 아이디어를 실행 가능한 '데이터 기반 의사결정 지원 서비스'로 구조화했습니다. 직접 작성한 기획서를 통해 프로젝트의 논리적 완결성을 인정받아 결선 진출의 성과를 거두었습니다.",
        en: "Leveraging our existing disaster analysis engine, I identified Jeju's chronic 'energy curtailment' as a key opportunity during the hackathon. I proposed a counter-intuitive approach: distributing power-hungry AI data centers in areas with frequent curtailment to alleviate grid pressure. I bridged technical visualization with business feasibility, structuring the idea into an actionable 'data-driven decision support service'. By leading the documentation and ensuring logical integrity, I successfully drove the project to the hackathon finals.",
      },
    },
    media: {
      presentationHref: "/projects/tamna/jeju-hackathon-presentation.pptx",
      title: {
        ko: "발표 자료",
        en: "Presentation",
      },
      presentationLabel: {
        ko: "해커톤 발표자료 다운로드",
        en: "Download hackathon presentation",
      },
    },
    links: {
      docs: "/projects/tamna/tamna-proposal.pdf",
      youtube: "", // 사용자 추가 예정
      demo: "",    // 사용자 추가 예정
    },
  },
  {
    slug: "chronicle",
    status: "completed",
    sortDate: "2025-08-23",
    period: {
      ko: "2025.08",
      en: "Aug 2025",
    },
    category: {
      ko: "신한은행 X SSAFY 해커톤",
      en: "Shinhan Bank X SSAFY hackathon",
    },
    title: {
      ko: "Campus Chronicle | 대학생 성장 데이터 기반 금융 서비스",
      en: "Campus Chronicle | Growth Data-Driven Financial Service",
    },
    summary: {
      ko: "대학생의 학습·활동 데이터를 금융 가치와 연결해, 성장 과정을 기반으로 신뢰를 증명하고 금융 혜택을 받는 플랫폼입니다.",
      en: "A platform where students link learning and activity data to financial value, proving trust based on their growth process.",
    },
    context: {
      ko: "금융 이력이 부족한 씬파일러(Thin-filer) 대학생을 위해 활동 기록을 신뢰 데이터로 전환하려 한 서비스 기획 사례입니다.",
      en: "A product planning case aimed at transforming activity records into trust data for 'thin-filer' students lacking financial history.",
    },
    story: {
      problem: {
        ko: "대학생은 소득이나 자산이 없어 금융 서비스를 이용하는 데 제약이 크며, 이들의 잠재력이나 활동 이력은 기존 금융 평가에 반영되지 않았습니다.",
        en: "Students face significant financial barriers due to lack of income or assets, as their potential and activity history are ignored by traditional models.",
      },
      insight: {
        ko: "학업 성취도나 대외 활동 등 '성장 데이터'를 정량화하면 대학생만을 위한 새로운 신용 평가 모델이 가능할 것이라 보았습니다.",
        en: "Quantifying 'growth data' like academic achievement and extracurriculars could enable a new credit model specifically for students.",
      },
      solution: {
        ko: "출결·도서관 이용·소비 내역 같은 비금융 데이터를 '캠퍼스 크레도' 대안신용점수로 환산하고, 스킬 트리와 2D 픽셀 육성 게임(Phaser.js WebView)으로 성장을 시각화하는 React Native 앱을 설계했습니다.",
        en: "Designed a React Native app converting non-financial data (attendance, library use, spending) into a 'Campus Credo' alternative credit score, visualized through skill trees and a 2D pixel companion game (Phaser.js in WebView).",
      },
    },
    team: {
      ko: "팀 언더독 (5인)",
      en: "Team Underdog (5 members)",
    },
    role: {
      ko: "UI/UX 디자인 · 프론트엔드 | Figma로 앱·게임 전체 UI/UX 설계, 디자인 시스템·컴포넌트 관리, React Native 서브 화면(퀘스트·크로니클 피드) 구현",
      en: "UI/UX Design & Frontend | End-to-end app/game UI/UX in Figma, design system & components, React Native sub-screens (quests, chronicle feed)",
    },
    tags: {
      ko: ["핀테크", "성장 데이터", "서비스 기획", "금융 UX"],
      en: ["Fintech", "Growth data", "Product planning", "Financial UX"],
    },
    highlights: {
      ko: [
        "대학생의 금융 소외(씬파일러) 문제를 '증명 가능한 성장 데이터의 부재'로 정의했습니다.",
        "비금융 활동을 '캠퍼스 크레도' 대안신용점수로 환산해 우대금리 등 실질 혜택과 연결하는 구조를 설계했습니다.",
        "노력의 성장을 스킬 트리와 2D 픽셀 캐릭터 육성으로 시각화하는 게이미피케이션 UX를 디자인했습니다.",
        "Figma 디자인 시스템과 React Native 컴포넌트 관리를 담당했습니다 (팀 기획서에 역할 명시).",
      ],
      en: [
        "Defined student financial exclusion (thin-filers) as a lack of provable growth data.",
        "Designed the structure converting non-financial activity into a 'Campus Credo' score tied to real benefits like preferential rates.",
        "Designed gamification UX visualizing growth via skill trees and a 2D pixel companion.",
        "Owned the Figma design system and React Native component management (role stated in the team proposal).",
      ],
    },
    proof: {
      ko: [
        "사용자 문제를 금융 비즈니스 구조 내에서 해결하려는 시각을 보여줍니다.",
        "복잡한 평가 과정을 직관적인 사용자 흐름으로 설계하는 역량을 증명합니다.",
      ],
      en: [
        "Shows a perspective of solving user problems within financial business models.",
        "Demonstrates ability to design intuitive flows for complex evaluation processes.",
      ],
    },
    metrics: [
      {
        value: "Credit",
        label: {
          ko: "신용 평가 모델 대안 제시",
          en: "Alternative credit model",
        },
      },
      {
        label: {
          ko: "사용자 여정 설계 완료",
          en: "User journey design complete",
        },
      },
      {
        label: {
          ko: "금융 API 연동 기획",
          en: "Financial API integration planning",
        },
      },
    ],
    artifacts: {
      ko: ["개발 기획서 (11p)", "서비스 흐름도", "ERD·시스템 아키텍처"],
      en: ["Development proposal (11p)", "Service flow diagram", "ERD & system architecture"],
    },
    media: {
      presentationHref: "/projects/chronicle/chronicle-proposal.pdf",
      title: {
        ko: "개발 기획서",
        en: "Development Proposal",
      },
      presentationLabel: {
        ko: "팀 언더독 개발 기획서 보기 (PDF, 11p)",
        en: "View team proposal (PDF, 11p)",
      },
    },
    links: {},
  },
  {
    slug: "jeonju-is-coding-challenge",
    status: "completed",
    sortDate: "2025-09-30",
    period: {
      ko: "2025.09",
      en: "Sep 2025",
    },
    category: {
      ko: "전주 ICT 코딩 챌린지",
      en: "Jeonju ICT Coding Challenge",
    },
    title: {
      ko: "전주 ICT 코딩 챌린지 | 지역 현안 해결 서비스 기획",
      en: "Jeonju ICT Coding Challenge | Regional Issue-Solving Service",
    },
    summary: {
      ko: "지역 관광·사회·환경 문제를 정의하고, 이를 해결할 수 있는 서비스 아이디어를 기능으로 구체화하여 구현한 프로젝트입니다.",
      en: "A project defining regional tourism, social, and environmental issues and materializing them into actionable service features and implementation.",
    },
    team: {
      ko: "팀 프로젝트",
      en: "Team project",
    },
    role: {
      ko: "문제 정의, 서비스 기획, 구현 참여",
      en: "Problem framing, service planning, and implementation support",
    },
    tags: {
      ko: ["지역 현안", "공공 서비스", "기획 및 구현"],
      en: ["Regional issues", "Public service", "Planning & Implementation"],
    },
    highlights: {
      ko: [
        "관광 및 사회 현안을 서비스 아이디어로 빠르게 구체화했습니다.",
        "제한된 시간 내에 핵심 기능을 정의하고 구현까지 완료하는 협업을 경험했습니다.",
      ],
      en: [
        "Rapidly materialized tourism and social issues into service concepts.",
        "Experienced collaboration to define and build core features within a tight deadline.",
      ],
    },
    sections: [
      {
        id: "archive",
        title: {
          ko: "프로젝트 의미",
          en: "Project significance",
        },
        body: {
          ko: "지역 사회의 실질적인 불편함을 기술로 어떻게 해결할 수 있을지 고민하고, 이를 기획과 구현의 관점에서 조율해 본 경험입니다.",
          en: "An experience in pondering how to solve real community pain points with technology and aligning them through planning and execution.",
        },
      },
    ],
    artifacts: {
      ko: ["기획 초안", "발표 자료"],
      en: ["Initial concept draft", "Presentation slides"],
    },
    links: {},
  },
  {
    slug: "ssafy-startup-track",
    featured: false,
    status: "completed",
    sortDate: "2026-05-21",
    period: {
      ko: "2026.03 - 2026.05",
      en: "Mar 2026 - May 2026",
    },
    category: {
      ko: "SSAFY 14기 자율 프로젝트 최종발표",
      en: "SSAFY 14th autonomous project final presentation",
    },
    title: {
      ko: "Promtree | AI 노하우를 만들고 판매하는 플랫폼",
      en: "Promtree | Marketplace for Executable AI Know-how",
    },
    summary: {
      ko: "AI를 잘 쓰는 사람의 노하우를 사용자가 바로 실행할 수 있는 워크플로우 상품으로 제공하는 마켓플레이스입니다.",
      en: "A marketplace that packages expert AI know-how as executable workflow products users can run immediately.",
    },
    context: {
      ko: "F107 유캔두 팀 프로젝트로, 단순 프롬프트 판매가 아니라 프롬프트와 작업 흐름, 수정 노하우를 함께 상품화하는 방향을 검토했습니다.",
      en: "A team project by F107 YouCanDo, exploring how to productize prompts, task flows, and refinement know-how beyond simple prompt sales.",
    },
    story: {
      problem: {
        ko: "AI 도구는 쉬워졌지만 원하는 결과물을 안정적으로 얻기 위해서는 여전히 좋은 프롬프트, 작업 흐름, 수정 노하우가 필요합니다. 이런 노하우는 여러 채널과 개인 경험 속에 흩어져 있고, 기존 프롬프트 마켓은 원문 노출과 복제 위험, 단순 생성 중심의 한계가 있었습니다.",
        en: "AI tools became easier to access, but stable outcomes still require strong prompts, task flows, and refinement know-how. That expertise is scattered across channels, while existing prompt markets expose raw prompts and remain limited to simple generation.",
      },
      insight: {
        ko: "AI가 발전할수록 모델 자체보다 사람이 축적한 실전 노하우와 결과물 설계 능력의 가치가 커질 수 있다고 보았습니다. 핵심은 프롬프트 원문을 파는 것이 아니라, 사용자가 슬롯 값만 입력하면 노하우가 실행되는 구조를 만드는 것이었습니다.",
        en: "As AI improves, the practical know-how and output-design ability accumulated by people can become more valuable. The key was not selling raw prompts, but making know-how executable through slot-based inputs.",
      },
      solution: {
        ko: "템플릿 구매 → 슬롯 입력 → 결과 생성 흐름을 중심으로, 프롬프트 원문은 비공개로 보호하고 사용자는 필요한 입력값만 채워 이미지와 문서 결과물을 생성하는 워크플로우 마켓 구조를 설계했습니다.",
        en: "Centered on the flow of buying a template, filling slots, and generating outputs, we designed a workflow marketplace that hides raw prompts while producing image and document results from user inputs.",
      },
    },
    team: {
      ko: "F107 유캔두 | 6명 팀 프로젝트",
      en: "F107 YouCanDo | 6-person team project",
    },
    role: {
      ko: "AI 모델 관련 구축, 마케팅, 사업/서비스 기획 보조, 발표자료 및 시장/경쟁사 분석 기여, Q&A 대응 준비",
      en: "AI model integration support, marketing, business/service planning support, presentation and market/competitor analysis contribution, Q&A preparation",
    },
    tags: {
      ko: ["Next.js", "FastAPI", "AI Marketplace", "Prompt Engineering", "GA4", "Fabric.js"],
      en: ["Next.js", "FastAPI", "AI Marketplace", "Prompt Engineering", "GA4", "Fabric.js"],
    },
    highlights: {
      ko: [
        "AI 노하우를 실행 가능한 워크플로우 상품으로 전환하는 서비스 방향을 정리했습니다.",
        "프롬프트 원문 비공개, 슬롯 기반 실행, 결과물 생성 흐름을 통해 크리에이터 노하우 보호와 사용자 편의성을 함께 고려했습니다.",
        "템플릿 판매 수수료와 실행 기반 크레딧 모델을 중심으로 수익 구조를 검토했습니다.",
        "GA4 기반 사용자 이탈 분석을 통해 개선 방향을 도출하는 관점을 프로젝트에 반영했습니다.",
      ],
      en: [
        "Defined the service direction of converting AI know-how into executable workflow products.",
        "Balanced creator protection and user convenience through hidden prompts, slot-based execution, and generated outputs.",
        "Reviewed revenue structures around template commission and execution-based credits.",
        "Reflected a GA4-based view of drop-off analysis and product improvement.",
      ],
    },
    metrics: [
      {
        value: "F107",
        label: {
          ko: "SSAFY 14기 자율 프로젝트",
          en: "SSAFY 14th autonomous project",
        },
      },
      {
        value: "Slot",
        label: {
          ko: "템플릿 실행 구조",
          en: "Template execution structure",
        },
      },
      {
        value: "GA4",
        label: {
          ko: "이탈 분석 기반 개선",
          en: "Drop-off analysis",
        },
      },
    ],
    caseStudy: {
      title: {
        ko: "Decision Deep Dive | 프롬프트가 아니라 실행 가능한 AI 노하우를 판매하기",
        en: "Decision Deep Dive | Selling Executable AI Know-how, Not Raw Prompts",
      },
      summary: {
        ko: "문제 정의, 시장성 검토, 크리에이터 보호, 수익모델을 함께 고려한 서비스 기획 사례",
        en: "A planning case that considered problem framing, market viability, creator protection, and revenue models together",
      },
      content: {
        ko: "Promtree를 준비하며 단순히 서비스를 구현하는 것보다 '왜 이 서비스를 만들어야 하는가'를 설득하는 일이 중요하다는 것을 느꼈습니다. 범용 AI 모델은 결과를 만들 수 있지만, 사용자가 원하는 최종 작업물까지 안정적으로 도달하려면 경험에서 나온 작업 흐름과 수정 노하우가 필요합니다. 저는 팀 전체 성과와 별개로 문제 정의, 시장성 검토, AI 노하우 실행 구조, 수익모델, 발표자료와 경쟁사 분석 쪽에 기여했습니다. 이 과정에서 콜드스타트, 공급자/소비자 양면시장, 크리에이터 보호, 실행 비용을 고려한 크레딧 모델 같은 사업적 질문을 함께 다뤘습니다.",
        en: "While preparing Promtree, I realized that persuading people why a service should exist can be as important as implementing it. General-purpose AI models can generate outputs, but stable final work still depends on task flows and refinement know-how accumulated through experience. Separate from the team's overall work, my contribution focused on problem framing, market viability, executable AI know-how structure, revenue model thinking, presentation materials, and competitor analysis. We also had to consider business questions such as cold start, two-sided marketplace dynamics, creator protection, and a credit model tied to execution cost.",
      },
    },
    media: {
      videoSrc: "/projects/promtree/promtree-demo.mp4",
      presentationHref: "/projects/promtree/promtree-final-presentation.pptx",
      title: {
        ko: "발표 자료 / 시연 영상",
        en: "Presentation / Demo Video",
      },
      videoLabel: {
        ko: "시연 영상 보기",
        en: "Watch demo video",
      },
      presentationLabel: {
        ko: "최종 발표자료 다운로드",
        en: "Download final presentation",
      },
    },
    sections: [
      {
        id: "overview",
        title: {
          ko: "프로젝트 개요",
          en: "Project Overview",
        },
        body: {
          ko: "Promtree는 AI 노하우를 만들고 판매하는 플랫폼입니다. 사용자는 마켓에서 템플릿을 구매하고 필요한 슬롯 값을 입력하면, 숨겨진 프롬프트와 작업 흐름을 기반으로 이미지 또는 문서 결과물을 생성할 수 있습니다.",
          en: "Promtree is a platform for creating and selling AI know-how. Users buy templates from the marketplace, fill in required slots, and generate image or document outputs through hidden prompts and workflow logic.",
        },
      },
      {
        id: "features",
        title: {
          ko: "주요 기능",
          en: "Key Features",
        },
        body: {
          ko: "AI 노하우/템플릿 마켓플레이스, 슬롯 기반 템플릿 실행, 프롬프트 원문 비공개, 이미지 및 문서 결과물 생성, AI 문서 편집과 객체별 지침 부여, 커뮤니티/협업 기반 공유와 피드백, GA4 기반 사용자 이탈 분석을 주요 기능으로 다뤘습니다.",
          en: "Core features included an AI know-how/template marketplace, slot-based template execution, hidden raw prompts, image and document generation, AI document editing with object-level instructions, community feedback, and GA4-based drop-off analysis.",
        },
      },
      {
        id: "stack",
        title: {
          ko: "기술 스택",
          en: "Tech Stack",
        },
        body: {
          ko: "Frontend는 Next.js, TypeScript, Tailwind CSS, Zustand, TanStack Query를 사용하고, Backend는 FastAPI와 PostgreSQL 기반으로 구성했습니다. AI 영역은 OpenAI, Claude, Gemini 등 멀티모델 연동 구조를 고려했으며, Canvas/Editor 경험에는 Fabric.js를 활용했습니다.",
          en: "The frontend used Next.js, TypeScript, Tailwind CSS, Zustand, and TanStack Query, while the backend was based on FastAPI and PostgreSQL. The AI layer considered multi-model integration with OpenAI, Claude, and Gemini, and the canvas/editor experience used Fabric.js.",
        },
      },
      {
        id: "concerns",
        title: {
          ko: "기술적/기획적 고민",
          en: "Technical and Product Considerations",
        },
        body: {
          ko: "기술적으로는 멀티모델 API 연동, 슬롯 기반 실행 구조, 문서 편집 경험, 사용자 이탈 분석을 함께 고려해야 했습니다. 사업적으로는 고품질 템플릿 확보, 공급자와 소비자 양면시장 형성, 크리에이터 노하우 보호, 실행 기반 수익모델 설계가 중요했습니다.",
          en: "Technically, the service required multi-model API integration, slot-based execution, document editing experience, and user drop-off analysis. From a business perspective, high-quality templates, two-sided marketplace formation, creator protection, and execution-based monetization were critical.",
        },
      },
      {
        id: "retrospective",
        title: {
          ko: "최종발표 회고",
          en: "Final Presentation Retrospective",
        },
        body: {
          ko: "최종발표를 마치며, 단순히 서비스를 구현하는 것보다 '왜 이 서비스를 만들어야 하는가'를 설득하는 일이 중요하다는 것을 느꼈습니다. Promtree는 단순 프롬프트 마켓이 아니라, AI를 잘 쓰는 사람의 노하우를 실행 가능한 상품으로 바꾸려는 시도였습니다.",
          en: "After the final presentation, I felt that explaining why the service should exist was as important as building it. Promtree was not just a prompt marketplace, but an attempt to turn expert AI usage know-how into executable products.",
        },
      },
      {
        id: "learnings",
        title: {
          ko: "배운 점",
          en: "What I Learned",
        },
        body: {
          ko: "개발자에게도 문제 정의와 설득력이 중요하다는 점을 배웠습니다. AI 서비스는 모델 호출만으로 완성되지 않고, 사용자 흐름과 결과물 품질 관리가 함께 설계되어야 합니다. 팀 프로젝트에서는 기능 구현뿐 아니라 발표, 문서화, 시장 분석도 중요한 산출물이라는 점을 체감했습니다.",
          en: "I learned that problem framing and persuasion matter for developers as well. AI services are not completed by model calls alone; user flows and output quality control must be designed together. In a team project, presentation, documentation, and market analysis are also important deliverables.",
        },
      },
      {
        id: "next",
        title: {
          ko: "향후 개선 방향",
          en: "Next Improvements",
        },
        body: {
          ko: "고품질 Seed 템플릿 확보, 크리에이터 온보딩 개선, 검색/추천 기능 고도화, 실행 결과 품질 평가, 영상/음악 등 생성 영역 확장, B2B 맞춤형 워크플로우 확장이 다음 개선 방향입니다.",
          en: "Next improvements include securing high-quality seed templates, improving creator onboarding, advancing search and recommendation, evaluating output quality, expanding into video/music generation, and building B2B custom workflows.",
        },
      },
    ],
    artifacts: {
      ko: ["최종 발표자료", "시연 영상", "시장/경쟁사 분석", "수익모델 검토", "Q&A 대응 준비"],
      en: ["Final presentation", "Demo video", "Market/competitor analysis", "Revenue model review", "Q&A preparation"],
    },
    interviewQuestions: {
      ko: [
        "Promtree를 단순 프롬프트 마켓이 아니라 실행 가능한 AI 노하우 상품으로 정의한 이유는 무엇인가요?",
        "프롬프트 원문 비공개와 슬롯 기반 실행 구조가 크리에이터 보호와 사용자 편의성을 어떻게 함께 만족시키나요?",
        "콜드스타트, 양면시장, 크레딧 모델 같은 사업적 질문을 어떻게 서비스 구조에 반영했나요?",
      ],
      en: [
        "Why did you define Promtree as executable AI know-how rather than a simple prompt marketplace?",
        "How do hidden prompts and slot-based execution balance creator protection with user convenience?",
        "How did you reflect business questions such as cold start, two-sided marketplace dynamics, and credit models in the service structure?",
      ],
    },
    links: {
      github: "https://github.com/jang961111-hash/0407",
      docs: "/projects/promtree/promtree-final-presentation.pptx",
    },
    seo: {
      title: {
        ko: "Promtree | AI 노하우를 만들고 판매하는 플랫폼",
        en: "Promtree | Marketplace for Executable AI Know-how",
      },
      description: {
        ko: "SSAFY 14기 자율 프로젝트로 진행한 AI 노하우 기반 워크플로우 마켓플레이스 Promtree의 개발 및 최종발표 회고",
        en: "A final presentation retrospective for Promtree, an AI know-how based workflow marketplace built during SSAFY 14th autonomous project.",
      },
      keywords:
        "Promtree, 프롬트리, SSAFY, AI Marketplace, Prompt Engineering, Workflow, FastAPI, Next.js, Generative AI",
    },
  },
  {
    // TODO: [자료 보완 필요] 현재 로컬 자료 부족으로 이력서 기반 추론 작성됨. 
    // 실제 기획서 발견 시 '고객 여정 5단계' 명칭 및 '정체 구간 알림' 로직 세부 수치 확인 요망.
    slug: "sales-crm",
    status: "completed",
    sortDate: "2025-12-30",
    period: {
      ko: "2025.12",
      en: "Dec 2025",
    },
    category: {
      ko: "SSAFY 관통 프로젝트",
      en: "SSAFY integrated project",
    },
    title: {
      ko: "S.A.L.E.S | 고객 기반 CRM 프로젝트",
      en: "S.A.L.E.S | Customer-Centered CRM Project",
    },
    summary: {
      ko: "영업 리드 관리의 파편화 문제를 '고객 여정 5단계'와 '칸반 스타일 파이프라인'으로 구조화하여 해결한 CRM 프로젝트입니다.",
      en: "A CRM project that structured fragmented lead management into a '5-stage customer journey' and 'Kanban-style pipeline'.",
    },
    context: {
      ko: "단순 기능 구현을 넘어, 영업 담당자와 고객 간의 '운영 흐름'을 시스템으로 매끄럽게 연결한 비즈니스 구조화 사례입니다.",
      en: "Beyond feature building, a business structuring case that seamlessly connected operational flows between sales and customers.",
    },
    story: {
      problem: {
        ko: "영업 과정이 파편화되어 리드(Lead) 이탈 지점 파악이 어려웠고, 영업 사원의 '다음 액션'에 대한 가이드가 부재했습니다.",
        en: "Fragmented sales processes made it hard to identify lead drop-off points, and there was no clear guide for the 'next action' for sales reps.",
      },
      insight: {
        ko: "CRM의 본질은 데이터 축적이 아니라 '영업 사원의 행동 유도'에 있다고 정의하고, 직관적인 시각화가 핵심이라 판단했습니다.",
        en: "I defined the essence of CRM as 'driving sales action', not just data accumulation, and prioritized intuitive visualization.",
      },
      solution: {
        ko: "고객 여정을 5단계로 구분한 칸반 보드를 도입하고, 특정 단계 정체 시 시각적 경고를 주는 '액션 유도형 파이프라인'을 설계했습니다.",
        en: "Introduced a 5-stage Kanban board and designed an 'action-oriented pipeline' that provides visual alerts for stalled leads.",
      },
    },
    team: {
      ko: "SSAFY 관통 프로젝트 팀",
      en: "SSAFY integrated-project team",
    },
    role: {
      ko: "기획 담당 | 고객 여정 5단계 정의, 파이프라인 UI 설계, 비즈니스 로직 데이터 매핑",
      en: "Planning | Defining 5-stage journey, pipeline UI design, mapping business logic to data models",
    },
    tags: {
      ko: ["CRM", "고객 여정", "비즈니스 기획", "PM"],
      en: ["CRM", "Customer Journey", "Business Planning", "PM"],
    },
    highlights: {
      ko: [
        "리드(Lead)부터 계약까지의 영업 프로세스를 '고객 여정 5단계' 모델로 구조화했습니다.",
        "영업 사원의 다음 행동을 제안하는 칸반 기반의 파이프라인 UI를 기획하여 운영 효율을 높였습니다.",
        "비즈니스 요구사항을 실제 소프트웨어의 상태 관리 및 데이터 모델로 정교하게 매핑했습니다.",
      ],
      en: [
        "Structured the sales process from Lead to Contract into a '5-stage customer journey' model.",
        "Improved operational efficiency by planning a Kanban-based pipeline UI that suggests the next sales action.",
        "Precisely mapped business requirements to software state management and data models.",
      ],
    },
    proof: {
      ko: [
        "비즈니스 요구사항을 기능 명세로 구체화하는 PM의 구조화 역량을 증명했습니다.",
        "사용자(영업 사원)의 과업 중심으로 시스템 UI/UX를 설계할 수 있음을 보여줍니다.",
        "복잡한 운영 흐름을 단순하고 명확한 데이터 모델로 치환하는 능력을 증명했습니다.",
      ],
      en: [
        "Demonstrated PM's structuring ability to translate business needs into feature specs.",
        "Shown capability to design system UI/UX centered on user (sales rep) tasks.",
        "Proven ability to translate complex operational flows into simple, clear data models.",
      ],
    },
    metrics: [
      {
        value: "5-Stage",
        label: {
          ko: "고객 여정 파이프라인 정의",
          en: "Customer Journey Pipeline",
        },
      },
      {
        value: "Kanban",
        label: {
          ko: "영업 파이프라인 뷰 도입",
          en: "Sales Pipeline View",
        },
      },
      {
        value: "Alert",
        label: {
          ko: "리드 정체 알림 로직 설계",
          en: "Lead Stagnation Alerts",
        },
      },
    ],
    caseStudy: {
      title: {
        ko: "Decision Deep Dive | 데이터 축적이 아닌 '행동 유도'를 위한 CRM 설계",
        en: "Decision Deep Dive | Designing CRM for Action, Not Just Data",
      },
      summary: {
        ko: "현장에서 외면받는 CRM의 문제를 '시각적 파이프라인'과 '액션 가이드'로 해결한 사례",
        en: "Solving CRM adoption issues with visual pipelines and action guides",
      },
      content: {
        ko: "기존 CRM 시스템들이 데이터 입력의 번거로움 때문에 현장에서 외면받는 점에 주목했습니다. 저는 CRM의 본질을 '관리'가 아닌 영업 사원의 '다음 행동 유도'로 정의했습니다. 이를 위해 단순히 텍스트 리스트를 나열하는 대신, 영업 단계를 시각화한 칸반 보드를 도입했습니다. 특히 리드가 특정 단계에서 정체될 경우 시각적 피드백을 주는 로직을 기획하여, PM으로서 비즈니스 요구사항을 사용자 과업 중심으로 풀어내는 역량을 발휘했습니다.",
        en: "I noted that traditional CRM systems are often ignored due to cumbersome data entry. I defined the essence of CRM not as 'management', but as 'driving the sales rep's next action'. Instead of listing rows of text, I introduced a Kanban board to visualize sales stages. By planning logic that provides visual feedback for stalled leads, I demonstrated my ability to resolve business requirements through user-task-oriented design.",
      },
    },
    artifacts: {
      ko: ["고객 여정 맵", "파이프라인 와이어프레임", "기능 명세서"],
      en: ["Customer Journey Map", "Pipeline Wireframes", "Feature Specs"],
    },
    links: {},
  },
];
