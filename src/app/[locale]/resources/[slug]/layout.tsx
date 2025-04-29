// src/app/[locale]/resources/[slug]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import type { ReactNode, FC } from 'react';
import type { Locale } from 'next-intl';

interface Props { children: ReactNode; params: Promise<{ locale: Locale; slug: string }> }

const ResourceLayout: FC<Props> = async ({ children, params }) => {
    const { locale, slug } = await params;
    const [common, resource] = await Promise.all([
        import(`@/locales/${locale}/common.json`),
        import(`@/locales/${locale}/resources/${slug}.json`),
    ]);
    const messages = { common: common.default, [slug]: resource.default };

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
};

export default ResourceLayout;
