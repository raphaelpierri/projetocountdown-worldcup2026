import Countdown from "./countdown.js";

const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")

const tempoParaONatal = new Countdown ('03 June 2026 12:59:59 GMT-0300')

console.log(tempoParaONatal.total)

const el = document.createElement('div')
el.innerHTML = setInterval(() => {
    console.log(tempoParaONatal.total)
}, 1000)

