const restful = require('node-restful')
const mongoose = restful.mongoose


const clienteSchema = new mongoose.Schema({
        descricao: { type: String, required: true },
        tipo: { type: String, required: true },
        colaboradores: { type: Number, required: true }
})

module.exports = restful.model('Cliente', clienteSchema)