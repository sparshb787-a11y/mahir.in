const fs = require('fs');
let content = fs.readFileSync('src/routes/index.tsx', 'utf8');

// Remove the dark section flip logic
content = content.replace(
  /\/\/ Dark sections stay in theme color permanently[\s\S]*?\}\);/g,
  '// Dark sections flip removed for light theme'
);

// Remove the header scroll trigger for #engineering
content = content.replace(
  /ScrollTrigger\.create\(\{\s*trigger: "#engineering"[\s\S]*?\}\);/g,
  '// Header invert trigger removed for light theme'
);

fs.writeFileSync('src/routes/index.tsx', content);
console.log('GSAP updated');
