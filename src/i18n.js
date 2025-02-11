import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import jp from './locales/jp.json';
import zh from './locales/zh.json';
import ru from './locales/ru.json';
import uk from './locales/uk.json';
import pl from './locales/pl.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      fr: {
        translation: fr
      },
      es: {
        translation: es
      },
      jp: {
        translation: jp
      },
      zh: {
        translation: zh
      },
      ru: {
        translation: ru
      },
      uk: {
        translation: uk
      },
      pl: {
        translation: pl
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;