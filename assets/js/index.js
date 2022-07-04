const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('utils');
const generateMarkdown = require('./utils/generateMarkdown');
const questions =() =>
    inquirer.prompt([
            {
                type: 'input',
                name: 'Title',
                message: 'What is the title of this project?',
            },
            {
                type: "input",
                name: "Description",
                message: "What is the project about? enter a detailed description of the project."
            },
            {
                type: "input",
                name: "Table of Contents",
                message: "Table of Contents"
            },
            {
                type: "input",
                name: "Installation",
                message: "What does the user need to run this app?"
            },
            {
                type: "input",
                name: "Usage",
                message: "How is the app used?, List instructions"
            },
            {
                type: "list",
                name: "License",
                message: "What kind of license should your project have?",
                choices: ['MIT', "APACHE", "GPL", "BSD", "None"]
            },
            {
                type: "input",
                name: "Contrubuting",
                messages: "Who contributed to this project?",
                
            },
            {
                type: "input",
                name: "Tests",
                message: "What commands are needed to test the project app?"
            },
            {
                type: "input",
                name: "Questions",
                message: "Contact info for inquiries ?"
            },
            {
                type: "input",
                name: "Username",
                message: "Input you github username", 
            },
            {
                type: "input",
                name: "Email",
                message: "What is your email address?",
            },
            {
                type: "input",
                name: "website", 
                message: "website or link to profile"
            },
    ]);
function writeToFile(fileName,data) {
    fs.writeFile(fileName,data, function(err){
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log (err)
        } else {
            console.log("success");
    }
})};

function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })

}
init();