import Link from 'next/link'
import React, { FC } from 'react'
import { Room } from '../models/models'
import { Props } from '../utils/interfaces'
import Button from './Button'
import styles from './RoomsList.module.css'

interface IProps extends Props{
    title: string
    rooms: Array<Room>
}

const RoomsList: FC<IProps> = (props) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{props.title} ({props.rooms.length})</p>
            <div className={styles.roomsContainer}>
                {
                    props.rooms.map(room => 
                        <Link href={`/rooms/${room.id}`} key={room.id}>
                            <a className={styles.roomButton}>
                                <Button 
                                    text={room.title.length > 8 ? `${room.title.substring(0, 7)}..` : room.title } 
                                    color={'black'} 
                                    textColor={'white'}
                                    style={{
                                        width: '8rem'
                                    }} 
                                    onClick={() => {}} 
                                />
                            </a>
                        </Link>    
                    )
                }
            </div>
        </div>
    )
}

export default RoomsList