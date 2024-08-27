const fs = require('fs');

if(!fs.existsSync('./myfolder')){
    console.log('A pasta é inexistente!');
    fs.mkdirSync('./myfolder');
    console.log('Pasta criada');
} else {
    console.log('Pasta existente!!');
}
