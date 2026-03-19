import { getProjectPath, getLocaleRootPath } from "../utils/localeRouting";

const localizeValue = (value, lang) => {
  if (Array.isArray(value) || typeof value === "string" || value == null) {
    return value;
  }

  return value[lang] ?? value.ko ?? value.en ?? "";
};

export const projectUiCopy = {
  ko: {
    sectionTitle: "Core Projects",
    sectionIntro:
      "대표 사례는 깊게 보여주고, 그 아래에는 진행 중인 프로젝트와 완료 프로젝트를 최신 흐름에 맞춰 계속 확장할 수 있도록 아카이브 구조를 열어두었습니다.",
    featuredKicker: "Flagship case",
    featuredContext: "왜 먼저 보여주는가",
    archiveKicker: "Latest archive",
    archiveTitle: "프로젝트 아카이브",
    archiveIntro:
      "현재 진행 중인 항목부터 완료 프로젝트까지, 최신순으로 정리하고 상세 페이지로 이어질 수 있게 구성합니다.",
    viewDetails: "상세 보기",
    readCaseStudy: "케이스 스터디 열기",
    backToProjects: "프로젝트 목록으로 돌아가기",
    period: "기간",
    team: "팀 구성",
    role: "역할",
    status: "상태",
    links: "링크",
    highlights: "핵심 포인트",
    themes: "키워드",
    detailSections: "세부 설명",
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
      "The flagship case stays deep, and the archive below is structured to grow into a full project library with recent work, ongoing builds, and future detail pages.",
    featuredKicker: "Flagship case",
    featuredContext: "Why this case comes first",
    archiveKicker: "Latest archive",
    archiveTitle: "Project Archive",
    archiveIntro:
      "From current work to completed builds, the list is arranged so newer projects surface first and each card can expand into a dedicated detail page.",
    viewDetails: "View details",
    readCaseStudy: "Open case study",
    backToProjects: "Back to project archive",
    period: "Period",
    team: "Team",
    role: "Role",
    status: "Status",
    links: "Links",
    highlights: "Highlights",
    themes: "Themes",
    detailSections: "Project detail",
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
    slug: "ssafy-startup-track",
    status: "planning",
    sortDate: "2026-03-19",
    period: {
      ko: "2026.03.19 - 진행 중",
      en: "Mar 19, 2026 - ongoing",
    },
    category: {
      ko: "SSAFY 자율 프로젝트",
      en: "SSAFY autonomous project",
    },
    title: {
      ko: "SSAFY 자율 프로젝트 창업 트랙",
      en: "SSAFY Autonomous Startup Track",
    },
    summary: {
      ko: "창업 트랙에서 풀 문제와 서비스 방향을 정리하고, 팀 구성과 실행 구조를 설계하고 있는 준비 단계의 프로젝트입니다.",
      en: "An early-stage startup-track project where I am shaping the problem framing, service direction, and initial execution structure before full kickoff.",
    },
    team: {
      ko: "팀 구성 중 / 3월 31일 전후 본격 진행 예상",
      en: "Team formation in progress / full kickoff expected around Mar 31",
    },
    role: {
      ko: "서비스 기획, 문제 정의, 팀 구성, 실행 구조 설계",
      en: "Service planning, problem framing, team formation, and execution design",
    },
    tags: {
      ko: ["창업 트랙", "서비스 기획", "팀 빌딩"],
      en: ["Startup track", "Service planning", "Team building"],
    },
    highlights: {
      ko: [
        "어떤 문제를 창업 트랙에서 집중할지 구조적으로 정의하고 있습니다.",
        "서비스 콘셉트와 초기 실행 범위를 동시에 설계하고 있습니다.",
        "팀 역할과 작업 분담 구조를 사전에 정리하는 단계입니다.",
      ],
      en: [
        "Defining which structural problem to pursue in the startup track.",
        "Shaping the service concept and initial execution scope together.",
        "Preparing team roles and collaboration structure before the build starts.",
      ],
    },
    sections: [
      {
        id: "phase",
        title: {
          ko: "현재 단계",
          en: "Current phase",
        },
        body: {
          ko: "2026년 3월 19일부터 아이디어와 문제 정의를 구체화하고 있으며, 3월 31일 전후로 팀 구성을 마친 뒤 본격적인 프로젝트 진행을 예상하고 있습니다.",
          en: "As of March 19, 2026, the project is still in problem-framing and concept-planning mode, with full team formation and execution expected around March 31.",
        },
      },
      {
        id: "focus",
        title: {
          ko: "지금 준비하는 것",
          en: "What is being prepared now",
        },
        body: {
          ko: "서비스 방향성, 사용자 문제 정의, 역할 분담 방식, 초기 아키텍처 및 와이어프레임 범위를 미리 정리해 실행 전 구조를 맞추는 데 초점을 두고 있습니다.",
          en: "The current focus is aligning service direction, user-problem framing, team roles, and the first pass of architecture and wireframe scope before execution begins.",
        },
      },
    ],
    artifacts: {
      ko: ["문제 정의 문서", "서비스 콘셉트 보드", "초기 와이어프레임", "역할 분담 문서"],
      en: ["Problem framing notes", "Service concept board", "Initial wireframes", "Team role breakdown"],
    },
    links: {},
  },
  {
    slug: "dailylog",
    status: "in_progress",
    sortDate: "2026-02-16",
    period: {
      ko: "2026.02.16 - 2026.03.30",
      en: "Feb 16, 2026 - Mar 30, 2026",
    },
    category: {
      ko: "SSAFY 특화 프로젝트",
      en: "SSAFY specialized project",
    },
    title: {
      ko: "DailyLog | AI 기반 일기장 생성 및 일정 추천",
      en: "DailyLog | AI Diary Generation & Schedule Recommendation",
    },
    summary: {
      ko: "빅데이터 추천 도메인을 바탕으로, AI가 일기 작성과 일정 추천을 지원하는 일상 기록 서비스를 기획하고 구현 중인 프로젝트입니다.",
      en: "A specialized project in the recommendation domain that uses AI to support diary generation and schedule suggestions around daily routines.",
    },
    team: {
      ko: "SSAFY 특화 프로젝트 팀",
      en: "SSAFY specialized-project team",
    },
    role: {
      ko: "서비스 기획, 사용자 흐름 설계, 추천 경험 구조화",
      en: "Service planning, user-flow design, and recommendation experience framing",
    },
    tags: {
      ko: ["AI 일기장", "일정 추천", "추천 도메인"],
      en: ["AI diary", "Schedule recommendation", "Recommendation domain"],
    },
    highlights: {
      ko: [
        "일기 작성 경험과 추천 경험을 하나의 생활 흐름으로 연결하는 데 초점을 두고 있습니다.",
        "AI가 글을 대신 쓰는 것보다 사용자가 기록을 이어가게 만드는 구조를 고민하고 있습니다.",
        "프로젝트 종료 시점에 맞춰 세부 화면과 추천 로직 아카이브를 추가할 예정입니다.",
      ],
      en: [
        "Connecting diary writing and recommendations into one daily experience.",
        "Treating AI as support for reflection, not just automatic text generation.",
        "Preparing to attach UI and recommendation-logic artifacts once the project wraps.",
      ],
    },
    sections: [
      {
        id: "topic",
        title: {
          ko: "프로젝트 주제",
          en: "Project theme",
        },
        body: {
          ko: "일기 작성과 일정 추천을 분리하지 않고, 사용자의 하루 기록에서 다음 행동 제안으로 이어지는 흐름을 만드는 것이 핵심 주제입니다.",
          en: "The core theme is to connect writing about a day with suggesting what comes next, instead of treating journaling and scheduling as separate features.",
        },
      },
      {
        id: "archive",
        title: {
          ko: "추가 예정 아카이브",
          en: "Planned deep-dive archive",
        },
        body: {
          ko: "프로젝트가 종료되면 와이어프레임, 추천 흐름, AI 상호작용 설계, 실제 화면을 묶어서 상세 페이지에 정리할 예정입니다.",
          en: "Once the project is complete, the detail page will expand with wireframes, recommendation flows, AI interaction design, and final screens.",
        },
      },
    ],
    artifacts: {
      ko: ["와이어프레임", "추천 흐름 정리", "AI 상호작용 설계", "최종 UI 캡처"],
      en: ["Wireframes", "Recommendation flow notes", "AI interaction design", "Final UI captures"],
    },
    links: {},
  },
  {
    slug: "tamna-ai-eye",
    status: "completed",
    sortDate: "2026-02-04",
    period: {
      ko: "2026.02.02 - 2026.02.04",
      en: "Feb 2, 2026 - Feb 4, 2026",
    },
    category: {
      ko: "제주 AWS Global Space Challenge 해커톤",
      en: "Jeju AWS Global Space Challenge hackathon",
    },
    title: {
      ko: "Tamna-AI-eye | 풍력 출력제한·분산 AI 데이터센터 입지 의사결정 지원",
      en: "Tamna-AI-eye | Decision Support for Wind Curtailment & Distributed AI Data Centers",
    },
    summary: {
      ko: "풍력 에너지 잠재력과 출력 제한 문제를 함께 고려해, 분산형 AI 데이터센터 노드 조합의 입지 선정을 지원하는 서비스 아이디어입니다.",
      en: "A hackathon concept that supports siting decisions for distributed AI data center nodes by weighing wind-energy potential against curtailment constraints.",
    },
    team: {
      ko: "해커톤 팀 프로젝트",
      en: "Hackathon team project",
    },
    role: {
      ko: "문제 구조화, 의사결정 지원 서비스 기획, 발표 방향 정리",
      en: "Problem structuring, decision-support service framing, and presentation direction",
    },
    tags: {
      ko: ["에너지", "입지 선정", "의사결정 지원"],
      en: ["Energy", "Site selection", "Decision support"],
    },
    highlights: {
      ko: [
        "풍력 에너지 잠재력과 출력 제한 문제를 함께 보는 판단 구조를 잡았습니다.",
        "입지 선정 문제를 분산형 AI 데이터센터 노드 조합 관점으로 풀었습니다.",
        "짧은 해커톤 기간 안에 문제 정의와 서비스 방향을 빠르게 정리했습니다.",
      ],
      en: [
        "Combined wind-energy potential with curtailment constraints in one decision frame.",
        "Approached siting as a distributed AI data center node-combination problem.",
        "Compressed problem framing and service direction into a short hackathon window.",
      ],
    },
    sections: [
      {
        id: "challenge",
        title: {
          ko: "다룬 문제",
          en: "Problem addressed",
        },
        body: {
          ko: "에너지 생산 잠재력이 높아도 출력 제한이 심하면 실제 활용성이 낮아질 수 있기 때문에, 입지 선정은 단순 최대 생산량 계산보다 복합적인 의사결정 문제로 보았습니다.",
          en: "High generation potential alone is not enough when curtailment risk reduces practical value, so the siting question was framed as a multi-factor decision problem rather than a simple max-output calculation.",
        },
      },
      {
        id: "service",
        title: {
          ko: "서비스 방향",
          en: "Service direction",
        },
        body: {
          ko: "사용자가 여러 후보지를 비교하면서 분산형 데이터센터 노드 조합을 검토할 수 있도록, 판단 기준과 비교 흐름을 정리하는 서비스 방향으로 접근했습니다.",
          en: "The service direction focused on helping users compare candidate sites and evaluate distributed node combinations through a clearer decision flow.",
        },
      },
    ],
    artifacts: {
      ko: ["해커톤 기획안", "문제 정의 보드", "발표 자료", "입지 비교 시각화"],
      en: ["Hackathon concept deck", "Problem framing board", "Presentation slides", "Site-comparison visuals"],
    },
    links: {},
  },
  {
    slug: "loggy",
    featured: true,
    status: "completed",
    sortDate: "2026-01-30",
    period: {
      ko: "2026.01.06 - 2026.01.30",
      en: "Jan 6, 2026 - Jan 30, 2026",
    },
    category: {
      ko: "SSAFY 공통 프로젝트",
      en: "SSAFY common project",
    },
    title: {
      ko: "Loggy | 실시간 로그 분석 협업 플랫폼",
      en: "Loggy | Real-Time Log Analysis Collaboration Platform",
    },
    summary: {
      ko: "실시간 로그를 읽고, 거르고, 함께 검토할 수 있는 흐름으로 바꿔서 느린 디버깅 루프를 줄이기 위해 만든 프로젝트입니다.",
      en: "Loggy was built to shorten slow debugging loops by turning streaming logs into a readable, filterable, and collaborative review flow.",
    },
    context: {
      ko: "제품 방향, 프론트엔드 실행, 기술 의사결정이 동시에 맞물릴 때 제가 어떻게 일하는지 가장 잘 보여주는 프로젝트입니다.",
      en: "This is the project that best shows how I work when product direction, frontend execution, and technical decision-making have to move together.",
    },
    story: {
      problem: {
        ko: "개발팀은 대량의 원시 로그를 여러 단계를 거쳐 수동으로 읽고 있었고, 그만큼 원인 파악까지 걸리는 시간이 길어지고 있었습니다.",
        en: "Teams were manually scanning large volumes of raw logs across fragmented steps, which kept stretching the time needed to isolate root causes.",
      },
      insight: {
        ko: "병목은 로그 양 자체보다, 지금 어떤 로그가 중요한지 판단하게 해주는 맥락이 그 순간에 보이지 않는 데 있다고 봤습니다.",
        en: "The bottleneck was not just scale. The harder problem was missing context at the exact moment someone needed to decide which signal mattered next.",
      },
      solution: {
        ko: "WebSocket 기반 스트리밍, 구조화된 필터링, 하나의 연속된 검토 화면을 중심으로 경험을 설계해 확인, 선별, 논의가 흐름 안에서 이어지게 만들었습니다.",
        en: "I shaped the experience around WebSocket streaming, structured filtering, and one continuous review surface so teams could inspect, narrow, and discuss logs without breaking flow.",
      },
    },
    team: {
      ko: "협업형 팀 프로젝트",
      en: "Collaborative team project",
    },
    role: {
      ko: "Product Owner & Frontend Lead | 문제 정의, 사용자 흐름 설계, 프론트엔드 구현, 실시간 검토 UX 설계",
      en: "Product Owner & Frontend Lead | Problem framing, user flow design, frontend implementation, and realtime review UX",
    },
    tags: {
      ko: ["실시간성", "WebSocket", "회의 협업 웹", "의사결정 구조화"],
      en: ["Realtime", "WebSocket", "Collaboration web", "Decision traceability"],
    },
    highlights: {
      ko: [
        "로그 분석 지연을 85% 줄이는 방향으로 경험을 설계했습니다.",
        "의사결정이 휘발되지 않도록, 결정 과정이 남는 구조를 제품 흐름에 녹였습니다.",
        "실시간 로그 확인과 팀 협업을 하나의 검토 경험으로 정리했습니다.",
      ],
      en: [
        "Designed the experience to reduce log-analysis latency by 85%.",
        "Treated disappearing decision context as a product problem, not just a note-taking issue.",
        "Unified realtime log review and team collaboration into one experience.",
      ],
    },
    proof: {
      ko: [
        "개발자 도구 문제를 제품 워크플로우 문제로 다시 정의했습니다.",
        "실시간 시스템 제약을 필터 설계와 화면 상호작용 결정으로 연결했습니다.",
        "제품 범위, 화면 흐름, 구현 방향을 하나의 검토 경험으로 정렬했습니다.",
      ],
      en: [
        "I reframed a developer tooling issue as a product workflow problem.",
        "I connected realtime system constraints directly to filtering and interaction decisions.",
        "I aligned product scope, UI flow, and engineering execution around one review experience.",
      ],
    },
    metrics: {
      ko: [
        "로그 분석 지연 85% 감소",
        "초당 5,000건 이상 처리 고려",
        "제품 기획 + 프론트엔드 리드",
      ],
      en: [
        "85% shorter log analysis time",
        "Designed for 5,000+ logs per second",
        "Product + frontend ownership",
      ],
    },
    sections: [
      {
        id: "topic",
        title: {
          ko: "프로젝트 주제",
          en: "Project focus",
        },
        body: {
          ko: "회의 협업 웹이라는 큰 맥락 안에서, 왜 이런 결정이 내려졌는지 추적 가능한 의사결정 구조를 Git의 커밋 히스토리처럼 남기고 싶었습니다.",
          en: "Within a collaboration-web context, the core idea was to preserve why a decision happened so the decision flow stays traceable instead of disappearing after the meeting ends.",
        },
      },
      {
        id: "ux",
        title: {
          ko: "제품·UX 관점",
          en: "Product and UX angle",
        },
        body: {
          ko: "단순히 로그를 보여주는 도구보다, 실시간 확인과 팀 간 논의가 이어지는 검토 흐름을 만들기 위해 화면 구조와 상호작용을 설계했습니다.",
          en: "The goal was not just to display logs, but to create a review flow where realtime inspection and team discussion stay connected inside the same interface.",
        },
      },
      {
        id: "system",
        title: {
          ko: "기술 구조",
          en: "System structure",
        },
        body: {
          ko: "실시간성을 위해 WebSocket 구조를 중심에 두고, 필터링과 검토가 끊기지 않도록 상태 관리와 화면 흐름을 함께 설계했습니다.",
          en: "WebSocket-based realtime delivery sat at the center, with filtering, state flow, and interface structure designed so review work could continue without breaking context.",
        },
      },
    ],
    artifacts: {
      ko: ["와이어프레임", "실시간 로그 화면 캡처", "상태 흐름 설명", "코드 구조 링크"],
      en: ["Wireframes", "Realtime UI captures", "State-flow explanation", "Code-structure links"],
    },
    links: {},
  },
  {
    slug: "sales-crm",
    status: "completed",
    sortDate: "2025-12-30",
    period: {
      ko: "2025.12.19 - 2025.12.30",
      en: "Dec 19, 2025 - Dec 30, 2025",
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
      ko: "고객 중심 흐름을 기반으로 CRM 서비스를 설계하고 구현한 프로젝트입니다.",
      en: "A CRM project focused on structuring customer-centered workflows and service operations.",
    },
    team: {
      ko: "팀 프로젝트",
      en: "Team project",
    },
    role: {
      ko: "서비스 흐름 정리, 고객 관점 구조화, 협업 구현",
      en: "Service-flow definition, customer-centric structuring, and collaborative implementation",
    },
    tags: {
      ko: ["CRM", "고객 흐름", "서비스 운영"],
      en: ["CRM", "Customer flow", "Service operations"],
    },
    highlights: {
      ko: [
        "고객 기반 서비스 흐름을 구조화하는 경험을 쌓았습니다.",
        "운영 관점과 사용자 관점을 함께 다루는 문제를 다뤘습니다.",
        "추후 상세 문서화가 필요한 아카이브 후보 프로젝트입니다.",
      ],
      en: [
        "Worked on structuring customer-centered service flows.",
        "Handled a problem space that mixes operations and user experience.",
        "A good candidate for a more detailed archive page later.",
      ],
    },
    sections: [
      {
        id: "overview",
        title: {
          ko: "프로젝트 개요",
          en: "Project overview",
        },
        body: {
          ko: "고객 기반 CRM이라는 도메인 안에서 사용자 흐름과 운영 흐름이 어떻게 맞물리는지 이해하고 정리하는 데 집중한 프로젝트였습니다.",
          en: "The project focused on understanding and organizing how user journeys and operational workflows meet inside a CRM domain.",
        },
      },
    ],
    artifacts: {
      ko: ["기능 구조 정리", "화면 흐름", "발표 자료"],
      en: ["Feature map", "Screen flows", "Presentation slides"],
    },
    links: {},
  },
  {
    slug: "jeonju-is-coding-challenge",
    status: "archive_preparing",
    sortDate: "",
    period: {
      ko: "세부 정보 정리 예정",
      en: "Details being organized",
    },
    category: {
      ko: "전주 IS 코딩 챌린지",
      en: "Jeonju IS Coding Challenge",
    },
    title: {
      ko: "전주 IS 코딩 챌린지",
      en: "Jeonju IS Coding Challenge",
    },
    summary: {
      ko: "세부 주제와 결과물을 다시 정리해 아카이브 페이지로 옮길 예정인 프로젝트입니다.",
      en: "A project entry reserved for a fuller write-up once the exact theme, output, and supporting materials are documented.",
    },
    team: {
      ko: "정리 중",
      en: "Being documented",
    },
    role: {
      ko: "세부 내용 정리 예정",
      en: "Role details pending",
    },
    tags: {
      ko: ["아카이브 준비"],
      en: ["Archive prep"],
    },
    highlights: {
      ko: [
        "프로젝트 목록에는 포함하되, 세부 페이지는 자료가 정리되는 대로 확장할 예정입니다.",
      ],
      en: [
        "Included in the archive now, with the detail page to grow once materials are organized.",
      ],
    },
    sections: [
      {
        id: "archive",
        title: {
          ko: "정리 상태",
          en: "Archive status",
        },
        body: {
          ko: "날짜, 역할, 결과물, 발표 자료 등을 다시 모으는 중이며, 정리되는 대로 상세 페이지를 채울 예정입니다.",
          en: "Dates, role details, outputs, and supporting materials are still being gathered before the project gets a fuller detail page.",
        },
      },
    ],
    artifacts: {
      ko: ["세부 정보 확인 후 추가"],
      en: ["To be added after material review"],
    },
    links: {},
  },
  {
    slug: "chronicle",
    status: "completed",
    sortDate: "2025-08-23",
    period: {
      ko: "2025.08.21 - 2025.08.23",
      en: "Aug 21, 2025 - Aug 23, 2025",
    },
    category: {
      ko: "신한은행 X SSAFY 해커톤",
      en: "Shinhan Bank X SSAFY hackathon",
    },
    title: {
      ko: "Chronicle | 대학생 성장일지 서비스",
      en: "Chronicle | Student Growth Journal Service",
    },
    summary: {
      ko: "금융 API를 바탕으로 헤이영 캠퍼스에 도입될 수 있는 대학생 성장일지 서비스를 기획한 해커톤 프로젝트입니다.",
      en: "A hackathon project that explored a growth-journal service for university students that could fit into HeyYoung Campus using financial APIs.",
    },
    team: {
      ko: "해커톤 팀 프로젝트",
      en: "Hackathon team project",
    },
    role: {
      ko: "서비스 콘셉트 정리, 사용자 흐름 구성, 발표 방향 수립",
      en: "Service concept framing, user-flow design, and presentation structure",
    },
    tags: {
      ko: ["금융 API", "캠퍼스 서비스", "성장일지"],
      en: ["Financial API", "Campus service", "Growth journal"],
    },
    highlights: {
      ko: [
        "금융 API를 학생 성장 기록 서비스와 연결하는 방향을 기획했습니다.",
        "헤이영 캠퍼스 맥락에서 도입 가능한 서비스 콘셉트를 구체화했습니다.",
        "짧은 해커톤 안에서 사용자 가치와 서비스 포지션을 함께 정리했습니다.",
      ],
      en: [
        "Connected financial API capability to a student growth-record service idea.",
        "Framed the concept around what could realistically fit into HeyYoung Campus.",
        "Clarified user value and product positioning within a short hackathon cycle.",
      ],
    },
    sections: [
      {
        id: "concept",
        title: {
          ko: "서비스 콘셉트",
          en: "Service concept",
        },
        body: {
          ko: "대학생이 자신의 활동과 성장을 시간 흐름에 따라 기록하고 되돌아볼 수 있게 하는 성장일지 서비스를 금융 API와 연결 가능한 맥락에서 기획했습니다.",
          en: "The concept focused on helping students record and review their growth over time in a way that could connect meaningfully with a campus finance ecosystem.",
        },
      },
    ],
    artifacts: {
      ko: ["해커톤 발표 자료", "서비스 콘셉트 정리", "사용자 흐름"],
      en: ["Hackathon deck", "Service concept notes", "User flows"],
    },
    links: {},
  },
];

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
    tags: localizeValue(project.tags, lang) ?? [],
    highlights: localizeValue(project.highlights, lang) ?? [],
    artifacts: localizeValue(project.artifacts, lang) ?? [],
    metrics: localizeValue(project.metrics, lang) ?? [],
    proof: localizeValue(project.proof, lang) ?? [],
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
    })),
    links: project.links ?? {},
    statusLabel: copy.statusLabels[project.status] ?? project.status,
  };
};

export const getLocalizedFeaturedProject = (lang = "ko") =>
  getLocalizedProject(getFeaturedProject(), lang);

export const getLocalizedArchiveProjects = (lang = "ko") =>
  getArchiveProjects().map((project) => getLocalizedProject(project, lang));
