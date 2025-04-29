import Image from "next/image";
import { Button } from "@/components/ui/button"
import CodeBlock from '@/components/CodeBlock';

const example = `
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

`;
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-bold text-3xl sm:text-5xl">
          Welcome to{" "}
          <span className="text-primary">Devlopia Studio</span>
        </h1>
        <div>
          <Button>Click me</Button>
        </div>
        <CodeBlock code={example} language="javascript"/>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
