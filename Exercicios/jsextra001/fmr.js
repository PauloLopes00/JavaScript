var numeros = [10,18,1,15,2,12,21,33,100]

var paresdupli = numeros.filter(n => !(n % 2)).map(n => n*2)

//console.log(paresdupli)

let produtos = [
    {id: 1, nome: 'camisa',categoria: 'roupa', valor: 1.65},
    {id: 2, nome: 'Bola',categoria: 'Esporte', valor: 1.65},
    {id: 3, nome: 'Calção',categoria: 'roupa', valor: 1.65},
    {id: 4, nome: 'Chuteira',categoria: 'Esporte', valor: 1.65},
    {id: 5, nome: 'Cueca',categoria: 'roupa', valor: 1.65}
]

var produtosf = produtos.filter(item => item.categoria == 'Esporte',item => groupBy('nome'))

console.log(produtosf)

