let num = document.querySelector(`input#inum`)
let lista = document.querySelector(`select#iselect`)
let res = document.querySelector(`div#res`)
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false        
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false        
    }
}


function Adcionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement(`option`)
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert(`Valor Invalido ou Ja Encontrado na Lista!`)
    }
    num.value = ''
    num.focus()
        
    }
   
function Finalizar(){
    if(valores.length == 0 ){
        window.alert(`Digite Um Valor Acima!`)
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]

            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores [pos]
            
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `Ao todo temos ${tot} números`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos Valores foi ${soma}</p>`
        res.innerHTML += `<p>A Média dos Valores foi ${media}</p>`
    }       
}
