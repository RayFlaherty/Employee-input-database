const inquirer = require ('inquirer')
const fs = require('fs');

const inputQuestions=[
    {
            type:'list',
            name: 'jobTitle',
            message: 'What is the employee job title?',
            choices: ['Manager','Engineer','Intern'], 
    }
]

function init () {
    inquirer.prompt (inputQuestions)
        .then (answers => {
         console.log(answers);
        })
         
}   


init ();

function employeeTitle (jobTitle) {
    switch (jobTitle) {
        case 'Manager':
         inquirer.prompt (managerQuestions)
    }
}

employeeTitle ();

