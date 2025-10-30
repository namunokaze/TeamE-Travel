// src/i18n/config.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Nhập nội dung JSON của bạn (ĐƯỜNG DẪN TƯƠNG ĐỐI TỪ TỆP NÀY)
import enTranslation from './locales/en.json'; 
import vnTranslation from './locales/vn.json';
import jpTranslation from './locales/jp.json';
import mnTranslation from './locales/mn.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  vn: {
    translation: vnTranslation,
  },
  jp: {
    translation: jpTranslation,
  },
  mn: {
    translation: mnTranslation,
  }
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'en', 
    debug: true, 
    interpolation: {
      escapeValue: false, 
    },
    detection: {
        order: ['localStorage', 'querystring', 'cookie', 'sessionStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage'],
    }
  });

export default i18n;