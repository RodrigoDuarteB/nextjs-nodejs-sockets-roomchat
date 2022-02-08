import React, { FC } from 'react'
import { useSockets } from '../context/socket.context'

interface IProps {

}

const Messages: FC<IProps> = (props) => {
    const { socket, messages, roomId, username } = useSockets()
    return (
        <div>
            <p>Messages</p>
        </div>
    )
}

export default Messages