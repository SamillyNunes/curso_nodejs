const inquirer = require("inquirer");

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual sua primeira nota?',
    },
    
    {
        name: 'p2',
        message: 'Qual sua segunda nota?',
    }
]).then((answers)=>{
    const n1 = parseInt(answers.p1);
    const n2 = parseInt(answers.p2);
    const average = (n1+n2)/2;

    console.log(average);
}).catch(err=> console.log(err));