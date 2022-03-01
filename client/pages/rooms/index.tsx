import { FC } from 'react'
import RoomsLayout from '../../components/RoomsLayout/RoomsLayout'

interface IProps {

}

const NoRoom: FC<IProps> = (props) => {
    return (
        <RoomsLayout style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p>Unete a una Sala de chat o crea una!</p>
        </RoomsLayout>
    )
}

export default NoRoom 