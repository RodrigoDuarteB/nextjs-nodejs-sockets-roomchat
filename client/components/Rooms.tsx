import React, { FC, useRef } from 'react'
import { EVENTS } from '../config/sockets'
import { useSockets } from '../context/socket.context'

interface IProps {

}

const Rooms: FC<IProps> = (props) => {
    const { socket, rooms } = useSockets()
    const newRoomRef = useRef(null)

    function createRoom() {
        const roomName = newRoomRef.current.value || ''
        if(String(roomName).trim()){
            //emit event of created room
            socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName })
            newRoomRef.current.value = ''
        }
    }

    return (
        <nav>
            <div className="">
                <input type="text" placeholder='Room Name' ref={newRoomRef}/>
                <button onClick={createRoom}>Create Room</button>
            </div>

            {
                Object.keys(rooms).map(key => {
                    return (
                        <div className="" key={key}>
                            {rooms[key].name}
                        </div>
                    )
                })
            }
        </nav>
    )
}

export default Rooms