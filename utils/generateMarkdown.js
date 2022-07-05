// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
  return '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Adding a \n makes a new line
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n*[License](#license)\n`
}
return '';
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None') {
    return `## License
    Licensed under the ${license} license.`;
} return ''; 
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

*[Installation](#Installation)

*[Usage](#Usage)
${renderLicenseLink(data.license)}

*[Contrubuting](#contrubuting)

*[Tests](#Tests)

*[questions](#questions)

## Installation

${data.installation}

## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contrubuting
${data.contrubuting}
## Tests

${data.tests}

## Questions

  Questions or concerns? contact me at ${data.email}
  Review more of my work at [${data.username}](https://github.com/${data.usernameg}/)

`;
}

module.exports = generateMarkdown;
