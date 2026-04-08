const buttonProduz = document.querySelector (' #produzir');
const buttonUpgrade = document.querySelector (' #upgrade');

const messageProducao = document.querySelector ( '#mostraproducao');
const messagePontuacao = document.querySelector ( '#monstra-pontuacao');
const messageCusto = document.querySelector ( '#mostra-custo');


let pontuacao = 0;
let producao = 1;
let custo = 10;

buttonProduz.addEventListener('click', () => {
    pontuacao = pontuacao + producao;
    buttonProduz.textContent = 'Pontuação: ' + pontuacao;
})

buttonUpgrade.addEventListener('click', () => {
    pontuacao -= custo;
     if (pontuacao >=0){
        pontuacao -= custo;
        producao++;
        custo = custo *1,5
        messagePontuacao.textContent = 'Pontuação:  ' + pontuacao;
        messageProducao.textContent = 'Produção: ' . producao; 
        messageCusto.textContent = 'Custo: ' + custo;
    

     }
})

