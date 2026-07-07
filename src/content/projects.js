import { getProjectPath, getLocaleRootPath } from "../utils/localeRouting";

const localizeValue = (value, lang) => {
  if (Array.isArray(value)) {
    return value.map((item) => localizeValue(item, lang));
  }

  if (typeof value === "string" || typeof value === "number" || value == null) {
    return value;
  }

  if (value[lang] || value.ko || value.en) {
    return value[lang] ?? value.ko ?? value.en ?? "";
  }

  if (Object.prototype.hasOwnProperty.call(value, "value") || value.label) {
    return [value.value, localizeValue(value.label, lang)]
      .filter(Boolean)
      .join(" ");
  }

  return value;
};

export const projectUiCopy = {
  ko: {
    sectionTitle: "Core Projects",
    sectionIntro:
      "사용자의 반복적인 불편, 기록되지 않는 의사결정, 재생에너지 수요 불일치 등 서로 다른 문제를 서비스 구조로 해결하려 한 경험입니다.",
    featuredKicker: "Flagship case",
    featuredContext: "왜 먼저 보여주는가",
    archiveKicker: "Latest archive",
    archiveTitle: "프로젝트 아카이브",
    archiveIntro:
      "진행 중인 항목부터 완료 프로젝트까지, 문제 정의와 서비스 구조화 역량을 보여주는 기록입니다.",
    coreKicker: "Submission focus",
    coreTitle: "제출용 핵심 프로젝트 3",
    coreIntro:
      "문제정의, 수행 역할, 기술 선택, 해결 과정이 면접 질문으로 이어지도록 DailyLog, Loggy, Promtree를 먼저 정리합니다.",
    supportingKicker: "Supporting / Hackathon",
    supportingTitle: "보조 프로젝트 및 해커톤",
    supportingIntro:
      "도메인 확장성, 빠른 실행력, 추가 아이디어를 보여주는 프로젝트는 하단 아카이브로 분리합니다.",
    problemDefinition: "한 줄 문제정의",
    coreContribution: "핵심 기여",
    techStack: "사용 기술",
    resultLearning: "결과 / 배운 점",
    submissionFormat: "SSAFY 제출 구조",
    overview: "프로젝트 개요",
    myRole: "수행 역할",
    solutionProcess: "해결 과정",
    interviewHooks: "면접 질문 포인트",
    viewDetails: "상세 보기",
    readCaseStudy: "케이스 스터디 열기",
    backToProjects: "프로젝트 목록으로 돌아가기",
    period: "기간",
    team: "팀 구성",
    role: "역할",
    status: "상태",
    links: "링크",
    highlights: "핵심 포인트",
    screens: "서비스 화면",
    themes: "키워드",
    detailSections: "세부 설명",
    challenge: "다룬 문제",
    insight: "구조적 인사이트",
    solution: "경험 설계 + 시스템 구조",
    artifacts: "추가 예정 자료",
    artifactEmpty:
      "와이어프레임, 화면 이미지, 코드 링크, 발표 자료를 프로젝트별로 순차적으로 정리할 예정입니다.",
    github: "GitHub",
    demo: "서비스 링크",
    docs: "문서 자료",
    linksPending: "링크 정리 중",
    statusLabels: {
      planning: "Planning",
      in_progress: "In Progress",
      completed: "Completed",
      archive_preparing: "Archive Prep",
    },
  },
  en: {
    sectionTitle: "Core Projects",
    sectionIntro:
      "Experiences in solving various problems—user friction, fragmented decisions, and energy mismatches—through structured service design.",
    featuredKicker: "Flagship case",
    featuredContext: "Why this case comes first",
    archiveKicker: "Latest archive",
    archiveTitle: "Project Archive",
    archiveIntro:
      "A record of ongoing and completed projects demonstrating problem framing and service structuring capabilities.",
    coreKicker: "Submission focus",
    coreTitle: "Core 3 Projects",
    coreIntro:
      "DailyLog, Loggy, and Promtree are prioritized to show problem framing, role, technical choices, and solution process as interview-ready cases.",
    supportingKicker: "Supporting / Hackathon",
    supportingTitle: "Supporting Projects & Hackathons",
    supportingIntro:
      "Additional projects are separated as archive cases that show domain expansion, rapid execution, and supporting ideas.",
    problemDefinition: "Problem definition",
    coreContribution: "Key contribution",
    techStack: "Tech stack",
    resultLearning: "Result / learning",
    submissionFormat: "SSAFY Portfolio Format",
    overview: "Project overview",
    myRole: "My role",
    solutionProcess: "Solution process",
    interviewHooks: "Interview hooks",
    viewDetails: "View details",
    readCaseStudy: "Open case study",
    backToProjects: "Back to project archive",
    period: "Period",
    team: "Team",
    role: "Role",
    status: "Status",
    links: "Links",
    highlights: "Highlights",
    screens: "Product Screens",
    themes: "Themes",
    detailSections: "Project detail",
    challenge: "Challenge",
    insight: "Structural Insight",
    solution: "Experience + System Design",
    artifacts: "Planned archive assets",
    artifactEmpty:
      "Wireframes, UI captures, code links, and supporting documents will be attached as each project archive is documented.",
    github: "GitHub",
    demo: "Live link",
    docs: "Docs",
    linksPending: "Links in preparation",
    statusLabels: {
      planning: "Planning",
      in_progress: "In Progress",
      completed: "Completed",
      archive_preparing: "Archive Prep",
    },
  },
};

export const portfolioProjects = [
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
        ko: "데이터 제출 흐름과 이를 금융 가치로 환산하는 사용자 여정을 중심으로 핵심 기능을 설계하고 프론트엔드 구현에 참여했습니다.",
        en: "Designed core features and user journeys for data submission and financial conversion, and supported frontend implementation.",
      },
    },
    team: {
      ko: "해커톤 팀 프로젝트",
      en: "Hackathon team project",
    },
    role: {
      ko: "기획 · 프론트엔드 | 문제 정의, 핵심 기능 흐름 설계, 화면 구현",
      en: "Planning & Frontend | Problem framing, core flow design, and frontend implementation",
    },
    tags: {
      ko: ["핀테크", "성장 데이터", "서비스 기획", "금융 UX"],
      en: ["Fintech", "Growth data", "Product planning", "Financial UX"],
    },
    highlights: {
      ko: [
        "대학생의 금융 소외 문제를 성장 데이터 부재로 명확히 정의했습니다.",
        "활동 기록을 금융 평가에 반영하는 신뢰 설계 및 사용자 여정을 제안했습니다.",
        "신한은행 SSAFY 해커톤에 참여해 금융 UX와 비즈니스 구조를 학습했습니다.",
      ],
      en: [
        "Defined student financial exclusion as a lack of growth data in models.",
        "Proposed a trust design and user journey reflecting activity in evaluations.",
        "Learned financial UX and business structures through the Shinhan Bank hackathon.",
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
      ko: ["발표 자료", "서비스 흐름도", "사용자 여정 맵"],
      en: ["Presentation slides", "Service flow diagram", "User journey map"],
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

const coreProjectSlugs = ["dailylog", "ssafy-startup-track", "loggy"];

export const getOrderedProjects = () =>
  [...portfolioProjects].sort((left, right) => {
    if (!left.sortDate && !right.sortDate) {
      return 0;
    }

    if (!left.sortDate) {
      return 1;
    }

    if (!right.sortDate) {
      return -1;
    }

    return right.sortDate.localeCompare(left.sortDate);
  });

export const getFeaturedProject = () =>
  portfolioProjects.find((project) => project.featured) ?? getOrderedProjects()[0];

export const getArchiveProjects = () => {
  const featuredProject = getFeaturedProject();

  return getOrderedProjects().filter(
    (project) => project.slug !== featuredProject.slug
  );
};

export const getProjectBySlug = (slug) =>
  portfolioProjects.find((project) => project.slug === slug) ?? null;

export const getLocalizedProject = (project, lang = "ko") => {
  const copy = projectUiCopy[lang] ?? projectUiCopy.ko;

  return {
    ...project,
    path: getProjectPath(lang, project.slug),
    homePath: getLocaleRootPath(lang),
    category: localizeValue(project.category, lang),
    title: localizeValue(project.title, lang),
    summary: localizeValue(project.summary, lang),
    context: localizeValue(project.context, lang),
    team: localizeValue(project.team, lang),
    role: localizeValue(project.role, lang),
    period: localizeValue(project.period, lang),
    heroImage: localizeValue(project.heroImage, lang),
    tags: localizeValue(project.tags, lang) ?? [],
    highlights: localizeValue(project.highlights, lang) ?? [],
    artifacts: localizeValue(project.artifacts, lang) ?? [],
    interviewQuestions: localizeValue(project.interviewQuestions, lang) ?? [],
    metrics: (Array.isArray(project.metrics)
      ? project.metrics
      : localizeValue(project.metrics, lang) ?? []
    ).map((m) => {
      if (typeof m === "string") return m;
      if (m.label && typeof m.label === "object") {
        return {
          ...m,
          label: localizeValue(m.label, lang),
        };
      }
      return m;
    }),
    proof: localizeValue(project.proof, lang) ?? [],
    caseStudy: project.caseStudy
      ? {
          title: localizeValue(project.caseStudy.title, lang),
          summary: localizeValue(project.caseStudy.summary, lang),
          content: localizeValue(project.caseStudy.content, lang),
        }
      : null,
    story: project.story
      ? {
          problem: localizeValue(project.story.problem, lang),
          insight: localizeValue(project.story.insight, lang),
          solution: localizeValue(project.story.solution, lang),
        }
      : null,
    sections: (project.sections ?? []).map((section) => ({
      ...section,
      title: localizeValue(section.title, lang),
      body: localizeValue(section.body, lang),
      image: localizeValue(section.image, lang),
    })),
    media: project.media
      ? {
          ...project.media,
          title: localizeValue(project.media.title, lang),
          videoLabel: localizeValue(project.media.videoLabel, lang),
          presentationLabel: localizeValue(project.media.presentationLabel, lang),
        }
      : null,
    screenshots: (project.screenshots ?? []).map((shot) => ({
      ...shot,
      alt: localizeValue(shot.alt, lang),
    })),
    seo: project.seo
      ? {
          title: localizeValue(project.seo.title, lang),
          description: localizeValue(project.seo.description, lang),
          keywords: project.seo.keywords,
        }
      : null,
    links: project.links ?? {},
    statusLabel: copy.statusLabels[project.status] ?? project.status,
  };
};

export const getCoreProjects = () =>
  coreProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter(Boolean);

export const getSupportingProjects = () => {
  const coreSlugSet = new Set(coreProjectSlugs);

  return getOrderedProjects().filter((project) => !coreSlugSet.has(project.slug));
};

export const getLocalizedFeaturedProject = (lang = "ko") =>
  getLocalizedProject(getFeaturedProject(), lang);

export const getLocalizedArchiveProjects = (lang = "ko") =>
  getArchiveProjects().map((project) => getLocalizedProject(project, lang));

export const getLocalizedCoreProjects = (lang = "ko") =>
  getCoreProjects().map((project) => getLocalizedProject(project, lang));

export const getLocalizedSupportingProjects = (lang = "ko") =>
  getSupportingProjects().map((project) => getLocalizedProject(project, lang));
