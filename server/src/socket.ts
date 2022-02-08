import { Server, Socket } from "socket.io"
import logger from './utils/logger'
import { nanoid } from 'nanoid'

const EVENTS = {
    GENERAL: {
        CONNECTION: 'connection'
    },
    CLIENT: {
        CREATE_ROOM: 'CREATE_ROOM'
    },
    SERVER: {
        ROOMS: 'ROOMS',
        JOINED_ROOM: 'JOINED_ROOM'
    } 
}

const rooms: Record<string, { name: string }> = {}

function socket({ io }: { io: Server}){
    logger.info('Sockets Enabled')

    io.on(EVENTS.GENERAL.CONNECTION, (socket: Socket) => {
        logger.info(`User connected: ${socket.id}`)

        socket.on(EVENTS.CLIENT.CREATE_ROOM, ({ roomName }) => {
            console.log(roomName)
            //create room id
            const roomId = nanoid()

            //add new room to rooms object
            rooms[roomId] = {
                name: roomName
            }
            socket.join(roomId)

            //broadcast an event saying there is a new room
            socket.broadcast.emit(EVENTS.SERVER.ROOMS, rooms)

            //emit back to the room creator with all the rooms
            socket.emit(EVENTS.SERVER.ROOMS, rooms)
            
            //emit event back the room creator saying they have joined a room
            socket.emit(EVENTS.SERVER.JOINED_ROOM, roomId)

        })
    })
}

export default socket