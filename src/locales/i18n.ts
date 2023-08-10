import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "~/locales/en/translation.json"
import vi from "~/locales/vi/translation.json"
import { convertLanguageJsonToObject } from './translation';

export const resources = {
  en: {
    translation: en
  },
  vi: {
    translation: vi
  }
}
convertLanguageJsonToObject(en);
export const i18n = i18next.use(initReactI18next).use(LanguageDetector).init({
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
export type langKey = keyof typeof resources;