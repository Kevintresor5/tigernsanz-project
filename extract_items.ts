import fs from 'fs';

function extractFromServices() {
  const fileContent = fs.readFileSync('Services-DuOCP_eH.js', 'utf8');
  console.log("\n==================== SERVICES ====================");
  // Let's find matches like: {icon: "...", title: "...", description: "..."} In minified code, key is not in quotes. Let's do a loose regex
  const regex = /{icon:"([^"]+)",title:"([^"]+)",description:"([^"]+)"}/g;
  let match;
  while ((match = regex.exec(fileContent)) !== null) {
    console.log(`- Icon: ${match[1]}\n  Title: ${match[2]}\n  Description: ${match[3]}`);
  }

  // Let's also search for steps/process
  // Process steps: "Consult", "Plan", "Execute", "Support"
  // Let's see if we can find description of process steps
  const procRegex = /title:"([^"]+)",desc:"([^"]+)"/g;
  console.log("\n--- Process Steps ---");
  while ((match = procRegex.exec(fileContent)) !== null) {
     console.log(`- Step: ${match[1]} - ${match[2]}`);
  }
}

function extractFromTraining() {
  const fileContent = fs.readFileSync('Training-BHNAX3kw.js', 'utf8');
  console.log("\n==================== TRAINING / ACADEMY ====================");
  
  // Courses are typically declared as a list
  // Let's find course-like structures. In the JS, it may be like:
  // {id: 1, title: "Web Development", duration: "12 Weeks", level: "Beginner to Pro", desc: "...", longDesc: "..."}
  // Let's look for objects with title, duration, level
  // Since they might be formatted with other fields let's just search for block of code
  const startIdx = fileContent.indexOf('[{id:');
  if (startIdx !== -1) {
    let balance = 1;
    let endIdx = startIdx + 1;
    while (endIdx < fileContent.length && balance > 0) {
      if (fileContent[endIdx] === '[') balance++;
      else if (fileContent[endIdx] === ']') balance--;
      endIdx++;
    }
    const coursesStr = fileContent.substring(startIdx, endIdx);
    console.log("Courses block found:");
    console.log(coursesStr.substring(0, 4000));
  } else {
    console.log("Could not find course block beginning with '[{id:'! Searching manually...");
    // Let's find all occurrences of "duration:"
    let index = 0;
    while ((index = fileContent.indexOf('duration:', index)) !== -1) {
      const start = Math.max(0, index - 50);
      const end = Math.min(fileContent.length, index + 350);
      console.log(`Duration match: ${fileContent.substring(start, end).replace(/\n/g, ' ')}`);
      index += 9;
    }
  }

  // Find reviews / student reviews list
  const reviewStart = fileContent.indexOf('[{id:', fileContent.indexOf('duration:') === -1 ? 0 : fileContent.indexOf('duration:'));
  // Or just find all objects with review:
  let rIndex = 0;
  console.log("\n--- Student Reviews ---");
  while ((rIndex = fileContent.indexOf('review:', rIndex)) !== -1) {
    const start = Math.max(0, rIndex - 150);
    const end = Math.min(fileContent.length, rIndex + 250);
    console.log(`Review match: ${fileContent.substring(start, end).replace(/\n/g, ' ')}`);
    rIndex += 7;
  }
}

function extractFromProjects() {
  const fileContent = fs.readFileSync('Projects-BHMFmq82.js', 'utf8');
  console.log("\n==================== PROJECTS ====================");
  // Projects list: let's print the array beginning
  const startIdx = fileContent.indexOf('[{id:');
  if (startIdx !== -1) {
    let balance = 1;
    let endIdx = startIdx + 1;
    while (endIdx < fileContent.length && balance > 0) {
      if (fileContent[endIdx] === '[') balance++;
      else if (fileContent[endIdx] === ']') balance--;
      endIdx++;
    }
    const projStr = fileContent.substring(startIdx, endIdx);
    console.log("Projects block found:");
    console.log(projStr.substring(0, 4000));
  } else {
    // search for tech: or github:
    let index = 0;
    while ((index = fileContent.indexOf('github:', index)) !== -1) {
      const start = Math.max(0, index - 300);
      const end = Math.min(fileContent.length, index + 100);
      console.log(`Project match: ${fileContent.substring(start, end).replace(/\n/g, ' ')}`);
      index += 7;
    }
  }
}

function extractFromTestimonials() {
  const fileContent = fs.readFileSync('Testimonials-AL88eyzK.js', 'utf8');
  console.log("\n==================== TESTIMONIALS ====================");
  // Testimonials array
  // Let's search for "role:" or "text:"
  let index = 0;
  while ((index = fileContent.indexOf('text:', index)) !== -1) {
    const start = Math.max(0, index - 100);
    const end = Math.min(fileContent.length, index + 350);
    console.log(`Testimonial match: ${fileContent.substring(start, end).replace(/\n/g, ' ')}`);
    index += 5;
  }
}

function extractFromContact() {
  const fileContent = fs.readFileSync('Contact-J1EIyxnr.js', 'utf8');
  console.log("\n==================== CONTACT ====================");
  // Find contact text or descriptions
  let idx = 0;
  while ((idx = fileContent.indexOf('muragijimana', idx)) !== -1) {
    const start = Math.max(0, idx - 100);
    const end = Math.min(fileContent.length, idx + 150);
    console.log(`Contact match: ${fileContent.substring(start, end).replace(/\n/g, ' ')}`);
    idx += 12;
  }
}

extractFromServices();
extractFromTraining();
extractFromProjects();
extractFromTestimonials();
extractFromContact();
