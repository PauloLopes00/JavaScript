function Tabuada(){
    let num = document.querySelector(`input#inum`)
    let tab = document.querySelector(`select#itabuada`)
    if(num.value.length == 0){
        window.alert(`Por favor, Digite um Número!`)
    }else{
        let n = Number(num.value)
        tab.innerHTML = ``
        for (let c = 1;c <= 10;c++){
            let item = document.createElement(`option`)
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            

        }
    }
    

}