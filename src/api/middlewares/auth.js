const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader)
        return res.status(401).json({ error: 'Token não foi encontrado'})

    const parts = authHeader.split(' ')

    if(!parts.lenght === 2)
        return res.status(401).json({ error: 'Token incorreto'})

    const [ scheme, token ] = parts

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).json({ error: 'Token fora do formato'})

    jwt.verify(token, process.env.SECRET, (err, decoded ) => {
        if(err)
            return res.status(401).json({ error: 'Token inválido'})

        req.userId = decoded.id
        
        return next()
    })
}