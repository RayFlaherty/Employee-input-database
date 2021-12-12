//const Email = require('../_tests_/_mock_/Email.test')

class Employee {
    constructor(name,job,id,Email) {
        this.name = name
        this.job = job
        this.id = id
        this.email = Email
    }

    getName(){
        return this.name
    }

    getJob(){
        return this.job
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }
}


module.exports= Employee