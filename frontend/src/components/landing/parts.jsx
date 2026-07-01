import React from 'react';
import { Quote as QuoteIcon, Star } from 'lucide-react';
import MockUI from '../MockUI';

/* ============================================================
   Shared landing building blocks used by every template.
   ============================================================ */

export function Frame({ kind, theme, brand, phoneOnly }) {
  return (
    <div className={`lp2-frame ${phoneOnly ? 'lp2-frame--phone' : ''}`}>
      {!phoneOnly && (
        <div className="lp2-browser">
          <div className="lp2-browser-bar"><i /><i /><i /><span className="lp2-browser-url">{(brand || '').toLowerCase().replace(/\s+/g, '')}.vn</span></div>
          <div className="lp2-browser-vp"><MockUI kind={kind} variant="web" theme={theme} brand={brand} /></div>
        </div>
      )}
      <div className="lp2-phone">
        <span className="lp2-phone-notch" />
        <div className="lp2-phone-vp"><MockUI kind={kind} variant="mobile" theme={theme} brand={brand} /></div>
      </div>
    </div>
  );
}

export function Head({ eyebrow, title, center }) {
  return (
    <div className={`lp2-head ${center ? 'is-center' : ''}`} data-reveal>
      <span className="lp2-eyebrow">{eyebrow}</span>
      <h2 className="lp2-h2">{title}</h2>
    </div>
  );
}

export function Stats({ items }) {
  return (
    <div className="lp2-stats" data-reveal>
      {items.map((s) => (
        <div key={s.label} className="lp2-stat">
          <span className="lp2-stat-num">{s.num}</span>
          <span className="lp2-stat-lbl">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

export function Rating({ text }) {
  return (
    <div className="lp2-trust">
      <span className="lp2-stars">{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={14} className="lp2-star" />)}</span> {text}
    </div>
  );
}

export function Quote({ q }) {
  if (!q) return null;
  return (
    <section className="lp2-sec">
      <div className="lp2-quote" data-reveal>
        <QuoteIcon size={38} className="lp2-quote-mark" />
        <p className="lp2-quote-text">"{q.quote}"</p>
        <div className="lp2-quote-by"><span className="lp2-av" /><div><strong>{q.name}</strong><span>{q.role}</span></div></div>
      </div>
    </section>
  );
}
