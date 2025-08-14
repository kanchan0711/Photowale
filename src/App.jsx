import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Componants/Navbar";
import Footer from "./Componants/Footer";
import Home from "./Componants/HomePageComponants/Home";
import PreWedding from "./Componants/PreWeddingComponants/PreWedding";
import WhatsAppButton from "./Componants/WhatsAppButton";
import BestPreweddingShoots from "./Componants/BestPreweddingShoots";
import Portfolio from "./Componants/PortfolioPageComponants/Portfolio";
import ContactUs from "./Componants/ContactUsPageComponants/ContactUs";
import PortfolioPhotoes from "./Componants/PortfolioPageComponants/PortfolioPhotoes";
import ScrollToTop from "./Componants/ScrollTop";

function App() {
  return (
    <Router>
      <div className="w-full h-full overflow-hidden">
        <Navbar />
        <ScrollToTop/>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Home />} />
          <Route path="/prewedding" element={<PreWedding />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/portfolio/:id" element={<PortfolioPhotoes />} />
        </Routes>     
         <BestPreweddingShoots/>
        <Footer />
      </div>
      <WhatsAppButton/>
    </Router>
  );
}

export default App;
