import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ASK_PORTFOLIO_ENDPOINT } from "../../config/askPortfolio";
import "./AskPortfolio.css";

const MAX_INPUT = 300;
const MAX_TURNS = 8;

const AskPortfolio = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  if (!ASK_PORTFOLIO_ENDPOINT) {
    return null;
  }

  const send = async (text) => {
    const question = text.trim();
    if (!question || loading) return;

    const nextMessages = [...messages, { role: "user", content: question }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(ASK_PORTFOLIO_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-MAX_TURNS) }),
      });
      const data = await res.json();
      const reply =
        res.ok && data.reply
          ? data.reply
          : res.status === 429
            ? t("ask.rateLimited")
            : t("ask.error");
      setMessages([...nextMessages, { role: "assistant", content: reply }]);
    } catch {
      setMessages([
        ...nextMessages,
        { role: "assistant", content: t("ask.error") },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const suggestions = [t("ask.suggestion1"), t("ask.suggestion2")];

  return (
    <div className="ask-widget">
      {open && (
        <div className="ask-panel structural-card" role="dialog" aria-label={t("ask.title")}>
          <div className="ask-panel-head">
            <span className="ask-panel-title mono">{t("ask.title")}</span>
            <button
              type="button"
              className="ask-close"
              onClick={() => setOpen(false)}
              aria-label={t("ask.close")}
            >
              ×
            </button>
          </div>

          <div className="ask-panel-body" ref={bodyRef}>
            <div className="ask-bubble assistant">{t("ask.greeting")}</div>
            {messages.map((m, i) => (
              <div key={i} className={`ask-bubble ${m.role}`}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="ask-bubble assistant ask-typing">
                <span />
                <span />
                <span />
              </div>
            )}
            {messages.length === 0 && !loading && (
              <div className="ask-suggestions">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className="ask-suggestion"
                    onClick={() => send(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            className="ask-panel-input"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              maxLength={MAX_INPUT}
              placeholder={t("ask.placeholder")}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" disabled={loading || !input.trim()}>
              {t("ask.send")}
            </button>
          </form>

          <p className="ask-disclaimer">{t("ask.disclaimer")}</p>
        </div>
      )}

      <button
        type="button"
        className={`ask-fab ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={t("ask.title")}
      >
        {open ? "×" : t("ask.fab")}
      </button>
    </div>
  );
};

export default AskPortfolio;
