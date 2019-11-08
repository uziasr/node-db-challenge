const express = require('express')

const projectRouter = require('./data/projectRouter/projectRouter')

const server = express()

server.use(express.json())
server.use('/api/project')

module.exports = server;