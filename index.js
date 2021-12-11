const inquirer = require ('inquirer')
const fs = require('fs');
//const generatePage = require ('./dist/page-template')
//const pageHTML = generatePage ()

//fs.writeFile('index.html', pageHTML, err => {
  //  if (err) throw err;
//});  


inquirer
    .prompt([
        {
            type:'input',
            name:'employee name',
            message:'Employee Name?',
        }, 
        {
            type:'input',
            name:'employee id',
            message:'Employee Number?',
        },
        {
            type:'input',
            name:'email',
            message:'Employee Email?',
        },
        {
            type:'list',
            name: 'Job Title',
            message: 'What is the employee job title?',
            choices: ['Manager','Engineer','Intern']
        },
       
        {
            type:'input',
            name:'github',
            message:'GitHub UserName?'

        }
    ])


