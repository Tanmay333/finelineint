import { Routes, Route, useLocation } from "react-router-dom";
import Splash from "./components/Splash";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import WhatWeOffer from "./components/WhatWeOffer";
import HowItWorks from "./components/HowItWorks";
import Stories from "./components/Stories";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import ConsultationSection from "./components/ConsultationSection";
import ConsultationForm from "./components/ConsultationForm";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();
  const isPortfolioPage = location.pathname === "/portfolio";
  const isReviewsPage = location.pathname === "/reviews";
  const isConsultationPage = location.pathname === "/consultation";

  return (
    <>
      <Splash />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/consultation" element={<ConsultationForm />} />
      </Routes>

      {/* Show homepage sections only when NOT on Portfolio, Reviews or Consultation */}
      {!isPortfolioPage && !isReviewsPage && !isConsultationPage && (
        <>
          <WhatWeOffer />
          <HowItWorks />
          <Stories />
          <ConsultationSection />
        </>
      )}

      <Footer />
    </>
  );
};

export default App;
