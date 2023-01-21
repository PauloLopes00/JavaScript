
function carregar() {
    var msg = document.querySelector(`div#msg`)
    var foto = document.querySelector(`img#foto`)
    var data = new Date()
    var hora = data.getHours()
    var hora = 122
    msg.innerHTML = `Agora são ${hora} Horas.`
    if(hora >= 0 && hora <= 12){
        //bom dia!
        foto.src = `./image/manha01.jpg`
        document.body.style.background = "#e2cd9f"
    } else if (hora >=13 && hora <= 17) {
        //boa tarde!
        foto.src = `./image/tarde01.jpg`
        document.body.style.background = "#b9846f"
    }else{
        //boa noite!
        foto.src = `./image/noite01.jpg`
        document.body.style.background = "#515154"
    }
}
