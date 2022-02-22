import React, { FC, useRef } from 'react'
import Messages from '../components/Messages'
import Rooms from '../components/Rooms'
import UserInfo from '../components/UserInfo'
import { useSockets } from '../context/socket.context'
import styles from '../styles/Home.module.css'

interface IProps {

}

const Home: FC<IProps> = (props) => {
    const { socket, username, setUsername } = useSockets()
    const usernameRef = useRef<any>(null)

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
                <div className={styles.usernameWrapper}>
                    <div className={styles.usernameInner}>
                        <input type="text" placeholder='Username' ref={usernameRef}/>
                        <button className='cta' onClick={handleUsername}>START</button>
                    </div>
                </div>
                :
                <div className={styles.container}>
                    <div>
                        <UserInfo />
                        <Rooms />
                    </div>
                    <Messages />
                </div>
            }
        </div>
    )
}

export default Home
