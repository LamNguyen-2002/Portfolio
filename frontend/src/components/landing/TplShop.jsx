import React, { useState } from 'react';
import { ArrowRight, ShoppingBag, Plus, Check, Eye } from 'lucide-react';
import { Frame, Head, Quote } from './parts';
import FlowModal from './FlowModal';
import DetailModal from './DetailModal';
import { parseVnd } from './util';

/* Fashion / e-commerce landing — filter + product detail + working cart & checkout */
export default function TplShop({ d, theme, brand }) {
  const [col, setCol] = useState('Tất cả');
  const [cart, setCart] = useState({});
  const [added, setAdded] = useState(null);
  const [flow, setFlow] = useState(null);
  const [detail, setDetail] = useState(null);
  const cols = d.collections || ['Tất cả'];
  const prods = col === 'Tất cả' ? d.products : d.products.filter((p) => p.col === col);
  const items = Object.values(cart);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const totalNum = items.reduce((s, i) => s + i.priceNum * i.qty, 0);

  const addToCart = (p, n = 1) => {
    setCart((c) => ({ ...c, [p.name]: { name: p.name, price: p.price, emoji: p.emoji, priceNum: parseVnd(p.price), qty: (c[p.name]?.qty || 0) + n } }));
    setAdded(p.name); setTimeout(() => setAdded((a) => (a === p.name ? null : a)), 1200);
  };
  const orderFlow = (list, totNum) => ({
    type: 'order', title: 'Thanh toán đơn hàng', brand: d.brand, accent: theme.accent, accent2: theme.accent2,
    items: list, totalNum: totNum, needPay: true, payLabel: 'Thanh toán', note: 'Miễn phí giao hàng & đổi trả trong 30 ngày.',
    success: { title: 'Đặt hàng thành công!', msg: 'Cảm ơn bạn đã mua sắm cùng chúng tôi. Đơn hàng đang được xử lý và sẽ sớm giao đến bạn.' },
  });
  const checkout = () => { if (items.length) setFlow(orderFlow(items, totalNum)); };
  const buyNow = (sel) => {
    const it = sel.item;
    const label = it.name + (sel.size ? ` · Size ${sel.size}` : '') + (sel.color ? ` · ${sel.color}` : '');
    setFlow(orderFlow([{ name: label, price: it.price, qty: sel.qty, emoji: it.emoji }], parseVnd(it.price) * sel.qty));
  };
  const home = () => { setFlow(null); setCart({}); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <>
      <section className="lp2-hero lp2-hero--center">
        <div className="lp2-hero-copy" data-reveal>
          <span className="lp2-badge">{d.hero.badge}</span>
          <h1 className="lp2-h1 lp2-h1--xl">{d.hero.title}</h1>
          <p className="lp2-lead lp2-lead--center">{d.hero.subtitle}</p>
          <div className="lp2-cta lp2-cta--center"><a className="lp2-btn" href="#shop">{d.hero.ctaPrimary} <ArrowRight size={16} /></a><a className="lp2-btn lp2-btn--ghost" href="#shop">{d.hero.ctaSecondary}</a></div>
        </div>
        <div className="lp2-hero-visual lp2-hero-visual--wide" data-reveal><Frame kind="lp-shop" theme={theme} brand={brand} /></div>
      </section>
      <section id="shop" className="lp2-sec">
        <Head eyebrow="Bán chạy" title="Sản phẩm nổi bật" center />
        <div className="lp2-tabs" data-reveal>
          {cols.map((c) => <button key={c} className={`lp2-tab ${col === c ? 'is-on' : ''}`} onClick={() => setCol(c)}>{c}</button>)}
        </div>
        <div className="lp2-prods">
          {prods.map((p, i) => (
            <div key={col + p.name} className="lp2-prod lp2-prod--click lp2-anim" style={{ animationDelay: `${i * 45}ms` }} onClick={() => setDetail(p)}>
              <span className="lp2-prod-img"><span className="lp2-prod-emoji">{p.emoji}</span>{p.tag && <em className="lp2-prod-tag">{p.tag}</em>}
                <span className="lp2-prod-eye"><Eye size={13} /> Xem chi tiết</span>
                <button className="lp2-prod-add" onClick={(e) => { e.stopPropagation(); addToCart(p); }}>{added === p.name ? <><Check size={14} /> Đã thêm</> : <><Plus size={14} /> Thêm vào giỏ</>}</button>
              </span>
              <div className="lp2-prod-row"><span className="lp2-prod-name">{p.name}</span><span className="lp2-prod-price">{p.price}</span></div>
            </div>
          ))}
        </div>
      </section>
      <button className={`lp2-cartfab ${count > 0 ? 'is-on' : ''}`} onClick={checkout} aria-label="Thanh toán giỏ hàng"><ShoppingBag size={18} /><span>{count}</span><em className="lp2-cartfab-go">Thanh toán</em></button>
      {d.promo && (
        <section className="lp2-sec"><div className="lp2-promo" data-reveal><div><h2 className="lp2-h2">{d.promo.title}</h2><p>{d.promo.desc}</p></div><a className="lp2-btn lp2-btn--lg" href="#shop">{d.promo.cta} <ArrowRight size={16} /></a></div></section>
      )}
      <section className="lp2-sec lp2-sec--tight">
        <div className="lp2-grid lp2-grid--4">
          {d.features.map((f, i) => (<div key={f.title} className="lp2-card lp2-card--plain" data-reveal style={{ transitionDelay: `${i * 60}ms` }}><span className="lp2-card-ic"><f.icon size={18} /></span><h3>{f.title}</h3><p>{f.desc}</p></div>))}
        </div>
      </section>
      <Quote q={d.testimonial} />
      <DetailModal item={detail} kind="product" onClose={() => setDetail(null)} actions={[
        { label: 'Thêm vào giỏ', variant: 'ghost', icon: Plus, fn: (sel) => { addToCart(sel.item, sel.qty); setDetail(null); } },
        { label: 'Mua ngay', variant: 'primary', icon: ArrowRight, fn: (sel) => { setDetail(null); buyNow(sel); } },
      ]} />
      <FlowModal flow={flow} onClose={() => setFlow(null)} onHome={home} />
    </>
  );
}
