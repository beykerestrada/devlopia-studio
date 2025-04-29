'use client';

import { useTranslations } from 'next-intl';

export default function HomePage() {
    const t = useTranslations('common');

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold">{t('welcome')}</h1>
            <button className="mt-4 rounded bg-violet-600 px-4 py-2 text-white">
                {t('clickMe')}
            </button>
        </main>
    );
}
