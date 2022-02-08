import { createContext, useContext, useState } from 'react'
import io, { Socket } from 'socket.io-client'
import { SOCKET_URL } from '../config/default'
import { EVENTS } from '../config/sockets'

const socket = io(SOCKET_URL)

interface SocketContextType {
    socket: Socket
    username?: string  
    setUsername: Function
    messages?: any[]
    setMessages: Function
    rooms: Record<string, { name: string }>
    roomId?: string
}

const SocketContext = createContext<SocketContextType>({ 
    socket, 
    setUsername: () => false, 
    rooms: {},
    messages: [],
    setMessages: () => false
})

function SocketProvider(props: any){
    const [username, setUsername] = useState('')
    const [roomId, setRoomId] = useState('')
    const [rooms, setRooms] = useState<Record<string, { name: string }>>({})

    socket.on(EVENTS.SERVER.ROOMS, (value) => {
        setRooms(value)
    })

    socket.on(EVENTS.SERVER.JOINED_ROOM, (roomId) => {
        setRoomId(roomId)
    })

    return <SocketContext.Provider value={{ socket, username, setUsername, rooms, roomId }} {...props}/>
}

export const useSockets = () => useContext(SocketContext)

export default SocketProvider