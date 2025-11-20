import React from "react";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { HowItWorks } from "./components/HowItWorks";
import { Benefits } from "./components/Benefits";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import "./App.css";

// Import the CSS file for styling
function App() {
  return (
    <div className="App">
      <Hero />
      <Products />
      <HowItWorks />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
