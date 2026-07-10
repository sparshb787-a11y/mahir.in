const fs = require('fs');
let content = fs.readFileSync('src/components/site-chrome.tsx', 'utf8');

// Update navbar background
content = content.replace(
  /background: #000;/g,
  'background: #fff;'
);
content = content.replace(
  /border: 1px solid rgba\(255,255,255,0\.12\);/g,
  'border: 1px solid rgba(0,0,0,0.12);'
);
content = content.replace(
  /box-shadow: 0 10px 30px -12px rgba\(0,0,0,0\.6\), 0 1px 0 rgba\(255,255,255,0\.05\) inset;/g,
  'box-shadow: 0 10px 30px -12px rgba(0,0,0,0.1), 0 1px 0 rgba(0,0,0,0.02) inset;'
);

// Nav links color
content = content.replace(
  /color: rgba\(255,255,255,0\.85\) !important;/g,
  'color: rgba(0,0,0,0.85) !important;'
);
content = content.replace(
  /color: rgba\(255,255,255,0\.75\) !important;/g,
  'color: rgba(0,0,0,0.75) !important;'
);
content = content.replace(
  /\.mahir-floating-nav \.nav-link:hover \{ color: #fff; \}/g,
  '.mahir-floating-nav .nav-link:hover { color: #000; }'
);
content = content.replace(
  /\.mahir-floating-nav \.nav-action \{ background: #fff; color: #000;/g,
  '.mahir-floating-nav .nav-action { background: #000; color: #fff;'
);
content = content.replace(
  /\.mahir-floating-nav \.nav-brand \{ display: inline-flex; align-items: center; gap: \.6rem; color:#fff !important; text-decoration:none; \}/g,
  '.mahir-floating-nav .nav-brand { display: inline-flex; align-items: center; gap: .6rem; color:#000 !important; text-decoration:none; }'
);

// Logo chip inversion
// Old: filter: invert(1) brightness(1.1); mix-blend-mode: screen;
content = content.replace(
  /filter: invert\(1\) brightness\(1\.1\); mix-blend-mode: screen;/g,
  'filter: invert(1);'
);

// Prefooter CTA Background
content = content.replace(
  /\.mahir-prefooter-band \{[\s\S]*?background: #000;[\s\S]*?\}/g,
  match => match.replace(/background: #000;/, 'background: #FAFAF9;')
);

// Footer colors
// Actually, let's just replace all exact hexes that might be dark.
content = content.replace(/background: #0B1220/g, 'background: #FAFAF9');
content = content.replace(/background: #020305/g, 'background: #FAFAF9');

content = content.replace(/footer \.text-white\\\/45, footer \.text-white\\\/35, footer \.text-white\\\/30, footer \.text-white\\\/18 \{ color: rgba\(255,255,255,0\.7\) !important; \}/g, 
  'footer .text-white\\/45, footer .text-white\\/35, footer .text-white\\/30, footer .text-white\\/18 { color: rgba(0,0,0,0.7) !important; }'
);

fs.writeFileSync('src/components/site-chrome.tsx', content);
console.log('React components updated');
