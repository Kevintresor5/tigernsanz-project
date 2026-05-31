import fs from 'fs';

const assets = [
  "Services-DuOCP_eH.js",
  "Training-BHNAX3kw.js",
  "Projects-BHMFmq82.js",
  "Testimonials-AL88eyzK.js",
  "Contact-J1EIyxnr.js",
];

function extractArrays(filename: string) {
  const content = fs.readFileSync(filename, 'utf8');
  console.log(`\n==================== ${filename} ====================`);
  
  // Find all arrays like [...]
  // We can also just search for specific keys to print surrounding context
  // e.g. from the start of an array to its end
  let cursor = 0;
  while (true) {
    const idx = content.indexOf('[', cursor);
    if (idx === -1) break;
    
    // Find balancing ]
    let balance = 1;
    let endIdx = idx + 1;
    while (endIdx < content.length && balance > 0) {
      if (content[endIdx] === '[') balance++;
      else if (content[endIdx] === ']') balance--;
      endIdx++;
    }
    
    const arrayStr = content.substring(idx, endIdx);
    if (arrayStr.includes('title:') || arrayStr.includes('name:') || arrayStr.includes('description:')) {
      console.log(`\nArray found near index ${idx}:\n`, arrayStr.substring(0, 1500));
      if (arrayStr.length > 1500) {
        console.log("... [TRUNCATED] ...");
      }
    }
    cursor = idx + 1;
  }
}

assets.forEach(extractArrays);
