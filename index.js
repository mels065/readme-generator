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
        name: "githubName",
        message: "What is your Github username?"
    },
    {
        name: "email",
        message: "What is your email?",
        validate: email => /.+@.+\.(com|edu|org|net|gov)/.test(email)
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
    },
    {
        name: "usage",
        type: "editor",
        message: "How do you use this application?"
    },
    {
        name: "contributing",
        type: "editor",
        message: "What guidelines must developers follow when contributing?"
    },
    {
        name: "tests",
        type: "editor",
        message: "What are the instructions for running tests?"
    },
    {
        name: "license",
        type: "list",
        choices: [
            "None",
            "Apache 2.0",
            "BSD 3-Clause",
            "BSD 2-Clause",
            "Attribution 4.0 International",
            "Attribution Sharealike 4.0 International",
            "Attribution Noncommercial 4.0 International",
            "Attribution NoDerivatives 4.0 International",
            "Attribution Noncommercial Sharealike 4.0 International",
            "Attribution Noncommerical NoDerivatives 4.0 International",
            "Eclipse",
            "GNU GPL V3",
            "GNU GPL V2",
            "GNU AGPL V3",
            "GNU LGPL V3",
            "GNU FDL V1.3",
            "IBM",
            "MIT",
            "Mozilla",
            "zLib"
        ],
        message: "Pick your license"
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
