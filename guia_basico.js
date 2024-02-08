console.log('Meu nome é "Fábio". Estou aprendendo JS às', 8, 'da manhã.');
// ', 8, ' para reconhecer como Number no meio dessa String

//** faz a potênciação
//% retorna o resto da divisão

/*let contador = 5; 
console.log(contador++); // mostra primeiro o valor antigo depois incrementa
console.log(contador); // mostra numero incrementado
console.log(++contador); // incrementa e depois mostra o valor
console.log(--contador); // decremento e depois mostra o valor
// maneira correta para não gerar futuros bugs, incrementa depois chama
contador++;
console.log(contador);*/

const add = 50
let contador = 10
contador = contador + add
console.log(contador)
contador = contador + add
console.log(contador) // 60
 
// Ou assim, que é mais prático adiciona 10 + 50 na primeira chamada, depois vai incrementando 50 cada vez que é chamado.
contador += 5 
console.log(contador)
contador *= 2
console.log(contador)
contador **= 2
console.log(contador)
contador -= 100
console.log(contador)

/*const num1 = 10
const num2 =  5
console.log(num1 + num2) // 105 fez concatenação
console.log(num1 * num2) // NaN - Not a number é um erro de entendimento do motor JS, um exemplo é quando tentamos multiplicar um number com uma string.
 
const num1 = 10
// const num2 =  parseInt('5.2') // converte para number, especificamente inteiro.
// const num2 =  parseFloat('5.2') // pega as casas decimais depois da virgula.
const num2 = Number('5.2')
console.log(num1 + num2)*/

/*window.alert('Mensagem ') // undefined pois não remete a nenhum lugar
window.confirm('Deseja realmente apagar?') // booleano
window.prompt('Digite o seu nome:') // string
 
let confirma = confirm('mensagem')
console.log(confirma) // para ver o valor gravado(o que foi retornado)
 
let num = prompt('digite um numero') // undefined pois não remete a nenhum lugar, mas o resultado foi gravado
console.log(num) // volta o numero em forma de string
num = parseFloat(num) // transforma em um number*/

/*let num1 = prompt('digite um número:')
let num2 = prompt('digite outro número:')
 
num1 = Number(num1)
num2 = Number(num2)
 
const resultado = num1 + num2
//alert('O resultado foi: ' + resultado)
alert(`O resultado foi: ${resultado}`)*/

/*let varA = 'A'
let varB = 'B'
let varC = 'C'
[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC)*/

/*let umaString = 'Um texto'
console.log(umaString.indexOf('o', 3))
console.log(umaString.lastIndexOf('o', 3))
console.log(umaString.match(/[a-z]/g)) // retorna todas as letras de a até z minuscula
console.log(umaString.match(/[a-z]/))
console.log(umaString.search(/x/))
console.log(umaString.replace('Um', 'Outro'))
console.log(umaString.replace(/t/, 'z')) // só a primeira é substituida
console.log(umaString.replace(/t/g, 'z')) // sobstitui todas
console.log(umaString.length) // tamanho, indice 0 conta como 1
console.log(umaString.slice(3 ,5))
console.log(umaString.slice(-5 ,-1))*/

/*window.document.body.innerHTML = 'Algum texto' // vai substituir
window.document.body.innerHTML += 'ao final' // concatenar no final*/

/*const nome = prompt('Digite seu nome completo:')
 
document.body.innerHTML += `Seu nome é: <strong>${nome}</strong><br/>`
document.body.innerHTML += `Seu nome tem <strong>${nome.length} letras</strong><br/>`
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong><br/>`
document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? <strong>${nome.indexOf('a')}</strong><br/>`
document.body.innerHTML += `Qual o último índice da letra a no seu nome? <strong>${nome.lastIndexOf('a')}</strong><br/>`
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong><br/>`
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong><br/>`
document.body.innerHTML += `<strong>${nome.toUpperCase()}</strong><br/>`
document.body.innerHTML += `<strong>${nome.toLowerCase()}</strong><br/>`*/

/*let num1 = 1500
let num2 = 2.5
let num3 = 10.5784582
 
console.log(num1.toString(2)) // transforma em binario ou () string
console.log(num3.toFixed(2)) // pega até a segunda casa decimal
console.log(Number.isInterger(num1)) // verificar se é inteiro ou não*/

/*let num1 = 9.5785
 
// let num2 = Math.floor(num1) // arredonda para baixo
// let num2 = Math.ceil(num1) // arredonda para cima
// let num3 = Math.round(7.4457) // arredonda para o mais próximo
 
console.log(num2)
console.log(num3)
console.log(Math.max(1,2,3,20,-5,-1))
 
const aleatorio = Math.random() * (10 - 5) + 5 // numero aleatório entre 10 e 5
// const aleatorio = Math.round(Math.random() * (10 - 5) + 5) // arredondado
console.log(aleatorio)*/

/*const alunos = ['Luiz', 'Maria', 'João']
alunos.push('Fábio') // add ao final(melhor maneira)
alunos.push('Bia')
 
alunos[alunos.lenght] = 'Bernardo' // add ao final
console.log(alunos)
 
alunos[3] = 'Cecília' // altera
console.log(alunos)
 
alunos.unshift('Luiza') // add ao começo
console.log(alunos)
 
alunos.pop(); // remove do final, mas não altera se foi adicionado pelo método lenght
const removido = alunos.pop() // guardar e remover
console.log(removido)
console.log(alunos)
 
const excluido = alunos.shift() // guarda e remove do começo
console.log(excluido)
console.log(alunos)
 
delete alunos[1]
console.log(alunos) // não tem como armazenar
 
console.log(alunos.slice(0 , 3)) // não pega a posição 3 ou
console.log(alunos.slice(0 , -2)) // pega a posição 0 e elimina os 2 ultimos
 
console.log(typeof alunos)
console.log(alunos instanceof Array) // para descobrir se esse objeto é um array*/

/*const raiz = function(n) {
    return n ** 0.5
}
 
const raiz = (n) => {
    return n ** 0.5
}
 
const raiz = n => n ** 0.5*/

/*// valores primitivos são copiados quando seus valores são passados(atribuidos =)
 
let a = 'A'
let b = a // copiando o valor de a para variável b
console.log(a, b)
 
a = 'outra coisa'
console.log(a, b) // alterando o valor de a, não afeta o valor de b, pois foi feita uma copia
 
// array, object e function são mutáveis, apontam para o mesmo valor na memória, ou seja, quaisquer modificações de valores, os dois são afetados(utilizam a mesma memória)
 
let x = [1,2,3]
let y = x
console.log(x, y)
 
x.push(4)
console.log(x, y)*/