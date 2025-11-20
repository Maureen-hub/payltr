import React from 'react';
import './Benefits.css';

export const Benefits: React.FC = () => {
  return (
    <section className="benefits">
      <div className="benefits-container">
        <h2 className="section-title">Waarom PayLTR</h2>
        
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">⚡</div>
            <h3>Snelle beslissingen</h3>
            <p>
              Krijg binnen 24 uur zekerheid. Geen wekenlange wachttijden,
              maar directe duidelijkheid over je kredietmogelijkheden.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🏢</div>
            <h3>Speciaal voor MKB</h3>
            <p>
              Flexibel en praktisch. Financieringsoplossingen gebouwd voor jou,
              niet andersom. Begrijpen wat ondernemers echt nodig hebben.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🤝</div>
            <h3>Ondernemers helpen ondernemers</h3>
            <p>
              Opgericht door ondernemers die zelf de frustraties van traditionele
              financiering hebben ervaren. Wij snappen je uitdagingen.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🔒</div>
            <h3>Veilig & transparant</h3>
            <p>
              Bank-niveau beveiliging met PSD2. Transparante voorwaarden zonder
              verborgen kosten of kleine lettertjes.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🎯</div>
            <h3>Hogere goedkeuringsratio</h3>
            <p>
              Onze AI-gedreven beoordeling kijkt verder dan traditionele banken.
              Meer kansen voor groeiende bedrijven.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">💰</div>
            <h3>Flexibele voorwaarden</h3>
            <p>
              Kies de terugbetalingstermijn die bij jou past: van 3 tot 12 maanden.
              Pas aan op basis van je cashflow behoefte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};