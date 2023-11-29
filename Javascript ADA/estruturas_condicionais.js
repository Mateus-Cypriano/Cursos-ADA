// Estruturas condicionais 

const idade = 20;

if(idade >= 18) {
    console.log('Você é maior de idade!');
} else {
    console.log('Você não é maior de idade!');
}

// se media for >= 7, aprovado
// Se media < 7 e media >= 5, Recuperação
// Se media < 5, Reprovado.

console.clear();

let media = 4;

if(media >= 7){
    console.log('Aprovada(o)')
} else if (media >= 5) {
    console.log('Recuperação');
} else{
    console.log('Reprovado')
}