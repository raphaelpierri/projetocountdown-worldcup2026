import Countdown from "./countdown.js";

<<<<<<< HEAD
const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")

const tempoParaONatal = new Countdown ('03 June 2026 12:59:59 GMT-0300')
=======
const tempoParaACopa = new Countdown ('03 June 2026 12:59:59 GMT-0300')
>>>>>>> 86ffbda0b9781598ad5f85863bea65c453d23ab3

let daysEl = document.getElementById('days')
let hoursEl = document.getElementById('hours')
let minutesEl = document.getElementById('minutes')
let secondsEl = document.getElementById('seconds')

<<<<<<< HEAD
const el = document.createElement('div')
el.innerHTML = setInterval(() => {
    console.log(tempoParaONatal.total)
}, 1000)
=======
setInterval(() => {
    daysEl.innerHTML = formatTime(tempoParaACopa.total.days)
    hoursEl.innerHTML = formatTime(tempoParaACopa.total.hours)
    minutesEl.innerHTML = formatTime(tempoParaACopa.total.minutes)
    secondsEl.innerHTML = formatTime(tempoParaACopa.total.seconds)
}, 1000);

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
>>>>>>> 86ffbda0b9781598ad5f85863bea65c453d23ab3

