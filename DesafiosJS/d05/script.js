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
        window.alert(`okokokokokokokok`)
    }else{
        window.alert(`Por favor, Digite um Número!`)
    }
        
    }
function Finalizar(){
    if(num.value.length == 0 ){
        window.alert(`Digite Um Valor Acima!`)
    }       
}
