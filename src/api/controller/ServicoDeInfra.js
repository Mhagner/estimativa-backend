const Infra = require('../model/infra')
const mensagem = require('../common/mensagens')

Infra.methods(['get', 'post', 'put', 'delete'])

Infra.updateOptions({ new: true, runValidators: true })

module.exports = Infra

/* module.exports = {
    async listarInfra(req, res) {
        const infra = await Infra.find({})

        return res.json(infra)
    },

    async cadastrarInfra(req, res) {
        const { data, ativo, servidores } = req.body

        const infra = Infra.findOne({ instancia },
            function (err, infra) {
                if (err) return res.status(500).json({
                    success: false, message: 'Erro: ' + err
                })

                if (infra) {
                    res.status(404).json({
                        success: false,
                        message: mensagem.INFRA_JA_CADASTRADA
                    })
                } else {
                    infra = Infra.create({
                       data,
                       ativo,
                       servidores
                    },
                        function (err, infra) {
                            if (err) return res.status(500).json({
                                success: false,
                                message: "Erro: " + err
                            })

                            res.status(200).json({
                                success: true,
                                message: mensagem.INFRA_CADASTRADA,
                            })
                        })
                }

            })
    },

    async editarValorInfra(req, res) {
        const { custo } = req.body
        const id = req.params.id
        await Infra.findOneAndUpdate(id,
            {
                custo
            },
            { new: true },
            function (err, infra) {
                if (err) return res.status(500).json({
                    success: false,
                    message: err + " erro aqui"
                })

                res.status(200).json({
                    success: true,
                    message: mensagem.INFRA_CUSTO_ALTERADO
                })
            })
    },



} */