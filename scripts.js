var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");

var email = document.getElementById("email");

var Telefone = document.getElementById("Telefone");

var CEP = document.getElementById("CEP");

var Logradouro = document.getElementById("Logradouro");

var Numero = document.getElementById("Numero");

var Complemento = document.getElementById("Complemento");

var Bairro = document.getElementById("Bairro");

var Cidade = document.getElementById("Cidade");

var Estado = document.getElementById("Estado");



var saida = document.getElementById("saida-de-dados");



function alertar(event){
    
    //alert("Voce clicou no botao!!!" + " " + nome.value);
    
   // var numero = 7;
   // var resultado = numero % 2;
   // if(resultado == 0){
// alert("este número é par!");
   // }

   const url = `https://viacep.com.br/ws/${CEP.value}/json`;

   fetch(url)
   .then(function(resposta){
      return resposta.json();

   })
   .then(
      function(dadosDoEndereco){
         Logradouro.value = dadosDoEndereco.Logradouro;
         Bairro.value = dadosDoEndereco.Bairro;
         Cidade.value = dadosDoEndereco.localidade;
         Estado.value = dadosDoEndereco.uf;
         Complemento.value = dadosDoEndereco.Complemento;
       
      }
   )
 .catch(function(e){
   alert(e.message());

 });  


   saida.innerText = "Nome: " + nome.value +
   "\n Email: " + email.value +
    "\n Telefone:" + Telefone.value + 
    "\n CEP: " + CEP.value +
     "\n Logradouro: " + Logradouro.value +
     "\n Numero: " + Numero.value +
     "\n Complemento: " + Complemento.value +
     "\n Bairro: " + Bairro.value +
     "\n Cidade: " + Cidade.value +
     "\n Estado: " + Estado.value;
     


   
}