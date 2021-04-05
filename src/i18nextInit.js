import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./languages/en/translation.json";
import translationDE from "./languages/de/translation.json";
import translationFR from "./languages/fr/translation.json";
import translationES from "./languages/es/translation.json";

const fallbackLng = ["en"];
const availableLanguages = ["en", "de", "fr", "es"];

const resources = {
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  },
  fr: {
    translation: translationFR
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
