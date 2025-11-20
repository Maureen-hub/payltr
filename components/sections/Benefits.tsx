'use client';

import { useTranslation } from 'react-i18next';

export function Benefits() {
  const { t } = useTranslation('home');

  const benefits = [
    { icon: '⚡', title: t('home:benefits.items.fast.title'), description: t('home:benefits.items.fast.description') },
    { icon: '🏢', title: t('home:benefits.items.smb.title'), description: t('home:benefits.items.smb.description') },
    { icon: '🤝', title: t('home:benefits.items.entrepreneurs.title'), description: t('home:benefits.items.entrepreneurs.description') },
    { icon: '🔒', title: t('home:benefits.items.secure.title'), description: t('home:benefits.items.secure.description') },
    { icon: '🎯', title: t('home:benefits.items.approval.title'), description: t('home:benefits.items.approval.description') },
    { icon: '💰', title: t('home:benefits.items.flexible.title'), description: t('home:benefits.items.flexible.description') },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20">
          {t('home:benefits.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-5xl mb-4" aria-hidden="true">{benefit.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-white/70 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}