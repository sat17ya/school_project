import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Spinner from './components/Spinner';
import "./App.css"
import ScrollToTopButton from './components/ScrollToTopButton';

// Home and Main Routes
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Academics = lazy(() => import('./pages/Academics'));
const Beyond = lazy(() => import('./pages/Beyond'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Events = lazy(() => import('./pages/Events'));
const Admission = lazy(() => import('./pages/Admission'));
const Disclosure = lazy(() => import('./pages/Disclosure'));
const Contact = lazy(() => import('./pages/Contact'));
const Results = lazy(() => import('./pages/Results'));

// About Us Dropdown Pages
const AimObjective = lazy(() => import('./pages/about/AimObjective'));
const PrincipalDesk = lazy(() => import('./pages/about/PrincipalDesk'));
const OriginHistory = lazy(() => import('./pages/about/OriginHistory'));
const Chairman = lazy(() => import('./pages/about/Chairman'));
const VisionMission = lazy(() => import('./pages/about/VisionMission'));
const SchoolRules = lazy(() => import('./pages/about/SchoolRules'));

// Academics Dropdown Pages
const Facilities = lazy(() => import('./pages/academics/Facilities'));
const Enrollment = lazy(() => import('./pages/academics/Enrollment'));
const Faculty = lazy(() => import('./pages/academics/Faculty'));
const Books = lazy(() => import('./pages/academics/Books'));
const TCSample = lazy(() => import('./pages/academics/TCSample'));

// Beyond Curriculum Dropdown Pages
const Clubs = lazy(() => import('./pages/beyond/Clubs'));
const Activities = lazy(() => import('./pages/beyond/Activities'));
const Sports = lazy(() => import('./pages/beyond/Sports'));
const Workshops = lazy(() => import('./pages/beyond/Workshops'));

// Gallery Dropdown Pages
const Photos = lazy(() => import('./pages/gallery/Photos'));
const Videos = lazy(() => import('./pages/gallery/Videos'));

// Events Dropdown Pages
const Awards = lazy(() => import('./pages/events/Awards'));
const Functions = lazy(() => import('./pages/events/Functions'));
const Assembly = lazy(() => import('./pages/events/Assembly'));
const Trips = lazy(() => import('./pages/events/Trips'));

// Admission Dropdown Pages
const Procedure = lazy(() => import('./pages/admission/Procedure'));
const Fees = lazy(() => import('./pages/admission/Fees'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/beyond" element={<Beyond />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/disclosure" element={<Disclosure />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/results" element={<Results />} />

          {/* About Us Dropdown Pages */}
          <Route path="/about/aim-objective" element={<AimObjective />} />
          <Route path="/about/principal-desk" element={<PrincipalDesk />} />
          <Route path="/about/origin-history" element={<OriginHistory />} />
          <Route path="/about/chairman" element={<Chairman />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/school-rules" element={<SchoolRules />} />

          {/* Academics Dropdown Pages */}
          <Route path="/academics/facilities" element={<Facilities />} />
          <Route path="/academics/enrollment" element={<Enrollment />} />
          <Route path="/academics/faculty" element={<Faculty />} />
          <Route path="/academics/books" element={<Books />} />
          <Route path="/academics/tc-sample" element={<TCSample />} />

          {/* Beyond Curriculum Dropdown Pages */}
          <Route path="/beyond/clubs" element={<Clubs />} />
          <Route path="/beyond/activities" element={<Activities />} />
          <Route path="/beyond/sports" element={<Sports />} />
          <Route path="/beyond/workshops" element={<Workshops />} />

          {/* Gallery Dropdown Pages */}
          <Route path="/gallery/photos" element={<Photos />} />
          <Route path="/gallery/videos" element={<Videos />} />

          {/* Events Dropdown Pages */}
          <Route path="/events/awards" element={<Awards />} />
          <Route path="/events/functions" element={<Functions />} />
          <Route path="/events/assembly" element={<Assembly />} />
          <Route path="/events/trips" element={<Trips />} />

          {/* Admission Dropdown Pages */}
          <Route path="/admission/procedure" element={<Procedure />} />
          <Route path="/admission/fees" element={<Fees />} />
        </Routes>
        <ScrollToTopButton/> 
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
