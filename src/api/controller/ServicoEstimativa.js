const Estimativa = require('../model/estimativa')
const mensagem = require('../common/mensagens')

Estimativa.methods(['get', 'post', 'put', 'delete'])

Estimativa.updateOptions({ new: true, runValidators: true })

module.exports = Estimativa