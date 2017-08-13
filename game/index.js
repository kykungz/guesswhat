import { generateRoomId } from '../libraries/util'
import Room from './Room'

const game = {
  rooms: [new Room(['1', '2'])],
  hasRoom (id) {
    return this.rooms.find((room) => {
      console.log(room.id, id)
      return room.id === id
    })
  },
  create (words) {
    let room = new Room(words)
    this.rooms.push(room)
    return room
  },
  remove (id) {
    this.rooms.splice(rooms.indexOf(id),1)
  }
}

export default game
