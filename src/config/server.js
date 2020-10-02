require('dotenv').config()


const port = process.env.PORT || 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')
const morgan = require('morgan')
const path = require('path')


server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(express.json())
server.use(allowCors)
server.use(queryParser())
server.use(morgan('dev'))
//server.use(
   // '/files', 
    //express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
//)

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server