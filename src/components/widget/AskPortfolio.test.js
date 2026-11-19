import { buildPayload } from "./AskPortfolio";

const user = (content) => ({ role: "user", content });
const bot = (content, error = false) => ({ role: "assistant", content, error });

test("long replies are trimmed to the worker limit", () => {
  const sent = buildPayload([user("a"), bot("x".repeat(900)), user("b")]);

  expect(sent.map((message) => message.content.length)).toEqual([1, 600, 1]);
});

test("error notices are not sent back", () => {
  const sent = buildPayload([user("a"), bot("failed", true), user("b")]);

  expect(sent).toEqual([user("a"), user("b")]);
});

test("payload is capped and starts with a user turn", () => {
  const history = [];
  for (let turn = 0; turn < 5; turn += 1) {
    history.push(user(`q${turn}`), bot(`a${turn}`));
  }
  history.push(user("last"));

  const sent = buildPayload(history);

  expect(sent.length).toBeLessThanOrEqual(8);
  expect(sent[0].role).toBe("user");
  expect(sent[sent.length - 1].content).toBe("last");
  expect(sent.every((message) => !("error" in message))).toBe(true);
});
