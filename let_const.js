// let pode reatribuir valor.
// Utilizamos camelCase em variáveis
// Alt + setas = mover linhas
let nome // Declarou a variável, mas sem nenhum valor
nome = 'Fábio' // inicializando a variável
console.log(nome)
nome = 'Bianca' // reatribuição de valor
console.log(nome)

const nomeTeste = 'João'
console.log(nomeTeste)
// const não aceita reatribuição de valores.
// nomeTeste = 'Pedro' // retorna com erro
// console.log(nomeTeste)

const primeiroNumero = 5
const numeroString = '20'
const segundoNumero = 10

const resultado = primeiroNumero * segundoNumero
console.log(resultado)

const resultadoDuplicado = resultado * 2
console.log(resultadoDuplicado)

const resultadoTriplicado = resultado * 3 
console.log(resultadoTriplicado)

console.log(typeof primeiroNumero) // typeof para ver o tipo
console.log(typeof primeiroNumero, primeiroNumero) // primeiro o tipo e depois o valor
const aprovado = true

console.log(typeof aprovado, aprovado)

console.log(typeof numeroString) // tipo string

console.log(primeiroNumero + numeroString) // number + string = concatenação

console.log(typeof numeroString + primeiroNumero) // pega o tipo da primeiro e concatena com o segundo

console.log(typeof (numeroString + primeiroNumero)) // pega o tipo do primeiro
