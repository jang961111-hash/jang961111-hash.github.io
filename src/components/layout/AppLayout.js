import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";

const AppLayout = ({ theme, onToggleTheme, onPrint, children }) => (
  <div className="layout">
    <Navbar theme={theme} onToggleTheme={onToggleTheme} onPrint={onPrint} />
    <main>{children}</main>
    <Contact />
    <ScrollToTop />
  </div>
);

export default AppLayout;
