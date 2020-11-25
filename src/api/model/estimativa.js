const restful = require('node-restful')
const mongoose = restful.mongoose

const dadosSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    item: { type: Number, required: true },
    descricao: { type: String, required: true },
    tipo: { type: String, required: true },
    requisito: { type: Number, required: true },
    desenvolvimento: { type: Number, required: true },
    testes: { type: Number, required: false },
    total: { type: Number, required: false },
})

const estimativaSchema = new mongoose.Schema({
    data: { type: String, required: true },
    numeroDaOportunidade: { type: Number, required: true },
    cliente: { type: String, required: true },
    descricaoDaOportunidade: { type: String, required: true },
    responsavelEscopo: { type: String, required: true },
    responsavelEstimativa: { type: String, required: true },
    gcs: { type: Number, required: false },
    preparacaoAmbiente: { type: Number, required: true },
    elaboracaoEscopo: { type: Number, required: true },
    homologacao: { type: Number, required: true },
    posGoLive: { type: Number, required: true },
    treinamento: { type: Number, required: false },
    horasLider: { type: Number, required: false },
    gp: { type: Number, required: true },
    reuniaoLider: { type: Number, required: false },
    reunioesDiaria: { type: Number, required: false },
    apropriacaoTime: { type: Number, required: false },
    custoInfra: { type: String, required: false },
    dados: [dadosSchema],
        
})

module.exports = restful.model('Estimativa', estimativaSchema)