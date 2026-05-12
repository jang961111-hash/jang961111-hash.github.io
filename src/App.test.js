import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const { TextDecoder, TextEncoder } = require("util");

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

jest.mock(
  "react-router",
  () => require("../node_modules/react-router/dist/development/index.js"),
  { virtual: true }
);
jest.mock(
  "react-router/dom",
  () => require("../node_modules/react-router/dist/development/dom-export.js"),
  { virtual: true }
);
jest.mock(
  "react-router-dom",
  () => require("../node_modules/react-router-dom/dist/index.js"),
  { virtual: true }
);

jest.mock("./hooks/useScrollReveal", () => () => ({
  elementRef: { current: null },
  isVisible: true,
}));

const { MemoryRouter, useLocation } = require("react-router-dom");
const App = require("./App").default;
const i18n = require("./i18n").default;

const LocationProbe = () => {
  const location = useLocation();

  return <div data-testid="location-probe">{location.pathname}</div>;
};

const renderAtRoute = (route) =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
      <LocationProbe />
    </MemoryRouter>
  );

beforeAll(() => {
  window.scrollTo = jest.fn();
  window.print = jest.fn();

  class MockIntersectionObserver {
    observe() {}

    unobserve() {}

    disconnect() {}
  }

  global.IntersectionObserver = MockIntersectionObserver;
});

beforeEach(async () => {
  window.localStorage.clear();
  window.sessionStorage.clear();
  await i18n.changeLanguage("ko");
});

describe("App routing flows", () => {
  test("navigates from the English home to a project detail page and back", async () => {
    renderAtRoute("/en/");

    await waitFor(() => {
      expect(document.title).toBe("Byeongheon Jang | Technical Product Manager");
    });

    await userEvent.click(
      screen.getByRole("link", { name: "Open case study" })
    );

    await waitFor(() => {
      expect(screen.getByTestId("location-probe").textContent).toBe(
        "/en/projects/loggy/"
      );
    });
    await waitFor(() => {
      expect(document.title).toBe(
        "Loggy | Real-Time Log Analysis Collaboration Platform | Byeongheon Jang"
      );
    });

    await userEvent.click(
      screen.getByRole("link", { name: "Back to project archive" })
    );

    await waitFor(() => {
      expect(screen.getByTestId("location-probe").textContent).toBe("/en/");
    });
    await waitFor(() => {
      expect(document.title).toBe("Byeongheon Jang | Technical Product Manager");
    });
  });

  test("switches the Korean home route to English from the navbar toggle", async () => {
    renderAtRoute("/");

    await waitFor(() => {
      expect(document.title).toBe("장병헌 | Technical Product Manager");
    });

    await userEvent.click(screen.getAllByText("EN")[0]);

    await waitFor(() => {
      expect(screen.getByTestId("location-probe").textContent).toBe("/en/");
    });
    await waitFor(() => {
      expect(document.title).toBe("Byeongheon Jang | Technical Product Manager");
    });
  });

  test("keeps smooth section scrolling working on the English home route", async () => {
    renderAtRoute("/en/");

    await waitFor(() => {
      expect(document.title).toBe("Byeongheon Jang | Technical Product Manager");
    });
    await waitFor(() => {
      expect(window.scrollTo).toHaveBeenCalled();
    });

    window.scrollTo.mockClear();

    await userEvent.click(
      screen.getAllByRole("link", { name: "Core Projects" })[0]
    );

    await waitFor(() => {
      expect(window.scrollTo).toHaveBeenCalledWith(
        expect.objectContaining({ behavior: "smooth" })
      );
    });
    expect(screen.getByTestId("location-probe").textContent).toBe("/en/");
  });

  test("redirects unknown English routes to the English home", async () => {
    renderAtRoute("/en/does-not-exist");

    await waitFor(() => {
      expect(screen.getByTestId("location-probe").textContent).toBe("/en/");
    });
    await waitFor(() => {
      expect(document.title).toBe("Byeongheon Jang | Technical Product Manager");
    });
  });

  test("redirects unknown project slugs to the matching locale home", async () => {
    renderAtRoute("/projects/not-a-real-project/");

    await waitFor(() => {
      expect(screen.getByTestId("location-probe").textContent).toBe("/");
    });
    await waitFor(() => {
      expect(document.title).toBe("장병헌 | Technical Product Manager");
    });
  });
});
