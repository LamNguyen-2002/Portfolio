import React from 'react';
import {
  BarChart3, Activity, Filter, Target, Bot, LineChart, ShieldCheck,
  Clock, Globe, Layers,
} from 'lucide-react';
import { Zone, Kpi, AreaLine, SkLine, Tbl } from './primitives';

/* ============================================================
   MTT MONITOR — Analytics command center (cyan)
   Real system: GA4 (BigQuery) + Facebook & Google Ads monitor
   across multiple landing sites (Sự kiện, Phụ nữ, MTT, TTCC),
   AI insight via Gemini, RBAC + scheduled email reports.
   ============================================================ */

const SITES = ['Sự kiện', 'Phụ nữ', 'Minh Trí Thành', 'TTCC'];

export function Analytics({ variant, accent, active, onZone }) {
  const kpis = (
    <>
      <Kpi label="Người dùng" value="12.480" delta="8%" accent={accent} />
      <Kpi label="Submit form" value="1.204" delta="12%" accent={accent} />
      <Kpi label="Conversion" value="9,6%" delta="3%" accent={accent} />
      <Kpi label="Chi phí Ads" value="24,1tr" delta="5%" accent={accent} up={false} />
    </>
  );
  const chart = (
    <Zone id="chart" active={active} onZone={onZone} className="mk-card mk-chartcard mk-grow">
      <div className="mk-card-h">
        <span><LineChart size={12} /> Lưu lượng realtime · 7 ngày</span>
        <span className="mk-legend"><i style={{ background: accent }} />FB Ads <i className="alt" />Google</span>
      </div>
      <div className="mk-chartwrap"><AreaLine accent={accent} accent2="#a0e9ff" big compare /></div>
    </Zone>
  );
  const sources = (
    <Zone id="funnel" active={active} onZone={onZone} className="mk-card">
      <div className="mk-card-h"><span><Globe size={12} /> Nguồn truy cập</span></div>
      {[['Facebook Ads', '48%', 48], ['Google / CPC', '27%', 27], ['Organic', '15%', 15], ['Direct', '10%', 10]].map((r) => (
        <div key={r[0]} className="mk-fn-row"><span className="mk-fn-name">{r[0]}</span><span className="mk-fn-bar"><i style={{ width: `${r[2]}%`, background: accent }} /></span><span className="mk-fn-val">{r[1]}</span></div>
      ))}
    </Zone>
  );
  const ai = (
    <Zone id="ai" active={active} onZone={onZone} className="mk-ai">
      <div className="mk-ai-head"><Bot size={13} /> AI Insight · Gemini</div>
      <SkLine w={92} /><SkLine w={80} /><SkLine w={86} />
    </Zone>
  );

  if (variant === 'mobile') {
    return (
      <div className="mk mk--mobile mk-analytics">
        <div className="mk-mtop"><span className="mk-brand" style={{ color: accent }}><BarChart3 size={13} /> MTT Monitor</span><span className="mk-live" style={{ color: accent, borderColor: accent }}>● LIVE</span></div>
        <div className="mk-screen-title"><Activity size={12} style={{ color: accent }} /> Tổng quan · 7 ngày</div>
        <Zone id="kpi" active={active} onZone={onZone} className="mk-kpis mk-kpis--2">{kpis}</Zone>
        <Zone id="chart" active={active} onZone={onZone} className="mk-card mk-chartcard">
          <div className="mk-card-h"><span><LineChart size={12} /> Lưu lượng</span></div>
          <div className="mk-chartwrap"><AreaLine accent={accent} /></div>
        </Zone>
        {sources}
        {ai}
      </div>
    );
  }
  return (
    <div className="mk mk-analytics">
      <div className="mk-topbar">
        <span className="mk-brand" style={{ color: accent }}><BarChart3 size={14} /> MTT Monitor</span>
        <div className="mk-tabs">{SITES.map((s, i) => <span key={s} className={`mk-tab ${i === 0 ? 'is-on' : ''}`} style={i === 0 ? { borderColor: accent, color: accent } : {}}>{s}</span>)}</div>
        <span className="mk-live" style={{ color: accent, borderColor: accent }}>● LIVE</span>
      </div>
      <Zone id="kpi" active={active} onZone={onZone} className="mk-kpis mk-kpis--4">{kpis}</Zone>
      {chart}
      <div className="mk-grid2">{sources}{ai}</div>
    </div>
  );
}

/* Chi tiết chiến dịch — Ads performance table with a KPI strip */
export function MonCampaign({ accent }) {
  return (
    <div className="mk mk-analytics">
      <div className="mk-topbar"><span className="mk-brand" style={{ color: accent }}><Target size={13} /> Chi tiết chiến dịch</span><span className="mk-chip">30 ngày</span></div>
      <div className="mk-kpis mk-kpis--3 mk-kpis--flat">
        <Kpi label="Tổng chi phí" value="35,1tr" delta="6%" accent={accent} up={false} />
        <Kpi label="Lead" value="1.204" delta="12%" accent={accent} />
        <Kpi label="ROAS TB" value="3,7x" delta="9%" accent={accent} />
      </div>
      <div className="mk-card mk-grow">
        <div className="mk-card-h"><span><Filter size={12} /> Hiệu suất theo chiến dịch</span><span className="mk-legend"><i style={{ background: accent }} /> ROAS</span></div>
        <Tbl cols="1.7fr .8fr 1fr .8fr .8fr" accent={accent} strongIdx={4} badgeIdx={1}
          head={['Chiến dịch', 'Kênh', 'Chi phí', 'CTR', 'ROAS']}
          rows={[
            ['Tuyển sinh K26', 'Meta', '12,4tr', '3,2%', '4.1x'],
            ['Lead Form Q3', 'Google', '9,6tr', '4,1%', '5.2x'],
            ['Remarketing', 'Google', '8,1tr', '2,7%', '3.4x'],
            ['Brand Awareness', 'Meta', '5,0tr', '1,9%', '2.1x'],
          ]} />
      </div>
    </div>
  );
}

/* Phân quyền & Báo cáo — RBAC user/role table + email report cron */
export function MonRbac({ accent }) {
  const cols = '1.3fr 1fr 1.2fr .8fr';
  const rows = [['An Nguyễn', 'Admin', 'Tất cả site', 'on'], ['Bình Trần', 'Editor', 'Sự kiện', 'on'], ['Chi Lê', 'Viewer', 'Phụ nữ', 'off'], ['Dũng Phạm', 'Editor', 'TTCC', 'on']];
  return (
    <div className="mk mk-analytics">
      <div className="mk-topbar"><span className="mk-brand" style={{ color: accent }}><ShieldCheck size={13} /> Người dùng & Quyền</span><span className="mk-chip">RBAC</span></div>
      <div className="mk-card mk-grow">
        <div className="mk-card-h"><span>Phân quyền nhận báo cáo email</span></div>
        <div className="mk-tbl">
          <div className="mk-tbl-h" style={{ gridTemplateColumns: cols }}><span>Người dùng</span><span>Vai trò</span><span>Site báo cáo</span><span>Email</span></div>
          {rows.map((r) => (
            <div key={r[0]} className="mk-tbl-r" style={{ gridTemplateColumns: cols }}>
              <span>{r[0]}</span><span className="mk-badge" style={{ color: accent, borderColor: accent }}>{r[1]}</span><span>{r[2]}</span>
              <span style={{ color: r[3] === 'on' ? accent : 'var(--text-muted)' }}>{r[3] === 'on' ? '● Bật' : '○ Tắt'}</span>
            </div>
          ))}
        </div>
        <div className="mk-alert" style={{ color: accent, background: `${accent}14`, borderColor: `${accent}33` }}><Clock size={12} /> Cronjob gửi báo cáo tự động 10:00 mỗi ngày</div>
      </div>
    </div>
  );
}

/* So sánh đa site — side-by-side landing performance */
export function MonCompare({ accent }) {
  const cards = [
    { site: 'Sự kiện', users: '5.240', conv: '11,2%', cost: '9,4tr', up: true },
    { site: 'Phụ nữ', users: '3.980', conv: '8,7%', cost: '7,1tr', up: true },
    { site: 'Minh Trí Thành', users: '2.610', conv: '6,4%', cost: '5,0tr', up: false },
  ];
  return (
    <div className="mk mk-analytics">
      <div className="mk-topbar"><span className="mk-brand" style={{ color: accent }}><Layers size={13} /> So sánh đa site</span><span className="mk-chip">7 ngày</span></div>
      <div className="mk-compare">
        {cards.map((c) => (
          <div key={c.site} className="mk-cmp-card">
            <div className="mk-cmp-h"><span className="mk-cmp-dot" style={{ background: accent }} />{c.site}</div>
            <div className="mk-cmp-big" style={{ color: accent }}>{c.users}<em>người dùng</em></div>
            <div className="mk-chartwrap mk-chartwrap--sm"><AreaLine accent={accent} /></div>
            <div className="mk-cmp-foot"><span>CR {c.conv}</span><span className={c.up ? '' : 'is-down'}>{c.up ? '▲' : '▼'} {c.cost}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}
