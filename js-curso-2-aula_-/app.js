let ListaNumero= [];
let limite= 10;
let numeroSecreto= GerarNum();

function exibirTextoTela(tag, texto){
    let campo= document.querySelector(tag);
    campo.innerHTML= texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextoTela('h1', 'Jogo do número secreto');
exibirTextoTela('p', 'Escolha um numero de 1 a 10');


function verificarChute(){
    let chute= document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoTela('h1', 'Acertou');
        exibirTextoTela('p', 'Você descobriu o numero secreto');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto){
            exibirTextoTela('p', 'O número secreto é menor');
        } else {
            exibirTextoTela('p', 'O número secreto é maior');
        }
        limparCampo();
    }
}

function exibirMensagemInicial(){
    exibirTextoTela('h1', 'Jogo do número secreto');
    exibirTextoTela('p', 'Escolha um numero de 1 a 10');
    

}
function reiniciarJogo(){
    numeroSecreto= GerarNum();
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limparCampo(){
    chute= document.querySelector('input');
    chute.value= ' ';


}
function GerarNum() {
    let numeroEscolhido= parseInt(Math.random()*limite +1);
    let qtdElementos= ListaNumero.length;
    if(qtdElementos== limite){
        ListaNumero= [];
    }

    if (ListaNumero.includes(numeroEscolhido)){
        return GerarNum();
    }else {
        ListaNumero.push(numeroEscolhido);
        return numeroEscolhido;
    }
    
}