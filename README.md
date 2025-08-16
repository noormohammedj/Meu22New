# meu22 — Women Tailored Boutique (React + Firebase + Razorpay)

Myntra-style, boutique-specific storefront for bespoke women's dresses: wedding gowns, aari work, mother & daughter duo, maternity.

## Features
- Catalog with the four signature categories
- Product detail page with sizes (bespoke friendly)
- Cart, Login (Firebase Auth), Profile
- Checkout with Razorpay (server for order creation)
- Tailwind styling, responsive UI

## Quick Start

### 1) Firebase (easy, no backend coding)
- Create a Firebase project.
- Enable **Authentication → Google**.
- Enable **Firestore** (in test mode for dev) and **Storage**.
- Copy your config to `frontend/.env` (see `.env.example`).

### 2) Razorpay
- Create a Razorpay account (test mode).
- Copy `key_id` and `key_secret` to `server/.env` (see example).
- Update `frontend/.env` with `VITE_RAZORPAY_KEY_ID` and `VITE_SERVER_BASE` (server URL).

### 3) Run the server (order creation)
```bash
cd server
cp .env.example .env  # fill values
npm install
npm start
```
By default runs on http://localhost:8080

### 4) Run the frontend
```bash
cd frontend
cp .env.example .env   # fill Firebase + Razorpay key + server base
npm install
npm run dev
```
Open the printed local URL.

### 5) Build for production
```bash
cd frontend
npm run build
```
- Deploy `frontend/dist` to Netlify/Vercel or any static host.
- Deploy `server/` to Render/Railway/Fly.io (or Firebase Functions with minor changes).

## Notes
- All images are placeholders you can replace in `frontend/public/assets/`.
- Product data lives in `frontend/src/data/products.json`.
- For boutique flow, fittings & alterations are included and highlighted.
- This is structured to be clear for non-developers: edit JSON, swap images, update `.env` files.

---
Made with ❤️ for meu22.
