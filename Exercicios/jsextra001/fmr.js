var numeros = [10,18,1,15,2,12,21,33,100]

var paresdupli = numeros.filter(n => !(n % 2)).map(n => n*2)

console.log(paresdupli)