import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import WhyHireMe from "./sections/WhyHireMe"; 
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import WorkSamples from "./sections/WorkSamples";
import MyMemories from "./sections/MyMemories";


const MainPortfolio = () => (
  <>
    <Hero />
    <ShowcaseSection />
    <LogoShowcase />
    <FeatureCards />
    <Experience />
    <TechStack />
    <Testimonials />
    {/* <MyMemories /> */}
    <Contact />
    <Footer />
  </>
);

// ✅ Custom layout wrapper with optional navbar
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarOn = ["/work-samples", "/why-hire-me"];
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    setShowNavbar(!hideNavbarOn.includes(location.pathname));
  }, [location.pathname]);

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/work-samples" element={<WorkSamples />} />
        <Route path="/why-hire-me" element={<WhyHireMe />} /> 
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
