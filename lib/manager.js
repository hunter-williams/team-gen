const Employee = require("./employee")

class Manager extends Employee{
    constructor(id, name, email, officeNumber){
        super(id, name, email)
        this.officeNumber = officeNumber
    }

    getOfficeNumber(){
        // console.log(`officeNumber: ${this.officeNumber}`)
        return this.officeNumber
    }

    getRole(){
        // console.log(`Role: Manager`)
        return 'Manager'
    }
}

module.exports = Manager;