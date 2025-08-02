import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center text-success fw-bold"
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="lead text-center text-muted"
        >
          Welcome to <strong>HI-TECH PUBLIC SCHOOL, Mugupal, Jajpur</strong>
        </motion.p>

        <div className="row justify-content-center mt-4">
          <div className="col-md-10">
            <p className="fs-5 text-justify">
              Established in the year 2015, enriched with spirit, legacy, and character, <strong>HI-TECH PUBLIC SCHOOL</strong>, Mugupal, has been the epitome of excellence for inclusive growth and sustainable development of the students.
            </p>
            <p className="fs-5 text-justify">
              The school embraces the challenge to provide a learning ecosystem by nurturing individual talents while developing character, academic excellence, leadership, social responsibility, and physical wellness.
            </p>
            <p className="fs-5 text-justify">
              Providing students with the finest learning environment, the school has set its standards quite high, expecting the students to be bright, expectant and successful through sustained hard work.
            </p>
            <p className="fs-5 text-justify">
              A <strong>CBSE pattern School</strong> from Hi-Tech Group, the goal of education is not to increase the amount of knowledge but to create the possibilities for a child to invent and discover — to create individuals who are capable of doing new things.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
