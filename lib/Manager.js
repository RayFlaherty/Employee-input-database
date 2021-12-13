// const Employee = require("./Employee")

// class Manager extends Employee{
//     constructor(Office){
//         this.Office= Office
//     }

//     getOffice(){
//         return this.Office
//     }
// }


const Employee = require ('./Employee')

class Manager extends Employee{
    constructor(name,job,id,Email,office) {
        super(name,job,id,Email)
        this.office= office
    }

    getOffice () {
        return this.office
    }

    setOffice () {
        this.office = num
        return this.office
    }
}

module.exports= Manager