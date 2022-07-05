const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = [
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of this project?',
            },
            {
                type: "input",
                name: "description",
                message: "What is the project about? enter a detailed description of the project."
            },
            {
                type: "input",
                name: "installation",
                message: "What does the user need to run this app?"
            },
            {
                type: "input",
                name: "Usage",
                message: "How is the app used?, List instructions"
            },
            {
                type: "list",
                name: "license",
                message: "What kind of license should your project have?",
                choices: ['MIT', "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
            },
            {
                type: "input",
                name: "contrubuting",
                messages: "Who contributed to this project?",
                
            },
            {
                type: "input",
                name: "tests",
                message: "What commands are needed to test the project app?"
            },
            {
                type: "input",
                name: "questions",
                message: "Contact info for inquiries ?"
            },
            {
                type: "input",
                name: "username",
                message: "Input you github username", 
            },
            {
                type: "input",
                name: "email",
                message: "What is your email address?",
            }       
    ];
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