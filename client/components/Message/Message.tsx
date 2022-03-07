import React, { FC, useRef } from 'react'
import { Message as IMessage } from '../../models/models'
import IconButton from '../IconButton/IconButton'
import { HiDotsVertical } from 'react-icons/hi'
import { IoArrowUndoSharp } from 'react-icons/io5'
import styles from './Message.module.css'
import { getFormattedTime } from '../../utils/functions'
import MessageResponded from '../MessageResponded/MessageResponded'

interface IProps {
    message: IMessage
    sameLastUser?: boolean
}

const Message: FC<IProps> = ({ message, sameLastUser }) => {
    const user = 'Rodrigo'
    const ref = useRef<any>()
    message.ref = ref

    return (
        <div className={`${styles.container} ${message.sendedBy === user && styles.own} ${sameLastUser && styles.sameLastUser}`} ref={ref}>

            { message.responseTo && 
                <MessageResponded message={message.responseTo} />
            }

            <div className={`${styles.messageContainer} ${message.sendedBy === user && styles.ownBorder}`}>
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
        </div>
    )
}

export default Message