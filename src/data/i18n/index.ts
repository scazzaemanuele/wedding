import { enContent } from './en';
import { itContent } from './it';
import { koContent } from './ko';
import type { I18nContent, SupportedLocale } from '../types';

export const translations: Record<SupportedLocale, I18nContent> = {
  en: enContent,
  it: itContent,
  ko: koContent
};

export const supportedLocales: { code: SupportedLocale; label: string; flag: string; nativeName: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧', nativeName: 'English' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹', nativeName: 'Italiano' },
  { code: 'ko', label: 'Korean', flag: '🇰🇷', nativeName: '한국어' }
];

export const defaultLocale: SupportedLocale = 'en';

export function getI18n(lang?: string): I18nContent {
  if (lang && lang in translations) {
    return translations[lang as SupportedLocale];
  }
  return translations[defaultLocale];
}

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return locale === 'en' || locale === 'it' || locale === 'ko';
}
