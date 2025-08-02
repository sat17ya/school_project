import { useState, useEffect } from "react";


const FloatingActionWithScroll = () => {
  const [open, setOpen] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  let closeTimer = null;

  const toggleFab = () => {
    setOpen((prevOpen) => {
      const nextState = !prevOpen;
      if (nextState) {
        closeTimer = setTimeout(() => setOpen(false), 5000);
      } else {
        clearTimeout(closeTimer);
      }
      return nextState;
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Hi-Tech Public School",
          text: "Check out this amazing school!",
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard. Share it anywhere!");
      } catch (err) {
        alert("Sharing not supported. Please copy the URL manually.");
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowFab(scrollY > 100);
      setShowScroll(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Action Buttons */}
      <div
        className={`fab-container position-fixed end-0 p-4 z-3 ${
          showFab ? "fade-in" : "fade-out"
        }`}
        style={{ bottom: showScroll ? "54px" : "20px" }} // Leaves space if scroll button visible
      >
        <div
          className={`fab-buttons d-flex flex-column align-items-end mb-2 gap-2 ${
            open ? "fab-open" : ""
          }`}
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/917328834300"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success rounded-circle fab-action d-flex align-items-center justify-content-center"
            style={{ width: "50px", height: "50px" }}
            aria-label="Chat with us on WhatsApp"
          >
            <i className="bi bi-whatsapp fs-4" aria-hidden="true"></i>
          </a>

          {/* Share */}
          <button
            onClick={handleShare}
            className="btn btn-primary rounded-circle fab-action d-flex align-items-center justify-content-center"
            style={{ width: "50px", height: "50px" }}
            aria-label="Share this page"
          >
            <i className="bi bi-share fs-4" aria-hidden="true"></i>
          </button>
        </div>

        {/* FAB Toggle Button */}
        <button
          className="btn btn-danger rounded-circle shadow d-flex align-items-center justify-content-center"
          style={{ width: "50px", height: "50px" }}
          onClick={toggleFab}
          aria-label={open ? "Close quick action menu" : "Open quick action menu"}
        >
          <i
            className={`bi ${open ? "bi-x-lg" : "bi-plus-lg"} fs-4`}
            aria-hidden="true"
          ></i>
        </button>
      </div>

      {/* Scroll To Top Button - Below FAB */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary rounded-circle position-fixed d-flex align-items-center justify-content-center"
          style={{
            bottom: "20px", // Fixed at bottom
            right: "24px",
            zIndex: 998,
            width: "50px",
            height: "50px",
          }}
          aria-label="Scroll to top"
        >
          <i className="bi bi-arrow-up fs-4"></i>
        </button>
      )}
    </>
  );
};

export default FloatingActionWithScroll;
