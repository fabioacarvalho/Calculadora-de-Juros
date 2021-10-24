
let aporte = document.getElementsByName('aporte')
let juros = document.getElementsByName('rendimento')
let tempo = document.getElementsByName('tempo')
let total = ''

function calcular(aporte, juros, tempo) {
    total = (aporte * ((1 + (((juros/100))^(tempo/12)) - 1) / (juros / 100)
}