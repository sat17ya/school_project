import { motion } from 'framer-motion';
import feeImage from '../../assets/images/fee.webp'; 

function Fees() {
  return (
    <section className="py-5 fee-structure-section">
      <div className="container text-center">
        <motion.h2
          className="section-title mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Fee Structure <span className="d-block fs-5 text-muted">2025–26</span>
        </motion.h2>

        <motion.div
          className="fee-image-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img
            src={feeImage}
            onContextMenu={(e) => e.preventDefault()}
            alt="Hi-Tech Public School Fee Structure 2025-26"
            className="img-fluid rounded shadow fee-image"
            draggable="false"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Fees;
