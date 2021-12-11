const   Employee = require ('../lib/Employee')

test ('Creates an employee object', () => {
    const newEmployee = new Employee ('Manager','Engineer','Intern')
        expect(typeof(newEmployee)).toBe('object')
})

test ('Creates a Manger object', () => {
    const newEmployee= new Employee ('Manager','Engineer','Intern')
        expect(newEmployee.getManager()).toBe('Manager')
})

test ('Creates a Engineer object', () => {
    const newEmployee = new Employee ('Manager','Engineer','Intern')
        expect(newEmployee.getEngineer()).toBe('Engineer')
})

test ('Creates an Intern object', () => {
    const newEmployee = new Employee ('Manager','Engineer','Intern')
        expect(newEmployee.getIntern()).toBe('Intern')
})

// test ('Creates a Job Title Object', () => {
//     const jobTitle = new JobTitle ()
//         expect(typeof(JobTitle)).toBe('object') 
            
// })

// const inquirer = require ('inquirer')
// const fs = require('fs');

// const inputQuestions=[
//     {
//             type:'list',
//             name: 'jobTitle',
//             message: 'What is the employee job title?',
//             choices: ['Manager','Engineer','Intern'], 
//     }
// ]

// const managerQuestions= [
//     {
//         type: 'input',
//         name:'officeNumber',
//         message:'What is the manager office Number?',
//         validate: officeNumber => {
//             if (officeNumber) {
//                 return true;
//         }else{
//             console.log('Please enter manager office number.');
//                 return false;
//         }
//     } 
//     }
// ]

// const engineerQuestions = [
//     {
//         type: 'input',
//         name: 'gitHub',
//         message:'What is the employee GitHub user name?',
//         validate: gitHub => {
//             if (gitHub) {
//                 return true;
//             }else{
//                 console.log('Please enter the gitHub User name.');
//                 return false;
//             }
//         }
//     }
// ]

// const internQuestions = [
//     {
//         type: 'input',
//         name: 'schoolName',
//         message: 'Where does the intern attend school?',
//         validate: schoolName => {
//             if (schoolName){
//                 return true;
//             }else{
//                 console.log('Please enter school name.');
//                 return false;
//             }
//         } 
//     }
// ]

// function init () {
//     inquirer.prompt (inputQuestions)
//         .then (answers => {
//          console.log(answers);
//         })
         
// }   


// init ();

// function employeeTitle (jobTitle) {
//     switch (jobTitle) {
//         case 'Manager':
//          inquirer.prompt (managerQuestions)
//     }
// }

// employeeTitle ();

