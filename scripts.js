var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);

function alertar(event){
    alert("Voce clicou no botao!!!" + event);
}


