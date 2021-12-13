const inquirer = require ('inquirer');
const index = require('../index');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require ('../lib/Engineer');
const Intern = require('../lib/Intern');
const employeeDataBase = require ('./employeeDataBase')
const fs = require('fs')
const path = require ('path')

const addManager = () =>{
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the Manager's name?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter a Name'
				}
				return true
            }
		},
        {
            type:"input",
            name:"id",
            message:"What is the Employee's ID number?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter an ID number.'
				}
				return true
            }
        },
        {
            type :"input",
            name:"email",
            message:"What is the Employee's email account?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter an Email Address.'
				}
				return true
            }
        },
        {  
            type : "input",
            name: "office",
            message: "What is the manager's office number?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter an office number.'
				}
				return true
            }
        }
    ])          
}

const addEngineer = () =>{
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the Engineer's name?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter a Name'
				}
				return true
            }
		},
        {
            type:"input",
            name:"id",
            message:"What is the Employee's ID number?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter an ID number.'
				}
				return true
            }
        },
        {
            type :"input",
            name:"email",
            message:"What is the Employee's email account?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter an Email Address.'
				}
				return true
            }
        },
        {  
            type : "input",
            name: "github",
            message: "What is the Engineer's GitHub username?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter a username.'
				}
				return true
            }
        }
    ])          
}

const addIntern = () =>{
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the Intern's name?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter a Name'
				}
				return true
            }
		},
        {
            type:"input",
            name:"id",
            message:"What is the Employee's ID number?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter an ID number.'
				}
				return true
            }
        },
        {
            type :"input",
            name:"email",
            message:"What is the Employee's email account?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter an Email Address.'
				}
				return true
            }
        },
        {  
            type : "input",
            name: "school",
            message: "What school did the Intern Attend?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter a School.'
				}
				return true
            }
        }
    ])          
}

const addEmployee = () => { 
    inquirer.prompt(
        {
            type:"list",
            message:"What is the employee's job title?",
            name:"choice",
            choices: ["Manager","Engineer","Intern","Done"],
        })
         .then(({choice}) => {

             switch (choice) {
                 case "Manager":
                     addManager()
                     return "Manager"

                case "Engineer":
                    addEngineer()
                    return "Engineer"

                case "Intern":
                    addIntern()
                    return "Engineer"

                case "Done":
                    addManager()
                    return "Done"

    //             case "Engineer":
    //                 return "Engineer"

    //             case "Intern":
    //                 return "Intern"

    //             case "Done":

    //                 return "Done"
             }
         })
     
}


const getUserInput = () => {
    
        console.log('             ==========================')
        console.log("           Let's build an employee Database")
        console.log('            Follow the prompts and enjoy!')
        console.log('             ==========================')
   
    inquirer
        .prompt({
            type:"list",
            message:"Are you ready to begin?",
            name:"choice",
            choices: ["Yes","No"],
        })
        .then(({choice}) => {
            switch (choice) {
                case "Yes":
                    addEmployee()
                    return "Let's Begin"
                    
                case "No":
                    console.log("Restart Program when you're ready")

            }
        })
}

//const getBizInfo = ()

module.exports= {addEmployee, getUserInput}