import React, { useState } from 'react';
import { ArrowRight, PlayCircle, CheckCircle2 } from 'lucide-react';
import { Frame, Head, Stats, Rating, Quote } from './parts';
import FlowModal from './FlowModal';
import { parseVnd } from './util';

/* Academy / course landing — light, conversion-focused, working enrolment */
export default function TplCourse({ d, theme, brand }) {
  const [fmt, setFmt] = useState(0);
  const [flow, setFlow] = useState(null);
  const p = d.pricing;
  const shownPrice = fmt === 1 && p.installment ? p.installment : p.price;

  const enroll = () => {
    setFlow({
      type: 'enroll', title: 'Đăng ký khoá học', brand: d.brand, accent: theme.accent, accent2: theme.accent2,
      summary: [{ label: 'Khoá học', value: 'Product Design · 6 tháng' }, { label: 'Hình thức', value: fmt === 1 ? 'Trả góp 6 tháng' : 'Trả 1 lần' }],
      totalNum: parseVnd(shownPrice), totalLabel: fmt === 1 ? 'Trả mỗi tháng' : 'Học phí',
      needPay: true, payLabel: fmt === 1 ? 'Thanh toán đợt đầu' : 'Thanh toán',
      note: 'Hoàn 100% học phí trong 7 ngày đầu nếu bạn không hài lòng.',
      success: { title: 'Đăng ký thành công!', msg: 'Chào mừng bạn đến với MTT Academy! Đội ngũ tư vấn sẽ liên hệ để kích hoạt lớp học của bạn.' },
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
          <Rating text="4.9/5 từ 2.400+ học viên" />
        </div>
        <div className="lp2-hero-visual" data-reveal><Frame kind="lp-course" theme={theme} brand={brand} /></div>
      </section>
      <Stats items={d.stats} />
      <section id="feat" className="lp2-sec">
        <Head eyebrow="Vì sao chọn chúng tôi" title="Học đúng thứ nhà tuyển dụng cần" center />
        <div className="lp2-grid lp2-grid--4">
          {d.features.map((f, i) => (
            <div key={f.title} className="lp2-card" data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
              <span className="lp2-card-ic"><f.icon size={20} /></span><h3>{f.title}</h3><p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="lp2-sec">
        <Head eyebrow="Lộ trình" title="3 giai đoạn đến nghề" center />
        <div className="lp2-timeline">
          {d.steps.map((s, i) => (
            <div key={s.title} className="lp2-tl-item" data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="lp2-tl-num">{s.step}</span><h3>{s.title}</h3><p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="cta" className="lp2-sec">
        <div className="lp2-price-card" data-reveal>
          <div className="lp2-price-l">
            <span className="lp2-badge">{p.note}</span>
            {p.formats && (
              <div className="lp2-toggle lp2-toggle--sm">
                {p.formats.map((f, i) => <button key={f} className={fmt === i ? 'is-on' : ''} onClick={() => setFmt(i)}>{f}</button>)}
              </div>
            )}
            <div className="lp2-price-row"><span className="lp2-price">{shownPrice}</span>{fmt === 0 && p.old && <span className="lp2-price-old">{p.old}</span>}</div>
            <ul className="lp2-perks">{p.perks.map((x) => <li key={x}><CheckCircle2 size={16} /> {x}</li>)}</ul>
          </div>
          <div className="lp2-price-r">
            <h3>Sẵn sàng bắt đầu?</h3><p>Đăng ký chỉ mất chưa tới 1 phút.</p>
            <button className="lp2-btn lp2-btn--full lp2-btn--lg" onClick={enroll}>Đăng ký &amp; thanh toán <ArrowRight size={16} /></button>
          </div>
        </div>
      </section>
      <Quote q={d.testimonial} />
      <FlowModal flow={flow} onClose={() => setFlow(null)} onHome={home} />
    </>
  );
}
