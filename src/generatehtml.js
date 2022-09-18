// create Manager/Engineer/Intern card
const generateManager = function (manager) {
    return `
    <div class="container">
        <div class="card">
            <div class="title">
                <h2>Manager</h2>
                <h3>${manager.name}</h3>
            </div>
            <div>
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}
const generateEngineer = function (engineer) {
    return `
    <div class="container">
        <div class="card">
            <div class="title">
                <h2>engineer</h2>
                <h3>${engineer.name}</h3>
            </div>
            <div>
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}
const generateIntern = function (intern) {
    return `
    <div class="container">
        <div class="card">
            <div class="title">
                <h2>intern</h2>
                <h3>${intern.name}</h3>
            </div>
            <div>
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
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
    <link rel ="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
        </nav>
    </header>
    <main>
        <div class="cardsContainer">
                
            <!-- Employee Cards -->
                ${employeeCards}
                
        </div>
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  </body>
  </html>
  `;
}  

generateHtml = (team) => {
    console.log('generate html team', team)
    let employeeCardsArray = []
    for (let i = 0; i < team.length; i++){
        let employee = team[i]

        switch (employee.getRole()) {
            case 'Manager': //if
                employeeCardsArray.push(generateManager(employee))
                break;       
            case 'Engineer': 
                employeeCardsArray.push(generateEngineer(employee))
                break;       
            case 'Intern': 
                employeeCardsArray.push(generateIntern(employee))
                break;       
            default: //else
                break;      
        }
    }
    const allEmployeeCards = employeeCardsArray.join()
    const generateTeam = generateTeamPage(allEmployeeCards)
    return  generateTeam
}

module.exports = generateHtml