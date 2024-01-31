const primeiroBi = 8
const segundoBi = 6.3
const terceiroBi = 7
// Number.parseInt converte um número no formato String para o formato Int
const quartoBi = 9.3

let media = (primeiroBi + segundoBi + terceiroBi + quartoBi)/4

if(media >= 7){
    media += media * 0.1 
}

console.log(`A media é ${media.toFixed(2)}`)
// toFixed diz quantas casas depois da virgula aparecerá no console
