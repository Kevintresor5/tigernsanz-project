import fs from 'fs';

const assets = [
  "Services-DuOCP_eH.js",
  "Training-BHNAX3kw.js",
  "Projects-BHMFmq82.js",
  "Testimonials-AL88eyzK.js",
  "Contact-J1EIyxnr.js",
];

assets.forEach(asset => {
  if (fs.existsSync(asset)) {
    const content = fs.readFileSync(asset, 'utf8');
    // Basic formatting: insert newlines after semicolons, braces and brackets
    let formatted = content
      .replace(/;/g, ';\n')
      .replace(/{/g, '{\n  ')
      .replace(/}/g, '\n}')
      .replace(/,/g, ',\n  ');
    
    fs.writeFileSync(`${asset}.txt`, formatted);
    console.log(`Formatted ${asset} into ${asset}.txt!`);
  }
});
