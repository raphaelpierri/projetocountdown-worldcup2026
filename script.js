import Countdown from "./countdown.js";

const tempoParaACopa = new Countdown ('20 November 2022 12:59:59 GMT-0300')

let daysEl = document.getElementById('days')
let hoursEl = document.getElementById('hours')
let minutesEl = document.getElementById('minutes')
let secondsEl = document.getElementById('seconds')

setInterval(() => {
    daysEl.innerHTML = formatTime(tempoParaACopa.total.days)
    hoursEl.innerHTML = formatTime(tempoParaACopa.total.hours)
    minutesEl.innerHTML = formatTime(tempoParaACopa.total.minutes)
    secondsEl.innerHTML = formatTime(tempoParaACopa.total.seconds)
}, 1000);

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

