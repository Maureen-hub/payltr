import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

if (typeof window !== 'undefined') {
  i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'nl',
      supportedLngs: ['nl', 'en'],
      debug: false,
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
      ns: ['common', 'home'],
      defaultNS: 'common',
      react: {
        useSuspense: false,
      },
    });
} else {
  i18n.use(initReactI18next).init({
    fallbackLng: 'nl',
    supportedLngs: ['nl', 'en'],
    interpolation: {
      escapeValue: false,
    },
    ns: ['common', 'home'],
    defaultNS: 'common',
    react: {
      useSuspense: false,
    },
    resources: {},
  });
}

export default i18n;