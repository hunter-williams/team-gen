const Employee = require("./employee")

class Engineer extends Employee{
    constructor(id, name, email, github){
        super(id, name, email)
        this.github = github
    }

    getGithub(){
        console.log(`Github: ${this.github}`)
        return this.github
    }

    getRole(){
        console.log(`Role: Engineer`)
        return 'engineer'
    }
}

module.exports = Engineer;