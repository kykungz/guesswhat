import socket_io from 'socket.io'
import game from './'

const io = socket_io()

io.on('connection', (socket) => {

  socket.on('play', (data) => {
    let roomId = data.roomId
    console.log('room id is', roomId);
    socket.join(roomId)
    io.in(roomId).emit('test', 'hi from channel ' + roomId)
  })

  socket.on('status', (data) => {
    let roomId = data.roomId
    socket.join(roomId)
  })

  socket.on('remote', (data) => {
    let roomId = data.roomId
    socket.join(roomId)
  })
})

export default io
