//Packages needed for this application
const util = require("util");
const inquirer = require("inquirer");
const fs = require("fs");
const generateReadme = require("./utils/generateReadme")

//Array of questions for user input
const questions = ([

    {
    type: "input",
      message: "What it the title of this project?",
      name: "projectTitle", 
},
{ 
    type: "input",
    message: "Please provide a breif description of your project.",
    name: "description",  
       },
  {
    type: "input",
    message: "Please explain the installation process if necessary.",
    name: "installation-process",
 },
  {
      type: "input",
      message: "How do you Use your application?",
      name: "usageinfo",
  },
  {
      type: "input",
      message: "Who are the people contributiing to your project?",
      name: "contributing",
  },
  {
    type:'choices',
    message: '',
    name:"license"
},
 {
      type: "input",
      message: "How do people test your project?",
      name: "tests"
  },
  {
      type: "input",
      message: "Enter your GitHub username:",
      name: "userNameGitHub"
  },
  {
      type: "input",
      message: "What is your email address?",
      name: "userEmail"
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
