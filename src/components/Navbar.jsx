import React from "react";
import Marquee from "react-fast-marquee";
import { NavLink, useLocation } from "react-router-dom";
import LogoImage from "../assets/images/bannerheader1.png";

function Navbar() {
  const location = useLocation();
  const handleNavLinkClick = () => {
    // Collapse the navbar programmatically
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const collapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: true,
      });
      collapse.hide();
    }
  };

  // Active path detection for parent links
  const isAboutActive = location.pathname.startsWith("/about");
  const isAcademicsActive = location.pathname.startsWith("/academics");
  const isBeyondActive = location.pathname.startsWith("/beyond");
  const isGalleryActive = location.pathname.startsWith("/gallery");
  const isEventsActive = location.pathname.startsWith("/events");
  const isAdmissionActive = location.pathname.startsWith("/admission");

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary text-light py-1 ">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center small">
          <div className="d-flex flex-lg-row flex-md-column flex-md-row align-items-center gap-3">
            <span>
              <i className="bi bi-envelope-fill me-1"></i>{" "}
              <a className="text-light text-decoration-none" href="mailto:">
                pragaticonceptschoolkld@gmail.com
              </a>
            </span>
            <a
              href="https://maps.app.goo.gl/LJxfqDANQmzUQsBL8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light text-decoration-none"
            >
              <i className="bi bi-geo-alt-fill me-1"></i> Find Us on Map
            </a>
          </div>
          <div className="order-2 order-md-2 w-50 text-center text-md-end ">
            <Marquee gradient={false} speed={50} pauseOnHover={true}>
              📢 New Admission Open for 2024-25 &nbsp;&nbsp;&nbsp; |
              &nbsp;&nbsp;&nbsp; 📢 Annual Sports Meet on 15th July
              &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 📢 Welcome to PCS School!
            </Marquee>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="bg-white py-3 border-bottom">
        <div className="container text-center">
          <img
            src={LogoImage}
            alt="PCS School Logo"
            className="img-fluid"
            style={{ maxHeight: "80px" }}
          />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div className="container flex-row-reverse">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Mobile Brand Text */}
          <span className="navbar-brand d-lg-none ms-2 text-white fw-bold">
            PCS, Kalahandi
          </span>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav custom-ms fw-bold">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  end
                  onClick={handleNavLinkClick}
                >
                  Home
                </NavLink>
              </li>

              {/* About Us Dropdown */}
              <li className="nav-item dropdown">
                <NavLink
                  className={`nav-link dropdown-toggle ${
                    isAboutActive ? "active" : ""
                  }`}
                  to="/about"
                  id="aboutDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/about/aim-objective"
                      onClick={handleNavLinkClick}
                    >
                      Aim and Objective
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/about/principal-desk"
                      onClick={handleNavLinkClick}
                    >
                      From the Principal's Desk
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/about/origin-history"
                      onClick={handleNavLinkClick}
                    >
                      Origin and History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/about/chairman"
                      onClick={handleNavLinkClick}
                    >
                      Our Chairman
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/about/vision-mission"
                      onClick={handleNavLinkClick}
                    >
                      Vision and Mission
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/about/school-rules"
                      onClick={handleNavLinkClick}
                    >
                      School Rules and Code of Conduct
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Academics Dropdown */}
              <li className="nav-item dropdown">
                <NavLink
                  className={`nav-link dropdown-toggle ${
                    isAcademicsActive ? "active" : ""
                  }`}
                  to="/academics"
                  id="academicsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Academics
                </NavLink>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="academicsDropdown"
                >
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/academics/facilities"
                      onClick={handleNavLinkClick}
                    >
                      Academic Facilities
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/academics/enrollment"
                      onClick={handleNavLinkClick}
                    >
                      Enrollment of Students
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/academics/faculty"
                      onClick={handleNavLinkClick}
                    >
                      Faculty
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/academics/books"
                      onClick={handleNavLinkClick}
                    >
                      List of Books
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/academics/tc-sample"
                      onClick={handleNavLinkClick}
                    >
                      Transfer Certificate Sample
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Beyond Curriculum Dropdown */}
              <li className="nav-item dropdown">
                <NavLink
                  className={`nav-link dropdown-toggle ${
                    isBeyondActive ? "active" : ""
                  }`}
                  to="/beyond"
                  id="beyondDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Beyond Curriculum
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="beyondDropdown">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/beyond/clubs"
                      onClick={handleNavLinkClick}
                    >
                      Clubs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/beyond/activities"
                      onClick={handleNavLinkClick}
                    >
                      Co-curricular Activities
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/beyond/sports"
                      onClick={handleNavLinkClick}
                    >
                      Sports and Games
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/beyond/workshops"
                      onClick={handleNavLinkClick}
                    >
                      Workshops and Seminars
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Gallery Dropdown */}
              <li className="nav-item dropdown">
                <NavLink
                  className={`nav-link dropdown-toggle ${
                    isGalleryActive ? "active" : ""
                  }`}
                  to="/gallery"
                  id="galleryDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gallery
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="galleryDropdown">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/gallery/photos"
                      onClick={handleNavLinkClick}
                    >
                      Photo Gallery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/gallery/videos"
                      onClick={handleNavLinkClick}
                    >
                      Video Gallery
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Events Dropdown */}
              <li className="nav-item dropdown">
                <NavLink
                  className={`nav-link dropdown-toggle ${
                    isEventsActive ? "active" : ""
                  }`}
                  to="/events"
                  id="eventsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Events
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="eventsDropdown">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/events/awards"
                      onClick={handleNavLinkClick}
                    >
                      Awards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/events/functions"
                      onClick={handleNavLinkClick}
                    >
                      Functions and Events
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/events/assembly"
                      onClick={handleNavLinkClick}
                    >
                      School Assembly
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/events/trips"
                      onClick={handleNavLinkClick}
                    >
                      Trips and Excursions
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Admission Dropdown */}
              <li className="nav-item dropdown">
                <NavLink
                  className={`nav-link dropdown-toggle ${
                    isAdmissionActive ? "active" : ""
                  }`}
                  to="/admission"
                  id="admissionDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admission
                </NavLink>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="admissionDropdown"
                >
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/admission/procedure"
                      onClick={handleNavLinkClick}
                    >
                      Admission Procedure
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/admission/fees"
                      onClick={handleNavLinkClick}
                    >
                      Fees Structure
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Remaining Direct Links */}
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/disclosure"
                  end
                  onClick={handleNavLinkClick}
                >
                  Mandatory Public Disclosure
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  end
                  onClick={handleNavLinkClick}
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/results"
                  end
                  onClick={handleNavLinkClick}
                >
                  Results
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
