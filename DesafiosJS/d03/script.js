function contar(){
    var inicio = document.querySelector(`input#inicioi`)
    var fim = document.querySelector(`input#fimi`)
    var passo = document.querySelector(`input#passoi`)
    var res = document.querySelector(`div#res`)

    if(inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0){
        res.innerHTML = `impossivel contar!`
    }else{
        res.innerHTML = `Contando:`
        var ini = Number(inicio.value)
        var fi = Number(fim.value)
        var pas = Number(passo.value)
        if (pas <= 0){
            window.alert("impossivel contar! considerando o passo 1")
            pas = 1
        }
        if(ini < fi){
            for(let c = ini; c <= fi; c += pas){
                res.innerHTML += `${c}\u{1F449}`

            }
        }else{
            for(let c = ini; c >= fi; c -= pas){
                res.innerHTML += `${c}\u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

