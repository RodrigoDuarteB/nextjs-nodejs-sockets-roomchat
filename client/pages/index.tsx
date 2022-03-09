import React, { FC, useRef } from 'react'
import Button from '../components/Button/Button'
import Container from '../components/Container'
import Input from '../components/Input/Input'
import Messages from '../components/Messages'
import Rooms from '../components/Rooms'
import UserSettings from '../components/UserSettings/UserSettings'
import { useSockets } from '../context/socket.context'
import styles from '../styles/Home.module.css'
import globalStyles from '../config/styles'
import { useWindowSize } from '../utils/hooks'

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
                        style={{
                            marginBottom: '1rem'
                        }}
                    />

                    <Button 
                        text='Crear Usuario'
                        color={globalStyles.colors.primary}
                        textColor={globalStyles.colors.secondaryLight}
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
                        <UserSettings />
                        <Rooms />
                    </div>
                    <Messages />
                </div>
            }
        </div>
    )
}

export default Home
