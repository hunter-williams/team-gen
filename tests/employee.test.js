const Employee = require("../lib/employee");

describe("employee", () => {
    it('should create an employee object', () => {
        const employee = new Employee()

        expect(typeof(employee)).toEqual('object')

    })    
    it('should attach a name', () => {
        const name = 'hunter'
        const employee = new Employee(name)

        expect(employee.name).toBe(name)

    })
  });