const nome = 'Fábio'
const sobrenome = 'Melo'
const idade = 27
const peso = 81
const altura = 1.7
let imc
let anoNascimento

imc = peso / (altura * altura)
console.log(imc)
anoNascimento = 2022 - idade
console.log(anoNascimento)

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg')
console.log('tem', altura, 'm de altura e seu IMC é de', imc)
console.log(nome, 'nasceu em', anoNascimento)

// Pode ser escrito assim:

console.log(
  nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + 'kg'
)
console.log('tem ' + altura + 'm de altura e seu IMC é de ' + imc)
console.log(nome + ' nasceu em ' + anoNascimento)

// Ou também por template strings(forma mais legível)

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`)
console.log(`tem ${altura}m de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)
