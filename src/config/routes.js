const express = require('express')
const bcrypt = require('bcryptjs')
//const multerConfig = require('../config/multer')
//const multer = require('multer')
//const authMiddleware = require('../api/middlewares/auth')

module.exports = function (server) {

    // Definir URL base para todas as rotas 
    const router = express.Router()
    //const routerAuth = express.Router()

    server.use('/api', router)
    //server.use('/auth', routerAuth)

    //router.use(authMiddleware)

    //rotas de autenticação e usuários
    const ServicoAdm = require('../api/controller/ServicoAdm')
    router.post('/registrar', ServicoAdm.createUser)
    router.post('/login', ServicoAdm.login)

    router.delete('/usuarios/:id', ServicoAdm.deleteUser)
    router.get('/usuarios', ServicoAdm.listUsers)

    //rotas de clientes
    const cliente = require('../api/controller/ServicoDeCliente')
    cliente.register(router, '/clientes')

    //Rotas de infra
    const infra = require('../api/controller/ServicoDeInfra')
    infra.register(router, '/infra')

    //Estimativas
    const estimativa = require('../api/controller/ServicoEstimativa')
    estimativa.register(router, '/estimativas')
}