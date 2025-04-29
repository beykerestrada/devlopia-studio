// src/app/[locale]/(home)/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import type { ReactNode } from 'react';
import type { Locale } from 'next-intl';

interface Props {
    children: ReactNode;
    params: Promise<{ locale: Locale }>;
}

export default async function HomeLayout({ children, params }: Props) {
    const { locale } = await params;
    const [common, home] = await Promise.all([
        import(`@/locales/${locale}/common.json`),
        import(`@/locales/${locale}/Home.json`)
    ]);

    // namespaces: common y Home
    const messages = {
        common: common.default,
        Home: home.default
    };

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}
