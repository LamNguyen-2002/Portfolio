import React, { useState } from 'react';
import { ArrowRight, PlayCircle, CheckCircle2 } from 'lucide-react';
import { Frame, Head, Stats, Quote } from './parts';
import FlowModal from './FlowModal';
import { parseVnd } from './util';

/* SaaS product landing — dark, feature + pricing with working sign-up */
export default function TplSaas({ d, theme, brand }) {
  const [yearly, setYearly] = useState(false);
  const [flow, setFlow] = useState(null);

  const pick = (t) => {
    const priceStr = yearly ? t.priceYear : t.price;
    const num = parseVnd(priceStr);
    const contact = /liên hệ/i.test(priceStr);
    setFlow({
      type: 'subscribe', title: contact ? `Liên hệ gói ${t.name}` : `Đăng ký gói ${t.name}`,
      brand: d.brand, accent: theme.accent, accent2: theme.accent2,
      summary: [{ label: 'Gói', value: t.name }, { label: 'Chu kỳ', value: yearly ? 'Theo năm (-20%)' : 'Theo tháng' }],
      totalNum: contact ? 0 : num, totalLabel: t.unit ? `Giá${t.unit}` : 'Giá',
      needPay: !contact && num > 0, payLabel: num > 0 ? 'Thanh toán' : 'Kích hoạt',
      note: contact ? 'Đội ngũ kinh doanh sẽ liên hệ trong vòng 24 giờ.' : (num === 0 ? 'Không cần thẻ thanh toán cho gói Free.' : 'Huỷ bất cứ lúc nào, không ràng buộc.'),
      success: {
        title: contact ? 'Đã gửi yêu cầu!' : (num === 0 ? 'Kích hoạt thành công!' : 'Đăng ký thành công!'),
        msg: contact ? 'Cảm ơn bạn! Đội ngũ FlowSpace sẽ liên hệ để tư vấn gói Enterprise.' : 'Tài khoản của bạn đã sẵn sàng. Bắt đầu tạo không gian làm việc cho nhóm ngay!',
      },
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
          <div className="lp2-cta"><a className="lp2-btn" href="#cta">{d.hero.ctaPrimary} <ArrowRight size={16} /></a><a className="lp2-btn lp2-btn--ghost" href="#feat"><PlayCircle size={16} /> {d.hero.ctaSecondary}</a></div>
        </div>
        <div className="lp2-hero-visual" data-reveal><Frame kind="lp-saas" theme={theme} brand={brand} /></div>
      </section>
      <Stats items={d.stats} />
      <section className="lp2-sec lp2-sec--tight">
        <p className="lp2-logos-cap" data-reveal>Tích hợp mượt mà với công cụ bạn đã dùng</p>
        <div className="lp2-logos" data-reveal>{d.integrations.map((n) => <span key={n} className="lp2-logo">{n}</span>)}</div>
      </section>
      <section id="feat" className="lp2-sec">
        <Head eyebrow="Tính năng" title="Mọi thứ để nhóm chạy nhanh hơn" center />
        <div className="lp2-grid lp2-grid--4">
          {d.features.map((f, i) => (
            <div key={f.title} className="lp2-card" data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
              <span className="lp2-card-ic"><f.icon size={20} /></span><h3>{f.title}</h3><p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="cta" className="lp2-sec">
        <Head eyebrow="Bảng giá" title="Chọn gói phù hợp" center />
        <div className="lp2-toggle" data-reveal>
          <button className={!yearly ? 'is-on' : ''} onClick={() => setYearly(false)}>Trả theo tháng</button>
          <button className={yearly ? 'is-on' : ''} onClick={() => setYearly(true)}>Trả theo năm <em>-20%</em></button>
        </div>
        <div className="lp2-grid lp2-grid--3">
          {d.pricingTiers.map((t) => (
            <div key={t.name} className={`lp2-ticket ${t.featured ? 'is-feat' : ''}`} data-reveal>
              {t.note && <span className="lp2-tk-note">{t.note}</span>}
              <h3>{t.name}</h3>
              <div className="lp2-tk-price">{yearly ? t.priceYear : t.price}<em>{t.unit || ''}</em></div>
              <ul>{t.perks.map((p) => <li key={p}><CheckCircle2 size={15} /> {p}</li>)}</ul>
              <button className="lp2-btn lp2-btn--full" onClick={() => pick(t)}>{/liên hệ/i.test(yearly ? t.priceYear : t.price) ? 'Liên hệ' : 'Bắt đầu'}</button>
            </div>
          ))}
        </div>
      </section>
      <Quote q={d.testimonial} />
      <FlowModal flow={flow} onClose={() => setFlow(null)} onHome={home} />
    </>
  );
}
