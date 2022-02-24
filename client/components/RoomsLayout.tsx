import React, { FC } from 'react'
import { Props } from '../utils/interfaces'

interface IProps extends Props {

}

const RoomsLayout: FC<IProps> = (props) => {
    return (
        <div>
            <p>Layout</p>
            {props.children}
        </div>
    )
}

export default RoomsLayout