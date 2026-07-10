const fs = require('fs');

const darkImg = '<img src="/mahir-new-logo.png" alt="MAHIR" class="inline-block h-[0.9em] w-auto -mt-1 invert mix-blend-screen opacity-90">';
const lightImg = '<img src="/mahir-new-logo.png" alt="MAHIR" class="inline-block h-[0.9em] w-auto -mt-1 opacity-90">';

const files = [
  'public/mahir.html',
  'src/routes/mahir-body.html'
];

const replacements = [
  { target: 'Today, MAHIR is a', repl: `Today, ${darkImg} is a` },
  { target: 'MAHIR is built', repl: `${darkImg} is built` },
  { target: 'MAHIR is for investors', repl: `${darkImg} is for investors` },
  { target: '>MAHIR Founded', repl: `>${lightImg} Founded` },
  { target: 'MAHIR started', repl: `${lightImg} started` },
  { target: 'the MAHIR framework.', repl: `the ${lightImg} framework.` },
  { target: 'advisor at MAHIR.', repl: `advisor at ${darkImg}.` },
  { target: '>MAHIR PRODUCTS', repl: `>${lightImg} PRODUCTS` },
  { target: 'Every MAHIR engagement', repl: `Every ${lightImg} engagement` },
  { target: 'Yash leads MAHIR with', repl: `Yash leads ${lightImg} with` },
  { target: 'every MAHIR call.', repl: `every ${lightImg} call.` },
  { target: '"MAHIR gave us', repl: `"${darkImg} gave us` },
  { target: 'A MAHIR Invest', repl: `A ${darkImg} Invest` },
  { target: 'Every MAHIR Product.', repl: `Every ${lightImg} Product.` },
  { target: '"MAHIR\'s research', repl: `"${lightImg}'s research` },
  { target: 'defensible. MAHIR is the', repl: `defensible. ${lightImg} is the` },
  { target: 'does MAHIR actually do?', repl: `does ${lightImg} actually do?` }
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  for (const r of replacements) {
    content = content.replace(new RegExp(r.target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), r.repl);
  }
  fs.writeFileSync(file, content);
}

console.log('Replacements completed.');
