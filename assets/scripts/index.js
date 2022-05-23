let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let resetBtn = document.getElementById('reset')
let secnd = document.querySelector('.sec')
let minit = document.querySelector('.min')
let sum = 0
let minitSum = 0
let millisecond = 0
let second = 0
let minute = 0
startBtn.addEventListener('click', ()=> {
    if(sum !== 0){
        clearInterval(sum)
    }
    sum = setInterval(displayTimer, 10)
})
stopBtn.addEventListener('click', ()=> {
    clearInterval(sum)
})
resetBtn.addEventListener('click', ()=> {
    clearInterval(sum)
    millisecond = 0
    second = 0
    minute = 0
    minit.innerHTML = '00:'
    secnd.innerHTML = '00'
})
function displayTimer(){
    millisecond +=10
    console.log(millisecond)

    if(millisecond == 1000){
        millisecond = 0
        second++
        console.log("seconds: " + second)
        let s = second < 10 ? "0" + second : second;
        secnd.innerHTML = s
      
    }
        if(second == 60){
            second = 0
            minute++
            let m = minute < 10 ? "0" + minute : minute;
            minit.innerHTML = m + ':'
        }
}