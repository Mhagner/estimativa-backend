const Grupo = require('../model/grupo')

module.exports = {
    async listarGrupos(req, res) {
        const grupos = await Grupo.find({})

        return res.json(grupos)
    },

    async deletarGrupo(req, res) {
        await Grupo.findByIdAndRemove(req.params.id,

            function (err, grupo) {
                if (err) return res.status(500).json({
                    success: false,
                    message: err
                })

                res.status(200).json({
                    success: true,
                    message: 'Grupo excluido com sucesso!'
                })
            })
    },

    async editarGrupo(req, res) {
        const { nome, descricao } = req.body
        await Grupo.findByIdAndUpdate(req.params.id, {
            $set: {
                nome,
                descricao
            }
        }, { new: true },

            function (err, grupo) {
                if (err) return res.status(500).json({
                    success: false,
                    message: err
                })

                res.status(200).json({
                    success: true,
                    message: 'Grupo editado com sucesso!'
                })
            })
    },

    async criarGrupo(req, res) {

        const { nome, descricao, dataCriacao, diaRecebimento,
            diaPagamento, mesAnoInicio, mesAnoFim, 
            valorMensal, jurosAcumulativo, jurosMensal, participantes, usuario } = req.body

        if (!nome || !descricao) return res.status(404).json({
            message: 'O preenchimentos dos campos é obrigatório!'
        })

        const grupo = await Grupo.create({
            nome,
            descricao,
            dataCriacao,
            diaRecebimento,
            diaPagamento,
            mesAnoInicio,
            mesAnoFim,
            valorMensal,
            jurosAcumulativo,
            jurosMensal,
            participantes,
            usuario
        },

            function (err, grupo) {
                if (err) return res.status(500).json({
                    success: false,
                    message: err
                })

                res.status(200).json({
                    success: true,
                    message: 'Grupo criado com sucesso!'
                })
            })
    }
}