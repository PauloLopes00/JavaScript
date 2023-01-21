let amigo = {nome: `José`,
Sexo: `M`,
Peso: 85.4,
Engorda(p=0){
    console.log(`Engordou`)
    this.Peso += p
}}

amigo.Engorda(2)
console.log(`${amigo.nome} pesa ${amigo.Peso}`)