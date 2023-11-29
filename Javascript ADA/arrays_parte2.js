// Arrays - Parte 2 - Metodos Arrays

const arr1 = [30, 12, 45, 34, 29];
let arr2 = []

// Fatiamento: Slice

console.log(arr1.slice(0, 2));
console.log(arr1.slice(1));

// Adicionando elementos: push | unshift

console.clear()

console.log('Antes de adicionar:', arr2);

arr2.push(10, 20, 30)


console.log('Depois de adicionar: ', arr2)

// O metodo push sempre adiciona no final

console.log('Antes de adicionar com unshift', arr2)

arr2.unshift(0);

console.log('Depois de adicionar com unshift', arr2);

// Removendo elementos: pop | shift

console.clear()

console.log('Antes de remover com o pop:', arr2);

arr2.pop();

console.log('Depois de remover com o pop:', arr2);

console.log('Antes de remover como shift:', arr2);

arr2.shift();

console.log('Depois de remover com o shift', arr2);

// Concatenando arrays: concat
console.clear()

console.log('arr1', arr1);
console.log('arr2', arr2);

console.log(arr1.concat(arr2));

// Buscando elementos: idexof | lastIndexof
console.clear()
console.log(arr1);

let indiceDoElemento34 = arr1.indexOf(34);

console.log(indiceDoElemento34);

let arr3 = [1, 2, 3, 3, 5, 3]

console.log(arr3.lastIndexOf(3));

// Descobrindo a existencia de um elemento: includes

console.clear()

console.log(arr1);

console.log(arr1.includes(10));

// Invertendo um array: reverse

console.log('arr1 normal:', arr1);

const arrInvertido = arr1.reverse()

console.log('arr1 invertido: ', arrInvertido);