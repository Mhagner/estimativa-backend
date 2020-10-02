const restful = require('node-restful')
const mongoose = restful.mongoose

const servidores = new mongoose.Schema({
        instancia: { type: String, required: true },
        cpu: { type: String, required: true },
        ram: { type: String, required: true },
        custo: { type: String, required: true }
})

const infraSchema = new mongoose.Schema({
        data: { type: Date, required: true },
        ativo: {type: Boolean, required: true },
        servidores: [servidores]
})

module.exports = restful.model('Infra', infraSchema)