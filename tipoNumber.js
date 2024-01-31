const primeiroBi = 8
const segundoBi = 6.3
const terceiroBi = -2
// Number.parseInt converte um número no formato String para o formato Int
const quartoBi = Number.parseInt('5')

const total = (primeiroBi + segundoBi + terceiroBi + quartoBi)/4
console.log("A média é " + total.toFixed(2))
// toFixed diz quantas casas depois da virgula aparecerá no console