function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.querySelector(`input#ano`)
    var res = document.querySelector(`div#res`)
    var img = document.createElement(`img`)
    if(nasc.value.length == 0 || nasc.value > ano){
        window.alert(`Verifique Seus Dados`)
    }else{
        var fsex = document.getElementsByName(`sexo`)
        var idade = ano - Number(nasc.value)
        var genero = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)
        if(fsex[0].checked){
            genero = `Homem` 
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute(`src`,`./image/criança.jpg`)
                img.style.borderRadius = '50%'
            }else if (idade < 21) {
                //Jovem
            }else if (idade < 50){
                //adulto
            }else{
                // idoso
            }
        }else if (fsex[1].checked){
            genero = `Mulher`
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute(`src`,`./image/criançaf.jpg`)
                img.style.borderRadius = '100%'
            }else if (idade < 21) {
                //Jovem
            }else if (idade < 50){
                //adulto
            }else{
                // idoso
            }
        }
        res.style.textAlign = `Center`
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)
    }
}