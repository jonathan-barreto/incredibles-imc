const peso = document.querySelector("#peso-input");
const altura = document.querySelector("#altura-input");
const button = document.querySelector("#button-enviar");
const ladoDireito = document.querySelector("#lado-direito-width");

button.addEventListener("click", () => {
  calcularImc(Number(peso.value), Number(altura.value));
});

const calcularImc = (peso, altura) => {
  ladoDireito.innerHTML = "";
  const imc = peso / (altura * altura);
  verificarImc(imc);
  limparCampos();
}

const verificarImc = (imc) => {
  if(imc > 40){
    criarP(`Seu IMC é: ${imc.toFixed(2)}, você está obeso de grau 3`);
    criarImg("imagens/6.png");
  } else if(imc < 39.9 && imc > 35){
    criarP(`Seu IMC é: ${imc.toFixed(2)}, você está obeso de grau 2`);
    criarImg("imagens/5.png");
  } else if(imc < 34.9 && imc > 30){
    criarP(`Seu IMC é: ${imc.toFixed(2)}, você está obeso de grau 1`);
    criarImg("imagens/4.png");
  } else if(imc < 29.9 && imc > 25){
    criarP(`Seu IMC é: ${imc.toFixed(2)}, você está com sobrepeso`);
    criarImg("imagens/3.png");
  } else if(imc < 24.9 && imc > 18.5){
    criarP(`Seu IMC é: ${imc.toFixed(2)}, você está com o peso normal`);
    criarImg("imagens/2.png");
  } else {
    criarP(`Seu IMC é: ${imc.toFixed(2)}, você está abaixo do peso`);
    criarImg("imagens/1.png");
  }
} 

const limparCampos = () => {
  peso.value = "";
  altura.value = "";
}

const criarP = (texto) => {
  const p = document.createElement("p");
  p.innerText = texto;
  ladoDireito.appendChild(p);
}

const criarImg = (caminho) => {
  const imagem = document.createElement("img");
  imagem.src = caminho;
  ladoDireito.appendChild(imagem);
}