/*criar o relogio*/
console.log('teste')
divclassclock = document.querySelector('.clock')
for(i=1;i<=12;i++){
    divclassclock.innerHTML += `<div class="number n${i}" style="--rotation: ${i*30}deg">${i}</div>`
}/*/criar o relogio*/

