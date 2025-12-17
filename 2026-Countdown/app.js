const dayEL = document.querySelector('.day');
const hourEl = document.querySelector('.hour');
const minuteEL = document.querySelector('.minute');
const secondEL = document.querySelector('.second');
 
const NewYear = new Date('January 1, 2026 00:00:00');
 
 
function countdown() {
    const now = new Date();
 
    const timeLeft = NewYear - now;
    // console.log(timeLeft);
 
    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;
   
    const d = Math.floor(timeLeft / day);
    const h = Math.floor((timeLeft % day) / hour);
    const m = parseInt((timeLeft % hour) / min);
    const s = parseInt((timeLeft % min) / sec);
 
    dayEL.innerText = d;
    hourEl.innerText = h;
    minuteEL.innerText = m;
    secondEL.innerText = s;
 
    setTimeout(countdown, 1000);
}
 
countdown();