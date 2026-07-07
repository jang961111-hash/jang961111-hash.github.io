import React from "react";

const labels = {
  ko: {
    title: "DailyLog AI 회고 파이프라인 다이어그램",
    steps: [
      {
        no: "01",
        name: "음성 · 텍스트 입력",
        tech: "SenseVoice STT",
        desc: ["막연한 빈 화면 대신", "말로 하루 기록 시작"],
      },
      {
        no: "02",
        name: "슬롯 기반 질문 엔진",
        tech: "LLM Prompt Flow",
        desc: ["7개 슬롯(사건·감정·원인…)", "비어 있는 슬롯만 골라 질문"],
      },
      {
        no: "03",
        name: "구조화 기록 저장",
        tech: "PostgreSQL · pgvector",
        desc: ["회고를 벡터로 저장하고", "유사한 과거 기록 소환"],
      },
      {
        no: "04",
        name: "행동 추천",
        tech: "Thompson Sampling",
        desc: ["내일 실행할 행동 1개 추천", "회고를 실행으로 연결"],
      },
    ],
    questionLoop: "3~5턴 가이드형 질문",
    feedbackLoop: "실행 피드백으로 탐색–활용 균형 조정",
  },
  en: {
    title: "DailyLog AI reflection pipeline diagram",
    steps: [
      {
        no: "01",
        name: "Voice · Text Input",
        tech: "SenseVoice STT",
        desc: ["Start the log by speaking,", "not from a blank page"],
      },
      {
        no: "02",
        name: "Slot-based Query Engine",
        tech: "LLM Prompt Flow",
        desc: ["7 slots (Event · Emotion …)", "asks only for missing slots"],
      },
      {
        no: "03",
        name: "Structured Storage",
        tech: "PostgreSQL · pgvector",
        desc: ["Stores entries as vectors,", "recalls similar past logs"],
      },
      {
        no: "04",
        name: "Action Recommendation",
        tech: "Thompson Sampling",
        desc: ["One task for tomorrow,", "linking reflection to action"],
      },
    ],
    questionLoop: "3–5 turn guided questioning",
    feedbackLoop: "Tuned by execution feedback (explore–exploit)",
  },
};

const BOX_W = 205;
const BOX_H = 125;
const BOX_Y = 95;
const BOX_XS = [15, 250, 485, 720];

const DailyLogPipelineDiagram = ({ lang = "ko" }) => {
  const copy = labels[lang] ?? labels.ko;

  return (
    <svg
      className="architecture-diagram"
      viewBox="0 0 960 300"
      role="img"
      aria-labelledby="dailylog-diagram-title"
    >
      <title id="dailylog-diagram-title">{copy.title}</title>
      <defs>
        <marker
          id="dl-arrow"
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

      {copy.steps.map((step, i) => {
        const x = BOX_XS[i];
        return (
          <g key={step.no}>
            <rect
              x={x}
              y={BOX_Y}
              width={BOX_W}
              height={BOX_H}
              rx="14"
              fill="var(--bg-primary)"
              stroke="var(--border-strong)"
              strokeWidth="1.5"
            />
            <text
              className="mono"
              x={x + 18}
              y={BOX_Y + 27}
              fontSize="11"
              fill="var(--accent-primary)"
            >
              {step.no}
            </text>
            <text
              x={x + 18}
              y={BOX_Y + 52}
              fontSize="15"
              fontWeight="700"
              fill="var(--text-primary)"
            >
              {step.name}
            </text>
            <text
              className="mono"
              x={x + 18}
              y={BOX_Y + 73}
              fontSize="11"
              fill="var(--accent-primary)"
            >
              {step.tech}
            </text>
            {step.desc.map((line, j) => (
              <text
                key={line}
                x={x + 18}
                y={BOX_Y + 96 + j * 17}
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
          markerEnd="url(#dl-arrow)"
        />
      ))}

      {/* 질문 엔진 self-loop: 부족한 슬롯이 채워질 때까지 반복 질문 */}
      <path
        d="M 315 93 C 315 52, 395 52, 395 90"
        fill="none"
        stroke="var(--text-muted)"
        strokeWidth="1.6"
        strokeDasharray="4 4"
        markerEnd="url(#dl-arrow)"
      />
      <text
        x="355"
        y="40"
        fontSize="11"
        fill="var(--text-muted)"
        textAnchor="middle"
      >
        {copy.questionLoop}
      </text>

      {/* 추천 엔진 피드백 루프: 실행 결과가 다음 추천에 반영 */}
      <path
        d="M 905 222 C 905 262, 742 262, 742 225"
        fill="none"
        stroke="var(--text-muted)"
        strokeWidth="1.6"
        strokeDasharray="4 4"
        markerEnd="url(#dl-arrow)"
      />
      <text
        x="823"
        y="285"
        fontSize="11"
        fill="var(--text-muted)"
        textAnchor="middle"
      >
        {copy.feedbackLoop}
      </text>
    </svg>
  );
};

export default DailyLogPipelineDiagram;
