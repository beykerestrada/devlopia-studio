'use client';
import { useTranslations } from 'next-intl';

export default function HomePage() {
    const tHome = useTranslations('Home');
    const tCommon = useTranslations('common');

    return (
        <main className="p-8">
            {/* Clave del namespace Home */}
            <h1 className="text-3xl font-bold">{tHome('title')}</h1>

            {/* Clave del namespace common */}
            <button className="mt-4 rounded bg-violet-600 px-4 py-2 text-white">
                {tCommon('clickMe')}
            </button>
        </main>
    );
}
