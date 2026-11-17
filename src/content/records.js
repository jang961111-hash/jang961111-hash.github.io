// Lab notes, competitions, training, and credentials shown on the home page.
// Every value here comes from the owner's fact ledger. Result wording for
// competitions follows the ledger exactly ("selected", "submitted", "finals"),
// and lab notes carry numbers only where the ledger marks them confirmed.

export const labNotes = [
  {
    id: "aiops-subnote",
    period: "2026.10",
    title: { ko: "AIOps 개인 서브노트", en: "AIOps Lab Notebook" },
    note: {
      ko: "\"로그에 승격\"과 \"서빙이 실제로 바뀜\"을 다른 사실로 구분, 승격 확인 기준을 응답 버전으로 재정의",
      en: "Separated \"promoted in the log\" from \"serving actually changed\" and redefined the promotion check around the response version",
    },
    stack: ["FastAPI", "MLflow"],
  },
  {
    id: "copyright-rag",
    period: "2026.09",
    title: { ko: "Copyright RAG 종합실습", en: "Copyright RAG Capstone Lab" },
    note: {
      ko: "평가용 정답지를 직접 설계, 한 번에 하나만 바꾸는 실험 순서, 내 정답지의 오류를 인정하고 정정",
      en: "Designed the evaluation answer key myself, changed one thing at a time, and corrected an error in my own answer key",
    },
    stack: ["RAG", "RAGAS"],
  },
  {
    id: "springai-summary-check",
    period: "2026.08",
    title: { ko: "SpringAI 회의록 요약 검증기", en: "SpringAI Meeting-Summary Checker" },
    note: {
      ko: "기능 추가 대신 원문 대조 검증기를 붙이는 방향 결정, 예시를 넣어 좋아진 결과가 예시를 외운 것인지 다른 오류 유형으로 재측정",
      en: "Chose to add a source-comparison checker instead of more features, and re-measured with a different error type to see whether the improved result was just memorized examples",
    },
    stack: ["Spring AI", "Structured output", "Few-shot"],
  },
  {
    id: "eks-lab",
    period: "2026.08 - 2026.09",
    title: { ko: "쿠버네티스와 EKS 실습", en: "Kubernetes and EKS Lab" },
    note: {
      ko: "실습용 공용 클러스터에서 스케줄 실패 원인을 자원이 아닌 파드 개수 한도로 진단, 무중단 재시작 조건 측정",
      en: "On a shared training cluster, traced a scheduling failure to the pod-count limit rather than resources, and measured the conditions for a restart without downtime",
    },
    stack: ["EKS", "readiness probe", "PDB"],
  },
  {
    id: "vue-weather",
    period: "2026.08",
    title: { ko: "Vue 날씨 앱", en: "Vue Weather App" },
    note: {
      ko: "\"나열하는 앱\"을 \"언제 나가서 찍을지 판단을 주는 앱\"으로 문제 재정의, 일부 호출이 실패해도 화면을 유지하는 설계",
      en: "Reframed a \"listing app\" as \"an app that tells you when to go out and shoot\", and designed the screen to hold up when some calls fail",
    },
    stack: ["Vue", "Promise.allSettled", "GitHub Pages"],
  },
  {
    id: "stock-trading",
    period: "2026.08",
    title: { ko: "Spring Boot StockTrading", en: "Spring Boot StockTrading" },
    note: {
      ko: "\"바뀐 필드만 UPDATE된다\"는 내 주석을 로그로 반증하고 정정, 검증 항목 27개 통과",
      en: "Disproved my own comment (\"only changed fields are updated\") with logs and corrected it; all 27 verification items passed",
    },
    stack: ["Spring Boot", "JPA", "Docker"],
  },
  {
    id: "data-analysis-team",
    period: "2026.07",
    title: { ko: "데이터분석 종합실습 (팀 리드)", en: "Data Analysis Capstone Lab (Team Lead)" },
    note: {
      ko: "세팅 가이드와 브랜치 분업 규칙을 먼저 정하고 통합과 머지 담당, 통합 검증 Accuracy 0.8358, F1 0.6916",
      en: "Set the setup guide and branch rules first and handled integration and merges; integrated validation reached accuracy 0.8358 and F1 0.6916",
    },
    stack: ["Python", "GitHub PR"],
  },
];

// `award: true` marks an award or a selection; other rows are participation.
export const competitions = [
  {
    period: "2026.09 - 2026.11",
    name: { ko: "국립광주과학관 2026 마이AI랩 「AI-이음 프로젝트」", en: "Gwangju National Science Museum 2026 My AI Lab 'AI-Ieum Project'" },
    result: { ko: "개인 응모, 수행협약 체결, 최종결과보고 제출", en: "Individual entry; project agreement signed and final report submitted" },
    slug: "ansim-ieum",
  },
  {
    period: "2026.11",
    name: { ko: "LOTTE AX Challenge 2026", en: "LOTTE AX Challenge 2026" },
    result: { ko: "예선 제출", en: "Preliminary round submitted" },
  },
  {
    period: "2026.08",
    name: { ko: "SKT 「모두의 Promp.T」 공모전", en: "SKT 'promp.T for Everyone' Contest" },
    result: { ko: "Life AX 부문 최우수상 (개인), 공모전 총 480건 접수", en: "Top prize, Life AX category (individual). The contest received 480 entries in total" },
    award: true,
    slug: "skt-prompt-ansimcall",
  },
  {
    period: "2026.08",
    name: { ko: "2026 전남광주 청년 AI 솔버톤", en: "2026 Jeonnam-Gwangju Youth AI Solvathon" },
    result: { ko: "본선 진출", en: "Advanced to the finals" },
    slug: "ajob-radar",
  },
  {
    period: "2026.08",
    name: { ko: "Google x Solana AI Agentic Hackathon", en: "Google x Solana AI Agentic Hackathon" },
    result: { ko: "제출", en: "Submitted" },
    slug: "jangbogo",
  },
  {
    period: "2026.07",
    name: { ko: "D4D Hackathon APAC Seoul 2026", en: "D4D Hackathon APAC Seoul 2026" },
    result: { ko: "Oregon UAS Accelerator 특별 트랙 선정", en: "Selected for the Oregon UAS Accelerator special track" },
    award: true,
    slug: "supporty",
  },
  {
    period: "2026.06",
    name: { ko: "SSAFY 창업캠프", en: "SSAFY Startup Camp" },
    result: { ko: "창업관심팀 최우수팀", en: "Best Team, startup-interest track" },
    award: true,
    slug: "easyexam",
  },
  {
    period: "2026.04",
    name: { ko: "SSAFY 14기 특화프로젝트 발표회", en: "SSAFY Cohort 14 Specialized Project Showcase" },
    result: { ko: "광주1반 3등 (8개 팀)", en: "3rd place, Gwangju Class 1 (8 teams)" },
    award: true,
    slug: "dailylog",
  },
  {
    period: "2026.03",
    name: { ko: "KRAFTON AI R&D Hackathon Round 1", en: "KRAFTON AI R&D Hackathon Round 1" },
    result: { ko: "개인 참가", en: "Individual participant" },
    slug: "krafton-multiplierboard",
  },
  {
    period: "2026.02",
    name: { ko: "제주 AWS Global Space Challenge Hackathon", en: "Jeju AWS Global Space Challenge Hackathon" },
    result: { ko: "결선 진출", en: "Advanced to the final round" },
    slug: "tamna-ai-eye",
  },
  {
    period: "2025.09",
    name: { ko: "전주 ICT 코딩 챌린지", en: "Jeonju ICT Coding Challenge" },
    result: { ko: "참여", en: "Participant" },
    slug: "jeonju-is-coding-challenge",
  },
  {
    period: "2025.08",
    name: { ko: "신한은행 X SSAFY 해커톤", en: "Shinhan Bank X SSAFY Hackathon" },
    result: { ko: "본선 진출", en: "Advanced to the finals" },
    slug: "chronicle",
  },
];

export const training = [
  {
    period: "2026.07 - 2026.12",
    name: { ko: "SKALA (SK AI Leader Academy) 4기", en: "SKALA (SK AI Leader Academy), Cohort 4" },
    lines: {
      ko: ["SK AX 운영, 2026.12 수료 예정", "DB/SQL 종합실습 강사 개별 평가 피드백 100점(S+등급)"],
      en: ["Run by SK AX; completion expected Dec 2026", "DB/SQL capstone lab: 100 points (grade S+) in the instructor's individual evaluation feedback"],
    },
  },
  {
    period: "2025.07 - 2026.06",
    name: { ko: "삼성청년SW·AI아카데미(SSAFY) 14기", en: "Samsung SW·AI Academy for Youth (SSAFY), Cohort 14" },
    lines: {
      ko: ["1,628시간 (1학기 828시간, 2학기 800시간)", "Certificate 등급 수료", "광주 1반 반대표 (2026.02.19 - 04.01)"],
      en: ["1,628 hours (828 in term 1, 800 in term 2)", "Completed with Certificate grade", "Class representative, Gwangju Class 1 (Feb 19 - Apr 1, 2026)"],
    },
  },
];

export const credentials = [
  {
    name: "OPIc",
    value: { ko: "IH (Intermediate High)", en: "IH (Intermediate High)" },
    date: "2026.09",
  },
  {
    name: { ko: "한국사능력검정시험", en: "Korean History Proficiency Test" },
    value: { ko: "1급", en: "Level 1" },
    date: "2015.06",
  },
];
