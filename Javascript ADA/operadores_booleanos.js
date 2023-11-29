// OPERADORES BOOLEANOS

//Igualdade:    == (ou ===)
//Desigualdade: != (ou !==)
//Maior que:    >
//Menor que:    <
//Maior ou igual:   >=
//Menor ou igual:   <=

const numero = 10;
console.log(numero == 10);
console.log(numero > 20);

// Conjuções logicas

// AND - &&

let idade = 26;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true;

console.log('Posso dirigir?', possoDirigir);

// OR - || 

idade = 40

const votoFacultativo = idade <= 18 || idade > 70;

// NOT - !