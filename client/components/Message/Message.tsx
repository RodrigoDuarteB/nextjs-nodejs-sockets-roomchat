import React, { FC } from 'react'
import { Message as IMessage } from '../../models/models'
import IconButton from '../IconButton/IconButton'
import { HiDotsVertical } from 'react-icons/hi'
import styles from './Message.module.css'

interface IProps {
    message: IMessage
}

const Message: FC<IProps> = ({ message }) => {
    const user = 'Rodrigo'

    return (
        <div className={`${styles.container} ${message.sendedBy === user && styles.own}`}>
            <div className={styles.username}>
                <p>{message.sendedBy}</p>
                <IconButton 
                    icon={<HiDotsVertical />}
                    onClick={() => {}}
                />
            </div>

            <p>{message.message}</p>
            <p className={styles.time}>{message.datetime.toLocaleTimeString()}</p>
        </div>
    )
}

export default Message