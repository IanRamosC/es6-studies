//multiline string with template strings
console.log(`This is the first line.
Now, the second line`);

let nome = "Ian";
let idade = 20;

//String Interpolation

//var
console.log(`Nome: ${nome}
Idade: ${idade}`);

let peso = 80;
let altura = 1.87;
let imc = parseInt( peso / ( Math.pow(altura, 2) ) ).toFixed(1);

//var + expression
console.log(`Peso: ${peso}
Altura: ${altura}
IMC: ${imc}`);
