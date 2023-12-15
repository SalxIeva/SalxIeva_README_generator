const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a short description of your project:',
    },
    {
        type: 'checkbox',
        name: 'tableOfContents',
        message: 'Select entitled sections:',
        choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions for installation:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Explain how to use your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guideline for contributing:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe how to run tests:',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter any additional information or instructions for questions:',
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
