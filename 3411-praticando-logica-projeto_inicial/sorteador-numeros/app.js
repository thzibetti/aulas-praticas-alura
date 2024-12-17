function sortear() {
    let quantidadeNumeros = parseInt (document.querySelector('#quantidade').value)
    //let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroInicialDo = parseInt(document.querySelector('#de').value);
    let numeroFinalAte = parseInt(document.querySelector('#ate').value);
    console.log (numeroInicialDo);
    console.log (numeroFinalAte);
    console.log (quantidadeNumeros);

    verificarNumero(numeroInicialDo, numeroFinalAte, quantidadeNumeros);
    alterarStatusBotao();
}
//let numero = obterNumeroAleatorio (de,ate);
//console.log (numero);
//function verificarNumero(min,max);


function verificarNumero(numeroInicialDo, numeroFinalAte, quantidadeNumeros) {
    let listaNumerosSorteados = [];

    for (let i = 0; i < quantidadeNumeros; i++) //loop que fica gerando o número 
        {
            let escolhido = parseInt(Math.random() * (numeroFinalAte - numeroInicialDo + 1)) + numeroInicialDo;
    //while (sorteados.includes(numero)) {numero = obterNumeroAleatorio (de,ate);}
                if (listaNumerosSorteados.includes(escolhido)){
                i--; //nao deixa numero repetido
        } else {
            listaNumerosSorteados.push(escolhido); //adiciona na lista o numero escolhido
        }
        }
let textoNumeros = listaNumerosSorteados.join(", "); //transforma a string em texto
console.log (textoNumeros);

let elementoResultado = document.querySelector('#resultado .texto__paragrafo');
// let elementoResultado = document.getElementById('resultado');
// elementoResultado.innerHTML = <label class="texto__paragrafo">`Números sorteados: ${textoNumeros}`</label>
elementoResultado.innerText = `Números sorteados: ${textoNumeros}`;
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