const Employee = require("./employee")

class Intern extends Employee{
    constructor(id, name, email, school){
        super(id, name, email)
        this.school = school
    }

    getSchool(){
        // console.log(`school: ${this.school}`)
        return this.school
    }

    getRole(){
        // console.log(`Role: Intern`)
        return 'Intern'
    }
}

module.exports = Intern;