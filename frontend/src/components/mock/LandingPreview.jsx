import React from 'react';
import {
  Sparkles, Kanban, Bot, Zap, GraduationCap, Users, ChefHat,
  Leaf, Flower2, Heart, ShoppingBag,
} from 'lucide-react';

/* ============================================================
   LANDING PREVIEW — themed mini page per industry, rendered
   inside the browser/phone frames on each landing page and on
   the home cards. Fully driven by the project's `theme`.
   ============================================================ */
export function LP({ kind, variant, theme, brand }) {
  const t = theme || { bg: '#0c0c16', surface: 'rgba(255,255,255,.05)', text: '#fff', sub: '#9aa0b5', accent: '#00ff88', accent2: '#00f0ff', line: 'rgba(255,255,255,.1)', display: "'Outfit',sans-serif" };
  const mobile = variant === 'mobile';
  const soft = t.mode === 'dark' ? 'rgba(255,255,255,.06)' : t.surface;
  const rootStyle = { background: t.bg, color: t.text, fontFamily: t.body || 'inherit' };
  const dsp = { fontFamily: t.display, fontWeight: 700, lineHeight: 1.1 };
  const line = (w, c) => <span className="lpp-l" style={{ width: w, background: c || t.line }} />;

  const Nav = ({ links }) => (
    <div className="lpp-nav" style={{ borderColor: t.line }}>
      <span className="lpp-brand" style={{ ...dsp, color: t.accent }}>{brand}</span>
      {!mobile && <span className="lpp-links">{links.map((_, i) => <i key={i} style={{ background: t.sub, opacity: .5 }} />)}</span>}
      <span className="lpp-cta" style={{ background: t.accent }} />
    </div>
  );

  if (kind === 'lp-course') {
    return (
      <div className="lpp" style={rootStyle}>
        <Nav links={[1, 2, 3]} />
        <div className="lpp-hero">
          <span className="lpp-badge" style={{ borderColor: t.accent, color: t.accent }}>Khai giảng 2026</span>
          <div className="lpp-h1" style={dsp}>Trở thành <span style={{ color: t.accent }}>Product Designer</span></div>
          {line('86%')}{line('60%')}
          <div className="lpp-btns"><span className="lpp-pill" style={{ background: t.accent, color: '#fff' }}>Học thử</span><span className="lpp-pill lpp-pill--ghost" style={{ borderColor: t.line, color: t.sub }}>Lộ trình</span></div>
        </div>
        <div className={`lpp-g3 ${mobile ? 'one' : ''}`}>
          {[GraduationCap, Users, Sparkles].map((Ic, i) => (
            <div key={i} className="lpp-card" style={{ background: soft, borderColor: t.line }}>
              <span className="lpp-ic" style={{ background: `${t.accent}22`, color: t.accent }}><Ic size={13} /></span>{line('80%')}{line('55%')}
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (kind === 'lp-event') {
    return (
      <div className="lpp" style={rootStyle}>
        <Nav links={[1, 2, 3]} />
        <div className="lpp-hero">
          <span className="lpp-badge" style={{ borderColor: t.accent, color: t.accent }}>20.09.2026 · Hà Nội</span>
          <div className="lpp-h1" style={dsp}>Product <span style={{ color: t.accent }}>×</span> AI Summit</div>
          <div className="lpp-cd">{['68', '14', '52', '09'].map((n, i) => (<span key={i} className="lpp-cd-box" style={{ background: soft, borderColor: t.accent }}><b style={{ color: t.accent }}>{n}</b></span>))}</div>
        </div>
        <div className="lpp-speakers">{[0, 1, 2, 3].map((i) => (<span key={i} className="lpp-av" style={{ background: `linear-gradient(135deg, ${t.accent}, ${t.accent2})` }} />))}<span className="lpp-pill" style={{ background: t.accent, color: '#04121a' }}>Nhận vé</span></div>
      </div>
    );
  }
  if (kind === 'lp-shop') {
    const prods = [['Blazer', '890K', 'New'], ['Đầm lụa', '1.290K', 'Hot'], ['Jeans', '650K', ''], ['Cashmere', '990K', '-20%'], ['Túi da', '1.490K', ''], ['Sơ mi', '520K', '']];
    return (
      <div className="lpp" style={rootStyle}>
        <div className="lpp-nav" style={{ borderColor: t.line }}>
          <span className="lpp-brand" style={{ ...dsp, letterSpacing: '.2em', color: t.text }}>{brand}</span>
          {!mobile && <span className="lpp-links">{[1, 2, 3].map((i) => <i key={i} style={{ background: t.sub, opacity: .5 }} />)}</span>}
          <ShoppingBag size={13} style={{ color: t.text }} />
        </div>
        <div className="lpp-shop-hero" style={dsp}>Thu / Đông <span style={{ color: t.accent }}>2026</span></div>
        <div className={`lpp-prod ${mobile ? 'two' : ''}`}>
          {(mobile ? prods.slice(0, 4) : prods).map((p, i) => (
            <div key={i} className="lpp-prod-card">
              <span className="lpp-thumb" style={{ background: `linear-gradient(135deg, ${t.surface}, ${t.accent}22)` }}>{p[2] && <em style={{ background: t.accent }}>{p[2]}</em>}</span>
              <span className="lpp-prod-name" style={{ color: t.text }}>{p[0]}</span><span className="lpp-prod-price" style={{ color: t.accent }}>{p[1]}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (kind === 'lp-menu') {
    const dishes = [['Cá kho tộ', '145K'], ['Sườn nướng mật ong', '169K'], ['Gỏi cuốn tôm thịt', '89K'], ['Bò lúc lắc', '189K']];
    return (
      <div className="lpp" style={rootStyle}>
        <Nav links={[1, 2, 3]} />
        <div className="lpp-hero"><span className="lpp-badge" style={{ borderColor: t.accent, color: t.accent }}><Leaf size={10} /> Ẩm thực Việt</span><div className="lpp-h1" style={dsp}>Hương vị quê nhà</div>{line('70%')}</div>
        <div className="lpp-menu" style={{ background: soft, borderColor: t.line }}>
          <div className="lpp-menu-h" style={{ ...dsp, color: t.accent }}><ChefHat size={12} /> Thực đơn đặc trưng</div>
          {(mobile ? dishes.slice(0, 3) : dishes).map((d, i) => (<div key={i} className="lpp-dish"><span style={{ color: t.text }}>{d[0]}</span><span className="lpp-dot" style={{ borderColor: t.line }} /><span style={{ color: t.accent, fontWeight: 700 }}>{d[1]}</span></div>))}
          <span className="lpp-pill" style={{ background: t.accent, color: '#fff', alignSelf: 'flex-start', marginTop: 4 }}>Đặt bàn</span>
        </div>
      </div>
    );
  }
  if (kind === 'lp-spa') {
    const svc = [['Chăm sóc da', '75′', '450K'], ['Massage đá nóng', '90′', '520K'], ['Trị liệu vai gáy', '60′', '380K']];
    return (
      <div className="lpp" style={rootStyle}>
        <Nav links={[1, 2, 3]} />
        <div className="lpp-hero"><span className="lpp-badge" style={{ borderColor: t.accent, color: t.accent }}><Flower2 size={10} /> An yên</span><div className="lpp-h1" style={dsp}>Tái tạo vẻ đẹp</div>{line('64%')}</div>
        <div className="lpp-menu" style={{ background: soft, borderColor: t.line }}>
          <div className="lpp-menu-h" style={{ ...dsp, color: t.accent }}><Heart size={12} /> Dịch vụ</div>
          {(mobile ? svc.slice(0, 2) : svc).map((s, i) => (<div key={i} className="lpp-dish"><span style={{ color: t.text }}>{s[0]}</span><span className="lpp-svc-dur" style={{ color: t.sub }}>{s[1]}</span><span style={{ color: t.accent, fontWeight: 700 }}>{s[2]}</span></div>))}
          <span className="lpp-pill" style={{ background: t.accent, color: '#fff', alignSelf: 'flex-start', marginTop: 4 }}>Đặt lịch hẹn</span>
        </div>
      </div>
    );
  }
  // lp-saas (default)
  return (
    <div className="lpp" style={rootStyle}>
      <Nav links={[1, 2, 3]} />
      <div className="lpp-hero"><span className="lpp-badge" style={{ borderColor: t.accent, color: t.accent }}>Bản 2.0</span><div className="lpp-h1" style={dsp}>Một <span style={{ color: t.accent }}>FlowSpace</span> cho cả nhóm</div>{line('72%')}<div className="lpp-btns"><span className="lpp-pill" style={{ background: t.accent, color: '#fff' }}>Dùng thử</span></div></div>
      <div className={`lpp-g3 ${mobile ? 'one' : ''}`}>{[Kanban, Bot, Zap].map((Ic, i) => (<div key={i} className="lpp-card" style={{ background: soft, borderColor: t.line }}><span className="lpp-ic" style={{ background: `${t.accent}22`, color: t.accent }}><Ic size={13} /></span>{line('78%')}</div>))}</div>
    </div>
  );
}
