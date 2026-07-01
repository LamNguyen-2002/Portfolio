import React, { useState } from 'react';
import { ArrowRight, Sparkles, Clock, Check, CheckCircle2, Eye } from 'lucide-react';
import { Frame, Head, Stats, Quote } from './parts';
import FlowModal from './FlowModal';
import DetailModal from './DetailModal';
import { parseVnd } from './util';

/* Spa / beauty landing — soft pastel serif, service detail + working booking */
export default function TplSpa({ d, theme, brand }) {
  const [slot, setSlot] = useState(null);
  const [flow, setFlow] = useState(null);
  const [detail, setDetail] = useState(null);

  const bookService = (item) => setFlow({
    type: 'booking', title: `Đặt ${item.name}`, brand: d.brand, accent: theme.accent, accent2: theme.accent2,
    summary: [{ label: 'Dịch vụ', value: item.name }, { label: 'Thời lượng', value: item.dur }],
    needPay: false, payLabel: 'Xác nhận đặt lịch', needDate: true, needTime: true,
    note: 'Vui lòng đến trước 10 phút để chuẩn bị liệu trình.',
    success: { title: 'Đặt lịch thành công!', msg: 'Cảm ơn bạn! Lụa Spa sẽ nhắc lịch qua tin nhắn trước buổi hẹn của bạn.' },
  });

  const bookSlot = () => {
    if (!slot) return;
    setFlow({
      type: 'booking', title: 'Đặt lịch hẹn', brand: d.brand, accent: theme.accent, accent2: theme.accent2,
      summary: [{ label: 'Spa', value: d.brand }, { label: 'Khung giờ', value: slot }],
      needPay: false, payLabel: 'Xác nhận đặt lịch', needDate: true, needTime: true, prefill: { time: slot },
      note: 'Vui lòng đến trước 10 phút để chuẩn bị liệu trình.',
      success: { title: 'Đặt lịch thành công!', msg: 'Cảm ơn bạn! Lụa Spa sẽ nhắc lịch qua tin nhắn trước buổi hẹn của bạn.' },
    });
  };
  const bookPack = (p) => {
    setFlow({
      type: 'booking', title: `Đặt ${p.name}`, brand: d.brand, accent: theme.accent, accent2: theme.accent2,
      summary: [{ label: 'Liệu trình', value: p.name }, { label: 'Nội dung', value: p.note }],
      totalNum: parseVnd(p.price), totalLabel: 'Trọn gói', needPay: true, payLabel: 'Đặt cọc giữ chỗ', needDate: true,
      note: 'Đặt cọc để giữ ưu đãi; phần còn lại thanh toán tại spa.',
      success: { title: 'Đăng ký liệu trình thành công!', msg: 'Cảm ơn bạn đã tin chọn Lụa Spa! Chuyên viên sẽ liên hệ để xếp lịch chi tiết.' },
    });
  };
  const home = () => { setFlow(null); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <>
      <section className="lp2-hero lp2-hero--center">
        <div className="lp2-hero-copy" data-reveal>
          <span className="lp2-badge"><Sparkles size={13} /> {d.hero.badge}</span>
          <h1 className="lp2-h1 lp2-h1--xl">{d.hero.title}</h1>
          <p className="lp2-lead lp2-lead--center">{d.hero.subtitle}</p>
          <div className="lp2-cta lp2-cta--center"><a className="lp2-btn" href="#book">{d.hero.ctaPrimary} <ArrowRight size={16} /></a><a className="lp2-btn lp2-btn--ghost" href="#svc">{d.hero.ctaSecondary}</a></div>
        </div>
        <div className="lp2-hero-visual lp2-hero-visual--wide" data-reveal><Frame kind="lp-spa" theme={theme} brand={brand} /></div>
      </section>
      <Stats items={d.stats} />
      <section id="svc" className="lp2-sec">
        <Head eyebrow="Dịch vụ" title="Liệu trình chăm sóc" center />
        <div className="lp2-menu-grid">
          {d.services.map((s, i) => (
            <div key={s.name} className="lp2-dish lp2-dish--click" data-reveal style={{ transitionDelay: `${i * 60}ms` }} onClick={() => setDetail(s)}>
              <div className="lp2-dish-l"><h3>{s.name}</h3><p>{s.desc}</p><span className="lp2-svc-detail"><Eye size={12} /> Xem chi tiết</span></div>
              <span className="lp2-dish-lead" /><span className="lp2-svc-dur">{s.dur}</span><span className="lp2-dish-price">{s.price}</span>
            </div>
          ))}
        </div>
      </section>
      <section id="book" className="lp2-sec">
        <Head eyebrow="Liệu trình trọn gói" title="Gói ưu đãi cho bạn" center />
        <div className="lp2-grid lp2-grid--2">
          {d.packages.map((p) => (
            <div key={p.name} className={`lp2-pack ${p.featured ? 'is-feat' : ''}`} data-reveal>
              {p.note && <span className="lp2-tk-note">{p.note}</span>}
              <h3>{p.name}</h3><div className="lp2-tk-price">{p.price}</div>
              <ul>{p.perks.map((x) => <li key={x}><CheckCircle2 size={15} /> {x}</li>)}</ul>
              <button className="lp2-btn lp2-btn--full" onClick={() => bookPack(p)}>Đặt liệu trình</button>
            </div>
          ))}
        </div>
        {d.slots && (
          <div className="lp2-booking" data-reveal>
            <div className="lp2-booking-l"><span className="lp2-eyebrow">Đặt lịch hẹn</span><h3 className="lp2-h2">Chọn khung giờ phù hợp</h3><p>Hôm nay · còn nhiều khung giờ trống</p></div>
            <div className="lp2-slots">
              {d.slots.map((s) => <button key={s} className={`lp2-slot ${slot === s ? 'is-on' : ''}`} onClick={() => setSlot(s)}><Clock size={13} /> {s}</button>)}
            </div>
            <button className="lp2-btn lp2-btn--lg lp2-booking-cta" onClick={bookSlot} disabled={!slot}>{slot ? <><Check size={16} /> Đặt lịch {slot}</> : 'Chọn giờ để đặt'}</button>
          </div>
        )}
      </section>
      <section className="lp2-sec lp2-sec--tight">
        <div className="lp2-grid lp2-grid--3">
          {d.features.map((f, i) => (<div key={f.title} className="lp2-card lp2-card--plain" data-reveal style={{ transitionDelay: `${i * 70}ms` }}><span className="lp2-card-ic"><f.icon size={20} /></span><h3>{f.title}</h3><p>{f.desc}</p></div>))}
        </div>
      </section>
      <Quote q={d.testimonial} />
      <DetailModal item={detail} kind="service" onClose={() => setDetail(null)} actions={[
        { label: 'Đặt lịch dịch vụ', variant: 'primary', icon: ArrowRight, fn: () => { const it = detail; setDetail(null); bookService(it); } },
      ]} />
      <FlowModal flow={flow} onClose={() => setFlow(null)} onHome={home} />
    </>
  );
}
