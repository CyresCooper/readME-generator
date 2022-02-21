//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

//Questions for Read me Prompt 
var questions = [

    {
    type: "input",
      message: "What it the title of this project?",
      name: "projectTitle", 
      validate: function (response) {
        if (response.length < 1) {
            return console.log("Please enter a valid response");
        }
        return true;
},
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
    validate: function (response) {
        if (response.length < 1) {
            return console.log("Please enter a valid response");
        }
        return true;
},
},
 { 
    type: "input",
    message: "Please provide a breif description of your project.",
    name: "description",
    validate: function (response) {
        if (response.length < 1) {
            return console.log("Please enter a valid response");
        }
        return true;
},
       },
  {
      type: "input",
      message: "Who are the people contributiing to your project?",
      name: "contributing",
      validate: function (response) {
        if (response.length < 1) {
            return console.log("Please enter a valid response");
        }
        return true;
},
  },
 {
      type: "input",
      message: "How do people test your project?",
      name: "tests"
  },
  {
    type:'choices',
    choices: ['Academic Free License v3.0',"MIT","Open Software License 3.0","Other", "None"],
    name:"license"
},
  {
      type: "input",
      message: "Enter your GitHub username:",
      name: "userNameGitHub",
      validate: function (response) {
        if (response.length < 1) {
            return console.log("Please enter a valid response");
        }
        return true;
},
  },
  {
      type: "input",
      message: "What is your email address?",
      name: "userEmail",
      validate: function (response) {
        if (response.length < 1) {
            return console.log("Please enter a valid response");
        }
        return true;
},
  },
]
//function for readme
inquirer.prompt(questions).then(function(promptResponse) {
    console.log(promptResponse);
    
     var content = generateMarkdown(promptResponse);
     console.log(content);
      fs.writeFile("./ReadMe.md", content, function(err){
          if (err) throw err
          console.log("Enjoy your ReadMe!");
      });
 } ); 
