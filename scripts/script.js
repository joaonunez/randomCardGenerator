//Asignando valores de los simbolos de las cartas a variables
corazones = '♥';
picas = "♠";
diamantes = '♦';
treboles = '♣';
//creando arreglo con las variables que contienen los simbolos 
let palos = [corazones, picas, treboles ,diamantes];
//creando arreglo con los valores de las cartas
let valores = ['A', '2' , '3' ,'4', '5', '6','7','8','9','10','J','Q','K'];

//Declaramos variables que buscan los contenedores donde se renderizaran los simbolos y cartas en el html
const paloOfCardTop = document.getElementById("simboloSuperior"); // simbolo superior
const paloOfCardLow = document.getElementById("simboloInferior");//simbolo inferior
const valorCard = document.getElementById("valorCarta");//valor central de la carta
const valorSuperiorCard = document.getElementById("valorSuperior");//valor que va encima del simbolo superior
const valorInferiorCard = document.getElementById("valorInferior");// valor que ba debajo del simbolo inferior
const contador = document.getElementById("cuentaRegresiva")// la cuenta regresiva para cambiar  de carta
//funcion para generar la carta
let generateCard = function(){
    let randomNumberSimbol = Math.floor(Math.random()*palos.length)// creamos un numero aleatorio en base al largo del arreglo de los simbolos
    simbolo = palos[randomNumberSimbol]; // el simbolo seleccionado se asigna a una variable
    if (simbolo == picas || simbolo == treboles){// si el simbolo es picas o treboles se pintara de color negro tanto el simbolo como el valor
        paloOfCardLow.style.color = "black"
        paloOfCardTop.style.color = "black"
        valorCard.style.color = "black"
        valorSuperiorCard.style.color = "black"
        valorInferiorCard.style.color = "black"

        
    }
    paloOfCardTop.innerHTML = `${simbolo}`;//renderizamos el simbolo donde corresponde
    paloOfCardLow.innerHTML = `${simbolo}`;
    let randomNumerValor = Math.floor(Math.random()*valores.length) //creamos un numero aleatorio en base al arreglo de los valores
    valor = valores[randomNumerValor];
    valorCard.innerHTML = `${valor}`;
    valorSuperiorCard.innerHTML = `${valor}`;
    valorInferiorCard.innerHTML = `${valor}`;

}
//funcion que interactua con la recarga de la pagina
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