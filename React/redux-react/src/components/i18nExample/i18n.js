import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ch from "./locales/ch.json";

i18n

  .use(Backend)

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    resources: {
      en: { common: en },
      ch: { common: ch },
    },
    fallbackLng: "en",
    ns: ["common"],
    defaultNS: "common",
    fallbackNS: ["common"],
    debug: true,

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
      wait: false,
    },
  });

export default i18n;
