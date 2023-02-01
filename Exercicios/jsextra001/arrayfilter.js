//Array filter() exemplo

let produtos = [
    {id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza'},
    {id: 2, nome: 'amaciante', valor: 2.00, categoria: 'limpeza'},
    {id: 3, nome: 'pão', valor: 3.00, categoria: 'Alimento'},
    {id: 4, nome: 'ovo', valor: 5.00, categoria: 'Alimento'},
    {id: 5, nome: 'leite', valor: 6.00, categoria: 'Alimento'}
]

let alimento = produtos.filter(produtos => produtos.categoria === 'Alimento')
//console.log(alimento.map(a => a.nome))

//prevalecendo o let produtos

let ali = produtos.filter(produtos => produtos.valor >= 3.00)
//console.log(ali)


var num = [10,18,1,15,2,12]

let maiorque10 = num.filter(num => num > 10)
//console.log(maiorque10)

var num1 = [10,18,1,15,2,12,21,33,100]
let par = num1.filter(num1 => !(num1 % 2))
let impar = num1.filter(num1 => num1 % 2)
//console.log(par.sort())
//console.log(impar.sort())



let nome = ['Bruno', 'Zezinho','Ze do peixe','Fulano', 'Douglas']

let filtranome = nome.filter(nome => nome[0] === 'Z')
//console.log(filtranome)

var convidados = [
    {nome:'Daniel',vip: true, idade: 21},
    {nome:'Felipe',vip: true, idade: 51},
    {nome:'Danilo',vip: false, idade: 31}
]

var vip = convidados.filter(con => con.vip === true)

console.log(vip)