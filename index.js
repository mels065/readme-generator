// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "Enter the name of your project:"
    },
    {
        name: "description",
        type: "editor",
        message: "Describe your project:"
    },
    {
        name: "installation",
        type: "editor",
        message: "How do you install the project?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve("File successfully created");
            }
        })
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            return writeToFile("README.md", generateMarkdown(data))
        })
        .then((message) => {
            console.log(message)
        })
        .catch((err) => {
            console.error(err);
        })
}

// Function call to initialize app
init();
