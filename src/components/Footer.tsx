import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-logo">PayLTR</h3>
            <p className="footer-tagline">
              Cashflow-as-a-Service voor Nederlandse ondernemers
            </p>
            <div className="footer-powered">
              <p className="powered-title">Mogelijk gemaakt door:</p>
              <div className="partner-badges">
                <span className="partner-badge">Ponto</span>
                <span className="partner-badge">Algoan</span>
                <span className="partner-badge">Qred</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Producten</h4>
            <ul>
              <li><a href="#products">Ponto Integratie</a></li>
              <li><a href="#products">Algoan Credit Scoring</a></li>
              <li><a href="#products">Qred Financiering</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Bedrijf</h4>
            <ul>
              <li><a href="#about">Over ons</a></li>
              <li><a href="#how-it-works">Hoe het werkt</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Juridisch</h4>
            <ul>
              <li><a href="#privacy">Privacy beleid</a></li>
              <li><a href="#terms">Voorwaarden</a></li>
              <li><a href="#security">Beveiliging</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 PayLTR. Alle rechten voorbehouden.</p>
          <p className="footer-disclaimer">
            PayLTR is een financiële dienstverlener geregistreerd in Nederland. 
            Financiering onder voorbehoud van goedkeuring.
          </p>
        </div>
      </div>
    </footer>
  );
};