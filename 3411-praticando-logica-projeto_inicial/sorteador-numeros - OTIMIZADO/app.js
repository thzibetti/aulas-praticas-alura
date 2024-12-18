function sortear() {
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let quantidade = parseInt(document.getElementById('quantidade').value);

    console.log (de);
    console.log (ate);
    console.log (quantidade);
    obterNumero(de, ate, quantidade);
    alterarStatusBotao();
}

function obterNumero (min, max, quantidade) {
    let listaNumerosSorteados = [];
    for (let i = 0; i < quantidade; i++) {
        let numerosSorteados = Math.floor(Math.random() * (max - min + 1)) + min;

        while (listaNumerosSorteados.includes(numerosSorteados)) {
            numerosSorteados = Math.floor(Math.random() * (max - min + 1)) + min;
        }

        listaNumerosSorteados.push(numerosSorteados);
}

listaNumerosSorteados.sort((a, b) => a - b);

    let textoNumeros = listaNumerosSorteados.join(", ");
    let elementoResultado = document.querySelector('#resultado .texto__paragrafo');
    elementoResultado.innerText = `Números sorteados: ${textoNumeros}`;
    console.log(textoNumeros)
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    } else { 
        botao.classList.remove('container__botao')
        botao.classList.add('container__botao-desabilitado')
    }
    
}

function reiniciar() {
    document.getElementById('de').value = '';
    document.getElementById('ate').value= '';
    document.getElementById('quantidade').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao();
}