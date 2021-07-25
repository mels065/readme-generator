const licenses = require("./licenses");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const formattedLicense = formatLicenseInput(license);
  if (isLicense(formattedLicense)) {
    return licenses[formattedLicense].badge;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const formattedLicense = formatLicenseInput(license);
  if (isLicense(formattedLicense)) {
    return `[License Information](${licenses[formattedLicense].link})`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const formattedLicense = formatLicenseInput(license);
  if (isLicense(formattedLicense)) {
    return `## License

${license}

${renderLicenseLink(license)}
    `;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

${generateTableOfContents(data)}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}
  `;
}

// Returns a formatted string for license inputs
function formatLicenseInput(license) {
  return license.split(" ").join("-").toLowerCase();
}

function isLicense(formattedLicense) {
  return licenses.hasOwnProperty(formattedLicense);
}

function generateTableOfContents(data) {
  const tableOfContents = [
    "Description",
    "Installation",
    "Usage",
    "License",
    "Contributing",
    "Tests",
    "Questions"
  ];

  if (!isLicense(data.license)) tableOfContents.splice(3, 1);

  return tableOfContents.map(
    (item, i) => `${i+1}. [${item}](#${item.toLowerCase()})`
  ).join("\n")
}

module.exports = generateMarkdown;
