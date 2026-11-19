import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Shown only while the reader scrolls back up, so it does not sit on top of
  // the right edge of the text while they read downward.
  useEffect(() => {
    let lastY = window.pageYOffset;

    const toggleVisibility = () => {
      const y = window.pageYOffset;
      const goingUp = y < lastY - 4;
      const goingDown = y > lastY + 4;

      if (y <= 500 || goingDown) {
        setIsVisible(false);
      } else if (goingUp) {
        setIsVisible(true);
      }

      if (goingUp || goingDown) {
        lastY = y;
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // The button fades out at the top; keep keyboard focus somewhere real.
    document.getElementById('main')?.focus({ preventScroll: true });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  );
};

export default ScrollToTop;
