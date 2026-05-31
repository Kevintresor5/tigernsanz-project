import fs from 'fs';

function inspectFile(filename: string) {
  if (fs.existsSync(filename)) {
    const content = fs.readFileSync(filename, 'utf8');
    console.log(`\n================ INSPECTING ${filename} ================`);
    // Print the first 2000 characters
    console.log(content.substring(0, 2000));
    
    // Search for array-like structure with brackets inside the first 6000 characters
    const arrayStart = content.indexOf('[{');
    if (arrayStart !== -1) {
      console.log("\nFound [{ at index:", arrayStart);
      console.log(content.substring(arrayStart, arrayStart + 1500));
    }
  }
}

inspectFile("Testimonials-AL88eyzK.js");
inspectFile("Training-BHNAX3kw.js");
