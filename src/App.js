import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Spinner from "./components/Spinner";
import "./App.css";
import ScrollToTopButton from "./components/ActionButtons";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";


// Home and Main Routes
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Academics = lazy(() => import("./pages/Academics"));
const Facilities = lazy(() => import("./pages/Facilities"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Disclosure = lazy(() => import("./pages/Disclosure"));
const Contact = lazy(() => import("./pages/Contact"));

// About Us Dropdown Pages
const AimObjective = lazy(() => import("./pages/about/AimObjective"));
const VisionMission = lazy(() => import("./pages/about/VisionMission"));

// Gallery Dropdown Pages
const Photos = lazy(() => import("./pages/gallery/Photos"));
const Videos = lazy(() => import("./pages/gallery/Videos"));

// Admission Dropdown Pages
const Procedure = lazy(() => import("./pages/admission/Procedure"));
const Fees = lazy(() => import("./pages/admission/Fees"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Analytics />
      <SpeedInsights />
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/disclosure" element={<Disclosure />} />
          <Route path="/contact" element={<Contact />} />

          {/* About Us Dropdown Pages */}
          <Route path="/about/aim-objective" element={<AimObjective />} />

          <Route path="/about/vision-mission" element={<VisionMission />} />  

          {/* Gallery Dropdown Pages */}
          <Route path="/gallery/photos" element={<Photos />} />
          <Route path="/gallery/videos" element={<Videos />} />

          {/* Admission Dropdown Pages */}
          <Route path="/admission/procedure" element={<Procedure />} />
          <Route path="/admission/fees" element={<Fees />} />
        </Routes>
        <ScrollToTopButton />
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
