const notaFinal = 6
const faltas = 5
const advertencias = 0

if(notaFinal < 7 && faltas > 4){
    console.log("Reprovado")
}else{
    console.log("Não foi reprovado por falta")
}

if(faltas >=2 && !advertencias){
    console.log('Recebeu bonûs')
}else{
    console.log('Não recebeu bonûs')
}