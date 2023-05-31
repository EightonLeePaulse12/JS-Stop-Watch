const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const timer = document.querySelector('#timer');
const seconds = document.querySelector('#seconds');
const minutes = document.querySelector('#minutes')
let minutess = 00
let secondss = 00
let otherZeros = 00
const tens = document.querySelector('#tens');
let empty;

start.addEventListener('click',()=>{
    clearInterval(empty)
    empty = setInterval(startTheTimer,10)
})

stop.addEventListener('click',()=>{
    clearInterval(empty)
})

reset.addEventListener('click',()=>{
    secondss = "00"
    otherZeros = "00"
    minutess = "00"
    minutes.innerHTML = minutess
    seconds.innerHTML = secondss
    tens.innerHTML = otherZeros
})

function startTheTimer(){
    otherZeros++

    if(otherZeros <= 9){
        tens.innerHTML = '0' + otherZeros
    }

    if(otherZeros > 9){
        tens.innerHTML = otherZeros
    }

    if (otherZeros > 99){
        secondss++;
        seconds.innerHTML = "0" + secondss;
        otherZeros = 0
        tens.innerHTML = "0" + otherZeros
    }

    if (secondss > 9){
        seconds.innerHTML = secondss
    }

    if (secondss > 59){
        minutess++
        minutes.innerHTML = "0" + minutess
        secondss = 0
        seconds.innerHTML = "0" + otherZeros
    }
}


console.log("GIT PROBLEMS SORTED")