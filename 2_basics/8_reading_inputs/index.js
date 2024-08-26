// A medida que importa uma biblioteca, tbm eh possivel ja executa-la com algumas 
// ordens pre estabelecidas, como no caso abaixo
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Qual sua linguagem de programação favorita?", (answer)=>{

    if(answer.toLowerCase()==="python"){
        console.log("Que massa!");
    }

    console.log(`A minha linguagem preferida é ${answer}`);
    readline.close();
});