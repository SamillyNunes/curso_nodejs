import inquirer from "inquirer";
import chalk from "chalk";

inquirer
  .prompt([
    {
      name: "name",
      message: "Digite o seu nome: ",
    },
    {
      name: "age",
      message: "Digite a sua idade: ",
    },
  ])
  .then((answers) => {

    if(!answers.name || !answers.age){
        throw new Error("O nome e a idade são obrigatórios!");
    }
    
    console.log(chalk.bgYellow.black(`${answers.name} tem ${answers.age} anos`));
  })
  .catch((err) => console.log(`Erro: ${err}`));
