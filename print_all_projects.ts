import fs from 'fs';

function inspectProjects() {
  const fileContent = fs.readFileSync('Projects-BHMFmq82.js', 'utf8');
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
    console.log("Full Projects list length:", projStr.length);
    fs.writeFileSync('full_projects.json', projStr);
    console.log("Projects saved to full_projects.json");
  } else {
    console.log("COULD NOT FIND [{id: in Projects file");
  }
}

inspectProjects();
