import React from 'react';

/* ============================================================
   Shared MockUI primitives — used by every system screen so the
   per-system files stay small and consistent.
   ============================================================ */

export function Zone({ id, active, onZone, className = '', children }) {
  const state = active ? (active === id ? 'is-active' : 'is-dim') : '';
  return (
    <div
      className={`mock-zone ${className} ${state}`}
      onMouseEnter={() => onZone?.(id)}
      onMouseLeave={() => onZone?.(null)}
    >
      {children}
    </div>
  );
}

export function Spark({ color, up = true }) {
  return (
    <svg className="mk-spark" viewBox="0 0 64 20" preserveAspectRatio="none">
      <polyline
        points={up ? '0,15 12,11 24,13 36,6 48,8 64,3' : '0,5 12,8 24,6 36,12 48,9 64,16'}
        fill="none" stroke={color} strokeWidth="2"
      />
    </svg>
  );
}

export function Kpi({ label, value, delta, accent, up = true }) {
  return (
    <div className="mk-kpi">
      <span className="mk-kpi-lbl">{label}</span>
      <span className="mk-kpi-val">{value}</span>
      <div className="mk-kpi-foot">
        <span className="mk-kpi-delta" style={{ color: up ? accent : '#f87171' }}>{up ? '▲' : '▼'} {delta}</span>
        <Spark color={accent} up={up} />
      </div>
    </div>
  );
}

export function AreaLine({ accent, accent2, big, compare }) {
  return (
    <svg className={`mk-line ${big ? 'mk-line--big' : ''}`} viewBox="0 0 300 90" preserveAspectRatio="none">
      <defs>
        <linearGradient id="mkfill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.34" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0,72 C36,58 60,30 92,38 C120,45 150,16 182,22 C214,28 244,6 300,12 L300,90 L0,90 Z" fill="url(#mkfill)" />
      <path d="M0,72 C36,58 60,30 92,38 C120,45 150,16 182,22 C214,28 244,6 300,12" fill="none" stroke={accent} strokeWidth="2.6" />
      {compare && (
        <path d="M0,84 C36,80 60,66 92,70 C120,73 150,52 182,58 C214,63 244,44 300,50" fill="none" stroke={accent2 || '#ffffff'} strokeOpacity="0.5" strokeWidth="1.8" strokeDasharray="4 4" />
      )}
    </svg>
  );
}

export function SkLine({ w = 70 }) {
  return <span className="mk-skeleton" style={{ width: `${w}%` }} />;
}

/* Data table with configurable columns; optional accent + badge columns */
export function Tbl({ cols, head, rows, accent, strongIdx, badgeIdx }) {
  return (
    <div className="mk-tbl">
      <div className="mk-tbl-h" style={{ gridTemplateColumns: cols }}>{head.map((h) => <span key={h}>{h}</span>)}</div>
      {rows.map((r, i) => (
        <div key={i} className="mk-tbl-r" style={{ gridTemplateColumns: cols }}>
          {r.map((c, j) => {
            if (j === strongIdx) return <b key={j} style={{ color: accent }}>{c}</b>;
            if (j === badgeIdx) return <span key={j} className="mk-badge" style={{ color: accent, borderColor: accent }}>{c}</span>;
            return <span key={j}>{c}</span>;
          })}
        </div>
      ))}
    </div>
  );
}

/* Horizontal progress bar */
export function Bar({ pct, accent }) {
  return <span className="mk-score-bar"><i style={{ width: `${pct}%`, background: accent }} /></span>;
}

/* Small labelled key/value row */
export function Kv({ k, v, accent, icon }) {
  return (
    <div className="mk-kv">
      <span>{icon}{k}</span>
      <b style={accent ? { color: accent } : undefined}>{v}</b>
    </div>
  );
}
