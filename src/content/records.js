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

// Working principles. Every case line comes from the owner's fact ledger;
// `quote` is used only for sentences the owner wrote by hand.
export const principles = [
  {
    id: "measure",
    title: { ko: "재지 않은 것은 말하지 않는다", en: "I don't claim what I didn't measure" },
    sub: "I don't claim what I didn't measure.",
    cases: {
      ko: [
        "안심이음: 규칙 보강 뒤 나온 99.0%를 \"낙관적 수치\"로 적고, 새 100건 블라인드 재측정 86.0%를 공식 수치로 기록",
        "안심이음: 놓친 사기 문자 11건을 보고도 규칙을 고치지 않기로 결정, 검증 문장을 보고 고치면 그 뒤 수치는 \"튜닝 후\"가 되기 때문",
        "LoRA 과제: 점수가 0.0862에서 0.3852로 올랐지만 평가 코드가 20문항 중 15문항의 환각 검사를 하지 않는다는 점을 보고서에 기록",
      ],
      en: [
        "Ansim-Ieum: logged a 99.0% result after a rule update as \"optimistic\" and recorded the 86.0% blind re-test on 100 new cases as the official number",
        "Ansim-Ieum: left the rules alone after seeing 11 missed scam texts, because tuning on validation sentences would make every later number \"post-tuning\"",
        "LoRA assignment: the score rose from 0.0862 to 0.3852, and I reported that the evaluation code skipped the hallucination check on 15 of 20 questions",
      ],
    },
  },
  {
    id: "correct",
    title: { ko: "틀린 것은 지우지 않고 고쳐 적는다", en: "When I'm wrong, I correct it in writing" },
    sub: "When I'm wrong, I correct it in writing.",
    cases: {
      ko: [
        "Spring Boot 실습: \"바뀐 필드만 UPDATE된다\"는 내 주석을 실행 로그로 반증하고 회고에 과정을 그대로 기록",
        "저작권 RAG 실습: 직접 만든 정답지가 틀렸고 모델이 맞았음을 원문을 다시 읽어 확인하고 정정",
        "안심이음 최종결과보고 발표자료: 못 한 것부터 기재(어르신 50명, 2회 목표에 20명, 1회, 만족도 미측정)",
        "장애 대응 에이전트 Ablation: 같은 부하로 다시 쟀더니 사라진 결론을 보고서에서 정정",
      ],
      en: [
        "Spring Boot lab: disproved my own comment (\"only changed fields are updated\") with run logs and kept the whole process in my notes",
        "Copyright RAG lab: re-read the source, confirmed my answer key was wrong and the model was right, and corrected it",
        "Ansim-Ieum final report deck: opened with what I did not achieve (target 50 seniors in 2 sessions, actual 20 in 1, satisfaction not measured)",
        "Incident-response agent ablation: corrected the report when a finding disappeared under equal-load re-measurement",
      ],
    },
  },
  {
    id: "criteria",
    title: { ko: "의견이 갈리면 기준부터 세운다", en: "When a team disagrees, I set the criteria first" },
    sub: "When a team disagrees, I set the criteria first.",
    cases: {
      ko: [
        "DailyLog(PM): 후보 기능을 표 하나에 올리고 사용자 경험 기여도, 구현 난이도, 일정 영향도로 점수를 매겨 필수, 선택, 보류로 구분",
        "AIOps 과제: \"로그에 승격\"과 \"서빙이 실제로 바뀜\"을 다른 사실로 구분하고 승격 확인 기준을 실제 응답의 버전 표시로 변경",
        "이탈 예측 실습: 모델 선택 기준을 Train 안 5-Fold 3회 반복 평균으로 고정, Test는 기록만",
      ],
      en: [
        "DailyLog (PM): put every candidate feature in one table, scored each on UX contribution, build difficulty, and schedule impact, then sorted them into must, optional, and hold",
        "AIOps assignment: separated \"promoted in the log\" from \"serving actually changed\" and moved the promotion check to the version shown in the real response",
        "Churn-prediction lab: fixed model selection to the mean of 3 repeats of 5-fold CV inside Train; Test was record-only",
      ],
    },
  },
  {
    id: "judge",
    title: { ko: "답을 주기보다 스스로 판단하게 만든다", en: "I build AI that helps people judge for themselves" },
    sub: "I build AI that helps people judge for themselves.",
    cases: {
      ko: [
        "SKT 「모두의 Promp.T」: \"판별해줘\"가 아니라 \"판별해주지 마\"로 뒤집은 훈련 코치 프롬프트, 어머니가 사기 의심 문자 앞에서 혼자 망설인 일이 출발점",
        "안심이음: 같은 생각을 어르신 대상 사기 예방 연습으로 확장, 어르신 20명과 현장 실증",
        "졸업논문: 마르쿠제 『일차원적 인간』을 읽고 \"자기결정\" 개념을 정리",
      ],
      en: [
        "SKT 'promp.T for Everyone': a training-coach prompt that flips \"detect it for me\" into \"don't detect it for me\"; it began when my mother hesitated alone over a suspected scam text",
        "Ansim-Ieum: took the same idea to scam-prevention practice for seniors, with a field session of 20 seniors",
        "Graduation thesis: read Marcuse's One-Dimensional Man and wrote on the concept of self-determination",
      ],
    },
  },
  {
    id: "record",
    title: { ko: "전부 기록한다", en: "I keep records" },
    sub: "I keep records.",
    quote: {
      text: "전부다 기록하고 전부다 기억해나가자.",
      source: { ko: "2021.10 메모", en: "Personal note, Oct 2021 (\"Record everything, remember everything.\")" },
    },
    cases: {
      ko: [
        "DB/SQL 종합실습: 실행 화면 캡처 87장으로 과정 기록",
        "SKALA: 수업과 특강을 다시 보며 정리하고 정리본을 동기와 공유",
        "안심이음: 날짜별 측정 수치와 실행 명령을 한 보드에 누적, 설계 결정은 ADR로 기록",
        "군 복무 중 버킷리스트를 적고 실천한 과정이 국방일보에 게재",
      ],
      en: [
        "DB/SQL capstone lab: documented the process with 87 execution screenshots",
        "SKALA: went back over lectures and talks, wrote them up, and shared the notes with classmates",
        "Ansim-Ieum: accumulated dated measurements and the commands that produced them on one board, with design decisions kept as ADRs",
        "During military service, my account of writing and working through a bucket list ran in the Defense Daily (Kookbang Ilbo)",
      ],
    },
  },
  {
    id: "field",
    title: { ko: "현장에서 본 불편을 문제로 정의한다", en: "I start from a problem I saw on site" },
    sub: "I start from a problem I saw on site.",
    cases: {
      ko: [
        "고객 응대 현장: 불만의 원인을 지연이 아니라 \"기다리는 이유와 예상 시간을 알 수 없다는 점\"으로 다시 정의, 접수 때 예상 시간 안내와 자주 나오는 문의의 문장 정리를 제안하고 설득",
        "서비스센터 현장(2022.12 - 2024.01): 문제는 응대가 아니라 그 뒤의 시스템이라고 보고 만드는 쪽으로 전환",
        "안심이음 실증: 어르신 20명의 접속을 도우며 \"QR로 처음 접속하는 단계가 가장 어렵다\"는 관찰을 다음 과제로 기록",
      ],
      en: [
        "Customer-service floor: redefined the complaint from the delay itself to \"not knowing why or how long\", then proposed and argued for giving an expected time at check-in and standard wording for frequent questions",
        "Service-center floor (Dec 2022 - Jan 2024): saw that the problem was the system behind the desk, not the desk, and moved to the building side",
        "Ansim-Ieum field session: while helping 20 seniors get connected, logged \"the first QR connection is the hardest step\" as the next task",
      ],
    },
  },
  {
    id: "again",
    title: { ko: "떨어지면 다시 준비해서 간다", en: "When I fail, I prepare again and go back" },
    sub: "When I fail, I prepare again and go back.",
    quote: {
      text: "IM의 왕관을 쓰지못했다.",
      source: { ko: "2025.09.03 첫 시험 탈락 날 교육 채널에 쓴 글", en: "Written on the day I failed the first test, Sep 3, 2025 (\"I did not get the IM crown.\")" },
    },
    cases: {
      ko: [
        "SSAFY SW역량테스트: 2025.09 첫 시험 탈락, 재시험 대상, 12월에는 신청해 둔 기업탐방을 취소하고 공부해 마지막 5차까지 응시(수료증 표기: 모의 IM 취득)",
        "자소서 컨설팅(2026.09): 초안을 미리 가져가 \"철학적이고 비유적\"이라는 지적을 받고, 다음 판본에서 건조한 문장과 10년 목표로 수정",
        "취업특강(2026.05): 동료에게 \"특색이 없다\"는 피드백을 받은 것도 그대로 기록",
      ],
      en: [
        "SSAFY SW competency test: failed the first sitting in Sep 2025, was put on the re-test list, cancelled a company visit in December to study, and sat every round through the fifth and last (certificate wording: mock IM level)",
        "Cover-letter consulting (Sep 2026): brought a draft in advance, was told it read \"philosophical and figurative\", and rewrote the next version in plain sentences with a ten-year goal",
        "Career workshop (May 2026): a peer told me my answers had \"no character\", and I kept that on record as well",
      ],
    },
  },
];
