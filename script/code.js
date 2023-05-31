const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const timer = document.querySelector('#timer');
const seconds = document.querySelector('#seconds');
let secondss = 00
let tenss = 00
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
    tenss = "00"
    seconds.innerHTML = secondss
    tens.innerHTML = tenss
})

function startTheTimer(){
    tenss++

    if(tenss <= 9){
        tens.innerHTML = '0' + tenss
    }

    if(tenss > 9){
        tens.innerHTML = tenss
    }

    if (tenss > 99){
        secondss++;
        seconds.innerHTML = "0" + secondss;
        tenss = 0
        tens.innerHTML = "0" + tenss
    }

    if (secondss > 9){
        seconds.innerHTML = secondss
    }
}
