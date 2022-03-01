import React, { FC, Fragment, useRef, useState } from 'react'
import { useSockets } from '../../context/socket.context'
import IconButton from '../IconButton/IconButton'
import { GrUserSettings } from 'react-icons/gr'
import styles from './UserSettings.module.css'

interface IProps {

}

const UserSettings: FC<IProps> = (props) => {
    const { username, setUsername } = useSockets()
    const [changing, setChanging] = useState(false)
    const changeRef = useRef<any>(null)

    function handleChangeUsername() {
        const value = changeRef.current.value
        if(value){
            setUsername(value)
            localStorage.setItem('username', value)
        }
        setChanging(false)
    }

    return (
        <div className={styles.container}>
            <p className={styles.username}>Usuario: Rodrigo#0129</p>
            <IconButton 
                icon={<GrUserSettings size={28} color='#000'/>}
                onClick={() => {}}
            />
        </div>
    )

    return username ? (
        <div style={{ display: 'flex' }}>
            <p>Username: {username}</p>
            {!changing && <button onClick={() => setChanging(true)}>Change</button>}
            {
                changing &&
                <div>
                    <input type="text" ref={changeRef} />
                    <button onClick={handleChangeUsername}>Change</button>
                </div>
            }
        </div>
    ) : <Fragment />
}

export default UserSettings