import React, { FC } from 'react'
import { HiDotsVertical } from 'react-icons/hi'
import { User } from '../../models/models'
import IconButton from '../IconButton/IconButton'
import styles from './UserBadge.module.css'

interface IProps {
    user: User
}

const UserBadge: FC<IProps> = ({ user }) => {
    return (
        <div className={styles.container}>
            <p>{user.username}</p>
            <IconButton 
                icon={<HiDotsVertical />}
                onClick={() => {}}
            />
        </div>
    )
}

export default UserBadge