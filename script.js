/*criar o relogio*/
console.log('teste')
divclassclock = document.querySelector('.clock')
for(i=1;i<=12;i++){
    divclassclock.innerHTML += `<div class="number n${i}" style="--rotation: ${i*30}deg">${i}</div>`
}/*/criar o relogio*/

setInterval(setData, 1000)

const hora = document.querySelector('[ponteiro-hora]')
const minuto = document.querySelector('[ponteiro-minuto]')
const segundo = document.querySelector('[ponteiro-segundo]')

function setData(){
    var data = new Date()
    var segundos = data.getSeconds()/60
    var minutos = (segundos + data.getMinutes())/60
    var horas = (minutos + data.getHours())/12
    setRotacao(segundo, segundos)
    setRotacao(minuto, minutos)
    setRotacao(hora, horas)
}

function setRotacao(elemento, rotacao){
    elemento.style.setProperty('--rotation', rotacao*360)
}

setData()