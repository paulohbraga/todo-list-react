const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.get('/', (req, res) => {
    res.send('Root Folder test')
})

server.listen(port, function(){
    console.log("Todo list - Server running on port 3003")
})

module.exports = server