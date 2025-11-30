import React from "react";
import { motion } from "framer-motion";
import { CalenderImg, Bal22_23 } from "../assets/images/index";
import {
  CorOrder,
  Trust,
  Bal21_22,
  Bal23_24,
  STRUCTURAL_STABILITY_CERTIFICATE,
  BluePrint,
  LandCert,
  Landoc,
  NonProp,
  WaterDoc,
  SportDoc,
  TeacherDoc,
  Res1,
  Res2,
  Res3,
  PTA,
} from "../assets/pdf/index";

const files = [
  {
    title: "Academic Calendar 2025–26",
    file: CalenderImg,
    type: "image",
  },
  {
    title: "Recognition Certificate",
    file: CorOrder,
    type: "pdf",
  },
  {
    title: "Trust Deed",
    file: Trust,
    type: "pdf",
  },
  {
    title: "Teachers Details",
    file: TeacherDoc,
    type: "pdf",
  },
  {
    title: "Parents Teachers Association",
    file: PTA,
    type: "pdf",
  },
  {
    title: "Balance Sheet 2021-22",
    file: Bal21_22,
    type: "pdf",
  },
  {
    title: "Balance Sheet 2022-23",
    file: Bal22_23,
    type: "img",
  },
  {
    title: "Balance Sheet 2023-24",
    file: Bal23_24,
    type: "pdf",
  },
  {
    title: "Structural Stability Certificate",
    file: STRUCTURAL_STABILITY_CERTIFICATE,
    type: "pdf",
  },
  {
    title: "Blue Print",
    file: BluePrint,
    type: "pdf",
  },
  {
    title: "Land Certificate",
    file: LandCert,
    type: "pdf",
  },
  {
    title: "Land Documents",
    file: Landoc,
    type: "pdf",
  },
  {
    title: "Non Propitory Document",
    file: NonProp,
    type: "pdf",
  },
  {
    title: "Test report of water samples",
    file: WaterDoc,
    type: "pdf",
  },
  {
    title: "Sports Equipment Documents",
    file: SportDoc,
    type: "pdf",
  },
  {
    title: "Result 2022-23",
    file: Res1,
    type: "pdf",
  },
  {
    title: "Result 2023-24",
    file: Res2,
    type: "pdf",
  },
  {
    title: "Result 2024-25",
    file: Res3,
    type: "pdf",
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
          As per regulatory guidelines, we provide mandatory public disclosures
          including school affiliations, management details, staff information,
          and academic results.
        </motion.p>
        <div>
          <h2 className="fw-bold text-primary">General Information:</h2>
          <div className="table-responsive">
            <table className="table table-striped mb-5">
              <thead>
                <tr>
                  <th scope="col">SL NO</th>
                  <th scope="col">INFORMATION</th>
                  <th scope="col">DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>NAME OF THE SCHOOL</td>
                  <td>HI-TECH PUBLIC SCHOOL</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>COMPLETE ADDRESS WITH PINCODE</td>
                  <td>
                    HI-TECH PUBLIC SCHOOL,MUGUPAL,HARIPUR-BALIPATANA
                    ROAD,JAJPUR,ODISHA,755009
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>PRINCIPAL NAME & QUALIFICATION</td>
                  <td>ANUPAMA SETHY - M.Sc,B.Ed</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>SCHOOL EMAIL ID</td>
                  <td>
                    <a
                      href="mailto:hitechpublicschool2015@gmail.com"
                      className="text-decoration-none"
                    >
                      hitechpublicschool2015@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>CONTACT DETAILS LANDLINE/ MOBILE</td>
                  <td>+91 7328834300 /+91 8327755078</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row g-4">
          {files.map((item, index) => (
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
                  <i
                    className={`bi ${
                      item.type === "pdf"
                        ? "bi-file-earmark-pdf-fill text-danger"
                        : "bi-image-fill text-info"
                    } fs-1 me-3`}
                  ></i>
                  <div className="flex-grow-1">
                    <h5 className="card-title mb-2">{item.title}</h5>
                    <div className="d-flex gap-3">
                      <a
                        href={item.file}
                        className="btn btn-outline-success btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-eye me-1"></i>
                        View
                      </a>
                      <a
                        href={item.file}
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
