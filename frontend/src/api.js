// Centralised API base. In dev VITE_API_BASE is empty → calls go to `/api/*`
// and Vite proxies them to the backend (see vite.config.js). In production
// (e.g. Render), set VITE_API_BASE to the deployed backend URL so the static
// frontend talks to the separate backend service directly.
let base = (import.meta.env.VITE_API_BASE || '').trim().replace(/\/$/, '');
// Allow passing just a hostname (e.g. Render's fromService host) — add scheme.
if (base && !/^https?:\/\//.test(base)) base = `https://${base}`;

export const API_BASE = base;
export const api = (path) => `${API_BASE}${path}`;
