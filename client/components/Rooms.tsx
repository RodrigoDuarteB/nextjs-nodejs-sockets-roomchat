import React, { FC, useRef } from 'react'
import { EVENTS } from '../config/sockets'
import { useSockets } from '../context/socket.context'
import styles from '../styles/Room.module.css'

interface IProps {

}

const Rooms: FC<IProps> = (props) => {
    const { socket, rooms, roomId } = useSockets()
    const newRoomRef = useRef<any>(null)

    function createRoom() {
        const roomName = newRoomRef.current.value || ''
        if(String(roomName).trim()){
            //emit event of created room
            socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName })
            newRoomRef.current.value = ''
        }
    }

    function joinRoom(key: string) {
        if(key !== roomId){
            socket.emit(EVENTS.CLIENT.JOIN_ROOM, key)
        }
    }

    return (
        <nav className={styles.wrapper}>
            <div className={styles.createRoomWrapper}>
                <input type="text" placeholder='Room Name' ref={newRoomRef}/>
                <button className="cta" onClick={createRoom}>Create Room</button>
            </div>

            <ul className={styles.roomList}>
            {
                Object.keys(rooms).map(key => {
                    return (
                        <div key={key}>
                            <button 
                                onClick={() => joinRoom(key)}
                                disabled={roomId === key}
                                title='Join'
                            >
                                {rooms[key].name}
                            </button>
                        </div>
                    )
                })
            }
            </ul>
        </nav>
    )
}

export default Rooms