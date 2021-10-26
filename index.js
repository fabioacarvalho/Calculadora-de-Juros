
let aporte = document.getElementsByName('aporte')
let juros = document.getElementsByName('rendimento')
let tempo = document.getElementsByName('tempo')
let total = ''

function calcular(aporte, juros, tempo) {
    prazo = (tempo/12) - 1
    total = (aporte * (1 + (juros/100)^prazo) ) / (juros / 100)
}