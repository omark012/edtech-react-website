import './App.css';
import React from 'react';
import { Home } from './MyComponents/Home';
import { Contact } from './MyComponents/Contact';
import { About } from './MyComponents/About';
import { Services } from './MyComponents/Services';
import { Navbar } from './MyComponents/Navbar';
import { Footer } from './MyComponents/Footer';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
