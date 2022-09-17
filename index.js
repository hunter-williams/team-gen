const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const generateHtml = require('./src/generateHtml')

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
        const { managerName, managerId, managerEmail, managerOfficeNumber } = managerInfo

        const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);

        team.push(manager);
        console.log("new Manager:", manager);
        console.log("team:", team);
    })  
};
const addEmployee = () => {
    return inquirer.prompt(
      [
        {
            name:  'add',
            type: 'confirm',
            message: 'Do you want to add another team member?'
        },
        {
            name:  'employeeType',
            type: 'list',
            message: 'What kind of employee would you like to add?',
            choices: ['Engineer', 'Intern'],
            when: (answers) => answers.add === true
        },
        {
            name:  'engineerName',
            type: 'input',
            message: 'What is your engineers name?',
            when: (answers) => answers.employeeType === 'Engineer'
        },
        {
            name:  'engineerId',
            type: 'input',
            message: 'What is your engineers ID?',
            when: (answers) => answers.employeeType === 'Engineer'
        },
        {
            name:  'engineerEmail',
            type: 'input',
            message: 'What is your engineers email?',
            when: (answers) => answers.employeeType === 'Engineer'
        },
        {
            name:  'engineerGithub',
            type: 'input',
            message: 'What is your engineers github?',
            when: (answers) => answers.employeeType === 'Engineer'
        },
        {
            name:  'internName',
            type: 'input',
            message: 'What is your interns name?',
            when: (answers) => answers.employeeType === 'Intern'
        },
        {
            name:  'internId',
            type: 'input',
            message: 'What is your interns ID?',
            when: (answers) => answers.employeeType === 'Intern'
        },
        {
            name:  'internEmail',
            type: 'input',
            message: 'What is your interns email?',
            when: (answers) => answers.employeeType === 'Intern'
        },
        {
            name:  'internSchool',
            type: 'input',
            message: 'What school does your intern attend?',
            when: (answers) => answers.employeeType === 'Intern'
        },
    ]) .then(employeeInfo => {
        if(employeeInfo.add && employeeInfo.employeeType === 'Engineer'){
        
            const { engineerName, engineerId, engineerEmail, engineerGithub } = employeeInfo

            const engineer = new Engineer( engineerName, engineerId, engineerEmail, engineerGithub );

            team.push(engineer);
            console.log("new Engineer:", engineer);
            console.log("team:", team);
            addEmployee()
        }       
         if(employeeInfo.add && employeeInfo.employeeType === 'Intern'){
        
            const { internName, internId, internEmail, internSchool } = employeeInfo

            const intern = new Intern( internName, internId, internEmail, internSchool );

            team.push(intern);
            console.log("new Intern:", intern);
            console.log("team:", team);
            addEmployee()
        } if(!employeeInfo.add){
            writeFile(team)
        }
    })  
};
const writeFile = team => {
    const html = generateHtml(team);
    console.log("write file html response", html);

    fs.writeFile('./dist/index.html',html,error => {
        if(error){
            console.log(error)
            return
        }else{
            console.log('success check dist for index.html')
        }
    })
}

addManager()
    .then(addEmployee)
    .catch(error => {
        console.log(error)
    }); 

