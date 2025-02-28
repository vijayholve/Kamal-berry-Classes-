import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Cources from "./pages/cources";
import "./App.css";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoursePage from "./pages/CoursePage";
import Home from "./pages/Home";
import { ContactPage } from "@mui/icons-material";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ServicesPage from "./pages/ServicesPage";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/courses/:category" element={<CoursePage />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service" element={<ServicesPage />} />
        </Routes>
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
