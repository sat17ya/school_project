import React from 'react';
import { motion } from 'framer-motion';
import pdf1 from "../assets/pdf/COR ORDER.pdf"
import pdf2 from "../assets/pdf/Tirupati trust.pdf"


const pdfs = [
  {
    title: 'Recognition Certificate',
    file: pdf1,
  },
  {
    title: 'Affiliation Certificate',
    file: pdf2,
  },
];

function Disclosure() {
  return (
    <section className="p-5 bg-light" id="disclosure">
      <div className="container">
        <motion.h2
          className="mb-4 fw-bold text-success"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Mandatory Public Disclosure
        </motion.h2>

        <motion.p
          className="mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          As per regulatory guidelines, we provide mandatory public disclosures including school affiliations, management details, staff information, and academic results.
        </motion.p>

        <div className="row g-4">
          {pdfs.map((doc, index) => (
            <motion.div
              key={index}
              className="col-md-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card shadow border-0 h-100 disclosure-card">
                <div className="card-body d-flex align-items-center">
                  <i className="bi bi-file-earmark-pdf-fill text-danger fs-1 me-3"></i>
                  <div className="flex-grow-1">
                    <h5 className="card-title mb-2">{doc.title}</h5>
                    <div className="d-flex gap-3">
                      <a
                        href={doc.file}
                        className="btn btn-outline-success btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-eye me-1"></i>
                        View
                      </a>
                      <a
                        href={doc.file}
                        className="btn btn-outline-primary btn-sm"
                        download
                      >
                        <i className="bi bi-download me-1"></i>
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Disclosure;
