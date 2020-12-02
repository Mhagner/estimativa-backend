const restful = require('node-restful')
const mongoose = restful.mongoose

const tipoShema = new mongoose.Schema({
    descricao: { type: String, required: true },
    cobraManutencao: { type: Boolean, required: true }
})

const parametrizacaoSchema = new mongoose.Schema({
    percentualTestes: { type: Number, required: true },
    percentualGP: { type: Number, required: true },
    percentualRetrabalhoRequisito: { type: Number, required: true },
    percentualRetrabalhoDesenvolvimento: { type: Number, required: true },
    percentualRetrabalhoTestes: { type: Number, required: true },
    percentualGPLider: { type: Number, required: true },
    tipo: [tipoShema],
      
})

module.exports = restful.model('Parametrizacao', parametrizacaoSchema)