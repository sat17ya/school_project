import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function VisionMission() {
  const titleControls = useAnimation();
  const quoteControls = useAnimation();

  useEffect(() => {
    titleControls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
    quoteControls.start({ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.7 } });
  }, [titleControls, quoteControls]);

  return (
    <section className="vision-mission-section py-5">
      <div className="container">

        {/* Title */}
        <motion.h2
          className="section-title text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={titleControls}
        >
          Our Vision & Mission
        </motion.h2>

        {/* Principal Quote */}
        <motion.div
          className="principal-quote mt-5 text-center px-md-5"
          initial={{ opacity: 0, y: 40 }}
          animate={quoteControls}
        >
          <blockquote className="blockquote fs-5 fst-italic text-secondary">
            "Education is not just about going to school and getting a degree.
            It's about widening your knowledge and absorbing the truth about
            life and values."
          </blockquote>
          <footer className="blockquote-footer mt-2 text-dark">
            Chairman,{" "}
            <cite title="Hi-Tech Public School">Hi-Tech Public School</cite>
          </footer>
        </motion.div>

        {/* Vision and Mission Cards */}
        <div className="row g-4">
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="vm-card p-4 h-100 rounded shadow-sm">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-eye-fill fs-2 text-primary me-3"></i>
                <h4 className="mb-0 fw-bold text-dark">Our Vision</h4>
              </div>
              <p className="text-muted">
                To nurture young minds to become responsible citizens,
                compassionate human beings, and future leaders who think
                creatively, act ethically, and serve society with integrity and
                purpose.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="vm-card p-4 h-100 rounded shadow-sm">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-flag-fill fs-2 text-success me-3"></i>
                <h4 className="mb-0 fw-bold text-dark">Our Mission</h4>
              </div>
              <p className="text-muted">
                To provide a student-centered learning environment that fosters
                academic excellence, critical thinking, and moral values while
                embracing diversity, innovation, and holistic development in
                every learner.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="mt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center fw-bold mb-4 text-primary">
            Values We Uphold
          </h3>
          <div className="row g-4 justify-content-center">
            {[
              { icon: "bi-heart-fill", label: "Compassion" },
              { icon: "bi-lightbulb-fill", label: "Creativity" },
              { icon: "bi-shield-lock-fill", label: "Integrity" },
              { icon: "bi-people-fill", label: "Respect" },
              { icon: "bi-award-fill", label: "Excellence" },
              { icon: "bi-flag-fill", label: "Patriotism" },
            ].map((value, index) => (
              <div className="col-sm-6 col-md-4" key={index}>
                <div className="value-card text-center p-4 h-100 rounded shadow-sm">
                  <i className={`bi ${value.icon} fs-1 text-purple mb-3`}></i>
                  <h5 className="fw-semibold text-dark">{value.label}</h5>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default VisionMission;
