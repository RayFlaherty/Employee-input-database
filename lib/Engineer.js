const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name,job,id,Email,username){
        super(name,job,id,Email)
        this.username = username
    }

    getUser() { 
        return this.username
    }
}

module.exports= Engineer