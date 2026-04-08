const n1 =document.querySelector ('#n1');
const n2 =document.querySelector ('#n2');
const result =document.querySelector ('#result');

n1.addEventListener('input' , calcula);
n2.addEventListener('input' , calcula);

function calcula () {
    const mult = Number(n1.value) * Number(n2.value);
    result.textContent = mult;

    if (isNaN (mult)){
        result.textContent = "Erro";
    }
    else{
         result.textContent = mult;
    }
}




