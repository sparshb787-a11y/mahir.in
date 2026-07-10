const fs = require('fs');

const files = [
  'public/mahir.html',
  'src/routes/mahir-body.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Backgrounds
  content = content.replace(/bg-\[#0B1220\]/g, 'bg-[#FAFAF9]');
  content = content.replace(/bg-\[#020305\]/g, 'bg-[#FAFAF9]');

  // Remove force white
  content = content.replace(/mahir-force-white/g, '');

  // Text Opacities
  content = content.replace(/text-white\/85/g, 'text-gray-900/85');
  content = content.replace(/text-white\/80/g, 'text-gray-800/80');
  content = content.replace(/text-white\/70/g, 'text-gray-800/70');
  content = content.replace(/text-white\/60/g, 'text-gray-600');
  content = content.replace(/text-white\/40/g, 'text-gray-400');
  
  // Base text
  content = content.replace(/text-white/g, 'text-[#0B1220]');

  // Overlays and Borders
  content = content.replace(/bg-white\/10/g, 'bg-black/5');
  content = content.replace(/bg-white\/5/g, 'bg-black/5');
  content = content.replace(/ring-white\/15/g, 'ring-black/15');
  content = content.replace(/ring-white\/10/g, 'ring-black/10');

  // Inline Logos that were previously on dark backgrounds (no invert)
  // Need to add invert and change screen to multiply
  // Target: mix-blend-screen opacity-90 [clip-path:inset(0_0_0_35%)]
  content = content.replace(
    /mix-blend-screen opacity-90 \[clip-path/g,
    'invert mix-blend-multiply opacity-90 [clip-path'
  );

  // Large H2 logo
  // Target: class="h-10 sm:h-16 lg:h-24 w-auto mix-blend-screen [clip-path:inset(0_0_0_35%)] -ml-[1.5rem] sm:-ml-[2.5rem] lg:-ml-[3.5rem]"
  content = content.replace(
    /w-auto mix-blend-screen \[clip-path:inset\(0_0_0_35\%\)\]/g,
    'w-auto invert mix-blend-multiply [clip-path:inset(0_0_0_35%)]'
  );

  fs.writeFileSync(file, content);
}
console.log('HTML Migration done');
