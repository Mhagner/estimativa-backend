const User = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const messageUserNotFound = 'Usuário não encontrado'
const messageProcessError = 'Erro no processamento'
const messageUserAndOrInvalid = 'Usuário e/ou senha inválidos'
const messageCreateNewUser = 'Novo usuário criado com sucesso!'
const messageUserDeleted = 'Usuário excluido com sucesso!'

function generateToken(params = {}) {
    return jwt.sign(params, process.env.SECRET, { expiresIn: '1day' })
}

module.exports = {
    async listUsers(req, res) {
        const user = await User.find({})
        return res.json(user)
    },

    generateToken() {
        let tokenData = {
            id: 101
        }
        return jwt.sign(tokenData, process.env.SECRET, { expiresIn: '1day' })
    },

    createUser(req, res) {
        const { name, email, password, passwordRepeat } = req.body

        if (email !== undefined && password !== undefined && name !== undefined &&
            passwordRepeat !== undefined) {

            let hashPassword = bcrypt.hashSync(req.body.password, 8)
            let passwordEquals = bcrypt.compareSync(req.body.passwordRepeat, hashPassword)

            if (passwordEquals) {
                const user = User.findOne({ email },
                    function (err, user) {
                        if (err) return res.status(500).json({
                            success: false, message: 'Erro: ' + err
                        })

                        if (user) {
                            res.status(404).json({
                                success: false,
                                message: 'já existe um usuário cadastrado com esse e-mail'
                            })
                        } else {
                            user = User.create({
                                name,
                                email,
                                password: hashPassword
                            },
                                function (err, user) {
                                    if (err) return res.status(500).json({
                                        success: false,
                                        message: "Erro: " + err
                                    })

                                    res.status(200).json({
                                        success: true,
                                        message: 'Cadastro realizado com sucesso!',
                                    })
                                })
                        }

                    })

            } else {
                res.status(401).json({
                    success: false,
                    message: 'Senhas não conferem'
                })
            }

        } else {
            res.status(404).json({
                success: false,
                message: 'Todos os campos são obrigatórios'
            })
        }
    },

    login(req, res, next) {
        const { email, password } = req.body

        if (email === undefined || password === undefined) {
            res.status(401).json({
                success: false,
                message: "Usuário e/ou senha são obrigatórios!"
            })
        } else {
            const user = User.findOne({ email },
                function (err, user) {
                    if (err) return res.status(500).json({
                        success: false,
                        message: 'Erro: ' + err
                    })

                    if (!user) return res.status(404).json({
                        success: false,
                        message: 'O usuário informado não está cadastrado!'
                    })

                    let passwordIsValid = bcrypt.compareSync(password, user.password)

                    if (!passwordIsValid) {
                        res.status(401).json({
                            success: false,
                            message: 'A senha informada é inválida!'
                        })
                    } else {

                        let token = generateToken()

                        res.status(200).json({
                            success: true,
                            token: generateToken({ id: user.id }),
                            usuarioID: user.id,
                            usuarioEmail: user.email,
                            usuarioName: user.name
                        })
                    }
                }
            )
        }
    },

    async deleteUser(req, res) {
        await User.findByIdAndRemove(req.params.id,
            function (err, user) {
                if (err) return res.status(500).send({
                    message: messageProcessError
                })

                res.status(200).send({
                    message: messageUserDeleted
                })
            })
    }
}