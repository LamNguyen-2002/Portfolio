import React, { useState, useEffect } from 'react';
import {
  X, ArrowLeft, ArrowRight, Check, CheckCircle2, CreditCard, Landmark,
  Smartphone, Banknote, Loader2, ShieldCheck, PartyPopper, Home,
} from 'lucide-react';
import { fmtVnd, genCode } from './util';

/* ============================================================
   FlowModal — a fully working checkout / booking flow for every
   landing. Steps: Xem lại → Thông tin → Thanh toán/Xác nhận →
   Hoàn tất (success celebration → về trang chủ). Theme-aware via
   the landing's CSS vars (rendered inside .lp2-root).
   ============================================================ */

const PAY_METHODS = [
  { id: 'bank', label: 'Chuyển khoản', icon: Landmark },
  { id: 'card', label: 'Thẻ tín dụng', icon: CreditCard },
  { id: 'momo', label: 'Ví MoMo', icon: Smartphone },
  { id: 'cod', label: 'Tiền mặt', icon: Banknote },
];

function Confetti({ colors }) {
  const pieces = Array.from({ length: 46 }, (_, i) => ({
    left: Math.random() * 100,
    delay: Math.random() * 0.45,
    dur: 1.7 + Math.random() * 1.6,
    size: 6 + Math.random() * 8,
    color: colors[i % colors.length],
    round: Math.random() > 0.6,
    drift: (Math.random() * 2 - 1) * 160,
    rot: Math.random() * 540,
  }));
  return (
    <div className="lpx-confetti" aria-hidden="true">
      {pieces.map((p, i) => (
        <span key={i} style={{
          left: `${p.left}%`, width: p.size, height: p.size, background: p.color,
          borderRadius: p.round ? '50%' : '2px', animationDelay: `${p.delay}s`,
          animationDuration: `${p.dur}s`, '--drift': `${p.drift}px`, '--rot': `${p.rot}deg`,
        }} />
      ))}
    </div>
  );
}

const field = (v) => (v || '').trim();

export default function FlowModal({ flow, onClose, onHome }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', time: '', guests: '2', note: '' });
  const [pay, setPay] = useState('bank');
  const [card, setCard] = useState({ num: '', exp: '', cvc: '' });
  const [busy, setBusy] = useState(false);
  const [errs, setErrs] = useState({});
  const [code, setCode] = useState('');

  useEffect(() => {
    if (!flow) return;
    setStep(0); setErrs({}); setBusy(false); setPay('bank'); setCard({ num: '', exp: '', cvc: '' });
    setForm((f) => ({ ...f, ...(flow.prefill || {}) }));
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [flow]);

  if (!flow) return null;

  const needPay = flow.needPay !== false;
  const actWord = flow.payLabel || (needPay ? 'Thanh toán' : 'Xác nhận');
  const steps = needPay ? ['Xem lại', 'Thông tin', 'Thanh toán', 'Hoàn tất'] : ['Xem lại', 'Thông tin', 'Xác nhận', 'Hoàn tất'];
  const DONE = 3;
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validInfo = () => {
    const e = {};
    if (!field(form.name)) e.name = 'Vui lòng nhập họ tên';
    if (!/^0\d{8,10}$/.test(field(form.phone))) e.phone = 'Số điện thoại chưa hợp lệ';
    if (form.email && !/^\S+@\S+\.\S+$/.test(field(form.email))) e.email = 'Email chưa hợp lệ';
    if (flow.needDate && !form.date) e.date = 'Chọn ngày';
    if (flow.needTime && !form.time) e.time = 'Chọn giờ';
    setErrs(e); return !Object.keys(e).length;
  };
  const validPay = () => {
    if (!needPay || pay !== 'card') return true;
    const e = {};
    if (card.num.replace(/\s/g, '').length < 12) e.num = 'Số thẻ chưa đúng';
    if (!/^\d{2}\/\d{2}$/.test(card.exp)) e.exp = 'MM/YY';
    if (card.cvc.length < 3) e.cvc = 'CVC';
    setErrs(e); return !Object.keys(e).length;
  };

  const next = () => {
    if (step === 1 && !validInfo()) return;
    if (step === 2) {
      if (!validPay()) return;
      setBusy(true);
      setTimeout(() => { setBusy(false); setCode(genCode(flow.type)); setStep(DONE); }, 1050);
      return;
    }
    setStep((s) => Math.min(s + 1, DONE));
  };
  const back = () => setStep((s) => Math.max(0, s - 1));

  const confettiColors = [flow.accent, flow.accent2 || flow.accent, '#fbbf24', '#f472b6', '#34d399', '#60a5fa'];
  const contact = field(form.email) || field(form.phone) || 'bạn';

  return (
    <div className="lpx-overlay" onMouseDown={onClose}>
      {step === DONE && <Confetti colors={confettiColors} />}
      <div className="lpx-modal" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        {step < DONE ? (
          <>
            <header className="lpx-head">
              <div><span className="lpx-eyebrow">{flow.brand}</span><h3>{flow.title}</h3></div>
              <button className="lpx-x" onClick={onClose} aria-label="Đóng"><X size={18} /></button>
            </header>

            <div className="lpx-steps">
              {steps.slice(0, DONE).map((s, i) => (
                <div key={s} className={`lpx-step ${i === step ? 'is-on' : ''} ${i < step ? 'is-done' : ''}`}>
                  <i>{i < step ? <Check size={14} /> : i + 1}</i>{s}
                </div>
              ))}
            </div>

            <div className="lpx-body" key={step}>
              {/* STEP 0 — review */}
              {step === 0 && (
                <div className="lpx-anim">
                  {flow.items && (
                    <div className="lpx-items">
                      {flow.items.map((it) => (
                        <div key={it.name} className="lpx-item">
                          <span className="lpx-item-ic">{it.emoji || '🛍️'}</span>
                          <div className="lpx-item-b"><b>{it.name}</b><span>SL: {it.qty || 1}</span></div>
                          <span className="lpx-item-p">{it.price}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {flow.summary && (
                    <div className="lpx-kvs">
                      {flow.summary.map((r) => (<div key={r.label} className="lpx-kv"><span>{r.label}</span><b>{r.value}</b></div>))}
                    </div>
                  )}
                  {flow.totalNum > 0 && (
                    <div className="lpx-total"><span>{flow.totalLabel || 'Tổng cộng'}</span><b>{fmtVnd(flow.totalNum)}</b></div>
                  )}
                  {flow.note && <p className="lpx-hint"><ShieldCheck size={14} /> {flow.note}</p>}
                </div>
              )}

              {/* STEP 1 — customer info */}
              {step === 1 && (
                <div className="lpx-anim lpx-form">
                  <label className="lpx-f"><span>Họ và tên *</span><input value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="Nguyễn Văn A" className={errs.name ? 'has-err' : ''} />{errs.name && <em>{errs.name}</em>}</label>
                  <div className="lpx-f2">
                    <label className="lpx-f"><span>Số điện thoại *</span><input value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="09xxxxxxxx" inputMode="numeric" className={errs.phone ? 'has-err' : ''} />{errs.phone && <em>{errs.phone}</em>}</label>
                    <label className="lpx-f"><span>Email</span><input value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="ban@email.com" className={errs.email ? 'has-err' : ''} />{errs.email && <em>{errs.email}</em>}</label>
                  </div>
                  {(flow.needDate || flow.needTime) && (
                    <div className="lpx-f2">
                      {flow.needDate && <label className="lpx-f"><span>Ngày *</span><input type="date" value={form.date} onChange={(e) => set('date', e.target.value)} className={errs.date ? 'has-err' : ''} />{errs.date && <em>{errs.date}</em>}</label>}
                      {flow.needTime && <label className="lpx-f"><span>Giờ *</span><input type="time" value={form.time} onChange={(e) => set('time', e.target.value)} className={errs.time ? 'has-err' : ''} />{errs.time && <em>{errs.time}</em>}</label>}
                    </div>
                  )}
                  {flow.needGuests && (
                    <label className="lpx-f"><span>Số khách</span><select value={form.guests} onChange={(e) => set('guests', e.target.value)}>{[1, 2, 3, 4, 5, 6, 8, 10, 12].map((n) => <option key={n} value={n}>{n} người</option>)}</select></label>
                  )}
                  <label className="lpx-f"><span>Ghi chú</span><textarea rows={2} value={form.note} onChange={(e) => set('note', e.target.value)} placeholder="Yêu cầu thêm (không bắt buộc)" /></label>
                </div>
              )}

              {/* STEP 2 — payment or confirm */}
              {step === 2 && (
                <div className="lpx-anim">
                  {needPay ? (
                    <>
                      <p className="lpx-sub">Chọn phương thức thanh toán</p>
                      <div className="lpx-pays">
                        {PAY_METHODS.map((m) => (
                          <button key={m.id} className={`lpx-pay ${pay === m.id ? 'is-on' : ''}`} onClick={() => setPay(m.id)}>
                            <m.icon size={17} /> {m.label}{pay === m.id && <Check size={14} className="lpx-pay-ck" />}
                          </button>
                        ))}
                      </div>
                      {pay === 'card' && (
                        <div className="lpx-form lpx-card">
                          <label className="lpx-f"><span>Số thẻ</span><input value={card.num} onChange={(e) => setCard({ ...card, num: e.target.value })} placeholder="4242 4242 4242 4242" inputMode="numeric" className={errs.num ? 'has-err' : ''} />{errs.num && <em>{errs.num}</em>}</label>
                          <div className="lpx-f2">
                            <label className="lpx-f"><span>Hết hạn</span><input value={card.exp} onChange={(e) => setCard({ ...card, exp: e.target.value })} placeholder="MM/YY" className={errs.exp ? 'has-err' : ''} />{errs.exp && <em>{errs.exp}</em>}</label>
                            <label className="lpx-f"><span>CVC</span><input value={card.cvc} onChange={(e) => setCard({ ...card, cvc: e.target.value })} placeholder="123" inputMode="numeric" className={errs.cvc ? 'has-err' : ''} />{errs.cvc && <em>{errs.cvc}</em>}</label>
                          </div>
                        </div>
                      )}
                      {pay === 'bank' && <div className="lpx-bank"><div className="lpx-kv"><span>Ngân hàng</span><b>Vietcombank</b></div><div className="lpx-kv"><span>Số tài khoản</span><b>0071 0001 2345</b></div><div className="lpx-kv"><span>Nội dung</span><b>{flow.brand} {field(form.phone)}</b></div></div>}
                    </>
                  ) : (
                    <p className="lpx-sub">Xác nhận thông tin đặt chỗ của bạn</p>
                  )}
                  <div className="lpx-recap">
                    {flow.items && flow.items.map((it) => <div key={it.name} className="lpx-kv"><span>{it.name} × {it.qty || 1}</span><b>{it.price}</b></div>)}
                    {flow.summary && flow.summary.map((r) => <div key={r.label} className="lpx-kv"><span>{r.label}</span><b>{r.value}</b></div>)}
                    <div className="lpx-kv"><span>Khách hàng</span><b>{field(form.name) || '—'}</b></div>
                    {(form.date || form.time) && <div className="lpx-kv"><span>Thời gian</span><b>{[form.date, form.time].filter(Boolean).join(' · ')}</b></div>}
                    {flow.totalNum > 0 && <div className="lpx-kv lpx-kv--total"><span>{flow.totalLabel || 'Tổng thanh toán'}</span><b>{fmtVnd(flow.totalNum)}</b></div>}
                  </div>
                </div>
              )}
            </div>

            <footer className="lpx-foot">
              {step > 0 ? <button className="lpx-btn-ghost" onClick={back}><ArrowLeft size={15} /> Quay lại</button> : <button className="lpx-btn-ghost" onClick={onClose}>Huỷ</button>}
              <button className="lpx-btn" onClick={next} disabled={busy}>
                {busy ? <><Loader2 size={16} className="lpx-spin" /> Đang xử lý…</>
                  : step === 2 ? <>{actWord}{needPay && flow.totalNum > 0 ? ` · ${fmtVnd(flow.totalNum)}` : ''}</>
                    : <>Tiếp tục <ArrowRight size={15} /></>}
              </button>
            </footer>
          </>
        ) : (
          /* STEP 3 — success celebration */
          <div className="lpx-success">
            <div className="lpx-check">
              <svg viewBox="0 0 52 52"><circle className="lpx-check-ring" cx="26" cy="26" r="24" /><path className="lpx-check-mark" d="M14 27 l8 8 l16 -18" /></svg>
              <PartyPopper size={20} className="lpx-pop lpx-pop-1" />
              <PartyPopper size={16} className="lpx-pop lpx-pop-2" />
            </div>
            <h3>{flow.success?.title || 'Thành công!'}</h3>
            <p>{flow.success?.msg || 'Yêu cầu của bạn đã được ghi nhận.'}</p>
            <div className="lpx-code"><span>Mã của bạn</span><b>{code}</b></div>
            <p className="lpx-sent">Xác nhận đã được gửi tới <b>{contact}</b>.</p>
            <button className="lpx-btn lpx-btn--home" onClick={onHome}><Home size={16} /> Về trang chủ</button>
          </div>
        )}
      </div>
    </div>
  );
}
