import i18next from "i18next";
import enJSON from "./locales/en";
import esJSON from "./locales/es";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';


const resources = {
  en: { translation: enJSON },
  es: { translation: esJSON },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    // lng: 'es',
    supportedLngs: ['en', 'es'],
    fallbackLng: 'en',
    keySeparator: '.',
    react: {
      useSuspense: true
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;
