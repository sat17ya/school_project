import { motion } from 'framer-motion';

function AimObjective() {
  const aims = [
    {
      icon: 'bi-bullseye',
      title: 'Balanced Development',
      text: 'Striking the right balance between academics and extra-curricular activities.',
    },
    {
      icon: 'bi-house-heart',
      title: 'Safe & Homelike Environment',
      text: 'Providing a nurturing, secure, and caring environment for all children.',
    },
    {
      icon: 'bi-asterisk',
      title: 'Life Values',
      text: 'Teaching honesty, humanity, and integrity through daily experiences.',
    },
    {
      icon: 'bi-hand-thumbs-up',
      title: 'Respect for Elders',
      text: 'Instilling respect towards parents, teachers, and elders in every child.',
    },
    {
      icon: 'bi-flag-fill',
      title: 'Cultural Values & Patriotism',
      text: 'Fostering Indian traditions, heritage, and love for the nation.',
    },
    {
      icon: 'bi-stars',
      title: 'Dream & Achieve',
      text: 'Encouraging students to dream big and reach their highest potential.',
    },
  ];

  return (
    <section className="aim-objective-section py-5">
      <div className="container">
        <motion.h2
          className="section-title text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          Our Aims & Objectives
        </motion.h2>
        <motion.p
          className="text-center mb-5 text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          At Hi-Tech Public School, we are committed to nurturing well-rounded individuals.
        </motion.p>

        <div className="row g-4">
          {aims.map((aim, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aim-card p-4 h-100 rounded shadow-sm text-center">
                <i className={`bi ${aim.icon} fs-1 text-primary mb-3`}></i>
                <h5 className="fw-bold mb-2">{aim.title}</h5>
                <p className="text-muted">{aim.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AimObjective;
