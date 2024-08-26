const x = 10;
const y= "Marcos";
const z = [1,2];

console.log(x,y,z);

// contagem de impressoes: marca quantas vezes foi executado
console.count(`O valor de x é: ${x}, contagem: `);
console.count(`O valor de x é: ${x}, contagem: `);
console.count(`O valor de x é: ${x}, contagem: `);

// variavel entre string, utilizando marcadores:
console.log("O nome é %s, ele eh dev", y)

// limpar o console
setTimeout(()=>{
    console.clear();
},2000);