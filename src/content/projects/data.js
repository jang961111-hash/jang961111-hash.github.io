export const portfolioProjects = [
  {
    slug: "ansim-ieum",
    featured: true,
    cardRole: {
      ko: "기획, 판별 기준과 검증 절차 설계, 실증 진행(개인 과제)",
      en: "Planning, detection criteria and evaluation design, field session (individual project)",
    },
    cardResult: {
      ko: "검증셋 200건에서 사기 문자 100건 중 놓친 것 0건, 정상 문자 8.0%에는 조심 경고(2026.11.16 내부 측정). 어르신 20명 현장 실증 1회",
      en: "0 of 100 scam texts missed on a 200-item validation set, with a caution flag on 8.0% of normal texts (internal measurement, Nov 16, 2026); one field session with 20 seniors",
    },
    status: "in_progress",
    sortDate: "2026-11-16",
    period: {
      ko: "2026.09 - 진행 중",
      en: "Sep 2026 - ongoing",
    },
    category: {
      ko: "국립광주과학관 2026 마이AI랩 「AI-이음 프로젝트」 선정 과제",
      en: "Selected project, Gwangju National Science Museum 2026 My AI Lab 'AI-Ieum Project'",
    },
    title: {
      ko: "안심이음 | 어르신이 사기 문자와 전화를 미리 겪어 보는 예방 교육 서비스",
      en: "Ansim-Ieum | A Scam-Prevention Training Service Where Seniors Rehearse Scam Texts and Calls",
    },
    summary: {
      ko: "어르신이 문자와 전화 사기를 실제로 겪기 전에 미리 연습하는 웹 서비스입니다. 의심 문자를 확인하는 기능이 함께 있고, 시험용으로 따로 떼어 둔 검증셋 200건(사기 100, 정상 100)에서 규칙과 AI를 함께 썼을 때 **사기 문자 100건을 모두 잡았습니다**(유효 2회 측정, 정답 표시 1인). 그 대신 정상 문자의 8.0%에 '조심' 경고가 붙었습니다.",
      en: "A web service where seniors practice handling scam texts and calls before they meet a real one, with a companion feature for checking suspicious texts. On a 200-item validation set kept apart for testing (100 scam, 100 normal), rules plus AI **caught all 100 scam texts** (two valid runs, labels by one person). In exchange, 8.0% of normal texts received a 'caution' warning.",
    },
    brief: {
      what: { ko: "어르신이 사기 문자와 전화를 미리 연습하는 예방 교육 웹 서비스, 마이AI랩 선정 개인 과제", en: "Web service where seniors rehearse scam texts and calls beforehand; individual project selected for My AI Lab" },
      pain: { ko: "낯선 문자와 전화 앞에서 어르신이 혼자 판단해야 하는 시간", en: "Seniors having to judge alone when an unfamiliar text or call arrives" },
      solution: { ko: "사기 상황을 미리 겪는 3단계 훈련(사례 20개)과 의심 문자 확인 기능", en: "Three-step rehearsal of scam situations (20 cases) plus a suspicious-text check" },
      how: { ko: "규칙이 먼저 판별하고 AI는 위험 등급 상향만 가능, 3초 안에 답 없으면 규칙 결과로 응답", en: "Rules judge first; AI can only raise the risk level, and the rule result is returned if the AI does not answer within 3 seconds" },
      effect: { ko: "검증셋 200건(2026.11.16 내부 측정)에서 사기 문자 100건 중 놓친 것 0건(유효 2회, 정답 표시 1인, 일부 문장은 규칙 수정 때 본 적 있음), 정상 문자 8.0%에 조심 경고\n어르신 20명 1회 실증(목표 50명 2회에는 미달), 만족도 미측정", en: "0 of 100 scam texts missed on a 200-item validation set (internal measurement, Nov 16, 2026; two valid runs, labels by one person; some sentences seen while editing the rules); 8.0% of normal texts got a caution warning\nOne field session with 20 seniors (below the goal of 50 seniors over 2 sessions); satisfaction not measured" },
    },
    context: {
      ko: "SKT 「모두의 Promp.T」 수상작에서 이어진 과제\n국립광주과학관 2026 마이AI랩 「AI-이음 프로젝트」 개인 응모 선정\n2026년 9월 29일 수행협약 체결\n11월 13일 광주 북구 임동의 한 기관에서 현장 실증\n11월 16일 최종결과보고 제출, 성과발표 평가는 11월 25일",
      en: "Task that grew out of my SKT 'Promp.T for Everyone' prize entry\nSelected as an individual entry for the Gwangju National Science Museum's 2026 My AI Lab 'AI-Ieum Project'\nProject agreement signed on September 29, 2026\nField session at an institution in Im-dong, Buk-gu, Gwangju on November 13\nFinal report submitted on November 16; final presentation review on November 25",
    },
    story: {
      problem: {
        ko: "어머니가 경고 문자 사진을 보내며 무시해도 되는지 질문\n제가 답하기까지 47분의 공백\n어르신이 낯선 문자와 전화 앞에서 **혼자 판단해야 하는 그 시간**을 줄이는 것이 목표",
        en: "My mother sent a photo of a warning text and asked whether she could ignore it\n47 minutes passed before I replied\nGoal: shorten **the time seniors spend deciding alone** in front of an unfamiliar text or call",
      },
      insight: {
        ko: "처음 설계는 의심 문자를 판별해 주는 서비스\n2차 멘토링에서 탐지 제품을 쫓아가며 기획이 커졌다는 진단\n주 기능을 사기 상황을 미리 겪어 보는 **3단계 훈련으로 재설정**\n문자 확인은 보조 기능으로 유지",
        en: "First design: a service that judges suspicious texts\nSecond mentoring session: told the plan had grown by chasing detection products\nReset the main feature to **a three-step rehearsal of scam situations**\nText checking kept as a secondary feature",
      },
      solution: {
        ko: "규칙이 먼저 판별, AI는 마지막에 보태는 순서\n**AI는 위험 등급 상향만 가능**, 3초 안에 답하지 못하면 규칙 결과로 응답\n문자 원문 미저장\n훈련은 사례 20개를 받기, 고르기, 결과 확인의 3단계로 진행\n글이 어려운 분을 위한 그림 연습 20개 별도 구성",
        en: "Rules judge first; AI adds to the result last\n**AI can only raise the risk level**; if it does not answer within 3 seconds, the rule result is returned\nOriginal texts not stored\nTraining in three steps (receive, choose, review) over 20 cases\n20 picture-based exercises built separately for people who find reading difficult",
      },
    },
    team: {
      ko: "개인 과제",
      en: "Individual project",
    },
    role: {
      ko: "개인 과제 | 기획, 판별 기준과 검증 절차 설계, 배포 구조 결정, 실증 진행",
      en: "Individual | Planning, detection criteria and evaluation procedure design, deployment decisions, field session",
    },
    tags: {
      ko: ["사기 예방 교육", "시니어", "규칙과 LLM 결합", "현장 실증"],
      en: ["Scam-prevention training", "Seniors", "Rules plus LLM", "Field session"],
    },
    stack: ["Python", "FastAPI", "Claude API", "SQLite", "Docker", "AWS EC2", "GitHub Actions"],
    highlights: {
      ko: [
        "규칙 조정에 쓴 데이터의 정확도 99.0%는 **공식 수치에서 제외**, 별도 검증셋 200건으로만 산출",
        "놓치는 쪽이 잘못 경고하는 쪽보다 위험하다는 기준, 미탐 0건, 정상 문자의 8.0%에 '조심' 경고",
        "AI는 위험 등급 상향만, 응답이 3초를 넘기거나 실패하면 규칙 결과로 답하도록 기준 정의",
        "실사용 규모에 맞춘 서버 1대 블루그린 전환 결정, 리허설 전환 실패 0건, 버린 대안과 한계 기록",
        "실증 참여자 의견은 'QR 첫 접속이 가장 어렵다', 다음 회기 접속 동행, 짧은 주소, 보조 진행자",
      ],
      en: [
        "The 99.0% accuracy measured on data used to tune the rules was **left out of the official numbers**. Official numbers come only from a separately written 200-item validation set.",
        "I set the criteria on the view that a miss is more dangerous than a false warning. As a result there were no misses, but 8.0% of normal texts receive a 'caution' warning.",
        "Set the criteria that the AI may only raise the risk level, and that the service answers with the rule result if the AI takes longer than 3 seconds or fails.",
        "Chose blue-green switching on a single server to match the real usage scale. The rehearsal switch had zero failed requests, and the rejected alternatives and limits are recorded as decision records.",
        "In the field session, participants said the first QR-code access step was the hardest. For the next session I plan to help with access from the start and prepare a short address and an assistant facilitator.",
      ],
    },
    proof: {
      ko: [
        "목표 50명 2회 중 20명 1회 실증, 만족도 미측정",
        "정확도와 미탐률은 목표 수치 초과, 두 사람 교차 표시는 미완",
        "제출 발표자료에 **미달을 미달로 표기**, 성과발표도 못 한 것부터 말할 계획",
        "좋은 수치부터 의심, 규칙 보강의 직접 근거가 아닌 검증셋 200건으로 재측정, 일부 문장 노출 사실 명시",
      ],
      en: [
        "The goal of two sessions with 50 seniors ended at one session with 20, and satisfaction was not measured. Accuracy and miss rate cleared the targets, but two-person cross-labeling was not finished. In the submitted deck I **marked the shortfall as a shortfall**, and I plan to open the final presentation with what I did not achieve.",
        "I questioned good numbers first and re-measured on a 200-item validation set that was not the direct basis for patching the rules, and I noted that even that set includes some sentences I had seen while editing the rules.",
      ],
    },
    metrics: [
      {
        value: "96.0%",
        label: {
          ko: "정확도(검증셋 200건, 규칙과 AI 결합)",
          en: "Accuracy (200-item validation set, rules plus AI)",
        },
      },
      {
        value: "0.0%",
        label: {
          ko: "미탐률(사기 100건 중 놓친 것 0건, 유효 2회)",
          en: "Miss rate (0 of 100 scam texts missed, two valid runs)",
        },
      },
      {
        value: "8.0%",
        label: {
          ko: "정상 문자에 붙은 '조심' 경고(미탐을 줄인 대가)",
          en: "Normal texts flagged 'caution' (the cost of fewer misses)",
        },
      },
      {
        value: { ko: "20명", en: "20" },
        label: {
          ko: "어르신 단체 실증(2026.11.13)",
          en: "Seniors in the field session (Nov 13, 2026)",
        },
      },
    ],
    caseStudy: {
      title: {
        ko: "놓친 11건을 보고도 규칙을 고치지 않은 이유",
        en: "Why I Left the Rules Alone After Seeing the 11 Misses",
      },
      summary: {
        ko: "검증셋에 맞춰 규칙을 고칠수록 그 검증셋으로 잰 수치의 신뢰도 하락",
        en: "The more you tune rules to a validation set, the less you can trust numbers measured on that same set.",
      },
      content: {
        ko: "11월 11일, 공식 검증셋에서 규칙만으로 놓친 사기 문자 11건을 유형별로 분석\n선택지 셋은 규칙 유지, AI 실패 때만 쓰는 안전판 추가, 놓친 문장의 낱말로 규칙 보강\n낱말 보강은 이미 두 번 시도, 새 작성자가 쓴 검증셋에서는 효과가 이어지지 않은 방법\n규칙은 고치지 않고 규칙과 AI를 함께 쓴 값을 공식 수치로 결정\n규칙만 썼을 때의 정확도 93.5%, 미탐률 11.0%는 AI가 멈췄을 때의 바닥 성능으로 병기",
        en: "On November 11, analyzed by type the 11 scam texts that rules alone missed on the official validation set\nThree options: keep the rules, add a safety net used only when the AI fails, or patch the rules with words from the missed sentences\nWord-level patches already tried twice; the gains did not carry over to a validation set written by a new author\nRules left untouched; the rules-plus-AI result set as the official number\nRules-only 93.5% accuracy and 11.0% miss rate reported alongside as the floor when the AI is down",
      },
    },
    heroImage: "/projects/ansim-ieum/about-desktop.webp",
    cardImage: "/projects/ansim-ieum/card-screens.webp",
    screenshots: [
      {
        src: "/projects/ansim-ieum/train-mobile.webp",
        alt: {
          ko: "훈련 시작 화면. 문자와 전화 사례 5개를 5분 안팎으로 연습",
          en: "Training start screen: five text and call cases in about five minutes",
        },
      },
      {
        src: "/projects/ansim-ieum/play-mobile.webp",
        alt: {
          ko: "그림 연습 고르기. 글이 어려운 분을 위한 상황 그림",
          en: "Picture exercises for people who find reading difficult",
        },
      },
      {
        src: "/projects/ansim-ieum/demo-mobile.webp",
        alt: {
          ko: "의심 문자 확인 화면",
          en: "Suspicious text check screen",
        },
      },
      {
        src: "/projects/ansim-ieum/home-mobile.webp",
        alt: {
          ko: "시작 화면. 연습과 문자 확인 중에서 고르기",
          en: "Start screen: choose between practice and text check",
        },
      },
    ],
    sections: [
      {
        id: "measurement",
        title: {
          ko: "측정 방법과 단서",
          en: "How It Was Measured, and the Caveats",
        },
        body: {
          ko: "2026년 11월 16일, 검증셋 200건(사기 100건, 정상 100건)으로 측정\n규칙과 AI를 함께 쓴 측정은 세 번 실행, 응답 지연 한 건이 섞인 회차는 무효 처리\n유효 2회의 결과가 같아 공식 수치로 사용, 정상 문자의 8.0%는 조심 단계로 상향\n정답 표시는 한 사람이 담당\n일부 문장은 규칙을 고칠 때 본 적이 있어 완전히 처음 보는 데이터는 아니라는 한계",
          en: "Measured on November 16, 2026 with a 200-item validation set (100 scam, 100 normal)\nRules-plus-AI measurement run three times; the run containing one delayed response voided\nBoth valid runs gave the same result, used as the official numbers; 8.0% of normal texts raised to the caution level\nLabels assigned by one person\nLimitation: some sentences were seen while editing the rules, so the set is not fully unseen",
        },
        table: {
          ko: {
            columns: ["조건", "정확도", "미탐률", "쓰임"],
            rows: [
              ["규칙과 AI 결합(검증셋 200건, 유효 2회)", "96.0%", "0.0%", "공식 수치"],
              ["규칙만(같은 검증셋)", "93.5%", "11.0%", "AI가 멈췄을 때의 바닥 성능으로 병기"],
              ["규칙 조정에 쓴 데이터", "99.0%", "미기재", "공식 수치에서 제외"],
            ],
          },
          en: {
            columns: ["Condition", "Accuracy", "Miss rate", "Use"],
            rows: [
              ["Rules plus AI (200-item validation set, two valid runs)", "96.0%", "0.0%", "Official numbers"],
              ["Rules only (same validation set)", "93.5%", "11.0%", "Reported alongside as the floor when the AI is down"],
              ["Data used to tune the rules", "99.0%", "Not reported", "Left out of the official numbers"],
            ],
          },
        },
      },
      {
        id: "field",
        title: {
          ko: "현장 실증",
          en: "Field Session",
        },
        body: {
          ko: "2026년 11월 13일 오전, 광주 북구 임동의 한 기관 교육장에서 어르신 20명과 진행\n한 분씩 휴대폰 접속을 도운 뒤 각자 연습, 짧은 대화\n끝까지 마친 사람 수와 만족도는 미기록\n다음 회기부터 회기별 QR로 완료 수 집계 예정",
          en: "On the morning of November 13, 2026, ran the session with 20 seniors in a training room at an institution in Im-dong, Buk-gu, Gwangju\nHelped each person connect on their phone, then each practiced on their own, with a short conversation\nNumber who finished and satisfaction not recorded\nCompletion counts via per-session QR codes planned from the next session",
        },
        image: "/projects/ansim-ieum/field-1113.webp",
      },
      {
        id: "architecture",
        title: {
          ko: "구성",
          en: "Architecture",
        },
        body: {
          ko: "Python, FastAPI 백엔드, 규칙 엔진 뒤에 Anthropic Claude API가 붙는 판별 구조\nHTML, CSS, JavaScript 화면(빌드 도구 없음), 설치 없이 홈 화면에 추가 가능\nSQLite에는 개인을 알아볼 수 없는 통계 값만 저장\nDocker 이미지를 AWS EC2 서버 1대에 배포, Caddy로 HTTPS 처리\nGitHub Actions에서 테스트 실행",
          en: "Python and FastAPI backend; detection runs a rule engine followed by the Anthropic Claude API\nHTML, CSS, and JavaScript interface with no build tool; can be added to the home screen without installation\nSQLite holds only non-identifying statistics\nDocker image deployed to a single AWS EC2 server, HTTPS handled by Caddy\nTests run in GitHub Actions",
        },
      },
    ],
    artifacts: {
      ko: ["웹 서비스(ansimieum.kr)", "최종결과보고 발표자료 5쪽", "사용 매뉴얼 2쪽", "시연영상 2분 22초"],
      en: ["Web service (ansimieum.kr)", "Final report deck (5 pages)", "User manual (2 pages)", "Demo video (2 min 22 s)"],
    },
    interviewQuestions: {
      ko: [],
      en: [],
    },
    links: {
      demo: "https://ansimieum.kr/",
    },
  },
  {
    slug: "incident-agent-ablation",
    featured: false,
    status: "completed",
    sortDate: "2026-10-22",
    stack: ["LangGraph", "MCP", "RAG", "LLM-as-a-Judge", "LangSmith", "pytest"],
    period: {
      ko: "2026.10.20 - 2026.10.22",
      en: "Oct 20 - 22, 2026",
    },
    category: {
      ko: "SKALA 4기 개인 과제 / AI 에이전트 평가",
      en: "SKALA Cohort 4 Individual Assignment / AI Agent Evaluation",
    },
    title: {
      ko: "장애 대응 에이전트 Ablation | 개선을 하나씩 켜고 끄며 무엇이 효과였는지 통계로 가린 평가 설계",
      en: "Incident-Response Agent Ablation | Switching Each Improvement On and Off to Show Statistically Which One Worked",
    },
    summary: {
      ko: "강사 제공 장애 대응 에이전트에 RAG(문서 검색), Judge(답을 내보내기 전 AI 검사), 비용 최적화를 설정 스위치로 붙이고 7개 구성으로 비교했습니다. 처음 보는 시험 문제 36개 중 정답 매뉴얼이 있는 질문에서 **필수 매뉴얼 누락이 56%에서 9%로** 줄었고, 채점하는 AI가 후한지도 따로 쟀습니다.",
      en: "I added RAG, a judge, and cost optimizations to an instructor-provided incident-response agent as config switches and compared seven configurations. Among the 36 held-out questions that have a matching runbook, **missed required runbooks fell from 56% to 9%**, and I separately measured how lenient the grading AI was.",
    },
    brief: {
      what: { ko: "강사 제공 장애 대응 에이전트에 개선을 스위치로 붙여 효과를 가린 SKALA 4기 개인 평가 과제", en: "SKALA Cohort 4 individual task: added improvements to an instructor-provided incident agent as switches and isolated each effect" },
      pain: { ko: "원본이 질문과 다른 매뉴얼로 답했고, 개선을 한꺼번에 붙이면 효과를 알 수 없음", en: "The original answered with a runbook unrelated to the question, and stacking fixes together would hide which one worked" },
      solution: { ko: "RAG(문서 검색 기반 답변), Judge, 비용 최적화를 설정 스위치로 붙인 7개 구성 비교", en: "Comparison of seven configurations adding RAG (document-search answers), a judge, and cost optimization as config switches" },
      how: { ko: "질문 60개 x 3회, 실제 API 1,260회 실행, 따로 떼어 둔 시험 문제(holdout) 36개는 v2 구현 전에 고정, 신뢰구간으로 개선별 기여 분리", en: "60 questions x 3 runs, 1,260 real API runs; 36 holdout questions fixed before the v2 work; confidence intervals separate each gain" },
      effect: { ko: "정답 매뉴얼이 있는 holdout 질문에서 필수 매뉴얼 누락 56%에서 9%\n한계: 다른 AI가 쓴 외부 문항 15개에서는 누락 58%", en: "Missed required runbooks fell from 56% to 9% on holdout questions with a matching runbook\nLimit: 58% missed on 15 external questions written by another AI" },
    },
    context: {
      ko: "SKALA 4기 AI Agent Mini-Project 선택과제 1(Base AI Agent 개선), 개인 과제\n원본 에이전트(LangGraph, MCP)는 강사 제공 코드, 원본 노드는 그대로 두고 설정으로 교체\nAI 도구와 함께 진행했고 문서의 수치는 결과 파일과 자동 대조\n모의 모니터링과 직접 만든 합성 질문 60개 기준이며 운영 환경 적용은 아님\n한계: 다른 AI가 쓴 외부 문항 15개에서는 누락이 58%로 더 많았음",
      en: "SKALA Cohort 4 AI Agent Mini-Project, optional task 1 (improving the base agent), individual assignment\nThe original agent (LangGraph, MCP) was instructor-provided; its nodes were left intact and swapped by config\nI worked with AI tools, and every number in the write-up is checked automatically against the result files\nMeasured on mock monitoring data and 60 synthetic questions I wrote; not a production deployment\nLimit: on 15 external questions written by another AI, the miss rate was higher at 58%",
    },
    story: {
      problem: {
        ko: "원본은 질문이 아니라 경고 문구로 매뉴얼을 선택, DB 다운 질문에 응답 지연 매뉴얼로 답변\n검수 규칙은 형식만 확인(30자 이상, 번호 포함)\n**여러 개선을 한꺼번에 붙이면 무엇이 효과였는지 알 수 없는 구조**",
        en: "The original picked a runbook from alert text rather than the question, answering a database-down question with the slow-response runbook\nIts validation rule checked format only (30+ characters and a numbered step)\n**Adding several improvements at once would hide which one actually worked**",
      },
      insight: {
        ko: "개선마다 스위치를 두면 같은 질문끼리 켰을 때와 껐을 때를 짝지어 비교 가능\n시험 문제를 구현 전에 커밋으로 고정해야 \"시험 보고 고쳤다\"는 의심 차단\n**채점하는 AI도 검증 대상**",
        en: "A switch per improvement lets the same question be compared with it on and off\nFixing the test questions in a commit before implementation rules out \"tuned to the test\"\n**The grading AI needs checking too**",
      },
      solution: {
        ko: "7개 구성 x 60문제 x 3회, 실제 API 1,260회 실행(실행 오류 0)\nholdout 36문제는 v2 구현 전에 고정, 기준값은 dev 24문제에서만 조정\n**paired bootstrap 95% 신뢰구간으로 개선별 기여 분리**\n평가 Judge 점수와 별개로 코드로 센 지표 병행, 다른 AI 모델의 블라인드 채점 60건과 대조",
        en: "Seven configurations x 60 questions x 3 runs: 1,260 real API runs with zero execution errors\nThe 36 holdout questions were fixed before the v2 work; thresholds were tuned on the 24 dev questions only\n**Paired bootstrap 95% confidence intervals separated each improvement's contribution**\nCode-counted metrics ran alongside the evaluation judge's score, cross-checked against 60 blind labels from a different AI model",
      },
    },
    team: {
      ko: "개인 과제",
      en: "Individual assignment",
    },
    role: {
      ko: "개인 과제 | 평가 설계, 실험 실행, 결과 분석, 보고서와 발표",
      en: "Individual | Evaluation design, experiment runs, result analysis, report and presentation",
    },
    tags: {
      ko: ["Ablation study", "RAG 평가", "LLM-as-a-Judge", "재현성"],
      en: ["Ablation study", "RAG evaluation", "LLM-as-a-Judge", "Reproducibility"],
    },
    highlights: {
      ko: [
        "RAG 단독 기여: 필수 매뉴얼 누락 **-46%p(95% CI -70 ~ -22)**",
        "v2 보완(최소 유사도 미만이면 넣지 않음): 무관 매뉴얼 혼입 -24%p(95% CI -41 ~ -10)",
        "파이프라인 Judge는 품질 향상이 확인되지 않아 그대로 보고(질의당 +1.8 ~ 2.7초)",
        "평가 Judge는 다른 AI가 불합격으로 본 답 29개 중 17개(59%)를 합격 처리, 결론은 코드로 센 지표로 도출",
        "같은 부하로 다시 쟀더니 \"캐스케이드가 지연도 줄였다\"는 결론이 사라져 보고서에서 정정",
        "대가: 최종 구성은 원본보다 질의당 +2.5초(p95 8.6초 → 12.1초)",
        "오프라인 테스트 230개와 CI(테스트, 수치 재생성 일치, 문서 수치 대조)",
      ],
      en: [
        "RAG alone: missed required runbooks **-46 pp (95% CI -70 to -22)**",
        "v2 fix (skip runbooks below a minimum similarity): irrelevant runbook citations -24 pp (95% CI -41 to -10)",
        "The pipeline judge showed no confirmed quality gain, and I reported it as such (+1.8 to 2.7 s per query)",
        "The evaluation judge passed 17 of 29 answers (59%) that a different AI had failed, so conclusions rest on code-counted metrics",
        "Re-measuring under equal load removed the finding that the cascade also cut latency, and I corrected the report",
        "Trade-off: the final configuration is 2.5 s slower per query than the original (p95 8.6 s → 12.1 s)",
        "230 offline tests and CI (tests, regenerated-number match, document-number check)",
      ],
    },
    proof: {
      ko: [
        "기능을 더하기 전에 재는 방법부터 설계",
        "기대와 다른 결과(Judge 효과 미확인, 로컬 모델에서 누락 미개선)도 수치 그대로 기록",
      ],
      en: [
        "Designed the measurement before adding features",
        "Recorded results that went against expectations as measured (no judge gain, no miss-rate gain on a local model)",
      ],
    },
    metrics: [
      {
        value: "56% → 9%",
        label: {
          ko: "필수 매뉴얼 누락률(holdout, 정답 매뉴얼이 있는 질문 x 3회 평균)",
          en: "Missed required runbooks (holdout questions that have a matching runbook, mean of 3 runs)",
        },
      },
      {
        value: "-84%",
        label: {
          ko: "장애 1건 API 요금($0.00343 → $0.00057, 공개 단가 추정)",
          en: "API cost per incident ($0.00343 → $0.00057, estimated from list prices)",
        },
      },
      {
        value: "62.8s → 9.2s",
        label: {
          ko: "동시 질문 10건 처리 시간",
          en: "Time to finish 10 concurrent questions",
        },
      },
      {
        value: "0/19 → 18/18",
        label: {
          ko: "조회 30% 고장 주입 시 끝까지 답한 질문(답 품질은 미측정)",
          en: "Questions answered to completion with 30% injected tool failures (answer quality not measured)",
        },
      },
    ],
    caseStudy: {
      title: {
        ko: "효과가 있을 거라 믿은 Judge를 재 보니",
        en: "Measuring the Judge I Expected to Help",
      },
      summary: {
        ko: "품질 향상은 확인되지 않았고, 쓸모는 다른 곳에서 발견",
        en: "No confirmed quality gain; its use turned up somewhere else.",
      },
      content: {
        ko: "답을 내보내기 전에 검사하는 파이프라인 Judge를 붙이면 품질이 오를 것으로 예상\n같은 질문끼리 짝지어 비교하니 누락, 혼입, 핵심 문구 포함 모두 신뢰구간이 0을 포함해 차이 미확인, 시간과 비용만 증가\n숨기지 않고 조작 테스트로 쓸모를 다시 측정: 답 29개에 일부러 틀린 내용 삽입\n근거에 없는 수치는 코드 검증이 28/28, Judge가 16/28 탐지\n없는 시스템명은 코드 검증이 0/29, Judge가 21/29 탐지(멀쩡한 답 오탐 6/29)\n결론: 수치는 코드로 먼저 거르고, 코드로 세기 어려운 시스템명과 절차에 Judge를 쓰는 **상호 보완 구조**",
        en: "Expected a pipeline judge, which checks answers before release, to raise quality\nPaired by question, confidence intervals for misses, irrelevant citations, and key-phrase coverage all included zero; no difference confirmed, only time and cost rose\nRe-measured its use with a tamper test instead of hiding it: wrong content inserted into 29 answers\nNumbers absent from the evidence: code check caught 28/28, judge 16/28\nMade-up system names: code check caught 0/29, judge 21/29 (6/29 false alarms on clean answers)\nConclusion: a **complementary setup** that filters numbers with code first and uses the judge for system names and procedures that code cannot count",
      },
    },
    heroImage: "/projects/incident-agent-ablation/fig6_contrib.webp",
    screenshots: [
      {
        src: "/projects/incident-agent-ablation/fig1_flow.webp",
        alt: {
          ko: "에이전트 흐름과 교체한 노드",
          en: "Agent flow and the nodes that were swapped",
        },
      },
      {
        src: "/projects/incident-agent-ablation/fig9_judge.webp",
        alt: {
          ko: "구성별 평가 Judge 통과율과 코드로 센 지표 비교",
          en: "Evaluation-judge pass rate versus the code-counted metric by configuration",
        },
      },
      {
        src: "/projects/incident-agent-ablation/fig10_demo.webp",
        alt: {
          ko: "DB 다운 질문에 대한 원본과 최종 구성의 답 비교",
          en: "Original versus final answers to a database-down question",
        },
      },
      {
        src: "/projects/incident-agent-ablation/fig8_fault.webp",
        alt: {
          ko: "도구 고장 주입 시험 결과",
          en: "Results of the injected tool-failure test",
        },
      },
    ],
    sections: [],
    artifacts: {
      ko: ["공개 저장소(README, 수치 근거 CLAIMS.md)", "발표 덱", "회고 문서"],
      en: ["Public repository (README, CLAIMS.md with number sources)", "Presentation deck", "Retrospective"],
    },
    interviewQuestions: {
      ko: [],
      en: [],
    },
    links: {
      github: "https://github.com/jang961111-hash/incident-agent-ablation",
    },
  },
  {
    slug: "skala-churn-modeling",
    featured: false,
    status: "completed",
    sortDate: "2026-09-11",
    stack: ["XGBoost", "ExtraTrees", "SHAP", "Stratified K-Fold"],
    period: {
      ko: "2026.09",
      en: "Sep 2026",
    },
    category: {
      ko: "SKALA 4기 종합실습 / 모델 개발과 최적화",
      en: "SKALA Cohort 4 Capstone Lab / Model Development & Tuning",
    },
    title: {
      ko: "이탈예측 모델링 | Test는 기록만 하고 선택은 교차검증으로만 한 모델 선택",
      en: "Churn Modeling | Selecting Models by Cross-Validation Only, Keeping the Test Set as a Record",
    },
    summary: {
      ko: "가상 저축은행의 고객 이탈 예측 실습에서 예측 성능 지표 **AUC를 0.7722에서 0.8646으로** 올렸습니다(Validation과 Test 평균). Test 점수로는 모델을 고르지 않는다는 기준을 지켰습니다.",
      en: "In a churn-prediction lab for a fictional savings bank, I raised the prediction-quality score **AUC from 0.7722 to 0.8646** (mean of validation and test), keeping the rule of never selecting a model on test scores.",
    },
    brief: {
      what: { ko: "가상 저축은행 고객 이탈을 예측하는 SKALA 4기 개인 종합실습", en: "SKALA Cohort 4 individual capstone lab predicting customer churn for a fictional savings bank" },
      pain: { ko: "저축은행은 떠날 고객을 미리 알아야 하는데, 학습 데이터가 1,260건뿐이라 Test 점수로 고르면 실력이 아닌 운을 고르게 되는 조건", en: "A savings bank needs to know in advance which customers will leave, but with only 1,260 training rows, choosing by test score selects luck rather than skill" },
      solution: { ko: "Test는 기록만 하고 교차검증으로만 고른 모델, EDA와 SHAP에서 설계한 파생변수", en: "A model chosen by cross-validation only (test set recorded, not used) with features designed from EDA and SHAP" },
      how: { ko: "5-Fold 3회 반복 CV 점수 15개 평균으로만 선택, 계열이 다른 세 모델을 순위 평균으로 결합", en: "Selected only by the mean of 15 CV scores (5-Fold x 3); three different model families combined by rank averaging" },
      effect: { ko: "AUC 0.7722에서 0.8646으로 상승(Validation과 Test 평균)", en: "AUC rose from 0.7722 to 0.8646 (mean of validation and test)" },
    },
    context: {
      ko: "SKALA 4기 모델 개발과 최적화 과목의 개인 종합실습\n과제 배경은 가상의 저축은행 시나리오(실제 고객사 아님)\n제출 노트북을 새 환경에서 다시 돌려 같은 숫자가 나오는 것까지 확인",
      en: "An individual capstone lab in SKALA Cohort 4's model development course\nThe business setting is a fictional savings bank, not a real client\nRe-ran the submitted notebook in a fresh environment and confirmed the same numbers",
    },
    story: {
      problem: {
        ko: "Train 1,260건의 작은 데이터\nfold별 표준편차 0.025, 상위 앙상블 조합 사이 차이는 0.0005\n**Test 점수로 고르면 실력이 아니라 운을 고르는 조건**",
        en: "A small dataset of 1,260 training rows\nFold-to-fold standard deviation of 0.025 versus a 0.0005 gap between the top ensembles\n**Selecting on test scores here means selecting luck, not skill**",
      },
      insight: {
        ko: "파생변수의 효과 약 +0.10, 하이퍼파라미터 튜닝의 효과 약 +0.005\n**좋은 변수 하나가 튜닝 여러 번보다 크다**는 것을 숫자로 확인\n파생변수는 EDA와 SHAP에서 본 패턴에서만 설계",
        en: "Engineered features added about +0.10, hyperparameter tuning about +0.005\nConfirmed in numbers that **one good feature outweighs many rounds of tuning**\nFeatures were designed only from patterns seen in EDA and SHAP",
      },
      solution: {
        ko: "Stratified 5-Fold를 3회 반복한 CV 점수 15개의 평균으로만 모델 선택, Test는 기록만\n단일 모델 1위는 로지스틱 회귀(0.8551), 계열이 다른 세 모델 조합이 0.8593으로 1위\nAUC가 순위 지표라 순위 평균으로 앙상블\n추천받은 설정도 CV 점수가 떨어지면 채택하지 않음",
        en: "Selected models only by the mean of 15 CV scores (Stratified 5-Fold repeated 3 times); the test set was recorded, not used\nBest single model was logistic regression (0.8551); a mix of three different model families ranked first at 0.8593\nEnsembled by rank averaging because AUC is a ranking metric\nRejected any suggested setting whose CV score dropped",
      },
    },
    team: {
      ko: "개인 실습",
      en: "Individual lab",
    },
    role: {
      ko: "개인 실습 | 모델 선택 기준 설계, 파생변수 설계, 실험 기록, 발표 자료 작성",
      en: "Individual | Model-selection criteria, feature design, experiment log, presentation deck",
    },
    tags: {
      ko: ["이탈 예측", "교차검증", "파생변수", "앙상블"],
      en: ["Churn prediction", "Cross-validation", "Feature engineering", "Ensemble"],
    },
    highlights: {
      ko: [
        "**Test는 기록만**, 선택은 Train 안 반복 Cross-validation(5-Fold 3회)으로만",
        "Baseline(depth 3 의사결정나무) AUC 0.7722 → 최종 앙상블 Validation 0.8716, Test 0.8575",
        "실험 24번을 기록하고, 방향을 바꾼 지점과 이유를 남김",
        "로지스틱 회귀, ExtraTrees, XGBoost를 순위 평균으로 결합",
      ],
      en: [
        "**The test set was only recorded**; selection used repeated cross-validation inside the training set (5-Fold, 3 repeats)",
        "Baseline (depth-3 decision tree) AUC 0.7722 → final ensemble 0.8716 on validation, 0.8575 on test",
        "Logged 24 experiments, including where and why the direction changed",
        "Combined logistic regression, ExtraTrees, and XGBoost by rank averaging",
      ],
    },
    proof: {
      ko: [
        "파생변수 약 +0.10과 튜닝 약 +0.005의 차이를 측정해, 작은 데이터에서는 검증 설계와 변수가 먼저라는 결론",
        "Test 점수를 보면서 고르면 점수는 오르지만 실력은 오르지 않는다는 기준으로 진행",
      ],
      en: [
        "Measured the gap between features (about +0.10) and tuning (about +0.005), and concluded that with small data, validation design and features come first",
        "Worked by the rule that choosing while looking at test scores raises the score, not the skill",
      ],
    },
    metrics: [
      {
        value: "0.8646",
        label: {
          ko: "최종 AUC(Validation과 Test 평균, Baseline 0.7722)",
          en: "Final AUC (mean of validation and test; baseline 0.7722)",
        },
      },
      {
        value: "15",
        label: {
          ko: "모델 선택에 쓴 CV 점수(5-Fold 3회 반복)",
          en: "CV scores used for selection (5-Fold × 3 repeats)",
        },
      },
      {
        value: "24",
        label: {
          ko: "기록한 실험 횟수",
          en: "Experiments logged",
        },
      },
    ],
    sections: [],
    artifacts: {
      ko: ["제출 노트북", "실험 기록"],
      en: ["Submitted notebook", "Experiment log"],
    },
    interviewQuestions: {
      ko: [],
      en: [],
    },
    heroImage: "/projects/skala-churn-modeling/baseline_vs_final_auc.webp",
    screenshots: [
      {
        src: "/projects/skala-churn-modeling/feature_engineering_effect.webp",
        alt: {
          ko: "파생변수 단계별 CV AUC 변화",
          en: "CV AUC at each feature-engineering step",
        },
      },
      {
        src: "/projects/skala-churn-modeling/cv_models_vs_ensemble.webp",
        alt: {
          ko: "후보 모델 8개와 앙상블의 CV 점수 비교",
          en: "CV scores of eight candidate models and the ensemble",
        },
      },
      {
        src: "/projects/skala-churn-modeling/selection_noise_cv_std.webp",
        alt: {
          ko: "상위 조합 간 점수 차이와 fold 표준편차 비교",
          en: "Score gap between top combinations versus fold standard deviation",
        },
      },
    ],
    links: {},
  },
  {
    slug: "skala-lora-eval-audit",
    featured: false,
    status: "completed",
    sortDate: "2026-08-13",
    stack: ["Qwen2.5-1.5B", "LoRA", "SFT"],
    period: {
      ko: "2026.08.12 - 2026.08.13",
      en: "Aug 12 - 13, 2026",
    },
    category: {
      ko: "SKALA 4기 개인 과제 / sLLM 파인튜닝",
      en: "SKALA Cohort 4 Individual Assignment / sLLM Fine-tuning",
    },
    title: {
      ko: "sLLM LoRA 평가 감사 | 4.5배 오른 점수를 그대로 믿지 않고 평가 코드부터 점검",
      en: "sLLM LoRA Evaluation Audit | Checking the Evaluation Code Before Trusting a 4.5× Score Gain",
    },
    summary: {
      ko: "추가 학습(파인튜닝)으로 점수가 0.0862에서 0.3852로 올랐지만, 평가 코드와 제 설정을 점검해 **\"형식은 배웠지만 사실은 못 배웠다\"**는 결론을 냈습니다. 모델은 공개 모델 Qwen2.5-1.5B, 학습 방식은 LoRA입니다.",
      en: "Further training (fine-tuning) raised the score from 0.0862 to 0.3852, but auditing the evaluation code and my own settings led to the conclusion: **\"it learned the format, not the facts.\"** The model was the open Qwen2.5-1.5B, trained with LoRA.",
    },
    brief: {
      what: { ko: "Qwen2.5-1.5B LoRA 파인튜닝 점수의 평가 코드를 점검한 SKALA 4기 개인 과제", en: "SKALA Cohort 4 individual task auditing the evaluation code behind a Qwen2.5-1.5B LoRA fine-tuning score" },
      pain: { ko: "점수가 0.0862에서 0.3852로 4.5배 올랐지만 무엇을 재는 점수인지 확인되지 않음", en: "Score rose 4.5x (0.0862 to 0.3852) but what it measured had not been checked" },
      solution: { ko: "평가 범위와 내 설정의 한계를 밝힌 감사 보고서, 결론은 형식은 배웠지만 사실은 못 배웠다", en: "An audit report on the metric's coverage and my own settings, concluding it learned the format, not the facts" },
      how: { ko: "평가 코드를 문항 유형별로 읽어 검사 범위를 표로 정리하고, 학습 샘플 잘림을 사후 점검", en: "Read the evaluation code by question type to tabulate check coverage, then audited training-sample truncation after the fact" },
      effect: { ko: "측정 결과: 환각 검사는 20문항 중 5문항에만 적용, 학습 샘플 582건 중 148건(25.4%)의 정답이 잘림", en: "Measured: hallucination check covered only 5 of 20 questions; answers were truncated in 148 of 582 training samples (25.4%)" },
    },
    context: {
      ko: "SKALA 4기 sLLM 파인튜닝 개인 과제, Base 모델과 SFT 모델 비교 서브노트\nAI 도구와 함께 점검했고 최종 검증은 직접 수행\n점수는 과제 평가 코드 기준이며, 그 코드에 환각 검사 공백이 있다는 점을 함께 기록",
      en: "An individual sLLM fine-tuning assignment comparing the base and SFT models\nI reviewed it with AI tools and did the final verification myself\nThe score follows the assignment's evaluation code, and I recorded that the code has a gap in hallucination checks",
    },
    story: {
      problem: {
        ko: "평균 Total 0.0862 → 0.3852, 약 4.5배 상승\n**오른 점수가 무엇을 재고 있는지**가 확인되지 않은 상태",
        en: "Mean total score rose from 0.0862 to 0.3852, about 4.5×\n**What the higher score was actually measuring** had not been checked",
      },
      insight: {
        ko: "20문항 중 15문항은 Hallucination(환각) 검사가 코드에서 꺼져 있음\n최고점 문항(Total 0.702)이 자료에 없는 등급을 지어낸 답\n집계 환각률 0.0의 분모는 검사가 켜진 5문항뿐",
        en: "For 15 of 20 questions, the hallucination check was disabled in code\nThe top-scoring item (total 0.702) was an answer that invented a grade not in the source\nThe reported 0.0 hallucination rate covered only the 5 questions where the check was on",
      },
      solution: {
        ko: "평가 코드를 문항 유형별로 읽어 검사 범위를 표로 정리\n내 설정 감사: max_length 384 설정에서 **학습 샘플 582건 중 148건(25.4%)의 정답이 잘림**(기본값 512였다면 18건)\n점수와 함께 지표의 한계를 보고서에 명시",
        en: "Read the evaluation code by question type and tabulated what each check covers\nAudited my own setting: with max_length at 384, **the answers of 148 of 582 training samples (25.4%) were truncated** (18 would have been at the default 512)\nReported the metric's limits alongside the score",
      },
    },
    team: {
      ko: "개인 과제",
      en: "Individual assignment",
    },
    role: {
      ko: "개인 과제 | 학습 실행, 평가 코드 점검, 설정 감사, 보고서 작성",
      en: "Individual | Training runs, evaluation-code review, settings audit, report",
    },
    tags: {
      ko: ["LLM 평가", "환각 검증", "파인튜닝", "재현성"],
      en: ["LLM evaluation", "Hallucination check", "Fine-tuning", "Reproducibility"],
    },
    highlights: {
      ko: [
        "점수 4.5배 상승을 성과로 적지 않고 **평가 지표의 검사 범위부터 확인**",
        "Hallucination 검사가 20문항 중 5문항에만 적용된다는 것을 코드에서 확인",
        "max_length 설정으로 학습 데이터 25.4%가 잘린 것을 사후 감사로 발견",
        "내 판단 실패 2건을 보고서에 기록(초기 소요 시간 추정을 믿고 중단, 검증 없이 메모리 설정 변경)",
      ],
      en: [
        "Did not report the 4.5× gain as a result before **checking what the metric actually covers**",
        "Confirmed in code that the hallucination check applied to only 5 of 20 questions",
        "Found in a post-hoc audit that my max_length setting truncated 25.4% of the training data",
        "Recorded two of my own judgment failures in the report (stopping a run on an early time estimate, changing a memory setting without checking)",
      ],
    },
    proof: {
      ko: [
        "이 과제에서는 좋게 나온 숫자를 측정 방법부터 다시 확인",
        "가정으로 바꾼 설정이 실측으로 반증되자 바로 되돌리고 기록",
      ],
      en: [
        "In this assignment I re-checked the measurement first because the number looked good",
        "When a setting I changed on an assumption was disproved by measurement, I reverted it at once and logged it",
      ],
    },
    metrics: [
      {
        value: "15 / 20",
        label: {
          ko: "환각 검사가 적용되지 않은 평가 문항",
          en: "Evaluation questions without a hallucination check",
        },
      },
      {
        value: "25.4%",
        label: {
          ko: "내 설정으로 정답이 잘린 학습 샘플(582건 중 148건)",
          en: "Training samples truncated by my setting (148 of 582)",
        },
      },
      {
        value: "4.5×",
        label: {
          ko: "점수 상승(0.0862 → 0.3852, 환각 검사 공백이 있는 지표 기준)",
          en: "Score gain (0.0862 → 0.3852, on a metric with a hallucination-check gap)",
        },
      },
    ],
    sections: [],
    artifacts: {
      ko: ["서브노트 보고서"],
      en: ["Lab report"],
    },
    interviewQuestions: {
      ko: [],
      en: [],
    },
    heroImage: "/projects/skala-lora-eval-audit/base_vs_finetuned_scores.webp",
    screenshots: [
      {
        src: "/projects/skala-lora-eval-audit/eval_weight_structure.webp",
        alt: {
          ko: "문항 유형별 채점 구조, 20문항 중 15문항은 환각 검사 미적용",
          en: "Scoring structure by question type: 15 of 20 questions have no hallucination check",
        },
      },
      {
        src: "/projects/skala-lora-eval-audit/token_length_audit.webp",
        alt: {
          ko: "학습 데이터 토큰 길이 전수 감사 출력, 582건 중 148건 잘림",
          en: "Full token-length audit of the training data: 148 of 582 samples truncated",
        },
      },
    ],
    links: {},
  },
  {
    slug: "skala-p-match",
    featured: false,
    status: "completed",
    sortDate: "2026-08-11",
    stack: ["Spring Boot", "OAuth2", "JPA", "Mockito", "Vue 3"],
    period: {
      ko: "2026.08",
      en: "Aug 2026",
    },
    category: {
      ko: "SKALA 4기 공통 프로젝트 / MSA 팀 실습",
      en: "SKALA Cohort 4 Shared Project / MSA Team Lab",
    },
    title: {
      ko: "P-Match | 팀 전체를 막던 인증 오류의 원인을 찾아 재현하고 검증한 B2B 조달 매칭 플랫폼",
      en: "P-Match | Tracing, Reproducing, and Verifying the Auth Error That Blocked a B2B Procurement Platform Team",
    },
    summary: {
      ko: "구매기업과 공급기업을 잇는 B2B 조달 매칭 서비스의 6명 팀 실습입니다. User 도메인을 맡아 **팀 전체를 막던 role 충돌의 원인을 규명**하고, 해결안과 검증 테스트 14건을 만들었습니다.",
      en: "A six-person team lab building a B2B procurement matching service. Owning the User domain, I **traced the role conflict that blocked the whole team**, proposed fixes, and wrote 14 verification tests.",
    },
    brief: {
      what: { ko: "구매기업과 공급기업을 잇는 B2B 조달 매칭 서비스, SKALA 4기 6명 팀 실습(User 도메인 담당)", en: "B2B procurement matching service, SKALA Cohort 4 six-person team lab (User domain owner)" },
      pain: { ko: "구매기업과 공급기업 담당자가 로그인해도 내 정보 조회가 500 오류로 실패, 원인인 role 값 충돌이 팀 전체를 막음", en: "Buyer and supplier users hit a 500 error on profile lookup after login; the cause, a role-value clash, blocked the whole team" },
      solution: { ko: "충돌 원인 규명, 재현표, 해결안 A, B, C 제시와 OAuth2 로그인 흐름", en: "Root-cause analysis, a reproduction table, three fix options, and an OAuth2 login flow" },
      how: { ko: "변환기 코드는 팀원이 작성하고, 본인은 검증 테스트 14건 작성(인증 서버는 모의 객체로 대체)", en: "A teammate wrote the converter; I wrote 14 verification tests (auth server replaced by a mock)" },
      effect: { ko: "본인 작성 검증 테스트 14건 통과\n한계: 실제 HTTP 500에서 200으로 바뀌는 과정은 미측정", en: "All 14 of my verification tests pass\nLimit: the real HTTP 500-to-200 change was not measured" },
    },
    context: {
      ko: "SKALA 4기 공통 프로젝트, 도메인별 분업(User, Order, Payment, Matching, Delivery 등)\n강사가 제공한 MSA 템플릿을 조달 도메인으로 바꾸는 과제(팀 인프라는 Kafka, Docker Compose)\n인증 서버는 소스가 없는 완제품이라 고칠 수 없는 조건",
      en: "A SKALA Cohort 4 shared project split by domain (User, Order, Payment, Matching, Delivery, and more)\nThe task was to adapt an instructor-provided MSA template to the procurement domain (team infrastructure: Kafka, Docker Compose)\nThe auth server was a prebuilt binary without source, so it could not be changed",
    },
    story: {
      problem: {
        ko: "로그인 뒤 내 정보 조회가 500 오류\n인증 서버와 user-service가 같은 users 테이블을 서로 다른 role 값으로 읽는 구조\n**DB에 어떤 값을 넣어도 한쪽이 깨지는 충돌**",
        en: "Fetching the user's own profile after login returned a 500 error\nThe auth server and user-service read the same users table with different role values\n**Whatever value went into the database, one side broke**",
      },
      insight: {
        ko: "계획했던 자체 로그인 방식은 인증 서버가 지원하지 않아 불가능\nOAuth2 Authorization Code Flow로 방향 전환\n충돌은 한쪽 코드의 결함이 아니라 두 서비스의 enum 정의 차이에서 발생한다는 것을 재현표로 확인",
        en: "The planned in-service login was impossible because the auth server did not support it\nSwitched to the OAuth2 Authorization Code Flow\nA reproduction table showed the conflict came from the difference between the two services' enum definitions, not from a defect on one side",
      },
      solution: {
        ko: "원인 규명 → 재현표 작성 → 해결안 A, B, C 제시(A안은 저장 값과 도메인 값을 변환기로 분리)\n변환기 코드는 팀원이 작성, 저는 **검증 테스트 14건** 작성(매핑, 역매핑, 과도기 값, null, 예외, 왕복)\n로그아웃 오류 수정, 401 시 토큰 자동 갱신, OAuth2 state 파라미터 추가\n커밋된 환경 파일을 발견해 무시 규칙 추가와 팀 공유",
        en: "Root cause → reproduction table → three options (option A separates stored values from domain values with a converter)\nA teammate wrote the converter; I wrote **14 verification tests** (mapping, reverse mapping, transitional values, null, exceptions, round trip)\nFixed logout, added automatic token refresh on 401, and added the OAuth2 state parameter\nFound a committed environment file, added an ignore rule, and told the team",
      },
    },
    team: {
      ko: "6명 팀(도메인별 분업)",
      en: "Six-person team (split by domain)",
    },
    role: {
      ko: "User 도메인 담당 | 로그인과 인증 흐름, 오류 원인 규명, 해결안 제시, 검증 테스트, 문서화",
      en: "User domain | Login and auth flow, root-cause analysis, fix proposals, verification tests, documentation",
    },
    tags: {
      ko: ["MSA", "인증", "원인 분석", "테스트"],
      en: ["MSA", "Authentication", "Root-cause analysis", "Testing"],
    },
    highlights: {
      ko: [
        "고칠 수 없는 인증 서버와의 충돌을 **원인까지 규명해 팀에 문서로 공유**",
        "본인 작성 검증 테스트 14건 통과(UserServiceTest 8건, RoleConverterTest 6건)",
        "팀원이 작성한 변환기(RoleConverter)에 대한 라인과 브랜치 커버리지 100%(2026-09 재측정)",
        "OAuth2 Authorization Code Flow 로그인, 토큰 자동 갱신, state 파라미터로 위조 콜백 방어",
        "실행 방법과 API 목록(Swagger), 로컬 개발 주의사항을 README로 정리",
      ],
      en: [
        "**Traced a conflict with an unchangeable auth server to its root cause and shared it with the team in writing**",
        "All 14 of my verification tests pass (8 in UserServiceTest, 6 in RoleConverterTest)",
        "100% line and branch coverage on the teammate-written RoleConverter (re-measured Sep 2026)",
        "OAuth2 Authorization Code Flow login, automatic token refresh, and a state parameter against forged callbacks",
        "Documented setup, the API list (Swagger), and local development notes in a README",
      ],
    },
    proof: {
      ko: [
        "내 담당 범위 밖에서 생긴 문제도 재현표로 원인을 좁혀 팀이 결정할 수 있게 정리",
        "한계: 인증 서버는 모의 객체로 대체했고, 실제 HTTP 500에서 200으로 바뀌는 과정은 측정하지 못함",
      ],
      en: [
        "For a problem outside my own scope, I narrowed the cause with a reproduction table so the team could decide",
        "Limit: the auth server was mocked, and the real HTTP 500-to-200 change was not measured",
      ],
    },
    metrics: [
      {
        value: "14 / 14",
        label: {
          ko: "본인 작성 검증 테스트 통과",
          en: "My verification tests passing",
        },
      },
      {
        value: "100%",
        label: {
          ko: "변환기 코드 한정 라인과 브랜치 커버리지",
          en: "Line and branch coverage, converter code only",
        },
      },
      {
        value: { ko: "6명", en: "6" },
        label: {
          ko: "팀 인원(도메인별 분업)",
          en: "Team members (split by domain)",
        },
      },
    ],
    sections: [],
    artifacts: {
      ko: ["user-service README", "재현표와 해결안 문서", "검증 테스트"],
      en: ["user-service README", "Reproduction table and options", "Verification tests"],
    },
    interviewQuestions: {
      ko: [],
      en: [],
    },
    heroImage: "/projects/skala-p-match/role_enum_troubleshooting.webp",
    screenshots: [
      {
        src: "/projects/skala-p-match/login_screen.webp",
        alt: {
          ko: "OAuth2 로그인으로 들어가는 진입 화면",
          en: "Entry screen that leads into the OAuth2 login",
        },
      },
      {
        src: "/projects/skala-p-match/service_architecture.webp",
        alt: {
          ko: "팀 최종 발표 자료의 서비스 구조 장",
          en: "Service architecture slide from the team's final deck",
        },
      },
    ],
    links: {},
  },
  {
    slug: "skala-db-sql-lab",
    featured: false,
    status: "completed",
    sortDate: "2026-07-24",
    stack: ["PostgreSQL", "SQL", "Materialized View", "EXPLAIN (BUFFERS)"],
    period: {
      ko: "2026.07",
      en: "Jul 2026",
    },
    category: {
      ko: "SKALA 4기 종합실습 / DB와 SQL",
      en: "SKALA Cohort 4 Capstone Lab / Database & SQL",
    },
    title: {
      ko: "DB/SQL 종합실습 | 외부 리뷰 뒤 다시 검증해, 정상처럼 보이던 지표의 상쇄된 오류 두 개를 정정",
      en: "DB/SQL Capstone Lab | Re-verifying After a Review and Correcting Two Offsetting Errors in a Metric That Looked Correct",
    },
    summary: {
      ko: "학사관리 DB 설계부터 고급 SQL, 성능 튜닝까지 다룬 개인 종합실습입니다. 재구매율 지표의 오류 두 개가 서로 상쇄돼 정상처럼 보이던 것을 정정했고, 강사 개별 평가 피드백에서 **100점(S+등급)**을 받았습니다.",
      en: "An individual capstone lab covering schema design, advanced SQL, and performance tuning. I corrected a repurchase-rate metric in which two errors had been cancelling each other out, and received **100 points (grade S+)** in the instructor's individual evaluation feedback.",
    },
    brief: {
      what: { ko: "학사관리 DB 설계부터 고급 SQL, 성능 튜닝까지 다룬 SKALA 4기 개인 종합실습", en: "SKALA Cohort 4 individual capstone lab covering database design, advanced SQL, and performance tuning" },
      pain: { ko: "재구매율이 오류 두 개가 서로 상쇄돼 정상처럼 보임(초안 10.10%)", en: "The repurchase rate looked normal (draft 10.10%) because two errors offset each other" },
      solution: { ko: "분자와 분모 정의를 따로 검증해 바로잡은 지표와 SQL", en: "A corrected metric and queries, with numerator and denominator definitions verified separately" },
      how: { ko: "외부 리뷰 지적 뒤 자체 검증으로 두 오류를 함께 수정하고 EXCEPT로 집합 검증, 순차 스캔을 끈 조건에서 5회 반복 실측", en: "After an outside review, verified on my own and fixed both errors together, checked sets with EXCEPT, and measured 5 repeated runs with sequential scans disabled" },
      effect: { ko: "30일 내 재구매율 10.13%로 정정, 오분류 902건 교정, 강사 개별 평가 100점(S+등급)", en: "30-day repurchase rate corrected to 10.13%, 902 misclassified rows fixed; instructor's individual evaluation 100 points (grade S+)" },
    },
    context: {
      ko: "SKALA 4기 DB/SQL 종합실습(개인), 실습 세 개가 각각 100점(S)\n완성된 SQL을 받아 적지 않고 직접 쓴다는 규칙을 세우고 진행\n주석은 가이드 문구를 옮기지 않고 이해한 내용을 내 표현으로 다시 정리한다는 원칙으로 진행",
      en: "SKALA Cohort 4 DB/SQL capstone lab (individual); each of the three labs scored 100 (S)\nI set the rule of writing every query myself rather than copying finished SQL\nI worked on the principle of restating comments in my own words instead of copying the guide",
    },
    story: {
      problem: {
        ko: "30일 내 재구매율 초안 값 10.10%, 겉으로는 정상\n외부 리뷰 지적 뒤 다시 검증하니 **오류 두 개가 서로 상쇄**된 값\n하나만 고치면 8.98%로 오히려 더 틀어지는 구조",
        en: "The first draft of the 30-day repurchase rate was 10.10%, which looked fine\nRe-checking after an outside review showed **two errors cancelling each other out**\nFixing only one of them made it worse, at 8.98%",
      },
      insight: {
        ko: "미래 주문이 분자에 섞인 오류와, 관찰 30일을 채우지 못한 고객이 분모에 섞인 오류\n숫자가 그럴듯해도 분모와 분자의 정의를 따로 검증해야 한다는 교훈",
        en: "One error let future orders into the numerator; the other let customers without a full 30-day window into the denominator\nThe lesson: even when a number looks plausible, verify the numerator and denominator definitions separately",
      },
      solution: {
        ko: "두 오류를 함께 고쳐 10.13%로 정정(분모 1,698명, 분자 172명)\nNULL이 끼어든 삼값 논리 결함을 규명해 **오분류 902건 교정**, EXCEPT로 집합 검증\n순차 스캔을 끈 조건에서 5회 반복 실측, Materialized View 갱신 비용과 잠금 영향 분석\n종합실습 2는 psql 실행 화면 87장으로 기록",
        en: "Fixed both errors together and corrected the rate to 10.13% (1,698 customers in the denominator, 172 in the numerator)\nTraced a three-valued-logic flaw involving NULL and **corrected 902 misclassified rows**, verified with EXCEPT\nMeasured 5 repeated runs with sequential scans disabled, and analyzed materialized-view refresh cost and locking\nRecorded capstone lab 2 in 87 psql captures",
      },
    },
    team: {
      ko: "개인 실습",
      en: "Individual lab",
    },
    role: {
      ko: "개인 실습 | 스키마 설계, 쿼리 작성과 검증, 성능 실험, 기록",
      en: "Individual | Schema design, query writing and verification, performance experiments, records",
    },
    tags: {
      ko: ["데이터 검증", "SQL", "성능 튜닝", "지표 정의"],
      en: ["Data verification", "SQL", "Performance tuning", "Metric definition"],
    },
    highlights: {
      ko: [
        "재구매율 10.10%를 10.13%로 정정, **상쇄된 오류 두 개**를 외부 리뷰 뒤 자체 검증으로 확인",
        "SQL 삼값 논리(NULL 처리) 결함을 규명해 오분류 902건 교정",
        "학사관리 DB를 엔티티 5개, 3NF로 설계하고 RESTRICT와 CASCADE 옵션 구분",
        "순차 스캔을 끈 조건에서 5회 반복 실측으로 실행 계획 비교",
        "강사 개별 평가 피드백 기준 100점(S+등급), 세부 실습 3개 각 100점(S)",
      ],
      en: [
        "Corrected the repurchase rate from 10.10% to 10.13%, confirming **two offsetting errors** through my own verification after an outside review",
        "Traced an SQL three-valued-logic (NULL handling) flaw and corrected 902 misclassified rows",
        "Designed an academic database with 5 entities in 3NF, distinguishing RESTRICT from CASCADE",
        "Compared execution plans with 5 repeated runs under sequential scans disabled",
        "Instructor's individual evaluation feedback: 100 points (grade S+), with 100 (S) on each of the three labs",
      ],
    },
    proof: {
      ko: [
        "이 실습에서는 그럴듯한 숫자를 정의부터 다시 확인",
        "핵심 실습 과정을 실행 화면으로 남겨 결과를 다시 확인할 수 있게 기록",
      ],
      en: [
        "In this lab I re-checked the metric's definition first, even though the number looked plausible",
        "Recorded the key lab steps in execution captures so the results can be checked again",
      ],
    },
    metrics: [
      {
        value: { ko: "100점", en: "100" },
        label: {
          ko: "강사 개별 평가 피드백 종합(S+등급)",
          en: "Instructor's individual evaluation feedback (grade S+)",
        },
      },
      {
        value: { ko: "902건", en: "902" },
        label: {
          ko: "삼값 논리 결함으로 생긴 오분류 교정",
          en: "Misclassified rows corrected (three-valued-logic flaw)",
        },
      },
      {
        value: "10.13%",
        label: {
          ko: "정정한 30일 내 재구매율(초안 10.10%)",
          en: "Corrected 30-day repurchase rate (draft 10.10%)",
        },
      },
    ],
    sections: [],
    artifacts: {
      ko: ["실습 보고서", "종합실습 2의 psql 실행 화면 87장"],
      en: ["Lab report", "87 psql captures from capstone lab 2"],
    },
    interviewQuestions: {
      ko: [],
      en: [],
    },
    heroImage: "/projects/skala-db-sql-lab/repurchase_rate_decompose.webp",
    screenshots: [
      {
        src: "/projects/skala-db-sql-lab/repurchase_rate_fixed.webp",
        alt: {
          ko: "정정한 재구매율 쿼리 결과 10.13%",
          en: "Corrected repurchase-rate query result: 10.13%",
        },
      },
      {
        src: "/projects/skala-db-sql-lab/q06_tuning_record_table.webp",
        alt: {
          ko: "Q6 튜닝 기록표, 순차 스캔을 끈 조건의 반복 실측",
          en: "Q6 tuning record: repeated runs with sequential scans disabled",
        },
      },
    ],
    links: {},
  },
  {
    slug: "argus",
    stack: ["FastAPI", "Vue 3", "PostgreSQL", "OpenAPI"],
    featured: false,
    status: "completed",
    sortDate: "2026-09-04",
    period: {
      ko: "2026.09.02 - 2026.09.04(3일)",
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
      ko: "반도체 공장(fab) 설비의 부품 교체 요청이 들어오면 AI 에이전트가 규격과 호환, 법령과 조문, 안전서류를 검토해 근거를 붙입니다. **승인 여부는 안전관리자가 결정**하며, 외부 전송을 기본으로 막고 사내에 설치해 쓰는(온프레미스) 승인 워크플로우 서비스입니다.",
      en: "An on-premise approval workflow for semiconductor fab part replacements: AI agents review spec compatibility, applicable regulations, and safety documents and attach the evidence, while the safety manager makes the approval decision.",
    },
    notice: {
      ko: "아래 화면, 기술 스택, 수치는 팀 작업과 병행해 만든 **개인 저장소 기준**입니다. 5인 팀 공식 저장소는 Java와 Spring Boot로 구현했습니다.",
      en: "The screens, stack, and numbers below come from **my personal repository**, built alongside the team work. The five-person team's official repository uses Java and Spring Boot.",
    },
    cardResult: {
      ko: "설계부터 발표까지 3일, 개인 저장소 라이브 E2E 72건 통과",
      en: "Design to presentation in three days; 72 live E2E checks passed in my personal repository",
    },
    brief: {
      what: { ko: "반도체 fab 부품 교체 승인을 돕는 온프레미스 AI 에이전트, SKALA 4기 5인 팀 3일 미니 프로젝트", en: "On-premise AI agent for semiconductor fab part-replacement approval; SKALA Cohort 4 five-person, three-day mini-project" },
      pain: { ko: "규격, 법령, 안전 승인 정보가 흩어져 있고 협력사는 외부 클라우드 LLM 사용 불가", en: "Spec, regulation, and safety information is scattered, and partner sites cannot use external cloud LLMs" },
      solution: { ko: "AI 에이전트가 근거를 모으고 승인과 거절은 안전관리자가 정하는 승인 워크플로우", en: "Approval workflow where AI agents gather evidence and the safety manager approves or rejects" },
      how: { ko: "개인 저장소에서 외부 전송 차단을 기본값으로 두고 외부 AI 공급자는 명시 허용 시에만 기동하도록 설계", en: "In my personal repository, designed egress to be blocked by default, with an external AI provider starting only when explicitly allowed" },
      effect: { ko: "기대 효과: 흩어진 근거를 한 흐름에서 검토(승인 시간 단축은 실측이 없어 미기재)", en: "Expected: evidence reviewed in one flow (approval-time reduction not reported, as never measured)" },
    },
    context: {
      ko: "SKALA(SK AI Leader Academy) 4기 AI 웹 서비스 설계 미니 프로젝트\n5인 팀이 3일 동안 기획, 설계, 구현, 발표까지 진행\n**외부 클라우드 LLM을 쓸 수 없는** 협력사 환경을 전제로 설계",
      en: "SKALA (SK AI Leader Academy) Cohort 4 mini-project in AI web service design\nFive-person team took planning, design, implementation, and presentation through in three days\nDesigned for partner-company sites that **cannot use external cloud LLMs**",
    },
    story: {
      problem: {
        ko: "규격 확인, 법령 조사, 안전 승인에 필요한 정보가 **여러 곳에 분산**\n대상 협력사는 보안상 외부 클라우드 LLM 사용 불가",
        en: "Information for spec checks, regulatory review, and safety sign-off **scattered across sources**\nTarget partner companies cannot use external cloud LLMs for security reasons",
      },
      insight: {
        ko: "팀원이 진행한 현직자 통화 인터뷰에서 처음 세운 가설 가운데 두 개가 틀린 것으로 확인\n설계 원칙은 **'증명은 에이전트가, 판단은 사람이'**\n에이전트는 근거 수집, 승인과 거절은 안전관리자 담당",
        en: "Phone interview with a practitioner, conducted by a teammate, showed two of our initial hypotheses were wrong\nGuiding principle: **'agents prove, people decide'**\nAgents gather evidence; the safety manager approves or rejects",
      },
      solution: {
        ko: "교체 요청 등록 시 역할별 AI 에이전트(규격과 호환, 법령과 조문, 안전서류)가 검토 결과 생성\n화면은 서버가 지정한 간격으로 진행 상태를 폴링해 표시\n안전관리자는 AI 결과물을 읽기 전용으로 확인한 뒤 승인 또는 거절(사유 포함) 결정\nAI 공급자 기본값은 Mock, 외부 전송은 차단(egress_allowed=false)\n외부 전송이 꺼진 상태에서 외부 AI 공급자를 지정하면 **서버가 기동을 거부**하도록 구성",
        en: "On a replacement request, role-specific AI agents (spec and compatibility, regulations, safety documents) generate review results\nUI polls progress at an interval set by the server\nSafety manager reviews the AI output read-only, then approves or rejects (with a reason)\nAI provider defaults to Mock, external egress blocked (egress_allowed=false)\nIf an external AI provider is set while egress is off, the **server refuses to start**",
      },
    },
    team: {
      ko: "5인 팀(SKALA 4기)",
      en: "Five-person team (SKALA Cohort 4)",
    },
    role: {
      ko: "백엔드 설계, 최종 발표",
      en: "Backend design & final presentation",
    },
    tags: {
      ko: ["AI 에이전트", "온프레미스", "Human-in-the-loop", "FastAPI", "Vue 3"],
      en: ["AI Agents", "On-Premise", "Human-in-the-loop", "FastAPI", "Vue 3"],
    },
    highlights: {
      ko: [
        "팀원이 진행한 현직자 통화 인터뷰에서 처음 세운 **가설 두 개가 틀린 것** 확인",
        "'증명은 에이전트가, 판단은 사람이' 원칙, **AI 결과는 근거로만**, 승인과 거절은 안전관리자로 설계",
        "외부 전송 차단 기본값, 외부 AI 공급자는 명시 허용 시에만 기동, **온프레미스 전제를 코드로 강제**",
        "OpenAPI 명세, DBML 8개 테이블, 41장 발표자료로 **설계부터 발표까지 3일 안에** 정리",
        "기각된 가설은 발표자료에 일부러 남기고, 승인 시간 단축 같은 효과 수치는 **실측이 없어 미기재**",
      ],
      en: [
        "A practitioner phone interview conducted by a teammate showed that two of our initial hypotheses were wrong.",
        "Under 'agents prove, people decide', AI review output serves only as evidence; approval and rejection stay with the safety manager.",
        "Made egress-off the default and required explicit permission before any external AI provider can start, enforcing the on-premise premise in code.",
        "Delivered an OpenAPI spec, an 8-table DBML schema, and a 41-slide deck within three days.",
        "Kept the rejected hypotheses in the deck on purpose, and left out effect numbers such as approval-time reduction because they were never measured.",
      ],
    },
    proof: {
      ko: [
        "인터뷰로 가설 검증, **틀린 가설을 지우지 않고 남기는** 방식으로 문제 정의",
        "AI의 역할(근거 수집)과 사람의 역할(판단)을 나누는 경계를 **제품 구조와 설정값**에 반영",
        "**측정하지 않은 효과는 주장하지 않는다**는 원칙으로 결과 보고",
      ],
      en: [
        "Defined the problem by testing hypotheses through an interview and keeping the wrong ones on record instead of erasing them.",
        "Designed the boundary between AI (evidence gathering) and people (judgment) into both the product flow and its configuration.",
        "Reported results on the principle of never claiming an effect that was not measured.",
      ],
    },
    metrics: [
      {
        value: "On-prem",
        label: {
          ko: "외부 전송 차단 기본값(egress_allowed=false)",
          en: "Egress disabled by default (egress_allowed=false)",
        },
      },
      {
        value: "72 / 0",
        label: {
          ko: "라이브 E2E 통과 / 실패(개인 저장소 실행 로그 기준)",
          en: "Live E2E passed / failed (run log of my personal repository)",
        },
      },
      {
        value: "41",
        label: {
          ko: "최종 발표자료 장수",
          en: "Slides in the final deck",
        },
      },
    ],
    caseStudy: {
      title: {
        ko: "증명은 에이전트가, 판단은 사람이",
        en: "Agents Prove, People Decide",
      },
      summary: {
        ko: "안전 승인처럼 책임이 따르는 결정에서 AI는 근거를 모으는 역할에 두고, **판단은 사람에게 남긴** 설계",
        en: "For accountable decisions like safety approval, AI gathers evidence and the judgment stays with people",
      },
      content: {
        ko: "부품 교체 승인은 사고가 나면 **책임이 따르는 결정**\nAI는 규격, 법령, 안전서류 검토 근거 정리까지, 승인과 거절(사유 기재)은 안전관리자\n현직자 통화 인터뷰(팀원 진행)에서 처음 세운 가설 두 개가 틀린 것으로 확인, 발표자료에 유지\n외부 클라우드 LLM을 못 쓰는 협력사라 외부 전송 차단 기본값, 외부 AI 공급자는 명시 허용 시만 기동\n승인 시간 단축 같은 효과 수치는 실측이 없어 미기재",
        en: "Approving a part replacement is a **decision someone is accountable for** if something goes wrong\nAI packages spec, regulatory, and safety-document review as evidence; the safety manager approves, or rejects with a reason\nPractitioner phone interview (conducted by a teammate) showed two initial hypotheses were wrong; kept in the deck\nPartner companies cannot use external cloud LLMs, so egress is blocked by default and an external AI provider starts only when explicitly allowed\nEffect numbers such as approval-time reduction not reported, since never measured",
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
          ko: "Vue 3 + Vite 프론트엔드와 FastAPI(Python) 백엔드가 REST JSON으로 통신\nPostgreSQL(Supabase) 전제, 로컬에서는 SQLite로 검증\n에이전트는 **공통 인터페이스 뒤에 배치**, 3일 범위에서는 고정 응답(Mock)으로 흐름 검증\n이후 LLM 구현체로 교체할 수 있게 설계\n엔지니어와 안전관리자 역할에 따라 화면과 권한 분리",
          en: "Vue 3 + Vite frontend and FastAPI (Python) backend communicate over REST JSON\nPostgreSQL (Supabase) assumed, verified locally on SQLite\nAgents placed **behind a common interface**; within the three-day scope, fixed responses (Mock) validated the flow\nDesigned so LLM implementations can replace them later\nScreens and permissions split by role, engineer and safety manager",
        },
      },
    ],
    artifacts: {
      ko: ["OpenAPI 명세", "DBML ERD", "아키텍처와 시퀀스 다이어그램", "발표자료 41장", "화면 캡처"],
      en: ["OpenAPI spec", "DBML ERD", "Architecture & sequence diagrams", "41-slide deck", "Screen captures"],
    },
    interviewQuestions: {
      ko: [
        "인터뷰에서 어떤 가설이 틀린 것으로 확인되었나요?",
        "왜 AI가 승인까지 하지 않고 근거 수집에서 멈추도록 설계했나요?",
        "외부 LLM을 쓸 수 없는 환경이라는 제약을 설계에 어떻게 반영했나요?",
      ],
      en: [
        "Which hypotheses did the interview show to be wrong?",
        "Why did you stop the AI at evidence gathering instead of letting it approve?",
        "How did the no-external-LLM constraint shape the design?",
      ],
    },
    heroImage: "/projects/argus/agent-run-polling.webp",
    screenshots: [
      {
        src: "/projects/argus/agent-run-polling.webp",
        alt: {
          ko: "AI 검증 진행 화면: 규격과 호환, 법령과 조문, 안전서류 에이전트의 진행 상태를 폴링으로 표시(개인 저장소 구현 화면)",
          en: "AI review progress: polling the status of spec, regulation, and safety-document agents (personal-repository build)",
        },
      },
      {
        src: "/projects/argus/approval-panel.webp",
        alt: {
          ko: "안전관리자 요청 상세: AI 결과물(읽기 전용)과 승인, 거절 처리 패널(개인 저장소 구현 화면)",
          en: "Safety manager request detail: read-only AI output and the approve/reject panel (personal-repository build)",
        },
      },
      {
        src: "/projects/argus/request-form.webp",
        alt: {
          ko: "엔지니어 교체 요청 등록 화면(개인 저장소 구현 화면)",
          en: "Engineer replacement request form (personal-repository build)",
        },
      },
      {
        src: "/projects/argus/team-system-architecture.webp",
        alt: {
          ko: "5인 팀 공식 구조도",
          en: "Official five-person team architecture",
        },
      },
    ],
    links: {
      github: "https://github.com/jang961111-hash/skala-argus",
    },
  },
  {
    slug: "jangbogo",
    stack: ["Next.js", "TypeScript", "Gemini", "Solana", "GCP Cloud Run"],
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
      ko: "장보고(JangBogo) | 에이전트 결제를 가맹점 쪽 정책 엔진이 검증하는 커머스 게이트웨이",
      en: "JangBogo | A Commerce Gateway Where a Merchant-Side Policy Engine Verifies Agent Payments",
    },
    summary: {
      ko: "구매 에이전트가 가맹점 견적을 비교하고 온체인으로 결제하면, 가맹점 쪽 결정론 정책 엔진이 위임장 서명, 유효기간, 범위, 카트, 예산, 온체인 지불을 **6단계로 검증**하는 에이전트 커머스 게이트웨이입니다.",
      en: "An agent-commerce gateway: a buyer agent compares merchant quotes and pays on-chain, while a deterministic merchant-side policy engine verifies mandate signature, expiry, scope, cart, budget, and on-chain payment in six steps.",
    },
    brief: {
      what: { ko: "에이전트 결제를 가맹점 쪽에서 검증하는 커머스 게이트웨이, Google x Solana 해커톤 팀 사공이(등록 2인)", en: "Commerce gateway where the merchant verifies agent payments; Team Sagong-i (two registered members), Google x Solana hackathon" },
      pain: { ko: "에이전트가 자율 구매해도 가맹점은 이 주문을 믿어도 되는지 알 수 없음", en: "Even when agents buy on their own, merchants cannot tell whether an order can be trusted" },
      solution: { ko: "LLM 대신 결정론 정책 엔진이 6단계로 검증하는 가맹점 쪽 게이트웨이", en: "Merchant-side gateway where a deterministic policy engine, not the LLM, verifies in six steps" },
      how: { ko: "위임장 서명, 유효기간, 범위, 카트, 예산, 온체인 지불 순으로 검증, Solana devnet에서 x402 방식 결제", en: "Checks mandate signature, expiry, scope, cart, budget, then on-chain payment; x402-style payment on Solana devnet" },
      effect: { ko: "단위 11 + 통합 20 테스트 31/31 통과, 예산 초과 등 5종 차단을 테스트로 확인(devnet 데모 범위, 실제 결제 없음)", en: "11 unit + 20 integration tests passed (31/31), five attack and error types blocked in tests (devnet demo scope, no real payments)" },
    },
    context: {
      ko: "Google x Solana AI Agentic Hackathon에 팀 사공이(402, 등록 2인)로 제출\nAI Agent와 간편결제를 한 프로젝트에서 미리 경험",
      en: "Submitted to the Google x Solana AI Agentic Hackathon as Team Sagong-i (402, two registered members)\nEarly hands-on experience with AI agents and easy payments in a single project",
    },
    story: {
      problem: {
        ko: "에이전트 자율 구매가 열려도 가맹점에 남는 질문은 '이 에이전트의 주문을 믿어도 되는가'\n카드 결제는 본인인증 단계에 사람이 필요해 에이전트가 끝까지 결제하기 어려운 구조",
        en: "Even when agents can buy on their own, merchants are left asking whether an agent's order can be trusted\nCard payments need a human at the authentication step, so an agent can hardly complete checkout alone",
      },
      insight: {
        ko: "경쟁 제출작은 구매자측 한도 지갑에 집중한다고 분석\n비어 있던 판매자측(가맹점 온보딩 + 검증)을 겨냥\n프롬프트 인젝션은 완전히 막을 수 없다고 판단\n한도 집행은 LLM 대신 결정론 정책 엔진이 맡도록 신뢰 경계 설정",
        en: "Analysis: competing entries concentrate on buyer-side spending-limit wallets\nTargeted the empty merchant side (onboarding and verification)\nJudged that prompt injection cannot be fully prevented\nTrust boundary set so a deterministic policy engine, not the LLM, enforces limits",
      },
      solution: {
        ko: "Gemini는 견적 비교와 선택 사유 서술에만 사용, 결제 승인은 정책 엔진\n가맹점은 코드 없이 온보딩해 엔드포인트 발급\nx402 방식(HTTP 402 → USDC 지불 → 재요청)으로 Solana devnet에서 결제\n주문 nonce를 memo로 묶어 온체인 지불 대조\n검증 6단계는 UI 스텝퍼로 시각화",
        en: "Gemini only compares quotes and writes the selection rationale; payment approval by the policy engine\nMerchants onboard without code and receive an endpoint\nPayment on Solana devnet via the x402 pattern (HTTP 402 → USDC payment → retry)\nOrder nonce bound into the memo to match on-chain payment\nSix verification steps visualized as a UI stepper",
      },
    },
    team: {
      ko: "팀 사공이(402), 등록 2인",
      en: "Team Sagong-i (402), two registered members",
    },
    role: {
      ko: "팀장, PM | 에이전트 설계, 프론트엔드, GCP 인프라",
      en: "Team lead, PM | Agent design, frontend, GCP infrastructure",
    },
    tags: {
      ko: ["AI 에이전트", "Gemini", "Solana", "x402", "Next.js", "Cloud Run"],
      en: ["AI Agents", "Gemini", "Solana", "x402", "Next.js", "Cloud Run"],
    },
    highlights: {
      ko: [
        "구매자 쪽에 몰린 경쟁 흐름과 달리 **판매자 쪽(가맹점 온보딩과 검증)**을 문제로 설정",
        "LLM은 견적 비교, 사유 서술만, 예산, 범위, 만료 집행은 **결정론 정책 엔진**에 둔 신뢰 경계 설계",
        "예산 초과, 만료 위임장, 범위 밖, 과소지불, 리플레이 5종 차단",
        "차단 동작을 테스트로 확인(단위 11 + 통합 20 = **31/31 통과**)",
        "개발 중 원두 조달 지시에 에이전트가 **방금 온보딩된 최저가 베이글**을 사 온 사고",
        "이 사고를 계기로 맞는 상품이 없으면 빈 견적을 돌려주도록 수정",
      ],
      en: [
        "Unlike competing entries clustered on the buyer side, framed the problem on the merchant side (onboarding + verification).",
        "Designed the trust boundary so the LLM only compares quotes and writes rationale, while a deterministic policy engine enforces budget, scope, and expiry.",
        "Verified by tests that five failure/attack types are blocked: over-budget, expired mandate, out-of-scope, underpayment, replay (11 unit + 20 integration = 31/31 passing).",
        "After an incident where the agent, asked to source coffee beans, bought the cheapest newly onboarded bagel instead, quoting was changed to return an empty quote when nothing matches.",
      ],
    },
    proof: {
      ko: [
        "AI에게 맡길 일(비교와 설명)과 **맡기면 안 되는 일(결제 승인)**을 나눠 구조에 반영",
        "테스트로 확인한 동작과 데모 한계(devnet, 고정 환율 시뮬레이션 등)를 **README에 구분 공개**",
      ],
      en: [
        "Separated what AI should do (comparison, explanation) from what it must not (payment approval), and built that into the architecture.",
        "Published test-verified behavior separately from demo-scope limits (devnet, fixed-rate simulation, etc.) in the README.",
      ],
    },
    metrics: [
      {
        value: "31/31",
        label: {
          ko: "단위 11 + 통합 20 테스트 통과",
          en: "11 unit + 20 integration tests passing",
        },
      },
      {
        value: { ko: "6단계", en: "6 steps" },
        label: {
          ko: "판매자측 결정론 검증",
          en: "Merchant-side deterministic checks",
        },
      },
      {
        value: { ko: "5종", en: "5 types" },
        label: {
          ko: "차단 검증된 공격, 오류",
          en: "Attack/error types verified as blocked",
        },
      },
    ],
    sections: [
      {
        id: "trust-boundary",
        title: {
          ko: "신뢰 경계: LLM 불개입 검증 6단계",
          en: "Trust Boundary: Six Checks Without the LLM",
        },
        body: {
          ko: "검증 순서는 ① 위임장, 카트 ed25519 서명 → ② 위임 유효기간 → ③ 위임 범위(카테고리)\n이어서 ④ 카트 정합성(단가, 재고) → ⑤ 누적 예산 한도\n마지막 ⑥ 온체인 지불 일치(금액, 수취인, memo=nonce, 리플레이)\n1~5단계는 결제가 일어나기 전에 거절되어 자금이 이동하지 않는 구간\n6단계는 온체인 트랜잭션을 조회해 대조",
          en: "Verification order: ① mandate and cart ed25519 signatures → ② mandate expiry → ③ mandate scope (category)\nThen ④ cart consistency (unit price, stock) → ⑤ cumulative budget limit\nFinally ⑥ on-chain payment match (amount, recipient, memo = nonce, replay)\nSteps 1-5 reject before any payment happens, so no funds move\nStep 6 checks against the on-chain transaction",
        },
      },
    ],
    artifacts: {
      ko: ["데모 영상", "GitHub 저장소", "설계, QA 문서", "프로젝트 소개서"],
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
          ko: "에이전트 콘솔: 자율 조달 실행 로그와 판매자측 6단계 검증 결과",
          en: "Agent console: autonomous procurement log and six-step merchant-side verification",
        },
      },
      {
        src: "/projects/jangbogo/policy-block.webp",
        alt: {
          ko: "네거티브 데모: 예산 초과 주문을 결제 전에 차단",
          en: "Negative demo: an over-budget order blocked before payment",
        },
      },
      {
        src: "/projects/jangbogo/merchants.webp",
        alt: {
          ko: "가맹점 온보딩: 코드 없이 엔드포인트 발급",
          en: "Merchant onboarding: endpoint issued without code",
        },
      },
      {
        src: "/projects/jangbogo/ledger-settlement.webp",
        alt: {
          ko: "주문과 정산 화면, 주문마다 Solana devnet 거래 연결",
          en: "Orders and settlement screen with each order linked to a Solana devnet transaction",
        },
      },
    ],
    links: {
      github: "https://github.com/jang961111-hash/jangbogo",
      youtube: "https://youtu.be/ALdVyGhXPT8",
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
      ko: "**있는 일자리가 청년에게 닿지 않는** 문제를 풀고자 한 서비스 기획입니다. 구조화 추출, 한국어 문장 임베딩, 생성형 AI를 잇는 파이프라인으로 설계했고, 서류 심사를 통과해 본선에 진출했습니다.",
      en: "A service plan tackling the gap between existing jobs and the youth who never see them, using a structured-extraction + Korean sentence-embedding + generative-AI pipeline; it passed document screening and advanced to the finals.",
    },
    brief: {
      what: { ko: "청년에게 닿지 않는 지역 일자리를 잇는 AI 추천 서비스 기획, 2026 전남광주 청년 AI 솔버톤에 3인 팀 팀장으로 출품", en: "AI recommendation service plan linking local jobs to youth; entered in the 2026 Jeonnam-Gwangju Youth AI Solvathon as lead of a three-person team" },
      pain: { ko: "일자리가 없는 게 아니라 있는 일자리가 청년에게 닿지 않음(청년 실업률 광주 7.0%, 전남 10.1%)", en: "Not a lack of jobs but jobs not reaching youth (youth unemployment 7.0% in Gwangju, 10.1% in Jeonnam)" },
      solution: { ko: "구조화 추출, 한국어 문장 임베딩, 생성형 AI를 잇는 추천 파이프라인 기획", en: "Plan for a pipeline linking structured extraction, Korean sentence embeddings, and generative AI" },
      how: { ko: "심사 관점을 문항에 매핑하고 페르소나 2종, 계획서 제출 시점의 국내외 서비스 13곳 x 7기능 비교표로 차별점 정리", en: "Mapped judging criteria to questions, built two personas, and compared 13 services x 7 features (as of the proposal submission) to pin down differentiation" },
      effect: { ko: "서류 심사를 통과해 본선 진출", en: "Passed document screening and advanced to the finals" },
    },
    context: {
      ko: "팀장이자 공식 서식상 대표자로 기획, PM, 발표 총괄\n사전역량교육 당일 팀이 실습 결과물을 실제 서비스로 배포",
      en: "Team lead and official representative on the form; led planning, PM, and the pitch\nOn the day of the pre-event training, the team deployed its practice output as a real service",
    },
    story: {
      problem: {
        ko: "전체 고용지표는 멀쩡한데 청년만 반대로 악화\n일자리가 없어서가 아니라 있는 일자리가 청년에게 닿지 않는 문제\n청년 실업률 광주 7.0%, 전남 10.1%\n광주 청년 순유출률 2.50%(전국 2위), 광주 구인배율 0.24\n출처를 병기한 통계를 근거로 사용",
        en: "Overall employment indicators look fine, yet only youth employment is worsening\nNot a lack of jobs; existing jobs do not reach young people\nYouth unemployment 7.0% in Gwangju, 10.1% in Jeonnam\nGwangju youth net outflow 2.50% (2nd nationwide), job-openings-to-applicants ratio 0.24\nSourced statistics cited as evidence",
      },
      insight: {
        ko: "심사 관점을 먼저 문항에 매핑\n페르소나 2종으로 대상 사용자 범위 축소\n국내외 서비스 13곳을 7개 기능으로 비교한 표(4단계 신뢰 기호)를 직접 조사해 차별점 정리\n계획서 제출 뒤 비교 대상을 19개로 확대",
        en: "Mapped the judging criteria onto the application questions first\nNarrowed the target users with two personas\nPersonally researched a table comparing 13 domestic and overseas services across 7 features (four-level confidence markers) to pin down differentiation\nExtended the comparison to 19 services after the plan was submitted",
      },
      solution: {
        ko: "'구조화 추출 + 한국어 문장 임베딩 + 생성형 AI' 파이프라인 설계\n제출 규격, 출처 검증 체크리스트 운영\n3쪽, 1.70MB 제출본을 SHA256까지 기록해 관리",
        en: "Designed a 'structured extraction + Korean sentence embedding + generative AI' pipeline\nRan a submission-spec and source-verification checklist\nManaged the 3-page, 1.70 MB submission down to its SHA256 hash",
      },
    },
    team: {
      ko: "3인 팀(팀장, 공식 대표자)",
      en: "Three-person team (team lead, official representative)",
    },
    role: {
      ko: "팀장, PM, 프론트 리드 | 기획, PM, 발표 총괄, React 프론트엔드, LLM, Prompt 추천, 벡터검색",
      en: "Team lead, PM, Frontend lead | Planning, PM & pitch, React frontend, LLM/prompt recommendations & vector search",
    },
    tags: {
      ko: ["문제 정의", "AI 추천", "벡터 검색", "경쟁 분석", "지역 일자리"],
      en: ["Problem framing", "AI recommendations", "Vector search", "Competitive analysis", "Local jobs"],
    },
    highlights: {
      ko: [
        "청년 고용 문제를 '일자리 부족' 대신 **'있는 일자리가 닿지 않는 문제'**로 재정의",
        "심사 관점을 문항에 매핑, 페르소나 2종과 국내외 서비스 **13곳 × 7기능 비교표**로 기획서 구성",
        "제출 규격과 출처 검증 체크리스트 운영, 서류 심사 통과 후 **본선 진출**",
      ],
      en: [
        "Reframed youth unemployment from 'not enough jobs' to 'existing jobs never reach young people'.",
        "Built the proposal from judging-criteria mapping, two personas, and a 13-service × 7-feature comparison table.",
        "Ran a submission-spec and source-verification checklist, passed document screening, and advanced to the finals.",
      ],
    },
    proof: {
      ko: [
        "팀장으로 문제를 **통계 근거와 함께 재정의**, 경쟁 분석으로 차별점을 좁히는 기획 과정 주도",
      ],
      en: [
        "Led, as team lead, a planning process that reframed the problem with sourced data and narrowed differentiation through competitive analysis.",
      ],
    },
    metrics: [
      {
        value: { ko: "본선", en: "Finals" },
        label: {
          ko: "서류 심사 통과, 본선 진출",
          en: "Passed screening, advanced to finals",
        },
      },
      {
        value: "19 × 7",
        label: {
          ko: "경쟁 서비스 × 기능 비교표",
          en: "Competitor services × features compared",
        },
      },
    ],
    sections: [],
    artifacts: {
      ko: ["참가신청서 및 AI 개발계획서", "팀 소개", "경쟁, 유사 서비스 분석", "제출 체크리스트"],
      en: ["Application & AI development plan", "Team introduction", "Competitor analysis", "Submission checklist"],
    },
    interviewQuestions: {
      ko: [
        "왜 청년 고용 문제를 '일자리 부족'이 아니라 '연결의 문제'로 정의했나요?",
        "경쟁 서비스 비교에서 어떤 차별점을 찾았나요?",
      ],
      en: [
        "Why did you frame youth employment as a connection problem rather than a shortage of jobs?",
        "What differentiation did you find from comparing competing services?",
      ],
    },
    heroImage: "/projects/ajob-radar/competitor-matrix.webp",
    screenshots: [
      {
        src: "/projects/ajob-radar/problem-definition.webp",
        alt: {
          ko: "팀 피치덱의 문제 정의 장",
          en: "Problem definition slide from the team pitch deck",
        },
      },
      {
        src: "/projects/ajob-radar/core-feature-card.webp",
        alt: {
          ko: "공고 위에 정책과 준비물을 얹은 공고 카드 예시",
          en: "Sample job card that layers policies and prerequisites on a posting",
        },
      },
    ],
    links: {},
  },
  {
    slug: "skt-prompt-ansimcall",
    stack: ["Claude", "Prompt design"],
    featured: false,
    status: "completed",
    sortDate: "2026-08-20",
    period: {
      ko: "2026.08(수상 2026.08.20)",
      en: "Aug 2026 (awarded Aug 20, 2026)",
    },
    category: {
      ko: "SKT 「모두의 Promp.T」 공모전 Life AX 부문",
      en: "SKT 'Promp.T for Everyone' Contest, Life AX",
    },
    title: {
      ko: "SKT Promp.T 최우수상작 | 부모님이 사기 문자를 스스로 알아보도록 돕는 훈련 코치 프롬프트",
      en: "SKT Promp.T Top Excellence Award Entry | A Training-Coach Prompt That Helps Parents Spot Scam Texts on Their Own",
    },
    summary: {
      ko: "SKT 「모두의 Promp.T」 공모전 Life AX 부문에서 **최우수상을 받은 개인 출품작**입니다. AI에게 주는 지시문(프롬프트)으로, AI가 판별해 주지 않고 질문으로 이끌어 부모님이 문자에서 이상한 곳을 직접 찾게 합니다.",
      en: "A solo entry that **won the Top Excellence Award** (Life AX category) in SKT's 'Promp.T for Everyone' contest. It is a prompt, the written instructions given to an AI: instead of judging for them, the AI guides with questions so parents find what looks wrong in a text themselves.",
    },
    brief: {
      what: { ko: "부모님이 사기 문자를 스스로 알아보게 돕는 훈련 코치 프롬프트, SKT 모두의 Promp.T Life AX 부문 개인 출품", en: "Training-coach prompt helping parents spot scam texts themselves; solo entry in SKT 'Promp.T for Everyone' (Life AX)" },
      pain: { ko: "어머니의 질문에 답하기까지 47분간 어머니는 혼자였고, 판단을 대신하면 어머니에게 남는 것이 없음", en: "My mother waited 47 minutes alone for my answer, and judging for her left her with nothing" },
      solution: { ko: "판별해 주지 않고 질문으로 이끄는 「어머니의 판별 카드」 코치 프롬프트", en: "A 'Mother's Judgment Card' coach prompt that guides with questions instead of judging" },
      how: { ko: "AI는 답 대신 질문을 던져 이상한 곳을 직접 찾게 하고, 직접 찾은 것만 카드에 축적", en: "AI asks questions so parents find what looks wrong themselves; only self-found items go on the card" },
      effect: { ko: "Life AX 부문 최우수상 수상(개인)", en: "Won the Top Excellence Award, Life AX category (individual)" },
    },
    cardRole: {
      ko: "문제 정의, 서비스 기획(개인 출품)",
      en: "Problem framing, service planning (solo entry)",
    },
    cardResult: {
      ko: "Life AX 부문 최우수상(2026.08.20)",
      en: "Top Excellence Award, Life AX (Aug 20, 2026)",
    },
    context: {
      ko: "출품작 제목은 「어머니의 판별 카드에는, 제가 알려드린 게 하나도 없습니다」\n어머니의 질문에 제때 답하지 못한 **가족의 실제 경험**에서 출발",
      en: "Entry titled 'My Mother's Judgment Card Contains Nothing I Taught Her'\nStarted from **a real family experience**: not answering my mother's question in time",
    },
    story: {
      problem: {
        ko: "어머니가 경고 문자 사진을 보내며 무시해도 되는지 질문\n제가 답하기까지 47분의 공백, 그동안 어머니는 그 화면을 혼자 보고 계셨던 상황\n저는 어머니를 지켜드린 것이 아니라 어머니의 판단을 대신하던 상태\n대신하는 동안 어머니에게는 **아무것도 남지 않은** 결과",
        en: "My mother sent a photo of a warning text and asked whether she could ignore it\n47 minutes passed before I replied; she looked at that screen alone the whole time\nI had not been protecting her; I had been making her judgments for her\nAs a result, while I did that, **nothing was left** for her",
      },
      insight: {
        ko: "판별기라는 도구를 만드는 대신 사람의 판별력을 키우는 쪽으로 설계 전환\n한 줄로 줄이면 **'판별해주지 않는 AI'**",
        en: "Shifted the design from building a judging tool to building people's own judgment\nIn one line: **'an AI that does not judge for you'**",
      },
      solution: {
        ko: "「어머니의 판별 카드」 형태의 훈련 코치 프롬프트 설계\nAI는 답을 내려주지 않고 부모님이 문자에서 이상한 곳을 찾도록 질문\n**직접 찾은 것만 카드에** 축적",
        en: "Designed a 'Mother's Judgment Card' training-coach prompt\nAI gives no answers; it asks questions so parents find what looks wrong in a text\nOnly **what they found themselves goes on the card**",
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
      ko: ["프롬프트 설계", "Claude", "사기 문자 판별", "Life AX"],
      en: ["Prompt design", "Claude", "Scam-text detection", "Life AX"],
    },
    highlights: {
      ko: [
        "개인 출품으로 SKT 「모두의 Promp.T」 공모전 **Life AX 부문 최우수상** 수상",
        "판별기를 만드는 대신 **사람의 판별력을 키우는** 쪽으로 설계 전환",
        "프롬프트에 둔 **제약 6개마다 넣은 이유**를 제출 자료에 기록, 세 가지 상황에서 유지되는지 동작 기록으로 확인",
      ],
      en: [
        "Won the Top Excellence Award in the Life AX category of SKT's 'Promp.T for Everyone' contest as an individual.",
        "Flipped the design from a judging tool to strengthening the person's own judgment.",
        "Recorded in the submission why each of the six prompt constraints was added, and checked with simulated runs that they held in three situations.",
      ],
    },
    proof: {
      ko: [
        "AI가 사람의 판단을 대신하지 않고 **사람의 판단력을 키우도록** AI 역할 정의",
      ],
      en: [
        "Defined AI's role as strengthening human judgment rather than replacing it.",
      ],
    },
    metrics: [
      {
        value: { ko: "최우수상", en: "Top Excellence Award" },
        label: {
          ko: "Life AX 부문(개인 수상)",
          en: "Top Excellence Award, Life AX (individual)",
        },
      },
      {
        value: { ko: "제약 6개", en: "6 constraints" },
        label: {
          ko: "프롬프트 1,563자, 5단계 진행",
          en: "In a 1,563-character prompt with five steps",
        },
      },
      {
        value: { ko: "47분", en: "47 min" },
        label: {
          ko: "문제 정의의 출발점",
          en: "Where the problem definition began",
        },
      },
    ],
    caseStudy: {
      title: {
        ko: "중요한 것은 '하라'가 아니라 '하지 마라'였다",
        en: "What Mattered Was 'Do Not', Not 'Do'",
      },
      summary: {
        ko: "AI가 답을 대신 내리지 않도록 **제약 6개**를 두고, 제약마다 넣은 이유를 제출 자료에 기록",
        en: "Set **six constraints** so the AI would not judge for the user, and recorded in the submission why each was added",
      },
      table: {
        ko: {
          columns: ["제약", "넣은 이유"],
          rows: [
            ["결론을 먼저 말하지 마라", "AI가 사기라고 답하면 묻는 상대만 자녀에서 AI로 바뀌고 판단력은 그대로"],
            ["'그냥 알려줘'에 두 번은 버텨라", "재촉하는 사이에 이미 단서를 보고 있어 답을 늦추는 것이 훈련, 세 번째에는 반드시 안내"],
            ["가짜 문자를 만들지 마라", "모의 훈련은 부모님을 속여야 하고 자식의 연락까지 의심하게 만드는 대가, 실제로 받은 문자만 사용"],
            ["확신 못 하면 단정하지 마라", "가장 위험한 것은 AI의 자신 있는 오답, 틀린 '안전합니다'는 필터가 없는 것보다 나쁨"],
            ["문자 속 번호로 연락하지 마라", "확인 안내가 사기범에게 전화하는 경로가 되지 않도록 직접 찾은 공식 번호만 안내"],
            ["AI가 알려준 것은 카드에 넣지 마라", "카드가 부모님 것이 되려면 빌려온 줄이 없어야 함"],
          ],
        },
        en: {
          columns: ["Constraint", "Why it was added"],
          rows: [
            ["Do not state the conclusion first", "If the AI says it is a scam, only the person being asked changes, from the child to the AI; the judgment stays the same"],
            ["Hold out twice against 'just tell me'", "While pressing, the parent is already looking at clues, so delaying is the training; on the third request the answer is always given"],
            ["Do not make up fake texts", "Mock drills require deceiving parents and make them doubt even their child's messages; only texts actually received are used"],
            ["Do not assert when unsure", "The most dangerous output is a confident wrong answer; a wrong 'this is safe' is worse than no filter"],
            ["Do not contact numbers in the text", "So that checking never becomes a call to the scammer, only an official number the user looked up is suggested"],
            ["Do not add what the AI pointed out to the card", "For the card to be the parent's own, no line on it can be borrowed"],
          ],
        },
      },
      content: {
        ko: "제출 자료의 '왜 이렇게 설계했는가' 절에서 제약별 근거를 표로 정리\n세 가지 상황에서 제약이 유지되는지 확인: 일반 훈련 흐름, '그냥 알려줘' 3회 연속 재촉, '이미 눌렀어' 발화\n'이미 눌렀어'에는 훈련을 바로 멈추고 긴급 대응으로 전환\n출품작의 대화는 동작 기록(시뮬레이션)이며 실사용 기록이 아님",
        en: "The 'Why it was designed this way' section of the submission lays out the rationale for each constraint as a table\nChecked that the constraints held in three situations: the normal training flow, three 'just tell me' requests in a row, and 'I already tapped it'\nOn 'I already tapped it', training stops at once and switches to emergency guidance\nThe dialogues in the entry are simulated runs, not records of real use",
      },
    },
    cardImage: "/projects/skt-prompt/card-award.webp",
    screenshots: [
      {
        src: "/projects/skt-prompt/card-award.webp",
        alt: {
          ko: "수상 발표 포스터 중 Life AX 부문 최우수상 부분(출처: SKT 뉴스룸)",
          en: "Life AX Top Excellence Award section of the award announcement poster (source: SKT Newsroom)",
        },
      },
      {
        src: "/projects/skt-prompt/cover-judgment-card.webp",
        alt: {
          ko: "제출 자료 표지와 판별 카드 예시",
          en: "Cover of the submission with a sample judgment card",
        },
      },
      {
        src: "/projects/skt-prompt/four-step-flow.webp",
        alt: {
          ko: "따라 하는 법 4단계",
          en: "The four steps to follow",
        },
      },
      {
        src: "/projects/skt-prompt/constraint-rationale.webp",
        alt: {
          ko: "프롬프트 제약 6개와 넣은 이유",
          en: "The six prompt constraints and why each was added",
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
      ko: "2026.03.28 (Round 1, Day 1)",
      en: "Mar 28, 2026 (Round 1, Day 1)",
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
      ko: "KRAFTON AI R&D Hackathon 라운드 1의 개인 과제입니다. 1-layer causal self-attention 제약 아래 6비트×6비트 이진 곱셈을 푸는 두 가지 해법(수학적 구성 해법, 학습 모델)을 **하루 안에 설계하고 검증**해 제출했습니다.",
      en: "A solo Round-1 task from the KRAFTON AI R&D Hackathon: designing and verifying two solutions, a constructive-exact model and a learned model, for 6-bit binary multiplication under a 1-layer causal self-attention constraint, within a single day.",
    },
    brief: {
      what: { ko: "1-layer 어텐션으로 6비트 x 6비트 이진 곱셈을 푸는 KRAFTON AI R&D 해커톤 라운드 1 개인 과제", en: "Solo Round 1 task of the KRAFTON AI R&D Hackathon: 6-bit x 6-bit binary multiplication with 1-layer attention" },
      pain: { ko: "1-layer causal self-attention 제약 안에서 곱셈을 표현하고 학습할 수 있는지가 과제", en: "The task: can multiplication be represented and learned under a 1-layer causal self-attention constraint" },
      solution: { ko: "해법 방향을 설계하고 생성형 AI와 함께 구현한 수학적 구성 해법(98,328 파라미터)과 학습 모델(274,898 파라미터) 두 가지", en: "Two solutions whose direction I designed and implemented with generative AI: a constructive exact model (98,328 parameters) and a learned model (274,898 parameters)" },
      how: { ko: "입력 12비트를 스칼라 코드로 압축해 스플라인 복원, 학습 모델은 입력 비트를 라우팅하는 희소 어텐션", en: "Compressed the 12 input bits into a scalar code recovered by spline; the learned model uses routed sparse attention" },
      effect: { ko: "4,096쌍 전수 검증 정확도 100%\n한계: 고정 프로토콜 200에폭이 아닌 20에폭 실측", en: "100% accuracy on exhaustive 4,096-pair check\nLimit: measured at 20 epochs, not the fixed 200-epoch protocol" },
    },
    context: {
      ko: "생성형 AI를 실행, 검증 파트너로 쓰는 핸드오프 워크플로우 프로젝트\n코드, 체크포인트, 리포트, 재현 명령까지 완결된 제출 패키지 제작",
      en: "Hand-off workflow project that uses generative AI as an execution and verification partner\nProduced a complete submission package: code, checkpoints, report, and reproduction commands",
    },
    story: {
      problem: {
        ko: "1-layer causal self-attention(트랜스포머의 최소 구성)을 다루는 과제\n곱셈이라는 조합적 연산을 표현하고 학습할 수 있는가가 질문\n12개 출력 비트를 자기회귀로 예측\n학습 문제(1-2)는 옵티마이저, 에폭, 배치까지 학습 프로토콜 고정\n아키텍처 설계만으로 승부해야 하는 조건",
        en: "Task on 1-layer causal self-attention (the minimal transformer)\nQuestion: can it represent and learn multiplication, a combinatorial operation\nPredicts 12 output bits autoregressively\nLearned problem (1-2) fixes the training protocol down to optimizer, epochs, and batch\nArchitecture design is the only lever",
      },
      insight: {
        ko: "두 문제의 성격이 다르다고 판단\n1-1은 '표현 가능성 증명'이라 학습 대신 수학적 구성 허용\nprefix-average 어텐션으로 입력 12비트를 유일한 스칼라 코드로 압축\n출력 비트 복원은 1차원 스플라인 보간 문제로 환원\n1-2는 '학습 가능성' 문제, 입력 비트를 명시적으로 라우팅하는 희소 어텐션이 학습 안정화의 열쇠",
        en: "Judged the two problems to be different in kind\n1-1 is a 'representability proof', so a mathematical construction is allowed instead of training\nPrefix-average attention compresses the 12 input bits into a unique scalar code\nOutput-bit recovery reduced to a 1-D spline interpolation problem\n1-2 is a 'learnability' problem; sparse attention that explicitly routes input bits was the key to stable training",
      },
      solution: {
        ko: "1-1은 구성적 정확 모델(98,328 파라미터)로 4,096쌍 전수 검증 100% 달성\n1-2는 fixed-routed 희소 어텐션 + MLP(274,898 파라미터)\n10K 랜덤, 4,096쌍 전수 검증 모두 정확도 1.0 기록\n구현 → 교차 리뷰 → 최종 검토로 이어지는 생성형 AI 핸드오프 문서 체계\n하루 안에 리포트까지 패키징",
        en: "1-1: constructive exact model (98,328 parameters), 100% on exhaustive check of all 4,096 pairs\n1-2: fixed-routed sparse attention + MLP (274,898 parameters)\nAccuracy 1.0 on both 10K random and exhaustive 4,096-pair checks\nGenerative-AI hand-off document system: implementation → cross-review → final review\nPackaged through the report within a day",
      },
    },
    team: {
      ko: "개인 참가",
      en: "Solo entry",
    },
    role: {
      ko: "개인 참가 | 문제 분석, 해법 방향 설계, 생성형 AI 실행과 검증 워크플로우 구성, 결과 검증과 리포트 작성",
      en: "Solo | Problem analysis, solution direction, generative-AI execution & verification workflow, result verification and reporting",
    },
    tags: {
      ko: ["Transformer", "AI 페어 워크플로우", "검증 설계", "AI R&D"],
      en: ["Transformer", "AI Pair Workflow", "Verification", "AI R&D"],
    },
    highlights: {
      ko: [
        "1-layer 어텐션 제약에서 곱셈을 '스칼라 코드 + 스플라인 복원' 문제로 환원하는 구성적 해법",
        "**4,096쌍 전수 검증 100%** 확인",
        "입력 비트 명시적 라우팅 희소 어텐션 설계, 학습 모델(274,898 파라미터)로 **정확도 1.0 재현**",
        "구현 → 교차 리뷰 → 최종 검토의 생성형 AI 핸드오프 흐름 문서화, **하루 안에 제출 패키지 완성**",
        "고정 프로토콜(200에폭)과 달리 실측은 20에폭이라는 한계를 **리포트에 그대로 기재**",
      ],
      en: [
        "Reduced multiplication to a 'scalar code + spline recovery' problem under the 1-layer constraint, 100% on exhaustive 4,096-pair verification.",
        "Designed an explicitly-routed sparse attention architecture; the learned model (274,898 params) reproduced accuracy 1.0.",
        "Documented an implement → cross-review → final-review generative-AI hand-off workflow, completing the submission package in one day.",
        "Reported honestly that the measured run used 20 epochs versus the fixed 200-epoch protocol, stating verification scope and limits as they were.",
      ],
    },
    proof: {
      ko: [
        "생성형 AI와 함께 작업하되 **전수 검증과 결과 보고는 사람이** 책임지는 방식으로 진행",
        "곱셈을 스칼라 함수 보간 문제로 바꿔 보는 방식으로 **제약 조건 안에서 해법** 도출",
        "하루 마감 안에 코드, 체크포인트, 리포트, 재현 명령을 **하나의 패키지로 묶어** 제출",
      ],
      en: [
        "Shows a collaboration model where generative AI executes, but exhaustive verification and honest reporting remain a human responsibility.",
        "Broke through constraints with reductive thinking: multiplication as scalar-function interpolation.",
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
        ko: "검증되지 않은 것은 '검증되지 않았다'고 쓴다",
        en: "If It Isn't Verified, Say So",
      },
      summary: {
        ko: "AI가 산출물을 만드는 속도가 빨라질수록, 신뢰의 기준은 사람의 검증과 정직한 보고로 이동한다는 판단",
        en: "As AI accelerates output, trust shifts to human verification and honest reporting",
      },
      content: {
        ko: "시간 제약으로 고정 프로토콜(200에폭) 미완주, 수치 부풀리기나 모호한 표현 배제\n'측정된 것은 20에폭 실행이며 200에폭 재실행은 중단되었다'고 리포트에 명시, 재현 명령 첨부\n신뢰의 근거는 가능한 전체 입력 4,096쌍에 대한 그리디 디코딩 전수 검증\n생성형 AI가 구현을 빠르게 만들수록 병목은 '검토와 판단'으로 이동\n다음 검토자가 몇 분 안에 제출 여부를 판단하도록 검증 여부를 구분한 핸드오프 문서를 산출물로 설계",
        en: "Fixed protocol (200 epochs) not completed due to time; no inflated numbers or vague wording\nReport states 'the measured run is 20 epochs; the 200-epoch rerun was interrupted', with reproduction commands attached\nTrust grounded in exhaustive greedy-decoding check over all 4,096 possible input pairs\nThe faster generative AI builds, the more the bottleneck moves to review and judgment\nDesigned the deliverable as a hand-off document separating verified from unverified, so the next reviewer can decide on submission in minutes",
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
          ko: "구현 세션이 끝날 때마다 다음 검토자(사람이든 모델이든)가 몇 분 안에 판단할 핸드오프 문서 작성\n담은 내용은 최선의 제출 수치, 검증된 것과 안 된 것의 구분, 재현 명령, 폴더 맵, 최종 의사결정 권고\n별도의 리뷰 프롬프트로 다른 모델에게 교차 검토를 시키는 체계 운영\nAI의 산출 속도가 빨라질수록 병목은 검토와 판단으로 이동한다는 점 체감\n'검토가 빠른 산출물 구조' 자체를 설계 대상으로 설정",
          en: "Wrote a hand-off document at the end of each implementation session so the next reviewer (human or model) could decide in minutes\nContents: best submission numbers, verified vs. unverified items, reproduction commands, folder map, final-decision recommendation\nRan a cross-review setup in which another model reviews through a separate review prompt\nFelt that the faster AI produces, the more the bottleneck moves to review and judgment\nSet 'artifact structure that is fast to review' as a design target itself",
        },
      },
    ],
    artifacts: {
      ko: ["제출 리포트 PDF", "학습 곡선", "해법 코드, 체크포인트", "AI 핸드오프 문서"],
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
        ko: "제출 리포트 보기(PDF, 87KB)",
        en: "View submission report (PDF, 87KB)",
      },
    },
    screenshots: [
      {
        src: "/projects/krafton-multiplierboard/learning-curve.webp",
        alt: {
          ko: "학습 곡선: 20에폭에서 10K 랜덤 정확도 1.0 도달",
          en: "Learning curves: 10K random accuracy reaching 1.0 by epoch 20",
        },
      },
      {
        src: "/projects/krafton-multiplierboard/report-preview.webp",
        alt: {
          ko: "제출 리포트 1페이지: 구성적 정확성 증명과 학습 아키텍처",
          en: "Submission report page 1: constructive exactness proof and learned architecture",
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
      ko: "2026.06.24 - 2026.06.26(3일)",
      en: "Jun 24 - 26, 2026 (3 days)",
    },
    category: {
      ko: "SSAFY 창업캠프 / Startup",
      en: "SSAFY Startup Camp",
    },
    title: {
      ko: "EasyExam | 학원 출제, 채점, 관리를 하나의 루프로 만드는 AI SaaS",
      en: "EasyExam | An AI SaaS Turning Academy Exam Work into One Loop",
    },
    summary: {
      ko: "SSAFY 창업캠프(삼성, JA Korea)에 팀 No Problem으로 참가해 피칭한, 학원 강사용 AI 문제은행, 시험지 생성, 자동 채점 SaaS입니다. **창업관심팀 최우수팀**으로 선정되었습니다.",
      en: "An AI question-bank, exam-builder, and auto-grading SaaS for academy instructors, pitched by Team No Problem at the SSAFY Startup Camp (Samsung and JA Korea). Selected as Best Team.",
    },
    brief: {
      what: { ko: "학원 강사용 AI 문제은행, 시험지 생성, 자동 채점 SaaS, SSAFY 창업캠프 팀 No Problem(5인) 피칭", en: "AI question bank, exam builder, and auto-grading SaaS for academy instructors; pitched by Team No Problem (5) at SSAFY Startup Camp" },
      pain: { ko: "사업 소개 덱 가정으로 강사가 주 10시간 이상을 출제, 채점, 관리에 씀", en: "By the business deck's assumption, instructors spend 10+ hours a week on exam creation, grading, and management" },
      solution: { ko: "등록, AI 분류, 시험지 생성, 자동 채점, 약점 분석이 이어지는 데이터 선순환 루프", en: "A data loop of registration, AI classification, exam generation, auto-grading, and weakness analytics" },
      how: { ko: "팀이 문제 촬영 후 OCR과 자동 태깅, 자연어 시험지 조립, 루브릭 채점으로 설계, 본인은 마케팅과 SEO 담당", en: "The team designed photo-to-OCR tagging, natural-language exam assembly, and rubric grading; I owned marketing and SEO" },
      effect: { ko: "창업관심팀 최우수팀 선정", en: "Selected as Best Team among startup-interest teams" },
    },
    context: {
      ko: "팀 No Problem(5인)으로 참가, 학원 강사 팀원의 현장 페인 포인트에서 출발\n15장 사업 소개 덱 발표로 창업관심팀 최우수팀 선정\n저는 마케팅, SEO 담당",
      en: "Joined as Team No Problem (5 members), starting from the field pain points of an academy instructor on the team\nSelected Best Team among the startup-interest teams after pitching a 15-page business deck\nOwned marketing and SEO",
    },
    story: {
      problem: {
        ko: "학원 강사는 가르치는 일에 집중해야 하지만 사업 소개 덱의 가정으로는 주 10시간 이상을 출제, 채점, 관리에 사용\n기존 도구가 막히는 세 지점은 불편한 문제 등록, 번거로운 시험지 제작, 시간이 걸리는 수기 채점",
        en: "Instructors should focus on teaching, but by the business deck's assumption spend 10+ hours a week on exam creation, grading, and management\nExisting tools block at three points: inconvenient question registration, cumbersome paper assembly, time-consuming manual grading",
      },
      insight: {
        ko: "개별 기능 세 개를 파는 대신 하나의 데이터 선순환 루프로 설계해야 한다고 판단\n루프는 '등록 → AI 분류 → 시험지 생성 → 자동 채점 → 약점 분석'\n쓸수록 똑똑해지고 갈아타기 어려운 제품이 되는 조건",
        en: "Judged that one data flywheel, not three separate features, should be sold\nLoop: 'registration → AI classification → paper generation → auto-grading → weakness analytics'\nCondition for a product that gets smarter with use and is hard to switch away from",
      },
      solution: {
        ko: "책상에서 문제를 찍으면 원근 보정, OCR, 레이아웃 분리 후 학년, 과목, 유형 자동 태깅\n태깅된 문제는 문제은행에 축적\n자연어 한 문장으로 맞춤 시험지 조립\n답안을 찍으면 OCR, VLM, 루브릭 기반으로 즉시 채점, 오답노트 자동 생성\n학원 단위 SaaS 구독(월 9.9/19.9만 원)으로 설계",
        en: "Photograph a problem at the desk: perspective correction, OCR, layout separation, then automatic tagging by grade, subject, and type\nTagged problems accumulate in the question bank\nOne natural-language sentence assembles a custom exam\nPhotograph answers: instant grading via OCR, VLM, and rubric; mistake notes generated automatically\nDesigned as per-academy SaaS subscription (₩99K/199K per month)",
      },
    },
    team: {
      ko: "팀 No Problem(5인: CEO, CTO, 학원 강사, 마케팅, 인프라)",
      en: "Team No Problem (5: CEO, CTO, instructor, marketing, infra)",
    },
    role: {
      ko: "마케팅, SEO 담당 | 시장과 고객 검증, 서비스 확산 설계 파트",
      en: "Marketing & SEO | Market-customer validation and growth design",
    },
    tags: {
      ko: ["EdTech SaaS", "AI 파이프라인", "BM 설계", "창업"],
      en: ["EdTech SaaS", "AI Pipeline", "Business Model", "Startup"],
    },
    highlights: {
      ko: [
        "SSAFY 창업캠프 창업관심팀 최우수팀 선정(삼성, JA Korea 주최)",
        "캠프 3일 동안 팀은 아이디어 검증과 사업 소개 덱(15장) 발표 진행, 저는 **마케팅과 SEO** 담당",
        "출제, 채점, 분석이 이어지는 데이터 선순환 루프로 제품 구성, **쓸수록 문제은행이 똑똑해지는** 설계",
        "전국 학원 8만여 곳 기준 **SAM 965억 원** 산정 등 시장과 수익모델을 덱의 사업 가정치로 제시",
      ],
      en: [
        "Selected as Best Team in the SSAFY Startup Camp (hosted by Samsung and JA Korea).",
        "Over the 3-day camp the team validated the idea and pitched a 15-page business deck; I owned marketing and SEO.",
        "Structured the product as a data flywheel connecting creation, grading, and analytics.",
        "Presented the market and revenue model as deck assumptions: ₩96.5B SAM across ~80K academies.",
      ],
    },
    proof: {
      ko: [
        "현장 전문가(전직 강사)가 겪은 불편을 AI 파이프라인 서비스 구조에 반영",
        "**데이터 선순환이라는 제품 전략**을 앞세워 심사 설득",
        "짧은 캠프 일정(3일) 안에 기획과 발표를 마친 팀에 마케팅, SEO 담당으로 참여",
      ],
      en: [
        "Translated a field expert's pain points into an AI-pipeline service structure.",
        "Won the judges over with a data-flywheel product strategy rather than a feature list.",
        "Took part as the marketing and SEO owner in a team that finished planning and the pitch within a 3-day camp.",
      ],
    },
    metrics: [
      {
        value: "Best",
        label: {
          ko: "창업관심팀 최우수팀 선정",
          en: "Selected as Best Team",
        },
      },
      {
        value: "3 days",
        label: {
          ko: "캠프 기간(2026.06.24 - 2026.06.26)",
          en: "Camp duration (Jun 24 - 26, 2026)",
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
          ko: "등록(INGEST)은 촬영 → 원근 보정, OCR → 문항 분할 → 임베딩 분류 → 지식그래프 태깅\n생성(GENERATE)은 자연어 요청 → 의도 파싱 → 조건 제약 → 문제은행 RAG 검색 → 문항 조합\n채점(GRADE)은 답안 촬영 → OCR, 손글씨 인식(VLM) → 정답, 루브릭 채점\n이어서 신뢰도 분기(낮으면 교사 검수 라우팅) → 기록, 약점 분석\n학원별 데이터 격리(멀티테넌트)를 전제로 설계",
          en: "INGEST: capture → deskew, OCR → item segmentation → embedding classification → knowledge-graph tagging\nGENERATE: natural-language request → intent parsing → constraints → question-bank RAG retrieval → item assembly\nGRADE: answer capture → OCR, handwriting recognition (VLM) → answer key, rubric scoring\nThen confidence branch (low confidence routes to teacher review) → records, weakness analytics\nDesigned on the premise of per-academy data isolation (multi-tenant)",
        },
      },
    ],
    artifacts: {
      ko: ["사업 소개 덱(15p)", "수상 사진"],
      en: ["Business deck (15p)", "Award photo"],
    },
    interviewQuestions: {
      ko: [
        "왜 개별 기능이 아니라 데이터 선순환 루프를 제품 전략으로 삼았나요?",
        "AI 채점의 신뢰도 문제를 서비스 설계에서 어떻게 다뤘나요?",
        "3일 캠프에서 마케팅, SEO 담당으로 무엇에 집중했나요?",
      ],
      en: [
        "Why did you make the data flywheel the product strategy instead of individual features?",
        "How did the service design handle AI grading reliability?",
        "As the marketing and SEO owner in a 3-day camp, what did you focus on?",
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
        ko: "소개 덱 보기(PDF, 15쪽, 7.3MB)",
        en: "View business deck (PDF, 15 pages, 7.3MB)",
      },
    },
    screenshots: [
      {
        src: "/projects/easyexam/ai-pipeline.webp",
        alt: {
          ko: "팀 발표 덱의 AI 파이프라인 구조 장",
          en: "AI pipeline slide from the team deck",
        },
      },
      {
        src: "/projects/easyexam/best-team-placard-20260626.webp",
        alt: {
          ko: "창업관심팀 최우수팀 현판(2026.06.26 촬영)",
          en: "Best Team placard among the startup-interest teams (photo taken Jun 26, 2026)",
        },
      },
    ],
  },
  {
    slug: "supporty",
    featured: false,
    status: "completed",
    sortDate: "2026-07-05",
    period: {
      ko: "2026.07.03 - 2026.07.05(24시간 개발)",
      en: "Jul 3 - 5, 2026 (24-hour build)",
    },
    category: {
      ko: "Defense Tech / Hackathon",
      en: "Defense Tech / Hackathon",
    },
    title: {
      ko: "SUPPORTY | AI 코파일럿이 돕는 무인자산 작전지속지원 통제 시스템",
      en: "SUPPORTY | AI-Copilot Operator Console for Contested Logistics",
    },
    summary: {
      ko: "D4D(Deploy for Defense) APAC 서울 해커톤에서 **24시간 동안 개발**한 작전지속지원 통제 시스템입니다. 오퍼레이터 한 명이 AI 코파일럿과 함께 지상(UGV)과 공중(VTOL) 무인자산을 동시에 지휘합니다.",
      en: "A contested-logistics control system built in the 24-hour build window of the D4D (Deploy for Defense) APAC Seoul hackathon, where a single operator commands ground (UGV) and aerial (VTOL) unmanned assets alongside an AI copilot.",
    },
    brief: {
      what: { ko: "무인자산 작전지속지원 통제 시스템, D4D APAC 서울 해커톤 24시간 개발, 2인 팀", en: "Control system for unmanned-asset operational sustainment, built in 24 hours at D4D APAC Seoul hackathon; two-person team" },
      pain: { ko: "무인체계 운용이 자산 1대당 조종사 1명이 붙는 선형 인력 구조", en: "Unmanned operations need one pilot per asset, so staffing grows with equipment" },
      solution: { ko: "오퍼레이터 1명이 AI 코파일럿과 지상, 공중 무인자산을 함께 지휘하는 콘솔", en: "A console where one operator commands ground and aerial assets together with an AI copilot" },
      how: { ko: "자연어 명령을 제어 시퀀스로 바꾸고 AI 트리아지로 요청을 정렬, 본인은 콘솔 기획과 프론트엔드 담당", en: "Natural-language commands become control sequences and AI triage sorts requests; I handled console planning and frontend" },
      effect: { ko: "실물 UGV와 VTOL 연동 시연, Oregon UAS Accelerator 특별 트랙 선정", en: "Demo wired to a real UGV and VTOL; selected for the Oregon UAS Accelerator special track" },
    },
    context: {
      ko: "하드웨어, 운용 리드와 2인 팀\n실물 UGV, VTOL과 라이브 오퍼레이터 콘솔을 연동해 시연\nOregon UAS Accelerator 특별 트랙 선정\nD4D 공식 쇼케이스 등재",
      en: "Two-person team with a hardware and operations lead\nDemoed a live operator console wired to a real UGV and VTOL\nSelected for the Oregon UAS Accelerator special track\nListed in the official D4D showcase",
    },
    story: {
      problem: {
        ko: "현행 무인체계 운용은 자산 1대당 조종사 1명이 붙는 선형 인력 구조\n장비가 늘수록 인력도 똑같이 늘어야 하는 한계\n병력이 줄어드는 환경에서는 지속 불가능, 대가는 전장의 가장 절박한 순간에 청구\n우크라이나 의용군 인터뷰에서 나온 증언\n'지원을 요청할 수단조차 없어 제때 조치를 받지 못했다'",
        en: "Current unmanned operations use a linear staffing model: one pilot per asset\nLimit: staff must grow as fast as equipment\nUnsustainable as forces shrink; the cost is billed at the most desperate moments of the battlefield\nTestimony from interviews with Ukrainian volunteer fighters\n'We could not get action in time because we had no means even to request support'",
      },
      insight: {
        ko: "전투가 아니라 '작전지속지원(보급, 정찰, 중계)'을 서비스로 재설계\n작전 판단은 군, 요청 접수 → 우선순위 분류 → 자산 배분, 실행만 맡는 As-a-Service 구조 구상\n1인 다중 통제의 병목은 오퍼레이터의 인지 과부하\nAI가 트리아지와 저위험 구간을 맡는 코파일럿 구조로 풀어야 한다고 판단",
        en: "Reframed the domain from combat to 'operational sustainment support (supply, reconnaissance, relay)' as a service\nAs-a-Service structure in which the military keeps operational judgment, and the service handles only request intake → priority triage → asset allocation and execution\nBottleneck of one-to-many control is operator cognitive overload\nJudged it should be solved with an AI copilot that handles triage and low-risk phases",
      },
      solution: {
        ko: "자연어 지휘(문장 → 제어 시퀀스 변환)\nAI 트리아지(생명 직결도 → 시간 민감도 → 임무 파급효과 순 정렬)\n듀얼 카메라 병렬 제어, GPS 재밍 대비 비전 항법 전환, 셀룰러↔위성 링크 핫스탠바이\n위 기능을 하나의 오퍼레이터 콘솔로 설계\n실물 UGV, VTOL로 시연",
        en: "Natural-language command (sentence → control sequence conversion)\nAI triage (sorted by life criticality → time sensitivity → mission impact)\nParallel dual-camera control, vision-navigation fallback for GPS jamming, cellular/satellite link hot-standby\nAll of the above designed as one operator console\nDemoed with a real UGV and VTOL",
      },
    },
    team: {
      ko: "SUPPORTY 2인 팀(하드웨어, 운용 리드 / 기획, 소프트웨어)",
      en: "SUPPORTY, two-person team (hardware & operations lead / planning & software)",
    },
    role: {
      ko: "기획, 프론트엔드 | 오퍼레이터 콘솔 기획, 데모 시나리오 설계, 콘솔과 랜딩 페이지 프론트엔드 구현",
      en: "Planning & Frontend | Operator console design, demo scenario design, console & landing page frontend",
    },
    tags: {
      ko: ["Defense Tech", "AI 코파일럿", "자연어 지휘", "무인체계 통제"],
      en: ["Defense Tech", "AI Copilot", "NL Command", "Unmanned Systems"],
    },
    highlights: {
      ko: [
        "자산 1대당 조종사 1명의 선형 인력 구조를 **'1인 오퍼레이터 + AI 코파일럿'** 통제 구조로 재설계",
        "긴급 요청을 생명 직결도 → 시간 민감도 → 임무 파급효과 순으로 정렬하는 **AI 트리아지 큐** 기획",
        "'전진 5초' 같은 자연어 명령을 **실제 제어 시퀀스로 변환**하는 지휘 UX 설계",
        "24시간 안에 실물 UGV와 VTOL에 연동한 **라이브 콘솔**, 공개 랜딩 페이지, 기획서를 완성해 시연",
        "Oregon UAS Accelerator 특별 트랙 선정",
      ],
      en: [
        "Redesigned the one-pilot-per-asset staffing model into a single-operator-plus-AI-copilot control structure.",
        "Planned an AI triage queue ordering urgent requests by life criticality, time sensitivity, and mission impact.",
        "Designed a command UX translating natural-language orders like 'forward 5 seconds' into control sequences.",
        "Shipped a live console wired to a real UGV & VTOL, a public landing page, and a proposal deck within the 24-hour build.",
        "Selected for the Oregon UAS Accelerator special track.",
      ],
    },
    proof: {
      ko: [
        "군 도메인 제약은 서비스 범위를 나눠 해결, **작전 판단은 군**, 우선순위, 배분, 실행은 서비스 담당",
        "AI는 **인지 과부하라는 병목**을 푸는 데 사용(트리아지, 코파일럿)",
        "현장 전문가(하드웨어, 운용 리드)와 협업하며 도메인 지식을 제품 언어로 정리",
      ],
      en: [
        "Resolved military-domain constraints through service-scope design: judgment stays with the military; triage, dispatch, and execution with the service.",
        "Used AI as the structure that removes the cognitive-overload bottleneck, not as decoration.",
        "Translated field expertise into product language, working with the hardware and operations lead.",
      ],
    },
    metrics: [
      {
        value: "Selected",
        label: {
          ko: "Oregon UAS Accelerator 특별 트랙 선정",
          en: "Oregon UAS Accelerator special track",
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
          ko: "실물 UGV, VTOL 연동 시연",
          en: "Demo with real UGV & VTOL",
        },
      },
    ],
    caseStudy: {
      title: {
        ko: "'판단하지 않는 서비스'의 경계 설계",
        en: "Drawing the Boundary of a Service That Doesn't Judge",
      },
      summary: {
        ko: "민간 서비스가 전장에 들어갈 때 가장 위험한 것은 기능 부족이 아니라 역할의 월권이라고 판단한 사례",
        en: "Deciding that the biggest risk of a civilian service on the battlefield is overreach, not missing features",
      },
      content: {
        ko: "민간 서비스가 군 작전 영역에 들어갈 때 가장 위험한 것은 기능 부족보다 '역할의 월권'이라고 판단\n작전 판단과 승인은 군(지휘관, FDC), 서비스는 우선순위 분류, 자산 배분, 배송, 관측 대행까지만 담당\n콜센터가 콜 우선순위를 정하는 것과 같은 '서비스 제공자의 정당한 판단 범위'라는 프레임\n이 경계 덕분에 AI 트리아지의 권고 근거를 화면에 한 줄로 노출하는 UX 설계 가능\n심사, 질의의 '작전 판단을 민간이 하는 것 아닌가'라는 가장 어려운 질문에 구조로 답변",
        en: "Judged that the greatest risk when a civilian service enters military operations is 'role overreach', not missing features\nOperational judgment and approval stay with the military (commander, FDC); the service covers only priority triage, asset allocation, delivery, and observation by proxy\nFramed as the 'legitimate scope of a service provider's judgment', like a call center prioritizing calls\nThis boundary made a UX possible that shows the AI triage rationale on screen in a single line\nAnswered the hardest judging question, 'isn't a civilian making operational decisions?', with structure",
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
          ko: "한 화면에 듀얼 카메라(지상 전면, 공중 노즈)와 전술 지도 배치\nP1~P3 자동 우선순위 Mission Queue, 자산 로스터, 음성 AI 패널도 같은 화면\n오퍼레이터는 한 번에 한 자산에 집중\nAI가 이륙, 순항, 대기 같은 저위험 구간 담당\n험로, 관측, 회피처럼 인간이 필요한 순간에만 제어권 핸드오버",
          en: "One screen holds dual cameras (ground front, aerial nose) and a tactical map\nP1-P3 auto-prioritized Mission Queue, asset roster, and voice AI panel on the same screen\nOperator focuses on one asset at a time\nAI handles low-risk phases such as takeoff, cruise, and loiter\nControl handed over only at moments that need a human: rough terrain, observation, evasion",
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
          ko: "SKYFLEET 오퍼레이터 콘솔: 듀얼 카메라, 전술 지도, AI 트리아지 Mission Queue, 음성 AI 패널",
          en: "SKYFLEET operator console: dual cameras, tactical map, AI triage mission queue, voice-AI panel",
        },
      },
      {
        src: "/projects/supporty/vtol-heewing-t2.webp",
        alt: {
          ko: "공중 자산: Heewing T2 VTOL 수직이착륙기(ArduPlane)",
          en: "Aerial asset: Heewing T2 VTOL (ArduPlane)",
        },
      },
      {
        src: "/projects/supporty/ugv-defender.webp",
        alt: {
          ko: "지상 자산: 전면 카메라, 통신 모듈을 탑재한 UGV 보급 차량",
          en: "Ground asset: UGV resupply vehicle with front camera and comms module",
        },
      },
      {
        src: "/projects/supporty/hardware-vtol-ugv-20260704.webp",
        alt: {
          ko: "시연에 쓴 VTOL과 UGV 장비(2026.07.04 촬영)",
          en: "VTOL and UGV hardware used in the demo (photo taken Jul 4, 2026)",
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
      ko: "GenWing Live | 행사 참가자의 첫 대화를 돕는 AI 네트워킹 앱",
      en: "GenWing Live | AI-Driven Event Networking App",
    },
    summary: {
      ko: "Genspark Meetup & Hackathon에서 Genspark OpenClaw를 활용해 제작한 AI 네트워킹 웹앱 프로토타입입니다.",
      en: "An AI networking web app prototype built using Genspark OpenClaw at the Genspark Meetup & Hackathon.",
    },
    brief: {
      what: { ko: "행사 참가자 아이스브레이킹을 돕는 AI 네트워킹 웹앱 프로토타입, Genspark 해커톤 개인 제작", en: "AI networking web app prototype for event icebreaking, built solo at the Genspark hackathon" },
      pain: { ko: "밋업과 해커톤에서 참가자가 서로를 알아가고 대화를 시작하기 어려움", en: "At meetups and hackathons, participants find it hard to get to know each other and start talking" },
      solution: { ko: "참가자 카드, Wing Match, AI 아이스브레이커로 이어지는 네트워킹 흐름", en: "A networking flow of participant cards, Wing Match, and an AI icebreaker" },
      how: { ko: "Genspark OpenClaw로 만들고 PWA와 모바일 최적화까지 반복 개선", en: "Built with Genspark OpenClaw and improved iteratively through PWA and mobile optimization" },
      effect: { ko: "기대 효과: 대화를 시작하는 부담 완화(측정 결과 없음)\n결과물: 베타 데모 모드를 갖춘 PWA 프로토타입", en: "Expected: easier conversation starts (no measured result)\nOutput: a PWA prototype with a beta demo mode" },
    },
    context: {
      ko: "AI 에이전트를 도구보다 '실행 파트너'로 활용, 아이디어를 고속으로 프로토타입화한 프로젝트",
      en: "A project that rapidly prototyped an idea by treating AI agents as 'execution partners' rather than mere tools.",
    },
    story: {
      problem: {
        ko: "밋업, 해커톤 같은 네트워킹 행사에서 참가자들이 서로를 알아가고 대화를 시작하기 어려운 병목",
        en: "At networking events like meetups or hackathons, there is a bottleneck in naturally getting to know participants and starting conversations.",
      },
      insight: {
        ko: "프로필 나열 대신 퀴즈와 매칭 인터랙션으로 '아이스브레이킹'을 시스템이 유도해야 한다고 판단",
        en: "Instead of just listing profiles, icebreaking should be systemically induced through quizzes and matching interactions.",
      },
      solution: {
        ko: "참가자 카드, Wing Match, AI 아이스브레이커 흐름 설계\nGenspark OpenClaw로 PWA, 모바일 최적화까지 반복 개선",
        en: "Designed participant cards, Wing Match, and AI icebreaker flows\nIteratively improved through PWA and mobile optimization with Genspark OpenClaw",
      },
    },
    team: {
      ko: "해커톤 개인 프로젝트",
      en: "Hackathon Solo Project",
    },
    role: {
      ko: "1인 기획과 개발 | 문제 정의, UX 설계, 에이전트 워크플로우 구축, 배포",
      en: "Solo planning & development | Problem framing, UX design, agent workflow, and deployment",
    },
    tags: {
      ko: ["Genspark OpenClaw", "AI Agent", "Prototype", "PWA"],
      en: ["Genspark OpenClaw", "AI Agent", "Prototype", "PWA"],
    },
    highlights: {
      ko: [
        "Genspark OpenClaw로 짧은 시간 안에 아이디어를 **작동하는 프로토타입**으로 제작",
        "참가자 카드, 퀴즈, Wing Match로 이어지는 이벤트 네트워킹 여정 설계",
        "랜딩 페이지, 베타 데모 모드, **PWA, 이미지 최적화까지** 넣은 데모 제작",
        "AI 에이전트로 빠르게 프로토타입을 만들고 반복해서 고치는 작업 방식 실험",
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
        "AI 에이전트를 활용해 **문제 정의부터 배포까지** 행사 기간 안에 완료",
        "해커톤 환경에 맞춰 **데모 흐름과 튜토리얼 UX**까지 고려한 제품 설계",
        "모바일 최적화와 배포 안정성까지 챙긴 프로토타입 제작",
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
        ko: "Genspark Meetup & Hackathon 참여, '모두가 이미 개발자다'라는 메시지에서 영감\nAI가 답변 도구를 넘어 업무와 서비스 제작 흐름을 수행하는 실행 파트너가 될 수 있는지 실험\nGenspark OpenClaw로 랜딩 페이지, 튜토리얼, 베타 데모 모드 제작\n모바일 최적화, PWA 설정까지 반복 개선하는 워크플로우 구축\n리서치부터 배포까지 하나의 워크플로우로 잇는 방식의 가능성 확인",
        en: "Joined the Genspark Meetup & Hackathon, inspired by the message 'Everyone is already a developer'\nExperimented with whether AI can be an execution partner that carries out work and service-building flows, beyond an answer tool\nBuilt a landing page, tutorial, and beta demo mode with Genspark OpenClaw\nSet up a workflow for iterative improvement, including mobile optimization and PWA settings\nConfirmed the possibility of linking research to deployment in a single workflow",
      },
    },
    heroImage: "/projects/genwing/og-banner.webp",
    screenshots: [
      {
        src: "/projects/genwing/host-room.webp",
        alt: {
          ko: "호스트 방 화면(저장소를 다시 실행해 찍은 화면, 참가자는 가상 인물)",
          en: "Host room screen (re-run from the repository; participants are fictional)",
        },
      },
      {
        src: "/projects/genwing/quiz-reveal.webp",
        alt: {
          ko: "이 사람은 누구일까요 정답 공개 화면",
          en: "Who-is-this answer reveal screen",
        },
      },
      {
        src: "/projects/genwing/landing.webp",
        alt: {
          ko: "랜딩 화면",
          en: "Landing screen",
        },
      },
    ],
    links: {
      github: "https://github.com/jang961111-hash/genwing-live",
    },
  },
  {
    slug: "dailylog",
    stack: ["pgvector", "SenseVoice", "Thompson Sampling", "Figma"],
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
      ko: "DailyLog | AI가 먼저 질문하고 다음 행동을 추천하는 회고 서비스",
      en: "DailyLog | AI-Driven Reflection & Decision Support",
    },
    summary: {
      ko: "매일 기록을 이어가기 어려운 이유를 **'입력 부담'과 '회고 흐름 단절'**로 정의하고, AI 질문 흐름으로 푼 서비스입니다.",
      en: "A service that solves user retention issues by defining the problem as 'input friction' and 'broken reflection flows', using AI-driven questioning.",
    },
    brief: {
      what: { ko: "AI 질문으로 회고와 다음 행동 추천을 돕는 서비스, SSAFY 특화 프로젝트 6인 팀(PM, 프론트엔드)", en: "Service using AI questions for reflection and next-action recommendation; SSAFY specialized project, six-person team (PM, frontend)" },
      pain: { ko: "빈 화면부터 내미는 회고 방식이라 입력 부담이 크고 기록이 한 번으로 끝남", en: "Journaling starts from a blank screen, so entry is a burden and records end after one use" },
      solution: { ko: "알맞은 때 AI가 질문하고 내일 실행할 행동 1개를 추천하는 회고 서비스", en: "A reflection service where AI asks at the right moment and recommends one action for tomorrow" },
      how: { ko: "본인은 사건, 감정, 원인 슬롯 중 빈 것만 묻는 질문 흐름과 사용자 여정 설계\n팀 서비스는 음성 입력, 벡터 검색, 추천을 결합", en: "I designed the slot-based question flow (event, emotion, cause) and user journey\nThe team service combines voice input, vector search, and recommendation" },
      effect: { ko: "SSAFY 14기 특화프로젝트 발표회 광주1반 3등\n목표: 기록 완료 3분(질문 최대 7번)", en: "3rd place in Gwangju Class 1 at the SSAFY Cohort 14 showcase\nTarget: finishing an entry in 3 minutes (up to 7 questions)" },
    },
    cardResult: {
      ko: "SSAFY 14기 특화프로젝트 발표회 광주1반 3등(8개 팀)",
      en: "3rd place in Gwangju Class 1 at the SSAFY Cohort 14 showcase (8 teams)",
    },
    context: {
      ko: "사용자가 기록을 멈추는 문제를 AI 질문 흐름으로 해결\nSSAFY 14기 특화프로젝트 발표회 **광주1반 3등**",
      en: "Solved the problem of users who stop recording with an AI question flow\nSSAFY Cohort 14 Specialized Project showcase, **3rd place in Gwangju Class 1**",
    },
    story: {
      problem: {
        ko: "기존 회고 방식은 **빈 화면부터 내밀어** 쓰기 전부터 큰 부담\n기록이 한 번으로 끝나 행동 변화로 이어지지 못하는 한계",
        en: "Existing journaling methods **hand over a blank screen first**, a heavy burden before writing even starts\nRecords end after one entry, so they do not lead to behavior change",
      },
      insight: {
        ko: "병목은 **'무엇을 써야 할지 모르는 상태'**\nAI가 알맞은 때에 틀이 있는 질문을 던지면 풀 수 있다고 판단",
        en: "The bottleneck is **'not knowing what to write'**\nJudged it could be solved if AI asks structured questions at the right moment",
      },
      solution: {
        ko: "SenseVoice 음성 입력, Thompson Sampling 추천, pgvector 벡터 검색 결합\n**회고에서 행동 추천까지** 이어지는 흐름 설계",
        en: "Combined SenseVoice voice input, Thompson Sampling recommendation, and pgvector vector search\nDesigned a flow that runs **from reflection to action recommendation**",
      },
    },
    team: {
      ko: "SSAFY 특화 프로젝트 팀(6인)",
      en: "SSAFY specialized-project team (6 members)",
    },
    role: {
      ko: "PM, 프론트엔드 | 문제 정의, 사용자 여정 설계, 기능 우선순위 조율, 화면 구현, 발표",
      en: "PM & Frontend | Problem framing, user journey design, prioritization, UI implementation, and presentation",
    },
    tags: {
      ko: ["AI 회고", "추천 시스템", "서비스 기획", "PM"],
      en: ["AI reflection", "Recommendation", "Product planning", "PM"],
    },
    highlights: {
      ko: [
        "기록이 이어지지 않는 원인을 '심리적 입력 부담'과 **'회고 구조의 부재'**로 재정의",
        "사용자 말을 Event, Emotion, Cause 등 **슬롯**으로 나눠 받아 기록하기 쉽게 구성",
        "기록을 바탕으로 **'내일 바로 실행 가능한 행동 1개'** 추천, 회고가 실행으로 이어지게 구성",
        "SSAFY 14기 특화프로젝트 발표회 광주1반 3등",
      ],
      en: [
        "Reframed recording failure as 'psychological friction' and 'lack of structure'.",
        "Structured each day into slots (Event, Emotion, Cause, etc.) to make logging easier.",
        "Connected reflection to action by recommending 'one immediate task for tomorrow'.",
        "Placed 3rd in Gwangju Class 1 at the SSAFY Cohort 14 Specialized Project showcase.",
      ],
    },
    proof: {
      ko: [
        "사용자가 기록을 멈추는 문제를 **AI 질문 흐름**으로 해결",
        "인지적 부하를 줄이는 **슬롯 기반 질문 엔진** 설계",
        "PM으로서 팀의 **기획 방향이 흔들리지 않게** 조율",
      ],
      en: [
        "Solved behavioral problems through technical structures (AI flows).",
        "Demonstrated planning skills by designing a slot-based engine to reduce cognitive load.",
        "Proven PM skills in aligning team direction consistently.",
      ],
    },
    metrics: [
      {
        value: { ko: "3등", en: "3rd" },
        label: {
          ko: "특화프로젝트 발표회 광주1반(8개 팀)",
          en: "Specialized Project showcase, Gwangju Class 1 (8 teams)",
        },
      },
      {
        value: "74.8%",
        label: {
          ko: "SSAFY 교육생 설문에서 \"하루 기록을 시작하는 것이 어렵다\"고 답한 비율",
          en: "Share of SSAFY trainees surveyed who said starting a daily entry is hard",
        },
      },
      {
        value: { ko: "목표 3분", en: "3 min target" },
        label: {
          ko: "기록 완료 목표 시간(질문 최대 7번)",
          en: "Target time to finish an entry (up to 7 questions)",
        },
      },
    ],
    caseStudy: {
      title: {
        ko: "의지가 아닌 '구조'로 해결하는 기록의 병목",
        en: "Solving Friction with Structure, Not Will",
      },
      summary: {
        ko: "빈 화면이 주는 인지적 부하를 **'슬롯 기반 질문 엔진'**으로 푼 사례",
        en: "Reducing cognitive load of blank screens through a slot-based query engine",
      },
      content: {
        ko: "일기를 계속 쓰지 못하는 이유를 의지 부족이 아닌 빈 화면의 인지적 부하로 정의\nAI가 먼저 질문을 던지는 가이드형 UX 설계\n문제는 LLM이 매번 일관된 질문을 던지지 못한다는 점\n필수 정보(사건, 감정, 원인 등)를 '슬롯'으로 관리, **부족한 정보만 골라 질문**\n'슬롯 기반 동적 질문 엔진' 기획으로 기록 완료율과 데이터의 질을 함께 확보",
        en: "Defined why people can't keep a diary as the cognitive load of a blank screen, not lack of will\nDesigned a guided UX in which AI asks the first question\nProblem: an LLM cannot ask consistent questions every time\nManages essential information (event, emotion, cause) as 'slots' and **asks only about what is missing**\nPlanned a 'slot-based dynamic question engine' to secure both completion rate and data quality",
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
          ko: "음성 입력부터 행동 추천까지의 데이터 흐름\nSenseVoice 음성 입력으로 빈 화면의 입력 부담 완화\n슬롯 기반 질문 엔진이 비어 있는 정보만 골라 가이드형 질문\npgvector에 완성된 회고를 벡터로 저장, 비슷한 과거 기록 검색\nThompson Sampling이 실행 피드백을 반영해 **'내일 실행할 행동 1개'** 추천",
          en: "Data flow from voice input to action recommendation\nSenseVoice voice input eases the burden of a blank screen\nSlot-based question engine picks only the empty slots for guided questions\nCompleted reflections stored as vectors in pgvector to search similar past entries\nThompson Sampling reflects execution feedback to recommend **'one action to take tomorrow'**",
        },
        diagram: "dailylog-pipeline",
      },
      {
        id: "strategy",
        title: {
          ko: "제품 전략",
          en: "Product Strategy",
        },
        body: {
          ko: "AI가 글을 대신 써주지 않는 설계\n**사용자가 스스로 생각하고 기록하도록** 질문을 던지는 비서 역할로 한정\n사용자의 자기 효능감과 기록의 질을 함께 높이려는 선택",
          en: "Designed so AI does not write for the user\nLimited to an assistant that asks questions so **users think and record on their own**\nA choice to raise the user's self-efficacy and record quality together",
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
    heroImage: "/projects/dailylog/card-app-screens.webp",
    cardImage: "/projects/dailylog/card-app-screens.webp",
    media: {
      presentationHref: "/projects/dailylog/dailylog-final-presentation.pptx",
      title: {
        ko: "발표 자료",
        en: "Presentation",
      },
      presentationLabel: {
        ko: "최종 발표자료 다운로드(PPTX, 43KB)",
        en: "Download final presentation (PPTX, 43KB)",
      },
    },
    screenshots: [
      {
        src: "/projects/dailylog/app-home.webp",
        alt: {
          ko: "로그인 화면(실제 앱)",
          en: "Login screen (actual app)",
        },
      },
      {
        src: "/projects/dailylog/design-reco-rating.webp",
        alt: {
          ko: "Figma 시안: 어제 추천받은 활동을 별점으로 평가(추천 피드백 루프 입력)",
          en: "Figma design: rating yesterday's recommended activity (feedback input for the recommendation loop)",
        },
      },
      {
        src: "/projects/dailylog/design-diary-result.webp",
        alt: {
          ko: "Figma 시안: 일기 결과 페이지(다이어리 감성 컨셉)",
          en: "Figma design: diary result page (journal-inspired visual concept)",
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
    stack: ["React 18", "TypeScript", "Zustand", "TanStack Query", "WebSocket (STOMP)"],
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
      ko: "Loggy | 논의, 승인, 기록으로 의사결정의 맥락을 남기는 협업 플랫폼",
      en: "Loggy | Decision Recording & Collaboration Platform",
    },
    summary: {
      ko: "회의와 메신저에 흩어진 논의를 **논의, 승인, 기록의 구조**로 정리해 협업 효율을 높이는 플랫폼입니다.",
      en: "A platform that maximizes collaboration efficiency by formalizing scattered discussions into Discussion, Approval, and Record structures.",
    },
    brief: {
      what: { ko: "논의, 승인, 기록 구조의 의사결정 협업 플랫폼, SSAFY 팀 프로젝트(기획, 프론트엔드 리드)", en: "Decision-recording collaboration platform with discussion, approval, and record structure; SSAFY team project (planning, frontend lead)" },
      pain: { ko: "회의 결정이 기록되지 않거나 메신저 논의가 사라져 같은 논의가 반복됨", en: "Meeting decisions go unrecorded or messenger talk vanishes, so the same discussion repeats" },
      solution: { ko: "GitHub의 PR과 Merge 개념을 옮긴 커밋 기반 논의, 승인 흐름과 결정문 자동 생성", en: "Commit-based discussion and approval borrowing GitHub's PR and Merge, with automatic decision records" },
      how: { ko: "태그를 단 커밋 메시지만 영구 보존, 서버 상태를 단일 소스로 구독하는 실시간 화면 설계", en: "Only tagged commit messages are kept; real-time UI designed to subscribe to server state as the single source" },
      effect: { ko: "기대 효과: 결정 근거를 남겨 같은 논의의 반복 감소(측정 결과 없음)", en: "Expected: fewer repeated discussions by keeping decision rationale (no measured result)" },
    },
    context: {
      ko: "GitHub의 Issue, PR, Merge 개념을 일반 협업 흐름에 적용\n'의사결정의 확실성'을 제공하려 한 시도",
      en: "Applied GitHub's Issue, PR, and Merge concepts to general collaboration flows\nAn attempt to provide 'decision certainty'",
    },
    story: {
      problem: {
        ko: "회의 후 결정사항이 기록되지 않거나 메신저 논의가 휘발\n나중에 같은 논의가 반복되는 비효율 발생",
        en: "Decisions from meetings go unrecorded, or messenger discussions evaporate\nThe same discussion gets repeated later, wasting effort",
      },
      insight: {
        ko: "문제는 기록의 부재보다 '의사결정이 완료되었다는 시스템적 확신'이 없다는 데 있다고 판단",
        en: "The problem was not just missing records, but a lack of 'systemic certainty' that a decision had been finalized.",
      },
      solution: {
        ko: "WebSocket 기반 실시간 검토 흐름과 구조화된 필터링 설계\n논의와 승인이 흐름 안에서 이어지게 구성",
        en: "Designed a WebSocket-based real-time review flow and structured filtering\nSet up so discussion and approval continue within the flow",
      },
    },
    team: {
      ko: "팀 프로젝트",
      en: "Team project",
    },
    role: {
      ko: "기획, 프론트엔드 리드 | 서비스 기획, 의사결정 흐름 구조화, 실시간 UI와 상태 관리 구조 설계, 화면 구현 리드",
      en: "Planning & Frontend Lead | Service planning, decision flow structuring, real-time UI & state architecture, and frontend lead",
    },
    tags: {
      ko: ["협업 플랫폼", "GitHub 워크플로우", "실시간성", "PM"],
      en: ["Collaboration platform", "GitHub workflow", "Real-time", "PM"],
    },
    highlights: {
      ko: [
        "GitHub의 **PR/Merge 개념**을 협업 서비스 UX에 옮겨 의사결정 과정을 단계로 정리",
        "일반 채팅(휘발성)과 핵심 커밋(영구성)의 **데이터 생명 주기를 분리**해 남는 정보의 밀도 향상",
        "회의의 논의 흐름을 한눈에 파악하는 Git Graph 기반 **Tree View UI** 기획",
        "커밋 내역을 분석해 Decision Record(결정문)를 자동 생성하는 AI 엔진 구축",
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
        "복잡한 협업 문제를 **Git의 구조에 빗대어** 시스템으로 해결",
        "데이터의 비즈니스 가치에 따라 **보존 전략을 다르게** 설계",
        "사용자가 부담스러워하던 **문서화 비용을 AI 자동화**로 줄이도록 설계",
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
          ko: "실시간 논의는 회의가 끝나면 휘발\nINFO, OPINION, TODO 태그를 달아 커밋한 메시지만 영구 보존\n보존된 커밋은 Git Graph 기반 Tree View에서 검토, 승인을 거쳐 Merge로 확정\nAI가 커밋 내역을 분석해 결정문(Decision Record) 자동 생성\nGitHub의 Issue → Branch → PR → Merge 흐름을 일반 협업의 의사결정 구조로 이식",
          en: "Real-time discussion evaporates when the meeting ends\nOnly messages committed with INFO, OPINION, or TODO tags are kept permanently\nKept commits are reviewed in a Git-graph Tree View, approved, and finalized by Merge\nAI analyzes the commit history and automatically drafts a Decision Record\nPorted GitHub's Issue → Branch → PR → Merge flow into the decision structure of general collaboration",
        },
        diagram: "loggy-decision-flow",
      },
      {
        id: "frontend-architecture",
        title: {
          ko: "프론트엔드 설계: 서버 기준 단일 소스",
          en: "Frontend Design: Server as the Single Source of Truth",
        },
        body: {
          ko: "React 18 + TypeScript, Zustand, TanStack Query, Tailwind CSS\nWebSocket(STOMP)을 더해 실시간 협업 화면 구현\n실시간 이벤트가 동시에 도착하면 클라이언트 간 UI 상태가 어긋나는 문제 발생\n로컬 상태 최소화, 서버 상태를 단일 소스(Single Source of Truth)로 구독하도록 재설계\n다중 사용자 환경에서도 일관된 UI 유지, '결정이 필요한 순간'에 최소 클릭으로 진입하도록 단순화",
          en: "React 18 + TypeScript, Zustand, TanStack Query, Tailwind CSS\nAdded WebSocket (STOMP) to build the real-time collaboration screen\nProblem: when real-time events arrive at once, UI state diverges between clients\nRedesigned to minimize local state and subscribe to server state as a single source of truth\nKept the UI consistent for multiple users and simplified entry so a 'decision moment' takes minimal clicks",
        },
      },
    ],
    caseStudy: {
      title: {
        ko: "'실시간 소음'을 '영구적 자산'으로 바꾸는 필터링 구조 설계",
        en: "Filtering 'Real-time Noise' into 'Permanent Assets'",
      },
      summary: {
        ko: "데이터의 완결성보다 '의사결정 근거의 가독성'을 우선순위에 둔 기획적 트레이드오프 사례",
        en: "A strategic trade-off prioritizing 'readability of logic' over data completeness",
      },
      content: {
        ko: "기존 메신저의 문제는 논의 과정이 투명하지 않고 결정 근거가 휘발된다는 점\n모든 채팅을 저장하는 대신 Git의 커밋(Commit) 개념 도입\n일반 채팅은 회의 종료 시 휘발, INFO, OPINION, TODO 등 태그로 커밋한 메시지만 영구 보존\n'모든 대화의 보존'보다 '의사결정 핵심 근거의 가독성'이 더 높은 비즈니스 가치라고 판단\n커밋된 메시지만 AI가 요약하게 해 요약 대상의 잡음을 줄이는 설계",
        en: "Problem with existing messengers: the discussion is not transparent and the basis for decisions evaporates\nIntroduced Git's Commit concept instead of storing every chat\nGeneral chat evaporates when the meeting ends; only messages committed with tags such as INFO, OPINION, TODO are kept\nJudged that 'readability of the core basis for decisions' has more business value than 'keeping every conversation'\nDesigned so AI summarizes only committed messages, cutting noise in what gets summarized",
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
        ko: "최종 발표자료 다운로드(PDF, 7.3MB)",
        en: "Download final presentation (PDF, 7.3MB)",
      },
    },
    heroImage: "/projects/loggy/git-structure-mapping.webp",
    screenshots: [
      {
        src: "/projects/loggy/decision-tree-wireframe.webp",
        alt: {
          ko: "회의 내용을 안건과 의견 구조로 정리한 와이어프레임(예시 데이터)",
          en: "Wireframe organizing a meeting into agenda items and opinions (sample data)",
        },
      },
      {
        src: "/projects/loggy/meeting-flow-steps.webp",
        alt: {
          ko: "Loggy 회의 진행 6단계",
          en: "The six steps of a Loggy meeting",
        },
      },
    ],
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
      ko: "Tamna-AI | 제주 재생에너지 출력 제한에 대응하는 분산 데이터센터 입지 분석 기획",
      en: "Tamna-AI | Distributed Data Center Location Analysis",
    },
    summary: {
      ko: "제주 재생에너지 출력 제한 문제를 **계통 혼잡과 수요 불일치 문제**로 재정의하고, 잉여 전력을 흡수할 수 있는 데이터센터 입지를 분석하는 서비스입니다.",
      en: "A service that reframes Jeju's energy curtailment as a grid mismatch issue and analyzes optimal locations for data centers to absorb surplus power.",
    },
    brief: {
      what: { ko: "제주 재생에너지 출력 제한에 대응하는 데이터센터 입지 분석 서비스 기획, 제주 AWS Global Space Challenge 해커톤 팀(기획 담당)", en: "Plan for a data-center siting service on Jeju's renewable curtailment; Jeju AWS Global Space Challenge hackathon team (planning)" },
      pain: { ko: "제주는 재생에너지 과잉으로 출력 제한이 잦은데 전력을 흡수할 수요처가 부족", en: "Jeju often curtails renewable output from oversupply and lacks demand to absorb it" },
      solution: { ko: "출력 제한이 잦은 지역에 데이터센터를 분산 배치하는 입지 분석 서비스", en: "A siting-analysis service distributing data centers to areas with frequent curtailment" },
      how: { ko: "지역별 전력 수급 데이터와 지리 정보를 연동해 입지 효율을 시각화하는 구조 기획", en: "Planned a structure linking regional power data and geographic information to visualize siting efficiency" },
      effect: { ko: "팀이 해커톤 결선 진출(본인은 기획서 작성 담당)", en: "Team reached the hackathon finals (I was responsible for writing the proposal)" },
    },
    context: {
      ko: "기술적 난제를 사업 기회로 전환한 기획 중심 프로젝트\n복합적인 의사결정 문제를 풀어 정리한 사례",
      en: "Planning-centered project that turned a technical challenge into a business opportunity\nA case of solving and organizing a complex decision problem",
    },
    story: {
      problem: {
        ko: "제주도는 재생에너지 발전량 과잉으로 출력 제한이 빈번\n이를 해결할 뚜렷한 수요처 부족",
        en: "Jeju has frequent output curtailment from renewable generation oversupply\nLacks a clear demand source to absorb it",
      },
      insight: {
        ko: "에너지 저장보다 대량 소비처인 데이터센터를 분산 배치해 계통 부담을 더는 방식이 경제적이라고 판단",
        en: "I determined it was more economical to distribute energy-intensive data centers rather than just focusing on storage, easing grid pressure.",
      },
      solution: {
        ko: "지역별 전력 수급 데이터와 지리 정보 연동\n데이터센터 건립 시의 기대 효율을 시각화하는 입지 분석 서비스 구조 기획",
        en: "Linked regional power supply-demand data with geographic information\nPlanned a siting-analysis service structure that visualizes the expected efficiency of building a data center",
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
        "제주 재생에너지 출력 제한 문제를 '에너지-IT 분산 데이터센터 입지 분석' 모델로 재정의",
        "기존 재해 분석 기술을 비즈니스 모델 기획에 활용, 팀은 **결선 진출**",
        "출력 제한이 잦은 지역에 **데이터센터를 분산 배치**해 계통 부담을 줄이는 구조 기획",
        "지역별 전력 수급 데이터와 지리 정보를 연동한 입지 효율 시각화 모델 제안",
      ],
      en: [
        "Reframed Jeju's energy curtailment as a 'Distributed AI Data Center Siting' business model.",
        "Applied existing disaster-analysis tech to business-model planning; the team reached the finals of the Jeju AWS Global Space Challenge.",
        "Proposed an inverse approach of distributing AI data centers in high-curtailment areas to ease grid pressure.",
        "Designed a visualization model for siting efficiency by linking regional power data and GIS.",
      ],
    },
    proof: {
      ko: [
        "출력 제한이라는 기술 문제를 **비즈니스 기회로 바꿔** 기획",
        "공공과 에너지가 얽힌 도메인의 문제를 **실행 가능한 서비스 구조**로 정리",
        "**기획서 작성 주도**, 팀은 해커톤 예선과 본선을 통과해 결선 진출",
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
          ko: "해커톤 결선 진출(기획 리드)",
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
        ko: "기술적 난제를 사업적 기회로 바꾸는 '기획의 관점 전환'",
        en: "Pivoting Technical Assets into Business Opportunities",
      },
      summary: {
        ko: "재해 분석 시스템의 기술력을 '에너지 최적화 BM'으로 피벗하여 해커톤 결선에 진출한 사례",
        en: "Reaching hackathon finals by pivoting risk-zone analysis tech into an energy optimization BM",
      },
      content: {
        ko: "제주도의 위험 지역을 분석하던 기술 자산(지도 기반 분석 엔진)에서 출발\n해커톤 현장에서 제주도의 고질적인 문제인 '재생에너지 출력 제한'에 주목\n전력을 대량 소비하는 AI 데이터센터를 출력 제한이 잦은 지역에 분산 배치해 계통 부담을 줄이는 안 제안\n기술 구현(지도 시각화)과 비즈니스 타당성(전력 수급 최적화) 사이의 연결 고리 설계\n'데이터 기반 의사결정 지원 서비스'로 정리, 직접 작성한 기획서의 팀은 결선 진출",
        en: "Started from a technical asset used to analyze Jeju's risk zones (map-based analysis engine)\nAt the hackathon, noticed Jeju's chronic problem of 'renewable energy curtailment'\nProposed distributing power-hungry AI data centers in areas with frequent curtailment to reduce grid burden\nDesigned the link between technical implementation (map visualization) and business feasibility (power supply optimization)\nFramed as a 'data-based decision support service'; the team advanced to the finals",
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
    heroImage: "/projects/tamna/solution-map.webp",
    screenshots: [
      {
        src: "/projects/tamna/architecture-diagram.webp",
        alt: {
          ko: "팀 발표 자료의 AWS 구조도",
          en: "AWS architecture diagram from the team deck",
        },
      },
      {
        src: "/projects/tamna/site-selection-logic.webp",
        alt: {
          ko: "입지 선정 4단계 로직",
          en: "Four-step site selection logic",
        },
      },
    ],
    links: {
      docs: "/projects/tamna/tamna-proposal.pdf",
      youtube: "", // 사용자 추가 예정
      demo: "",    // 사용자 추가 예정
    },
  },
  {
    slug: "chronicle",
    stack: ["React Native", "Figma"],
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
      ko: "Campus Chronicle | 대학생의 성장 데이터를 금융 가치로 잇는 서비스",
      en: "Campus Chronicle | Growth Data-Driven Financial Service",
    },
    summary: {
      ko: "대학생의 학습, 활동 데이터를 금융 가치와 연결한 플랫폼입니다. **성장 과정으로 신뢰를 쌓고** 금융 혜택을 받습니다.",
      en: "A platform where students link learning and activity data to financial value, proving trust based on their growth process.",
    },
    brief: {
      what: { ko: "대학생 성장 데이터를 금융 가치와 잇는 앱, 신한은행 X SSAFY 해커톤 팀 언더독(5인), UI/UX 디자인과 프론트엔드", en: "App linking student growth data to financial value; Team Underdog (5), Shinhan Bank X SSAFY hackathon; UI/UX design and frontend" },
      pain: { ko: "소득과 자산이 없는 대학생은 금융 이용이 어렵고 활동 이력은 평가에 반영되지 않음", en: "Students without income or assets struggle to use finance, and activity history is not reflected in evaluation" },
      solution: { ko: "출결, 도서관 이용, 소비 같은 비금융 데이터를 대안신용점수로 환산하는 서비스", en: "A service converting non-financial data such as attendance, library use, and spending into an alternative credit score" },
      how: { ko: "본인은 Figma로 앱과 게임 UI/UX를 설계하고 서브 화면(퀘스트, 크로니클 피드) 구현", en: "I designed the app and game UI/UX in Figma and built sub-screens (quests, chronicle feed)" },
      effect: { ko: "기대 효과: 우대금리 등 실질 혜택과 연결(팀 기획서의 구조, 측정 결과 없음)", en: "Expected: linkage to real benefits such as preferential rates (structure in the team proposal; no measured result)" },
    },
    context: {
      ko: "금융 이력이 부족한 씬파일러(Thin-filer) 대학생을 위한 서비스 디자인과 프론트엔드 사례\n활동 기록을 신뢰 데이터로 전환하려 한 시도",
      en: "Service design and frontend case for thin-filer university students with little financial history\nAn attempt to turn activity records into trust data",
    },
    story: {
      problem: {
        ko: "대학생은 소득이나 자산이 없어 금융 서비스 이용에 큰 제약\n잠재력이나 활동 이력은 기존 금융 평가에 미반영",
        en: "University students face big limits using financial services because they have no income or assets\nPotential and activity history are not reflected in existing financial evaluation",
      },
      insight: {
        ko: "학업 성취도, 대외 활동 등 '성장 데이터'를 정량화하면 대학생용 신용 평가 모델이 가능하다고 판단",
        en: "Quantifying 'growth data' like academic achievement and extracurriculars could enable a new credit model specifically for students.",
      },
      solution: {
        ko: "React Native 앱 설계\n출결, 도서관 이용, 소비 내역 같은 비금융 데이터를 '캠퍼스 크레도' 대안신용점수로 환산\n스킬 트리와 2D 픽셀 육성 게임(Phaser.js WebView)으로 성장 시각화",
        en: "Designed a React Native app\nConverts non-financial data such as attendance, library use, and spending into a 'Campus Credo' alternative credit score\nVisualizes growth with a skill tree and a 2D pixel companion game (Phaser.js in WebView)",
      },
    },
    team: {
      ko: "팀 언더독(5인)",
      en: "Team Underdog (5 members)",
    },
    role: {
      ko: "UI/UX 디자인, 프론트엔드 | Figma로 앱과 게임 전체 UI/UX 설계, 디자인 시스템과 컴포넌트 관리, React Native 서브 화면(퀘스트, 크로니클 피드) 구현",
      en: "UI/UX Design & Frontend | End-to-end app/game UI/UX in Figma, design system & components, React Native sub-screens (quests, chronicle feed)",
    },
    tags: {
      ko: ["핀테크", "성장 데이터", "UI/UX 디자인", "금융 UX"],
      en: ["Fintech", "Growth data", "UI/UX design", "Financial UX"],
    },
    highlights: {
      ko: [
        "대학생의 금융 소외(씬파일러) 문제를 '증명 가능한 성장 데이터의 부재'로 정의",
        "비금융 활동을 **'캠퍼스 크레도' 대안신용점수**로 환산해 우대금리 등 실질 혜택과 연결하는 구조 설계",
        "노력이 쌓이는 과정을 **스킬 트리와 2D 픽셀 캐릭터 육성**으로 보여주는 게이미피케이션 UX 디자인",
        "Figma 디자인 시스템과 React Native 컴포넌트 관리 담당(팀 기획서에 역할 명시)",
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
        "사용자 문제를 **금융 비즈니스 구조 안에서** 풀어 본 시도",
        "복잡한 평가 과정을 **따라가기 쉬운 사용자 흐름**으로 설계",
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
          ko: "앱과 게임 UI/UX 설계",
          en: "App and game UI/UX design",
        },
      },
      {
        label: {
          ko: "팀 기획서에 금융 API 연동 포함(본인 역할은 디자인)",
          en: "Financial API integration in the team proposal (my role: design)",
        },
      },
    ],
    artifacts: {
      ko: ["개발 기획서(11p)", "서비스 흐름도", "ERD, 시스템 아키텍처"],
      en: ["Development proposal (11p)", "Service flow diagram", "ERD & system architecture"],
    },
    media: {
      presentationHref: "/projects/chronicle/chronicle-proposal.pdf",
      title: {
        ko: "개발 기획서",
        en: "Development Proposal",
      },
      presentationLabel: {
        ko: "팀 언더독 개발 기획서 보기(PDF, 11p)",
        en: "View team proposal (PDF, 11p)",
      },
    },
    heroImage: "/projects/chronicle/cover-app-mockup.webp",
    screenshots: [
      {
        src: "/projects/chronicle/home-benefit-screens.webp",
        alt: {
          ko: "홈 화면과 맞춤형 혜택 화면(팀 발표 자료)",
          en: "Home and personalized benefits screens (team deck)",
        },
      },
      {
        src: "/projects/chronicle/skilltree-ai-analysis.webp",
        alt: {
          ko: "스킬 트리와 분석 결과 화면(팀 발표 자료)",
          en: "Skill tree and analysis result screens (team deck)",
        },
      },
      {
        src: "/projects/chronicle/system-flowchart.webp",
        alt: {
          ko: "팀 발표 자료의 시스템 흐름도",
          en: "System flowchart from the team deck",
        },
      },
      {
        src: "/projects/chronicle/expo-login-screen-20250829.webp",
        alt: {
          ko: "실기기에서 실행한 로그인 화면(2025.08.29 캡처)",
          en: "Login screen running on a real device (captured Aug 29, 2025)",
        },
      },
    ],
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
      ko: "전주 ICT 코딩 챌린지 | 지역 현안 주제 챌린지 팀 참여",
      en: "Jeonju ICT Coding Challenge | Team Entry on Regional Issues",
    },
    summary: {
      ko: "지역의 관광, 사회, 환경 현안을 주제로 한 전주 ICT 코딩 챌린지에 팀으로 참여한 기록입니다.",
      en: "A record of taking part as a team in the Jeonju ICT Coding Challenge on regional tourism, social, and environmental issues.",
    },
    team: {
      ko: "팀 프로젝트",
      en: "Team project",
    },
    role: {
      ko: "팀 참여",
      en: "Team participant",
    },
    tags: {
      ko: ["지역 현안", "공공 서비스", "팀 참여"],
      en: ["Regional issues", "Public service", "Team participation"],
    },
    highlights: {
      ko: [
        "지역 관광과 사회 현안을 서비스 아이디어로 다루는 챌린지에 팀으로 참여",
      ],
      en: [
        "Took part as a team in a challenge that turns regional tourism and social issues into service ideas.",
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
          ko: "지역 사회의 실질적인 불편을 기술로 해결할 방법 고민",
          en: "Thought about how to solve real inconveniences in a local community with technology",
        },
      },
    ],
    artifacts: {
      ko: [],
      en: [],
    },
    links: {},
  },
  {
    slug: "ssafy-startup-track",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "GA4"],
    featured: false,
    status: "completed",
    sortDate: "2026-05-21",
    period: {
      ko: "2026.04.02 - 2026.05.21",
      en: "Apr 2 - May 21, 2026",
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
    brief: {
      what: { ko: "AI 노하우를 실행 가능한 워크플로우 상품으로 파는 마켓플레이스, SSAFY 14기 자율 프로젝트 F107 6인 팀", en: "Marketplace selling AI know-how as executable workflow products; SSAFY Cohort 14 autonomous project, six-person team F107" },
      pain: { ko: "안정적인 AI 결과물에는 노하우가 필요한데 흩어져 있고, 기존 프롬프트 마켓은 원문 노출과 복제 위험이 있음", en: "Stable AI outputs need know-how that is scattered, and existing prompt markets risk exposing and copying raw prompts" },
      solution: { ko: "템플릿 구매, 슬롯 입력, 결과 생성으로 노하우가 실행되는 워크플로우 마켓", en: "A workflow market where know-how runs through template purchase, slot input, and result generation" },
      how: { ko: "프롬프트 원문은 비공개, 슬롯 값만 입력하는 실행 구조(팀 설계)\n본인은 AI 모델 관련 구축과 시장, 경쟁사 분석에 기여", en: "Raw prompts kept private and only slot values entered (team design)\nI contributed to AI model integration support and to market and competitor analysis" },
      effect: { ko: "기대 효과: 크리에이터 노하우 보호와 사용자 편의 확보(측정 결과 없음)", en: "Expected: protecting creator know-how while keeping users' effort low (no measured result)" },
    },
    context: {
      ko: "F107 유캔두 팀 프로젝트\n프롬프트 단순 판매 대신 프롬프트, 작업 흐름, 수정 노하우를 함께 상품화하는 방향 검토",
      en: "F107 YouCanDo team project\nReviewed productizing prompts, task flows, and refinement know-how together, instead of simply selling prompts",
    },
    story: {
      problem: {
        ko: "AI 도구는 쉬워졌지만 안정적인 결과물에는 여전히 좋은 프롬프트, 작업 흐름, 수정 노하우 필요\n이런 노하우는 여러 채널과 개인 경험 속에 분산\n기존 프롬프트 마켓의 한계는 원문 노출과 복제 위험, 단순 생성 중심",
        en: "AI tools got easier, but stable outputs still need good prompts, task flows, and refinement know-how\nThat know-how is scattered across channels and personal experience\nLimits of existing prompt markets: raw prompt exposure and copying risk, focus on simple generation",
      },
      insight: {
        ko: "AI가 발전할수록 모델보다 사람이 쌓은 실전 노하우와 결과물 설계 능력의 가치가 커질 수 있다고 판단\n핵심은 프롬프트 원문 판매가 아니라 슬롯 값만 입력하면 노하우가 실행되는 구조",
        en: "Judged that as AI advances, people's accumulated practical know-how and output-design ability may grow more valuable than the model\nThe core is not selling raw prompts but a structure where know-how runs when only slot values are entered",
      },
      solution: {
        ko: "템플릿 구매 → 슬롯 입력 → 결과 생성 흐름이 중심\n프롬프트 원문은 비공개로 보호\n사용자는 필요한 입력값만 채워 이미지와 문서 결과물 생성\n위 흐름의 워크플로우 마켓 구조 설계",
        en: "Centered on the flow: buy template → enter slots → generate result\nRaw prompts protected as private\nUsers fill in only the needed inputs to generate image and document outputs\nDesigned a workflow marketplace structure around this flow",
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
        "AI 노하우를 실행 가능한 워크플로우 상품으로 전환하는 서비스 방향 정리",
        "프롬프트 원문 비공개, 슬롯에 값을 넣어 실행하는 흐름으로 **크리에이터 노하우 보호**와 사용자 편의 확보",
        "템플릿 판매 수수료와 실행 기반 크레딧 모델 중심으로 수익 구조 검토",
        "GA4를 연결해 **사용자 이탈을 볼 수 있게** 구성",
      ],
      en: [
        "Defined the service direction of converting AI know-how into executable workflow products.",
        "Balanced creator protection and user convenience through hidden prompts, slot-based execution, and generated outputs.",
        "Reviewed revenue structures around template commission and execution-based credits.",
        "Connected GA4 so user drop-off could be observed.",
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
          ko: "GA4 이탈 분석 연결",
          en: "GA4 drop-off tracking",
        },
      },
    ],
    caseStudy: {
      title: {
        ko: "프롬프트가 아니라 실행 가능한 AI 노하우를 판매하기",
        en: "Selling Executable AI Know-how, Not Raw Prompts",
      },
      summary: {
        ko: "문제 정의, 시장성 검토, 크리에이터 보호, 수익모델을 함께 고려한 서비스 기획 사례",
        en: "A planning case that considered problem framing, market viability, creator protection, and revenue models together",
      },
      content: {
        ko: "서비스 구현보다 '왜 이 서비스를 만들어야 하는가'를 설득하는 일이 중요하다는 점 체감\n범용 AI 모델이 결과를 만들어도 최종 작업물까지는 경험에서 나온 작업 흐름과 수정 노하우 필요\n기획 보조로 문제 정의, 시장성 검토, 수익모델 검토, 발표자료, 경쟁사 분석에 기여\n위 기여는 팀 전체 성과와 별개\n함께 다룬 사업 질문은 콜드스타트, 공급자/소비자 양면시장, 크리에이터 보호, 실행 비용 기반 크레딧 모델",
        en: "Felt that persuading people 'why this service should be built' matters more than building it\nEven when general-purpose AI models produce results, the final work still needs task flows and refinement know-how from experience\nAs planning support, I contributed to problem definition, market viability review, revenue model review, presentation materials, and competitor analysis\nThese contributions are separate from the team's overall results\nBusiness questions handled together: cold start, supplier/consumer two-sided market, creator protection, execution-cost-based credit model",
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
        ko: "최종 발표자료 다운로드(PPTX, 6.2MB)",
        en: "Download final presentation (PPTX, 6.2MB)",
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
          ko: "Promtree는 AI 노하우를 만들고 판매하는 플랫폼\n사용자는 마켓에서 템플릿을 구매하고 필요한 슬롯 값 입력\n숨겨진 프롬프트와 작업 흐름을 기반으로 이미지 또는 문서 결과물 생성",
          en: "Promtree is a platform for creating and selling AI know-how\nUsers buy templates from the marketplace and enter the needed slot values\nImage or document outputs generated from hidden prompts and workflows",
        },
      },
      {
        id: "features",
        title: {
          ko: "주요 기능",
          en: "Key Features",
        },
        body: {
          ko: "AI 노하우/템플릿 마켓플레이스\n슬롯 기반 템플릿 실행, 프롬프트 원문 비공개\n이미지 및 문서 결과물 생성, AI 문서 편집과 객체별 지침 부여\n커뮤니티/협업 기반 공유와 피드백\nGA4 기반 사용자 이탈 분석",
          en: "AI know-how and template marketplace\nSlot-based template execution, raw prompts kept private\nImage and document output generation, AI document editing with per-object instructions\nCommunity and collaboration-based sharing and feedback\nGA4-based user drop-off analysis",
        },
      },
      {
        id: "stack",
        title: {
          ko: "기술 스택",
          en: "Tech Stack",
        },
        body: {
          ko: "Frontend는 Next.js, TypeScript, Tailwind CSS 사용\nFrontend에 Zustand, TanStack Query도 함께 사용\nBackend는 FastAPI와 PostgreSQL 기반\nAI 영역은 OpenAI, Claude, Gemini 등 멀티모델 연동 구조 고려\nCanvas/Editor 경험에는 Fabric.js 활용",
          en: "Frontend: Next.js, TypeScript, Tailwind CSS\nFrontend also uses Zustand and TanStack Query\nBackend based on FastAPI and PostgreSQL\nAI layer considered a multi-model integration structure (OpenAI, Claude, Gemini, etc.)\nFabric.js used for the canvas and editor experience",
        },
      },
      {
        id: "concerns",
        title: {
          ko: "기술적/기획적 고민",
          en: "Technical and Product Considerations",
        },
        body: {
          ko: "기술 과제는 멀티모델 API 연동, 슬롯 기반 실행 구조, 문서 편집 경험, 사용자 이탈 분석\n사업 과제는 고품질 템플릿 확보, 공급자와 소비자 양면시장 형성\n크리에이터 노하우 보호와 실행 기반 수익모델 설계도 사업 과제",
          en: "Technical challenges: multi-model API integration, slot-based execution, document editing experience, user drop-off analysis\nBusiness challenges: securing high-quality templates, forming a two-sided market of suppliers and consumers\nProtecting creator know-how and designing an execution-based revenue model are also business challenges",
        },
      },
      {
        id: "retrospective",
        title: {
          ko: "최종발표 회고",
          en: "Final Presentation Retrospective",
        },
        body: {
          ko: "최종발표를 마치며 구현보다 '왜 이 서비스를 만들어야 하는가'를 설득하는 일이 중요하다고 체감\nPromtree는 AI를 잘 쓰는 사람의 노하우를 실행 가능한 상품으로 바꾸려는 시도\n단순 프롬프트 마켓과는 다른 방향",
          en: "After the final presentation, felt that persuading people 'why this service should be built' matters more than implementation\nPromtree is an attempt to turn the know-how of people who use AI well into executable products\nA different direction from a simple prompt marketplace",
        },
      },
      {
        id: "learnings",
        title: {
          ko: "배운 점",
          en: "What I Learned",
        },
        body: {
          ko: "개발자에게도 문제 정의와 설득력이 중요하다는 점 학습\nAI 서비스는 모델 호출만으로 완성되지 않고 사용자 흐름과 결과물 품질 관리까지 설계 대상\n팀 프로젝트에서는 기능 구현뿐 아니라 발표, 문서화, 시장 분석도 중요한 산출물이라는 점 체감",
          en: "Learned that problem definition and persuasiveness matter for developers too\nAn AI service is not complete with model calls alone; user flow and output quality control are also design targets\nFelt that in team projects, presentation, documentation, and market analysis matter as deliverables as much as feature implementation",
        },
      },
      {
        id: "next",
        title: {
          ko: "향후 개선 방향",
          en: "Next Improvements",
        },
        body: {
          ko: "다음 개선 방향은 고품질 Seed 템플릿 확보, 크리에이터 온보딩 개선\n검색/추천 기능 고도화, 실행 결과 품질 평가\n영상/음악 등 생성 영역 확장, B2B 맞춤형 워크플로우 확장",
          en: "Next improvements: securing high-quality seed templates, improving creator onboarding\nAdvancing search and recommendation, evaluating output quality\nExpanding into video and music generation, expanding B2B custom workflows",
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
    heroImage: "/projects/promtree/template-purchase-screen.webp",
    screenshots: [
      {
        src: "/projects/promtree/slot-input-screen.webp",
        alt: {
          ko: "슬롯 입력 화면",
          en: "Slot input screen",
        },
      },
      {
        src: "/projects/promtree/result-generation-screen.webp",
        alt: {
          ko: "결과 생성 화면",
          en: "Result generation screen",
        },
      },
      {
        src: "/projects/promtree/slot-protection-structure.webp",
        alt: {
          ko: "프롬프트 원문은 비공개, 입력값만 공개하는 슬롯 구조",
          en: "Slot structure that keeps the prompt private and exposes only the inputs",
        },
      },
    ],
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
      ko: "S.A.L.E.S | 영업 리드를 고객 여정 5단계로 정리한 CRM",
      en: "S.A.L.E.S | Customer-Centered CRM Project",
    },
    summary: {
      ko: "흩어져 있던 영업 리드 관리를 **'고객 여정 5단계'**와 '칸반 스타일 파이프라인'으로 정리한 CRM 프로젝트입니다.",
      en: "A CRM project that structured fragmented lead management into a '5-stage customer journey' and 'Kanban-style pipeline'.",
    },
    brief: {
      what: { ko: "영업 리드를 고객 여정 5단계 칸반 파이프라인으로 정리한 CRM, SSAFY 관통 프로젝트 팀(기획 담당)", en: "CRM organizing sales leads into a 5-stage customer-journey Kanban pipeline; SSAFY integrated project team (planning)" },
      pain: { ko: "영업 과정이 파편화돼 리드 이탈 지점을 알기 어렵고 영업 사원의 다음 액션 가이드가 없음", en: "A fragmented sales process hides where leads drop off, and reps get no guide for the next action" },
      solution: { ko: "고객 여정 5단계 칸반 보드와, 단계가 정체되면 경고하도록 기획한 액션 유도형 파이프라인", en: "A 5-stage Kanban board and an action-oriented pipeline planned to warn when a stage stalls" },
      how: { ko: "본인은 고객 여정 5단계 정의, 파이프라인 UI 설계, 비즈니스 로직의 데이터 모델 매핑 담당", en: "I defined the 5 stages, designed the pipeline UI, and mapped business logic to data models" },
      effect: { ko: "기대 효과: 영업 운영 효율 향상(목표, 측정 결과 없음)", en: "Expected: better sales operating efficiency (a goal; no measured result)" },
    },
    context: {
      ko: "기능 구현을 넘어 영업 담당자와 고객 간의 '운영 흐름'을 시스템으로 연결한 사례",
      en: "Beyond feature building, a business structuring case that seamlessly connected operational flows between sales and customers.",
    },
    story: {
      problem: {
        ko: "영업 과정이 파편화되어 리드(Lead) 이탈 지점 파악이 어려운 상태\n영업 사원의 '다음 액션'에 대한 가이드 부재",
        en: "Fragmented sales process made it hard to find where leads drop off\nNo guide for sales reps' 'next action'",
      },
      insight: {
        ko: "CRM의 본질을 데이터 축적이 아닌 '영업 사원의 행동 유도'로 정의\n직관적인 시각화가 핵심이라고 판단",
        en: "Defined the essence of CRM as 'driving sales reps' actions', not accumulating data\nJudged intuitive visualization to be the key",
      },
      solution: {
        ko: "고객 여정을 5단계로 구분한 칸반 보드 도입\n특정 단계 정체 시 시각적 경고를 주는 '액션 유도형 파이프라인' 설계",
        en: "Introduced a Kanban board that splits the customer journey into 5 stages\nDesigned an 'action-oriented pipeline' that gives a visual warning when a stage stalls",
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
        "리드부터 계약까지의 영업 과정을 '고객 여정 5단계' 모델로 구분",
        "영업 사원의 **다음 행동을 제안하는** 칸반 기반 파이프라인 UI 기획(운영 효율 향상이 목표)",
        "비즈니스 요구사항을 소프트웨어의 **상태 관리와 데이터 모델**에 매핑",
      ],
      en: [
        "Structured the sales process from Lead to Contract into a '5-stage customer journey' model.",
        "Planned a Kanban-based pipeline UI that suggests the next sales action (aimed at better operational efficiency).",
        "Precisely mapped business requirements to software state management and data models.",
      ],
    },
    proof: {
      ko: [
        "비즈니스 요구사항을 **기능 명세로 구체화**",
        "사용자(영업 사원)가 **해야 할 일을 중심으로** 시스템 UI/UX 설계",
        "복잡한 운영 흐름을 **단순한 데이터 모델**로 정리",
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
        ko: "데이터 축적이 아닌 '행동 유도'를 위한 CRM 설계",
        en: "Designing CRM for Action, Not Just Data",
      },
      summary: {
        ko: "현장에서 외면받는 CRM의 문제를 '시각적 파이프라인'과 '액션 가이드'로 해결한 사례",
        en: "Solving CRM adoption issues with visual pipelines and action guides",
      },
      content: {
        ko: "기존 CRM이 데이터 입력의 번거로움 때문에 현장에서 외면받는 점에 주목\nCRM의 본질을 '관리'가 아닌 영업 사원의 '다음 행동 유도'로 정의\n텍스트 리스트 나열 대신 영업 단계를 시각화한 칸반 보드 도입\n리드가 특정 단계에서 정체되면 시각적 피드백을 주는 로직 기획\nPM으로서 비즈니스 요구사항을 사용자 과업 중심으로 정리",
        en: "Noted that existing CRMs are ignored in the field because data entry is cumbersome\nDefined the essence of CRM not as 'management' but as 'driving the sales rep's next action'\nIntroduced a Kanban board that visualizes sales stages instead of listing text rows\nPlanned logic that gives visual feedback when a lead stalls at a stage\nAs PM, organized business requirements around user tasks",
      },
    },
    artifacts: {
      ko: ["고객 여정 맵", "파이프라인 와이어프레임", "기능 명세서"],
      en: ["Customer Journey Map", "Pipeline Wireframes", "Feature Specs"],
    },
    heroImage: "/projects/sales-crm/recommended-products.webp",
    screenshots: [
      {
        src: "/projects/sales-crm/consult-notes-ai-summary.webp",
        alt: {
          ko: "팀 최종 발표 자료에 실린 상담 내용과 요약 화면",
          en: "Consultation notes and summary screen from the team's final deck",
        },
      },
      {
        src: "/projects/sales-crm/ai-sales-script.webp",
        alt: {
          ko: "팀 최종 발표 자료에 실린 상담 스크립트 화면",
          en: "Consultation script screen from the team's final deck",
        },
      },
      {
        src: "/projects/sales-crm/recommendation-logic-flow.webp",
        alt: {
          ko: "팀 최종 발표 자료의 추천 로직 흐름",
          en: "Recommendation logic flow from the team's final deck",
        },
      },
    ],
    links: {},
  },
];
