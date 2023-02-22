function meuEscopo () {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    const pessoas = []
    /*form.onsubmit = function (evento) {
        evento.preventDefault()
        alert(1)
        console.log('Foi enviado')
    };*/

    // Outra maneira de controlar um evento é com o addEventListener, nesse caso impede que a página recarregue como o padrão:
    /*let contador = 1
    function recebeEventoForm (evento) {
        evento.preventDefault()
        console.log(`Form não foi enviado ${contador}`)
        contador++
    }
    form.addEventListener('submit', recebeEventoForm)*/

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        //console.log(nome.value, sobrenome, peso, altura)
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}`
    }
    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()