import fs from 'fs';
import https from 'https';

function fetchUrl(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to load ${url}: ${res.statusCode}`));
        return;
      }
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => { resolve(data); });
    }).on('error', (err) => { reject(err); });
  });
}

const assets = [
  "Services-DuOCP_eH.js",
  "Training-BHNAX3kw.js",
  "Projects-BHMFmq82.js",
  "Testimonials-AL88eyzK.js",
  "Contact-J1EIyxnr.js",
];

async function main() {
  try {
    for (const asset of assets) {
      console.log(`\n--- Fetching ${asset} ---`);
      const content = await fetchUrl(`https://infinitymura.netlify.app/assets/js/${asset}`);
      // find strings in double quotes, single quotes, or backticks
      // let's print parts containing structural arrays or text content
      fs.writeFileSync(asset, content);
      
      // Look for arrays, service declarations, text lists
      console.log(`Length: ${content.length}`);
      
      // Let's do some regex searches to extract data arrays or descriptions
      // e.g. [{title: "..." ...}] or similar
      const serviceMatches = content.match(/title:"[^"]+"|name:"[^"]+"|description:"[^"]+"/g);
      if (serviceMatches) {
        console.log("Matches found:", serviceMatches.slice(0, 20));
      } else {
        console.log("No simple title/name/description matches, printing first 1000 characters:");
        console.log(content.substring(0, 1000));
      }
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
