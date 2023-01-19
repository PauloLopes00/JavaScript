var agora = new Date()
var hora = agora.getHours()
console.log(`agora são ${hora}`)
if(hora <=12){
    console.log(`bom dia!`)
}else if (hora >=13 && hora <=17){
    console.log(`boa tarde!`)
}else if (hora >=18 || hora <=24){
    console.log(`boa noite!`)
}