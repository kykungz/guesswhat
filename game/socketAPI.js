import socket_io from 'socket.io'
var io = socket_io()
var socketAPI = {}


io.on('connection', (socket) => {
  console.log('socket in');
  socket.emit('hi', 'this is asdfasdfasfdasdf')
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


socketAPI.io = io

export default socketAPI
