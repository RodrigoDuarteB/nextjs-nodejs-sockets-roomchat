import React, { FC } from 'react'
import { Message as IMessage } from '../../models/models'
import GroupedMessages, { DateMessages } from '../GroupedMessages/GroupedMessages'
import styles from './MessagesContainer.module.css'

interface IProps {
    messages: Array<IMessage>
}

const MessagesContainer: FC<IProps> = ({ messages }) => {

    function groupByDate(messages: Array<IMessage>): Array<DateMessages> {
        const groups = messages.reduce<any>((groups, msg) => {
            const date = msg.datetime.toLocaleDateString()
            if (!groups[date]) {
                groups[date] = []
            }
            groups[date].push(msg)
            return groups
        }, {})

        return Object.keys(groups).map(date => {
            return {
                date,
                messages: groups[date] as Array<IMessage>
            }
        })
    }

    return (
        <div className={styles.container}>
            {
                groupByDate(messages).map(msgs => 
                    <GroupedMessages key={msgs.date} data={msgs}/>    
                )
            }
        </div>
    )
}

export default MessagesContainer