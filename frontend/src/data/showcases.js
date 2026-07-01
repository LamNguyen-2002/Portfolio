// ============================================================
// SHOWCASE CONFIG — rich visual/interaction data per project.
// Kept in the frontend (not the backend) so the Admin editor can
// keep managing text fields without wiping the device mockups.
// Merged onto backend/fallback projects by id in App.jsx.
// ============================================================
import {
  BarChart3, Activity, Filter, Target, Bot, Users, MessageSquare,
  Kanban, Layers, Zap, Gauge, Bell, Search, PlayCircle, Rocket,
  Star, Calendar, GraduationCap, CheckCircle2, TrendingUp, Sparkles,
  MousePointerClick, ShieldCheck, CreditCard, Workflow, Globe, Cpu,
  Utensils, ChefHat, Wine, Coffee, ShoppingBag, Shirt, Scissors,
  Flower2, Leaf, Ticket, MapPin, Clock, Tag, Truck, Percent, Music,
  Gift, Heart, HeartHandshake, Camera, Palette, Ruler, Salad, CupSoda,
  Store, Package, BadgePercent, Droplets, Mic2,
} from 'lucide-react';

// System / internal-tool projects → open a device showcase (web + mobile)
// with hover-to-reveal feature zones.
// Landing projects → open an immersive animated landing page.

export const showcases = {
  // ---------- INTERNAL SYSTEM: MTT Monitor — GA4 & Ads Dashboard ----------
  'project-1': {
    type: 'system',
    accent: '#00f0ff',
    label: 'Hệ thống nội bộ · MTT Monitor',
    tagline: 'Dashboard giám sát GA4 (BigQuery), Facebook & Google Ads real-time cho Minh Trí Thành.',
    deviceNote: {
      web: 'Dashboard đầy đủ: hàng KPI, biểu đồ lưu lượng realtime, phễu chuyển đổi & AI insight.',
      mobile: 'App theo dõi nhanh: màn "Tổng quan · 7 ngày" gồm KPI rút gọn + biểu đồ khi đang di chuyển.',
    },
    screens: [
      { name: 'Tổng quan Realtime', kind: 'analytics', desc: 'KPI, biểu đồ lưu lượng realtime, nguồn truy cập & AI insight (Gemini).' },
      { name: 'Chi tiết chiến dịch', kind: 'mon-campaign', desc: 'So sánh Meta & Google Ads: chi phí, CTR, ROAS theo từng campaign.' },
      { name: 'So sánh đa site', kind: 'mon-compare', desc: 'Đặt cạnh nhau các landing (Sự kiện, Phụ nữ, MTT) để so hiệu quả.' },
      { name: 'Phân quyền & Báo cáo', kind: 'mon-rbac', desc: 'RBAC quản trị user/role, cấu hình nhận báo cáo email theo từng site.' },
    ],
    web: { kind: 'analytics' },
    mobile: { kind: 'analytics' },
    features: [
      { icon: Gauge, title: 'KPI GA4 Realtime', zone: 'kpi', desc: 'Chỉ số trực tiếp từ GA4 qua BigQuery: Click, Submit form, Conversion Rate của từng landing.' },
      { icon: BarChart3, title: 'Giám sát Ads đa nền tảng', zone: 'chart', desc: 'Theo dõi hiệu suất Facebook Ads & Google/YouTube Ads trực tiếp, phát hiện đội chi phí & click ảo.' },
      { icon: Bot, title: 'AI Insight (Gemini)', zone: 'ai', desc: 'Google Gemini tự động đọc biểu đồ và viết nhận định hiệu quả riêng cho từng trang.' },
      { icon: Layers, title: 'Đa site & Cảnh báo email', zone: 'funnel', desc: 'So sánh nhiều landing (Sự kiện, Phụ nữ, MTT) cạnh nhau; RBAC phân quyền + báo cáo/cảnh báo qua email.' },
    ],
  },

  // ---------- INTERNAL SYSTEM: Social Lead Automation & CRM ----------
  'project-2': {
    type: 'system',
    accent: '#00ff88',
    label: 'Hệ thống nội bộ · CRM',
    tagline: 'Tự động thu lead từ Fanpage và quản trị khách hàng bằng AI CRM.',
    deviceNote: {
      web: 'Bàn làm việc: thanh icon trái, bảng Kanban pipeline ở giữa, danh sách lead nóng + chat AI bên phải.',
      mobile: 'App chốt lead: màn "Pipeline bán hàng" gồm số liệu từng cột, lead nóng và hộp thoại AI.',
    },
    screens: [
      { name: 'Pipeline bán hàng', kind: 'crm', desc: 'Kanban Mới → Đang chăm → Chốt, kéo-thả cập nhật tức thì.' },
      { name: 'Hồ sơ Lead', kind: 'crm-lead', desc: 'Thông tin, độ nóng, giá trị dự kiến & lịch sử tương tác của khách.' },
      { name: 'Hội thoại AI', kind: 'crm-chat', desc: 'AI auto-responder trả lời cá nhân hoá và gợi ý kịch bản dưới 5 giây.' },
      { name: 'Hiệu suất & Nguồn lead', kind: 'crm-stats', desc: 'Tỷ lệ chốt theo từng kênh: Facebook, Zalo, Hotline, Website.' },
    ],
    web: { kind: 'crm' },
    mobile: { kind: 'crm' },
    features: [
      { icon: Workflow, title: 'Pipeline Kéo-thả', zone: 'pipeline', desc: 'Kanban quản lý trạng thái lead: Mới → Đang chăm → Chốt. Kéo-thả cập nhật tức thì.' },
      { icon: Users, title: 'Danh sách Lead', zone: 'leads', desc: 'Lead từ quảng cáo đồng bộ real-time qua Meta Graph API, chấm điểm theo độ nóng.' },
      { icon: MessageSquare, title: 'AI Auto-Responder', zone: 'ai', desc: 'AI phân tích ngữ cảnh tin nhắn và trả lời cá nhân hoá dưới 5 giây, tăng tỷ lệ chốt.' },
      { icon: Bell, title: 'Cảnh báo & Nhắc hẹn', zone: 'nav', desc: 'Thông báo lead mới, nhắc lịch follow-up để không bỏ lỡ khách tiềm năng.' },
    ],
  },

  // ---------- INTERNAL SYSTEM: SPACE — ERP/CRM nội bộ MTT ----------
  'project-3': {
    type: 'system',
    accent: '#8b5cf6',
    label: 'Hệ thống nội bộ · SPACE ERP',
    tagline: 'Hệ thống ERP/CRM vận hành lõi (23 module) & Design System của Học viện Minh Trí Thành.',
    deviceNote: {
      web: 'Console vận hành: sidebar module bên trái, bảng dữ liệu đơn hàng ở giữa, luồng duyệt đa cấp bên phải.',
      mobile: 'App duyệt nhanh: màn "Đơn hàng" gồm chip module, danh sách đơn theo trạng thái và luồng phê duyệt.',
    },
    screens: [
      { name: 'Đơn hàng', kind: 'space', desc: 'Bảng đơn theo 7 trạng thái thanh toán, lọc nhanh theo 23 module.' },
      { name: 'Lịch coach 1-1', kind: 'space-calendar', desc: 'Lịch tuần theo chuyên gia: mỗi ca một màu, trạng thái Nháp/Hoàn thành/Quá hạn, đồng bộ Google Meet.', wide: true },
      { name: 'Chi tiết đơn & Thanh toán', kind: 'space-order', desc: 'Khách, sản phẩm, lịch thanh toán theo đợt & xác nhận chứng từ.' },
      { name: 'Duyệt tài chính đa cấp', kind: 'space-finance', desc: 'Ngân sách → PR/PO → duyệt Trưởng phòng → Kế toán → CFO → CEO.' },
      { name: 'Dashboard doanh thu', kind: 'space-bi', desc: 'Phễu chuyển đổi theo cấp sản phẩm CL → KT → NT → CNT → MAS → TRN.' },
    ],
    web: { kind: 'space' },
    mobile: { kind: 'space' },
    features: [
      { icon: Users, title: 'Phân hệ Khách hàng (CRM)', zone: 'board', desc: 'Luồng CRM: data nguồn → phân chia NVKD → tương tác → cơ hội → đơn hàng, quản lý tập trung.' },
      { icon: CreditCard, title: 'Đơn hàng & Tài chính', zone: 'team', desc: 'Đơn 7 trạng thái, cọc/chuyển đổi; tài chính Ngân sách → PR/PO → phiếu chi, duyệt đa cấp.' },
      { icon: Layers, title: 'CRM Design System', zone: 'nav', desc: 'Chuẩn hoá Component/Variant (692 ảnh Figma / 14 module) đảm bảo 100% nhất quán toàn hệ.' },
      { icon: Cpu, title: 'AI Design Automation', zone: 'ai', desc: 'Bộ Design Rules để AI sinh thiết kế bám sát SRS, tăng tốc handoff Design → FE gấp 2 lần.' },
    ],
  },

  // ---------- LANDING: Academy course (light · mint) ----------
  'landing-academy': {
    type: 'landing',
    accent: '#10b981',
    label: 'Landing · Giáo dục',
    tagline: 'Landing tuyển sinh khoá học — nền sáng, tươi, chuyển đổi cao.',
    template: 'course',
    theme: { mode: 'light', bg: '#eff9f2', surface: '#ffffff', text: '#0c3b2c', sub: '#4c6b60', line: 'rgba(12,59,44,.10)', accent: '#10b981', accent2: '#0891b2', display: "'Outfit', system-ui, sans-serif", body: "'Plus Jakarta Sans', system-ui, sans-serif" },
    web: { kind: 'lp-course' },
    mobile: { kind: 'lp-course' },
    landing: {
      brand: 'MTT Academy',
      nav: ['Lộ trình', 'Học phí', 'Mentor', 'Đăng ký'],
      hero: {
        badge: 'Khai giảng khoá 2026',
        title: 'Trở thành Product Designer trong 6 tháng',
        subtitle: 'Lộ trình thực chiến từ UI/UX nền tảng đến tư duy sản phẩm & ứng dụng AI, kèm mentor 1:1 và dự án thật cho portfolio.',
        ctaPrimary: 'Đăng ký học thử miễn phí',
        ctaSecondary: 'Xem lộ trình',
      },
      stats: [
        { num: '2.400+', label: 'Học viên tốt nghiệp' },
        { num: '92%', label: 'Có việc sau 3 tháng' },
        { num: '4.9/5', label: 'Đánh giá học viên' },
        { num: '30+', label: 'Doanh nghiệp tuyển' },
      ],
      features: [
        { icon: GraduationCap, title: 'Lộ trình cá nhân hoá', desc: 'Bài học điều chỉnh theo tốc độ và mục tiêu nghề nghiệp của từng học viên.' },
        { icon: Users, title: 'Mentor 1:1', desc: 'Kèm cặp trực tiếp bởi Product Designer đang làm sản phẩm thật.' },
        { icon: Sparkles, title: 'Ứng dụng AI', desc: 'Học cách dùng Gemini/Claude tăng tốc quy trình thiết kế.' },
        { icon: ShieldCheck, title: 'Cam kết đầu ra', desc: 'Hỗ trợ portfolio & giới thiệu việc làm đến mạng lưới doanh nghiệp.' },
      ],
      steps: [
        { step: '01', title: 'Nền tảng UI/UX', desc: 'Figma, Auto Layout, Component & nguyên lý thị giác.' },
        { step: '02', title: 'Tư duy sản phẩm', desc: 'User research, flow, wireframe đến prototype tương tác.' },
        { step: '03', title: 'Dự án thực chiến', desc: 'Làm sản phẩm thật cùng mentor, build portfolio ấn tượng.' },
      ],
      pricing: {
        price: '9.900.000đ', old: '14.900.000đ', note: 'Ưu đãi 30 suất khai giảng sớm',
        installment: '1.750.000đ × 6 tháng', formats: ['Trả 1 lần', 'Trả góp'],
        perks: ['48 buổi học thực chiến', 'Mentor 1:1 trọn khoá', 'Cộng đồng học viên trọn đời', 'Chứng chỉ & hỗ trợ việc làm'],
      },
      testimonial: { quote: 'Sau khoá học mình nhận được offer Product Designer chỉ sau 2 tháng. Lộ trình cực kỳ thực tế!', name: 'Minh Anh', role: 'Product Designer @ Fintech' },
    },
  },

  // ---------- LANDING: Tech event (dark · cyber) ----------
  'landing-event': {
    type: 'landing',
    accent: '#22d3ee',
    label: 'Landing · Sự kiện',
    tagline: 'Landing sự kiện công nghệ — nền tối cyber, countdown, agenda & vé.',
    template: 'event',
    theme: { mode: 'dark', bg: '#05060f', surface: 'rgba(255,255,255,.04)', text: '#eaf2ff', sub: '#9aa4c4', line: 'rgba(255,255,255,.10)', accent: '#22d3ee', accent2: '#a855f7', display: "'Space Grotesk', system-ui, sans-serif", body: "'Space Grotesk', system-ui, sans-serif" },
    web: { kind: 'lp-event' },
    mobile: { kind: 'lp-event' },
    landing: {
      brand: 'TechSummit 2026',
      nav: ['Lịch trình', 'Diễn giả', 'Vé', 'Địa điểm'],
      hero: {
        badge: '20.09.2026 · Trung tâm HN',
        title: 'Nơi Sản phẩm gặp Trí tuệ nhân tạo',
        subtitle: 'Một ngày cùng 40+ diễn giả hàng đầu về Product, Design & AI — networking với 2.000+ người làm sản phẩm.',
        ctaPrimary: 'Nhận vé Early Bird',
        ctaSecondary: 'Xem lịch trình',
      },
      countdown: [{ n: '68', l: 'Ngày' }, { n: '14', l: 'Giờ' }, { n: '52', l: 'Phút' }, { n: '09', l: 'Giây' }],
      stats: [
        { num: '40+', label: 'Diễn giả' },
        { num: '2.000+', label: 'Khách tham dự' },
        { num: '12', label: 'Workshop' },
        { num: '8h', label: 'Trải nghiệm' },
      ],
      agenda: [
        { time: '09:00', title: 'Keynote mở màn', desc: 'Bức tranh toàn cảnh Product × AI năm 2026.' },
        { time: '11:00', title: 'Panel: Thiết kế thời AI', desc: 'Vai trò của Designer khi AI làm được nhiều việc hơn.' },
        { time: '13:30', title: 'Workshop song song', desc: 'Chọn track Design, AI hoặc Growth theo sở thích.' },
        { time: '18:00', title: 'Networking Party', desc: 'Giao lưu, kết nối cùng cộng đồng và diễn giả.' },
      ],
      speakers: [
        { name: 'Lê Hoàng', role: 'Head of Product · Fintech', tag: 'AI' },
        { name: 'Trần Mai', role: 'Design Lead · E-commerce', tag: 'Design' },
        { name: 'Nguyễn Sơn', role: 'Founder · SaaS', tag: 'Growth' },
        { name: 'Phạm Vy', role: 'AI Researcher', tag: 'Keynote' },
      ],
      tickets: [
        { name: 'Standard', price: '590K', note: 'Early Bird', perks: ['Vé cả ngày', 'Tài liệu số', 'Coffee break'] },
        { name: 'Pro', price: '1.290K', featured: true, note: 'Bán chạy', perks: ['Tất cả vé Standard', 'Chọn 2 workshop', 'Networking Party', 'Quà tặng độc quyền'] },
        { name: 'VIP', price: '2.490K', note: 'Giới hạn 50', perks: ['Tất cả vé Pro', 'Ghế hàng đầu', 'Dinner với diễn giả'] },
      ],
      testimonial: { quote: 'Sự kiện chỉn chu, nội dung chất và networking cực kỳ giá trị. Hẹn gặp năm sau!', name: 'Quốc Huy', role: 'Founder @ SaaS Startup' },
    },
  },

  // ---------- LANDING: SaaS product (dark · indigo) ----------
  'landing-saas': {
    type: 'landing',
    accent: '#7c6cff',
    label: 'Landing · SaaS',
    tagline: 'Landing sản phẩm SaaS — nền tối indigo, tính năng, tích hợp & bảng giá.',
    template: 'saas',
    theme: { mode: 'dark', bg: '#0a0a18', surface: 'rgba(255,255,255,.035)', text: '#eef0ff', sub: '#9aa0c6', line: 'rgba(255,255,255,.09)', accent: '#7c6cff', accent2: '#22d3ee', display: "'Space Grotesk', system-ui, sans-serif", body: "'Plus Jakarta Sans', system-ui, sans-serif" },
    web: { kind: 'lp-saas' },
    mobile: { kind: 'lp-saas' },
    landing: {
      brand: 'FlowSpace',
      nav: ['Tính năng', 'Tích hợp', 'Bảng giá', 'Dùng thử'],
      hero: {
        badge: 'Ra mắt bản 2.0',
        title: 'Quản lý công việc nhóm, gọn trong một FlowSpace',
        subtitle: 'Nền tảng quản trị dự án tối giản, tự động hoá quy trình bằng AI để đội nhóm tập trung vào việc quan trọng nhất.',
        ctaPrimary: 'Dùng thử miễn phí',
        ctaSecondary: 'Xem demo sản phẩm',
      },
      stats: [
        { num: '12k+', label: 'Đội nhóm tin dùng' },
        { num: '99.9%', label: 'Uptime' },
        { num: '3x', label: 'Tăng năng suất' },
        { num: '4.8/5', label: 'Trên App Store' },
      ],
      features: [
        { icon: Kanban, title: 'Bảng linh hoạt', desc: 'Kanban, list, lịch — xem công việc theo cách phù hợp nhất với nhóm.' },
        { icon: Bot, title: 'Tự động hoá AI', desc: 'AI tóm tắt tiến độ, gợi ý ưu tiên và tự phân bổ công việc.' },
        { icon: Zap, title: 'Tích hợp tức thì', desc: 'Kết nối Slack, Google, GitHub và 50+ công cụ chỉ trong vài cú click.' },
        { icon: ShieldCheck, title: 'Bảo mật doanh nghiệp', desc: 'SSO, phân quyền chi tiết và mã hoá dữ liệu đầu-cuối.' },
      ],
      integrations: ['Slack', 'Google', 'GitHub', 'Figma', 'Notion', 'Zapier', 'Zalo', 'Jira'],
      pricingTiers: [
        { name: 'Free', price: '0đ', priceYear: '0đ', note: 'Nhóm tới 5 người', perks: ['Không giới hạn dự án', 'AI tóm tắt hằng ngày', '3 tích hợp'] },
        { name: 'Pro', price: '129K', priceYear: '103K', unit: '/user/tháng', featured: true, note: 'Phổ biến', perks: ['Mọi tính năng Free', 'Tích hợp 50+ công cụ', 'Tự động hoá không giới hạn', 'Hỗ trợ ưu tiên'] },
        { name: 'Enterprise', price: 'Liên hệ', priceYear: 'Liên hệ', note: 'Doanh nghiệp', perks: ['SSO & SAML', 'Bảo mật nâng cao', 'Account manager riêng'] },
      ],
      testimonial: { quote: 'FlowSpace giúp team mình cắt 40% thời gian họp và mọi người luôn biết cần làm gì tiếp theo.', name: 'Thu Trang', role: 'Operations Lead @ Agency' },
    },
  },

  // ---------- LANDING: Restaurant / F&B (light · warm serif) ----------
  'landing-fnb': {
    type: 'landing',
    accent: '#c2410c',
    label: 'Landing · Nhà hàng',
    tagline: 'Landing nhà hàng — nền kem ấm, serif sang, menu & đặt bàn.',
    template: 'menu',
    theme: { mode: 'light', bg: '#faf4ea', surface: '#fffdf7', text: '#2c1c10', sub: '#7c6650', line: 'rgba(44,28,16,.12)', accent: '#c2410c', accent2: '#4d7c0f', display: "'Playfair Display', Georgia, serif", body: "'Plus Jakarta Sans', system-ui, sans-serif" },
    web: { kind: 'lp-menu' },
    mobile: { kind: 'lp-menu' },
    landing: {
      brand: 'Mộc — Bếp Việt',
      nav: ['Thực đơn', 'Không gian', 'Đặt bàn', 'Liên hệ'],
      hero: {
        badge: 'Ẩm thực Việt đương đại',
        title: 'Hương vị quê nhà, bày biện tinh tế',
        subtitle: 'Nhà hàng Mộc mang những món ăn Việt truyền thống trở lại trong một không gian ấm cúng, nguyên liệu tươi theo mùa.',
        ctaPrimary: 'Đặt bàn ngay',
        ctaSecondary: 'Xem thực đơn',
      },
      stats: [
        { num: '12', label: 'Năm phục vụ' },
        { num: '80+', label: 'Món trong menu' },
        { num: '4.9★', label: 'Trên Google' },
        { num: '200', label: 'Chỗ ngồi' },
      ],
      categories: ['Tất cả', 'Món chính', 'Khai vị', 'Tráng miệng'],
      dishes: [
        { name: 'Cá kho tộ', price: '145K', desc: 'Cá basa kho nước dừa, tiêu xanh, kho tay trong tộ đất giữ trọn vị đậm đà quê nhà.', tag: 'Best seller', cat: 'Món chính', emoji: '🐟', rating: 4.9, gallery: ['🐟', '🍚', '🌶️'], specs: [{ label: 'Khẩu phần', value: '2 – 3 người' }, { label: 'Vị', value: 'Đậm đà' }, { label: 'Ăn kèm', value: 'Cơm trắng' }] },
        { name: 'Sườn nướng mật ong', price: '169K', desc: 'Sườn non ướp mật ong 12 giờ, nướng than hoa thơm lừng, ngoài cháy cạnh trong mềm ngọt.', tag: 'Signature', cat: 'Món chính', emoji: '🍖', rating: 4.8, gallery: ['🍖', '🔥', '🍯'], specs: [{ label: 'Khẩu phần', value: '1 – 2 người' }, { label: 'Chế biến', value: 'Nướng than hoa' }, { label: 'Ướp', value: '12 giờ' }] },
        { name: 'Bò lúc lắc', price: '189K', desc: 'Thăn bò mềm áp chảo lửa lớn, sốt tiêu đen cay nhẹ, ăn kèm khoai tây và xà lách.', tag: 'Hot', cat: 'Món chính', emoji: '🥩', rating: 4.8, gallery: ['🥩', '🧅', '🫑'], specs: [{ label: 'Khẩu phần', value: '2 người' }, { label: 'Độ chín', value: 'Vừa (medium)' }, { label: 'Sốt', value: 'Tiêu đen' }] },
        { name: 'Gỏi cuốn tôm thịt', price: '89K', desc: 'Tôm thịt tươi, rau thơm vườn nhà cuốn bánh tráng, chấm nước chấm đặc chế của Mộc.', tag: 'Healthy', cat: 'Khai vị', emoji: '🥗', rating: 4.7, gallery: ['🥗', '🍤', '🌿'], specs: [{ label: 'Số cuốn', value: '4 cuốn' }, { label: 'Loại', value: 'Thanh mát' }, { label: 'Chấm', value: 'Nước chấm đặc chế' }] },
        { name: 'Chả giò hải sản', price: '99K', desc: 'Chả giò nhân tôm mực tươi, chiên vàng giòn rụm, vỏ mỏng không ngấy.', tag: '', cat: 'Khai vị', emoji: '🍤', rating: 4.7, gallery: ['🍤', '🦐', '🍋'], specs: [{ label: 'Số cuốn', value: '6 cuốn' }, { label: 'Chế biến', value: 'Chiên giòn' }, { label: 'Nhân', value: 'Tôm & mực' }] },
        { name: 'Chè khúc bạch', price: '45K', desc: 'Khúc bạch mềm mát, nước đường phèn thanh, rắc hạnh nhân lát — tráng miệng nhẹ nhàng.', tag: '', cat: 'Tráng miệng', emoji: '🍮', rating: 4.8, gallery: ['🍮', '🥛', '🍧'], specs: [{ label: 'Khẩu phần', value: '1 người' }, { label: 'Vị', value: 'Mát lạnh' }, { label: 'Topping', value: 'Hạnh nhân' }] },
      ],
      features: [
        { icon: Leaf, title: 'Nguyên liệu theo mùa', desc: 'Rau củ & hải sản tươi nhập mỗi sáng.' },
        { icon: ChefHat, title: 'Bếp trưởng 20 năm', desc: 'Công thức gia truyền, chuẩn vị Việt.' },
        { icon: Wine, title: 'Không gian ấm cúng', desc: 'Phù hợp gia đình, hẹn hò & tiếp khách.' },
      ],
      hours: [
        { d: 'Thứ 2 – Thứ 6', h: '10:00 – 22:00' },
        { d: 'Thứ 7 – CN', h: '09:00 – 23:00' },
      ],
      address: '68 Hàng Bún, Ba Đình, Hà Nội',
      testimonial: { quote: 'Món ăn chuẩn vị nhà làm, không gian ấm cúng. Địa chỉ ruột của gia đình mình mỗi cuối tuần.', name: 'Chị Lan Hương', role: 'Khách quen 5 năm' },
    },
  },

  // ---------- LANDING: Fashion / E-commerce (light · editorial) ----------
  'landing-shop': {
    type: 'landing',
    accent: '#ff2d6b',
    label: 'Landing · Thời trang',
    tagline: 'Landing thời trang/TMĐT — editorial trắng-đen, lookbook & sản phẩm.',
    template: 'shop',
    theme: { mode: 'light', bg: '#ffffff', surface: '#f5f5f5', text: '#0a0a0a', sub: '#6b6b6b', line: 'rgba(10,10,10,.12)', accent: '#ff2d6b', accent2: '#111111', display: "'Space Grotesk', system-ui, sans-serif", body: "'Plus Jakarta Sans', system-ui, sans-serif" },
    web: { kind: 'lp-shop' },
    mobile: { kind: 'lp-shop' },
    landing: {
      brand: 'LUXE',
      nav: ['Mới về', 'Bộ sưu tập', 'Sale', 'Giỏ hàng'],
      hero: {
        badge: 'Bộ sưu tập Thu / Đông 2026',
        title: 'Định hình phong cách của riêng bạn',
        subtitle: 'Thời trang tối giản, chất liệu cao cấp, phom dáng tôn dáng. Miễn phí giao hàng & đổi trả trong 30 ngày.',
        ctaPrimary: 'Mua ngay',
        ctaSecondary: 'Xem lookbook',
      },
      stats: [
        { num: '150K+', label: 'Khách hàng' },
        { num: '4.8★', label: 'Đánh giá' },
        { num: '30 ngày', label: 'Đổi trả' },
        { num: '0đ', label: 'Freeship' },
      ],
      collections: ['Tất cả', 'Áo khoác', 'Đầm', 'Denim', 'Phụ kiện'],
      products: [
        {
          name: 'Áo blazer oversize', price: '890K', old: '1.190K', tag: 'New', col: 'Áo khoác', emoji: '🧥',
          rating: 4.8, sold: '1.2k', gallery: ['🧥', '🧵', '📐'],
          desc: 'Blazer phom oversize thanh lịch, chất tuyết mưa co giãn nhẹ, lót lụa mát. Dễ phối từ công sở đến dạo phố cuối tuần.',
          sizes: ['S', 'M', 'L', 'XL'], colors: [{ name: 'Be', hex: '#d9c7a8' }, { name: 'Đen', hex: '#1c1c1c' }, { name: 'Xám', hex: '#8f8f8f' }],
          specs: [{ label: 'Chất liệu', value: 'Tuyết mưa cao cấp' }, { label: 'Lót', value: 'Lụa mềm' }, { label: 'Xuất xứ', value: 'Việt Nam' }],
          bullets: ['Phom oversize tôn dáng', 'Vải không nhăn, giữ form', 'Giặt máy chế độ nhẹ'],
        },
        {
          name: 'Đầm lụa midi', price: '1.290K', tag: 'Hot', col: 'Đầm', emoji: '👗',
          rating: 4.9, sold: '890', gallery: ['👗', '🌸', '✨'],
          desc: 'Đầm lụa dáng midi mềm mại, tôn đường cong, phù hợp tiệc tối và sự kiện. Chất lụa tơ đổ dáng đẹp, mát tay.',
          sizes: ['S', 'M', 'L'], colors: [{ name: 'Đỏ đô', hex: '#7c1d3a' }, { name: 'Xanh rêu', hex: '#3f5f4a' }, { name: 'Kem', hex: '#efe6d6' }],
          specs: [{ label: 'Chất liệu', value: 'Lụa tơ' }, { label: 'Dáng', value: 'Midi ôm nhẹ' }, { label: 'Xuất xứ', value: 'Việt Nam' }],
          bullets: ['Lụa đổ dáng sang trọng', 'Có lớp lót lịch sự', 'Giặt khô để bền màu'],
        },
        {
          name: 'Quần jeans ống suông', price: '650K', tag: '', col: 'Denim', emoji: '👖',
          rating: 4.7, sold: '2.1k', gallery: ['👖', '🧵', '🪡'],
          desc: 'Jeans ống suông lưng cao, tôn chân dài, chất denim dày dặn ít giãn. Item cơ bản dễ mặc quanh năm.',
          sizes: ['26', '27', '28', '29', '30'], colors: [{ name: 'Xanh nhạt', hex: '#9db4d0' }, { name: 'Xanh đậm', hex: '#2f4964' }, { name: 'Đen', hex: '#222' }],
          specs: [{ label: 'Chất liệu', value: 'Denim cotton 98%' }, { label: 'Dáng', value: 'Ống suông lưng cao' }, { label: 'Xuất xứ', value: 'Việt Nam' }],
          bullets: ['Denim dày, đứng form', 'Lưng cao tôn dáng', 'Đường may chắc chắn'],
        },
        {
          name: 'Áo len cashmere', price: '990K', old: '1.240K', tag: '-20%', col: 'Áo khoác', emoji: '🧶',
          rating: 4.9, sold: '760', gallery: ['🧶', '🐑', '❄️'],
          desc: 'Áo len cashmere mềm mịn, giữ ấm nhẹ mà không bí. Sợi len cao cấp không xù lông, ôm nhẹ vừa vặn.',
          sizes: ['Freesize'], colors: [{ name: 'Ghi', hex: '#b9b3aa' }, { name: 'Nâu', hex: '#6b5140' }, { name: 'Trắng', hex: '#f3f0ea' }],
          specs: [{ label: 'Chất liệu', value: 'Cashmere blend' }, { label: 'Độ dày', value: 'Vừa, 3 mùa' }, { label: 'Xuất xứ', value: 'Nhập khẩu' }],
          bullets: ['Mềm mịn, không ngứa', 'Giữ ấm nhẹ nhàng', 'Ít xù lông theo thời gian'],
        },
        {
          name: 'Túi da tối giản', price: '1.490K', tag: 'New', col: 'Phụ kiện', emoji: '👜',
          rating: 4.8, sold: '540', gallery: ['👜', '🧳', '🔑'],
          desc: 'Túi da thật dáng tối giản, đủ đựng laptop 13" và vật dụng hằng ngày. Khoá kim loại chắc, dây đeo điều chỉnh.',
          sizes: [], colors: [{ name: 'Nâu bò', hex: '#7a4b2b' }, { name: 'Đen', hex: '#1a1a1a' }, { name: 'Kem', hex: '#e7ddcc' }],
          specs: [{ label: 'Chất liệu', value: 'Da bò thật' }, { label: 'Sức chứa', value: 'Laptop 13"' }, { label: 'Bảo hành', value: '12 tháng' }],
          bullets: ['Da thật, càng dùng càng đẹp', 'Ngăn chống sốc cho laptop', 'Dây đeo tháo rời'],
        },
        {
          name: 'Kính mắt vintage', price: '450K', tag: '', col: 'Phụ kiện', emoji: '🕶️',
          rating: 4.6, sold: '1.5k', gallery: ['🕶️', '👓', '🔎'],
          desc: 'Gọng kính acetate phong cách vintage, tròng chống tia UV400. Nhẹ, ôm mặt, kèm hộp và khăn lau.',
          sizes: [], colors: [{ name: 'Nâu rùa', hex: '#5a3c24' }, { name: 'Đen', hex: '#151515' }],
          specs: [{ label: 'Gọng', value: 'Acetate cao cấp' }, { label: 'Tròng', value: 'Chống UV400' }, { label: 'Phụ kiện', value: 'Hộp + khăn lau' }],
          bullets: ['Chống tia UV có hại', 'Gọng nhẹ, ôm mặt', 'Tặng kèm hộp bảo quản'],
        },
      ],
      features: [
        { icon: Truck, title: 'Giao hàng miễn phí', desc: 'Toàn quốc cho đơn từ 500K.' },
        { icon: BadgePercent, title: 'Đổi trả 30 ngày', desc: 'Không hài lòng, hoàn tiền 100%.' },
        { icon: ShieldCheck, title: 'Chính hãng 100%', desc: 'Cam kết chất liệu & nguồn gốc rõ ràng.' },
        { icon: Ruler, title: 'Tư vấn size', desc: 'Stylist hỗ trợ chọn phom chuẩn dáng.' },
      ],
      promo: { title: 'FLASH SALE cuối tuần', desc: 'Giảm đến 40% cho bộ sưu tập mới — chỉ trong 48 giờ.', cta: 'Săn sale ngay' },
      testimonial: { quote: 'Chất vải xịn, phom cực tôn dáng và giao hàng nhanh. Đã mua lại lần thứ 5!', name: 'Ngọc Anh', role: 'Khách hàng thân thiết' },
    },
  },

  // ---------- LANDING: Spa / Beauty (light · soft pastel) ----------
  'landing-spa': {
    type: 'landing',
    accent: '#a6715a',
    label: 'Landing · Spa',
    tagline: 'Landing spa/làm đẹp — pastel mềm mại, dịch vụ, liệu trình & đặt lịch.',
    template: 'spa',
    theme: { mode: 'light', bg: '#f4efe8', surface: '#fffdfb', text: '#3f3a33', sub: '#8b8478', line: 'rgba(63,58,51,.12)', accent: '#a6715a', accent2: '#8fa389', display: "'Cormorant Garamond', Georgia, serif", body: "'Plus Jakarta Sans', system-ui, sans-serif" },
    web: { kind: 'lp-spa' },
    mobile: { kind: 'lp-spa' },
    landing: {
      brand: 'Lụa Spa',
      nav: ['Dịch vụ', 'Liệu trình', 'Bảng giá', 'Đặt lịch'],
      hero: {
        badge: 'Không gian trị liệu an yên',
        title: 'Tái tạo vẻ đẹp, nuôi dưỡng an nhiên',
        subtitle: 'Liệu trình chăm sóc da & thư giãn chuẩn spa cao cấp, sản phẩm thiên nhiên lành tính, đội ngũ kỹ thuật viên tận tâm.',
        ctaPrimary: 'Đặt lịch hẹn',
        ctaSecondary: 'Khám phá dịch vụ',
      },
      stats: [
        { num: '9', label: 'Năm kinh nghiệm' },
        { num: '15K+', label: 'Khách hài lòng' },
        { num: '4.9★', label: 'Đánh giá' },
        { num: '100%', label: 'Thiên nhiên' },
      ],
      services: [
        { name: 'Chăm sóc da chuyên sâu', price: '450K', dur: '75 phút', desc: 'Quy trình làm sạch sâu, thải độc và cấp ẩm phục hồi bằng sản phẩm thiên nhiên, trả lại làn da căng mịn.', emoji: '🧖', rating: 4.9, gallery: ['🧖', '🌿', '💧'], specs: [{ label: 'Thời lượng', value: '75 phút' }, { label: 'Phù hợp', value: 'Mọi loại da' }, { label: 'Quy trình', value: 'Làm sạch → Thải độc → Cấp ẩm' }], bullets: ['Sản phẩm thiên nhiên lành tính', 'Se khít lỗ chân lông', 'Da sáng mịn ngay sau buổi đầu'] },
        { name: 'Massage đá nóng', price: '520K', dur: '90 phút', desc: 'Đá bazan giữ nhiệt kết hợp kỹ thuật massage giãn cơ sâu, giải toả căng thẳng và lưu thông khí huyết.', emoji: '🪨', rating: 4.9, gallery: ['🪨', '🔥', '💆'], specs: [{ label: 'Thời lượng', value: '90 phút' }, { label: 'Phù hợp', value: 'Người hay căng cơ' }, { label: 'Vùng', value: 'Toàn thân' }], bullets: ['Đá bazan giữ nhiệt ổn định', 'Giãn cơ sâu, giảm mệt mỏi', 'Thư giãn tối đa'] },
        { name: 'Trị liệu vai gáy', price: '380K', dur: '60 phút', desc: 'Bấm huyệt và trị liệu vùng vai – gáy – lưng, giảm đau mỏi cho dân văn phòng ngồi nhiều.', emoji: '💆', rating: 4.8, gallery: ['💆', '🌀', '🌿'], specs: [{ label: 'Thời lượng', value: '60 phút' }, { label: 'Phù hợp', value: 'Dân văn phòng' }, { label: 'Vùng', value: 'Vai – gáy – lưng' }], bullets: ['Giảm đau mỏi cổ vai gáy', 'Kỹ thuật bấm huyệt chuẩn', 'Thư giãn tức thì'] },
        { name: 'Gội đầu dưỡng sinh', price: '280K', dur: '50 phút', desc: 'Gội đầu thảo dược kết hợp bấm huyệt vùng đầu, thư thái tinh thần và cải thiện giấc ngủ.', emoji: '🌿', rating: 4.8, gallery: ['🌿', '🫧', '💆'], specs: [{ label: 'Thời lượng', value: '50 phút' }, { label: 'Phù hợp', value: 'Mọi đối tượng' }, { label: 'Thảo dược', value: 'Bưởi, sả, gừng' }], bullets: ['Bấm huyệt đầu thư thái', 'Thảo dược thiên nhiên', 'Giảm căng thẳng, dễ ngủ'] },
      ],
      packages: [
        { name: 'Gói Thư Giãn', price: '2.900K', note: 'Liệu trình 8 buổi', perks: ['Chăm sóc da cơ bản', 'Massage toàn thân', 'Tặng 1 buổi xông hơi'] },
        { name: 'Gói Tái Tạo', price: '5.500K', featured: true, note: 'Liệu trình 12 buổi', perks: ['Chăm sóc da chuyên sâu', 'Massage đá nóng', 'Trị liệu vai gáy', 'Quà tặng sản phẩm'] },
      ],
      features: [
        { icon: Leaf, title: 'Sản phẩm thiên nhiên', desc: 'Chiết xuất thực vật, lành tính cho mọi loại da.' },
        { icon: HeartHandshake, title: 'Kỹ thuật viên tận tâm', desc: 'Được đào tạo bài bản, chăm sóc chu đáo.' },
        { icon: Flower2, title: 'Không gian an yên', desc: 'Thiết kế tinh tế, hương thơm thư giãn.' },
      ],
      slots: ['09:00', '10:30', '14:00', '15:30', '17:00', '19:00'],
      testimonial: { quote: 'Da mình cải thiện rõ sau liệu trình, nhân viên nhẹ nhàng và không gian thư thái vô cùng.', name: 'Chị Thuỳ Dung', role: 'Khách hàng VIP' },
    },
  },
};

// Convenience helpers
export const getShowcase = (id) => showcases[id] || null;
