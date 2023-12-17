// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  `;
}

module.exports = generateMarkdown;
