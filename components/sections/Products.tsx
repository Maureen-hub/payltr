'use client';

import { useTranslation } from 'react-i18next';

export function Products() {
  const { t } = useTranslation(['home', 'common']);

  const products = [
    {
      name: t('home:products.ponto.name'),
      description: t('home:products.ponto.description'),
      features: [
        t('home:products.ponto.features.openBanking'),
        t('home:products.ponto.features.multiBank'),
        t('home:products.ponto.features.secureExchange'),
        t('home:products.ponto.features.autoSync'),
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
        </svg>
      ),
      featured: false,
    },
    {
      name: t('home:products.algoan.name'),
      description: t('home:products.algoan.description'),
      badge: t('home:products.algoan.badge'),
      features: [
        t('home:products.algoan.features.aiDriven'),
        t('home:products.algoan.features.fastDecision'),
        t('home:products.algoan.features.transparent'),
        t('home:products.algoan.features.highApproval'),
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      featured: true,
    },
    {
      name: t('home:products.qred.name'),
      description: t('home:products.qred.description'),
      features: [
        t('home:products.qred.features.upTo'),
        t('home:products.qred.features.flexible'),
        t('home:products.qred.features.noHidden'),
        t('home:products.qred.features.fast'),
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      featured: false,
    },
  ];

  return (
    <section id="products" className="py-20 md:py-32 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
          {t('home:products.title')}
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          {t('home:products.subtitle')}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                product.featured ? 'border-2 border-primary-500 bg-gradient-to-br from-primary-50 to-purple-50' : 'border border-gray-200'
              }`}
            >
              {product.badge && (
                <div className="absolute -top-4 right-8 bg-gradient-to-r from-primary-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {product.badge}
                </div>
              )}

              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center text-white mb-6">
                {product.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

              <ul className="space-y-3 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 ${
                  product.featured
                    ? 'gradient-primary text-white hover:shadow-lg hover:shadow-primary-500/50 focus:ring-primary-500/50'
                    : 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500/50'
                }`}
              >
                {product.featured ? t('common:cta.apply') : t('common:cta.learnMore')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}