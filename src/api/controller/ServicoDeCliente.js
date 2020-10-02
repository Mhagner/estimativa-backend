const Cliente = require('../model/cliente')
const mensagem = require('../common/mensagens')

Cliente.methods(['get', 'post', 'put', 'delete'])

Cliente.updateOptions({ new: true, runValidators: true })

module.exports = Cliente