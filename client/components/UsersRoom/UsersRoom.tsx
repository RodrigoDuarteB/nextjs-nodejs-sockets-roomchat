import React, { FC } from 'react'
import { MdOutlineExpandLess } from 'react-icons/md'
import styles from '../../config/styles'
import { User } from '../../models/models'
import IconButton from '../IconButton/IconButton'
import UserBadge from '../UserBadge/UserBadge'
import localStyles from './UsersRoom.module.css'

interface IProps {
    users: Array<User>
}

const UsersRoom: FC<IProps> = ({ users }) => {
    return (
        <div className={localStyles.container} style={{ backgroundColor: styles.colors.secondary }}>
            <div className={localStyles.titleContainer}>
                <p>Usuarios Conectados ({users.length})</p>
                
                <div className={localStyles.expandButton}>
                    <IconButton 
                        icon={<MdOutlineExpandLess size={25}/>}
                        onClick={() => {}}
                    />
                </div>
            </div>

            <hr />

            <div className={localStyles.badgesContainer}>
                {
                    users.map(user => 
                        <UserBadge key={user.username} user={user}/>    
                    )
                }
            </div>
        </div>
    )
}

export default UsersRoom