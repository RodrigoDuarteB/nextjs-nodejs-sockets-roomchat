import { FC, useEffect, useState } from 'react'
import styles from '../../config/styles'
import Button from '../Button/Button'
import Input from '../Input/Input'
import RoomsList from '../RoomsList/RoomsList'
import UserSettings from '../UserSettings/UserSettings'
import navbarStyles from './MainNavbar.module.css'
import { Room } from '../../models/models'
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md'
import IconButton from '../IconButton/IconButton'

interface IProps {

}

const MainNavbar: FC<IProps> = (props) => {
    const [expanded, setExpanded] = useState(true)
    const rooms: Array<Room> = [
        { id: '1', createdAt: new Date(), createdBy: '1', title: 'Sala de Rodrigo', messages: [] },
        { id: '2', createdAt: new Date(), createdBy: '2', title: 'Sala de Javier', messages: [] },
        { id: '3', createdAt: new Date(), createdBy: '3', title: 'Reunión', messages: [] },
        { id: '4', createdAt: new Date(), createdBy: '4', title: 'Sobre la tercera guerra mundial', messages: [] },
        { id: '5', createdAt: new Date(), createdBy: '5', title: 'Tareas', messages: [] },
    ]

    return (
        <div className={`container ${navbarStyles.container}`}>
            <CreateRoomContainer visible={expanded}/>
            {expanded &&
                <div>
                    <hr className={navbarStyles.hr}/>
                    <RoomsListsContainer rooms={rooms}/>
                </div>
            }
            <div className={navbarStyles.expandButton}>
                <IconButton 
                    icon={expanded ? <MdOutlineExpandLess size={35} /> : <MdOutlineExpandMore size={35} />}
                    onClick={() => setExpanded(!expanded)}
                />
            </div>
        </div>
    )
}

interface CreateRoomContainerProps {
    visible?: boolean
}

const CreateRoomContainer: FC<CreateRoomContainerProps> = (props) => {
    return (
        <div>
            <UserSettings />
            
            {props.visible && 
                <div className={navbarStyles.formRoomContainer}>
                    <Input placeholder='Ex Sala de Rodrigo'/>
                    <Button 
                        text='Crear Sala' 
                        color={styles.colors.primary} 
                        textColor='white'
                        onClick={() => {}}
                    />
                </div>
            }
        </div>
    )
}

interface IPropsRoomsListsContainer {
    rooms: Array<any>
}

const RoomsListsContainer: FC<IPropsRoomsListsContainer> = (props) => {
    return (
        <div>
            <RoomsList title='Mis Salas' rooms={[props.rooms[0]]}/>
            <hr className={navbarStyles.hr}/>
            <RoomsList title='Otras Salas' rooms={props.rooms.slice(1)}/>
        </div>
    )
}

export default MainNavbar