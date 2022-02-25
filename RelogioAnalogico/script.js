const ponteirohora = document.querySelector("#hour");
const ponteirominuto = document.querySelector("#minute");
const ponteirosegundo = document.querySelector("#second");

var date = new Date();
console.log(date);


let hr = date.getHours();
let min = date.getMinutes();
let seg = date.getSeconds();
console.log("Hora: " + hr + " Minuto: " + min + " Segundo: " + seg);

let posicaohr = (hr*360/12)+(min*(360/60)/12);
let posicaomin = (min*360/60)+(seg*(360/60)/60);
let posicaoseg = seg*360/60;

function executarRelogio() 
{
    posicaohr = posicaohr+(3/360);
    posicaomin = posicaomin+(6/60);
    posicaoseg = posicaoseg+6;
    ponteirohora.style.transform = "rotate(" + posicaohr + "deg)";
    ponteirominuto.style.transform = "rotate(" + posicaomin + "deg)";
    ponteirosegundo.style.transform = "rotate(" + posicaoseg + "deg)";
}

var intervalo = setInterval(executarRelogio, 1000);