# ostad.cart-wallet

## Ostad Pay – وب‌سایت (public/)

- `public/index.html` – نمونه کارها (توکن‌لیست Ostad از GitHub)
- `public/pay.html` – درگاه پرداخت (USDT-BSC / USDT-Solana / BTC-Solana، تخفیف ۶۰٪ تتر، تأیید واریز، موجودی لحظه‌ای)

اجرای محلی: `npx serve public` یا `python3 -m http.server -d public 8080`

انتشار: با push به `main`، ورک‌فلو `pages.yml` پوشه `public/` را روی GitHub Pages منتشر می‌کند
(در Settings → Pages، گزینه Source را روی **GitHub Actions** بگذارید).