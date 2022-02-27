import React, { FC } from 'react'
import { Props } from '../utils/interfaces'

interface IProps extends Props {
    icon: JSX.Element
    onClick: Function
}

const IconButton: FC<IProps> = (props) => {
    return (
        <div style={{ cursor: 'pointer', ...props.style}} onClick={() => props.onClick()}>
            {props.icon}
        </div>
    )
}
export default IconButton