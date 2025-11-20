import React from 'react';
import './CTA.css';

export const CTA: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>Klaar om je cashflow te verbeteren?</h2>
        <p>
          Start vandaag en krijg binnen 24 uur duidelijkheid over je mogelijkheden.
          Geen verplichtingen, alleen kansen.
        </p>
        <button className="cta-main-button">Start je aanvraag →</button>
        <p className="cta-subtext">Gemiddelde goedkeuring binnen 24 uur • Geen verborgen kosten</p>
      </div>
    </section>
  );
};