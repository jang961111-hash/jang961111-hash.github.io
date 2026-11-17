import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";

// Six faint column lines fixed behind the page (three on phones).
const PageGrid = () => (
  <div className="page-grid" aria-hidden="true">
    <div className="wrap">
      {Array.from({ length: 6 }, (_, index) => (
        <span key={index} />
      ))}
    </div>
  </div>
);

const AppLayout = ({ theme, onToggleTheme, onPrint, children }) => (
  <div className="layout">
    <PageGrid />
    <Navbar theme={theme} onToggleTheme={onToggleTheme} onPrint={onPrint} />
    <main>{children}</main>
    <Contact />
    <ScrollToTop />
  </div>
);

export default AppLayout;
