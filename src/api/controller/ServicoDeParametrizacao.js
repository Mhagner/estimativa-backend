const Parametrizacao = require('../model/parametrizacao')
const mensagem = require('../common/mensagens')

Parametrizacao.methods(['get', 'post', 'put', 'delete'])

Parametrizacao.updateOptions({ new: true, runValidators: true })

module.exports = Parametrizacao