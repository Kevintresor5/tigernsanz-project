import fs from 'fs';

function findAboutInBundle() {
  const content = fs.readFileSync('bundle.js', 'utf8');
  let index = 0;
  let count = 0;
  console.log("=== SEARCHING ABOUT SECTIONS ===");
  while ((index = content.indexOf('about', index)) !== -1) {
    count++;
    const excerpt = content.substring(Math.max(0, index - 100), Math.min(content.length, index + 300));
    console.log(`[#${count}] ...${excerpt.replace(/\n/g, ' ')}...`);
    index += 5;
    if (count > 10) break;
  }
  
  // Let's search for "Schadrack" biography details
  let sIndex = 0;
  let sCount = 0;
  console.log("\n=== SEARCHING SCHADRACK BIO ===");
  while ((sIndex = content.indexOf('Schadrack', sIndex)) !== -1) {
    sCount++;
    const excerpt = content.substring(Math.max(0, sIndex - 100), Math.min(content.length, sIndex + 400));
    console.log(`[#${sCount}] ...${excerpt.replace(/\n/g, ' ')}...`);
    sIndex += 9;
    if (sCount > 10) break;
  }
}

findAboutInBundle();
