const fs = require('fs');

const files = [
  'public/mahir.html',
  'src/routes/mahir-body.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // 1. Revert loader logo
  content = content.replace(/\/mahir-new-logo\.png" alt=""\>/g, '/mahir-logo.png" alt="">');
  
  // 2. Revert navbar and footer logo
  content = content.replace(/\/mahir-new-logo\.png" alt="MAHIR"\>/g, '/mahir-logo.png" alt="MAHIR">');

  // 3. Update dark background inline logos
  content = content.replace(
    /class="inline-block h-\[0.9em\] w-auto -mt-1 invert mix-blend-screen opacity-90"/g,
    'class="inline-block h-[0.9em] w-auto -mt-1 mix-blend-screen opacity-90 [clip-path:inset(0_0_0_35%)] -ml-[0.55em]"'
  );

  // 4. Update light background inline logos
  content = content.replace(
    /class="inline-block h-\[0.9em\] w-auto -mt-1 opacity-90"/g,
    'class="inline-block h-[0.9em] w-auto -mt-1 invert mix-blend-multiply opacity-90 [clip-path:inset(0_0_0_35%)] -ml-[0.55em]"'
  );
  
  // 5. Update huge H2 logo
  content = content.replace(
    /class="h-10 sm:h-16 lg:h-24 invert object-contain mix-blend-screen"/g,
    'class="h-10 sm:h-16 lg:h-24 w-auto mix-blend-screen [clip-path:inset(0_0_0_35%)] -ml-[1.5rem] sm:-ml-[2.5rem] lg:-ml-[3.5rem]"'
  );

  // 6. Update all image src
  content = content.replace(/\/mahir-new-logo\.png/g, '/mahir-inline-wordmark.png');

  fs.writeFileSync(file, content);
}

// Update mahir.css for prefooter mark
let css = fs.readFileSync('src/mahir.css', 'utf8');
// Original: .mahir-prefooter-mark { ... opacity: 0.1; filter: invert(1) brightness(1.2); mix-blend-mode: screen; pointer-events: none; user-select: none; }
// The new image is white-on-black, so we don't need invert for a dark background. Just mix-blend-screen.
// And we need to clip it too!
css = css.replace(
  /opacity: 0\.1; filter: invert\(1\) brightness\(1\.2\); mix-blend-mode: screen;/g,
  'opacity: 0.1; mix-blend-mode: screen; clip-path: inset(0 0 0 35%); margin-left: -20vw;'
);
fs.writeFileSync('src/mahir.css', css);

console.log('Done replacements');
