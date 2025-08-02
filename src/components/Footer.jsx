import { Link } from "react-router-dom";
import { FooterLogo } from "../assets/images";

function Footer() {
  return (
    <footer className="footer-section text-white pt-5" style={{ backgroundColor: "#0a2647" }}>
      <div className="container">
        <div className="row gy-4">
          {/* Contact Info */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Find us</h5>
            <p className="mb-1">Hi-Tech Public School ,</p>
            <p className="mb-1">Mugupal, Haripur-Balipatna Road</p>
            <p className="mb-1">Jajpur</p>
            <p className="mb-3">Odisha - 755009</p>

            <h5 className="fw-bold mb-2">Call us</h5>
            <span><a className="text-decoration-none text-white" rel="noopener noreferrer" href="tel:+917328834300">+91 7328834300</a> /
            <a className="text-decoration-none text-white" rel="noopener noreferrer" href="tel:+918327755078">+91 8327755078</a></span>

            <h5 className="fw-bold mb-2 mt-2">Mail us</h5>
            <a className="text-decoration-none text-white" href="mailto:hitechpublicschool2015@gmail.com">hitechpublicschool2015@gmail.com</a>
            <small>{" "}(General Enquiry)</small>
          </div>

          {/* About and Social */}
          <div className="col-md-4 text-center">
            <img
              src={FooterLogo}
              alt="PCS Logo"
              className="mb-3 footer-logo"
            />
            <p className="mb-4 px-3">
              Hi-Tech Public School, a co-educational EM school offers a vibrant, verdant and secure ambience where the joy of learning is nurtured in every student.
            </p>
            <h5 className="fw-bold mb-3">Follow us</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://www.facebook.com/profile.php?id=100075435207007" target="_blank" rel="noreferrer" className="text-white fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://wa.me/918327755078" target="_blank" rel="noreferrer" className="text-white fs-4">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/hi_tech_publicschool_kuakhia/?next=%2F" target="_blank" rel="noreferrer" className="text-white fs-4">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Useful Links and Location */}
          <div className="col-md-4">
            <div className="row">
              <div className="col-6 mb-4">
                <h5 className="fw-bold mb-3">Useful Links</h5>
                <ul className="list-unstyled">
                  <li><Link to="/" className="text-white text-decoration-none mb-2 d-block">Home</Link></li>
                  <li><Link to="/about/vision-mission" className="text-white text-decoration-none mb-2 d-block">Vision & Mission</Link></li>
                  <li><Link to="/facilities" className="text-white text-decoration-none mb-2 d-block">Facilities</Link></li>
                  <li><Link to="/gallery" className="text-white text-decoration-none mb-2 d-block">Co-Scholastic</Link></li>
                </ul>
              </div>
              <div className="col-6 mb-4">
                <h5 className="fw-bold mb-3">&nbsp;</h5>
                <ul className="list-unstyled">
                  <li><Link to="/about" className="text-white text-decoration-none mb-2 d-block">About Us</Link></li>
                  {/* <li><Link to="/leadership" className="text-white text-decoration-none mb-2 d-block">Leadership</Link></li> */}
                  <li><Link to="/admission/procedure" className="text-white text-decoration-none mb-2 d-block">Admissions</Link></li>
                  <li><Link to="/academics" className="text-white text-decoration-none mb-2 d-block">Scholastic</Link></li>
                  <li><Link to="/contact" className="text-white text-decoration-none mb-2 d-block">Contact Us</Link></li>
                </ul>
              </div>
            </div>

            <h5 className="fw-bold mb-3">Location</h5>
            <div className="rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.8576912412273!2d86.21315539999999!3d20.7970444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19593eb103c827%3A0xdafe5eda99c95041!2sHi%20Tech%20Public%20School!5e0!3m2!1sen!2sin!4v1754129162366!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pragati Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="text-center mt-4 pt-4 border-top border-light">
          <small className="d-block text-white-50 mb-1">
            Copyright © 2024, All Right Reserved
          </small>
          <small className="d-block text-white-50">
            Designed by - <i class="bi bi-browser-chrome"><a href="https://i-am-satyaprakash.vercel.app/" target="_blank" rel="noreferrer noopener" className="text-decoration-none"> Satya</a></i>
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
