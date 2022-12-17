const express = require('express')
const http = require('http')
const cors = require('cors')
const socketIO = require('socket.io')
const router = require('./router')

const app = express()
const server = http.createServer(app)
app.use(express.json())
app.use(cors())
const io = socketIO(server)

app.use(router)

server.listen(3000)

let connectUsers = []

io.on('connection', (socket)=>{
    console.log("Conexão detectada!")

    socket.on("join-request", (username)=>{
        socket.username = username
        connectUsers.push(username)
        console.log(connectUsers)

        socket.emit('user-ok', connectUsers)
    })
})