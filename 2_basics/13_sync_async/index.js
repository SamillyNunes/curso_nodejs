const fs = require("fs");

console.log("Início");

// neste caso o node obrigatoriamente espera o arquivo ser criado/modificado para continuar o programa
fs.writeFileSync('file.txt', "hello world");

console.log("Fim");