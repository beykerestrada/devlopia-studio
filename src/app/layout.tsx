// src/app/layout.tsx
import './globals.css';   // ← importa tu CSS aquí
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      {/* Esta línea es crucial para que Next.js inyecte el <link> al CSS */}
      <head />
      <body>{children}</body>
    </html>
  );
}
