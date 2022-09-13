class Employee {
    constructor(id, name, email){
        this.id = id
        this.name = name
        this.email = email
    }

    getName(){
        console.log(`Name: ${this.name}`)
        return this.name
    }

    getId(){
        console.log(`ID: ${this.id}`)
        return this.id
    }

    getEmail(){
        console.log(`Email: ${this.email}`)
        return this.email
    }

    getRole(){
        console.log(`Role: Employee`)
        return 'employee'
    }
}

module.exports = Employee;