const restful = require('node-restful')
const mongoose = restful.mongoose

const partipanteSchema = new mongoose.Schema({
    nome: { type: String, required: true }
})

const GrupoSchema = new mongoose.Schema({
    usuario: { type: String , required: false },
    usuarioEmail: {type: String, require: true},
    nome: { type: String, required: true },
    descricao: { type: String, default: false },
    dataCriacao: { type: Date, default: Date.now },
    diaRecebimento: { type: Number, required: false },
    diaPagamento: { type: Number, required: false },
    mesAnoInicio: { type: Date, required: false },
    mesAnoFim: { type: Date, required: false },
    valorMensal: { type: Number, required: true },
    jurosAcumulativo: { type: Boolean, required: true },
    jurosMensal: { type: Number, required: true },
    participantes: [partipanteSchema]
})

module.exports = restful.model('Grupo', GrupoSchema)