// src/app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import type { ReactNode } from 'react';
import type { Locale } from 'next-intl';

interface Props {
    children: ReactNode;
    params: Promise<{ locale: Locale }>;
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;  // Next.js 15: await params
    const commonMsgs = (await import(`@/locales/${locale}/common.json`)).default;

    // Aquí el namespace "common" es un objeto con tus claves
    const messages = { common: commonMsgs };

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
