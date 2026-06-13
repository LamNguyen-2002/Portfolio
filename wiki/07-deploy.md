# 07 — Deploy · Đưa dự án lên Production

> Hướng dẫn đẩy code lên GitHub và deploy cả frontend + backend lên **Render** bằng một file blueprint [`render.yaml`](../render.yaml).

---

## 1. Tổng quan kiến trúc deploy

```
GitHub repo ──▶ Render Blueprint (render.yaml)
                  ├── portfolio-backend   (Web Service · Node/Express)  → API
                  └── portfolio-frontend  (Static Site · Vite build)    → UI
                         │ VITE_API_BASE = host của backend (tự nối)
                         ▼
                  Người dùng truy cập URL frontend
```

- **Backend** lắng nghe `process.env.PORT` (Render tự cấp), CORS mở để frontend gọi.
- **Frontend** build tĩnh; biến `VITE_API_BASE` được Render nối tới host backend lúc build (xem [`frontend/src/api.js`](../frontend/src/api.js)).

---

## 2. Bước 1 — Đẩy lên GitHub

```bash
# Tại thư mục gốc dự án (đã git init & commit sẵn)
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

> Tạo một repo **TRỐNG** trên github.com (không thêm README/.gitignore) để tránh xung đột khi push lần đầu.

---

## 3. Bước 2 — Deploy lên Render (Blueprint)

1. Đăng nhập [dashboard.render.com](https://dashboard.render.com).
2. **New → Blueprint** → chọn repo vừa push.
3. Render đọc [`render.yaml`](../render.yaml) và tạo **2 service**: `portfolio-backend` và `portfolio-frontend`.
4. Bấm **Apply**. Đợi build xong:
   - Backend: `https://portfolio-backend.onrender.com`
   - Frontend: `https://portfolio-frontend.onrender.com` ← link chia sẻ.

`JWT_SECRET` được Render sinh tự động; `VITE_API_BASE` tự trỏ tới backend.

---

## 4. ⚠️ Lưu ý về lưu trữ dữ liệu (quan trọng)

Backend ghi vào `db.json` (file). Trên **gói Free của Render**:
- Ổ đĩa là **tạm thời** → mọi thay đổi ở Admin (hồ sơ, dự án, avatar) sẽ **mất** khi service restart/redeploy/ngủ dậy.
- Web service free **ngủ** sau ~15 phút không dùng; request đầu tiên sau đó **cold start** chậm (~30–50s).

**Cách giữ dữ liệu vĩnh viễn (chọn 1):**
1. **Render Disk** (gói trả phí): bỏ comment khối `disk:` trong [`render.yaml`](../render.yaml), mount vào thư mục backend.
2. **DB ngoài**: chuyển lưu trữ từ `db.json` sang một database (vd MongoDB Atlas/Postgres) — thay phần `readDB/writeDB` trong `server.js`.

---

## 5. Phương án thay thế

| Nhu cầu | Gợi ý |
| :-- | :-- |
| Chỉ khoe giao diện nhanh | Deploy mỗi frontend lên **Vercel/Netlify**, đặt `VITE_API_BASE` trỏ tới backend riêng |
| Tách hosting | Frontend → Vercel, Backend → Render/Railway/Fly.io |
| Cần data bền | Render Disk (trả phí) hoặc DB ngoài (mục 4) |

---

## 6. Chạy lại ở local sau khi clone

```bash
# Terminal 1
cd backend && npm install && npm start      # http://localhost:5001
# Terminal 2
cd frontend && npm install && npm run dev    # http://localhost:5173
```
Local để `frontend/.env` trống (hoặc bỏ qua) → Vite tự proxy `/api` sang backend.
