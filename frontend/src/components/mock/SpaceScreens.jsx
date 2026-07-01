import React from 'react';
import {
  Layers, Menu, Kanban, CreditCard, Wallet, Cpu, CalendarDays,
  BarChart3, ChevronLeft, ChevronRight,
} from 'lucide-react';
import { Zone, SkLine, Bar } from './primitives';

/* ============================================================
   SPACE ERP — Học viện Minh Trí Thành (purple)
   Real system: 23 modules (Đơn hàng, Kế toán, Khách hàng, Chấm
   công, Lịch coach, Đào tạo, Chiến dịch, KPI, Hợp đồng, Phân
   quyền…), multi-level finance approval (HEAD→ACCT→CFO→CEO),
   coach-schedule calendar, CRM Design System. Colours & labels
   are taken from the production wiki.
   ============================================================ */

const MODULES = ['Khách hàng', 'Đơn hàng', 'Kế toán', 'Chấm công', 'Lịch coach', 'Đào tạo', 'Chiến dịch', 'KPI'];
const ORDERS = [
  ['#MTT-1042', 'Nguyễn Văn A', 'Thanh toán đủ', '12.000.000'],
  ['#MTT-1043', 'Trần Thị B', 'Thanh toán thiếu', '8.500.000'],
  ['#MTT-1044', 'Lê Văn C', 'Chờ duyệt', '15.900.000'],
  ['#MTT-1045', 'Phạm Thị D', 'Hết hạn cọc', '6.200.000'],
];

/* Reusable multi-level approval stepper (Budget · PR · PO · Contract) */
function Stepper({ accent, steps }) {
  return (
    <div className="mk-stepper">
      {steps.map((s) => (
        <div key={s[0]} className={`mk-step ${s[1] === 1 ? 'is-done' : s[1] === 2 ? 'is-now' : ''}`}>
          <span className="mk-step-dot" style={s[1] ? { borderColor: accent, background: s[1] === 1 ? accent : 'transparent' } : {}} />
          <span className="mk-step-lbl">{s[0]}</span>
        </div>
      ))}
    </div>
  );
}

export function Space({ variant, accent, active, onZone }) {
  const approval = (
    <Zone id="team" active={active} onZone={onZone} className="mk-card">
      <div className="mk-card-h"><span><CreditCard size={12} /> Duyệt đa cấp</span></div>
      <Stepper accent={accent} steps={[['HEAD', 1], ['ACCT', 1], ['CFO', 2], ['CEO', 0]]} />
      <div className="mk-fin"><span><Wallet size={11} /> Ngân sách quý</span><b style={{ color: accent }}>72%</b></div>
      <Bar pct={72} accent={accent} />
    </Zone>
  );
  const board = (
    <Zone id="board" active={active} onZone={onZone} className="mk-card mk-grow">
      <div className="mk-space-tabs"><span className="is-on" style={{ borderColor: accent, color: accent }}>Đơn hàng</span><span>Khách hàng</span><span>Tài chính</span></div>
      <div className="mk-table">
        <div className="mk-tr mk-tr--h"><span>Mã</span><span>Khách</span><span>Trạng thái</span><span>Giá trị</span></div>
        {ORDERS.map((r) => (<div key={r[0]} className="mk-tr"><span>{r[0]}</span><span>{r[1]}</span><span className="mk-badge" style={{ color: accent, borderColor: accent }}>{r[2]}</span><span>{r[3]}</span></div>))}
      </div>
    </Zone>
  );
  const ai = (
    <Zone id="ai" active={active} onZone={onZone} className="mk-ai">
      <div className="mk-ai-head"><Cpu size={13} /> AI Design Automation · bám SRS</div>
      <SkLine w={88} /><SkLine w={70} />
    </Zone>
  );

  if (variant === 'mobile') {
    return (
      <div className="mk mk--mobile mk-space">
        <div className="mk-mtop"><span className="mk-brand" style={{ color: accent }}><Layers size={13} /> SPACE ERP</span><Menu size={14} /></div>
        <div className="mk-screen-title"><Kanban size={12} style={{ color: accent }} /> Đơn hàng</div>
        <Zone id="nav" active={active} onZone={onZone} className="mk-chips">
          {MODULES.slice(0, 4).map((m, i) => (<span key={m} className="mk-tab" style={i === 1 ? { borderColor: accent, color: accent } : {}}>{m}</span>))}
        </Zone>
        <Zone id="board" active={active} onZone={onZone} className="mk-card">
          {ORDERS.map((r) => (<div key={r[0]} className="mk-orow"><span className="mk-orow-id">{r[0]}</span><span>{r[1]}</span><span className="mk-badge" style={{ color: accent, borderColor: accent }}>{r[2]}</span></div>))}
        </Zone>
        {approval}
      </div>
    );
  }
  return (
    <div className="mk mk-space">
      <div className="mk-space-layout">
        <Zone id="nav" active={active} onZone={onZone} className="mk-side">
          <span className="mk-brand" style={{ color: accent }}><Layers size={13} /> SPACE ERP</span>
          {MODULES.map((m, i) => (<span key={m} className={`mk-side-item ${i === 1 ? 'is-on' : ''}`} style={i === 1 ? { color: accent } : {}}><i style={{ background: i === 1 ? accent : 'currentColor' }} />{m}</span>))}
          <div className="mk-ds"><span className="mk-ds-lbl">Design System</span><span className="mk-ds-sw"><i style={{ background: '#00ff88' }} /><i style={{ background: accent }} /><i style={{ background: '#00f0ff' }} /></span></div>
        </Zone>
        <div className="mk-col">{board}</div>
        <div className="mk-col mk-col--side">{approval}</div>
      </div>
      {ai}
    </div>
  );
}

/* Chi tiết đơn & Thanh toán — order detail + installment schedule */
export function SpaceOrder({ accent }) {
  return (
    <div className="mk mk-space">
      <div className="mk-topbar"><span className="mk-brand" style={{ color: accent }}><CreditCard size={13} /> Chi tiết đơn #MTT-1043</span><span className="mk-badge" style={{ color: accent, borderColor: accent }}>Thanh toán thiếu</span></div>
      <div className="mk-card mk-grow">
        <div className="mk-kv"><span>Khách hàng</span><b>Trần Thị B</b></div>
        <div className="mk-kv"><span>Sản phẩm</span><b>Nâng Tầm (NT) ×1</b></div>
        <div className="mk-card-h" style={{ marginTop: 4 }}><span>Lịch thanh toán theo đợt</span><b style={{ color: accent }}>12.000.000</b></div>
        {[['Đợt 1 · Đặt cọc 30%', '3.600.000', 'done'], ['Đợt 2 · 40%', '4.800.000', 'now'], ['Đợt 3 · 30%', '3.600.000', '']].map((p) => (
          <div key={p[0]} className="mk-pay"><span className="mk-pay-dot" style={p[2] === 'done' ? { background: accent, borderColor: accent } : p[2] === 'now' ? { borderColor: '#fbbf24' } : {}} /><span>{p[0]}</span><b>{p[1]}</b></div>
        ))}
        <span className="mk-pill-btn" style={{ background: accent }}>✓ Xác nhận chứng từ</span>
      </div>
    </div>
  );
}

/* Duyệt tài chính đa cấp — budget → PO → 4-level approval */
export function SpaceFinance({ accent }) {
  return (
    <div className="mk mk-space">
      <div className="mk-topbar"><span className="mk-brand" style={{ color: accent }}><Wallet size={13} /> Duyệt chi #PO-208</span><span className="mk-badge" style={{ color: '#fbbf24', borderColor: '#fbbf24' }}>Chờ CFO</span></div>
      <div className="mk-card mk-grow">
        <div className="mk-kv"><span>Đề nghị chi</span><b style={{ color: accent }}>45.000.000đ</b></div>
        <div className="mk-kv"><span>Hạng mục</span><b>CP1100 · Marketing Q3</b></div>
        <div className="mk-fin"><span><Wallet size={11} /> Ngân sách còn</span><b style={{ color: accent }}>72%</b></div>
        <Bar pct={72} accent={accent} />
        <div className="mk-card-h" style={{ marginTop: 6 }}><span>Luồng duyệt đa cấp</span></div>
        <Stepper accent={accent} steps={[['Trưởng phòng', 1], ['Kế toán', 1], ['CFO', 2], ['CEO', 0]]} />
      </div>
    </div>
  );
}

/* ============================================================
   Lịch coach 1-1 — the signature calendar (from the wiki).
   Week view, event cards coloured per expert, real statuses:
   Hoàn thành · Chưa hoàn thành · Nháp · Quá hạn.
   ============================================================ */
const EXPERTS = [
  { id: 'A', name: 'Chuyên gia A', color: '#8b5cf6' },
  { id: 'B', name: 'Chuyên gia B', color: '#22d3ee' },
  { id: 'C', name: 'Chuyên gia C', color: '#f59e0b' },
];
const DAYS = [['T2', '16/6'], ['T3', '17/6'], ['T4', '18/6'], ['T5', '19/6'], ['T6', '20/6']];
const TIMES = ['08:00', '09:00', '10:00', '11:00'];
// events[timeIndex][dayIndex] = { ex, who, prog, st } | null   st: done|todo|draft|over
const EVENTS = [
  [ // 08:00
    { ex: 'A', who: 'Nguyễn Văn A', prog: 'Tư Duy Đột Phá', st: 'done' }, null,
    { ex: 'B', who: 'Lê Thị H', prog: 'Nâng Tầm', st: 'done' }, null,
    { ex: 'C', who: 'Phạm M', prog: 'Master', st: 'todo' },
  ],
  [ // 09:00  (now)
    { ex: 'B', who: 'Trần Thị B', prog: 'Nâng Tầm', st: 'todo' },
    { ex: 'A', who: 'Vũ D', prog: 'Tư Duy Đột Phá', st: 'todo' }, null,
    { ex: 'C', who: 'Hoàng K', prog: 'Master', st: 'draft' }, null,
  ],
  [ // 10:00
    null, { ex: 'C', who: 'Đỗ N', prog: 'Coach Nâng Tầm', st: 'todo' },
    { ex: 'A', who: 'Bùi P', prog: 'Tư Duy Đột Phá', st: 'over' }, null,
    { ex: 'B', who: 'Ngô Q', prog: 'Nâng Tầm', st: 'todo' },
  ],
  [ // 11:00
    { ex: 'A', who: 'Lý T', prog: 'Coach Nâng Tầm', st: 'todo' }, null, null,
    { ex: 'B', who: 'Mai V', prog: 'Nâng Tầm', st: 'todo' }, null,
  ],
];
const exColor = (id) => (EXPERTS.find((e) => e.id === id) || {}).color;

function CalEvent({ ev }) {
  if (!ev) return <span className="mk-cal-empty" />;
  const c = exColor(ev.ex);
  const solid = ev.st === 'done' || ev.st === 'todo';
  return (
    <span
      className={`mk-cal-ev is-${ev.st}`}
      style={solid
        ? { background: `${c}22`, borderLeftColor: c, color: 'var(--text)' }
        : {}}
    >
      <b className="mk-cal-ev-name">{ev.who}</b>
      <em className="mk-cal-ev-prog">{ev.prog}</em>
    </span>
  );
}

export function SpaceCalendar({ accent, variant }) {
  if (variant === 'mobile') {
    // Day-view agenda for mobile
    const today = EVENTS.map((row, ti) => (row[0] ? { ...row[0], time: TIMES[ti] } : null)).filter(Boolean);
    const more = [{ who: 'Vũ D', prog: 'Tư Duy Đột Phá', time: '09:00', ex: 'A', st: 'todo' }, { who: 'Đỗ N', prog: 'Coach Nâng Tầm', time: '10:00', ex: 'C', st: 'todo' }];
    const list = [...today, ...more].sort((a, b) => a.time.localeCompare(b.time));
    return (
      <div className="mk mk--mobile mk-space">
        <div className="mk-mtop"><span className="mk-brand" style={{ color: accent }}><CalendarDays size={13} /> Lịch coach</span><span className="mk-chip">T2 · 16/6</span></div>
        <div className="mk-cal-legend mk-cal-legend--m">{EXPERTS.map((e) => <span key={e.id} className="mk-cal-lg"><i style={{ background: e.color }} />{e.name}</span>)}</div>
        <div className="mk-cal-agenda">
          {list.map((ev, i) => (
            <div key={i} className={`mk-cal-ag-item is-${ev.st}`}>
              <span className="mk-cal-ag-time">{ev.time}</span>
              <span className="mk-cal-ag-bar" style={{ background: exColor(ev.ex) }} />
              <div className="mk-cal-ag-body"><b>{ev.who}</b><em>{ev.prog}</em></div>
              <span className="mk-cal-ag-st">{ev.st === 'done' ? '✓' : ev.st === 'over' ? '!' : ev.st === 'draft' ? '○' : '●'}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="mk mk-space">
      <div className="mk-topbar">
        <span className="mk-brand" style={{ color: accent }}><CalendarDays size={13} /> Lịch coach 1-1</span>
        <div className="mk-cal-views"><span>Ngày</span><span className="is-on" style={{ background: accent }}>Tuần</span><span>Tháng</span></div>
        <span className="mk-cal-nav"><ChevronLeft size={12} /> 16–20/06 <ChevronRight size={12} /></span>
      </div>
      <div className="mk-cal-legend">{EXPERTS.map((e) => <span key={e.id} className="mk-cal-lg"><i style={{ background: e.color }} />{e.name}</span>)}
        <span className="mk-cal-lg mk-cal-lg--muted"><i className="is-draft" />Nháp</span>
        <span className="mk-cal-lg mk-cal-lg--muted"><i className="is-over" />Quá hạn</span>
      </div>
      <div className="mk-cal-grid" style={{ gridTemplateColumns: `40px repeat(${DAYS.length}, 1fr)` }}>
        <span className="mk-cal-corner" />
        {DAYS.map((d, i) => <span key={d[0]} className={`mk-cal-dayh ${i === 0 ? 'is-today' : ''}`}>{d[0]}<em>{d[1]}</em></span>)}
        {TIMES.map((t, ti) => (
          <React.Fragment key={t}>
            <span className="mk-cal-time">{t}</span>
            {DAYS.map((d, di) => (
              <span key={d[0]} className={`mk-cal-cell ${ti === 1 && di === 0 ? 'has-now' : ''}`}>
                {ti === 1 && di === 0 && <span className="mk-cal-now" style={{ background: '#f43f5e' }} />}
                <CalEvent ev={EVENTS[ti][di]} />
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* Dashboard BI — revenue funnel by product tier (Statistics module) */
const TIERS = [
  ['Chữa Lành (CL)', '1.240', 100],
  ['Kiến Tạo (KT)', '820', 66],
  ['Nâng Tầm (NT)', '512', 41],
  ['Coach Nâng Tầm', '286', 23],
  ['Master (MAS)', '134', 11],
  ['Trainer (TRN)', '48', 4],
];
export function SpaceBI({ accent }) {
  return (
    <div className="mk mk-space">
      <div className="mk-topbar"><span className="mk-brand" style={{ color: accent }}><BarChart3 size={13} /> Dashboard doanh thu</span><span className="mk-chip">Quý III</span></div>
      <div className="mk-kpis mk-kpis--3 mk-kpis--flat">
        <div className="mk-kpi"><span className="mk-kpi-lbl">Doanh thu</span><span className="mk-kpi-val" style={{ color: accent }}>8,4 tỷ</span><span className="mk-kpi-delta" style={{ color: accent }}>▲ 14%</span></div>
        <div className="mk-kpi"><span className="mk-kpi-lbl">Công nợ</span><span className="mk-kpi-val">1,2 tỷ</span><span className="mk-kpi-delta" style={{ color: '#fbbf24' }}>● Đang thu</span></div>
        <div className="mk-kpi"><span className="mk-kpi-lbl">Đơn mới</span><span className="mk-kpi-val">642</span><span className="mk-kpi-delta" style={{ color: accent }}>▲ 9%</span></div>
      </div>
      <div className="mk-card mk-grow">
        <div className="mk-card-h"><span>Phễu chuyển đổi theo cấp sản phẩm</span></div>
        {TIERS.map((r) => (
          <div key={r[0]} className="mk-fn-row"><span className="mk-fn-name">{r[0]}</span><span className="mk-fn-bar"><i style={{ width: `${r[2]}%`, background: accent }} /></span><span className="mk-fn-val">{r[1]}</span></div>
        ))}
      </div>
    </div>
  );
}
