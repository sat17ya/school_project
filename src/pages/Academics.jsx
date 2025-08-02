import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function Academics() {
  const titleControls = useAnimation();
  const paraControls = useAnimation();

  useEffect(() => {
    titleControls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
    paraControls.start({ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } });
  }, [titleControls, paraControls]);

  return (
    <section className="academics-section py-5">
      <div className="container">

        {/* Page Title */}
        <motion.h2
          className="section-title text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={titleControls}
        >
          Academic Excellence
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          className="text-center text-muted mb-5 px-md-5"
          initial={{ opacity: 0, y: 30 }}
          animate={paraControls}
        >
          We strive to strike a perfect balance between rigorous academics and a holistic development approach through world-class infrastructure and unique learning opportunities.
        </motion.p>

        {/* Academic Highlights */}
        <div className="row g-4">
          {[
            {
              icon: 'bi bi-building fs-1 text-primary',
              title: 'World-Class Infrastructure',
              text: 'Our campus provides an enriching environment equipped with state-of-the-art classrooms, labs, library, and learning tools that support advanced academic pursuits.',
            },
            {
              icon: 'bi bi-person-check-fill fs-1 text-success',
              title: 'Holistic Development',
              text: 'We nurture each child’s persona by offering equal priority to academics, physical education, cultural activities, and value-based learning for all-round growth.',
            },
            {
              icon: 'bi bi-trophy-fill fs-1 text-warning',
              title: 'Beyond the Classroom',
              text: 'From study trips and science exhibitions to martial arts and technology sessions, students explore, innovate, and build skills that go beyond textbooks.',
            },
            {
              icon: 'bi bi-star-fill fs-1 text-danger',
              title: 'Academic Excellence',
              text: 'Students are offered uncommon opportunities to excel through dedicated mentorship, assessments, and personalized learning paths tailored to their strengths.',
            },
          ].map((card, i) => (
            <motion.div
              className="col-md-6"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="academic-card p-4 h-100 rounded shadow-sm">
                <div className="d-flex align-items-center mb-3">
                  <i className={`${card.icon} me-3`}></i>
                  <h5 className="fw-bold mb-0">{card.title}</h5>
                </div>
                <p className="text-muted">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Classes Offered */}
        <motion.div
          className="mt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="section-title text-center mb-4">Classes Offered</h3>
          <div className="row justify-content-center g-3">
            {[
              'Play School', 'Nursery', 'LKG', 'UKG',
              'Class 1', 'Class 2', 'Class 3', 'Class 4',
              'Class 5', 'Class 6', 'Class 7', 'Class 8',
            ].map((cls, index) => (
              <motion.div
                className="col-6 col-sm-4 col-md-3"
                key={cls}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * index, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="class-box text-center p-3 rounded shadow-sm bg-white">
                  <i className="bi bi-journal-bookmark-fill fs-3 text-primary mb-2"></i>
                  <div className="fw-semibold">{cls}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Academics;
