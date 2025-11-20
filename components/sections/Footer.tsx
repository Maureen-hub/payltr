'use client';

import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation('home');

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">PayLTR</h3>
            <p className="text-white/60 mb-6 max-w-md leading-relaxed">
              {t('home:footer.tagline')}
            </p>
            <div className="mt-8">
              <p className="text-sm text-white/50 mb-3">{t('home:footer.poweredBy')}</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary-600/20 border border-primary-500/30 px-4 py-2 rounded-lg text-sm font-semibold text-primary-300">
                  Ponto
                </span>
                <span className="bg-primary-600/20 border border-primary-500/30 px-4 py-2 rounded-lg text-sm font-semibold text-primary-300">
                  Algoan
                </span>
                <span className="bg-primary-600/20 border border-primary-500/30 px-4 py-2 rounded-lg text-sm font-semibold text-primary-300">
                  Qred
                </span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t('home:footer.sections.products.title')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-white/60 hover:text-white transition-colors">
                  {t('home:footer.sections.products.ponto')}
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/60 hover:text-white transition-colors">
                  {t('home:footer.sections.products.algoan')}
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/60 hover:text-white transition-colors">
                  {t('home:footer.sections.products.qred')}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t('home:footer.sections.company.title')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/60 hover:text-white transition-colors">
                  {t('home:footer.sections.company.about')}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-white/60 hover:text-white transition-colors">
                  {t('home:footer.sections.company.howItWorks')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-white transition-colors">
                  {t('home:footer.sections.company.contact')}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/60 hover:text-white transition-colors">
                  {t('home:footer.sections.company.faq')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm mb-2">{t('home:footer.copyright')}</p>
          <p className="text-white/40 text-xs max-w-3xl mx-auto">
            {t('home:footer.disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
}