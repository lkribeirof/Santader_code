//  Operadores booleanos: compararações

let number1 = 10;
let number2 = 12;

console.log(number1 ==  number2); // comparar valor
console.log(number1 === number2); // comparar valor e tipo de dado estritamente
console.log(number1 === '10');

console.log(number1 !== '10'); 

// !== para comparar tipo e valor
// != para comparar valor

const idade1 = 10;
const idade2 = 30;

console.log(idade1 >= 18 && idade2 >= 18); // verifica se as duas são maior que 18, AND
console.log(idade1 >= 18 || idade2 >= 18); // verifica se uma das pessoas são maior que 18, OR


console.log(!true);

console.log(!(idade1 >=18)); // retorna verdadeiro se a pessoa for menor de idade