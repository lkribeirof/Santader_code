var nome = 'Leonardo'; // string
var idade = 19; // number
var altura = 1.77; // number
var estudando = true //  boolean 


console.log(nome, typeof nome)
console.log(idade, typeof idade)
console.log(altura, typeof altura)
console.log(estudando, typeof estudando)

var nomeDoCorno = 'Willian'; // canel case, quando a primeira letra a partir da segunda palavra fica maiscula em variaveis

// Javascript tem tipagem dinamica: ele infere os tipos de dados

//Javascript possui uma tipagem fraca, ele facilmente lê strings e numbers juntos sem apresentar um erro


var semConteudo; // Declarando uma variável, valor undefined = variável declarada mas não definida

var curso = 'Front-end em React', topico = 'Javascript basico';

console.log(curso, topico) // declarando variaveis na mesma linha

// Não utilizar o var nos códigos javascript

// let é uma variável que permite ser alterada

// const é uma variável constante, não é permitido alterar uma constante após declarada

let notaAluno = 10;

notaAluno = 9;

console.log(notaAluno)


const nota1 = 10;
const nota2 = 8;

const somaNota = nota1 + nota2;
let mediaNota = somaNota / 2;

console.log('Soma das notas = ', somaNota)
console.log('Média das notas = ', mediaNota)

