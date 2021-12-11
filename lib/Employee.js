
class Employee {
    constructor(Manager,Engineer,Intern) {
        this.Manager= Manager
        this.Engineer= Engineer
        this.Intern= Intern
    }

    getManager(){
        return this.Manager
    }

    getEngineer(){
        return this.Engineer
    }

    getIntern(){
        return this.Intern
    }
}


module.exports= Employee