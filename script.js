//Define as variaveis que salvarão o status do jogo
let sequenciaCores = [];
let ordemDosClicks = [];
let score = 0;
let statusDoJogo = 0;

//Tabela de cores
//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

//Tabela de estados - aceita ou não a entrada de clicks do player para manter adequada
//a sequência de animcação dos blinks
//0 - faseComputador
//1 - faseInputPlayer

//Seleciona cada um dos elementos coloridos através de sua classe
const blue   = document.querySelector("#blue");
const red    = document.querySelector("#red");
const green  = document.querySelector("#green");
const yellow = document.querySelector("#yellow");

//Vincula o evento de click em cada uma das cores, chamando a função click com a cor selecionada
green.onclick  = () => handleClick(0);
red.onclick    = () => handleClick(1);
yellow.onclick = () => handleClick(2);
blue.onclick   = () => handleClick(3);

//Inicia um novo jogo
function startGame() {
    alert("Bem vindo ao Gênius! Iniciando um novo jogo!");
    score = 0;
    newLevel();
}

//O jogador começara um novo nível
function newLevel() {
    statusDoJogo = 0;
    ordemDosClicks = [];
    addNewColoredElementToSequence();
    blinkAllColoredElementSequence();
    statusDoJogo = 1;
}

//Adiciona nova cor na sequencia aleatória para as cores serem sorteadas
function addNewColoredElementToSequence() {
    //nova cor aleatoria
    let numeroCor = Math.floor(4 * Math.random());
    //adiciona nova cor a sequencia aleatoria
    sequenciaCores.push(numeroCor);
}

//Pisca todos os elementos coloridos na sequencia da jogada
function blinkAllColoredElementSequence() {
    for(let indice=0; indice<sequenciaCores.length; indice++) {
        blinkColoredElement(sequenciaCores[indice], indice);
    }
}

//Retorna o elemento associado a cor, de acordo com o número da cor
function getColoredElement(numeroCor) {
    switch (numeroCor) {
        case 0: return green;
        case 1: return red;
        case 2: return yellow;
        case 3: return blue;
        /* Como o switch finaliza com o return, não é necessário o break */
    }
}

//Realiza uma animação de piscar ao elemento com cor. O indice indica em qual
//posicao da sequencia estamos (ajustando o tempo de acordo) e o temporizador
//ajusta o tempo de duração do blink.
function blinkColoredElement(numeroCor, indice, temporizador = 500) {
    //segundo nivel em diante teremos uma pequena espera de 250 ms entre dois blinks completos
    let tempo = (indice + 1) * (temporizador + 250*(indice > 0 ? 1:0));
    let elementoColorido = getColoredElement(numeroCor);
    //aplica a opacidade via classe do CSS
    setTimeout(() => {elementoColorido.classList.add("selected");}, tempo);
    //remove a opacidade via classe do CSS
    setTimeout(() => {elementoColorido.classList.remove("selected");}, tempo + temporizador);
}

//Adiciona um clique a ordem de cores clicadas e realiza o feedback visual na cor selecionada (pisca o elemento)
function handleClick(colorNumber) {
    //se for a fase de input do player
    if(statusDoJogo === 1){
        ordemDosClicks.push(colorNumber); //adiciona ao array de cores clicadas
        blinkColoredElement(colorNumber, 0 , 50); //considera como elemento 0
        verifyClickOrder();
    }
}

//Verifica se o jogador acertou ou errou os cliques, ajustando o fluxo do jogo.
//Notar que o fim possui 150ms de espera para finalizar as animações de clicks
function verifyClickOrder() {
    //se algum elemento da ordem dos clicks é diferente da sequencia de cores, indica o fim do jogo
    let finaliza = false;
    for (let i in ordemDosClicks) {
        if (ordemDosClicks[i] != sequenciaCores[i]) {
            finaliza = true;
            break;
        }
    }

    //finaliza o jogo, aguardando apenas tempo suficiente para ocorrer a animação do click
    if(finaliza == true){
        setTimeout( () => {
            endGame();
        }, 250);
    }

    //se não errou nenhuma cor na sequencia, aumenta os pontos, informa e reinicia
    if (ordemDosClicks.length == sequenciaCores.length) {
        score++;
        setTimeout( () => {
            alert(`Pontuação: ${score} \nVocê acertou! Iniciando próximo nível!`);
            newLevel();
        }, 250);
    }
}

//O jogador errou, finalizamos o jogo e informamos o jogo
function endGame() {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo!`);
    sequenciaCores = [];
    ordemDosClicks = [];
    startGame();
}

//Vamos iniciar o fluxo do jogo
startGame();