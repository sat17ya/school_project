import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="btn btn-primary rounded-circle position-fixed"
        style={{
          bottom: "20px",
          right: "20px",
          zIndex: "1000",
          width: "45px",
          height: "45px",
        }}
        aria-label="Scroll to top"
      >
        <i className="bi bi-arrow-up "></i>
      </button>
    )
  );
}

export default ScrollToTopButton;
