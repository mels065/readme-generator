const licenses = require("./licenses");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const formattedLicense = formatLicenseInput(license);
  if (licenses.hasOwnProperty(formattedLicense)) {
    return licenses[formattedLicense].badge;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

// Returns a formatted string for license inputs
function formatLicenseInput(license) {
  return license.split(" ").join("-").toLowerCase();
}

module.exports = generateMarkdown;
