// src/middleware.ts

import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

/**
 * Crea el middleware de internacionalización con tu configuración de rutas.
 */
export default createMiddleware(routing);

/**
 * Excluye del middleware las peticiones a:
 * - Rutas de API
 * - Archivos estáticos de Next (_next/static/*)
 * - Optimized images de Next (_next/image/*)
 * - El favicon
 */
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon\\.ico).*)'
  ]
};
