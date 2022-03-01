import React, { FC } from 'react'
import { Message as IMessage } from '../../models/models'
import Message from '../Message/Message'

export interface DateMessages {
    date: Date
    messages: Array<IMessage>
}

interface IProps {
    data: DateMessages
}

const GroupedMessages: FC<IProps> = ({ data }) => {
    return (
        <div>
            <p>{data.date.toDateString()}</p>
            {
                data.messages.map(msg => 
                    <Message key={msg.id} message={msg} />    
                )
            }
        </div>
    )
}

export default GroupedMessages