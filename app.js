function sortear() {
    let numeroInicialDo = parseInt(document.querySelector('#de').value);
    let numeroFinalAte = parseInt(document.querySelector('#ate').value);
    console.log (numeroInicialDo);
    console.log (numeroFinalAte);

    verificarNumero(numeroInicialDo, numeroFinalAte);
}

function verificarNumero(numeroInicialDo, numeroFinalAte) {
    let escolhido = parseInt(Math.random() * (numeroFinalAte - numeroInicialDo + 1)) + numeroInicialDo;
    console.log(`Número sorteado ${escolhido}`)
}