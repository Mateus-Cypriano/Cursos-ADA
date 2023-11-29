// Coerção (Conversão) de tipos.

// - 1 Coerção Explicita (Manual)
const numero = 10;
console.log(numero, typeof numero);

const numeroEmFormatoDeString = String(numero);
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.log(Number('1111'));
console.log('1111')

console.clear()

// 2 - Coerção implicita (Automática)

console.log(10 + '1');
console.log('10' - 1);