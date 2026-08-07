import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gril from "./components/Gril.jsx";
import Events from "./components/Events";
import Partners from "./components/Partners";
import Industries from "./components/Industries";
import CTA from "./components/CTA";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gril" element={<Gril />} />
          <Route path="/events" element={<Events />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<CTA />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;