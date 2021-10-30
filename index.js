
new Vue({
    el: '#app',
    data: {
        titulo: 'Calculadora de Juros Compostos',
        aporte: '',
        i: '',
        n: '',
        iMes: '',
        valorFuturo: '',
        jurosCompostos: '',
        totalAporte: '',
        calcaulado: false
    },
    methods: {
        calcular() {

            if(this.i) {
                this.iMes = (this.i /100) / 12
            }

            calc1 = ((1 + this.iMes) ** this.n - 1)
            calc2 = calc1 / this.iMes
            vf = this.aporte * calc2

            /* TESTE */
            /* this.valorFuturo = (`i: ${this.i} | iMes: ${this.iMes} | calc1: ${calc1} | calc2: ${calc2} | vf: ${vf}`) */
            
            this.totalAporte = (this.aporte * this.n).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            this.valorFuturo = vf.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            this.jurosCompostos = (vf - (this.aporte * this.n)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})


            this.calcaulado = true

        },
        novoCalculo() {
            this.calcaulado = false
            this.aporte = ''
            this.i = ''
            this.n = ''

        },

    }
})