import React from "react";

const labels = {
  ko: {
    title: "Loggy 의사결정 흐름 다이어그램",
    lane1: {
      name: "실시간 논의",
      tech: "WebSocket · Issue → Branch",
      desc: "안건별 분기에서 자유롭게 논의",
      volatile: "휘발 — 회의 종료 시 소멸",
    },
    funnel: "태그 커밋만 영구 보존",
    lane2: {
      name: "영구 보존 기록",
      tech: "Git Workflow",
    },
    steps: [
      {
        name: "태그 커밋",
        tech: "Commit",
        desc: ["핵심 메시지만 기록", "자산으로 영구 보존"],
      },
      {
        name: "검토 · 승인",
        tech: "Pull Request · Tree View",
        desc: ["논의 흐름을 Git Graph", "뷰로 한눈에 검토"],
      },
      {
        name: "결정 확정",
        tech: "Merge",
        desc: ["'결정 완료'라는", "시스템적 확신 제공"],
      },
      {
        name: "결정문 자동 생성",
        tech: "AI Decision Record",
        desc: ["커밋 내역을 분석해", "결정문 자동 작성"],
      },
    ],
  },
  en: {
    title: "Loggy decision flow diagram",
    lane1: {
      name: "Live Discussion",
      tech: "WebSocket · Issue → Branch",
      desc: "Open chat on each topic branch",
      volatile: "volatile — expires after the meeting",
    },
    funnel: "Only tagged commits persist",
    lane2: {
      name: "Permanent Record",
      tech: "Git Workflow",
    },
    steps: [
      {
        name: "Tagged Commit",
        tech: "Commit",
        desc: ["Only key messages become", "permanent assets"],
      },
      {
        name: "Review · Approve",
        tech: "Pull Request · Tree View",
        desc: ["Discussion reviewed at a", "glance as a Git graph"],
      },
      {
        name: "Finalize",
        tech: "Merge",
        desc: ["Systemic certainty that", "the decision is done"],
      },
      {
        name: "Decision Record",
        tech: "AI Generated",
        desc: ["Drafted automatically", "from commit history"],
      },
    ],
  },
};

const TAG_CHIPS = [
  { label: "INFO", x: 498, w: 46 },
  { label: "OPINION", x: 552, w: 66 },
  { label: "TODO", x: 626, w: 48 },
];

const CHAT_PILLS = [
  { x: 560, w: 100 },
  { x: 680, w: 120 },
  { x: 820, w: 80 },
];

const BOX_W = 205;
const BOX_H = 112;
const BOX_Y = 245;
const BOX_XS = [35, 262, 489, 716];

const LoggyDecisionFlowDiagram = ({ lang = "ko" }) => {
  const copy = labels[lang] ?? labels.ko;

  return (
    <svg
      className="architecture-diagram"
      viewBox="0 0 960 400"
      role="img"
      aria-labelledby="loggy-diagram-title"
    >
      <title id="loggy-diagram-title">{copy.title}</title>
      <defs>
        <marker
          id="lg-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--text-muted)" />
        </marker>
      </defs>

      {/* 휘발 레인: 실시간 논의 */}
      <rect
        x="15"
        y="20"
        width="930"
        height="95"
        rx="14"
        fill="var(--bg-primary)"
        stroke="var(--border-strong)"
        strokeWidth="1.5"
        strokeDasharray="6 5"
      />
      <text x="35" y="52" fontSize="15" fontWeight="700" fill="var(--text-primary)">
        {copy.lane1.name}
      </text>
      <text className="mono" x="35" y="73" fontSize="11" fill="var(--accent-primary)">
        {copy.lane1.tech}
      </text>
      <text x="35" y="94" fontSize="11.5" fill="var(--text-secondary)">
        {copy.lane1.desc}
      </text>
      <text x="925" y="52" fontSize="11" fill="var(--text-muted)" textAnchor="end">
        {copy.lane1.volatile}
      </text>
      <g opacity="0.55">
        {CHAT_PILLS.map((pill) => (
          <g key={pill.x}>
            <rect
              x={pill.x}
              y="64"
              width={pill.w}
              height="26"
              rx="13"
              fill="var(--bg-hover)"
              stroke="var(--border-color)"
            />
            <text
              x={pill.x + pill.w / 2}
              y="81"
              fontSize="11"
              fill="var(--text-muted)"
              textAnchor="middle"
            >
              ···
            </text>
          </g>
        ))}
      </g>

      {/* 필터: 태그 커밋만 영구 레인으로 */}
      <line
        x1="480"
        y1="118"
        x2="480"
        y2="194"
        stroke="var(--text-muted)"
        strokeWidth="1.6"
        markerEnd="url(#lg-arrow)"
      />
      <text x="498" y="143" fontSize="12" fontWeight="600" fill="var(--text-primary)">
        {copy.funnel}
      </text>
      {TAG_CHIPS.map((chip) => (
        <g key={chip.label}>
          <rect
            x={chip.x}
            y="152"
            width={chip.w}
            height="22"
            rx="11"
            fill="none"
            stroke="var(--accent-primary)"
            strokeWidth="1.2"
          />
          <text
            className="mono"
            x={chip.x + chip.w / 2}
            y="167"
            fontSize="10"
            fill="var(--accent-primary)"
            textAnchor="middle"
          >
            {chip.label}
          </text>
        </g>
      ))}

      {/* 영구 레인: Git 워크플로우 */}
      <rect
        x="15"
        y="200"
        width="930"
        height="175"
        rx="14"
        fill="var(--bg-primary)"
        stroke="var(--border-strong)"
        strokeWidth="1.5"
      />
      <text x="35" y="230" fontSize="12" fontWeight="700" fill="var(--text-primary)">
        {copy.lane2.name}
      </text>
      <text className="mono" x="145" y="230" fontSize="11" fill="var(--accent-primary)">
        {copy.lane2.tech}
      </text>

      {copy.steps.map((step, i) => {
        const x = BOX_XS[i];
        return (
          <g key={step.name}>
            <rect
              x={x}
              y={BOX_Y}
              width={BOX_W}
              height={BOX_H}
              rx="12"
              fill="var(--bg-secondary)"
              stroke="var(--border-color)"
              strokeWidth="1.5"
            />
            <text
              x={x + 18}
              y={BOX_Y + 30}
              fontSize="14"
              fontWeight="700"
              fill="var(--text-primary)"
            >
              {step.name}
            </text>
            <text
              className="mono"
              x={x + 18}
              y={BOX_Y + 51}
              fontSize="11"
              fill="var(--accent-primary)"
            >
              {step.tech}
            </text>
            {step.desc.map((line, j) => (
              <text
                key={line}
                x={x + 18}
                y={BOX_Y + 74 + j * 17}
                fontSize="11.5"
                fill="var(--text-secondary)"
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}

      {BOX_XS.slice(0, -1).map((x, i) => (
        <line
          key={x}
          x1={x + BOX_W}
          y1={BOX_Y + BOX_H / 2}
          x2={BOX_XS[i + 1] - 4}
          y2={BOX_Y + BOX_H / 2}
          stroke="var(--text-muted)"
          strokeWidth="1.6"
          markerEnd="url(#lg-arrow)"
        />
      ))}
    </svg>
  );
};

export default LoggyDecisionFlowDiagram;
