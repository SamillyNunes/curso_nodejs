const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res)=> {
    const urlInfo = url.parse(req.url, true);
    // pegando a partir do segundo item (comecando do indice 1, vai eliminar o /)
    const filename = urlInfo.pathname.substring(1);

    console.log(filename);

    if(filename.includes('html')){
        
        if(fs.existsSync(filename)){
            fs.readFile(filename, (err, data)=> {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            });
        } else {
            fs.readFile('404.html', (err, data)=> {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            });
        }

    } else {
        fs.readFile('404.html', (err, data)=> {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }


    
});

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`);
});