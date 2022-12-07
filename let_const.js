// let pode reatribuir valor.
// Alt + setas = mover linhas
let nome
nome = 'Fábio'
console.log(nome)
nome = 'Bianca'
console.log(nome)

const nometeste = 'João'
console.log(nometeste)
// const não aceita reatribuição de valores.
// nometeste = 'Pedro' // retorna com erro
// console.log(nometeste)

const primeiroNumero = 5
const numeroString = '20'
const segundoNumero = 10
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2

let resultadoTriplicado = resultado * 3
resultadoTriplicado = resultadoTriplicado + 5

/*var resultadoTriplicado = resultado * 3
var resultadoTriplicado = resultadoTriplicado + 5*/

console.log(resultadoTriplicado)
console.log(typeof primeiroNumero) // tipo number
console.log(typeof numeroString) // tipo string
console.log(primeiroNumero + numeroString) // number + string = concatenação
console.log(typeof numeroString + primeiroNumero) // pega o tipo da primeiro e concatena com o segundo
console.log(typeof (numeroString + primeiroNumero)) // pega o tipo do primeiro
