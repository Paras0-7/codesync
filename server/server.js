const express = require('express');
const http = require('http')
const {Server} = require('socket.io')

const app = express();
const server = http.createServer(app);

const io = new Server(server)

io.on('connection', (socket)=>{
    console.log('Socked Connected', socket.id)
})


app.get('/',(req,res)=>{
    res.end('Paras')
})

server.listen(8000, ()=>{
    console.log('Server Listening',)
})


