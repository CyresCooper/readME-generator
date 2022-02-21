
function generateMarkdown(promptResponse) {
  var content = `# ${promptResponse.projectTitle}
  
  # License
$ ![${promptResponse.license}](https://img.shields.io/badge/license-${promptResponse.license}-red)
  
### Table of Contents
* [Description](#Description)
* [Usage](#Usage)
* [Installation](#Installation)
* [Contributing](#Contributing)
* [Testing](#Tesing)
   
## Description
${promptResponse.description}
  
# Usage
${promptResponse.usageinfo}

# Contributing
${promptResponse.contributing}

# Installation
${promptResponse.installation-process}
 
# Testing
${promptResponse.tests}
  
#### Questions
If you have anyquestions you can contact me via: [Github](https://www.github.com/${promptResponse.userNameGitHub}) [Email Me](mailto:${promptResponse.userEmail})
  
`
return content;
};

module.exports = generateMarkdown;