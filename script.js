import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown ('20 November 2022 12:59:59 GMT-0300')

console.log(tempoParaONatal.total)

setInterval(() => {
    console.log(tempoParaONatal.total)
}, 1000)