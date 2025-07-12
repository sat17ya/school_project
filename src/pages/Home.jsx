import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Director,
  Principal,
  Facility1,
  Facility2,
  Facility3,
} from "../assets/images";

function Home() {
  const facilities = [
    {
      image: Facility1,
      title: "Library",
      shortDescription: "A vast collection of books and digital resources.",
    },
    {
      image: Facility2,
      title: "Science Lab",
      shortDescription: "Fully equipped labs for hands-on experiments.",
    },
    {
      image: Facility3,
      title: "Computer Lab",
      shortDescription: "State-of-the-art computer facilities.",
    },
  ];
  return (
    <>
      <div
        id="homeCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active position-relative">
            <img
              src={Banner1}
              className="d-block w-100 carousel-image vh-100 "
              alt="Slide 1"
            />
            <div className="carousel-gradient"></div>
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center vh-100 px-3">
              <h1 className="text-white display-4 fw-bold mb-2 slide-heading">
                Welcome To Hi-Tech Public School
              </h1>

              <p className="text-white mb-4 slide-text">
                Hi-Tech Public School, Kuakhia, a co-educational English Medium
                school which offers a vibrant, verdant, and secure ambience
                where the joy of learning is nurtured in every student. The
                hallmark of HI-TECH institutions is quality education, upholding
                academic excellence with a holistic approach, which is the focus
                of the competent and caring faculty members.
              </p>
              <Link to="/about" className="btn btn-light fw-bold px-4 py-2">
                Read More
              </Link>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item position-relative">
            <img
              src={Banner2}
              className="d-block w-100 carousel-image vh-100 "
              alt="Slide 2"
            />
            <div className="carousel-gradient"></div>
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center vh-100 px-3">
              <h1 className="text-white display-4 fw-bold mb-3 slide-heading">
                Excellence in Academics
              </h1>
              <p className="text-white  mb-4 slide-text">
                Shaping leaders of tomorrow with quality education and holistic
                growth.
              </p>
              <a href="/academics" className="btn btn-light fw-bold px-4 py-2">
                Read More
              </a>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item position-relative">
            <img
              src={Banner3}
              className="d-block w-100 carousel-image vh-100 "
              alt="Slide 3"
            />
          </div>

          {/* Slide 4 */}
          <div className="carousel-item position-relative">
            <img
              src={Banner4}
              className="d-block w-100 carousel-image vh-100 "
              alt="Slide 4"
            />
          </div>

          {/* Slide 5 */}
          <div className="carousel-item position-relative">
            <img
              src={Banner5}
              className="d-block w-100 carousel-image vh-100 "
              alt="Slide 5"
            />
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Director's Message Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <motion.div
            className="row align-items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Chairman Image */}
            <motion.div
              className="col-md-4 mb-4 mb-md-0 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={Director}
                alt="Er. Ajaya Kumar Panda"
                className="img-fluid rounded-4 shadow-lg"
                style={{ maxHeight: "350px", objectFit: "cover" }}
              />
            </motion.div>

            {/* Message Content */}
            <motion.div
              className="col-md-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-3 fw-bold text-primary">Director's Message</h2>

              <i className="fw-bold">
                “Education is our passport to the future, for tomorrow belongs
                to the people who prepare for it today”.{" "}
              </i>
              <p className="fs-5 text-muted">
                I consider myself fortunate enough to have been entrusted with
                the responsibility of being an integral part of an educational
                institution where I help nurture the future generation of our
                country at HI-TECH PUBLIC SCHOOL.
              </p>

              <h5 className="mt-4 mb-0 fw-bold text-dark">
                Mrs. Preeti Parna Panda
              </h5>
              <p className="mb-3 text-secondary">
                Director, Hi-Tech Public School , Kuakhia
              </p>
              <Link
                to="/about/chairman"
                className="btn btn-primary mt-2 px-4 py-2 fw-bold"
              >
                Read More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Principal's Message Section (Reversed) */}
      <section className="py-5 bg-white">
        <div className="container">
          <motion.div
            className="row align-items-center flex-column-reverse flex-md-row"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="col-md-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-3 fw-bold text-primary">Principal's Message</h2>
              <p className="fs-5 text-muted">
                As Principal of Hi-Tech Public School, I’m proud to be part of a
                community where learning never stops—for students, teachers,
                staff, and parents alike. We are committed to academic
                excellence and holistic development, fostering values like
                respect, integrity, compassion, and excellence. Our dedicated
                staff lead by example, creating an environment where every
                student can thrive and confidently face global challenges.
              </p>
              <h5 className="mt-4 mb-0 fw-bold text-dark">
                Mr. Jeetendra Pattnaik
              </h5>
              <p className="mb-3 text-secondary">
                Principal, Hi-Tech Public School , Kuakhia
              </p>
              <Link
                to="/about/principal-desk"
                className="btn btn-primary mt-2 px-4 py-2 fw-bold"
              >
                Read More
              </Link>
            </motion.div>

            <motion.div
              className="col-md-4 mb-4 mb-md-0 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={Principal}
                alt="Mr. Jeetendra Pattnaik"
                className="img-fluid rounded-4 shadow-lg"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="position-relative py-5 custom-cards-section">
        {/* Smooth Top Divider */}
        <div className="custom-shape-divider-top">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.66,22,103.78,39.05,172,39.05,86,0,172-26,258-26s172,26,258,26,172-26,258-26,172,26,258,26V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-primary">
            What We Offer
          </h2>
          <div className="row g-4">
            {/* Card 1 - Scholastic */}
            <motion.div
              className="col-md-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card h-100 shadow-lg border-0 hover-scale text-center p-4 rounded-4 bg-white">
                <div className="mb-3">
                  <i className="bi bi-book-half display-3 text-primary"></i>
                </div>
                <h4 className="fw-bold mb-3">Scholastic</h4>
                <p className="text-muted mb-4">
                  Our curriculum focuses on academic excellence, providing
                  strong foundational knowledge and critical thinking skills.
                </p>
                <Link
                  to="/academics"
                  className="btn btn-outline-primary fw-bold px-4 py-2"
                >
                  Read More
                </Link>
              </div>
            </motion.div>

            {/* Card 2 - Co-Scholastic */}
            <motion.div
              className="col-md-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card h-100 shadow-lg border-0 hover-scale text-center p-4 rounded-4 bg-white">
                <div className="mb-3">
                  <i className="bi bi-people-fill display-3 text-success"></i>
                </div>
                <h4 className="fw-bold mb-3">Co-Scholastic</h4>
                <p className="text-muted mb-4">
                  We nurture talents through co-curricular activities that
                  develop creativity, life skills, teamwork, and leadership.
                </p>
                <Link
                  to="/beyond"
                  className="btn btn-outline-success fw-bold px-4 py-2"
                >
                  Read More
                </Link>
              </div>
            </motion.div>

            {/* Card 3 - Facilities */}
            <motion.div
              className="col-md-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="card h-100 shadow-lg border-0 hover-scale text-center p-4 rounded-4 bg-white">
                <div className="mb-3">
                  <i className="bi bi-building display-3 text-danger"></i>
                </div>
                <h4 className="fw-bold mb-3">Facilities</h4>
                <p className="text-muted mb-4">
                  PCS offers state-of-the-art facilities including modern
                  classrooms, labs, libraries, and sports complexes.
                </p>
                <Link
                  to="/academics/facilities"
                  className="btn btn-outline-danger fw-bold px-4 py-2"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-5 position-relative bg-light">
        <div className="container text-center">
          <motion.h2
            className="mb-5 fw-bold text-primary"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Facilities
          </motion.h2>

          <div className="row g-4">
            {facilities.map((facility, index) => (
              <motion.div
                className="col-md-4"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="card facility-card border-0 shadow h-100">
                  <div className="facility-image-container">
                    <img
                      src={facility.image}
                      className="card-img-top"
                      alt={facility.title}
                    />
                    <div className="facility-hover-overlay d-flex justify-content-center align-items-center text-white text-center p-3">
                      <p className="mb-0">{facility.shortDescription}</p>
                    </div>
                  </div>
                  <div className="card-body facility-card-body text-white text-center">
                    <h5 className="card-title fw-bold text-dark text-capitalize">
                      {facility.title}
                    </h5>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <Link
            to="/academics/facilities"
            className="btn btn-warning fw-bold mt-4 px-4 py-2"
          >
            View All Facilities
          </Link>
        </div>
      </section>
      {/* Blog & Notice Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-stretch">
            {/* Blog Section */}
            <motion.div
              className="col-md-8 d-flex flex-column justify-content-between"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold text-primary mb-4">Latest Blogs</h2>

              {/* Blog List */}
              <div className="d-flex flex-column gap-4 flex-grow-1">
                {/* Blog 1 */}
                <div className="d-flex flex-md-row flex-column gap-3 align-items-center shadow-sm p-3 rounded hover-scale">
                  <img
                    src={Facility1}
                    alt="Blog 1"
                    className="img-fluid rounded"
                    style={{
                      width: "200px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h5 className="fw-bold mb-2">Empowering Future Leaders</h5>
                    <p className="text-muted mb-0">
                      PCS Kalahandi nurtures students through holistic education
                      and leadership building activities.
                    </p>
                    <Link
                      to="/blog/1"
                      className="btn btn-sm btn-outline-danger fw-bold"
                    >
                      Read More
                    </Link>
                  </div>
                </div>

                {/* Blog 2 */}
                <div className="d-flex flex-md-row flex-column gap-3 align-items-center shadow-sm p-3 rounded hover-scale">
                  <img
                    src={Facility2}
                    alt="Blog 2"
                    className="img-fluid rounded"
                    style={{
                      width: "200px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h5 className="fw-bold mb-2">
                      Celebrating Academic Excellence
                    </h5>
                    <p className="text-muted mb-0">
                      Our students continue to achieve top academic performances
                      with the support of our faculty.
                    </p>
                    <Link
                      to="/blog/2"
                      className="btn btn-sm btn-outline-success fw-bold"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              {/* View All Blogs Button */}
              <div className="text-center mt-4">
                <Link
                  to="/blog"
                  className="btn btn-outline-primary fw-bold px-4 py-2"
                >
                  View All Blogs
                </Link>
              </div>
            </motion.div>

            {/* Notice Board Section */}
            <motion.div
              className="col-md-4 d-flex flex-column"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold text-success mb-4">Notice Board</h2>
              <div className="notice-board border rounded-4 shadow flex-grow-1 overflow-hidden position-relative">
                <div className="notice-marquee">
                  <ul className="list-unstyled mb-0 p-3">
                    <li className="mb-4 pb-2 border-bottom">
                      📢 Admission Open for 2024-25.
                    </li>
                    <li className="mb-4 pb-2 border-bottom">
                      🏆 Annual Sports Meet on 15th July.
                    </li>
                    <li className="mb-4 pb-2 border-bottom">
                      🎓 Parent-Teacher Meeting on 20th July.
                    </li>
                    <li className="mb-4 pb-2 border-bottom">
                      📅 Independence Day Celebration on 15th August.
                    </li>
                    <li className="mb-4 pb-2 border-bottom">
                      🏫 School Reopens after Summer Break on 5th June.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
