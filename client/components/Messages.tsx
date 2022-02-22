import React, { FC, Fragment, useEffect, useRef } from 'react'
import { EVENTS } from '../config/sockets'
import { useSockets } from '../context/socket.context'
import styles from '../styles/Messages.module.css'

interface IProps {

}

const Messages: FC<IProps> = (props) => {
    const { socket, messages, roomId, username, setMessages } = useSockets()
    const messageInput = useRef<any>(null)
    const messageEndRef = useRef<any>()

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    function handleSendMessage(){
        const message = messageInput.current.value
        if(String(message).trim()){
            socket.emit(EVENTS.CLIENT.SEND_ROOM_MESSAGE, {
                roomId,
                message,
                username
            })

            var date: Date = new Date()

            setMessages([...messages, {
                username,
                message,
                time: `${date.getHours()}:${date.getMinutes()}`
            }])
        }
        messageInput.current.value = ''
        messageInput.current.focus()
    }
    
    return roomId ? (
        <div className={styles.wrapper}>
            <div className={styles.messageList}>
                {
                    messages.map((message, index) => 
                    <div className={styles.message} key={index}>
                        <div className={styles.messageInner}>
                            <span className={styles.messageSender}>{message.username} - {message.time}</span>
                            <span className={styles.messageBody}>{message.message}</span>
                        </div>
                    </div>
                    )
                }
                <div ref={messageEndRef}/>
            </div>

            <div className={styles.messageBox}>
                <textarea name="" id="" rows={1} placeholder="Tell us what are you thinking" 
                    ref={messageInput}
                />

                <button onClick={handleSendMessage}>SEND</button>
            </div>
        </div>
    ) : <Fragment />
}

export default Messages