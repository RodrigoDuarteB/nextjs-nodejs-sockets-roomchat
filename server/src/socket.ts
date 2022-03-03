import { Server, Socket } from "socket.io"
import logger from './utils/logger'
import { nanoid } from 'nanoid' 

export const EVENTS = {
    GENERAL: {
        CONNECTION: 'connection'
    },
    CLIENT: {
        CREATE_ROOM: 'CREATE_ROOM',
        SEND_ROOM_MESSAGE: 'SEND_ROOM_MESSAGE',
        JOIN_ROOM: 'JOIN_ROOM'
    },
    SERVER: {
        ROOMS: 'ROOMS',
        JOINED_ROOM: 'JOINED_ROOM',
        ROOM_MESSAGE: 'ROOM_MESSAGE'
    } 
}

const rooms: Record<string, { name: string }> = {}

function socket({ io }: { io: Server}){
    logger.info('Sockets Enabled')

    io.on(EVENTS.GENERAL.CONNECTION, (socket: Socket) => {
        logger.info(`User connected: ${socket.id}`)

        socket.emit(EVENTS.SERVER.ROOMS, rooms)
        
        /* 
            When a user creates a room
        */
        socket.on(EVENTS.CLIENT.CREATE_ROOM, ({ roomName }) => {
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

        /* 
            When a user sends a room message
        */
        socket.on(EVENTS.CLIENT.SEND_ROOM_MESSAGE, ({ roomId, message, username }) => {
            const date = new Date()
            socket.to(roomId).emit(EVENTS.SERVER.ROOM_MESSAGE, {
                message,
                username,
                time: `${date.getHours()}:${date.getMinutes()}` 
            })
        })

        /* 
            When a user joins a room
        */
        socket.on(EVENTS.CLIENT.JOIN_ROOM, (roomId) => {
            socket.join(roomId)
            socket.emit(EVENTS.SERVER.JOINED_ROOM, roomId)
        })
    })
}

export default socket