const Engineer = require("../lib/engineer");

describe("engineer", () => {
    it('should create an engineer object', () => {
        const engineer = new Engineer()

        expect(typeof(engineer)).toEqual('object')

    })    
    it('should attach a github', () => {
        const github = 'github'
        const engineer = new Engineer(github)

        expect(engineer.github).toBe(github)

    })
  });