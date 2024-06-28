corazones = '♥';
picas = "♠";
diamantes = '♦';
treboles = '♣';
let palos = [corazones, picas, treboles ,diamantes];
let valores = ['A', '2' , '3' ,'4', '5', '6','7','8','9','10','J','Q','K'];

const paloOfCardTop = document.getElementById("simboloSuperior");
const paloOfCardLow = document.getElementById("simboloInferior");
const valorCard = document.getElementById("valorCarta");
const valorSuperiorCard = document.getElementById("valorSuperior");
const valorInferiorCard = document.getElementById("valorInferior");
const contador = document.getElementById("cuentaRegresiva")
let generateCard = function(){
    let randomNumberSimbol = Math.floor(Math.random()*palos.length)
    simbolo = palos[randomNumberSimbol];
    if (simbolo == picas || simbolo == treboles){
        paloOfCardLow.style.color = "black"
        paloOfCardTop.style.color = "black"
        valorCard.style.color = "black"
        valorSuperiorCard.style.color = "black"
        valorInferiorCard.style.color = "black"

        
    }
    paloOfCardTop.innerHTML = `${simbolo}`;
    paloOfCardLow.innerHTML = `${simbolo}`;
    let randomNumerValor = Math.floor(Math.random()*valores.length)
    valor = valores[randomNumerValor];
    valorCard.innerHTML = `${valor}`;
    valorSuperiorCard.innerHTML = `${valor}`;
    valorInferiorCard.innerHTML = `${valor}`;

}

function loadPage(){
    
    generateCard();
    let cuentaRegresiva = 10;
    contador.innerHTML = `${": "+cuentaRegresiva + " segundos"}`;
    setInterval(()=>{
        cuentaRegresiva--;
        if(cuentaRegresiva == 0){
            generateCard();
            cuentaRegresiva = 10;
        }
        contador.innerHTML = `${": "+cuentaRegresiva + " segundos"}`;
        
    },1000);
}

let botonGenerateCard = document.getElementById("botonGenerarCarta");
botonGenerateCard.addEventListener("click",function(){
    generateCard();
});