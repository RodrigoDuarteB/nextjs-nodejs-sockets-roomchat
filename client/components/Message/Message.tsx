import React, { FC } from 'react'
import { Message as IMessage } from '../../models/models'
import IconButton from '../IconButton/IconButton'
import { HiDotsVertical } from 'react-icons/hi'

interface IProps {
    message: IMessage
}

const Message: FC<IProps> = ({ message }) => {
    return (
        <div>
            <div>
                <p>{message.sendedBy}</p>
                <IconButton 
                    icon={<HiDotsVertical />}
                    onClick={() => {}}
                />
            </div>
            <p>{message.message}</p>
            <p>{message.datetime.toDateString()}</p>
        </div>
    )
}

export default Message