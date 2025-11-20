import React from 'react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">PayLTR</div>
          <div className="nav-links">
            <a href="#products">Producten</a>
            <a href="#how-it-works">Hoe het werkt</a>
            <a href="#about">Over ons</a>
            <a href="#contact" className="cta-button">Start vandaag</a>
          </div>
        </div>
      </nav>

      <div className="hero-content">
        <h1 className="hero-title">
          Cashflow-as-a-Service voor<br />
          <span className="gradient-text">Nederlandse ondernemers</span>
        </h1>
        <p className="hero-subtitle">
          Flexibele BNPL-oplossingen voor MKB. Verbeter je cashflow met slimme betalingstermijnen,
          geïntegreerd met je bank en kredietbeoordeling.
        </p>
        <button className="hero-cta">Aanvraag starten →</button>
      </div>

      <div className="stats">
        <div className="stat-item">
          <div className="stat-number">€50M+</div>
          <div className="stat-label">Goedgekeurde financiering</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">1.200+</div>
          <div className="stat-label">Nederlandse bedrijven</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">24u</div>
          <div className="stat-label">Tijd tot beslissing</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">98%</div>
          <div className="stat-label">Klanttevredenheid</div>
        </div>
      </div>
    </section>
  );
};