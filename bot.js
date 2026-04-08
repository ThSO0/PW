const buttonProduz = document.querySelector (' #produz');
const buttonReduz = document.querySelector (' #reduz');

let pontuacao = 0;

buttonProduz.addEventListener('click', () => {
    pontuacao++;
    buttonProduz.textContent = 'Pontuação: ' + pontuacao;
})

buttonReduz.addEventListener('click', () => {
    pontuacao = pontuacao - 10;
     if (pontuacao <=0){
        pontuacao = 0;
    }

    buttonProduz.textContent = 'Pontuação: ' + pontuacao;

   
})