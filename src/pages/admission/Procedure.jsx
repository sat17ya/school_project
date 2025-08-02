import React from 'react';
import { motion } from 'framer-motion';

function Procedure() {
  return (
    <section className="py-5 admission-section">
      <div className="container">
        {/* Section Title */}
        <motion.h2
          className="section-title text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          Admission Procedure
        </motion.h2>

        {/* Admission Content */}
        <motion.div
          className="admission-content mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Collect the application form from our school. Complete the application forms and send them
            together with all the supporting documents to the Hi-Tech Public School Admissions Office
            by courier or registered post to the mentioned address.
          </p>
          <p>
            Once all application materials have been received and reviewed, you will be notified. Where
            applicable, a date will be set for the admission test and interview as well as a tour of
            the school and residences.
          </p>
        </motion.div>

        {/* Steps (Optional) */}
        <motion.div
          className="row justify-content-center mt-5 g-4"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            { icon: 'bi-file-earmark-text-fill', title: 'Step 1', text: 'Collect the application form from school.' },
            { icon: 'bi-pencil-square', title: 'Step 2', text: 'Complete the form and attach documents.' },
            { icon: 'bi-send-check-fill', title: 'Step 3', text: 'Send the form via courier or post.' },
            { icon: 'bi-calendar-check-fill', title: 'Step 4', text: 'Attend the test, interview & school tour.' },
          ].map((step, idx) => (
            <motion.div
              className="col-12 col-md-6 col-lg-3"
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="admission-step text-center p-4 h-100">
                <i className={`bi ${step.icon} fs-2 text-purple mb-3`}></i>
                <h5 className="fw-bold mb-2">{step.title}</h5>
                <p className="mb-0">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Procedure;
