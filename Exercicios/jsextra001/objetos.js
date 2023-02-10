// objetos 

let funcionario = {
    nome:"felipe", idade: 37, numRegistro: '12345B', depatarmento: 'TI', historico: [],
    Eventos: [
        {evento: `faltou`, data: '18/05/2009'},
        {evento: `Brigou com o chefe`, data: '18/06/2009'}
    ], 
    detalhes: {
        hobies:['Skate', 'basquete']
    },
    horarios:[],
    registraEntrada: function(data){
        this.horarios.push({data: data, evento: 'Entrada'})
        console.log(`entrada ás ${data} - ${this.numRegistro}`)
    },
    registraSaida: function(data){
        this.horarios.push({data: data, evento: 'saida'})
        console.log(` Saída ás ${data} - ${this.numRegistro}`)
    }
}

funcionario.registraEntrada('06/09/2022')

//console.log(funcionario.nome)
//console.log(funcionario.detalhes.hobies)

//console.log(funcionario.Eventos[0].data)
