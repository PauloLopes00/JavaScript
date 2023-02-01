function Adcionar(){
    let nome = String(document.querySelector(`input#nome`).value)
    let b1 = Number(document.querySelector(`input#inum1`).value)
    var b2 = Number(document.querySelector(`input#inum2`).value)
    var b3 = Number(document.querySelector(`input#inum3`).value)
    var b4 = Number(document.querySelector(`input#inum4`).value)
    var res = document.querySelector(`div#res`)
    var soma = b1 + b2 + b3 + b4
    var media = soma / 4
    
    if(media < 7){
        res.innerHTML = `${nome} Você está Reprovado`
    }else{
        res.innerHTML = `${nome} Você está Aprovado `
    }
    res.innerHTML += `<p>A média do 1° Bimestre foi ${b1}</p>`
    res.innerHTML += `<p>A média do 2° Bimestre foi ${b2}</p>`
    res.innerHTML += `<p>A média do 3° Bimestre foi ${b3}</p>`
    res.innerHTML += `<p>A média do 4° Bimestre foi ${b4}</p>`
    res.innerHTML += `A média  final foi ${media}`
}