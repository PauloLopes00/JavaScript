//Array reduce() exemplo

let produtos = [
    {id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza'},
    {id: 2, nome: 'amaciante', valor: 6.50, categoria: 'limpeza'},
    {id: 3, nome: 'pão', valor: 2.00, categoria: 'Alimento'},
    {id: 4, nome: 'ovo', valor: 7.00, categoria: 'Alimento'},
    {id: 5, nome: 'leite', valor: 2.20, categoria: 'Alimento'}
]

const total = produtos.reduce((acumulado, p) => acumulado.concat(p * 2), [] )

console.log(total)


//let numero = [1,2,3,4]

//const total = numero.reduce((acumulado, numero) => acumulado + numero)

//console.log(total)

