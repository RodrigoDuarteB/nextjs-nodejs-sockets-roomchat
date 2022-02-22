import React, { FC, Fragment, useRef, useState } from 'react'
import { useSockets } from '../context/socket.context'

interface IProps {

}

const UserInfo: FC<IProps> = (props) => {
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

export default UserInfo