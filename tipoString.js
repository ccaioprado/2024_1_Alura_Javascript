const estudante = "Caroline"
const docente = 'Ana'
const cumprimento = "'Nosso lema é estudar bastante!'"
const citacao = `Ju diz: "Nosso lema é estudar bastante"`

console.log(cumprimento)
console.log(citacao)
// Template string só é possivel de ser usada quando a frase é escrita entre acento agudo
console.log(`A estudante se chama ${estudante}`)

const senha = 'SenhaSegura123' + estudante.toUpperCase()
console.log(senha)

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
