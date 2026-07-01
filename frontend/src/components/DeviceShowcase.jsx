import React, { useState } from 'react';
import { Monitor, Smartphone, MousePointerClick } from 'lucide-react';
import MockUI from './MockUI';

/* Browser + phone device frames wrapping a live MockUI.
   Hovering a feature card highlights the matching zone (and vice-versa),
   with a caption panel explaining what each function does. */
export default function DeviceShowcase({ showcase }) {
  const [device, setDevice] = useState('web');
  const [active, setActive] = useState(null);
  const accent = showcase.accent || '#00ff88';
  const cfg = showcase[device] || showcase.web;
  const features = showcase.features || [];
  const activeFeature = features.find((f) => f.zone === active);

  return (
    <div className="showcase">
      <div className="showcase-toolbar">
        <div className="seg">
          <button className={`seg-btn ${device === 'web' ? 'is-on' : ''}`} onClick={() => setDevice('web')}>
            <Monitor size={15} /> Web
          </button>
          <button className={`seg-btn ${device === 'mobile' ? 'is-on' : ''}`} onClick={() => setDevice('mobile')}>
            <Smartphone size={15} /> Mobile
          </button>
        </div>
        <span className="showcase-hint"><MousePointerClick size={13} /> Di chuột vào chức năng để xem mô tả</span>
      </div>

      {showcase.deviceNote && (
        <div className="showcase-devnote" style={{ borderColor: `${accent}44` }}>
          {device === 'web'
            ? <><Monitor size={15} style={{ color: accent }} /> <b>Bản Web —</b> {showcase.deviceNote.web}</>
            : <><Smartphone size={15} style={{ color: accent }} /> <b>Bản Mobile —</b> {showcase.deviceNote.mobile}</>}
        </div>
      )}

      <div className={`showcase-stage device-${device}`} style={{ '--accent': accent }}>
        {device === 'web' ? (
          <div className="browser-frame">
            <div className="browser-bar">
              <span className="browser-dots"><i /><i /><i /></span>
              <span className="browser-url">{showcase.web?.kind === 'landing' ? 'https://' : 'app.mtt.internal/'}{showcase.label?.split('· ')[1]?.toLowerCase().replace(/\s/g, '') || 'dashboard'}</span>
            </div>
            <div className="browser-viewport">
              <MockUI kind={cfg.kind} variant="web" accent={accent} active={active} onZone={setActive} brand={showcase.landing?.brand} />
            </div>
          </div>
        ) : (
          <div className="phone-frame">
            <span className="phone-notch" />
            <div className="phone-viewport">
              <MockUI kind={cfg.kind} variant="mobile" accent={accent} active={active} onZone={setActive} brand={showcase.landing?.brand} />
            </div>
          </div>
        )}

        {/* Floating caption for the currently focused feature */}
        <div className={`showcase-caption ${activeFeature ? 'is-visible' : ''}`} style={{ borderColor: accent }}>
          {activeFeature && (
            <>
              <span className="showcase-caption-ic" style={{ color: accent }}><activeFeature.icon size={16} /></span>
              <div>
                <strong>{activeFeature.title}</strong>
                <p>{activeFeature.desc}</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Feature list — hover to spotlight the matching zone */}
      <div className="showcase-features">
        {features.map((f) => (
          <button
            key={f.zone}
            className={`feature-chip ${active === f.zone ? 'is-on' : ''}`}
            style={active === f.zone ? { borderColor: accent, color: accent } : {}}
            onMouseEnter={() => setActive(f.zone)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(f.zone)}
            onBlur={() => setActive(null)}
          >
            <span className="feature-chip-ic" style={{ color: accent }}><f.icon size={16} /></span>
            <span className="feature-chip-body">
              <strong>{f.title}</strong>
              <span>{f.desc}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
