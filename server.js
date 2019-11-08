const express = require('express')

const projectRouter = require('./data/projectRouter/projectRouter.js')

const server = express()

server.use(express.json())
server.use('/api/project', projectRouter)

module.exports = server;