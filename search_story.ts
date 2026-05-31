import fs from 'fs';

function extractBioText() {
  const content = fs.readFileSync('About-CmmIe_3F.js', 'utf8');
  console.log("\n==================== EXTRACTING ABOUT TEXTS ====================");
  
  // Find strings in backticks, double quotes, or single quotes that are quite long
  // We can write a simple regex or search for index of common keywords "Software", "IT Specialist", "Schadrack"
  let startIdx = 0;
  while (true) {
    const doubleQuoteIdx = content.indexOf('"', startIdx);
    if (doubleQuoteIdx === -1) break;
    
    // Find matching double quote
    const nextDoubleQuote = content.indexOf('"', doubleQuoteIdx + 1);
    if (nextDoubleQuote === -1) break;
    
    const str = content.substring(doubleQuoteIdx + 1, nextDoubleQuote);
    if (str.length > 50 && (str.includes('Schadrack') || str.includes('Rwanda') || str.includes('Kigali') || str.includes('software') || str.includes('engineering') || str.includes('IT'))) {
      console.log(`- Double Quote [${doubleQuoteIdx}]: "${str}"`);
    }
    
    startIdx = nextDoubleQuote + 1;
  }
  
  // Backtick strings
  startIdx = 0;
  while (true) {
    const tickIdx = content.indexOf('`', startIdx);
    if (tickIdx === -1) break;
    
    const nextTick = content.indexOf('`', tickIdx + 1);
    if (nextTick === -1) break;
    
    const str = content.substring(tickIdx + 1, nextTick);
    if (str.length > 50) {
      console.log(`- Backtick [${tickIdx}]: \`${str}\``);
    }
    startIdx = nextTick + 1;
  }
}

extractBioText();
