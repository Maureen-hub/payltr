import React from 'react';
import './Products.css';

export const Products: React.FC = () => {
  return (
    <section className="products" id="products">
      <div className="products-container">
        <h2 className="section-title">Onze oplossingen</h2>
        <p className="section-subtitle">
          Drie geïntegreerde diensten voor complete cashflow controle
        </p>

        <div className="products-grid">
          <div className="product-card">
            <div className="product-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
              </svg>
            </div>
            <h3 className="product-name">Ponto Integratie</h3>
            <p className="product-description">
              Directe bankkoppeling via PSD2. Realtime inzicht in je cashflow en 
              automatische data-extractie voor snellere goedkeuringen.
            </p>
            <ul className="product-features">
              <li>Open Banking via PSD2</li>
              <li>Multi-bank ondersteuning</li>
              <li>Veilige data-uitwisseling</li>
              <li>Automatische synchronisatie</li>
            </ul>
            <button className="product-cta">Meer informatie</button>
          </div>

          <div className="product-card featured">
            <div className="featured-badge">Meest populair</div>
            <div className="product-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="product-name">Algoan Credit Scoring</h3>
            <p className="product-description">
              Geavanceerde kredietbeoordeling met AI. Krijg binnen 24 uur een beslissing 
              gebaseerd op realtime bedrijfsdata en voorspellende analyses.
            </p>
            <ul className="product-features">
              <li>AI-gedreven beoordeling</li>
              <li>Beslissing binnen 24 uur</li>
              <li>Transparant beoordelingsproces</li>
              <li>Hogere goedkeuringsratio</li>
            </ul>
            <button className="product-cta primary">Start aanvraag</button>
          </div>

          <div className="product-card">
            <div className="product-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h3 className="product-name">Qred Financiering</h3>
            <p className="product-description">
              Flexibele financieringsoplossingen tot €500.000. Betaal facturen in termijnen 
              of krijg direct werkkapitaal op je rekening.
            </p>
            <ul className="product-features">
              <li>Tot €500.000 krediet</li>
              <li>Flexibele terugbetaling 3-12 maanden</li>
              <li>Geen verborgen kosten</li>
              <li>Geld binnen 24 uur</li>
            </ul>
            <button className="product-cta">Ontdek mogelijkheden</button>
          </div>
        </div>
      </div>
    </section>
  );
};