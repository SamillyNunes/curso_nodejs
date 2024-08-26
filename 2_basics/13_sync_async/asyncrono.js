const fs = require('fs');

console.log('Inicio');

// neste caso o node nao espera o arquivo ser criado/modificado para continuar o programa
fs.writeFile("file2.txt", "oi", function(err){
    setTimeout(() => {
        console.log('Arquivo criado!');
    }, 1000);
});

console.log("Fim");