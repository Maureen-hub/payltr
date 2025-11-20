'use client';

import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useState } from 'react';

export function Hero() {
  const { t } = useTranslation(['home', 'common']);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10" role="navigation" aria-label="Main navigation">
        <div className="container-custom py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">PayLTR</h1>
            
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-white/80 hover:text-white transition-colors font-medium">
                {t('common:nav.products')}
              </a>
              <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors font-medium">
                {t('common:nav.howItWorks')}
              </a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors font-medium">
                {t('common:nav.about')}
              </a>
              <LanguageSwitcher />
              <a
                href="#contact"
                className="gradient-primary px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
              >
                {t('common:nav.startToday')}
              </a>
            </div>
          </div>

          {/* Mobile navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4" role="menu">
              <a
                href="#products"
                className="block text-white/80 hover:text-white transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
              >
                {t('common:nav.products')}
              </a>
              <a
                href="#how-it-works"
                className="block text-white/80 hover:text-white transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
              >
                {t('common:nav.howItWorks')}
              </a>
              <a
                href="#about"
                className="block text-white/80 hover:text-white transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
              >
                {t('common:nav.about')}
              </a>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
              <a
                href="#contact"
                className="block gradient-primary px-6 py-3 rounded-lg font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
              >
                {t('common:nav.startToday')}
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container-custom py-16 md:py-24 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          {t('home:hero.title')}
          <br />
          <span className="gradient-text">{t('home:hero.titleHighlight')}</span>
        </h2>
        <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
          {t('home:hero.subtitle')}
        </p>
        <button className="bg-white text-slate-900 px-8 py-4 rounded-xl text-lg font-bold hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50">
          {t('home:hero.cta')} →
        </button>
      </div>

      {/* Stats */}
      <div className="container-custom pb-16 md:pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
              {t('home:stats.funding')}
            </div>
            <div className="text-white/60 text-sm md:text-base">{t('home:stats.fundingLabel')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
              {t('home:stats.businesses')}
            </div>
            <div className="text-white/60 text-sm md:text-base">{t('home:stats.businessesLabel')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
              {t('home:stats.decision')}
            </div>
            <div className="text-white/60 text-sm md:text-base">{t('home:stats.decisionLabel')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
              {t('home:stats.satisfaction')}
            </div>
            <div className="text-white/60 text-sm md:text-base">{t('home:stats.satisfactionLabel')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}