// Objetos

// Como criar um objeto no Javascript?

let pessoa = {
    nome: 'Mateus',
    idade: 26,
}

console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa.idade);

// Como adicionar um par de chave-valor?

pessoa.altura = 1.80

console.log(pessoa)

// Como remover um par de chave-valor?

delete pessoa.altura

console.log(pessoa);

// Como percorrer um objeto?
console.clear()

for(let chave in pessoa) {
    console.log(chave);
}

