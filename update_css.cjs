const fs = require('fs');
let content = fs.readFileSync('src/mahir.css', 'utf8');

// 1. Remove all .scroll-dark-section.is-dark rules
content = content.replace(/\.scroll-dark-section\.is-dark[\s\S]*?\{[\s\S]*?\}/g, '');

// 2. Change floating nav to white
content = content.replace(
  /background: #000; border: 1px solid rgba\(255,255,255,0\.12\);/g,
  'background: #fff; border: 1px solid rgba(0,0,0,0.12);'
);
content = content.replace(
  /box-shadow: 0 10px 30px -12px rgba\(0,0,0,0\.6\), 0 1px 0 rgba\(255,255,255,0\.05\) inset;/g,
  'box-shadow: 0 10px 30px -12px rgba(0,0,0,0.1), 0 1px 0 rgba(0,0,0,0.02) inset;'
);

// 3. Change Nav links text color
content = content.replace(
  /\.nav-link \{ color: rgba\(255,255,255,0\.75\);/g,
  '.nav-link { color: rgba(0,0,0,0.75);'
);
content = content.replace(
  /\.nav-link:hover \{ color: #fff;/g,
  '.nav-link:hover { color: #000;'
);
// Nav action btn (the "Book Consult" pill)
content = content.replace(
  /\.nav-action \{ background: #fff; color: #000;/g,
  '.nav-action { background: #000; color: #fff;'
);

// 4. Abstract panels and tags (remove bluish)
content = content.replace(
  /background: linear-gradient\(150deg, #0B1220 0%, #14265C 55%, #0B1220 100%\) !important;/g,
  'background: #FAFAF9 !important; border: 1px solid rgba(0,0,0,0.08);'
);
content = content.replace(
  /background: rgba\(11,18,32,0\.85\) !important; color: #ffffff !important;/g,
  'background: rgba(255,255,255,0.85) !important; color: #111 !important;'
);
content = content.replace(
  /border: 1px solid rgba\(255,255,255,0\.14\) !important;/g,
  'border: 1px solid rgba(0,0,0,0.14) !important;'
);

// 5. Scrim gradients
content = content.replace(
  /background: linear-gradient\(180deg, rgba\(11,18,32,\.55\) 0%, rgba\(11,18,32,\.35\) 45%, rgba\(11,18,32,\.9\) 100%\) !important;/g,
  'background: linear-gradient(180deg, rgba(250,250,249,.55) 0%, rgba(250,250,249,.35) 45%, rgba(250,250,249,.9) 100%) !important;'
);
content = content.replace(
  /background: linear-gradient\(180deg, transparent 40%, rgba\(11,18,32,1\) 100%\);/g,
  'background: linear-gradient(180deg, transparent 40%, rgba(250,250,249,1) 100%);'
);

// 6. Invert the nav chip logo since it's on a white background now (it was on black before, so we just add filter: invert(1))
content = content.replace(
  /\.nav-logo-chip img \{ height: 100%; width: auto; \}/g,
  '.nav-logo-chip img { height: 100%; width: auto; filter: invert(1); }'
);

// 7. Footer colors
content = content.replace(
  /footer \.text-white\\\/45, footer \.text-white\\\/35, footer \.text-white\\\/30, footer \.text-white\\\/18 \{ color: rgba\(255,255,255,0\.7\) !important; \}/g,
  'footer .text-white\\/45, footer .text-white\\/35, footer .text-white\\/30, footer .text-white\\/18 { color: rgba(0,0,0,0.7) !important; }'
);

fs.writeFileSync('src/mahir.css', content);
console.log('CSS updated');
