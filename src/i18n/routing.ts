// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'es'],
    defaultLocale: 'en',
    // Opcional: prefijos personalizados o pathnames localizados
});
