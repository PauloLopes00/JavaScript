//Array map() exemplo

let produtos = [
    {id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza'},
    {id: 2, nome: 'amaciante', valor: 2.00, categoria: 'limpeza'},
    {id: 3, nome: 'pão', valor: 2.00, categoria: 'Alimento'},
    {id: 4, nome: 'ovo', valor: 2.00, categoria: 'Alimento'},
    {id: 5, nome: 'leite', valor: 2.00, categoria: 'Alimento'}
]

let ids = produtos.map(produtos => produtos.nome)
//console.log(ids)


//função para duplicar numero 
let num = [1,2,3,4,5]
const dupli = num.map(num => num * 2)
//console.log(dupli)

var convidados = [
    {nome:'Daniel',vip: true, idade: 21, sexo: 'M'},
    {nome:'Felipe',vip: true, idade: 51, sexo: 'M'},
    {nome:'Laura',vip: false, idade: 31, sexo: 'F'},
    {nome:'Liana',vip: false, idade: 41, sexo: 'F'}
]

var nome = convidados.map(con => Object.assign(con,{nome: con.nome.toUpperCase()}))
console.log(nome)
