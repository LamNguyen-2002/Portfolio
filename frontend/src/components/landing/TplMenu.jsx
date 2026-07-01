import React, { useState } from 'react';
import { ArrowRight, Clock, MapPin, Eye } from 'lucide-react';
import { Frame, Head, Stats, Quote } from './parts';
import FlowModal from './FlowModal';
import DetailModal from './DetailModal';

/* Restaurant / F&B landing — warm serif, filterable menu + dish detail + reservation */
export default function TplMenu({ d, theme, brand }) {
  const [cat, setCat] = useState('Tất cả');
  const [flow, setFlow] = useState(null);
  const [detail, setDetail] = useState(null);
  const cats = d.categories || ['Tất cả'];
  const dishes = cat === 'Tất cả' ? d.dishes : d.dishes.filter((x) => x.cat === cat);

  const reserve = () => {
    setFlow({
      type: 'reserve', title: 'Đặt bàn tại Mộc', brand: d.brand, accent: theme.accent, accent2: theme.accent2,
      summary: [{ label: 'Nhà hàng', value: d.brand }, { label: 'Địa chỉ', value: d.address }],
      needPay: false, payLabel: 'Xác nhận đặt bàn', needDate: true, needTime: true, needGuests: true,
      note: 'Chúng tôi giữ bàn trong 15 phút kể từ giờ hẹn.',
      success: { title: 'Đặt bàn thành công!', msg: 'Hẹn gặp bạn tại Mộc! Chúng tôi đã ghi nhận và sẽ gọi lại xác nhận nếu cần.' },
    });
  };
  const home = () => { setFlow(null); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <>
      <section className="lp2-hero lp2-hero--split">
        <div className="lp2-hero-copy" data-reveal>
          <span className="lp2-badge">{d.hero.badge}</span>
          <h1 className="lp2-h1">{d.hero.title}</h1>
          <p className="lp2-lead">{d.hero.subtitle}</p>
          <div className="lp2-cta"><button className="lp2-btn" onClick={reserve}>{d.hero.ctaPrimary} <ArrowRight size={16} /></button><a className="lp2-btn lp2-btn--ghost" href="#menu">{d.hero.ctaSecondary}</a></div>
        </div>
        <div className="lp2-hero-visual" data-reveal><Frame kind="lp-menu" theme={theme} brand={brand} /></div>
      </section>
      <Stats items={d.stats} />
      <section id="menu" className="lp2-sec">
        <Head eyebrow="Thực đơn" title="Món đặc trưng của Mộc" center />
        <div className="lp2-tabs" data-reveal>
          {cats.map((c) => <button key={c} className={`lp2-tab ${cat === c ? 'is-on' : ''}`} onClick={() => setCat(c)}>{c}</button>)}
        </div>
        <div className="lp2-dish-grid">
          {dishes.map((dish, i) => (
            <div key={cat + dish.name} className="lp2-dishcard lp2-dishcard--click lp2-anim" style={{ animationDelay: `${i * 55}ms` }} onClick={() => setDetail(dish)}>
              <span className="lp2-dish-photo"><span className="lp2-emoji">{dish.emoji}</span>{dish.tag && <em className="lp2-dish-tag">{dish.tag}</em>}<span className="lp2-prod-eye"><Eye size={13} /> Xem chi tiết</span></span>
              <div className="lp2-dishcard-body">
                <div className="lp2-dishcard-row"><h3>{dish.name}</h3><span className="lp2-dish-price">{dish.price}</span></div>
                <p>{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="lp2-sec lp2-sec--tight">
        <div className="lp2-grid lp2-grid--3">
          {d.features.map((f, i) => (<div key={f.title} className="lp2-card lp2-card--plain" data-reveal style={{ transitionDelay: `${i * 70}ms` }}><span className="lp2-card-ic"><f.icon size={20} /></span><h3>{f.title}</h3><p>{f.desc}</p></div>))}
        </div>
      </section>
      <section id="book" className="lp2-sec">
        <div className="lp2-reserve" data-reveal>
          <div>
            <span className="lp2-eyebrow">Đặt bàn</span>
            <h2 className="lp2-h2">Ghé Mộc cuối tuần này?</h2>
            <div className="lp2-info"><Clock size={16} /> {d.hours.map((h) => `${h.d}: ${h.h}`).join('  ·  ')}</div>
            <div className="lp2-info"><MapPin size={16} /> {d.address}</div>
          </div>
          <button className="lp2-btn lp2-btn--lg" onClick={reserve}>Đặt bàn ngay <ArrowRight size={16} /></button>
        </div>
      </section>
      <Quote q={d.testimonial} />
      <DetailModal item={detail} kind="dish" onClose={() => setDetail(null)} actions={[
        { label: 'Đặt bàn thưởng thức', variant: 'primary', icon: ArrowRight, fn: () => { setDetail(null); reserve(); } },
      ]} />
      <FlowModal flow={flow} onClose={() => setFlow(null)} onHome={home} />
    </>
  );
}
