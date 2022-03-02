import React, { FC } from 'react'
import { Message as IMessage } from '../../models/models'
import Message from '../Message/Message'
import styles from './GroupedMessages.module.css'

export interface DateMessages {
    date: string
    messages: Array<IMessage>
}

interface IProps {
    data: DateMessages
}

const GroupedMessages: FC<IProps> = ({ data }) => {
    return (
        <div className={styles.container}>
            <p className={styles.date}>{data.date}</p>
            {
                data.messages.map(msg => 
                    <Message key={msg.id} message={msg} />    
                )
            }
        </div>
    )
}

export default GroupedMessages