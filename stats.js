const { stat } = require('fs')
const os = require('os')

//funcão setinterval == a cada segundo irá atualizar a tabela

setInterval(() => {
    const {freemem, totalmem} = os //estratégia de desestruracão

const mem = parseInt(freemem() / 1024 / 1024) // memoria usada
const total = parseInt(totalmem() / 1024 / 1024) // memória total
const percents = parseInt((100 - (mem / total ) * 100)) // porcentagem da memoria usada

console.log(mem, total, percents)// mostrando resultados

const stats = {
    free: `${mem} MB`,// arrumando identacão
    total: `${total} MB`,
    usage: `${percents} %`,
}//objeto criado e estanciado

console.clear()
console.log(stats)
console.table(stats)// 


}, 1000)