import React, { useState } from 'react';
import { ArrowRight, Calendar, Ticket, Check, CheckCircle2 } from 'lucide-react';
import { Frame, Head, Quote } from './parts';
import FlowModal from './FlowModal';
import { parseVnd } from './util';

/* Tech event landing — dark cyber, countdown + agenda + working ticket checkout */
export default function TplEvent({ d, theme, brand }) {
  const [sel, setSel] = useState((d.tickets.find((t) => t.featured) || d.tickets[0] || {}).name);
  const [flow, setFlow] = useState(null);

  const buy = () => {
    const tk = d.tickets.find((t) => t.name === sel) || d.tickets[0];
    setFlow({
      type: 'ticket', title: `Đặt vé ${tk.name}`, brand: d.brand, accent: theme.accent, accent2: theme.accent2,
      items: [{ name: `Vé ${tk.name}`, price: tk.price, qty: 1, emoji: '🎟️' }], totalNum: parseVnd(tk.price),
      needPay: true, payLabel: 'Thanh toán vé', note: 'Vé điện tử (mã QR) sẽ được gửi qua email.',
      success: { title: 'Đặt vé thành công!', msg: 'Vé điện tử đã được gửi tới email của bạn. Hẹn gặp bạn tại sự kiện!' },
    });
  };
  const home = () => { setFlow(null); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <>
      <section className="lp2-hero lp2-hero--center">
        <div className="lp2-hero-copy" data-reveal>
          <span className="lp2-badge"><Calendar size={13} /> {d.hero.badge}</span>
          <h1 className="lp2-h1 lp2-h1--xl">{d.hero.title}</h1>
          <p className="lp2-lead lp2-lead--center">{d.hero.subtitle}</p>
          <div className="lp2-countdown">
            {d.countdown.map((c) => (<div key={c.l} className="lp2-cd"><b>{c.n}</b><span>{c.l}</span></div>))}
          </div>
          <div className="lp2-cta lp2-cta--center"><button className="lp2-btn" onClick={buy}>{d.hero.ctaPrimary} <ArrowRight size={16} /></button><a className="lp2-btn lp2-btn--ghost" href="#agenda">{d.hero.ctaSecondary}</a></div>
        </div>
        <div className="lp2-hero-visual lp2-hero-visual--wide" data-reveal><Frame kind="lp-event" theme={theme} brand={brand} /></div>
      </section>
      <section id="agenda" className="lp2-sec">
        <Head eyebrow="Lịch trình" title="Một ngày trọn vẹn" center />
        <div className="lp2-agenda">
          {d.agenda.map((a, i) => (
            <div key={a.title} className="lp2-ag-item" data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
              <span className="lp2-ag-time">{a.time}</span><div className="lp2-ag-body"><h3>{a.title}</h3><p>{a.desc}</p></div>
            </div>
          ))}
        </div>
      </section>
      <section className="lp2-sec">
        <Head eyebrow="Diễn giả" title="Học từ người làm thật" center />
        <div className="lp2-grid lp2-grid--4">
          {d.speakers.map((s, i) => (
            <div key={s.name} className="lp2-speaker" data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
              <span className="lp2-sp-av" /><span className="lp2-sp-tag">{s.tag}</span><h3>{s.name}</h3><p>{s.role}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="cta" className="lp2-sec">
        <Head eyebrow="Vé tham dự" title="Chọn hạng vé của bạn" center />
        <div className="lp2-tickets">
          {d.tickets.map((tk) => (
            <div key={tk.name} className={`lp2-ticket ${tk.featured ? 'is-feat' : ''} ${sel === tk.name ? 'is-sel' : ''}`} data-reveal onClick={() => setSel(tk.name)}>
              {tk.note && <span className="lp2-tk-note">{tk.note}</span>}
              <h3>{tk.name}</h3><div className="lp2-tk-price">{tk.price}</div>
              <ul>{tk.perks.map((p) => <li key={p}><CheckCircle2 size={15} /> {p}</li>)}</ul>
              <button className="lp2-btn lp2-btn--full" onClick={(e) => { e.stopPropagation(); setSel(tk.name); }}>
                {sel === tk.name ? <><Check size={15} /> Đã chọn</> : <><Ticket size={15} /> Chọn vé</>}
              </button>
            </div>
          ))}
        </div>
        <div className="lp2-buybar" data-reveal>
          <span>Đang chọn: <b>Vé {sel}</b></span>
          <button className="lp2-btn lp2-btn--lg" onClick={buy}><Ticket size={16} /> Thanh toán vé đã chọn</button>
        </div>
      </section>
      <Quote q={d.testimonial} />
      <FlowModal flow={flow} onClose={() => setFlow(null)} onHome={home} />
    </>
  );
}
