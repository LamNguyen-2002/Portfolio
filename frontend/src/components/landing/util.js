/* Small helpers shared by the landing checkout / booking flows. */

// Parse a Vietnamese price string into a number of đồng.
//  '890K' → 890000 · '1.290K' → 1290000 · '9.900.000đ' → 9900000 · 'Liên hệ' → 0
export function parseVnd(s) {
  if (typeof s === 'number') return s;
  if (!s) return 0;
  const low = String(s).toLowerCase();
  const m = low.match(/[\d.,]+/);
  if (!m) return 0;
  let num = parseFloat(m[0].replace(/[.,]/g, ''));
  if (/k/.test(low)) num *= 1000;
  return num || 0;
}

// Format a number of đồng → '1.290.000đ'
export function fmtVnd(n) {
  return `${Math.round(n).toLocaleString('vi-VN')}đ`;
}

// Generate a realistic order / booking reference code.
export function genCode(type) {
  const prefix = { order: 'DH', ticket: 'VE', enroll: 'HV', subscribe: 'SP', booking: 'LH', reserve: 'DB' }[type] || 'MTT';
  return `${prefix}-${Math.floor(Math.random() * 900000 + 100000)}`;
}
