import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Portfolio from "./components/Pages/Portfolio";
import Contact from "./components/Pages/Contact";
import NotFound from "./components/Pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
