'use client';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function ResourcePage() {
    const { slug } = useParams();
    const t = useTranslations(slug!);

    return (
        <article className="p-8">
            <h1 className="text-2xl font-bold">{t('title')}</h1>
            <p className="mt-4">{t('description')}</p>
        </article>
    );
}
