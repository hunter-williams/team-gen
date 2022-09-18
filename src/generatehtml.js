// // create Manager/Engineer/Intern card
// const generateManager = function (manager) {
//     return `
//         <div class="card">
//             <div class="title ${manager.getRole()}">
//                 <h2>Manager</h2>
//                 <h3>${manager.name}</h3>
//             </div>
//             <div class="body">
//                 <p class="id">ID: ${manager.id}</p>
//                 <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
//                 <p class="office">Office Number: ${manager.officeNumber}</p>
//             </div>
//         </div>
//     `;
// }
// const generateEngineer = function (engineer) {
//     return `
//         <div class="card">
//             <div class="title ${engineer.getRole()}">
//                 <h2>engineer</h2>
//                 <h3>${engineer.name}</h3>
//             </div>
//             <div class="body">
//                 <p class="id">ID: ${engineer.id}</p>
//                 <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
//                 <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
//             </div>
//         </div>
//     `;
// }
// const generateIntern = function (intern) {
//     return `
//         <div class="card">
//             <div class="title ${intern.getRole()}">
//                 <h2>intern</h2>
//                 <h3>${intern.name}</h3>
//             </div>
//             <div class="body">
//                 <p class="id">ID: ${intern.id}</p>
//                 <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
//                 <p class="school">School: ${intern.school}</p>
//             </div>
//         </div>
//     `;
// }

// // Generate HTML page
// const generateTeamPage = function (employeeCards) {
//     return `
//     <!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="./style.css" />
//   </head>
//   <body>
//     <header>
//         <h1>Team Generator</h1>
//     </header>
//     <div class="cardsContainer">
//         ${employeeCards}
//     </div>
            
//   </body>
//   </html>
//   `;
// }  

// generateHtml = (team) => {
//     console.log('generate html team', team)
//     let employeeCardsArray = []
//     for (let i = 0; i < team.length; i++){
//         let employee = team[i]

//         switch (employee.getRole()) {
//             case 'Manager': //if
//                 employeeCardsArray.push(generateManager(employee))
//                 break;       
//             case 'Engineer': 
//                 employeeCardsArray.push(generateEngineer(employee))
//                 break;       
//             case 'Intern': 
//                 employeeCardsArray.push(generateIntern(employee))
//                 break;       
//             default: //else
//                 break;      
//         }
//     }
//     const allEmployeeCards = employeeCardsArray.join('')
//     const generateTeam = generateTeamPage(allEmployeeCards)
//     return  generateTeam
// }

// module.exports = generateHtml


// create Manager card
const generateManager = function (manager) {
    return `
        <div class="card">
            <div class="title ${manager.getRole()}">
                <h2>Manager</h2>
                <h3>${manager.name}</h3>
            </div>
            <div class="body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    `;
}
// create Engineer card
const generateEngineer = function (engineer) {
    return `
        <div class="card">
            <div class="title ${engineer.getRole()}">
                <h2>Engineer</h2>
                <h3>${engineer.name}</h3>
            </div>
            <div class="body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    `;
}
// create Manager card
const generateIntern = function (intern) {
    return `
        <div class="card">
            <div class="title ${intern.getRole()}">
                <h2>Intern</h2>
                <h3>${intern.name}</h3>
            </div>
            <div class="body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    `;
}

// Generate HTML page
const generateTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>

    <header>
        <h1>Team Generator</h1>
    </header>
  
    <div class="cardsContainer">
        ${employeeCards}
    </div>
            
  </body>
  </html>
  `;
}  


// push array to page 
generateHtml = (team) => {
    console.log("generate html team", team)

    // array for team 
    let employeeCardArray = []; 

    for (let i = 0; i < team.length; i++) {
        let employee = team[i];
        // const role = employee.getRole(); 

        switch (employee.getRole()) {
            case 'Manager':
                // const managerCard = ;
                employeeCardArray.push( generateManager(employee) );
                break;
            case 'Intern':
                // const internCard = ;
                employeeCardArray.push( generateIntern(employee) );
                break;
            case 'Engineer':
                // const engineerCard = ;
                employeeCardArray.push( generateEngineer(employee) );
                break;
            default:
                break;
        }
        
    }

    // joining strings 
    const employeeCards = employeeCardArray.join('');
    console.log(employeeCards);

    // return to generated page
    const generateTeam = generateTeamPage(employeeCards); 
    // console.log("about to return", generateTeam)
    return generateTeam;
    // return generateTeamPage(employeeCards);
}

module.exports = generateHtml;