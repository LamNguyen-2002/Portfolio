import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import useReveal from '../hooks/useReveal';
import TplCourse from './landing/TplCourse';
import TplSaas from './landing/TplSaas';
import TplEvent from './landing/TplEvent';
import TplMenu from './landing/TplMenu';
import TplShop from './landing/TplShop';
import TplSpa from './landing/TplSpa';

/* ============================================================
   Theme-driven landing pages. Each project supplies a `template`
   and a `theme` (colours + fonts). The templates themselves live
   one-per-file under ./landing so no two industries share code.
   ============================================================ */
const TEMPLATES = { course: TplCourse, saas: TplSaas, event: TplEvent, menu: TplMenu, shop: TplShop, spa: TplSpa };

export default function LandingPage({ project, showcase, onBack }) {
  const theme = showcase.theme;
  const d = showcase.landing || {};
  const Tpl = TEMPLATES[showcase.template] || TplCourse;
  useReveal([project.id]);
  useEffect(() => { window.scrollTo(0, 0); }, [project.id]);

  const styleVars = {
    '--lp-bg': theme.bg, '--lp-surface': theme.surface, '--lp-text': theme.text,
    '--lp-sub': theme.sub, '--lp-accent': theme.accent, '--lp-accent2': theme.accent2 || theme.accent,
    '--lp-line': theme.line, '--lp-display': theme.display, '--lp-body': theme.body,
    background: 'var(--lp-bg)', color: 'var(--lp-text)', fontFamily: 'var(--lp-body)',
  };

  return (
    <div className={`lp2-root lp2-mode-${theme.mode}`} style={styleVars}>
      <div className="lp2-bg" aria-hidden="true">
        <span className="lp2-orb lp2-orb-1" /><span className="lp2-orb lp2-orb-2" />
        {theme.mode === 'dark' && <span className="lp2-grid-bg" />}
      </div>

      <header className="lp2-nav">
        <button onClick={onBack} className="lp2-back"><ArrowLeft size={15} /> Portfolio</button>
        <span className="lp2-brand">{d.brand}</span>
        <nav className="lp2-nav-links">{(d.nav || []).map((n) => <span key={n}>{n}</span>)}</nav>
        <a href="#cta" className="lp2-btn lp2-btn--sm">{d.hero?.ctaPrimary?.split(' ').slice(0, 2).join(' ') || 'Bắt đầu'}</a>
      </header>

      <Tpl d={d} theme={theme} brand={d.brand} />

      <footer className="lp2-footer">
        <span className="lp2-brand">{d.brand}</span>
        <p>Landing page demo · thiết kế bởi {project.designer || 'Nguyễn Tùng Lâm'}</p>
        <button onClick={onBack} className="lp2-back"><ArrowLeft size={15} /> Quay lại Portfolio</button>
      </footer>
    </div>
  );
}
