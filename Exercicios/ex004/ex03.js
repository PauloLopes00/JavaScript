var idade = '18'
console.log(`Sua Idade é de ${idade}`)
if (idade < 16){
    console.log(`não vota`)
} else if (idade < 18 || idade > 65){
    console.log (`Voto opcional`)
}else{
    console.log (`voto obrigatorio`)
}