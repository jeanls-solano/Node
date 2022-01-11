//módulos do node
const EventEmitter = require('events')
const fs = require('fs')// require trabalha com arquivos do sistema
const path = require('path')

const emitter = new EventEmitter()

emitter.on('log', (message) => { // quando o emitter for ativado, ele mostra a msg no console
    fs.appendFile(path.join(__dirname, 'log.txt'), message , err => {
        if (err) throw err
     })
})

function log(message){
    emitter.emit('log', message)
}

module.exports = log // exportar a funcao log