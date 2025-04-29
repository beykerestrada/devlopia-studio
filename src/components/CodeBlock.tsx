// src/components/CodeBlock.tsx
'use client';

import { useState } from 'react';
import { codeToHtml } from 'shiki';

interface CodeBlockProps {
    code: string;
    language?: string;
}

export default function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
    const [html, setHtml] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    // Genera el HTML resaltado solo una vez
    useState(() => {
        (async () => {
            const highlighted = await codeToHtml(code, { lang: language, theme: 'nord' });
            setHtml(highlighted);
        })();
        return () => { };
    });

    // Función para copiar
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code.trim());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback o notificación de error
        }
    };

    return (
        <div className="relative overflow-auto rounded-lg border bg-black p-4">
            {/* Botón Copy */}
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 rounded bg-white/10 px-2 py-1 text-sm backdrop-blur hover:bg-white/20 transition"
            >
                {copied ? 'Copied!' : 'Copy code'}
            </button>

            {/* Renderizado del HTML resaltado */}
            {html ? (
                <div
                    className="prose prose-invert m-0"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            ) : (
                <p className="text-sm text-gray-400">Loading…</p>
            )}
        </div>
    );
}
