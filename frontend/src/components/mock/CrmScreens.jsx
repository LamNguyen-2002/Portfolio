import React from 'react';
import {
  Bell, Bot, Users, Kanban, MessageSquare, Settings, TrendingUp,
  Phone, Clock, Filter, Zap,
} from 'lucide-react';
import { Zone } from './primitives';

/* ============================================================
   LEAD CRM — Social lead automation + pipeline + AI chat (green)
   Real system: auto-collect leads from Fanpage/Meta, score by
   heat, Kanban pipeline, AI auto-responder, follow-up reminders.
   ============================================================ */

const COLS = [
  { t: 'Lead mới', n: 24, cards: [['Nguyễn A', 'FB Ads'], ['Trần B', 'Zalo']] },
  { t: 'Đang chăm', n: 11, cards: [['Lê C', 'Hotline']] },
  { t: 'Đã chốt', n: 7, cards: [['Phạm D', '✔ 12tr']] },
];

export function Crm({ variant, accent, active, onZone }) {
  const leads = (
    <Zone id="leads" active={active} onZone={onZone} className="mk-card">
      <div className="mk-card-h"><span><TrendingUp size={12} /> Lead nóng</span></div>
      {[['Nguyễn A', 98], ['Trần B', 91], ['Lê C', 84]].map((l) => (
        <div key={l[0]} className="mk-score"><span>{l[0]}</span><span className="mk-score-bar"><i style={{ width: `${l[1]}%`, background: accent }} /></span><b style={{ color: accent }}>{l[1]}°</b></div>
      ))}
    </Zone>
  );
  const chat = (
    <Zone id="ai" active={active} onZone={onZone} className="mk-card mk-chat">
      <div className="mk-card-h"><span><Bot size={12} /> AI Auto-Responder</span><span className="mk-dot-on" style={{ background: accent }} /></div>
      <div className="mk-bubble mk-bubble--in">Khoá học còn slot không ạ?</div>
      <div className="mk-bubble mk-bubble--out" style={{ borderColor: accent }}>Dạ còn 3 suất cuối ạ! Em gửi lịch nhé 💚</div>
    </Zone>
  );

  if (variant === 'mobile') {
    return (
      <div className="mk mk--mobile mk-crm">
        <div className="mk-mtop"><span className="mk-brand" style={{ color: accent }}><Users size={13} /> Lead CRM</span><span className="mk-chip"><Bell size={11} /> 5</span></div>
        <div className="mk-screen-title"><Kanban size={12} style={{ color: accent }} /> Pipeline bán hàng</div>
        <Zone id="pipeline" active={active} onZone={onZone} className="mk-seg">
          {COLS.map((c) => (<span key={c.t} className="mk-seg-item"><b style={{ color: accent }}>{c.n}</b>{c.t}</span>))}
        </Zone>
        {leads}
        {chat}
      </div>
    );
  }
  return (
    <div className="mk mk-crm">
      <div className="mk-crm-layout">
        <Zone id="nav" active={active} onZone={onZone} className="mk-rail">
          <span className="mk-rail-item is-on" style={{ color: accent, background: `${accent}1f` }}><Kanban size={15} /></span>
          <span className="mk-rail-item"><Users size={15} /></span>
          <span className="mk-rail-item"><MessageSquare size={15} /></span>
          <span className="mk-rail-item mk-rail-bell"><Bell size={15} /><i style={{ background: accent }}>5</i></span>
          <span className="mk-rail-item mk-rail-foot"><Settings size={15} /></span>
        </Zone>
        <Zone id="pipeline" active={active} onZone={onZone} className="mk-kanban">
          {COLS.map((c) => (
            <div key={c.t} className="mk-kcol">
              <div className="mk-kcol-h"><span>{c.t}</span><span className="mk-kcol-n" style={{ color: accent }}>{c.n}</span></div>
              {c.cards.map((card) => (<div key={card[0]} className="mk-kcard"><span className="mk-kcard-av" style={{ background: accent }} /><b>{card[0]}</b><em>{card[1]}</em></div>))}
              <div className="mk-kcard mk-kcard--ghost">+ kéo lead</div>
            </div>
          ))}
        </Zone>
        <div className="mk-col mk-col--side">{leads}{chat}</div>
      </div>
    </div>
  );
}

/* Hồ sơ Lead — 360° lead profile + interaction timeline */
export function CrmLead({ accent }) {
  return (
    <div className="mk mk-crm">
      <div className="mk-topbar"><span className="mk-brand" style={{ color: accent }}><Users size={13} /> Hồ sơ Lead</span><span className="mk-chip" style={{ color: accent, borderColor: accent }}>🔥 Nóng · 98°</span></div>
      <div className="mk-card mk-grow">
        <div className="mk-lead-head"><span className="mk-avatar" style={{ background: accent }}>A</span><div><b>Nguyễn Văn A</b><span className="mk-muted">Nguồn: Facebook Ads · Tư vấn viên: Lâm</span></div></div>
        <div className="mk-kv"><span><Phone size={11} /> SĐT</span><b>09xx xxx 916</b></div>
        <div className="mk-kv"><span>Quan tâm</span><b>Khóa Product Design</b></div>
        <div className="mk-kv"><span>Giá trị dự kiến</span><b style={{ color: accent }}>12.000.000đ</b></div>
        <div className="mk-card-h" style={{ marginTop: 4 }}><span><Clock size={11} /> Lịch sử tương tác</span></div>
        <div className="mk-timeline2">
          {[['Gửi tư vấn khóa học', '2 giờ trước'], ['Đặt lịch gọi lại', 'Hôm qua'], ['Xem bảng giá khóa học', '2 ngày trước']].map((t) => (
            <div key={t[0]} className="mk-tl2"><span className="mk-tl2-dot" style={{ borderColor: accent }} /><span>{t[0]}</span><span className="mk-muted">{t[1]}</span></div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Hội thoại AI — Messenger inbox with AI reply suggestions */
export function CrmChat({ accent }) {
  return (
    <div className="mk mk-crm">
      <div className="mk-topbar"><span className="mk-brand" style={{ color: accent }}><MessageSquare size={13} /> Messenger · Fanpage</span><span className="mk-dot-on" style={{ background: accent }} /></div>
      <div className="mk-card mk-grow mk-chat">
        <div className="mk-bubble mk-bubble--in">Chào shop, khóa Product Design còn slot không ạ?</div>
        <div className="mk-bubble mk-bubble--out" style={{ borderColor: accent }}>Dạ còn 3 suất cuối ạ! Khai giảng 20/09 ạ 💚</div>
        <div className="mk-bubble mk-bubble--in">Học phí bao nhiêu vậy shop?</div>
        <div className="mk-bubble mk-bubble--out" style={{ borderColor: accent }}>Dạ 9.900.000đ, ưu đãi 30 suất khai giảng sớm ạ ✨</div>
        <div className="mk-ai-tag" style={{ color: accent }}><Bot size={11} /> AI gợi ý kịch bản trả lời</div>
        <div className="mk-sugg">{['Gửi lịch khai giảng', 'Ưu đãi học phí', 'Đăng ký học thử'].map((s) => <span key={s} className="mk-sugg-chip" style={{ borderColor: `${accent}55` }}>{s}</span>)}</div>
      </div>
    </div>
  );
}

/* Hiệu suất & Nguồn lead — conversion analytics by channel */
export function CrmStats({ accent }) {
  const cols = '1.4fr .9fr .9fr .8fr';
  const rows = [['Facebook Ads', '842', '96', '11,4%'], ['Zalo OA', '410', '58', '14,1%'], ['Hotline', '265', '47', '17,7%'], ['Website form', '198', '21', '10,6%']];
  return (
    <div className="mk mk-crm">
      <div className="mk-topbar"><span className="mk-brand" style={{ color: accent }}><Filter size={13} /> Hiệu suất & Nguồn lead</span><span className="mk-chip">Tháng này</span></div>
      <div className="mk-card mk-grow">
        <div className="mk-card-h"><span><Zap size={12} /> Tỷ lệ chốt theo kênh</span></div>
        <div className="mk-tbl">
          <div className="mk-tbl-h" style={{ gridTemplateColumns: cols }}><span>Kênh</span><span>Lead</span><span>Chốt</span><span>CR</span></div>
          {rows.map((r) => (
            <div key={r[0]} className="mk-tbl-r" style={{ gridTemplateColumns: cols }}>
              <span>{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span><b style={{ color: accent }}>{r[3]}</b>
            </div>
          ))}
        </div>
        <div className="mk-fin"><span>Tổng lead tự động thu về</span><b style={{ color: accent }}>1.715</b></div>
      </div>
    </div>
  );
}
