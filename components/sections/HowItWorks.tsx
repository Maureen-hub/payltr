'use client';

import { useTranslation } from 'react-i18next';

export function HowItWorks() {
  const { t } = useTranslation('home');

  const steps = [
    {
      number: '1',
      title: t('home:howItWorks.step1.title'),
      description: t('home:howItWorks.step1.description'),
    },
    {
      number: '2',
      title: t('home:howItWorks.step2.title'),
      description: t('home:howItWorks.step2.description'),
    },
    {
      number: '3',
      title: t('home:howItWorks.step3.title'),
      description: t('home:howItWorks.step3.description'),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
          {t('home:howItWorks.title')}
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-20">
          {t('home:howItWorks.subtitle')}
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-1 bg-gradient-to-r from-primary-600 to-purple-600 opacity-30 -ml-6" aria-hidden="true"></div>
              )}

              <div className="text-center relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center shadow-xl shadow-primary-500/30">
                  <span className="text-4xl font-extrabold text-white">{step.number}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}