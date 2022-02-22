import React, { FC, useRef } from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import Input from '../components/Input'
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
        <div className={styles.container}>
            
            <Container style={{ display: 'flex', flexDirection: 'column' }}>
                
                <div className={styles.formContainer}>
                    <Input 
                        placeholder='Ex: Rodrigo'
                    />

                    <Button 
                        text='Crear Usuario'
                        color='#8A2BE2'
                        textColor='white'
                        onClick={() => {}}                
                    />
                </div>
            </Container>
        </div>
    )

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
