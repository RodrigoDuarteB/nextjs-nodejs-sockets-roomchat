import React, { FC, useEffect, useState } from 'react'
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md'
import styles from '../../config/styles'
import { User } from '../../models/models'
import { useWindowSize } from '../../utils/hooks'
import IconButton from '../IconButton/IconButton'
import UserBadge from '../UserBadge/UserBadge'
import localStyles from './UsersRoom.module.css'

interface IProps {
    users: Array<User>
}

const UsersRoom: FC<IProps> = ({ users }) => {
    const [expanded, setExpanded] = useState(true)
    const { width } = useWindowSize()

    useEffect(() => {
        if(width >= 1024){
            setExpanded(true)
        }
    }, [width, expanded])

    return (
        <div className={localStyles.container} style={{ backgroundColor: styles.colors.secondary }}>
            <div className={localStyles.titleContainer}>
                <p>Usuarios Conectados ({users.length})</p>
                
                <div className={localStyles.expandButton}>
                    <IconButton 
                        icon={expanded ? <MdOutlineExpandLess size={25}/> : <MdOutlineExpandMore size={25}/>}
                        onClick={() => setExpanded(!expanded)}
                    />
                </div>
            </div>

            
            {expanded && 
                <div>
                    <hr />

                    <div className={localStyles.badgesContainer}>
                        {
                            users.map(user => 
                                <UserBadge key={user.username} user={user}/>    
                            )
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default UsersRoom