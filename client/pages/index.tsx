import React, { FC, useRef } from 'react'
import Messages from '../components/Messages'
import Rooms from '../components/Rooms'
import { useSockets } from '../context/socket.context'

interface IProps {

}

const Home: FC<IProps> = (props) => {
    const { socket, username, setUsername } = useSockets()
    const usernameRef = useRef(null)

    function handleUsername() {
        const value = usernameRef.current.value
        if(value){
            setUsername(value)
            localStorage.setItem('username', value)
        }
    }

    return (
        <div>
            {!username ?
                <div className="">
                    <input type="text" placeholder='Username' ref={usernameRef}/>
                    <button onClick={handleUsername}>START</button>
                </div>
                :
                <div className="">
                    <Rooms />
                    <Messages />
                </div>
            }
        </div>
    )
}

export default Home
