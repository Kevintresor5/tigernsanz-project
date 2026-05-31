import fs from 'fs';

function extractAllData() {
  const data: any = {};

  // 1. Services
  const servicesContent = fs.readFileSync('Services-DuOCP_eH.js', 'utf8');
  // Look for services array which looks like [{icon:...,title:"...",description:"..."}]
  // Let's do a find of title:"Software Development" and find surrounding quotes
  // We can also extract direct title/description pairs.
  const services: any[] = [];
  const serviceRegex = /{icon:"([^"]+)",title:"([^"]+)",description:"([^"]+)"}/g;
  let match;
  while ((match = serviceRegex.exec(servicesContent)) !== null) {
    services.push({ icon: match[1], title: match[2], description: match[3] });
  }
  data.services = services;

  // 2. Training
  const trainingContent = fs.readFileSync('Training-BHNAX3kw.js', 'utf8');
  // Let's search for patterns like {title:"...",duration:"...",level:"...",desc:"..."}
  const courses: any[] = [];
  const courseRegex = /{id:[^,]+,title:"([^"]+)",duration:"([^"]+)",level:"([^"]+)",desc:"([^"]+)",longDesc:"([^"]+)",icon:"([^"]+)",skills:(\[[^\]]*\]),outline:(\[[^\]]*\])}/g;
  
  // Let's write a simpler regex to catch titles and durations
  const generalCourseRegex = /title:"([^"]+)"/g;
  const courseTitles: string[] = [];
  let tMatch;
  while ((tMatch = generalCourseRegex.exec(trainingContent)) !== null) {
    if (!courseTitles.includes(tMatch[1])) {
      courseTitles.push(tMatch[1]);
    }
  }
  data.courseTitles = courseTitles;

  // We can write a parser that scans trainingContent for courses or student reviews.
  // Let's extract reviews:
  const studentReviews: any[] = [];
  const reviewRegex = /{id:[^,]+,name:"([^"]+)",course:"([^"]+)",review:"([^"]+)",avatar:"([^"]+)"}/g;
  while ((match = reviewRegex.exec(trainingContent)) !== null) {
    studentReviews.push({ name: match[1], course: match[2], review: match[3], avatar: match[4] });
  }
  data.studentReviews = studentReviews;

  // 3. Projects
  const projectsContent = fs.readFileSync('Projects-BHMFmq82.js', 'utf8');
  const projects: any[] = [];
  // Project pattern: {id:...,title:"...",category:"...",description:"...",tech:...,demo:...,github:...,image:...}
  // Let's extract any title, category, description, tech
  // To be safe we can use matchAll for specific patterns
  const projTitles = [...projectsContent.matchAll(/title:"([^"]+)"/g)].map(m => m[1]);
  const projCategories = [...projectsContent.matchAll(/category:"([^"]+)"/g)].map(m => m[1]);
  const projDescriptions = [...projectsContent.matchAll(/description:"([^"]+)"/g)].map(m => m[1]);
  
  for (let i = 0; i < projTitles.length; i++) {
    projects.push({
      title: projTitles[i],
      category: projCategories[i] || '',
      description: projDescriptions[i] || '',
    });
  }
  data.projects = projects;

  // 4. Testimonials
  const testimonialsContent = fs.readFileSync('Testimonials-AL88eyzK.js', 'utf8');
  const testimonials: any[] = [];
  // {name:"...",role:"...",company:"...",text:"...",avatar:"..."}
  const testNames = [...testimonialsContent.matchAll(/name:"([^"]+)"/g)].map(m => m[1]);
  const testRoles = [...testimonialsContent.matchAll(/role:"([^"]+)"/g)].map(m => m[1]);
  const testCompanies = [...testimonialsContent.matchAll(/company:"([^"]+)"/g)].map(m => m[1]);
  const testTexts = [...testimonialsContent.matchAll(/text:"([^"]+)"/g)].map(m => m[1]);
  for (let i = 0; i < testNames.length; i++) {
    testimonials.push({
      name: testNames[i],
      role: testRoles[i] || '',
      company: testCompanies[i] || '',
      text: testTexts[i] || '',
    });
  }
  data.testimonials = testimonials;

  fs.writeFileSync('extracted_data.json', JSON.stringify(data, null, 2));
  console.log("Extraction complete!");
}

extractAllData();
