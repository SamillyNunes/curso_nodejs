const path = require('path');

// caminho absoluto:
console.log(path.resolve('teste.txt'));

// formar um caminho:

const midFolder = 'insights';
const fileName = 'sami.txt';

const finalPath = path.join('/', 'arquivos', midFolder, fileName);

console.log(finalPath);