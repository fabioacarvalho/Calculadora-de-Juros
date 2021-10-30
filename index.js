let ap = document.getElementsById('aporte')
let ju = document.getElementsById('rendimento')
let te = document.getElementsById('tempo')
let ti = document.getElementsById('title')

let aporte = Number(ap.value)
let juros = Number(ju)
let tempo = Number(te)
let title = Number(ti)

function calcular(aporte, juros, tempo) {
    /* prazo = (tempo/12) - 1
    totalf = (aporte * (1 + (juros/100)^prazo) ) / (juros / 100) */
    totalf = 2 * 2
    alert(aporte)

}

