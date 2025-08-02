import React from "react";
import { motion } from "framer-motion";

const facilities = [
  {
    title: "Library",
    icon: "bi-book",
    description:
      "Our library is stocked with books across all subjects. A unique Reading Room offers private enclosures for immersive reading. Open Fridays and Saturdays. Late return fine: ₹20. Lost/damaged books incur fines.",
  },
  {
    title: "Transport",
    icon: "bi-bus-front",
    description:
      "School transport is available through a contract-based system. Submit forms with fees at the start of the session. A bus identity card is issued and non-transferable.",
  },
  {
    title: "Classrooms",
    icon: "bi-easel2",
    description:
      "Spacious, well-decorated classrooms equipped with smart class tech, Library, Maths/Science/Computer Labs, Music Room & Playground.",
  },
  {
    title: "Physical Training",
    icon: "bi-bar-chart-line",
    description:
      "Regular physical activities are vital. Our PT program develops team spirit, fitness, and leadership qualities through structured exercise and games.",
  },
  {
    title: "Yoga",
    icon: "bi-heart-pulse",
    description:
      "Yoga sessions improve flexibility, concentration, and health. It's a compulsory practice that promotes holistic well-being.",
  },
  {
    title: "Dance",
    icon: "bi-music-note-beamed",
    description:
      "Students learn classical and folk dance forms. Dance builds rhythm, confidence, and is a great non-verbal communication art.",
  },
  {
    title: "Art",
    icon: "bi-palette",
    description:
      "Children explore their creativity with still life, pencil shading, human figures, watercolor, and landscape compositions.",
  },
];

function Facilities() {
  return (
    <section className="py-5 position-relative bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="f-text fw-bold">Our Facilities</h2>
          <p className="text-muted">
            Empowering holistic development through infrastructure and
            creativity.
          </p>
        </div>

        <div className="row g-4">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card h-100 shadow-sm border-0 rounded-4 bg-white">
                <div className="card-body p-4 d-flex flex-column align-items-start">
                  <div className="mb-3">
                    <i
                      className={`bi ${facility.icon} fs-1 text-primary`}
                      style={{ lineHeight: "1" }}
                    ></i>
                  </div>
                  <h5 className="card-title fw-semibold">{facility.title}</h5>
                  <p className="card-text text-muted small">
                    {facility.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;
