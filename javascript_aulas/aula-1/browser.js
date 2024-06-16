const prompt = require('readline-sync')

const idade = prompt.question('Qual a sua idade ?');

console.log('O usuário tem = ', idade);

const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);

// Coerção explicíta ou conversão manual

console.log(Number('A')); // NaN = not a number

console.log(String(10), typeof String(10))

console.log(Boolean(-1)) // qualquer valor diferente de 0 = true, somente 0 = false

// Coerção implicita

console.log(1 + '1') // ele transformou tudo em string, se for soma
console.log(10 - '5') // transformou tudo em number, se não for soma 