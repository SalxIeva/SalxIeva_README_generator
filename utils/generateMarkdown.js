// function to generate markdown for README
function generateMarkdown(data) {
  // add license badge 
  const licenseBadge = `![License](https://img.shields.io/badge/license-${encodeURIComponent(data.license)}-brightgreen)`;
  
  return `# ${data.title} ${licenseBadge} <!-- license badge here -->
  

  ## Description
  ${data.description}
  
  ## Table of Contents
  ${data.tableOfContents.map(section => `- [${section}](#${section.toLowerCase()})`).join('\n')}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  This project is licensed under the ${data.license} License.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  ${data.questions}
  - GitHub: [${data.githubUsername}](http://github.com/${data.githubUsername})
  - Email: ${data.email}
  - Contact instructions: ${data.contact}
  `;
}

module.exports = generateMarkdown;
