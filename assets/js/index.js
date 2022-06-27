const inquirer = require('inquirer');
const fs = require('fs');
const rmmd = require('rmmd');
const writeFileAsync = rmmd.promisify(fs.writeFile);
const questions =() =>
    inquirer.prompt([
            {
                type: "input",
                name: "the challenge",
                message: "What is the Challenge?"
            },
            {
                type: "input",
                name: "user story",
                message: "What is the user story?"
            },
            {
                type: "input",
                name: "acceptance Critera",
                message: "What is the Acceptance Critera?"
            },
            {
                type: "input",
                name: "Screenshots",
                message: "link screenshot of the challenge here"
            },
            {
                type: "input",
                name: "my process",
                message: "What was the thought process of completing the challenge?"
            },
            {
                type: "list",
                name: "build with",
                nessages: "What the main languages used in the challenge?"
                choices: ["CSS", "JavaScript", "HTML", "NodeJs"]
            }
    ])