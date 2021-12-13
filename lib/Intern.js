const Employee = require('./Employee')

class Intern extends Employee {
    constructor (name,job,id,Email,school){
        super(name,job,id,Email)
        this.school = school
    }

    getSchool(){
        return this.school
    }

    setSchool(){
        this.school = ""
        return this.school
    }
}

module.exports=Intern