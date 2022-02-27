import { useRouter } from 'next/router'
import React, { FC } from 'react'
import RoomsLayout from '../../components/RoomsLayout'

interface IProps {

}

const Room: FC<IProps> = (props) => {
    const { query } = useRouter()
    const { id } = query

    return (
        <RoomsLayout>
            <p>{id}</p>
        </RoomsLayout>
    )
}

export default Room