// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';
import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';

const locales = ['en', 'es'] as const;
const defaultLocale = 'en';

export default getRequestConfig(async ({ requestLocale }) => {
  // Obtiene el valor asíncrono de requestLocale
  let locale = await requestLocale;
  // Si viene undefined o no es válido, fallback al default
  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }
  return { locale };
});
