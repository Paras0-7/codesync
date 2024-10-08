const express = require('express');
const http = require('http')
const {Server} = require('socket.io')

const app = express();
const server = http.createServer(app);

const io = new Server(server)

const userSocketMap = {};

const getAllConnectedClients = (roomId)=>{
   return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map((socketId)=>{
        return {
            socketId,
            userName: userSocketMap[socketId]
        }
   })
}

io.on('connection', (socket)=>{
    // console.log('Socket Connected', socket.id)


    socket.on('join', ({roomId, userName})=>{
        userSocketMap[socket.id] = userName
        socket.join(roomId);
        const clients = getAllConnectedClients(roomId);
        clients.forEach((client)=>{
            io.to(client.socketId).emit('joined', {
                clients,
                userName,
                socketId: socket.id
            })
        })
    })

    // code_change event

    socket.on('code_change', ({roomId,code})=>{
        socket.in(roomId).emit('code_change', {code} )
    })

    // disconnecting
    socket.on('disconnecting', ()=>{
        const rooms = [...socket.rooms]

        rooms.forEach((roomId)=>{
            socket.in(roomId).emit('disconnected', {
                socketId: socket.id,
                userName: userSocketMap[socket.id]
            })
        })

        delete userSocketMap[socket.id]
        socket.leave();
    })
})


app.get('/',(req,res)=>{
    res.end('Paras')
})

server.listen(8000, ()=>{
    console.log('Server Listening',)
})


