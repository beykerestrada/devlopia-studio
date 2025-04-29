// src/types/locale.d.ts
import type { MessageSchema } from 'next-intl';

export type Locale = 'en' | 'es';
export type Messages = Record<string, string | MessageSchema>;
