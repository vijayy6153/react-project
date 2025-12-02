import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from "./pages/front/Home";
import Products from "./pages/front/Products";
import UseCases from "./pages/front/UseCases";
import Pricing from "./pages/front/Pricing";
import Contact from "./pages/front/Contact";
import PrivacyPolicy from "./pages/front/PrivacyPolicy";
import TermsOfUse from "./pages/front/TermsOfUse";

export default function App() {
  return (
    <Router>
      {/* Header stays on all pages */}
      <Header />

      {/* Routes render the page content dynamically */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        {/* Add more pages/routes here if needed */}
      </Routes>

      {/* Footer stays on all pages */}
      <Footer />
    </Router>
  );
}
