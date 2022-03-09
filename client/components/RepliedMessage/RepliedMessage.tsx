import { FC, MutableRefObject } from 'react'
import { Message } from '../../models/models'
import { scrollToRef } from '../../utils/functions'
import styles from './RepliedMessage.module.css'  

interface IProps {
    message: Message
}

const RepliedMessage: FC<IProps> = ({ message }) => {
    const user = 'Rodrigo'

    return (
        <div className={styles.container}>
            <p>En respuesta a: </p>

            <div className={styles.messageContainer} onClick={() => scrollToRef(message.ref)}>
                <p>{user === message.sendedBy ? 'Tú' : message.sendedBy}</p>
                <p className={styles.message}>{message.message}</p>
            </div>
        </div>
    )
}

export default RepliedMessage