const inquirer = require ('inquirer')
const fs = require('fs');
//const { removeListener } = require('process');
//const generatePage = require ('./dist/page-template')
//const pageHTML = generatePage ()

//fs.writeFile('index.html', pageHTML, err => {
  //  if (err) throw err;
//});  


// const inputQuestions= [
//         {
//             type:'input',
//             name:'employeeName',
//             message:'Employee Name?',
//             validate: employeeName => {
//                if(employeeName){
//                     return true;
//             }else{
//                 console.log ('Please Enter Employee Name.');
//                     return false;
//                 }
//             }
//         }, 
//         {
//             type:'input',
//             name:'employeeId',
//             message:'Employee Number?',
//             validate: employeeId => {
//                 if (employeeId) {
//                     return true ;
//                 }else{
//                     console.log('Please enter Employee Id.');
//                         return false;
//                 }
//             }
//         },
//         {
//             type:'input',
//             name:'email',
//             message:'Employee Email?',
//             validate: email => {
//                 if (email) {
//                     return true;
//                 }else{
//                     console.log('Please enter Employee Email.');
//                         return false;
//                 }
//             }
//         },
//         {
//             type:'list',
//             name: 'jobTitle',
//             message: 'What is the employee job title?',
//             choices: ['Manager','Engineer','Intern'],
//         },
       
//         {
//             type:'input',
//             name:'github',
//             message:'GitHub UserName?'

//         }
//     ]

function init () {
    inquirer.prompt (inputQuestions)
        .then (answers => {
            console.log(answers)
        });
        
        }


init ();