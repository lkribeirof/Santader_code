const prompt = require('readline-sync');

const idade = Number(prompt.question('Qual a sua idade ? '));

const maiorDeIdade = idade >= 18;

// Estrutura condicional, IF / ELSE

if(maiorDeIdade) {
    console.log('Você é maior de idade!');
} else {
    console.log('Você é menor de idade!');
}

// media aluno

// regras 

// Média >= 7 => aprovado
// Média < 7 e Média >= 5 => Prova Final.
// Média < 5 => reprovado

const mediaAluno = 6.99999;

if (mediaAluno >= 7) {
    console.log('Você foi aprovado!');
} else if (mediaAluno >= 5) {
    console.log('Prova final');
} else {
    console.log('Você foi reprovado!');
}