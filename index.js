const inquirer = require('inquirer')
const Employee = require("./lib/employee")
const Manager = require("./lib/manager")

let team = []

const addManager = () => {
    return inquirer.prompt(
      [
        {
            name:  'managerName',
            type: 'input',
            message: 'What is your name?'
        },
        {
            name:  'managerId',
            type: 'input',
            message: 'What is your ID?'
        },
        {
            name:  'managerEmail',
            type: 'input',
            message: 'What is your Email?'
        },
        {
            name:  'managerOfficeNumber',
            type: 'input',
            message: 'What is your office number?'
        },
    ]) .then(managerInfo => {
        // const { name, id, email, officeNumber } = managerInfo   << returns undefined
        const name = managerInfo.managerName;
        const id = managerInfo.managerId;
        const email = managerInfo.managerEmail;
        const officeNumber = managerInfo.managerOfficeNumber;

        const manager = new Manager(name,id,email,officeNumber);

        team.push(manager);
        console.log("new Manager:", manager);
        console.log("team:", team);
    })  
};



// {
    // type name message
    // when (answers){      <<< conditional -if they say yes to new team
        // add team member() 
    // }
// }


 

// add team member  << main menu
    // ? intern
    // ? engineer
    // ? done buliding
        // send to genhtml

// add Intern
    // ? id name email +school
    // add to team[]
    // add team member (back to main menu)

// add Engineer
    // ? id name email +github
    // add to team[]
    // add team member (back to main menu)


// send team[] to generate html
    // receive html
// write file with response ^


addManager()
// .then >> addTeamMember