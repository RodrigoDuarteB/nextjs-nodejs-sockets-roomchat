import React, { FC } from 'react'
import IconButton from '../IconButton/IconButton'
import { BiLogOut } from 'react-icons/bi'
import { HiDotsVertical } from 'react-icons/hi'
import { Room } from '../../models/models'
import styles from './RoomInfo.module.css'

interface IProps {
    room: Room
}

const RoomInfo: FC<IProps> = ({ room }) => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <p className={styles.title}>{room.title}</p>
                <p className={styles.description}>Creado el {room.createdAt.toDateString()} por {room.createdBy}</p>
            </div>

            <div className={styles.buttonsContainer}>
                <div className={styles.leaveButton}>
                    <IconButton 
                        icon={<BiLogOut size={25}/>}
                        onClick={() => {}}
                    />
                </div>
                
                <IconButton
                    icon={<HiDotsVertical size={25}/>}
                    onClick={() => {}}
                />
            </div>
        </div>
    )
}

export default RoomInfo