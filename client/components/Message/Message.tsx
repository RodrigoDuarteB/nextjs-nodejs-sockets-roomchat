import React, { FC } from 'react'
import { Message as IMessage } from '../../models/models'
import IconButton from '../IconButton/IconButton'
import { HiDotsVertical } from 'react-icons/hi'
import { IoArrowUndoSharp } from 'react-icons/io5'
import styles from './Message.module.css'
import { getFormattedTime } from '../../utils/functions'

interface IProps {
    message: IMessage
    sameLastUser?: boolean
}

const Message: FC<IProps> = ({ message, sameLastUser }) => {
    const user = 'Rodrigo'

    return (
        <div className={`${styles.container} ${message.sendedBy === user && styles.own} ${sameLastUser && styles.sameLastUser}`}>
            <div className={`${styles.top}`}>
                <p className={`${sameLastUser && styles.usernameHidden}`}>
                    {user === message.sendedBy ? 'Tu' : message.sendedBy }
                </p>
                
                <IconButton 
                    icon={<HiDotsVertical />}
                    onClick={() => {}}
                />
            </div>

            <p className={`${styles.message}`}>{message.message}</p>
            
            <div className={styles.bottom}>
                <IconButton 
                    icon={<IoArrowUndoSharp />}
                    onClick={() => {}}
                />
                
                <p className={styles.time}>{getFormattedTime(message.datetime)}</p>
            </div>
        </div>
    )
}

export default Message