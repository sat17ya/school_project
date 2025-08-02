import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Banner1, Banner2, Banner3, Banner4, Banner5 } from '../../assets/images';


const images = [
  { src: Banner1, alt: 'Annual Day Celebration', description: 'Students performing on stage during the Annual Day celebration.' },
  { src: Banner2, alt: 'Science Fair', description: 'Science fair where students displayed their innovative projects.' },
  { src: Banner3, alt: 'Art Day', description: 'Students participating in various art work.' },
  { src: Banner4, alt: 'Craft Exhibition', description: 'Creative crafts made by students on display.' },
  { src: Banner5, alt: 'Cultural Day', description: 'Students participate in activities showcasing and celebrating diverse cultures' },
];

function Photos() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="p-5 bg-light" id="gallery">
      <div className="container">
        <motion.h2
          className="mb-4 fw-bold text-center text-success"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          School Gallery
        </motion.h2>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="gallery-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="img-fluid rounded shadow-sm"
                loading="lazy"
              />
              <div className="overlay">
                <span className="overlay-text">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="img-fluid rounded mb-3"
            />
            <h5 className="text-primary">{selectedImage.alt}</h5>
            <p className="text-muted">{selectedImage.description}</p>
            <button
              className="btn btn-outline-secondary mt-2"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Photos;
