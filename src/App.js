import "./_reset.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";

//Marsrut sistemindeki komponentler
import Home from "./pages/Home";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import Contact from "./pages/Contact";
import Grooming from "./pages/Grooming";
import Veteriner from "./pages/Veteriner";
import DogGarden from "./pages/DogGarden";
import Walking from "./pages/Walking";

//Komponentler siyahisi
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/grooming" element={<Grooming />} />
          <Route path="/veteriner" element={<Veteriner />} />
          <Route path="/doggarden" element={<DogGarden />} />
          <Route path="/walking" element={<Walking />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
