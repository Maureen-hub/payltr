import React from 'react';
import './HowItWorks.css';

export const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-container">
        <h2 className="section-title">Zo werkt het</h2>
        <p className="section-subtitle">
          In drie eenvoudige stappen naar betere cashflow
        </p>

        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Verbind je bank</h3>
              <p>
                Koppel je bankrekening veilig via Ponto (PSD2). 
                Wij analyseren je cashflow automatisch en vertrouwelijk.
              </p>
            </div>
          </div>

          <div className="step-connector"></div>

          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Ontvang je beoordeling</h3>
              <p>
                Algoan's AI analyseert je bedrijfsdata en geeft binnen 24 uur 
                een kredietbeslissing met transparante voorwaarden.
              </p>
            </div>
          </div>

          <div className="step-connector"></div>

          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Krijg je financiering</h3>
              <p>
                Goedgekeurd? Qred zorgt voor je financiering. Betaal facturen 
                in termijnen of ontvang direct werkkapitaal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};