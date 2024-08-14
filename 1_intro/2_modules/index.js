// require eh uma forma de importar padrao, e um pouco mais antiga, no node
const fs = require('fs'); // file system

fs.readFile('file.txt', 'utf8', (err, data)=>{
    if(err){
        console.log(err);
    }

    console.log(data);
});