import React from 'react';
import { Analytics, MonCampaign, MonRbac, MonCompare } from './mock/MonitorScreens';
import { Crm, CrmLead, CrmChat, CrmStats } from './mock/CrmScreens';
import { Space, SpaceOrder, SpaceFinance, SpaceCalendar, SpaceBI } from './mock/SpaceScreens';
import { LP } from './mock/LandingPreview';

/* ============================================================
   MockUI — router for all fake product/landing screens.
   Each internal system lives in its own file under ./mock so the
   three systems never look alike and stay easy to maintain:
     · MonitorScreens — analytics / ads / RBAC / multi-site
     · CrmScreens     — pipeline / lead / chat / lead sources
     · SpaceScreens   — orders / payment / finance / calendar / BI
   Zone ids are preserved so hover-to-explain keeps working.
   ============================================================ */
const REGISTRY = {
  // MTT Monitor
  analytics: Analytics,
  'mon-campaign': MonCampaign,
  'mon-rbac': MonRbac,
  'mon-compare': MonCompare,
  // Lead CRM
  crm: Crm,
  'crm-lead': CrmLead,
  'crm-chat': CrmChat,
  'crm-stats': CrmStats,
  // SPACE ERP
  space: Space,
  'space-order': SpaceOrder,
  'space-finance': SpaceFinance,
  'space-calendar': SpaceCalendar,
  'space-bi': SpaceBI,
};

export default function MockUI({ kind, variant = 'web', accent = '#00ff88', active, onZone, theme, brand = 'Brand' }) {
  const Screen = REGISTRY[kind];
  if (Screen) return <Screen variant={variant} accent={accent} active={active} onZone={onZone} />;
  if (typeof kind === 'string' && kind.startsWith('lp-')) return <LP kind={kind} variant={variant} theme={theme} brand={brand} />;
  return null;
}
