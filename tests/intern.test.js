const Intern = require("../lib/intern");

describe("intern", () => {
    it('should create an intern object', () => {
        const intern = new Intern()

        expect(typeof(intern)).toEqual('object')

    })    
    it('should attach a school', () => {
        const school = 'udub'
        const intern = new Intern(school)

        expect(intern.school).toBe(school)

    })
  });