// Trust & exchange badges section (appended before footer on every page)
(function () {
  const EXCHANGES = [
    ['Binance', 'binance.com', '#F3BA2F'], ['Coinbase', 'coinbase.com', '#1652F0'], ['Kraken', 'kraken.com', '#5741D9'],
    ['OKX', 'okx.com', '#ffffff'], ['Bybit', 'bybit.com', '#F7A600'], ['KuCoin', 'kucoin.com', '#23AF91'],
    ['Bitfinex', 'bitfinex.com', '#16B157'], ['Gate.io', 'gate.io', '#2354E6'], ['HTX', 'htx.com', '#0A9EE8'],
    ['Crypto.com', 'crypto.com', '#103F68'], ['Bitstamp', 'bitstamp.net', '#13B36C'], ['Gemini', 'gemini.com', '#00DCFA'],
  ];
  const SOL_SVG = `<svg viewBox="0 0 397.7 311.7" width="44" height="44"><defs><linearGradient id="sg" x1="360" y1="-30" x2="140" y2="340" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00FFA3"/><stop offset="1" stop-color="#DC1FFF"/></linearGradient></defs><path fill="url(#sg)" d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7zM64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8zM333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z"/></svg>`;
  const BNB_SVG = `<svg viewBox="0 0 32 32" width="44" height="44"><circle cx="16" cy="16" r="16" fill="#F3BA2F"/><path fill="#fff" d="M12.1 14.4L16 10.5l3.9 3.9 2.3-2.3L16 6l-6.2 6.2 2.3 2.2zM6 16l2.3-2.3L10.5 16l-2.3 2.3L6 16zm6.1 1.6L16 21.5l3.9-3.9 2.3 2.3L16 26l-6.2-6.2 2.3-2.2zm9.4-1.6l2.3-2.3L26 16l-2.3 2.3L21.5 16zm-3.2 0L16 13.7 14.3 15.4l-.3.3.3.3L16 18.3l2.3-2.3z"/></svg>`;
  const BADGES = [
    ['USDT', 'Tether – Ethereum · Tron · Solana · BSC', 'https://tether.to'],
    [SOL_SVG + '<b>SOLANA</b>', 'شبکه سولانا – USDT و BTC در سولانا', 'https://solana.com'],
    [BNB_SVG + '<b>BINANCE</b>', 'BNB Smart Chain – USDT (BEP-20)', 'https://www.bnbchain.org'],
    ['SEAL', 'گواهی ذخایر Tether (Attestation) – BDO', 'https://tether.to/en/transparency/'],
    ['SSL', 'ارتباط رمزنگاری‌شده TLS 1.3', '#'],
    ['24/7', 'پشتیبانی و تسویه شبانه‌روزی', '#'],
    ['P2P', 'پرداخت همتا به همتا – بدون واسطه', '#'],
    ['BSC', 'قراردادهای تأییدشده در BscScan', 'https://bscscan.com'],
  ];
  const css = `
  .trust{max-width:1100px;margin:30px auto 0;padding:0 20px}
  .trust h2{text-align:center;font-size:1.3rem;margin-bottom:6px;background:var(--gold);-webkit-background-clip:text;background-clip:text;color:transparent}
  .trust p{text-align:center;color:var(--muted);font-size:.85rem;margin-bottom:22px}
  .trust details{border:1px solid rgba(212,160,23,.45);border-radius:16px;background:rgba(0,0,0,.18)}
  .trust summary{cursor:pointer;list-style:none;display:flex;align-items:center;justify-content:space-between;padding:14px 18px;font-weight:700;color:var(--accent)}
  .trust summary::-webkit-details-marker{display:none}
  .trust summary::after{content:'▼';font-size:.7rem;transition:transform .25s}
  .trust details[open] summary::after{transform:rotate(180deg)}
  .trust .body{padding:6px 18px 18px;animation:drop .3s ease}
  @keyframes drop{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
  .holos{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-bottom:22px}
  .holo{position:relative;width:96px;height:96px;flex:0 0 96px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:8px;color:#3a0609;text-decoration:none;
    background:conic-gradient(from 0deg,#f9e58a,#d4a017,#fff3b0,#b8860b,#f9e58a,#c9a227,#fff8d6,#d4a017,#f9e58a);
    box-shadow:0 8px 24px rgba(0,0,0,.5),inset 0 0 0 4px rgba(122,20,32,.35),inset 0 0 30px rgba(255,255,255,.35);overflow:hidden;transition:transform .3s}
  .holo::before{content:'';position:absolute;inset:0;background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,.75) 50%,transparent 70%);transform:translateX(-100%);animation:shine 3.5s infinite}
  .holo::after{content:'';position:absolute;inset:6px;border-radius:50%;border:1.5px dashed rgba(122,20,32,.55)}
  .holo:hover{transform:scale(1.06) rotate(-2deg)}
  .holo svg{position:relative;width:26px;height:26px;margin-bottom:2px;filter:drop-shadow(0 2px 4px rgba(0,0,0,.35))}
  .holo b{font-size:.8rem;font-weight:800;letter-spacing:.5px;position:relative}
  .holo small{font-size:.5rem;line-height:1.3;margin-top:2px;position:relative;font-weight:600}
  @keyframes shine{0%{transform:translateX(-100%)}60%,100%{transform:translateX(100%)}}
  .exch{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}
  .exch a{display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:12px;text-decoration:none;color:var(--text);border:1px solid rgba(212,160,23,.45);background:linear-gradient(180deg,rgba(90,18,26,.95),rgba(60,10,16,.95));transition:.2s}
  .exch a:hover{border-color:var(--accent);transform:translateY(-3px)}
  .exch img{width:28px;height:28px;border-radius:6px;background:#fff;padding:2px}
  .exch span{font-weight:600;font-size:.9rem}
  .exch small{display:block;color:var(--muted);font-size:.7rem}
  .contact{max-width:1100px;margin:34px auto 0;padding:0 20px}
  .contact .box{border:1px solid rgba(212,160,23,.55);border-radius:18px;padding:22px;text-align:center;background:linear-gradient(180deg,rgba(90,18,26,.95),rgba(60,10,16,.95));box-shadow:0 8px 24px rgba(0,0,0,.4)}
  .contact h2{font-size:1.3rem;margin-bottom:6px;background:var(--gold);-webkit-background-clip:text;background-clip:text;color:transparent}
  .contact p{color:var(--muted);font-size:.85rem}
  .contact .links{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:14px}
  .contact .links a{display:inline-flex;align-items:center;gap:8px;padding:12px 22px;border-radius:12px;font-weight:700;text-decoration:none;transition:.2s}
  .contact .links a.primary{background:linear-gradient(135deg,#f9e58a,#d4a017);color:#2a0808}
  .contact .links a.ghost{border:1px solid var(--accent);color:var(--accent)}
  .contact .links a:hover{transform:translateY(-3px)}
  .verified{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--ok);margin-right:auto;box-shadow:0 0 8px var(--ok)}
  `;
  const style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);
  const sec = document.createElement('section'); sec.className = 'trust';
  sec.innerHTML = `
    <details>
      <summary><span>اعتبار و اعتماد – هولوگرام‌ها و صرافی‌های معتبر</span></summary>
      <div class="body">
        <p>تتر (USDT) در همه صرافی‌های معتبر جهان معامله می‌شود و ذخایر آن به‌صورت دوره‌ای گواهی می‌گردد</p>
        <div class="holos">${BADGES.map(([t,d,u])=>`<a class="holo" href="${u}" target="_blank" rel="noopener" title="${d}">${t.startsWith('<')?t:`<b>${t}</b>`}<small>${d}</small></a>`).join('')}</div>
        <p>صرافی‌های معتبر پشتیبان تتر</p>
        <div class="exch">${EXCHANGES.map(([n,d])=>`<a href="https://${d}" target="_blank" rel="noopener"><img src="https://www.google.com/s2/favicons?domain=${d}&sz=64" alt="${n}"><div><span>${n}</span><small>${d}</small></div><i class="verified"></i></a>`).join('')}</div>
      </div>
    </details>`;
  const contact = document.createElement('section'); contact.className = 'contact';
  contact.innerHTML = `<div class="box">
    <h2>پل ارتباطی مستقیم با استاد</h2>
    <p>پلتفرم رسمی استاد و پشتیبانی مستقیم – برای خرید، پیگیری سفارش و همکاری</p>
    <div class="links">
      <a class="primary" href="https://ostad001bit.lovable.app" target="_blank" rel="noopener">🏛 پلتفرم استاد – ostad001bit.lovable.app</a>
      <a class="ghost" href="mailto:iran000bit@gmail.com?subject=Ostad%20Pay">✉ iran000bit@gmail.com</a>
    </div></div>`;
  const footer = document.querySelector('footer');
  footer ? footer.before(sec, contact) : document.body.append(sec, contact);
})();
