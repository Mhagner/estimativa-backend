const mongoose = require('mongoose')

mongoose.Promise = global.Promise
module.exports = mongoose.connect("mongodb://root:m101520@estimativa-solper-shard-00-00.6nn8e.mongodb.net:27017,estimativa-solper-shard-00-01.6nn8e.mongodb.net:27017,estimativa-solper-shard-00-02.6nn8e.mongodb.net:27017/estimativa_solper?ssl=true&replicaSet=atlas-93x108-shard-0&authSource=admin&retryWrites=true&w=majority",
{useMongoClient: true})

//Tratamento das mensagens de erro
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = 
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = 
    "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = 
    "'{VALUE}' não é válido para o atributo '{PATH}'."