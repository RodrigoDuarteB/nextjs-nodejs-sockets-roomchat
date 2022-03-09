import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import MessagesContainer from '../../components/MessagesContainer/MessagesContainer'
import RoomInfo from '../../components/RoomInfo/RoomInfo'
import RoomsLayout from '../../components/RoomsLayout/RoomsLayout'
import UsersRoom from '../../components/UsersRoom/UsersRoom'
import styles from '../../config/styles'
import { Message, User } from '../../models/models'
import localStyles from './[id].module.css'

interface IProps {

}

const Room: FC<IProps> = (props) => {
    const { query } = useRouter()
    const { id } = query

    const users: Array<User> = [
        {username: 'Javier'},
        {username: 'Rodrigo'},
        {username: 'Anthony'},
        {username: 'Boris'},
    ]

    const messages: Array<Message> = [
        {id: '1', datetime: new Date(), message: 'Hola como van', sendedBy: 'Javier', state: ''},
        {id: '2', datetime: new Date(), message: 'Todo bien!', sendedBy: 'Anthony', state: ''},
        {id: '3', datetime: new Date(), message: 'Cuándo nos reunimos??', sendedBy: 'Anthony', state: ''},
        {id: '4', datetime: new Date(), message: 'No sé digan cuando pueden loco', sendedBy: 'Rodrigo', state: '', responseTo: {id: '3', datetime: new Date(), message: 'Cuándo nos reunimos??', sendedBy: 'Anthony', state: ''}},
        {id: '5', datetime: new Date(), message: 'Yo puedo mañana', sendedBy: 'Rodrigo', state: ''},
        {id: '6', datetime: new Date(2022, 3, 2), message: 'Yo puedo mañana', sendedBy: 'Boris', state: ''},
    ]

    return (
        <RoomsLayout>
            <div className={localStyles.container}>
                <div className={localStyles.subcontainer}>
                    <RoomInfo 
                        room={{
                            id: '1',
                            createdAt: new Date(),
                            createdBy: 'Jorge',
                            messages: [],
                            title: 'Amigos 2021'
                        }}
                    />
                    <div className={localStyles.mobileUsers}>
                        <UsersRoom users={users}/>
                    </div>
                    <MessagesContainer messages={messages}/>
                    <MessageForm />
                </div>

                <div className={localStyles.desktopUsers}>
                    <Button text={'Dejar Sala'} color={styles.colors.primary} textColor={'white'} onClick={() => {}} />

                    <UsersRoom users={users}/>
                </div>
            </div>
        </RoomsLayout>
    )
}

const MessageForm: FC = () => {
    return (
        <div className={localStyles.formContainer}>
            <Input placeholder='Que estás Pensando?' style={{ width: '100%' }}/>
            <Button 
                text={'Enviar'} 
                color={styles.colors.primary} 
                textColor={'white'} 
                onClick={() => {}} 
            />
        </div>
    )
}

export default Room