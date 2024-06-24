let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let despistandoTchongos = numerosAletorios();
    console.log("XERETA NÃO TCHONGO!");
    console.log(`${despistandoTchongos}${numeroSecreto +1}`);

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto ;
    responsiveVoice.speak(texto, "UK English Female", {rate:1.2}); //ela não sabe falar BEM VINDE, tchongamonga
}

function exibirmensagemInicial(){
    exibirTextoNaTela("h1", "BEM VINDO AO JOGO DO NUMERO SECRETO");
    exibirTextoNaTela("p", `escolha um numero de 1 a ${numeroLimite}`);
}
exibirmensagemInicial();

function numerosAletorios(){
    return parseInt(Math.random() * 50000 + 1);
}

function verificarChute() {
    let chute = document.querySelector("input").value;
    console.log("click!");

    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? "tentativas!" : "tentativa!";
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas}`;
        console.log(listaNumerosSorteados);
        exibirTextoNaTela("h1", "ACERTOOO!!!!");
        exibirTextoNaTela("p", `${mensagemTentativas} ${palavraTentativa}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela("p", `Menos que ${chute}!`);
            exibirTextoNaTela("h1", "Tenta Denovo!       ");
            tentativas = tentativas + 1;
    } else {
        if (chute < numeroSecreto){
            exibirTextoNaTela("p", `Mais que ${chute}!`);
            exibirTextoNaTela("h1", "Tenta Denovo!       ");
            tentativas = tentativas + 1;

        }
        } 
        limparCampo();     
    }  
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    despistandoTchongos = numerosAletorios();
    console.log(`${despistandoTchongos}${numeroSecreto +1}`);
    limparCampo();
    tentativas = 1;
    exibirmensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
    let qntNumerosSorteados = listaNumerosSorteados.length;
    if (qntNumerosSorteados == numeroLimite){
        listaNumerosSorteados = [];
    }  
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

