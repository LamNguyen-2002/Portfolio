import React, { useState, useEffect } from 'react';
import { X, Star, Plus, Minus, CheckCircle2, Clock, Truck, ShieldCheck } from 'lucide-react';
import { parseVnd, fmtVnd } from './util';

/* ============================================================
   DetailModal — full "quick view" for a product / dish / service.
   Gallery, rating, description, specs, options (size/colour/qty)
   and action buttons. Adapts by `kind`; themed via landing vars.
   ============================================================ */
export default function DetailModal({ item, kind = 'product', onClose, actions = [] }) {
  const [gi, setGi] = useState(0);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (!item) return;
    setGi(0); setQty(1);
    setSize((item.sizes || [])[0] || null);
    setColor((item.colors || [])[0]?.name || null);
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [item]);

  if (!item) return null;
  const gallery = item.gallery && item.gallery.length ? item.gallery : [item.emoji || '🛍️'];
  const isProduct = kind === 'product';
  const unit = parseVnd(item.price);
  const sel = { item, size, color, qty };
  const stars = Math.round(item.rating || 0);

  return (
    <div className="lpx-overlay" onMouseDown={onClose}>
      <div className="lpd-modal" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="lpx-x lpd-x" onClick={onClose} aria-label="Đóng"><X size={18} /></button>
        <div className="lpd-media">
          <div className="lpd-hero">
            {item.tag && <em className="lpd-tag">{item.tag}</em>}
            <span className="lpd-hero-emoji">{gallery[gi]}</span>
          </div>
          {gallery.length > 1 && (
            <div className="lpd-thumbs">
              {gallery.map((g, i) => (
                <button key={i} className={`lpd-thumb ${gi === i ? 'is-on' : ''}`} onClick={() => setGi(i)}>{g}</button>
              ))}
            </div>
          )}
        </div>

        <div className="lpd-info">
          {item.rating && (
            <div className="lpd-rate">
              <span className="lpd-stars">{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={14} className={i < stars ? 'is-on' : ''} />)}</span>
              <b>{item.rating}</b>{item.sold && <span>· {item.sold} đã bán</span>}
            </div>
          )}
          <h3 className="lpd-name">{item.name}</h3>
          <div className="lpd-price-row">
            <span className="lpd-price">{item.price}</span>
            {item.old && <span className="lpd-old">{item.old}</span>}
            {item.dur && <span className="lpd-dur"><Clock size={13} /> {item.dur}</span>}
          </div>
          <p className="lpd-desc">{item.desc}</p>

          {item.bullets && (
            <ul className="lpd-bullets">
              {item.bullets.map((b) => <li key={b}><CheckCircle2 size={15} /> {b}</li>)}
            </ul>
          )}

          {isProduct && item.sizes && item.sizes.length > 0 && (
            <div className="lpd-opt">
              <span className="lpd-opt-lbl">Kích cỡ</span>
              <div className="lpd-chips">{item.sizes.map((s) => <button key={s} className={`lpd-chip ${size === s ? 'is-on' : ''}`} onClick={() => setSize(s)}>{s}</button>)}</div>
            </div>
          )}
          {isProduct && item.colors && item.colors.length > 0 && (
            <div className="lpd-opt">
              <span className="lpd-opt-lbl">Màu sắc: <b>{color}</b></span>
              <div className="lpd-swatches">{item.colors.map((c) => <button key={c.name} className={`lpd-sw ${color === c.name ? 'is-on' : ''}`} style={{ background: c.hex }} onClick={() => setColor(c.name)} aria-label={c.name} />)}</div>
            </div>
          )}
          {isProduct && (
            <div className="lpd-opt lpd-qtyrow">
              <span className="lpd-opt-lbl">Số lượng</span>
              <div className="lpd-qty">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Giảm"><Minus size={14} /></button>
                <b>{qty}</b>
                <button onClick={() => setQty((q) => Math.min(20, q + 1))} aria-label="Tăng"><Plus size={14} /></button>
              </div>
              {qty > 1 && <span className="lpd-sub">Tạm tính <b>{fmtVnd(unit * qty)}</b></span>}
            </div>
          )}

          {item.specs && (
            <div className="lpd-specs">
              {item.specs.map((s) => <div key={s.label} className="lpd-spec"><span>{s.label}</span><b>{s.value}</b></div>)}
            </div>
          )}

          {isProduct && <p className="lpd-ship"><Truck size={14} /> Giao nhanh 2–4 ngày · <ShieldCheck size={14} /> Đổi trả 30 ngày</p>}

          <div className="lpd-actions">
            {actions.map((a) => (
              <button key={a.label} className={a.variant === 'primary' ? 'lpx-btn' : 'lpx-btn-ghost lpd-ghost'} onClick={() => a.fn(sel)}>
                {a.icon ? <a.icon size={16} /> : null} {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
