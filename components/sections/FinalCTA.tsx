'use client';

import { useTranslation } from 'react-i18next';

export function FinalCTA() {
  const { t } = useTranslation('home');

  return (
    <section className="py-20 md:py-32 gradient-primary text-white text-center">
      <div className="container-custom max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          {t('home:finalCta.title')}
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
          {t('home:finalCta.subtitle')}
        </p>
        <button className="bg-white text-primary-700 px-10 py-5 rounded-xl text-xl font-bold hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-1 transition-all duration-300 mb-6 focus:outline-none focus:ring-4 focus:ring-white/50">
          {t('home:finalCta.button')} →
        </button>
        <p className="text-white/80 text-sm">{t('home:finalCta.subtext')}</p>
      </div>
    </section>
  );
}