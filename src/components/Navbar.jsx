import Marquee from "react-fast-marquee";
import { NavLink, useLocation } from "react-router-dom";
import { Logo } from "../assets/images";

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
  const isGalleryActive = location.pathname.startsWith("/gallery");
  const isAdmissionActive = location.pathname.startsWith("/admission");

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary text-light py-1 ">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center small">
          <div className="d-flex flex-lg-row flex-md-column flex-md-row align-items-center gap-3">
            <span>
              <i className="bi bi-envelope-fill me-1 custom-logo"></i>{" "}
              <a
                className="text-light text-decoration-none"
                rel="noopener noreferrer"
                href="mailto:hitechpublicschool2015@gmail.com"
              >
                hitechpublicschool2015@gmail.com
              </a>
            </span>
            <a
              href="https://maps.app.goo.gl/JDknB32Xfuy7Tfxm9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light text-decoration-none"
            >
              <i className="bi bi-geo-alt-fill me-1 custom-logo"></i> Find Us on
              Map
            </a>
          </div>
          <div className="order-2 order-md-2 w-50 text-center text-md-end ">
            <Marquee gradient={false} speed={50} pauseOnHover={true}>
              📢 New Admission Open for 2025-26 &nbsp;&nbsp;&nbsp; |
              &nbsp;&nbsp;&nbsp; 📢 Annual Sports Meet on 15th July
              &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 📢 Welcome to HPS School!
            </Marquee>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="bg-white py-3 border-bottom">
        <div className="container text-center">
          <img
            src={Logo}
            alt="Hi-Tech Public School Logo"
            className="img-fluid"
            style={{ maxHeight: "80px" }}
          />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
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
            Hi-Tech Public School
          </span>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
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
                      to="/about/vision-mission"
                      onClick={handleNavLinkClick}
                    >
                      Vision and Mission
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Academics */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/academics"onClick={handleNavLinkClick}>
                  Academics
                </NavLink>
              </li>
              {/* Facilites */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/facilities"onClick={handleNavLinkClick}>
                  Facilities
                </NavLink>
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
