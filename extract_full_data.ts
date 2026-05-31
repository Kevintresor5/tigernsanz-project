import fs from 'fs';

function extractTestimonials() {
  const content = fs.readFileSync('Testimonials-AL88eyzK.js', 'utf8');
  console.log("\n==================== TESTIMONIALS ====================");
  // Testimonials usually look like: [{name:"...", role:"...", company:"...", text:"...", avatar:"..."}]
  // Let's print out snippets around "role:" and "text:"
  let p = 0;
  while ((p = content.indexOf('text:', p)) !== -1) {
    const start = Math.max(0, p - 200);
    const end = Math.min(content.length, p + 500);
    console.log(`Testimonial Chunk:\n${content.substring(start, end).replace(/\n/g, ' ')}\n`);
    p += 5;
  }
}

function extractServices() {
  const content = fs.readFileSync('Services-DuOCP_eH.js', 'utf8');
  console.log("\n==================== SERVICES ====================");
  // Services look like: [{icon:"...", title:"...", description:"..."}]
  let p = 0;
  while ((p = content.indexOf('icon:', p)) !== -1) {
    const start = Math.max(0, p - 50);
    const end = Math.min(content.length, p + 400);
    console.log(`Service Chunk:\n${content.substring(start, end).replace(/\n/g, ' ')}\n`);
    p += 5;
  }
}

function extractReviews() {
  const content = fs.readFileSync('Training-BHNAX3kw.js', 'utf8');
  console.log("\n==================== STUDENT REVIEWS ====================");
  let p = 0;
  while ((p = content.indexOf('review:', p)) !== -1) {
    const start = Math.max(0, p - 200);
    const end = Math.min(content.length, p + 500);
    console.log(`Review Chunk:\n${content.substring(start, end).replace(/\n/g, ' ')}\n`);
    p += 7;
  }
}

function extractContact() {
  const content = fs.readFileSync('Contact-J1EIyxnr.js', 'utf8');
  console.log("\n==================== SOCIALS ====================");
  // Social networks
  let p = 0;
  while ((p = content.indexOf('url:', p)) !== -1) {
    const start = Math.max(0, p - 100);
    const end = Math.min(content.length, p + 100);
    console.log(`Social Chunk:\n${content.substring(start, end).replace(/\n/g, ' ')}\n`);
    p += 4;
  }
}

extractTestimonials();
extractServices();
extractReviews();
extractContact();
