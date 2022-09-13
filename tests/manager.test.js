const Manager = require("../lib/manager");

describe("manager", () => {
    it('should create an manager object', () => {
        const manager = new Manager()

        expect(typeof(manager)).toEqual('object')

    })    
    it('should attach a officeNumber', () => {
        const officeNumber = '420'
        const manager = new Manager("", "", "", officeNumber)

        expect(manager.officeNumber).toBe(officeNumber)

    })
  });