import React, { FC } from 'react'
import { Message as IMessage } from '../../models/models'
import GroupedMessages, { DateMessages } from '../GroupedMessages/GroupedMessages'
import styles from './MessagesContainer.module.css'

interface IProps {
    messages: Array<IMessage>
}

const MessagesContainer: FC<IProps> = ({ messages }) => {

    function groupByDate(messages: Array<IMessage>): Array<DateMessages> {
        /* const groups = messages.reduce((groups, msg) => {
            const date = msg.datetime.toString()
            if (!groups[date]) {
                groups[date] = []
            }
            groups[date].push(game)
            return groups
        }, {}) */
        return []
    }

    return (
        <div className={styles.container}>
            {
                groupByDate(messages).map(msgs => 
                    <GroupedMessages key={msgs.date.toDateString()} data={msgs}/>    
                )
            }
        </div>
    )
}

export default MessagesContainer